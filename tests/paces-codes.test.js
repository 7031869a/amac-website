// Run: node --test "tests/*.test.js"   (also runs in CI, .github/workflows/audit.yml)
// PACES station codes: R<round>-NN(N) (round 2 to 5) and X-NN are accepted; everything else is not.
// R-codes keep their existing order; X-codes sort after them, in numeric order.

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { PACES_ID_RE, PACES_FILE_RE, comparePacesIds, validate, buildIndex } = require('../build-paces-index.js');

test('accepts R<round>-NN and X-NN codes', () => {
  for (const id of ['R2-01', 'R3-13', 'R5-261', 'R5-110', 'X-03', 'X-40']) {
    assert.ok(PACES_ID_RE.test(id), `${id} should be accepted`);
    assert.ok(PACES_FILE_RE.test(`${id}.json`), `${id}.json should be accepted`);
  }
});

test('rejects malformed codes', () => {
  for (const id of ['X-4', 'X-100', 'PACES-001', 'R-01', 'R1-01', 'R6-01', 'x-03', 'X-03a', 'R5-1', 'R5-1000', '']) {
    assert.ok(!PACES_ID_RE.test(id), `${id} should be rejected`);
    assert.ok(!PACES_FILE_RE.test(`${id}.json`), `${id}.json should be rejected`);
  }
});

test('X-codes sort after all R-codes, in numeric order; R order is unchanged', () => {
  const ids = ['X-10', 'R5-261', 'X-04', 'R2-01', 'X-40', 'R5-110', 'R3-13', 'X-03'];
  const sorted = [...ids].sort(comparePacesIds);
  assert.deepStrictEqual(sorted, ['R2-01', 'R3-13', 'R5-110', 'R5-261', 'X-03', 'X-04', 'X-10', 'X-40']);
  assert.ok(comparePacesIds('X-04', 'X-10') < 0);
  assert.ok(comparePacesIds('X-03', 'R5-261') > 0);
  // the R-only order matches the previous comparator
  const rOnly = ['R5-261', 'R2-12', 'R2-01', 'R3-09', 'R5-110'];
  assert.deepStrictEqual([...rOnly].sort(comparePacesIds), [...rOnly].sort((a, b) => a.localeCompare(b, 'en', { numeric: true })));
});

test('buildIndex lists X-codes after R-codes and ignores malformed file names', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'amac-paces-test-'));
  const station = id => ({
    id, exam: 'MRCP-PACES', title: `Station ${id}`, encounter: { station: 3, label: 'test', minutes: 10 },
    sections: [{ heading: '15. Sources', blocks: [{ t: 'p', text: 'Example source, 2026' }] }],
  });
  for (const id of ['X-10', 'R5-110', 'X-04', 'R2-01', 'X-4']) {
    fs.writeFileSync(path.join(dir, `${id}.json`), JSON.stringify(station(id)));
  }
  const { index, read } = buildIndex(dir);
  assert.strictEqual(read, 4, 'X-4.json is not a station file');
  assert.deepStrictEqual(index.map(e => e.id), ['R2-01', 'R5-110', 'X-04', 'X-10']);
  assert.deepStrictEqual(validate(station('X-03')), []);
  assert.ok(validate(station('X-3')).length > 0);
});

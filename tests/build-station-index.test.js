// Run: node --test "tests/*.test.js"   (also runs in CI, .github/workflows/audit.yml)
// A station whose required image is still "needed" must never appear in stations/index.json.
// Also covers the image licence rules in validate-station.js.

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { buildIndex } = require('../build-station-index.js');
const { validate } = require('../validate-station.js');

const BASE = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'stations', 'MB-099.json'), 'utf8'));
const IMG = 'media/mrcs/test-image.png';

// A temporary site root with stations/ and media/mrcs/test-image.png.
function site(stations) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'amac-index-test-'));
  fs.mkdirSync(path.join(root, 'stations'));
  fs.mkdirSync(path.join(root, 'media', 'mrcs'), { recursive: true });
  fs.writeFileSync(path.join(root, IMG), 'placeholder');
  for (const [id, media] of Object.entries(stations)) {
    fs.writeFileSync(path.join(root, 'stations', `${id}.json`), JSON.stringify({ ...BASE, id, media }));
  }
  return root;
}
const img = extra => ({ id: 'img', task: 'Describe the image', description: 'What the image must show', ...extra });
const licensed = { status: 'licensed', file: IMG, credit: 'A. Photographer', licence: 'CC BY', sourceUrl: 'https://example.org/image' };

test('a required image still "needed" keeps the station out of the index', () => {
  const root = site({
    'MB-901': [img({ required: true, status: 'needed' })],
    'MB-902': [img({ required: false, status: 'needed' })],
    'MB-903': [img({ required: true, ...licensed })],
    'MB-904': [img({ required: true, status: 'own', file: IMG, credit: 'AMaC', licence: 'Own' })],
    'MB-905': [img({ required: false, status: 'needed' }), img({ id: 'img2', required: true, status: 'needed' })],
  });
  const { index, skipped } = buildIndex(path.join(root, 'stations'), { root });
  const ids = index.map(s => s.id);
  assert.deepStrictEqual(ids, ['MB-902', 'MB-903', 'MB-904']);
  assert.ok(skipped.some(s => s.startsWith('MB-901.json: required image not yet sourced')));
  assert.ok(skipped.some(s => s.startsWith('MB-905.json: required image not yet sourced (img2)')));
  fs.rmSync(root, { recursive: true, force: true });
});

test('own or licensed images need file, credit, licence and (unless Own) sourceUrl; the file must exist', () => {
  const check = media => {
    const root = site({ 'MB-911': [img({ required: true, ...media })] });
    const { errors } = validate(path.join(root, 'stations', 'MB-911.json'), { root });
    fs.rmSync(root, { recursive: true, force: true });
    return errors.join('\n');
  };
  assert.strictEqual(check(licensed), '');
  assert.match(check({ ...licensed, credit: '' }), /no credit/);
  assert.match(check({ ...licensed, file: undefined }), /no file/);
  assert.match(check({ ...licensed, licence: undefined }), /no licence/);
  assert.match(check({ ...licensed, sourceUrl: undefined }), /no sourceUrl/);
  assert.strictEqual(check({ status: 'own', file: IMG, credit: 'AMaC', licence: 'Own' }), '');
  assert.match(check({ ...licensed, file: 'media/mrcs/missing.png' }), /does not exist/);
  assert.match(check({ ...licensed, file: 'images/x.png' }), /under media\/mrcs\//);
  assert.match(check({ ...licensed, file: 'media/mrcs/../x.png' }), /under media\/mrcs\//);
  assert.match(check({ ...licensed, licence: 'CC BY-NC' }), /NonCommercial or NoDerivatives/);
  assert.match(check({ ...licensed, licence: 'CC BY-ND 4.0' }), /NonCommercial or NoDerivatives/);
  assert.match(check({ ...licensed, licence: 'CC BY-NC-SA' }), /NonCommercial or NoDerivatives/);
  assert.match(check({ ...licensed, licence: 'GFDL' }), /must be one of/);
});

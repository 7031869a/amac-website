/* AMaC Foundation — Night Shift data. DRAFT until senior sign-off.
   One object per shift. Spec: "Night Shift — One-Page Spec" (Docs). Every patient links to a live Bleep Card.
   No observation thresholds, scores, times-to-treatment or doses in learner text (numbers rule). */
window.NS_ACTIONS = {
  go:     'I’ll see them',
  nurse:  'Ask the nurse to start first steps, then I’ll see them',
  phone:  'Advise by phone (no visit)',
  senior: 'Ask the registrar to take this patient'
};
window.NS_ACTION_ORDER = ['go', 'nurse', 'phone', 'senior'];

window.NS_SHIFTS = [
  {
    id: 'NS-01',
    title: 'Medical night: nine patients, one of you',
    jur: 'Check your nation and employer',
    fpcP: 'FPC2 Clinical prioritisation',
    fpcS: ['FPC5 Continuity of care'],
    status: 'DRAFT',
    context: 'You are the FY1 covering five medical wards overnight. The medical registrar is busy in ED but can always be phoned for advice or escalation; from about 02:00 they can also take one patient off you.',
    registrar_from: 3,
    steps: [
      { time: '22:00', arrive: ['A', 'B', 'C'] },
      { time: '23:15', arrive: ['D'] },
      { time: '00:30', arrive: ['E'] },
      { time: '02:00', arrive: ['F', 'G'] },
      { time: '03:30', arrive: ['H'] },
      { time: '05:00', arrive: ['I'] }
    ],
    patients: [
      { key: 'A', card: 'BLEEP-45', card_title: 'Catheter-associated UTI', who: 'Ward 9, bay 4',
        pager: 'Mr A’s catheter urine looks cloudy and smells. He’s otherwise well, no temperature.',
        priority: 4, deadline: null, nurse_extra: false, phone: 'resolves', must_see: false,
        best: ['phone'], unsafe: [],
        why: 'Cloudy urine in a well catheterised patient is not an emergency. Clear advice on what to call back for, such as fever or new confusion, is enough tonight.' },
      { key: 'B', card: 'BLEEP-07', card_title: 'A fall on the ward', who: 'Ward 7, bay 5',
        pager: 'Mrs L slipped in the bathroom and hit her head. She’s on apixaban. She seems her usual self.',
        priority: 2, deadline: 1, nurse_extra: true, phone: 'unsafe', must_see: true,
        best: ['nurse', 'go'], unsafe: ['phone'],
        updates: { 1: 'She’s still chatting, but says her head is aching.' },
        harm: 'Mrs L is not assessed in time. She becomes drowsier, and the decision about her CT head comes late.',
        why: 'On an anticoagulant, a head injury can bleed after the patient first seems well. Neuro obs started by the nurse buy time; phone advice alone does not.' },
      { key: 'C', card: 'BLEEP-35', card_title: 'Constipation and bowel not opened post-op', who: 'Ward 9, bed 12',
        pager: 'Mr F hasn’t opened his bowels for several days. He’s comfortable and asking for a laxative.',
        priority: 4, deadline: null, nurse_extra: false, phone: 'stays', must_see: false,
        best: ['go'], unsafe: [],
        why: 'Comfortable with no features of obstruction, he can wait, and he can be handed over if the night gets busy. He still needs examining: passing wind does not exclude obstruction.' },
      { key: 'D', card: 'BLEEP-03', card_title: 'Hypotension and possible sepsis', who: 'Ward 7, bay 3',
        pager: 'Mr K is more drowsy than an hour ago. His blood pressure is lower than earlier and he feels hot.',
        priority: 1, deadline: 1, nurse_extra: false, phone: 'unsafe', must_see: true,
        best: ['go', 'nurse'], unsafe: ['phone'],
        harm: 'Mr K is not seen straight away and the registrar is not told. His blood pressure falls further and his antibiotics are delayed.',
        why: 'Possible sepsis with a new drop in consciousness must be seen now, and the registrar told now, even while they are in ED. The nurse can start the sepsis screen while you walk over.' },
      { key: 'E', card: 'BLEEP-56', card_title: 'Verification and certification of death', who: 'Ward 4, side room',
        pager: 'Mr P has died. It was expected and his DNACPR form is in the notes. His family are with him.',
        priority: 3, deadline: null, nurse_extra: false, phone: 'stays', must_see: true,
        best: ['go'], unsafe: [],
        updates: { 3: 'The family are still waiting and asking when the doctor will come.', 4: 'The family are still waiting.' },
        harm: 'The family waited all night for the doctor.',
        why: 'Not an emergency, but a family should not wait all night. Check whether nurses verify expected deaths where you work.' },
      { key: 'F', card: 'BLEEP-48', card_title: 'Opioid toxicity / overdose', who: 'Ward 8, bay 5',
        pager: 'Mrs E is very hard to wake since her evening oxycodone. Her breathing seems slow.',
        priority: 1, deadline: 3, nurse_extra: false, phone: 'unsafe', must_see: true,
        best: ['go', 'nurse', 'senior'], unsafe: ['phone'],
        harm: 'Nobody reaches Mrs E in time. Her breathing worsens and a 2222 call is needed.',
        why: 'Slow breathing from opioids is an immediate airway and breathing threat that can be reversed at the bedside. If she cannot be woken or is not breathing adequately, it is a 2222 call.' },
      { key: 'G', card: 'BLEEP-21', card_title: 'Inpatient stroke (FAST positive)', who: 'Ward 8, bay 2',
        pager: 'Mr B’s speech has gone slurred and his face looks droopy. It started just now.',
        priority: 1, deadline: 3, nurse_extra: false, phone: 'unsafe', must_see: true,
        best: ['senior', 'go'], unsafe: ['phone'],
        harm: 'Mr B is not assessed straight away, and the chance of time-critical stroke treatment is lost.',
        why: 'A suspected stroke with a clear onset time may be treatable, but only quickly: the stroke team must be called now. With two emergencies at once, this is the moment to use the registrar.' },
      { key: 'H', card: 'BLEEP-28', card_title: 'Hypokalaemia', who: 'Ward 9, bed 8',
        pager: 'Mr T’s potassium is a bit low on today’s bloods. He’s well and eating.',
        priority: 4, deadline: null, nurse_extra: false, phone: 'resolves', must_see: false,
        best: ['phone'], unsafe: [],
        why: 'Mildly low potassium in a well patient is routine. It does not need a bedside review tonight, as long as there are no warning features on the Bleep Card.' },
      { key: 'I', card: 'BLEEP-10', card_title: 'Acute confusion and possible delirium', who: 'Ward 6, bay 1',
        pager: 'Mrs G is confused and trying to climb out of bed. She was fine yesterday.',
        priority: 2, deadline: 5, nurse_extra: false, phone: 'unsafe', must_see: true,
        best: ['nurse', 'go'], unsafe: ['phone'],
        harm: 'Mrs G is not reviewed before handover. The cause of her confusion is still unknown, and she falls trying to get out of bed.',
        why: 'New confusion often has a physical cause and needs a doctor’s review, not sedation by phone. The nurse can start obs and a glucose while you come.' }
    ],
    model_story: [
      '22:00 — Phone advice for A. Ask the nurse to start neuro obs on B and see B first: she is the only one who could deteriorate unseen.',
      '23:15 — See D at once and tell the registrar; C can keep waiting.',
      '00:30 — See E, so the family are not left waiting all night.',
      '02:00 — Two emergencies at once. Send the registrar to G and call the stroke team; you see F, whose breathing can be treated at the bedside.',
      '03:30 — Phone advice for H, then see C.',
      '05:00 — See I and hand over her results and plan. Nobody is left who should not be.'
    ],
    one_thing: 'Keep something in reserve: nurse first steps and the registrar are what let you survive the bleep you can’t see coming.',
    sources: [{ t: 'Bleep Cards BLEEP-45, BLEEP-07, BLEEP-35, BLEEP-03, BLEEP-56, BLEEP-48, BLEEP-21, BLEEP-28 and BLEEP-10, and the guidance cited on each', u: 'bleep-cards.html' }]
  }
];

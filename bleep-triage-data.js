/* AMaC Foundation — Bleep Triage data. DRAFT until senior sign-off.
   One object per Triage Set. Spec: "Bleep Triage — One-Page Spec" (Docs). Every bleep links to a live Bleep Card.
   No observation thresholds, scores, times or doses in pager text (numbers rule). */
window.BT_ACTIONS = {
  go:     'Go now',
  nurse:  'Ask the nurse to do something now, then see',
  phone:  'Advise by phone and review later',
  senior: 'Call a senior now, and go'
};
window.BT_ACTION_ORDER = ['go', 'nurse', 'phone', 'senior'];

window.BT_SETS = [
  {
    id: 'TRIAGE-01',
    title: 'Medical nights: four bleeps at 02:10',
    jur: 'Check your nation and employer',
    fpcP: 'FPC2 Clinical prioritisation',
    fpcS: ['FPC5 Continuity of care'],
    status: 'DRAFT',
    context: 'You are the FY1 covering four medical wards overnight; the medical registrar is in ED. Four bleeps arrive within minutes.',
    bleeps: [
      { key: 'A', card: 'BLEEP-03', card_title: 'Hypotension and possible sepsis', who: 'Ward 7, bay 3',
        pager: 'Mr K is more drowsy than an hour ago. His blood pressure is lower than earlier and he feels hot.',
        ask: 'He was chatting at the evening drug round. Now he is hard to keep awake.',
        best: ['go', 'senior'], unsafe: ['phone'],
        why: 'Possible sepsis with a new drop in consciousness is the most time-critical bleep here, and new reduced consciousness is a reason to involve your senior now.',
        say_back: 'I’m coming now. Please start your sepsis screen and repeat his obs. I’m letting the registrar know.' },
      { key: 'B', card: 'BLEEP-35', card_title: 'Constipation and bowel not opened post-op', who: 'Ward 9, bed 12',
        pager: 'Mr F hasn’t opened his bowels since his operation. He’s comfortable and asking for a laxative.',
        ask: 'He is passing wind, not vomiting, and his obs are unchanged.',
        best: ['phone'], unsafe: [],
        why: 'Comfortable with no features of obstruction reported, this can wait. Examine him later: passing wind does not exclude obstruction.',
        say_back: 'I’ll see him after my urgent jobs. Call me straight away if he vomits, his tummy swells or becomes painful, or his obs change.' },
      { key: 'C', card: 'BLEEP-56', card_title: 'Verification and certification of death', who: 'Ward 4, side room',
        pager: 'Mr P has died. It was expected and his DNACPR form is in the notes. His family are with him.',
        ask: 'His daughter would like to speak to a doctor tonight if possible.',
        best: ['phone', 'nurse'], unsafe: [],
        why: 'An expected death with a documented DNACPR decision is not an emergency, but the family are waiting. Say when you will come; check whether nurses verify expected deaths in your trust.',
        say_back: 'I’m sorry. I have two sick patients to see first, then I’ll come. Please tell the family I will speak to them.' },
      { key: 'D', card: 'BLEEP-07', card_title: 'A fall on the ward', who: 'Ward 7, bay 5',
        pager: 'Mrs L slipped in the bathroom and hit her head. She’s on apixaban. She seems her usual self and is back in bed.',
        ask: 'She says she didn’t black out and she isn’t vomiting.',
        best: ['nurse', 'go'], unsafe: ['phone'],
        why: 'On an anticoagulant, a head injury can bleed and deteriorate after she first seems well. She needs a doctor’s assessment and a CT head decision under your local head-injury pathway; phone advice is not enough.',
        say_back: 'Please keep her in bed, start neuro obs and call me at once if anything changes. I’ll come straight after the patient I’m seeing now.' }
    ],
    model_order: ['A', 'D', 'C', 'B'],
    ties: [['B', 'C']],
    must_before: [
      ['A', 'B', 'Possible sepsis with reduced consciousness comes before a comfortable patient who needs a laxative.'],
      ['A', 'C', 'A patient who may still be saved comes before verifying an expected death.'],
      ['A', 'D', 'Mr K is already deteriorating; Mrs L is not, yet.'],
      ['D', 'B', 'An anticoagulated head injury can deteriorate while appearing well.'],
      ['D', 'C', 'A living patient at risk comes before verifying an expected death.']
    ],
    one_thing: 'The bleep that sounds calm can be the second most dangerous: ask what could go wrong next, not only how the patient looks now.',
    sources: [
      { t: 'NICE NG253, Suspected sepsis in people aged 16 or over (as cited on BLEEP-03)', u: 'https://www.nice.org.uk/guidance/ng253' },
      { t: 'NICE NG232, Head injury: assessment and early management (as cited on BLEEP-07)', u: 'https://www.nice.org.uk/guidance/ng232' },
      { t: 'Academy of Medical Royal Colleges, Code of Practice for the diagnosis and confirmation of death, 2025 (as cited on BLEEP-56)', u: '' }
    ]
  }
];

/* ============================================================
   AMaC — MRCP Part 1 question bank  (mrcp1-questions.js)
   ------------------------------------------------------------
   Batch 1: 20 questions, M1Q001–M1Q020.

   TWO KEYS, TWO SETS OF FIELDS

   The standing rule is that clinical content needs two independent
   clearances and that neither substitutes for the other. The schema
   holds one slot for each, so recording the second never overwrites
   the first:

     cleared_by / cleared_date   key one — a named clinician read the
                                 material and cleared it. May be recorded
                                 by hand; no per-question verdicts exist.

     reviewer / signoff_date     key two — the pack's three verdicts were
                                 completed and applied by
                                 mrcp1-review-pack.py apply. Only that
                                 tool writes these two fields.

   review_status says how many keys have been turned:

     draft             neither
     cleared_verbally  key one only — a clinician cleared it verbally
     reviewed          both — verbal clearance plus recorded verdicts,
                       all three axes passing on every question
     revise            a recorded verdict failed on at least one axis

   Only "reviewed" means both keys are turned. A question at
   "cleared_verbally" has been read by a clinician but carries no record
   of WHICH of the three axes — keyed answer, distractors, explanation —
   was checked, so if a defect surfaces later there is no way to tell
   whether it was missed or never looked at.

   Schema is enforced by mrcp1-validate.py. Every object carries exactly:
     id, subdomain, topic, difficulty, stem, options, correct_letter,
     why_correct, distractor_analysis, generalisation,
     review_status, cleared_by, cleared_date, reviewer, signoff_date

   Validate before committing:  python mrcp1-validate.py
   ============================================================ */
window.MRCP1_QUESTIONS = [
  {
    "id": "M1Q001",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Reading a confidence interval that crosses the null",
    "difficulty": "Moderate",
    "stem": "A randomised trial comparing a new anticoagulant with standard care reports a hazard ratio for recurrent venous thromboembolism of 0.78, with a 95% confidence interval from 0.52 to 1.17. The authors conclude that the new drug is no better than standard care.",
    "options": {
      "A": "The result establishes that the two treatments are equivalent",
      "B": "The result shows that the new drug has no effect on recurrence",
      "C": "The data are compatible with anything from a substantial benefit to a modest harm, so no firm conclusion about the direction of effect is supported",
      "D": "The width of the interval indicates that the trial has been analysed incorrectly",
      "E": "A p value is required before the result can be interpreted at all"
    },
    "correct_letter": "C",
    "why_correct": "This is testing whether a confidence interval is read as a range of values compatible with the data, or merely as a significance test in disguise. The interval runs from 0.52 to 1.17. At one end sits a reduction in hazard of nearly half, which would be a major clinical advance; at the other, a 17% increase, which would be a reason not to use the drug. Both are compatible with what was observed. The correct reading is therefore that the trial has not settled the question in either direction — its width is the finding, not the fact that it happens to include 1.",
    "distractor_analysis": {
      "A": "The commonest error in the literature, and the one this question exists to catch: treating a non-significant result as a demonstration of sameness. Establishing equivalence requires the whole interval to fall within a margin agreed in advance to be clinically unimportant. This interval includes a 48% relative reduction in hazard, which nobody would call unimportant.",
      "B": "Reads the interval as a verdict on the null hypothesis rather than as a range. It also ignores the point estimate, which favours the new drug. The honest statement is that the effect is unknown, not that it is absent — those are different claims and only one of them is supported.",
      "D": "Attributes imprecision to a mistake. The width of an interval is a function of the number of events and the sample size, not of analytical error, and a wide interval from a small trial is exactly what should be expected.",
      "E": "Asks for less information than is already present. The interval answers the same question about compatibility with the null, and adds the range of effects that remain plausible — which is the part that matters clinically."
    },
    "generalisation": "A confidence interval is the range of effects compatible with the data, and whether it crosses the null is the least informative thing about it.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q002",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Subgroup findings and multiplicity",
    "difficulty": "Moderate",
    "stem": "A large randomised trial of a lipid-lowering drug finds no significant reduction in its primary endpoint overall. Fourteen subgroups were specified in the protocol before recruitment began. In one of them, participants with diabetes, the reduction is statistically significant.",
    "options": {
      "A": "The drug should now be recommended for patients with diabetes",
      "B": "The overall result must be a false negative",
      "C": "The subgroup finding can be relied upon because the subgroups were specified in advance",
      "D": "The trial should be reanalysed with non-diabetic participants excluded",
      "E": "With fourteen subgroups examined, a result of this kind could readily arise by chance alone and needs testing in a trial designed to answer that question"
    },
    "correct_letter": "E",
    "why_correct": "The question is testing whether the number of comparisons is recognised as the governing factor. Each subgroup analysis carries its own chance of a spuriously significant result, and across fourteen of them the probability that at least one reaches significance when the drug truly does nothing is substantial. Pre-specification improves the credibility of a subgroup finding, because the subgroup was not chosen after the data were seen, but it does nothing about the number of comparisons made — and that is what governs how often chance produces a result like this one. A finding of this kind generates a hypothesis; it does not test one.",
    "distractor_analysis": {
      "A": "The clinically tempting move, and the one that a series of confirmatory trials has repeatedly overturned. It acts on a single unreplicated comparison in preference to the trial's better-powered primary result.",
      "B": "Inverts the reliability hierarchy. The overall comparison is the pre-specified primary analysis, made on the whole randomised population and powered accordingly. The subgroup is the smaller, more fragile estimate, so if the two disagree it is the subgroup that should be doubted.",
      "C": "The strongest distractor, because half of it is correct. Specifying subgroups in advance does protect against selecting them after seeing the data, which is a genuine and separate problem. It does nothing whatever about how many comparisons were made, and multiplicity is what is at issue here.",
      "D": "Conditions the analysis on the result, which discards the comparability that randomisation created and answers a question the trial was never designed to address. It converts a randomised comparison into an observational one."
    },
    "generalisation": "Pre-specification protects against choosing the subgroup after seeing the answer; it does nothing about how many were examined, and the number examined is what governs how often chance produces one.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q003",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Relative and absolute risk reduction, and number needed to treat",
    "difficulty": "Moderate",
    "stem": "A treatment reduces the relative risk of an outcome by 50%. In population X the risk over five years without treatment is 40%. In population Y, the risk over the same period is 0.4%.",
    "options": {
      "A": "The number needed to treat is a hundred times greater in population Y than in population X",
      "B": "The absolute benefit of treatment is the same in both populations",
      "C": "The relative risk reduction will be smaller in population Y",
      "D": "The treatment is ineffective in population Y",
      "E": "The number needed to treat cannot be calculated without a confidence interval"
    },
    "correct_letter": "A",
    "why_correct": "This tests whether a relative measure and an absolute one are held apart. Halving the risk in population X takes it from 40% to 20%, an absolute reduction of 20 percentage points, so five people would need to be treated to prevent one outcome. The same halving in population Y takes 0.4% to 0.2%, an absolute reduction of 0.2 percentage points, giving a number needed to treat of five hundred. The relative effect is identical in both; the absolute effect, and therefore the work required to help one person, differs a hundredfold.",
    "distractor_analysis": {
      "B": "Conflates the two measures, which is precisely the error the question is built around. The relative reduction is what is held constant here by the wording of the stem; the absolute reduction is proportional to the baseline risk and therefore differs by a factor of a hundred.",
      "C": "Inverts which measure depends on baseline risk. The relative risk reduction is stated in the stem as 50% and is the quantity that travels between populations unchanged; it is the absolute reduction that shrinks as the baseline risk falls.",
      "D": "Confuses efficacy with worthwhileness. The drug does exactly the same thing biologically in both populations. Whether treating five hundred people to prevent one outcome is a good use of anyone's time, money or tolerance of side effects is a separate judgement — and an important one — but it is not a claim about whether the drug works.",
      "E": "Confuses a point estimate with its precision. Number needed to treat is arithmetic from the two risks given; a confidence interval would tell you how precisely it is known, which is a different and later question."
    },
    "generalisation": "Relative measures travel between populations; absolute ones do not, and it is the absolute benefit that determines whether treating is worth it.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q004",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Predictive values and the prevalence of disease",
    "difficulty": "Moderate",
    "stem": "A diagnostic test is used first in a specialist clinic, where the condition it detects is common among those attending, and then in an unselected community population, where the same condition is rare. The spectrum of disease among those who have it is comparable in the two settings.",
    "options": {
      "A": "The sensitivity of the test will fall in the community population",
      "B": "The specificity of the test will fall in the community population",
      "C": "The positive predictive value will fall, while sensitivity and specificity are unchanged",
      "D": "Both the positive and the negative predictive value will fall",
      "E": "The likelihood ratios of the test will change with the population in which it is used"
    },
    "correct_letter": "C",
    "why_correct": "The question is testing which properties belong to the test and which belong to the test as applied to a particular group. Sensitivity and specificity are defined conditionally on whether the person has the condition, so they describe the test itself and do not change when the mix of people tested changes. Predictive values ask the reverse question — given this result, what is the probability the person has the condition — and that depends on how many of those tested actually do. When the condition is rare, most of the people testing positive are the false positives generated from a very large healthy majority, so the positive predictive value falls.",
    "distractor_analysis": {
      "A": "The intuitive but wrong move: assuming a test simply performs worse in an unselected population. Sensitivity is measured among those who have the condition, and it is unaffected by how many such people there are.",
      "B": "Same error applied to the other property. Specificity is measured among those who do not have the condition, and it too is unchanged by the proportion of the population they represent.",
      "D": "Half correct, which is what makes it attractive. The positive predictive value does fall, but the negative predictive value rises — when disease is rare, a negative result is more likely to be right, not less.",
      "E": "Likelihood ratios are constructed from sensitivity and specificity alone, which is precisely why they can be carried from one setting to another. That portability is the reason they are useful in a way that predictive values are not."
    },
    "generalisation": "Sensitivity and specificity describe the test; predictive values describe the test in a population, and only the second pair moves with prevalence.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q005",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Applying a likelihood ratio to a pre-test probability",
    "difficulty": "Difficult",
    "stem": "Before testing, a clinician judges the probability that a patient has a particular condition to be about 10%. A test is then performed and returns a result whose likelihood ratio is 10.",
    "options": {
      "A": "The post-test probability is approximately 90%, since a likelihood ratio of 10 corresponds to a 90% probability of disease",
      "B": "The post-test probability is unchanged, because a likelihood ratio is a property of the test rather than of the patient",
      "C": "The post-test probability is the pre-test probability multiplied by the likelihood ratio, giving 100%",
      "D": "The likelihood ratio cannot be applied unless the exact prevalence of the condition is known",
      "E": "The post-test probability rises to roughly one in two"
    },
    "correct_letter": "E",
    "why_correct": "This tests whether the candidate knows what a likelihood ratio acts upon. It multiplies odds, not probabilities. A pre-test probability of 10% is odds of one to nine. Multiplying by ten gives odds of ten to nine, which converts back to a probability a little above one half. The clinically important consequence is the one the arithmetic delivers: a strongly positive test applied to a patient who was unlikely to have the condition leaves the diagnosis genuinely unsettled, which is why the same result means different things in different patients.",
    "distractor_analysis": {
      "A": "Treats the likelihood ratio as though the number itself were a probability, so a ratio of 10 becomes a probability of 90%. A likelihood ratio is a ratio of two likelihoods and is not bounded by one; the resemblance to a percentage is coincidental.",
      "B": "Opens with a true statement — likelihood ratios are indeed properties of the test — and then draws the opposite of the right conclusion from it. That the ratio is a stable property of the test is exactly what allows it to be applied to any individual patient's pre-test estimate.",
      "C": "The operation most people reach for, and the most instructive wrong answer because it announces its own failure: multiplying a probability by ten produces 100%, a certainty that no single test result could justify. The impossible answer is the signal that the arithmetic was done on the wrong scale.",
      "D": "Confuses prevalence with pre-test probability. The pre-test probability is a clinical judgement about this patient, informed by prevalence but also by history and examination, and the likelihood ratio operates on whatever estimate is offered."
    },
    "generalisation": "Likelihood ratios multiply odds rather than probabilities, which is why a strongly positive test applied to a low pre-test probability frequently leaves the diagnosis unresolved.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q006",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Choosing a study design by what is rare",
    "difficulty": "Moderate",
    "stem": "Investigators wish to study a possible association between a rare occupational exposure and a common cardiovascular outcome.",
    "options": {
      "A": "A case-control study, because the exposure is rare",
      "B": "A cohort study, because the exposure is rare and the outcome is common",
      "C": "A case-control study, because it will yield a risk ratio directly",
      "D": "A cross-sectional survey, because exposure and outcome can both be measured on one occasion",
      "E": "A case-control study, because the odds ratio it produces will approximate the risk ratio"
    },
    "correct_letter": "B",
    "why_correct": "The question is testing whether design follows from which quantity is scarce. A case-control study samples people according to whether they have the outcome, which is efficient when the outcome is rare because it guarantees enough cases. Here the outcome is common, so that advantage is worth nothing, and the scarce quantity is the exposure. Sampling on exposure — recruiting exposed workers and a comparable unexposed group and following them — guarantees enough exposed people, which a case-control study drawn from the general population would not.",
    "distractor_analysis": {
      "A": "Names a real design for exactly the wrong reason, which is why it is the strongest distractor. Case-control sampling solves scarcity of the outcome. Applied to a rare exposure it does the opposite of what is wanted: the cases recruited would contain very few exposed people, and the study would be uninformative.",
      "C": "Inverts which design yields which measure. A case-control study fixes the number of cases by design, so the underlying risk of the outcome is not observable within it and a risk ratio cannot be calculated directly.",
      "D": "Measuring both at one moment cannot establish which came first, so causal direction is unresolved. For an exposure this rare it would also require an impractically large sample to find enough exposed participants.",
      "E": "States as a general truth something that holds only under a condition the stem explicitly violates. The odds ratio approximates the risk ratio when the outcome is uncommon; here the outcome is common, so the approximation fails precisely in this case."
    },
    "generalisation": "Choose the sampling frame by whichever is rarer — sample on the outcome when the outcome is rare, and on the exposure when the exposure is.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q007",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Distinguishing confounding from effect modification",
    "difficulty": "Difficult",
    "stem": "In a cohort study, the crude risk ratio for the association between a drug and an outcome is 2.0. When the analysis is stratified by smoking status, the risk ratio is 1.1 among smokers and 1.1 among non-smokers.",
    "options": {
      "A": "Smoking modifies the effect of the drug on the outcome",
      "B": "The stratified analysis is too small to be informative and the strata should be recombined",
      "C": "The drug causes the outcome only in smokers",
      "D": "Smoking confounds the association, and the adjusted estimate of 1.1 is the one to report",
      "E": "The crude estimate should be reported, because stratification has introduced bias"
    },
    "correct_letter": "D",
    "why_correct": "This tests whether the candidate can read the signature of confounding off a stratified analysis. Two features together identify it: the crude estimate differs substantially from the stratum-specific ones, and the stratum-specific estimates agree closely with each other. That pattern means smoking was carrying part of the apparent association — smokers were both more likely to receive the drug and more likely to have the outcome — and once smoking is held constant most of the association disappears. Because the effect is the same in both strata, a single pooled estimate is meaningful, and it is 1.1.",
    "distractor_analysis": {
      "A": "The natural competing explanation, and a genuinely difficult discrimination because both confounding and effect modification are revealed by the same procedure of stratifying. Effect modification shows as stratum-specific estimates that differ from each other. Here they are identical, so there is nothing being modified.",
      "B": "Invents a reason to disregard the stratified result and return to the crude one. Consistency of the estimate across two independent strata is evidence in favour of the finding, not against it.",
      "C": "Asserts a difference between the strata that the data explicitly deny. The risk ratio is the same in both, so no claim can be made that the drug behaves differently in smokers.",
      "E": "Inverts the purpose of the procedure. Stratification removes the contribution of smoking rather than introducing anything; it is the crude estimate that carries the distortion."
    },
    "generalisation": "Stratify, then compare — stratum-specific estimates that agree with each other but differ from the crude indicate confounding, and estimates that differ from each other indicate effect modification, for which no single pooled figure should be quoted.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q008",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Lead-time and length-time bias in screening",
    "difficulty": "Moderate",
    "stem": "A screening programme for a cancer reports that five-year survival among screen-detected cases is 80%, compared with 40% among cases that present symptomatically. Mortality from the disease in the population served by the programme is unchanged since screening began.",
    "options": {
      "A": "Survival measured from diagnosis can lengthen both because diagnosis is made earlier and because screening preferentially detects slower-growing disease, without any death being postponed",
      "B": "The screening test has poor specificity",
      "C": "The comparison shows that screening halves mortality from the disease",
      "D": "Five-year survival is the appropriate measure by which to judge a screening programme",
      "E": "The unchanged mortality must be the result of inadequate uptake of screening"
    },
    "correct_letter": "A",
    "why_correct": "The question is testing whether an impressive survival figure can be reconciled with unchanged mortality. Two mechanisms do it, and both are consequences of screening rather than failures of it. Lead time moves the date of diagnosis earlier, so survival measured from diagnosis lengthens even if the date of death is entirely unaltered. Length time arises because slow-growing tumours spend longer in a detectable pre-symptomatic phase and are therefore more likely to be caught by a screening round, while fast-growing ones surface between rounds — so the screened group is enriched for disease with a better prognosis anyway. Unchanged population mortality is the observation neither bias can produce, which is why it is the trustworthy one here.",
    "distractor_analysis": {
      "B": "Names a real property of a test, but the wrong one. Poor specificity generates false positives, which matter for harm and for positive predictive value; it does not create a survival difference between screen-detected and symptomatic cases.",
      "C": "The error the whole question is constructed around: reading survival among detected cases as though it were mortality in the population. The stem states that population mortality has not changed, which contradicts this directly.",
      "D": "The assumption underlying the error rather than the error itself, which makes it the most instructive wrong answer. Survival measured from diagnosis is exactly the quantity both biases distort, and it is why screening programmes are judged on disease-specific mortality instead.",
      "E": "Reaches for an explanation that preserves the benefit. Low uptake would reduce the size of any mortality effect but would not manufacture a survival difference of this magnitude between the two groups."
    },
    "generalisation": "Judge a screening programme on disease-specific mortality and never on survival from diagnosis, because lead time and length time both inflate survival without postponing a single death.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q009",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Intention-to-treat and analyses restricted to completers",
    "difficulty": "Moderate",
    "stem": "In a randomised trial of a demanding rehabilitation programme, a substantial minority of those allocated to the intervention did not complete it. An analysis restricted to those who completed shows a large benefit. The intention-to-treat analysis shows a small one.",
    "options": {
      "A": "The completer analysis is preferable, because it estimates the effect of actually receiving the treatment",
      "B": "The discrepancy indicates that randomisation failed",
      "C": "The completer analysis compares groups that are no longer defined by randomisation, so the difference may reflect who completed rather than what the treatment did",
      "D": "The intention-to-treat analysis is biased towards showing benefit",
      "E": "Both analyses are equally valid and either may be reported as the trial's result"
    },
    "correct_letter": "C",
    "why_correct": "This is testing what randomisation actually guarantees, and how far that guarantee extends. It makes the groups comparable as allocated, and no further. Completion happens after randomisation and is not itself randomly distributed — the participants who finish a demanding programme are likely to be fitter, better supported and more motivated, all of which independently predict a better outcome. Restricting the analysis to them compares a selected group with an unselected one, so the treatment effect is entangled with the determinants of completion and cannot be separated from them.",
    "distractor_analysis": {
      "A": "Names something genuinely worth knowing — the effect of receiving the treatment rather than being offered it — which is why this is the strongest distractor. The problem is that the completer analysis does not estimate that quantity without bias; it estimates it confounded by whatever caused people to complete.",
      "B": "Misunderstands what randomisation does. It allocates; it cannot compel adherence. Non-completion in a demanding programme is an expected feature of the intervention, not evidence that allocation went wrong.",
      "D": "Inverts the direction of the effect. When adherence is imperfect, intention-to-treat dilutes the estimate towards no difference, because some people counted as treated did not receive the treatment. That makes it conservative, not inflating.",
      "E": "Treats a structural property of the design as a matter of preference. Only one of the two analyses preserves the comparison that randomisation created, and which one it is does not depend on the reader."
    },
    "generalisation": "Intention-to-treat estimates the effect of offering a treatment and is the only analysis that keeps the groups randomisation made; any analysis conditioned on what happened after randomisation forfeits that protection.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q010",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "What a negative trial licenses you to conclude",
    "difficulty": "Difficult",
    "stem": "A trial is designed with 90% power to detect a 25% relative reduction in its primary endpoint. The result is not statistically significant: the observed relative reduction is 12%, with a confidence interval running from a 22% reduction to a 9% increase.",
    "options": {
      "A": "The trial establishes that the treatment does not work",
      "B": "The trial excludes the effect it was designed to detect, but does not exclude a smaller effect that might still be worth having",
      "C": "The trial was underpowered and its result should be set aside",
      "D": "A larger trial would necessarily produce a significant result",
      "E": "The observed 12% reduction should be taken as the treatment's true effect"
    },
    "correct_letter": "B",
    "why_correct": "The question is testing whether a negative result is read for what it rules out. The trial was sized to detect a 25% reduction, and a reduction of that size lies outside the confidence interval, so the trial has done the job it was designed for: an effect that large can be dismissed. But reductions of, say, 15% remain entirely compatible with the data, and whether an effect of that size would matter is a clinical judgement about the condition, the cost and the harms — not something the trial can settle. A negative trial narrows the field of possibilities rather than emptying it.",
    "distractor_analysis": {
      "A": "The standard misreading of a negative trial, in which failure to reject the null is converted into proof of it. The interval still contains reductions of up to 22%, so 'does not work' is not among the conclusions the data support.",
      "C": "The trial met the power specification it set for itself, so it is informative about the effect it was sized to find. Dismissing it discards a genuine and useful exclusion, and the word 'underpowered' is being used here to mean 'gave an answer I did not want'.",
      "D": "Assumes the conclusion. A larger trial produces a narrower interval, but the interval may narrow around no effect just as readily as around a benefit; nothing here indicates which.",
      "E": "Takes the point estimate as the answer and discards the interval around it, which is where almost all the information in a negative result lives. The observed 12% is the single most likely value, not the established one."
    },
    "generalisation": "A negative trial excludes the effect it was powered to find, not every effect worth having, and the confidence interval is what tells you which is which.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q011",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "What a non-inferiority result does and does not establish",
    "difficulty": "Moderate",
    "stem": "A non-inferiority trial compares a new oral agent with an established injectable one. The point estimate for the difference in the primary outcome slightly favours the established drug, and the confidence interval for that difference lies entirely within the non-inferiority margin specified before the trial began.",
    "options": {
      "A": "The new agent has been shown to be superior to the established one",
      "B": "The new agent has been shown to be equivalent to the established one",
      "C": "The trial has failed, because the point estimate favours the comparator",
      "D": "The new agent has been shown not to be worse than the comparator by more than the amount judged clinically acceptable in advance",
      "E": "The result cannot be interpreted, because the trial was not designed to demonstrate superiority"
    },
    "correct_letter": "D",
    "why_correct": "This tests whether the claim a non-inferiority trial supports is understood as a bounded one. Such a trial does not attempt to show that the new treatment is better, or even that it is the same. It asks whether the new treatment can be ruled out as being worse by more than a specified amount that was agreed in advance to be clinically unimportant. A point estimate slightly favouring the comparator is entirely compatible with that conclusion, provided the interval stays inside the margin. The case for the new agent then rests on its other properties — here, that it is taken by mouth.",
    "distractor_analysis": {
      "A": "Superiority is a different claim requiring the interval to exclude no difference in the favourable direction. Here the point estimate does not even favour the new agent, so the claim fails at the first step.",
      "B": "A stronger and different claim than the one made, and the most frequent overstatement of a non-inferiority result. Equivalence requires the interval to sit within a margin on both sides; non-inferiority is one-sided by design and says nothing about the possibility that the new agent is better.",
      "C": "Misreads what the design is for. A non-inferiority trial anticipates that the new treatment may be slightly worse and asks whether it is worse by an amount that matters. A point estimate favouring the comparator is an expected result, not a failure.",
      "E": "Over-corrects from a correct starting observation. It is true that the trial was not designed to demonstrate superiority, but it answers its own question perfectly well, and declining to interpret it discards a valid result."
    },
    "generalisation": "A non-inferiority trial supports a bounded claim — not worse by more than a stated margin — and because that margin is set in advance, it has to be justified clinically rather than statistically.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q012",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Heterogeneity and funnel asymmetry in a meta-analysis",
    "difficulty": "Difficult",
    "stem": "A meta-analysis of twelve trials of an intervention reports a clear pooled benefit. The forest plot shows the individual trial estimates scattered widely, with several small trials reporting large benefits and the two largest trials reporting little effect. The funnel plot is markedly asymmetric.",
    "options": {
      "A": "The pooled estimate should be accepted, because it combines all the available evidence",
      "B": "The asymmetry proves that small unfavourable trials were suppressed",
      "C": "Heterogeneity between trials does not matter when the pooled estimate is statistically significant",
      "D": "The two largest trials should be excluded from the analysis as outliers",
      "E": "The pattern raises the possibility that small unfavourable trials are missing, and the pooled estimate may therefore overstate the benefit"
    },
    "correct_letter": "E",
    "why_correct": "The question is testing whether two features of the same analysis can be read together. Wide scatter indicates that the trials are not all estimating one common effect, so a single pooled figure conceals real differences between them. Funnel asymmetry — small trials showing large benefits, with no counterparts showing large null or unfavourable results — is the pattern that would be produced if such trials had been conducted but never published. The third observation points the same way: the largest trials, which are the least susceptible to selective publication and usually the best conducted, show little effect. None of these is conclusive alone, and funnel asymmetry in particular has several possible causes; together they are enough to treat the pooled benefit with considerable caution.",
    "distractor_analysis": {
      "A": "The word doing the damage is 'available'. The concern raised by funnel asymmetry is specifically about evidence that is not available, so completeness of the retrieved literature is no reassurance at all.",
      "B": "Points in the right direction but overstates the strength of the inference, which makes it the strongest distractor. Funnel asymmetry has several possible causes besides publication bias: small trials often differ genuinely from large ones in the populations recruited, the dose used and the rigour of conduct. It raises the possibility; it does not establish it.",
      "C": "Inverts the relationship between the two ideas. Whether a pooled estimate reaches significance says nothing about whether pooling was appropriate in the first place, and heterogeneity is a question about the second.",
      "D": "Discards the most precise and generally least biased evidence because it disagrees with the rest, which is the opposite of what the pattern implies. When large and small trials disagree, it is the small ones that warrant suspicion."
    },
    "generalisation": "Wide scatter and funnel asymmetry are reasons to distrust a pooled estimate rather than features to explain away, and when the largest trials disagree with the small ones, the pooled estimate deserves particular scrutiny rather than acceptance.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q013",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Urea cycle — localising the enzyme block",
    "difficulty": "Difficult",
    "stem": "A 24-year-old man is admitted confused and vomiting two days after starting a high-protein diet. Plasma ammonia is markedly raised. Plasma citrulline is low and urinary orotic acid is markedly raised.",
    "options": {
      "A": "Carbamoyl phosphate synthetase I",
      "B": "Ornithine transcarbamylase",
      "C": "Argininosuccinate synthetase",
      "D": "Argininosuccinate lyase",
      "E": "Arginase"
    },
    "correct_letter": "B",
    "why_correct": "This question is testing whether two biochemical findings can be used together to localise a block, rather than whether one enzyme deficiency can be recalled. The low citrulline places the block at or above the step that produces it, which leaves only carbamoyl phosphate synthetase I and ornithine transcarbamylase in contention. The raised orotic acid then separates those two. When ornithine transcarbamylase fails, carbamoyl phosphate accumulates behind the block, escapes the mitochondrion and is consumed by cytosolic pyrimidine synthesis, and orotic acid is the overflow product of that diverted pathway. A block one step earlier leaves no carbamoyl phosphate to spill over at all.",
    "distractor_analysis": {
      "A": "Reached by reasoning correctly from the low citrulline and stopping there — carbamoyl phosphate synthetase I deficiency also gives hyperammonaemia with low citrulline, so it accounts for half the picture. It fails on the orotic acid: the block sits above carbamoyl phosphate, so none accumulates, none is diverted into pyrimidine synthesis, and orotate is not raised.",
      "C": "Correctly identified as a urea cycle enzyme, but distal to citrulline. A block there causes citrulline to accumulate rather than fall — this is classical citrullinaemia. The low citrulline in the stem excludes it, and a candidate who keys this has read the enzyme's position but not the direction of the substrate change.",
      "D": "Same error as C, one step further along. A block at argininosuccinate lyase causes citrulline and argininosuccinate to build up, so plasma citrulline would be high.",
      "E": "The most distal enzyme of the cycle. Arginase deficiency raises arginine and characteristically presents with progressive spastic diplegia rather than acute hyperammonaemic encephalopathy after a protein load, so both the biochemistry and the tempo are wrong."
    },
    "generalisation": "In a urea cycle defect, citrulline tells you whether the block is proximal or distal, and orotic acid tells you whether carbamoyl phosphate is accumulating behind it.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q014",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Ethanol metabolism and gluconeogenesis",
    "difficulty": "Moderate",
    "stem": "A malnourished man is brought to hospital hypoglycaemic after a prolonged alcohol binge during which he ate almost nothing. Lactate is raised and ketones are present. He has taken no insulin and no oral hypoglycaemic agent.",
    "options": {
      "A": "Ethanol stimulates pancreatic insulin secretion",
      "B": "Ethanol inhibits glucagon release from pancreatic alpha cells",
      "C": "Ethanol has caused acute hepatocellular failure with loss of synthetic function",
      "D": "Oxidation of ethanol raises the hepatic NADH:NAD+ ratio, diverting pyruvate to lactate and oxaloacetate to malate",
      "E": "Ethanol directly inhibits glucose-6-phosphatase"
    },
    "correct_letter": "D",
    "why_correct": "The question is testing whether a redox change can be followed through to a clinical consequence. Ethanol is oxidised to acetaldehyde and then to acetate, and both steps generate NADH. The resulting rise in the hepatic NADH:NAD+ ratio pulls two key reactions backwards: pyruvate is reduced to lactate, and oxaloacetate is reduced to malate. Both of those are gluconeogenic substrates, so the pathway is starved of its inputs at the same time as lactate rises. In a well-fed person this would be masked by glycogenolysis, which is why the history of prolonged fasting matters — with glycogen already depleted, gluconeogenesis was the only remaining route to glucose.",
    "distractor_analysis": {
      "A": "The reflex response to hypoglycaemia is to look for excess insulin, and this is the most available candidate. It is contradicted by the ketones: insulin suppresses ketogenesis, so hypoglycaemia occurring alongside ketosis argues against a hyperinsulinaemic mechanism rather than for it.",
      "B": "A plausible-sounding counter-regulatory failure, and it keeps the explanation at the level of hormones, which is where most hypoglycaemia questions live. The reasoning fails because glucagon cannot raise glucose without substrate — the lesion here is substrate availability, not the signal to use it.",
      "C": "Tempting because the patient drinks heavily and the liver is the organ in question. But this degree of hypoglycaemia does not require hepatocellular failure, and the picture reverses within hours of glucose and thiamine, which acute liver failure would not.",
      "E": "Reads well because it names the correct final common step for both glycogenolysis and gluconeogenesis, and blocking it really would cause fasting hypoglycaemia with raised lactate. It is not, however, an action of ethanol — it is the lesion in glucose-6-phosphatase deficiency, which is what makes this option attractive to a candidate who has matched the biochemical pattern without checking the cause."
    },
    "generalisation": "Hypoglycaemia with raised lactate and ketones in a fasting drinker is a substrate problem, not a hormone problem.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q015",
    "subdomain": "Clinical physiology",
    "topic": "Mechanisms of hypoxaemia and the response to inspired oxygen",
    "difficulty": "Moderate",
    "stem": "Two hypoxaemic patients are each given 100% oxygen through a tight-fitting mask. In one, the arterial oxygen tension rises substantially. In the other, it barely changes.",
    "options": {
      "A": "In the second patient a fraction of the cardiac output bypasses ventilated alveoli entirely, so raising alveolar oxygen cannot reach it",
      "B": "The second patient has ventilation–perfusion mismatch, which is not reliably overcome by raising the inspired oxygen concentration",
      "C": "The second patient is hypoventilating, so alveolar carbon dioxide rises at the expense of alveolar oxygen",
      "D": "The second patient has a thickened alveolar–capillary membrane limiting diffusion",
      "E": "The second patient has a left-shifted oxyhaemoglobin dissociation curve reducing oxygen unloading"
    },
    "correct_letter": "A",
    "why_correct": "This is testing the single property that distinguishes shunt from every other cause of hypoxaemia: whether blood and alveolar gas ever meet. In a true right-to-left shunt, the shunted fraction never contacts alveolar gas, so its oxygen content is fixed at mixed venous values no matter what is delivered to the alveoli. The blood that does pass ventilated alveoli is already close to fully saturated, so extra oxygen can only be carried in dissolved form, which adds very little. The two streams mix, and the arterial tension stays low. Every other mechanism leaves some contact between blood and alveolar gas, which is why raising the inspired concentration works in those.",
    "distractor_analysis": {
      "B": "The most tempting option, because ventilation–perfusion mismatch is the commonest cause of hypoxaemia and because high inspired oxygen genuinely can worsen it through absorption atelectasis. The reasoning goes wrong at the crucial step: low ventilation–perfusion units are still ventilated, so given time at a high inspired concentration their alveolar oxygen rises and they return oxygenated blood. Mismatch responds to oxygen; shunt does not.",
      "C": "Hypoventilation does cause hypoxaemia, and the physiology quoted is correct. But it is the mechanism that responds most readily of all — the alveolar gas equation shows that raising the inspired fraction easily overwhelms a raised alveolar carbon dioxide.",
      "D": "Attractive because a thickened membrane sounds like a barrier that oxygen cannot cross. In fact raising the inspired concentration increases the alveolar-to-capillary pressure gradient, which is precisely how a diffusion limitation is overcome, so this patient would improve.",
      "E": "Confuses arterial oxygen tension with oxygen delivery to tissues. A left shift impairs unloading at the tissues; it does not prevent the arterial tension rising when the inspired concentration is raised."
    },
    "generalisation": "Marked failure of hypoxaemia to respond to a high inspired oxygen concentration strongly suggests a right-to-left shunt, because shunt is the mechanism in which blood and alveolar gas never meet at all.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q016",
    "subdomain": "Clinical physiology",
    "topic": "Acid–base status and protein binding of calcium",
    "difficulty": "Moderate",
    "stem": "A woman hyperventilating during an episode of acute anxiety develops perioral tingling and carpopedal spasm. Total plasma calcium is normal.",
    "options": {
      "A": "Alkalosis has driven acute renal loss of calcium",
      "B": "The fall in carbon dioxide has suppressed parathyroid hormone secretion",
      "C": "Alkalosis has shifted potassium into cells, and the resulting hypokalaemia is causing the neuromuscular signs",
      "D": "Calcium is being chelated by citrate released during the episode",
      "E": "Alkalosis increases the net negative charge on albumin, so more calcium is bound and the ionised fraction falls"
    },
    "correct_letter": "E",
    "why_correct": "The question is testing whether a normal total calcium can be reconciled with symptomatic hypocalcaemia. Albumin carries binding sites that are occupied by hydrogen ions. As alkalosis develops those hydrogen ions dissociate, the protein becomes more negatively charged, and it binds more calcium. Nothing enters or leaves the body, so the total concentration is unchanged — but the ionised fraction, which is the only fraction that is physiologically active, falls. Neuromuscular excitability rises accordingly, producing paraesthesiae and tetany. The timescale fits too: this is a binding shift, which happens in seconds.",
    "distractor_analysis": {
      "A": "Reaches for a route by which calcium could genuinely leave the plasma, but the kidney cannot alter plasma calcium over the few minutes an episode lasts. The stem also states the total calcium is normal, which excludes net loss.",
      "B": "Inverts the direction of the control loop. A falling ionised calcium stimulates parathyroid hormone rather than suppressing it, and in any case the hormonal response operates over hours, far too slowly to explain symptoms that arrive within minutes.",
      "C": "The most instructive wrong answer, because the physiology in the first half is correct — alkalosis really does shift potassium into cells. The error is attributing the symptoms to it. Hypokalaemia causes weakness and arrhythmia; it reduces rather than increases neuromuscular excitability, so it cannot produce tetany.",
      "D": "The right principle applied to the wrong ligand. Chelation does lower the ionised fraction while leaving the total unchanged, which is exactly what happens in massive transfusion with citrated blood. There is no source of citrate in acute hyperventilation."
    },
    "generalisation": "Symptoms track ionised calcium, not total calcium, and acid–base status is the commonest reason the two diverge.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q017",
    "subdomain": "Immunology",
    "topic": "Bradykinin-mediated angioedema",
    "difficulty": "Moderate",
    "stem": "A man has recurrent episodes of non-itchy swelling of the lips and larynx, without any urticarial rash. The attacks do not respond to antihistamines, corticosteroids or intramuscular adrenaline. C4 is persistently low between episodes.",
    "options": {
      "A": "The reaction is IgE-mediated, but the dose of adrenaline reaching laryngeal tissue is insufficient",
      "B": "Mast cells are degranulating in a tissue compartment that antihistamines do not reach",
      "C": "The mediator is bradykinin, generated by unopposed kallikrein activity, rather than histamine released from mast cells",
      "D": "Complement consumption has depleted the anaphylatoxins through which these drugs act",
      "E": "Autoantibodies against the high-affinity IgE receptor are blocking the action of antihistamines"
    },
    "correct_letter": "C",
    "why_correct": "This is testing whether treatment failure can be read as evidence about mechanism. Antihistamines, corticosteroids and adrenaline all act on the mast-cell and histamine axis. Their complete failure, together with the absence of itch and urticaria, indicates that this axis is not involved. In C1 inhibitor deficiency the brake on the contact system is lost, kallikrein activity goes unopposed, and bradykinin is generated — a mediator none of those drugs affects. The persistently low C4 is the corroborating clue, reflecting ongoing consumption by unregulated C1 activity.",
    "distractor_analysis": {
      "A": "The natural clinical instinct when adrenaline appears not to work is to give more of it, and in true anaphylaxis that instinct is correct. Here it fails because the drug has no target: the absence of itch and urticaria already signals that mast cells are not driving the swelling.",
      "B": "Invents a pharmacokinetic explanation for what is a pharmacodynamic problem. Antihistamines distribute perfectly well to the tissues involved; there is simply no histamine for them to antagonise.",
      "D": "Uses a genuine feature of the case — complement consumption, evidenced by the low C4 — to construct a mechanism that does not exist. Antihistamines and adrenaline do not act through C3a or C5a, so their depletion could not explain the treatment failure.",
      "E": "Superficially attractive because autoantibodies to the high-affinity IgE receptor really are found in chronic spontaneous urticaria. But that condition itches, produces weals and generally does respond to antihistamines — the opposite of the picture described."
    },
    "generalisation": "Angioedema without urticaria or itch that ignores antihistamines and adrenaline is bradykinin-mediated, whether from C1 inhibitor deficiency or from an ACE inhibitor; the treatment failure is itself the diagnostic clue.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q018",
    "subdomain": "Immunology",
    "topic": "Immunofluorescence patterns and antigen distribution",
    "difficulty": "Difficult",
    "stem": "A renal biopsy taken from a patient with rapidly progressive glomerulonephritis shows smooth linear deposition of IgG along the glomerular basement membrane on direct immunofluorescence.",
    "options": {
      "A": "The antibody is bound to an intrinsic component distributed uniformly along the basement membrane",
      "B": "Circulating immune complexes have deposited in the subendothelial space",
      "C": "Complement has been activated by the alternative pathway in the absence of antibody",
      "D": "The antibody is directed against a neutrophil cytoplasmic antigen",
      "E": "Immune complexes have formed in situ against a planted exogenous antigen"
    },
    "correct_letter": "A",
    "why_correct": "The question is testing whether a staining pattern can be reasoned back to the nature of the target, rather than simply matched to a disease name. Immunofluorescence maps where antibody is bound. A smooth, unbroken line means the antigen is present continuously along the whole structure, which is true only of an intrinsic component of the membrane itself. Deposits that arrive from the circulation, or that form against something lodged focally, cannot be evenly distributed and therefore cannot stain linearly.",
    "distractor_analysis": {
      "B": "Describes the mechanism this question is defined against. Circulating complexes deposit at discrete points, so the staining they produce is granular — the classical lumpy-bumpy appearance — not linear. A candidate choosing this has identified a real cause of glomerulonephritis without asking what pattern it would produce.",
      "C": "Corresponds to C3 glomerulopathy, where the alternative pathway is dysregulated. The immunofluorescence there shows C3 with little or no immunoglobulin. Here IgG is present and it is the IgG that is linear, so the injury is antibody-driven.",
      "D": "The strongest distractor, because ANCA-associated disease is the commonest cause of the clinical syndrome given and is the first association most candidates make with rapidly progressive glomerulonephritis. The reasoning fails on the biopsy: ANCA-associated glomerulonephritis is pauci-immune, showing little or no immunoglobulin staining at all, so bright linear IgG argues against it.",
      "E": "A real mechanism, and the reasoning gets close. But a planted antigen lodges at discrete sites, so antibody forming against it in situ still produces granular staining."
    },
    "generalisation": "On immunofluorescence the pattern maps onto the antigen's distribution: linear means a uniform structural component, granular means discrete deposits, and absent immunoglobulin means the injury is not antibody-mediated.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q019",
    "subdomain": "Genetics",
    "topic": "Anticipation and trinucleotide repeat instability",
    "difficulty": "Moderate",
    "stem": "A man develops Huntington's disease at the age of 52. His son develops the disease at 27, and testing shows the son carries a longer CAG repeat than his father.",
    "options": {
      "A": "Genomic imprinting has silenced the allele inherited from the mother",
      "B": "Somatic mosaicism has arisen in the son after fertilisation",
      "C": "The same mutation is showing variable expressivity between the two generations",
      "D": "The repeat is unstable during meiosis, and expansion occurs more often during spermatogenesis",
      "E": "Penetrance was reduced in the father's generation"
    },
    "correct_letter": "D",
    "why_correct": "This is testing whether the candidate notices that the mutation itself has changed. The son's repeat is longer than his father's, which rules out every explanation that assumes an identical lesion behaving differently. Trinucleotide repeats are copied unfaithfully during meiosis, and the instability is greater in spermatogenesis than in oogenesis, so expansion is more likely when the allele passes through the father. A longer repeat produces earlier onset, which is what anticipation describes.",
    "distractor_analysis": {
      "A": "Tempting because imprinting is the other familiar mechanism producing parent-of-origin effects, and the disease here did come through the father. But imprinting alters which allele is expressed; it does not alter the allele. It cannot account for a measurably longer repeat in the son.",
      "B": "Somatic mosaicism of the repeat is a genuine phenomenon in Huntington's disease, with repeat length differing between tissues, which is what makes this option credible. It fails on transmission: a change arising after fertilisation in the son is not something he inherited, whereas the comparison being made is between father and son.",
      "C": "The right answer to a different question. Variable expressivity explains differing severity in people carrying the same mutation. Here the mutation is not the same, and the stem says so explicitly.",
      "E": "Describes carriers who never develop the disease. The father has the disease, so penetrance is not the variable in question."
    },
    "generalisation": "Anticipation means the mutation itself changed between generations, so when the age of onset falls ask whether the lesion has expanded rather than whether the same lesion is behaving differently.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  },
  {
    "id": "M1Q020",
    "subdomain": "Genetics",
    "topic": "Genomic imprinting",
    "difficulty": "Moderate",
    "stem": "Two unrelated children are each found to have a deletion of the same region of chromosome 15, yet they have entirely different and well-recognised clinical syndromes.",
    "options": {
      "A": "The two deletions differ in extent, so different genes have been removed",
      "B": "The region is imprinted, so which genes are expressed depends on the parent from whom the deleted chromosome came",
      "C": "One child has a deletion and the other has uniparental disomy of the region",
      "D": "Skewed X-inactivation has silenced different alleles in the two children",
      "E": "The syndrome shows incomplete penetrance in one of the two children"
    },
    "correct_letter": "B",
    "why_correct": "The question is testing the principle that for some regions of the genome, expression depends on parental origin rather than on sequence alone. Within this imprinted region, some genes are expressed only from the paternally inherited chromosome and others only from the maternally inherited one. A deletion therefore removes a different functional set depending on which parent contributed the deleted copy, and two distinct syndromes result from what looks, at the level of the deletion, like the same lesion.",
    "distractor_analysis": {
      "A": "The natural genotype-first explanation, and correct for many contiguous gene syndromes where breakpoints vary. It is excluded by the stem, which specifies the same region, and it would not generate two consistently distinct, well-defined syndromes rather than a spectrum of severity.",
      "C": "Names a real alternative mechanism — uniparental disomy does produce both of these syndromes — but the stem states that both children have deletions. It also describes a route rather than the principle: uniparental disomy causes disease through imprinting, so this option restates the answer's mechanism while contradicting the stem.",
      "D": "Tempting because X-inactivation is the other well-known mechanism by which one parental copy of a gene falls silent. It applies only to the X chromosome; the region described is autosomal, so the mechanism is unavailable.",
      "E": "Would explain one child being unaffected while carrying the deletion. It cannot explain two affected children having different syndromes."
    },
    "generalisation": "When one deletion produces two syndromes, the variable is not the deletion but which parent it came from.",
    "review_status": "cleared_verbally",
    "cleared_by": "A. Mansour",
    "cleared_date": "2026-08-19",
    "reviewer": "",
    "signoff_date": ""
  }
];

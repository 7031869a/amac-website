/* ============================================================
   AMaC — MRCP Part 1 question bank  (mrcp1-questions.js)
   ------------------------------------------------------------
   The MRCP Part 1 question bank data used by mrcp1.html,
   mrcp1-study.html and mrcp1-mock.html.

   Each question carries these fields:
     id, subdomain, topic, difficulty, stem, options,
     correct_letter, why_correct, distractor_analysis,
     generalisation, review_status

   review_status is used by the pages to identify placeholder
   questions.

   Validation runs against the full copy in the private repository, not this file.
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
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
    "review_status": "reviewed"
  },
  {
    "id": "M1Q021",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Acute pancreatitis: metabolic cause",
    "difficulty": "Moderate",
    "stem": "A 46-year-old man is admitted with acute pancreatitis. Abdominal ultrasonography shows no gallstones, and he reports no significant alcohol intake. His corrected serum calcium and medication history do not suggest a cause. Which additional blood test is most useful to investigate another recognised metabolic cause?",
    "options": {
      "A": "Serum amylase",
      "B": "Serum triglycerides",
      "C": "Serum ferritin",
      "D": "Serum caeruloplasmin",
      "E": "Serum alpha-1 antitrypsin"
    },
    "correct_letter": "B",
    "why_correct": "Hypertriglyceridaemia is a recognised cause of acute pancreatitis. Once gallstones and significant alcohol exposure are not evident, triglyceride measurement is an appropriate part of investigating the cause.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q022",
    "subdomain": "Respiratory",
    "topic": "Obstructive sleep apnoea/hypopnoea syndrome",
    "difficulty": "Moderate",
    "stem": "A 49-year-old man is obese and reports loud snoring, witnessed episodes of breathing cessation during sleep and marked daytime sleepiness. Which diagnosis is most likely?",
    "options": {
      "A": "Idiopathic pulmonary fibrosis",
      "B": "Obstructive sleep apnoea/hypopnoea syndrome",
      "C": "Bronchiectasis",
      "D": "Pulmonary embolism",
      "E": "Alpha-1 antitrypsin deficiency"
    },
    "correct_letter": "B",
    "why_correct": "Obesity with loud snoring, witnessed apnoeas and excessive daytime sleepiness is the classic presentation of obstructive sleep apnoea/hypopnoea syndrome. The diagnosis is confirmed with a sleep study, such as home respiratory polygraphy. The other options cause breathlessness or chronic lung disease, not this sleep-related pattern.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q023",
    "subdomain": "Haematology & oncology",
    "topic": "Reactive thrombocytosis in iron deficiency",
    "difficulty": "Moderate",
    "stem": "A 67-year-old man presents with fatigue. Blood tests show:, Hb 86 g/L, MCV 72 fL, Ferritin 8 µg/L, Platelets 520 × 10⁹/LHe has no overt bleeding. Which interpretation best explains the platelet count?",
    "options": {
      "A": "The thrombocytosis is a typical primary feature of iron deficiency",
      "B": "The thrombocytosis is most likely a reactive response associated with iron deficiency",
      "C": "The thrombocytosis establishes a diagnosis of essential thrombocythaemia",
      "D": "The thrombocytosis excludes iron deficiency as the cause of the anaemia",
      "E": "The thrombocytosis indicates that the microcytosis is caused by polycythaemia"
    },
    "correct_letter": "B",
    "why_correct": "Decisive clue: The patient has clear biochemical evidence of iron deficiency, with thrombocytosis occurring in that context. Reasoning path: Iron deficiency can be associated with reactive thrombocytosis. The platelet count therefore does not automatically imply a primary myeloproliferative disorder. The important discrimination is between a plausible reactive explanation and prematurely diagnosing a primary platelet disorder.",
    "distractor_analysis": {
      "A": "The wording “typical primary feature” is incorrect: thrombocytosis is a recognised association but does not define iron deficiency.",
      "C": "A raised platelet count alone does not establish essential thrombocythaemia.",
      "D": "Iron deficiency is directly demonstrated by the low ferritin.",
      "E": "Polycythaemia does not explain this microcytic iron-deficiency anaemia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q024",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Suspected meningococcal disease: immediate action",
    "difficulty": "Difficult",
    "stem": "A 24-year-old man presents with fever, severe headache, photophobia and a non-blanching purpuric rash. He is confused and appears seriously unwell. What is the most appropriate immediate action?",
    "options": {
      "A": "Arrange outpatient neurological assessment",
      "B": "Perform lumbar puncture before giving any treatment",
      "C": "Treat as a medical emergency and arrange immediate hospital assessment and treatment",
      "D": "Wait for the rash to become more extensive before starting treatment",
      "E": "Arrange routine blood-borne-virus screening before treatment"
    },
    "correct_letter": "C",
    "why_correct": "Decisive clue: Suspected meningococcal disease/meningitis with systemic toxicity and purpuric rash. Reasoning path: Suspected meningococcal disease requires urgent hospital assessment and treatment. Current UKHSA guidance states that people with suspected bacterial meningitis or meningococcal disease should be transferred to hospital as an emergency, and treatment should not be delayed unnecessarily for investigations.",
    "distractor_analysis": {
      "A": "This presentation is an emergency, not an outpatient problem.",
      "B": "Lumbar puncture should not delay appropriate emergency management.",
      "D": "Waiting is unsafe.",
      "E": "Routine screening is irrelevant to the immediate emergency."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q025",
    "subdomain": "Cardiology",
    "topic": "Pulmonary embolism: mechanism of hypoxaemia",
    "difficulty": "Moderate",
    "stem": "A 45-year-old woman develops sudden pleuritic chest pain and breathlessness. She has a swollen, painful calf. Her oxygen saturation is reduced. Which pathophysiological abnormality is primarily responsible for the hypoxaemia?",
    "options": {
      "A": "Diffuse alveolar destruction",
      "B": "Ventilation of alveoli with reduced or absent perfusion",
      "C": "Reduced inspired oxygen concentration",
      "D": "Increased pulmonary venous pressure from left ventricular failure",
      "E": "Global reduction in alveolar ventilation"
    },
    "correct_letter": "B",
    "why_correct": "Reasoning: Pulmonary vascular obstruction creates regions that are ventilated but poorly perfused, producing ventilation–perfusion mismatch and contributing to hypoxaemia.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q026",
    "subdomain": "Endocrinology & diabetes",
    "topic": "SIADH in small-cell lung cancer",
    "difficulty": "Moderate",
    "stem": "A 69-year-old man with a 50-pack-year smoking history presents with weight loss and persistent cough. Chest imaging shows a central lung mass. He develops confusion and a serum sodium concentration of 121 mmol/L. Serum osmolality is low and urine osmolality is inappropriately high. Which mechanism most likely explains his hyponatraemia?",
    "options": {
      "A": "Excess aldosterone secretion",
      "B": "Ectopic secretion of antidiuretic hormone",
      "C": "Increased renal sodium reabsorption caused by cortisol deficiency",
      "D": "Excess atrial natriuretic peptide secretion",
      "E": "Primary polydipsia"
    },
    "correct_letter": "B",
    "why_correct": "Decisive clue: Hypotonic hyponatraemia with inappropriately concentrated urine in a patient with a central lung malignancy. Reasoning path: The findings are consistent with SIADH, classically associated with small-cell lung cancer.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q027",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Thyroid function: primary hypothyroidism",
    "difficulty": "Moderate",
    "stem": "A 38-year-old woman reports fatigue, constipation and cold intolerance. Thyroid function tests show a markedly raised TSH and a low free T4. Which diagnosis best explains this pattern?",
    "options": {
      "A": "Primary hypothyroidism",
      "B": "Secondary hypothyroidism",
      "C": "Subclinical hypothyroidism",
      "D": "T3 thyrotoxicosis",
      "E": "Euthyroid sick syndrome"
    },
    "correct_letter": "A",
    "why_correct": "In primary thyroid failure, the thyroid gland produces insufficient hormone, so free T4 falls and pituitary TSH rises in response. Subclinical hypothyroidism has a raised TSH with free T4 still within the reference range. Central hypothyroidism generally produces a low free T4 with a TSH that is low or inappropriately normal.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q028",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Rheumatoid arthritis: referral despite negative serology",
    "difficulty": "Moderate",
    "stem": "A 43-year-old woman has persistent synovitis affecting both wrists and several metacarpophalangeal joints. Her rheumatoid factor is negative, and her CRP is within the reference range. Which is the most appropriate next step?",
    "options": {
      "A": "Exclude rheumatoid arthritis because the rheumatoid factor is negative",
      "B": "Refer urgently for specialist assessment",
      "C": "Repeat the rheumatoid factor annually before considering referral",
      "D": "Diagnose osteoarthritis because the CRP is normal",
      "E": "Start long-term oral glucocorticoids without establishing a diagnosis"
    },
    "correct_letter": "B",
    "why_correct": "Persistent synovitis involving multiple joints, particularly the small joints of the hands, warrants urgent specialist referral even if rheumatoid factor, anti-CCP antibodies or inflammatory markers are negative. Investigations should not delay referral.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q029",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Metabolic medicine: SGLT2 inhibitor-associated ketoacidosis",
    "difficulty": "Moderate",
    "stem": "A 59-year-old man with type 2 diabetes takes an SGLT2 inhibitor. After several days of vomiting and poor oral intake, he develops abdominal pain and deep breathing. His blood glucose is only modestly raised, but blood ketones are elevated and blood tests show a metabolic acidosis. Which diagnosis should be suspected?",
    "options": {
      "A": "Hyperosmolar hyperglycaemic state without ketosis",
      "B": "SGLT2 inhibitor-associated diabetic ketoacidosis",
      "C": "Isolated respiratory alkalosis",
      "D": "Uncomplicated fasting hypoglycaemia",
      "E": "Metformin-associated vitamin B12 deficiency"
    },
    "correct_letter": "B",
    "why_correct": "SGLT2 inhibitor-associated DKA may occur without the marked hyperglycaemia traditionally associated with DKA. Vomiting, abdominal pain, deep breathing, ketosis and metabolic acidosis are warning features. The medicine should be stopped and the patient requires urgent hospital assessment and treatment for DKA.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q030",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Phaeochromocytoma: biochemical investigation",
    "difficulty": "Moderate",
    "stem": "A 45-year-old man reports episodic headaches, palpitations, sweating and marked surges in blood pressure. Which biochemical investigation is most appropriate when a phaeochromocytoma or paraganglioma is suspected?",
    "options": {
      "A": "Plasma free metanephrines",
      "B": "Serum aldosterone alone",
      "C": "A random serum cortisol",
      "D": "Serum calcitonin alone",
      "E": "A fasting insulin concentration"
    },
    "correct_letter": "A",
    "why_correct": "Phaeochromocytomas and paragangliomas produce catecholamines and their metabolites. Plasma free metanephrines are an established biochemical investigation; urinary fractionated metanephrines are another option in appropriate circumstances. Sampling conditions and interpretation matter because stress, medicines and other factors can affect results.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q031",
    "subdomain": "Haematology & oncology",
    "topic": "Disseminated intravascular coagulation",
    "difficulty": "Moderate",
    "stem": "A 63-year-old man with severe sepsis develops widespread oozing from venepuncture sites. His platelet count is falling, prothrombin time is prolonged, fibrinogen is low and D-dimer is markedly raised. Which process best explains these findings?",
    "options": {
      "A": "Systemic activation of coagulation with consumption of platelets and clotting factors",
      "B": "Isolated immune-mediated platelet destruction",
      "C": "An inherited deficiency of factor VIII alone",
      "D": "Isolated vitamin B12 deficiency",
      "E": "Reduced platelet production without activation of coagulation"
    },
    "correct_letter": "A",
    "why_correct": "DIC involves widespread coagulation activation, with consumption of platelets and coagulation factors and increased fibrin turnover. It can cause both bleeding and thrombosis. The underlying cause, such as sepsis, must be treated while the coagulopathy is managed according to the clinical situation.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q032",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Falls and comprehensive assessment",
    "difficulty": "Moderate",
    "stem": "A 79-year-old man has fallen three times in the past six months. He reports feeling unsteady when turning and has difficulty rising from a chair. He takes several regular medicines and lives alone. Which is the most appropriate next step?",
    "options": {
      "A": "Prescribe a walking frame without further assessment",
      "B": "Arrange a comprehensive falls assessment and individualised management",
      "C": "Reassure him that falls are an inevitable consequence of ageing",
      "D": "Request a CT head scan as the sole investigation",
      "E": "Advise him to avoid walking outdoors"
    },
    "correct_letter": "B",
    "why_correct": "Recurrent falls warrant a comprehensive assessment rather than a single intervention\u0001The assessment \u0002 consider gait and balance, muscle strength, medicines, cardiovascular factors, vision, functional ability and environmental hazards. Management should address the factors identified. NICE advises against using falls prediction tools to estimate an individual's future risk.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q033",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Hepatic encephalopathy: identify a precipitant",
    "difficulty": "Moderate",
    "stem": "A 62-year-old man with cirrhosis is brought to hospital with new confusion and disorientation. He has had no bowel movement for four days. There is no reported haematemesis or melaena. Which potential precipitating factor should be specifically addressed as part of his assessment?",
    "options": {
      "A": "Constipation",
      "B": "Iron deficiency without anaemia",
      "C": "Stable chronic thrombocytopenia",
      "D": "Uncomplicated gallstones",
      "E": "Chronic hepatitis seropositivity without evidence of active disease"
    },
    "correct_letter": "A",
    "why_correct": "Constipation can precipitate hepatic encephalopathy\u0001The assessment \u0002 also look for other causes and precipitants, including infection, gastrointestinal bleeding, dehydration and medication-related problems; identifying constipation does not exclude these.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q034",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Adrenal disease: primary hyperaldosteronism",
    "difficulty": "Moderate",
    "stem": "A 48-year-old man has persistent hypertension despite treatment with three antihypertensive medicines. His potassium is low, and his bicarbonate is raised. There is no history of vomiting or diuretic use. Which biochemical investigation is most appropriate when screening for primary aldosteronism?",
    "options": {
      "A": "Plasma aldosterone-to-renin ratio",
      "B": "Plasma metanephrines alone",
      "C": "An overnight dexamethasone suppression test",
      "D": "A short Synacthen test",
      "E": "Serum 17-hydroxyprogesterone"
    },
    "correct_letter": "A",
    "why_correct": "Primary aldosteronism causes autonomous aldosterone production, leading to sodium retention, hypertension and increased renal potassium and hydrogen ion loss. Screening assesses aldosterone in relation to renin. Hypokalaemia supports the suspicion but is not present in every affected patient.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q035",
    "subdomain": "Haematology & oncology",
    "topic": "Chronic myeloid leukaemia",
    "difficulty": "Moderate",
    "stem": "A 52-year-old man is found to have marked leukocytosis on a routine blood test. The blood film shows granulocytes at different stages of maturation, and examination reveals splenomegaly. Which molecular abnormality is characteristic of chronic myeloid leukaemia?",
    "options": {
      "A": "BCR::ABL1 fusion",
      "B": "PML::RARA fusion",
      "C": "JAK2 mutation in every case",
      "D": "BRAF V600E mutation",
      "E": "MYC rearrangement as the defining abnormality"
    },
    "correct_letter": "A",
    "why_correct": "Chronic myeloid leukaemia is characterised by the BCR::ABL1 fusion, usually resulting from the Philadelphia chromosome translocation t(9;22). The fusion encodes a constitutively active tyrosine kinase. Molecular or cytogenetic testing is needed to confirm the diagnosis.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q036",
    "subdomain": "Haematology & oncology",
    "topic": "Vitamin B12 deficiency: neurological presentation",
    "difficulty": "Moderate",
    "stem": "A 67-year-old man presents with progressive numbness in both feet, unsteadiness and reduced vibration sense at the ankles. His full blood count shows macrocytosis. Which deficiency is most likely to explain both the haematological and neurological findings?",
    "options": {
      "A": "Iron",
      "B": "Vitamin B12",
      "C": "Vitamin C",
      "D": "Vitamin K",
      "E": "Folate"
    },
    "correct_letter": "B",
    "why_correct": "Vitamin B12 deficiency can cause megaloblastic anaemia and neurological dysfunction, including peripheral neuropathy and impaired proprioception. Neurological manifestations can occur without prominent anaemia, so a normal haemoglobin does not reliably exclude deficiency.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q037",
    "subdomain": "Cardiology",
    "topic": "Suspected deep-vein thrombosis: choosing the next investigation",
    "difficulty": "Moderate",
    "stem": "A 44-year-old woman presents with unilateral calf swelling and tenderness. After clinical assessment, her two-level DVT Wells score is 3. A proximal leg-vein ultrasound scan can be obtained promptly. According to NICE guidance, what is the appropriate next investigation?",
    "options": {
      "A": "D-dimer as the only initial test, irrespective of clinical probability",
      "B": "Proximal leg-vein ultrasound",
      "C": "CT pulmonary angiography",
      "D": "Thrombophilia testing before imaging",
      "E": "No investigation unless the D-dimer is elevated"
    },
    "correct_letter": "B",
    "why_correct": "A two-level DVT Wells score of 2 or more makes DVT likely. NICE recommends proximal leg-vein ultrasound, with the result available within 4 hours if possible. If it cannot be obtained within that time, the recommended pathway includes D-dimer testing, interim therapeutic anticoagulation when appropriate, and ultrasound within 24 hours.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q038",
    "subdomain": "Respiratory",
    "topic": "Tension pneumothorax: immediate action",
    "difficulty": "Difficult",
    "stem": "A 23-year-old man suddenly develops severe unilateral chest pain and breathlessness. He is hypotensive, tachycardic and severely distressed. Examination reveals absent breath sounds on one side and marked hyperresonance. What is the most appropriate immediate action?",
    "options": {
      "A": "Arrange an outpatient CT chest",
      "B": "Perform spirometry",
      "C": "Treat immediately as a tension pneumothorax",
      "D": "Wait for a chest radiograph before intervening",
      "E": "Start oral antibiotics"
    },
    "correct_letter": "C",
    "why_correct": "Decisive clue: Shock + acute unilateral absent breath sounds + hyperresonance. The diagnosis is clinical in this emergency context; waiting for imaging would delay life-saving treatment.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q039",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Type 1 diabetes: illness and ketones",
    "difficulty": "Moderate",
    "stem": "A 24-year-old man with established type 1 diabetes develops vomiting and abdominal pain during a febrile illness. His capillary glucose is elevated and he appears dehydrated. Which additional bedside test is most directly useful when assessing for diabetic ketoacidosis?",
    "options": {
      "A": "Capillary blood ketones",
      "B": "Urinary albumin-to-creatinine ratio",
      "C": "Serum thyroid peroxidase antibodies",
      "D": "A fasting lipid profile",
      "E": "A glycated haemoglobin measurement alone"
    },
    "correct_letter": "A",
    "why_correct": "In a person with type 1 diabetes who is acutely unwell and may have DKA, blood ketone measurement helps identify ketosis and guide urgent assessment. Glucose or HbA1c alone cannot establish or exclude DKA; assessment also requires acid–base and electrolyte evaluation.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q040",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Giant cell arteritis: immediate management",
    "difficulty": "Moderate",
    "stem": "A 74-year-old woman presents with a new temporal headache, scalp tenderness and jaw pain when chewing. She reports a brief episode of transient visual loss in one eye earlier that day. Giant cell arteritis is suspected. What is the most appropriate immediate approach?",
    "options": {
      "A": "Wait for temporal artery biopsy results before starting treatment",
      "B": "Arrange urgent specialist assessment and start glucocorticoid treatment immediately",
      "C": "Reassure her because transient visual loss is not associated with giant cell arteritis",
      "D": "Prescribe a triptan and review in one week",
      "E": "Wait for ESR and CRP results before deciding whether treatment is needed"
    },
    "correct_letter": "B",
    "why_correct": "Suspected giant cell arteritis with visual symptoms is an emergency because vision loss may become permanent. Glucocorticoid treatment should not be delayed while awaiting confirmatory investigations. Urgent specialist assessment and the appropriate diagnostic pathway remain essential.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q041",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Number needed to harm",
    "difficulty": "Moderate",
    "stem": "In a randomised trial, an adverse event occurs in 2% of patients receiving placebo and 5% receiving a new treatment over the same follow-up period. What is the number needed to harm (NNH) for the adverse event?",
    "options": {
      "A": "3",
      "B": "20",
      "C": "34",
      "D": "50",
      "E": "100"
    },
    "correct_letter": "C",
    "why_correct": "The absolute risk increase is 5% − 2% = 3% (0.03). NNH = 1/0.03 = 33.3; by convention the NNH is rounded up to the next whole number, giving 34.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q042",
    "subdomain": "Anatomy, physiology & basic science",
    "topic": "Vitamin D physiology",
    "difficulty": "Moderate",
    "stem": "A patient with severe vitamin D deficiency develops hypocalcaemia and secondary hyperparathyroidism. Which action of parathyroid hormone helps compensate for the low serum calcium concentration?",
    "options": {
      "A": "Reduced renal calcium reabsorption",
      "B": "Increased renal phosphate reabsorption",
      "C": "Increased renal calcium reabsorption",
      "D": "Inhibition of renal 1α-hydroxylase",
      "E": "Suppression of osteoclast-mediated bone resorption"
    },
    "correct_letter": "C",
    "why_correct": "Parathyroid hormone increases renal calcium reabsorption, particularly in the distal nephron, and promotes phosphate excretion. It also stimulates renal 1α-hydroxylase, increasing production of active vitamin D. These actions help restore serum calcium, although severe vitamin D deficiency can limit intestinal calcium absorption.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q043",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Infectious mononucleosis: antibiotic-associated rash",
    "difficulty": "Moderate",
    "stem": "A 19-year-old student presents with fever, severe sore throat, posterior cervical lymphadenopathy and marked fatigue. A heterophile antibody test supports infectious mononucleosis. Which antibiotic-related statement is most appropriate?",
    "options": {
      "A": "Amoxicillin is routinely indicated to shorten the illness",
      "B": "An aminopenicillin-associated rash can occur and antibiotics do not treat the underlying viral infection",
      "C": "A rash after amoxicillin proves immediate IgE-mediated penicillin allergy",
      "D": "Antiviral treatment is routinely required for every case",
      "E": "Corticosteroids are indicated for all patients with sore throat"
    },
    "correct_letter": "B",
    "why_correct": "Infectious mononucleosis is usually caused by Epstein–Barr virus. Aminopenicillin exposure is associated with a rash in this setting, but the rash alone does not establish immediate IgE-mediated allergy. Management is generally supportive; antibiotics are reserved for a separately established bacterial indication.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q044",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Recognising frailty",
    "difficulty": "Moderate",
    "stem": "An 86-year-old woman has gradually lost weight, walks slowly, feels exhausted with everyday activities and has become less physically active. She needs increasing help with shopping and housework. There is no acute illness. Which concept best describes this clinical picture?",
    "options": {
      "A": "Delirium",
      "B": "Frailty",
      "C": "Normal ageing alone",
      "D": "Sarcopenia as the only possible diagnosis",
      "E": "Terminal illness"
    },
    "correct_letter": "B",
    "why_correct": "Frailty describes reduced physiological reserve and increased vulnerability to adverse outcomes when exposed to stressors. Weight loss, exhaustion, slow walking and reduced activity are characteristic features. Sarcopenia may contribute, but it does not fully explain the broader functional vulnerability described.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q045",
    "subdomain": "Haematology & oncology",
    "topic": "Haemolysis: interpreting the blood results",
    "difficulty": "Moderate",
    "stem": "A 34-year-old woman develops jaundice and fatigue. Her haemoglobin has fallen, reticulocytes are raised, unconjugated bilirubin is elevated, and haptoglobin is low. Which process best explains this combination?",
    "options": {
      "A": "Reduced erythropoietin production",
      "B": "Increased red-cell destruction",
      "C": "Iron deficiency from chronic blood loss",
      "D": "Suppressed bone-marrow activity without red-cell destruction",
      "E": "Reduced intestinal folate absorption as the sole mechanism"
    },
    "correct_letter": "B",
    "why_correct": "Reticulocytosis reflects a marrow response to red-cell loss or destruction. Increased unconjugated bilirubin and reduced haptoglobin support haemolysis. These findings establish a haemolytic pattern but do not, by themselves, identify its cause; the blood film, direct antiglobulin test and other investigations help distinguish the possibilities.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q046",
    "subdomain": "Neurology",
    "topic": "Cauda equina syndrome: urgent investigation",
    "difficulty": "Moderate",
    "stem": "A 46-year-old man with acute low-back pain develops new urinary retention, altered sensation around the perineum and bilateral leg symptoms. What is the most appropriate next step?",
    "options": {
      "A": "Routine physiotherapy without further assessment",
      "B": "Urgent assessment for cauda equina syndrome and emergency MRI where indicated",
      "C": "Reassurance that urinary retention is a usual feature of uncomplicated mechanical back pain",
      "D": "Elective nerve-conduction studies before deciding whether imaging is needed",
      "E": "A trial of oral antibiotics without investigation"
    },
    "correct_letter": "B",
    "why_correct": "New bladder dysfunction and saddle sensory disturbance in the context of back pain are concerning for cauda equina compression. This requires emergency assessment and urgent MRI according to the local pathway. Delayed recognition can result in permanent bladder, bowel, sexual and lower-limb dysfunction.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q047",
    "subdomain": "Haematology & oncology",
    "topic": "Multiple myeloma: recognising end-organ damage",
    "difficulty": "Moderate",
    "stem": "A 70-year-old man presents with persistent back pain, fatigue and recurrent infections. Investigations reveal normocytic anaemia, raised serum calcium, renal impairment and a monoclonal immunoglobulin. Which diagnosis best unifies these findings?",
    "options": {
      "A": "Multiple myeloma",
      "B": "Essential thrombocythaemia",
      "C": "Chronic myeloid leukaemia",
      "D": "Immune thrombocytopenia",
      "E": "Aplastic anaemia"
    },
    "correct_letter": "A",
    "why_correct": "Multiple myeloma can cause bone disease, hypercalcaemia, renal impairment and anaemia, alongside monoclonal immunoglobulin production. The combination is strongly suggestive, but confirmation requires appropriate myeloma investigations, including assessment for clonal plasma cells and myeloma-defining events.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q048",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Suspected enteric fever",
    "difficulty": "Moderate",
    "stem": "A 32-year-old traveller returns from South Asia with sustained fever, headache and abdominal discomfort. Enteric fever is suspected. He is stable enough for prompt investigation, and antibiotics have not yet been started. Which investigation is particularly important for microbiological diagnosis?",
    "options": {
      "A": "Blood cultures",
      "B": "A single stool occult-blood test",
      "C": "Serum rheumatoid factor",
      "D": "A throat swab alone",
      "E": "A urine dipstick as the definitive test"
    },
    "correct_letter": "A",
    "why_correct": "Blood cultures are important in suspected enteric fever, particularly early in illness. Stool cultures may also be useful, depending on the stage of disease and clinical context. Obtain appropriate cultures before antibiotics where this can be done without unsafe delay, and seek specialist advice on treatment and public-health implications.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q049",
    "subdomain": "Haematology & oncology",
    "topic": "Thrombotic thrombocytopenic purpura",
    "difficulty": "Moderate",
    "stem": "A 39-year-old woman presents with confusion, petechiae and fever. Blood tests show thrombocytopenia, anaemia, raised LDH and schistocytes on the blood film. Her coagulation screen is not significantly prolonged. Which diagnosis is the most urgent to consider?",
    "options": {
      "A": "Thrombotic thrombocytopenic purpura",
      "B": "Isolated immune thrombocytopenia",
      "C": "Iron-deficiency anaemia",
      "D": "Haemophilia A",
      "E": "Uncomplicated vitamin B12 deficiency without haemolysis"
    },
    "correct_letter": "A",
    "why_correct": "Thrombocytopenia with microangiopathic haemolytic anaemia and neurological features raises concern for a thrombotic microangiopathy, including TTP. Suspected TTP is a haematological emergency: urgent specialist assessment and treatment must not be delayed while awaiting confirmatory ADAMTS13 results.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q050",
    "subdomain": "Respiratory",
    "topic": "Pulmonary tuberculosis: diagnostic sampling",
    "difficulty": "Moderate",
    "stem": "A 41-year-old man has a persistent cough, weight loss and an abnormal chest radiograph suspicious for pulmonary tuberculosis. He is clinically stable. Which investigation is appropriate to obtain microbiological confirmation?",
    "options": {
      "A": "A single sputum Gram stain only",
      "B": "Multiple deep-cough sputum samples for mycobacterial microscopy and culture",
      "C": "A tuberculin skin test as the sole test for active pulmonary disease",
      "D": "Serum tuberculosis antibody testing",
      "E": "A repeat chest radiograph without respiratory sampling"
    },
    "correct_letter": "B",
    "why_correct": "NICE recommends obtaining three respiratory samples for suspected pulmonary TB, preferably including an early-morning specimen, and sending them for microscopy and culture. Rapid molecular testing is appropriate in specified circumstances. A tuberculin skin test or interferon-gamma release assay does not, on its own, confirm active pulmonary TB.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q051",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Type 2 diabetes: initial medicines",
    "difficulty": "Moderate",
    "stem": "A 56-year-old adult has newly diagnosed type 2 diabetes. They have no relevant cardiovascular or renal comorbidity, no contraindication to metformin or an SGLT2 inhibitor, and are not pregnant. According to the NICE type 2 diabetes guideline updated in February 2026, which initial medication approach is recommended?",
    "options": {
      "A": "Modified-release metformin alone",
      "B": "An SGLT2 inhibitor alone in every case",
      "C": "Modified-release metformin plus an SGLT2 inhibitor",
      "D": "Immediate insulin therapy for all newly diagnosed adults",
      "E": "A sulfonylurea plus pioglitazone as routine first-line treatment"
    },
    "correct_letter": "C",
    "why_correct": "NICE NG28 was updated in February 2026. For adults with type 2 diabetes and no relevant comorbidities, it recommends modified-release metformin and an SGLT2 inhibitor. This reflects the guideline’s emphasis on cardiovascular and renal protection as well as glycaemic control. Prescribing still requires individual review of contraindications, precautions and patient circumstances.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q052",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Polymyalgia rheumatica: distinguishing features",
    "difficulty": "Moderate",
    "stem": "A 71-year-old woman develops bilateral shoulder and hip-girdle pain with prolonged morning stiffness. She struggles to get dressed and rise from a chair because of pain, but formal muscle strength is preserved. Her inflammatory markers are raised. She has no headache, jaw claudication or visual symptoms. Which diagnosis best fits the presentation?",
    "options": {
      "A": "Polymyalgia rheumatica",
      "B": "Polymyositis",
      "C": "Myasthenia gravis",
      "D": "Osteoarthritis confined to the distal interphalangeal joints",
      "E": "Acute gout"
    },
    "correct_letter": "A",
    "why_correct": "Polymyalgia rheumatica typically causes pain and stiffness around the shoulders and hips in adults over 50, often with raised inflammatory markers. Pain-limited movement differs from the objective muscle weakness that may occur in inflammatory myopathy. Giant cell arteritis symptoms must always be actively sought.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q053",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Volume of distribution",
    "difficulty": "Moderate",
    "stem": "A medicine is highly lipid-soluble and extensively partitions into tissues. After administration, its measured plasma concentration is low relative to the total amount of drug in the body. Which pharmacokinetic property best explains this finding?",
    "options": {
      "A": "Low volume of distribution",
      "B": "High apparent volume of distribution",
      "C": "High renal clearance necessarily",
      "D": "Low bioavailability necessarily",
      "E": "High plasma protein binding necessarily"
    },
    "correct_letter": "B",
    "why_correct": "The apparent volume of distribution relates the total amount of drug in the body to its measured plasma concentration. Extensive tissue distribution can produce a high apparent volume of distribution, even though this value does not represent a literal anatomical fluid volume.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q054",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Suspected acute HIV infection",
    "difficulty": "Moderate",
    "stem": "A 27-year-old man presents with fever, rash, sore throat and generalised lymphadenopathy two weeks after a sexual exposure that may have transmitted HIV. An initial HIV screening test is negative. Clinical suspicion remains high. What is the most appropriate approach?",
    "options": {
      "A": "Exclude HIV definitively on the basis of this early negative result",
      "B": "Arrange appropriate repeat testing and discuss specialist testing for acute infection",
      "C": "Diagnose HIV solely from the symptoms",
      "D": "Wait for symptoms to resolve and take no further action",
      "E": "Prescribe long-term antiretroviral therapy without diagnostic assessment"
    },
    "correct_letter": "B",
    "why_correct": "Early testing can be negative during the window period. If acute HIV infection is suspected, the test type, timing of exposure and ongoing clinical picture matter; specialist advice and appropriate repeat or additional testing may be required. Symptoms alone neither confirm nor exclude HIV.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q055",
    "subdomain": "Ophthalmology & ENT",
    "topic": "Optic neuritis",
    "difficulty": "Moderate",
    "stem": "A 32-year-old woman develops blurred vision in her right eye over three days. She describes pain that worsens when moving the eye and says colours appear less vivid in that eye. Examination reveals reduced visual acuity and a relative afferent pupillary defect. The optic disc appears normal. Which diagnosis best fits this presentation?",
    "options": {
      "A": "Acute angle-closure glaucoma",
      "B": "Central retinal vein occlusion",
      "C": "Optic neuritis",
      "D": "Retinal detachment",
      "E": "Diabetic macular oedema"
    },
    "correct_letter": "C",
    "why_correct": "Subacute visual loss, pain on eye movement, impaired colour vision and a relative afferent pupillary defect are characteristic of optic neuritis. The optic disc can appear normal in retrobulbar optic neuritis because the inflammation affects the optic nerve behind the visible disc.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q056",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Clostridioides difficile: antimicrobial stewardship",
    "difficulty": "Moderate",
    "stem": "A 76-year-old inpatient develops frequent watery diarrhoea after a course of broad-spectrum antibiotics. C. difficile infection is suspected, and a stool sample is being tested. He is still receiving antibiotics for an infection that has now clinically resolved. What is the most appropriate action regarding his existing antibiotics?",
    "options": {
      "A": "Continue all antibiotics unchanged until the stool result is available",
      "B": "Review the existing antibiotics and stop them unless they remain essential",
      "C": "Add another broad-spectrum antibiotic routinely",
      "D": "Prescribe loperamide routinely while awaiting results",
      "E": "Give prophylactic antibiotics to prevent recurrence"
    },
    "correct_letter": "B",
    "why_correct": "NICE recommends reviewing existing antibiotics in suspected or confirmed C. difficile infection and stopping them unless essential. If an antibiotic remains necessary, consider an alternative with a lower associated risk. Fluid status, severity, infection-control measures and the need for specific treatment must also be assessed.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q057",
    "subdomain": "Renal & urology",
    "topic": "Acute kidney injury: diagnostic criteria",
    "difficulty": "Moderate",
    "stem": "A 74-year-old man is admitted with pneumonia and dehydration. His serum creatinine was 92 micromol/L two days ago and is now 121 micromol/L. Which interpretation is correct?",
    "options": {
      "A": "He does not meet criteria for acute kidney injury because creatinine remains below 150 micromol/L",
      "B": "He meets a creatinine-based criterion for acute kidney injury",
      "C": "He can only be diagnosed with acute kidney injury if urine output is also reduced",
      "D": "He has chronic kidney disease because the creatinine has risen",
      "E": "The change is insignificant unless his eGFR falls below 30 mL/min/1.73 m²"
    },
    "correct_letter": "B",
    "why_correct": "His creatinine has risen by 29 micromol/L within 48 hours, meeting the NICE criterion of a rise of at least 26 micromol/L in that period. AKI can be diagnosed using creatinine or urine-output criteria; both are not required.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q058",
    "subdomain": "Haematology & oncology",
    "topic": "Sickle cell disease: acute painful episode",
    "difficulty": "Moderate",
    "stem": "A 23-year-old man with established sickle cell disease presents to hospital with severe limb pain typical of his previous painful episodes. He is haemodynamically stable and has no features suggesting an alternative diagnosis. What is the most appropriate immediate approach?",
    "options": {
      "A": "Delay analgesia until the full blood count and haemoglobin electrophoresis are available",
      "B": "Treat as an acute medical emergency and provide prompt, appropriate analgesia",
      "C": "Give corticosteroids routinely to shorten the episode",
      "D": "Withhold analgesia until imaging confirms bone infarction",
      "E": "Arrange an outpatient haematology appointment before treating the pain"
    },
    "correct_letter": "B",
    "why_correct": "NICE recommends treating acute painful sickle cell episodes as medical emergencies and offering analgesia within 30 minutes of presentation. The assessment must still consider complications and alternative diagnoses when indicated; a typical pain episode does not rule out acute chest syndrome, infection or other serious pathology.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q059",
    "subdomain": "Neurology",
    "topic": "Multiple sclerosis: suspected relapse",
    "difficulty": "Moderate",
    "stem": "A 32-year-old woman with established multiple sclerosis develops worsening leg weakness and urinary urgency over three days, after several months of stability. She also reports dysuria and a fever. What should be addressed before concluding that this is an MS relapse?",
    "options": {
      "A": "Possible urinary tract infection",
      "B": "Whether she has developed essential tremor",
      "C": "Whether she needs routine screening for coeliac disease",
      "D": "Whether her symptoms meet criteria for Parkinson’s disease",
      "E": "Whether her serum vitamin D concentration is above the laboratory reference range"
    },
    "correct_letter": "A",
    "why_correct": "Infection, particularly urinary or respiratory infection, can worsen existing neurological symptoms and must be considered before diagnosing an MS relapse. NICE advises excluding infection and other causes before diagnosing relapse. A clinically significant relapse may need specialist assessment and treatment, but not every episode of worsening symptoms requires corticosteroids.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q060",
    "subdomain": "Haematology & oncology",
    "topic": "Immune thrombocytopenia",
    "difficulty": "Moderate",
    "stem": "A 28-year-old woman has easy bruising and petechiae. Her platelet count is low, but haemoglobin and white-cell count are normal. The blood film confirms thrombocytopenia without platelet clumping or schistocytes. She has no splenomegaly and no evidence of systemic illness. Which diagnosis is most consistent with this pattern?",
    "options": {
      "A": "Immune thrombocytopenia",
      "B": "Acute leukaemia with marrow failure",
      "C": "Thrombotic thrombocytopenic purpura",
      "D": "Disseminated intravascular coagulation",
      "E": "Aplastic anaemia"
    },
    "correct_letter": "A",
    "why_correct": "Immune thrombocytopenia commonly presents as isolated thrombocytopenia in an otherwise well patient. It is a diagnosis made after considering other causes, rather than from platelet count alone. The absence of schistocytes and other cytopenias makes some alternatives less likely, but clinical context and further investigations remain important.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q061",
    "subdomain": "Respiratory",
    "topic": "Community-acquired pneumonia: severity assessment",
    "difficulty": "Moderate",
    "stem": "A 72-year-old man is admitted with community-acquired pneumonia. He is newly confused, has a respiratory rate of 32 breaths/min, a blood pressure of 86/54 mmHg and a urea concentration above 7 mmol/L. Which interpretation of his CURB65 score is correct?",
    "options": {
      "A": "Score 2; intermediate severity",
      "B": "Score 3; high severity",
      "C": "Score 4; high severity",
      "D": "Score 5; high severity",
      "E": "CURB65 cannot be used in hospital"
    },
    "correct_letter": "D",
    "why_correct": "CURB65 gives one point each for new confusion, urea above 7 mmol/L, respiratory rate of 30/min or more, systolic BP below 90 mmHg or diastolic 60 mmHg or below, and age 65 or over. He meets all five criteria, so the score is 5: high-severity pneumonia needing urgent senior and critical-care assessment.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q062",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Cushing syndrome: screening test",
    "difficulty": "Moderate",
    "stem": "A 42-year-old woman develops progressive central weight gain, easy bruising, proximal muscle weakness and wide violaceous abdominal striae. She has no history of glucocorticoid treatment. Which is an appropriate initial test for endogenous Cushing syndrome?",
    "options": {
      "A": "Random serum cortisol",
      "B": "Overnight 1 mg dexamethasone suppression test",
      "C": "Plasma aldosterone-to-renin ratio",
      "D": "Serum growth hormone after a meal",
      "E": "A single morning ACTH measurement as the sole screening test"
    },
    "correct_letter": "B",
    "why_correct": "The clinical features raise suspicion of cortisol excess. The overnight dexamethasone suppression test is an accepted initial screening test; late-night salivary cortisol and urinary free cortisol are other established approaches. A random cortisol or ACTH measurement alone is not an appropriate screening test for Cushing syndrome.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q063",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Septic arthritis: immediate diagnostic approach",
    "difficulty": "Moderate",
    "stem": "A 65-year-old man presents with a hot, swollen knee, severe pain on passive movement and fever. Septic arthritis is suspected. He is haemodynamically stable, and joint aspiration can be performed promptly. What is the most appropriate approach?",
    "options": {
      "A": "Treat as osteoarthritis and review in two weeks",
      "B": "Arrange urgent joint aspiration for synovial-fluid analysis and culture before antibiotics, provided this does not cause an unsafe delay",
      "C": "Give an intra-articular glucocorticoid before obtaining samples",
      "D": "Exclude infection if the peripheral white-cell count is normal",
      "E": "Wait for blood cultures to become positive before aspirating the joint"
    },
    "correct_letter": "B",
    "why_correct": "Septic arthritis is an emergency because joint destruction and systemic complications can develop rapidly. Synovial-fluid analysis and culture are important for diagnosis. In a stable patient, samples should generally be obtained before antibiotics; if the patient is septic or unstable, treatment must not be dangerously delayed to obtain samples.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q064",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Cytochrome P450 inhibition",
    "difficulty": "Moderate",
    "stem": "A patient who is stable on a medicine metabolised by a particular cytochrome P450 enzyme starts a second medicine that strongly inhibits that enzyme. Assume the original medicine is active and that its metabolism is an important route of elimination. What is the most likely consequence?",
    "options": {
      "A": "Reduced plasma concentration of the original medicine",
      "B": "Increased clearance of the original medicine",
      "C": "Increased plasma concentration of the original medicine",
      "D": "Complete prevention of absorption of the original medicine",
      "E": "Guaranteed loss of pharmacological effect"
    },
    "correct_letter": "C",
    "why_correct": "Inhibition of a major metabolic pathway can reduce the clearance of an active parent drug and increase its plasma concentration, raising the risk of adverse effects. The effect depends on the fraction metabolised by that pathway and other routes of elimination. This relationship may differ for prodrugs, whose activation depends on metabolism.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q065",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Herd immunity",
    "difficulty": "Moderate",
    "stem": "A communicable infection spreads through a population. A vaccine reduces the probability that vaccinated individuals become infected and transmit the pathogen. Vaccination coverage increases substantially. Which mechanism best explains how this may indirectly protect some people who remain unvaccinated?",
    "options": {
      "A": "Vaccination makes every infected individual non-infectious",
      "B": "Reduced transmission decreases the probability that susceptible people encounter an infectious person",
      "C": "Vaccination changes the pathogen's genome in every transmission event",
      "D": "Unvaccinated people acquire vaccine-induced antibodies through ordinary social contact",
      "E": "The pathogen is immediately eradicated once a majority is vaccinated"
    },
    "correct_letter": "B",
    "why_correct": "Herd protection occurs when immunity in a population reduces transmission, indirectly lowering exposure risk for susceptible individuals. The extent of protection depends on factors such as vaccine effectiveness against infection and transmission, coverage, contact patterns and pathogen characteristics. High coverage does not guarantee eradication.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q066",
    "subdomain": "Neurology",
    "topic": "Wernicke encephalopathy",
    "difficulty": "Moderate",
    "stem": "A 58-year-old man with chronic alcohol dependence is admitted with poor nutrition and persistent vomiting. He develops confusion, an unsteady gait and abnormal eye movements. Which is the most appropriate immediate treatment?",
    "options": {
      "A": "Oral glucose alone",
      "B": "Urgent parenteral thiamine",
      "C": "A selective serotonin reuptake inhibitor",
      "D": "Lithium",
      "E": "A dopamine agonist"
    },
    "correct_letter": "B",
    "why_correct": "The combination of nutritional deficiency, confusion, gait ataxia and ocular abnormalities raises strong suspicion of Wernicke encephalopathy. This is a medical emergency: give parenteral thiamine promptly and correct associated nutritional and metabolic problems. Treatment should not be delayed while waiting for confirmatory investigations. If hypoglycaemia is present, glucose must also be treated promptly; thiamine should be given before or alongside it where feasible, without delaying emergency glucose treatment.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q067",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Pressure ulcer prevention",
    "difficulty": "Moderate",
    "stem": "An 88-year-old inpatient is bedbound after a hip fracture. He is unable to reposition himself independently and has reduced oral intake. His skin is currently intact. Which intervention is most appropriate to reduce his risk of pressure ulcers?",
    "options": {
      "A": "Massage areas of redness every shift",
      "B": "Use a standard-specification foam mattress and avoid repositioning",
      "C": "Assess his skin and pressure-ulcer risk, support regular repositioning and provide an appropriate pressure-redistributing surface",
      "D": "Restrict fluids to reduce skin moisture",
      "E": "Provide nutritional supplements regardless of nutritional status"
    },
    "correct_letter": "C",
    "why_correct": "Prevention combines risk and skin assessment, an individualised care plan, repositioning assistance, and suitable pressure-redistributing equipment. Nutrition and hydration should be assessed and addressed according to need. Massage or rubbing should not be used to prevent pressure ulcers.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q068",
    "subdomain": "Renal & urology",
    "topic": "Acute kidney injury: identifying possible nephritis",
    "difficulty": "Moderate",
    "stem": "A 58-year-old woman develops acute kidney injury without an obvious cause. Urine dipstick testing shows blood and protein. There is no history of urinary trauma or evidence of urinary tract infection. Which diagnosis should be considered?",
    "options": {
      "A": "Acute nephritis",
      "B": "Uncomplicated essential hypertension",
      "C": "Isolated renal glucosuria",
      "D": "Diabetes insipidus",
      "E": "Uncomplicated lower urinary tract infection"
    },
    "correct_letter": "A",
    "why_correct": "Unexplained AKI with both haematuria and proteinuria raises concern for intrinsic renal disease, including acute nephritis. NICE recommends considering nephrology referral in this setting. Further assessment may include urine microscopy, quantification of proteinuria, renal function, immunological investigations and imaging as indicated.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q069",
    "subdomain": "Haematology & oncology",
    "topic": "Acute transfusion reaction",
    "difficulty": "Moderate",
    "stem": "A 67-year-old man develops fever, rigors, loin pain and hypotension shortly after a red-cell transfusion begins. The transfusion is still running. What is the immediate action?",
    "options": {
      "A": "Slow the transfusion and observe",
      "B": "Stop the transfusion immediately and initiate the local transfusion-reaction protocol",
      "C": "Complete the unit before taking blood samples",
      "D": "Give an antihistamine and restart the same unit if symptoms settle",
      "E": "Discard the blood bag before informing the transfusion laboratory"
    },
    "correct_letter": "B",
    "why_correct": "A potentially serious acute transfusion reaction requires immediate cessation of the transfusion, urgent clinical assessment and adherence to the local reaction protocol. The identity checks, patient assessment, required samples and communication with the transfusion laboratory are essential. Do not restart the implicated unit while a serious reaction is being investigated.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q070",
    "subdomain": "Neurology",
    "topic": "First suspected seizure: initial assessment",
    "difficulty": "Moderate",
    "stem": "A 26-year-old man is assessed after a first episode of transient loss of consciousness with witnessed limb jerking. He has recovered fully. There is no obvious metabolic cause on initial assessment. Which investigation is important because a cardiac cause can mimic an epileptic seizure?",
    "options": {
      "A": "A 12-lead ECG",
      "B": "Routine serum amylase",
      "C": "A D-dimer in every patient",
      "D": "A screening chest radiograph in every patient",
      "E": "An EEG as the sole investigation, without clinical assessment"
    },
    "correct_letter": "A",
    "why_correct": "Transient loss of consciousness requires careful history, examination and appropriate investigation. A 12-lead ECG helps identify cardiac abnormalities that can cause syncope and may be mistaken for a seizure. If an epileptic seizure is suspected, the patient should be assessed by a clinician with expertise in first seizures; EEG may support diagnosis but should not be used in isolation to exclude epilepsy.",
    "distractor_analysis": {},
    "generalisation": "",
    "review_status": "reviewed"
  }
];

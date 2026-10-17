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
    "stem": "A 67-year-old man presents with fatigue. Blood tests show: Hb 86 g/L, MCV 72 fL, ferritin 8 µg/L, platelets 520 × 10⁹/L. He has no overt bleeding. Which interpretation best explains the platelet count?",
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
    "why_correct": "Recurrent falls warrant a comprehensive assessment rather than a single intervention. The assessment should consider gait and balance, muscle strength, medicines, cardiovascular factors, vision, functional ability and environmental hazards. Management should address the factors identified. NICE advises against using falls prediction tools to estimate an individual's future risk.",
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
    "why_correct": "Constipation can precipitate hepatic encephalopathy. The assessment should also look for other causes and precipitants, including infection, gastrointestinal bleeding, dehydration and medication-related problems; identifying constipation does not exclude these.",
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
  },
  {
    "id": "M1Q071",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Thyrotoxicosis: identifying Graves’ disease",
    "difficulty": "Moderate",
    "stem": "A 29-year-old woman has weight loss, tremor, heat intolerance and a diffuse goitre. Her TSH is suppressed, and both free T4 and free T3 are raised. Which investigation is recommended to help confirm Graves’ disease?",
    "options": {
      "A": "Thyroid peroxidase antibodies alone",
      "B": "TSH-receptor antibodies",
      "C": "Serum thyroglobulin",
      "D": "Calcitonin",
      "E": "A serum TSH measurement repeated the following day"
    },
    "correct_letter": "B",
    "why_correct": "NICE recommends measuring TSH-receptor antibodies (TRAbs) in adults with confirmed thyrotoxicosis to help confirm Graves’ disease. If TRAbs are negative, a technetium thyroid scan may be considered. Thyroid ultrasound is not routinely indicated for thyrotoxicosis unless there is a palpable thyroid nodule.",
    "distractor_analysis": {
      "A": "TPO antibodies occur in both Graves' and Hashimoto's disease, so they do not confirm Graves'.",
      "C": "Thyroglobulin is used in thyroid cancer follow-up, not to identify the cause of thyrotoxicosis.",
      "D": "Calcitonin is a marker for medullary thyroid cancer.",
      "E": "Thyrotoxicosis is already confirmed; repeating TSH adds nothing about the cause."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q072",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Pituitary disease: prolactinoma",
    "difficulty": "Moderate",
    "stem": "A 31-year-old woman presents with amenorrhoea and galactorrhoea. Pregnancy testing is negative. Her serum prolactin is substantially elevated on repeat measurement. She takes no medicines known to raise prolactin, and thyroid function and renal function are normal. Which investigation is most appropriate to identify a likely structural cause?",
    "options": {
      "A": "MRI of the pituitary",
      "B": "CT pulmonary angiography",
      "C": "Adrenal ultrasound",
      "D": "Thyroid technetium scanning",
      "E": "A water deprivation test"
    },
    "correct_letter": "A",
    "why_correct": "Persistent, substantial hyperprolactinaemia without an evident physiological, medication-related or systemic cause warrants assessment for a pituitary lesion. MRI is the principal imaging investigation. The prolactin result, symptoms, potential assay interference and possibility of a large lesion with a disproportionately modest prolactin result should be considered together.",
    "distractor_analysis": {
      "B": "CT pulmonary angiography looks for pulmonary emboli and has no role here.",
      "C": "Adrenal imaging does not assess a pituitary cause of hyperprolactinaemia.",
      "D": "Technetium scanning assesses thyroid uptake, not the pituitary.",
      "E": "Water deprivation testing investigates diabetes insipidus."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q073",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Hypercalcaemia: primary hyperparathyroidism",
    "difficulty": "Moderate",
    "stem": "A 61-year-old woman has repeated measurements showing raised adjusted serum calcium. Her parathyroid hormone concentration is also raised, rather than suppressed. Which mechanism best explains this biochemical pattern?",
    "options": {
      "A": "PTH secretion is appropriately suppressed by hypercalcaemia",
      "B": "PTH secretion is inappropriate for the raised serum calcium",
      "C": "Excess calcitonin is stimulating osteoclast activity",
      "D": "Reduced PTH secretion is causing renal calcium retention",
      "E": "Increased insulin secretion is driving calcium release from bone"
    },
    "correct_letter": "B",
    "why_correct": "When serum calcium is elevated, normal parathyroid glands should suppress PTH secretion. A raised or inappropriately normal PTH therefore suggests a PTH-dependent cause of hypercalcaemia, such as primary hyperparathyroidism. This differs from many malignancy-related causes, in which endogenous PTH is usually suppressed.",
    "distractor_analysis": {
      "A": "Appropriate suppression would give a low PTH, as in malignancy-related hypercalcaemia.",
      "C": "Calcitonin inhibits osteoclasts and lowers calcium.",
      "D": "Reduced PTH would lower calcium, and PTH is raised here.",
      "E": "Insulin does not release calcium from bone."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q074",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Lyme disease: when serology is unnecessary",
    "difficulty": "Moderate",
    "stem": "A 35-year-old woman develops an enlarging, non-painful, non-itchy erythematous rash around the site of a tick bite after walking in woodland. The rash has expanded over several days and has partial central clearing. She is otherwise well. What is the most appropriate approach?",
    "options": {
      "A": "Exclude Lyme disease unless the initial antibody test is positive",
      "B": "Diagnose and treat Lyme disease clinically without waiting for serology",
      "C": "Perform a skin biopsy before making a diagnosis",
      "D": "Reassure her that central clearing excludes infection",
      "E": "Wait several weeks before considering treatment"
    },
    "correct_letter": "B",
    "why_correct": "Erythema migrans is characteristic of early Lyme disease. NICE recommends diagnosing and treating Lyme disease without laboratory testing when erythema migrans is present. Other presentations may require serological investigation guided by clinical suspicion.",
    "distractor_analysis": {
      "A": "Serology is often negative early in infection, so a negative test does not exclude Lyme disease.",
      "C": "Biopsy is unnecessary when erythema migrans is typical.",
      "D": "Central clearing is consistent with erythema migrans, not against it.",
      "E": "Delay risks disseminated disease; treat at diagnosis."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q075",
    "subdomain": "Cardiology",
    "topic": "Infective endocarditis: blood cultures",
    "difficulty": "Moderate",
    "stem": "A 58-year-old man has fever, a new cardiac murmur and clinical features raising concern for infective endocarditis. He is haemodynamically stable and has not received antibiotics. What is the most appropriate next step before starting antimicrobial treatment?",
    "options": {
      "A": "Take appropriate blood cultures before antibiotics",
      "B": "Give antibiotics immediately and obtain cultures several days later",
      "C": "Take a throat swab as the sole microbiological investigation",
      "D": "Wait for echocardiography before taking any microbiological samples",
      "E": "Use a single negative blood culture to exclude endocarditis"
    },
    "correct_letter": "A",
    "why_correct": "In a stable patient with suspected infective endocarditis, blood cultures should be obtained before antimicrobial treatment to improve the chance of identifying the causative organism. Treatment must not be inappropriately delayed in an unstable patient; sampling and urgent management should be coordinated according to the clinical situation.",
    "distractor_analysis": {
      "B": "Antibiotics before cultures reduce the chance of identifying the organism.",
      "C": "A throat swab does not identify the bloodstream organism.",
      "D": "Blood cultures should not wait for echocardiography; both contribute to the diagnosis.",
      "E": "A single negative culture does not exclude endocarditis."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q076",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Pneumocystis pneumonia in HIV",
    "difficulty": "Moderate",
    "stem": "A 39-year-old man with previously undiagnosed HIV presents with progressive breathlessness, dry cough and fever. Oxygen saturation is low, and chest imaging shows bilateral diffuse ground-glass changes. Which opportunistic infection should be strongly considered?",
    "options": {
      "A": "Pneumocystis jirovecii pneumonia",
      "B": "Uncomplicated oral candidiasis",
      "C": "Latent tuberculosis without pulmonary involvement",
      "D": "Tinea corporis",
      "E": "Localised herpes simplex infection"
    },
    "correct_letter": "A",
    "why_correct": "Pneumocystis pneumonia is an important cause of subacute respiratory illness and hypoxaemia in people with advanced HIV-related immunosuppression. The clinical and radiological findings raise suspicion but are not specific; respiratory sampling and appropriate microbiological testing help establish the diagnosis. Urgent assessment and treatment should not be delayed when clinical suspicion is high and the patient is significantly unwell.",
    "distractor_analysis": {
      "B": "Oral candidiasis does not cause hypoxia or bilateral ground-glass change.",
      "C": "Latent tuberculosis is asymptomatic by definition.",
      "D": "Tinea corporis is a superficial skin infection.",
      "E": "Localised herpes simplex does not cause diffuse pneumonitis."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q077",
    "subdomain": "Respiratory",
    "topic": "Severe community-acquired pneumonia: antibiotic timing",
    "difficulty": "Moderate",
    "stem": "A 66-year-old man presents to hospital with a clinical diagnosis of community-acquired pneumonia. He is significantly unwell but can swallow and has no immediate indication that intravenous administration is essential. Which statement best reflects current NICE guidance on antibiotic timing and route?",
    "options": {
      "A": "Antibiotics should routinely be delayed until sputum culture results are available",
      "B": "Start antibiotic treatment promptly after diagnosis; oral treatment is preferred if he can take it and severity does not require intravenous therapy",
      "C": "Intravenous antibiotics are mandatory for every hospitalised patient",
      "D": "Antibiotics should be withheld until the fever has persisted for 48 hours",
      "E": "Antibiotic choice should not be reviewed when microbiology results become available"
    },
    "correct_letter": "B",
    "why_correct": "NICE NG250 recommends starting antibiotics as soon as possible after establishing a diagnosis of community-acquired pneumonia, and within four hours of hospital presentation. Oral antibiotics are first-line when the patient can take oral medicines and the illness does not require intravenous treatment. If IV antibiotics are used, review them by 48 hours and consider switching to oral treatment when appropriate.",
    "distractor_analysis": {
      "A": "Waiting for culture delays treatment; antibiotics should start promptly after diagnosis.",
      "C": "Oral treatment is preferred when the patient can take it and severity allows.",
      "D": "Withholding antibiotics in diagnosed pneumonia is unsafe.",
      "E": "Antibiotic choice should be reviewed against microbiology results."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q078",
    "subdomain": "Neurology",
    "topic": "Parkinson’s disease: initial treatment",
    "difficulty": "Moderate",
    "stem": "A 68-year-old man has recently diagnosed Parkinson’s disease. Bradykinesia and rigidity now interfere substantially with dressing, walking and preparing meals. Which medicine should generally be offered to improve his motor symptoms?",
    "options": {
      "A": "Levodopa",
      "B": "Long-term haloperidol",
      "C": "Phenytoin",
      "D": "Acetazolamide",
      "E": "No pharmacological treatment until he develops dementia"
    },
    "correct_letter": "A",
    "why_correct": "NICE recommends offering levodopa to people in the early stages of Parkinson’s disease when motor symptoms affect quality of life. Treatment should be individualised, with discussion of benefits and adverse effects. Dopamine-blocking medicines such as haloperidol can worsen parkinsonism.",
    "distractor_analysis": {
      "B": "Haloperidol blocks dopamine and worsens parkinsonism.",
      "C": "Phenytoin is an antiepileptic with no role in Parkinson's disease.",
      "D": "Acetazolamide has no role in Parkinson's disease.",
      "E": "Treatment is indicated now because symptoms impair daily function."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q079",
    "subdomain": "Neurology",
    "topic": "Cluster headache: acute treatment",
    "difficulty": "Moderate",
    "stem": "A 40-year-old man experiences repeated attacks of excruciating unilateral orbital pain lasting about an hour. During attacks, his eye waters and becomes red, and he feels intensely restless. Which treatment is recommended for an acute cluster headache attack?",
    "options": {
      "A": "High-flow oxygen and/or a subcutaneous or nasal triptan, as appropriate",
      "B": "Oral antibiotics",
      "C": "Long-term opioid treatment as first-line therapy",
      "D": "Oral corticosteroids for every attack as the sole acute treatment",
      "E": "Reassurance without offering acute treatment"
    },
    "correct_letter": "A",
    "why_correct": "NICE recommends offering oxygen and/or a subcutaneous or nasal triptan for acute cluster headache, taking contraindications and the patient’s circumstances into account. Oral analgesics are often too slow for these attacks. Oxygen delivery requires an appropriate high-flow setup and non-rebreather mask.",
    "distractor_analysis": {
      "B": "There is no infection; antibiotics have no role.",
      "C": "Opioids are ineffective for cluster headache and risk dependence.",
      "D": "Corticosteroids may be used as short-term prevention, not as the sole acute treatment.",
      "E": "Effective acute treatments exist and should be offered."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q080",
    "subdomain": "Neurology",
    "topic": "Myasthenia gravis: pattern recognition",
    "difficulty": "Moderate",
    "stem": "A 35-year-old woman reports intermittent double vision and drooping eyelids that worsen towards the end of the day. Symptoms improve after rest. Pupillary responses are normal, and sensation is intact. Which diagnosis best explains this presentation?",
    "options": {
      "A": "Myasthenia gravis",
      "B": "Multiple sclerosis presenting with a fixed sensory level",
      "C": "Parkinson’s disease",
      "D": "Peripheral sensory neuropathy",
      "E": "Motor neurone disease presenting with isolated fluctuating ocular symptoms"
    },
    "correct_letter": "A",
    "why_correct": "Myasthenia gravis causes fluctuating, fatigable weakness due to impaired neuromuscular transmission. Ocular symptoms such as ptosis and diplopia are common presentations. Assessment should consider bulbar and respiratory involvement, which can indicate a medical emergency.",
    "distractor_analysis": {
      "B": "A fixed sensory level indicates spinal cord disease; sensation is intact here.",
      "C": "Parkinson's disease does not cause fatigable ptosis or diplopia.",
      "D": "Sensory neuropathy does not cause ptosis or diplopia.",
      "E": "Motor neurone disease spares eye movements and does not fluctuate with fatigue."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q081",
    "subdomain": "Neurology",
    "topic": "Guillain–Barré syndrome: immediate concern",
    "difficulty": "Moderate",
    "stem": "A 47-year-old man develops progressive symmetrical leg weakness one week after a diarrhoeal illness. Weakness has ascended to the thighs, and tendon reflexes are absent. Which complication requires particular attention during urgent assessment?",
    "options": {
      "A": "Respiratory muscle weakness",
      "B": "Isolated chronic migraine",
      "C": "Acute angle-closure glaucoma",
      "D": "Hyperthyroidism as the inevitable cause",
      "E": "A fixed unilateral sensory deficit as the defining feature"
    },
    "correct_letter": "A",
    "why_correct": "Guillain–Barré syndrome can progress rapidly and cause respiratory failure, bulbar dysfunction and autonomic instability. Urgent hospital assessment includes monitoring respiratory function and swallowing, alongside neurological assessment and investigations. Do not wait for overt respiratory distress before assessing the risk of deterioration.",
    "distractor_analysis": {
      "B": "Migraine is not a complication of Guillain-Barré syndrome.",
      "C": "Angle-closure glaucoma is unrelated to this presentation.",
      "D": "This is a post-infectious neuropathy; thyroid disease is not the cause.",
      "E": "Guillain-Barré syndrome is typically symmetrical and areflexic, not a unilateral sensory deficit."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q082",
    "subdomain": "Neurology",
    "topic": "Subarachnoid haemorrhage: presentation",
    "difficulty": "Moderate",
    "stem": "A 51-year-old woman develops a sudden, severe headache that reaches maximal intensity within seconds. She vomits and has neck stiffness. She has no established history of recurrent similar headaches. What is the most appropriate response?",
    "options": {
      "A": "Diagnose migraine and discharge without investigation",
      "B": "Arrange urgent hospital assessment for suspected subarachnoid haemorrhage",
      "C": "Start a triptan and arrange routine review in one month",
      "D": "Reassure her because subarachnoid haemorrhage usually causes a gradual headache",
      "E": "Arrange outpatient nerve-conduction studies"
    },
    "correct_letter": "B",
    "why_correct": "A sudden severe headache reaching maximum intensity rapidly is a red flag for subarachnoid haemorrhage and other serious causes. Urgent assessment and appropriate neuroimaging are required. The exact investigation pathway depends on timing, imaging findings and specialist assessment.",
    "distractor_analysis": {
      "A": "A thunderclap headache with neck stiffness must not be attributed to migraine.",
      "C": "Triptans delay diagnosis and are inappropriate in suspected haemorrhage.",
      "D": "Subarachnoid haemorrhage classically causes a sudden, not gradual, headache.",
      "E": "Nerve-conduction studies have no role in acute headache."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q083",
    "subdomain": "Neurology",
    "topic": "Migraine: medication overuse",
    "difficulty": "Moderate",
    "stem": "A 37-year-old woman with migraine now has headaches on most days. She takes a triptan on many days each month and has done so for several months. The headache pattern has become more frequent despite treatment. Which issue should be specifically considered?",
    "options": {
      "A": "Medication-overuse headache",
      "B": "A diagnosis of epilepsy based on headache frequency alone",
      "C": "A requirement for antibiotics",
      "D": "A diagnosis of Parkinson’s disease",
      "E": "An indication for routine neuroimaging solely to reassure her, without reassessing the history"
    },
    "correct_letter": "A",
    "why_correct": "Frequent use of acute headache medicines can contribute to medication-overuse headache. Assessment should quantify the frequency of headache and medication use, review the headache diagnosis and discuss an appropriate plan to reduce overuse. New red flags or a substantial change in headache characteristics may warrant further investigation; the frequency alone does not automatically require imaging.",
    "distractor_analysis": {
      "B": "Headache frequency does not indicate epilepsy.",
      "C": "There is no infection; antibiotics have no role.",
      "D": "There are no parkinsonian features.",
      "E": "Without red flags, reassessing the history and medication use comes before imaging."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q084",
    "subdomain": "Neurology",
    "topic": "Essential tremor versus Parkinson’s disease",
    "difficulty": "Moderate",
    "stem": "A 64-year-old man reports a bilateral hand tremor that is most noticeable when holding a cup or writing. Examination shows no bradykinesia or rigidity, and the tremor diminishes when his hands are fully supported at rest. Which diagnosis is most consistent with this pattern?",
    "options": {
      "A": "Essential tremor",
      "B": "Typical Parkinson’s disease",
      "C": "Guillain–Barré syndrome",
      "D": "Myasthenia gravis",
      "E": "Acute subarachnoid haemorrhage"
    },
    "correct_letter": "A",
    "why_correct": "Essential tremor typically occurs during posture or action. Parkinsonian tremor is often most evident at rest and is usually accompanied by bradykinesia, with rigidity also commonly present. Clinical assessment is central; diagnostic uncertainty or atypical features may warrant specialist review.",
    "distractor_analysis": {
      "B": "Parkinsonian tremor is typically at rest and accompanied by bradykinesia.",
      "C": "Guillain-Barré syndrome causes weakness, not tremor.",
      "D": "Myasthenia gravis causes fatigable weakness, not tremor.",
      "E": "Subarachnoid haemorrhage presents with acute headache."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q085",
    "subdomain": "Renal & urology",
    "topic": "Chronic kidney disease: assessing albuminuria",
    "difficulty": "Moderate",
    "stem": "A 63-year-old man with hypertension has an eGFR of 72 mL/min/1.73 m². His urine reagent strip is negative for protein, but there is clinical concern about early chronic kidney disease. Which test is most appropriate for initial assessment of low-level albuminuria?",
    "options": {
      "A": "Urine albumin-to-creatinine ratio",
      "B": "A 24-hour urine collection in every case",
      "C": "Serum albumin concentration alone",
      "D": "Repeat urine dipstick alone",
      "E": "Urine culture"
    },
    "correct_letter": "A",
    "why_correct": "NICE recommends urine ACR rather than routine reagent strips for detecting low levels of albuminuria. If the initial ACR is between 3 and 70 mg/mmol, confirm it using a subsequent early-morning sample; an initial ACR of 70 mg/mmol or more does not require repeat confirmation before action.",
    "distractor_analysis": {
      "B": "A 24-hour collection is not needed routinely; ACR is the recommended test.",
      "C": "Serum albumin does not measure urinary albumin loss.",
      "D": "Reagent strips are insensitive to low-level albuminuria.",
      "E": "Urine culture detects infection, not albuminuria."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q086",
    "subdomain": "Renal & urology",
    "topic": "IgA nephropathy: synpharyngitic haematuria",
    "difficulty": "Moderate",
    "stem": "A 22-year-old man notices dark, cola-coloured urine two days after the start of a sore throat. He had a similar episode a year ago. His blood pressure is 128/78 mmHg. Urinalysis shows blood and a trace of protein, renal function is normal and serum C3 is normal. Which diagnosis is most likely?",
    "options": {
      "A": "IgA nephropathy",
      "B": "Post-streptococcal glomerulonephritis",
      "C": "Minimal change disease",
      "D": "Anti-glomerular basement membrane disease",
      "E": "Renal cell carcinoma"
    },
    "correct_letter": "A",
    "why_correct": "Visible haematuria within one to two days of an upper respiratory infection (synpharyngitic haematuria), recurring with later infections and with normal complement, is typical of IgA nephropathy. Post-streptococcal glomerulonephritis follows the infection by about one to three weeks and usually lowers C3. Blood pressure, proteinuria and renal function should be monitored, with nephrology referral if any are abnormal.",
    "distractor_analysis": {
      "B": "Post-streptococcal glomerulonephritis follows infection by one to three weeks and usually lowers C3.",
      "C": "Minimal change disease causes nephrotic syndrome, not visible haematuria.",
      "D": "Anti-GBM disease causes rapidly progressive renal failure, often with haemoptysis.",
      "E": "Renal cell carcinoma is unlikely at 22 and does not cause haematuria recurring with sore throats."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q087",
    "subdomain": "Renal & urology",
    "topic": "Nephrotic syndrome: recognising the pattern",
    "difficulty": "Moderate",
    "stem": "A 46-year-old woman presents with progressive bilateral leg oedema. Blood tests show marked hypoalbuminaemia, and urine testing demonstrates heavy protein loss. Her renal function is only mildly impaired. Which process best explains the oedema?",
    "options": {
      "A": "Reduced plasma oncotic pressure due to urinary albumin loss",
      "B": "Increased plasma oncotic pressure",
      "C": "Isolated obstruction of the ureters",
      "D": "Reduced intestinal glucose absorption",
      "E": "Excessive urinary loss of red cells without protein loss"
    },
    "correct_letter": "A",
    "why_correct": "Nephrotic syndrome involves substantial proteinuria, often with hypoalbuminaemia and oedema. Reduced plasma oncotic pressure contributes to fluid movement into the interstitial space; renal sodium retention can also contribute. The underlying cause requires further evaluation.",
    "distractor_analysis": {
      "B": "Plasma oncotic pressure falls, not rises, in nephrotic syndrome.",
      "C": "Ureteric obstruction does not cause heavy proteinuria or hypoalbuminaemia.",
      "D": "Intestinal glucose absorption is unrelated to oedema here.",
      "E": "Nephrotic syndrome is defined by heavy protein loss."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q088",
    "subdomain": "Renal & urology",
    "topic": "Autosomal dominant polycystic kidney disease",
    "difficulty": "Moderate",
    "stem": "A 39-year-old man has multiple bilateral renal cysts and a family history of kidney failure affecting his father and paternal aunt. Which extra-renal association is particularly important to recognise in autosomal dominant polycystic kidney disease?",
    "options": {
      "A": "Intracranial berry aneurysms",
      "B": "Pulmonary fibrosis as an inevitable complication",
      "C": "Congenital absence of the thyroid gland",
      "D": "Retinal detachment in every affected patient",
      "E": "Isolated adrenal insufficiency"
    },
    "correct_letter": "A",
    "why_correct": "Autosomal dominant polycystic kidney disease is associated with several extra-renal manifestations, including intracranial aneurysms, liver cysts and cardiac valve abnormalities. Screening for intracranial aneurysms is not automatically indicated for every patient; the decision depends on individual risk factors and specialist guidance.",
    "distractor_analysis": {
      "B": "Pulmonary fibrosis is not a recognised association of ADPKD.",
      "C": "Thyroid agenesis is not associated with ADPKD.",
      "D": "Retinal detachment is not a feature of ADPKD.",
      "E": "Adrenal insufficiency is not associated with ADPKD."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q089",
    "subdomain": "Renal & urology",
    "topic": "Renal colic: imaging",
    "difficulty": "Moderate",
    "stem": "A 42-year-old man presents with sudden severe flank pain radiating towards the groin, with nausea and microscopic haematuria. A ureteric stone is suspected. Which imaging investigation is recommended for an adult with suspected renal colic?",
    "options": {
      "A": "Non-contrast CT of the urinary tract",
      "B": "Contrast-enhanced CT of the abdomen in every case",
      "C": "Plain abdominal radiography alone",
      "D": "MRI of the lumbar spine",
      "E": "No imaging if haematuria is present"
    },
    "correct_letter": "A",
    "why_correct": "NICE recommends low-dose non-contrast CT for adults with suspected renal colic, with imaging urgently arranged within the recommended pathway. Ultrasound is preferred as first-line imaging in pregnancy and children. Imaging choices must account for the clinical situation and radiation exposure.",
    "distractor_analysis": {
      "B": "Contrast is not needed to detect stones and may obscure them.",
      "C": "Plain radiography misses many stones.",
      "D": "Spinal MRI does not assess the urinary tract.",
      "E": "Haematuria supports, rather than removes, the need for imaging."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q090",
    "subdomain": "Renal & urology",
    "topic": "Distal renal tubular acidosis",
    "difficulty": "Moderate",
    "stem": "A 33-year-old woman has recurrent calcium phosphate kidney stones. Blood tests show a normal-anion-gap metabolic acidosis. Despite systemic acidosis, her urine remains inappropriately alkaline. Which disorder best explains these findings?",
    "options": {
      "A": "Distal (type 1) renal tubular acidosis",
      "B": "Type 4 renal tubular acidosis",
      "C": "Contraction alkalosis due to vomiting",
      "D": "Respiratory alkalosis",
      "E": "Uncomplicated chronic respiratory acidosis"
    },
    "correct_letter": "A",
    "why_correct": "Distal RTA involves impaired distal urinary acidification and can cause normal-anion-gap metabolic acidosis, inappropriately high urine pH and calcium phosphate stones. Type 4 RTA is more characteristically associated with hyperkalaemia and impaired aldosterone activity.",
    "distractor_analysis": {
      "B": "Type 4 RTA causes hyperkalaemia with acidic urine and is not typically associated with stones.",
      "C": "Vomiting causes metabolic alkalosis, not acidosis.",
      "D": "The disturbance is a metabolic acidosis, not a respiratory alkalosis.",
      "E": "The acidosis is metabolic, with a normal anion gap."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q091",
    "subdomain": "Renal & urology",
    "topic": "NSAIDs and acute kidney injury",
    "difficulty": "Moderate",
    "stem": "A 77-year-old man with vomiting and poor oral intake continues taking ibuprofen for osteoarthritis. His creatinine rises and urine output falls. Which mechanism best explains how ibuprofen may contribute to his acute kidney injury?",
    "options": {
      "A": "Inhibition of renal prostaglandin synthesis, reducing afferent arteriolar vasodilation",
      "B": "Direct stimulation of glomerular filtration",
      "C": "Increased aldosterone secretion causing obligatory renal potassium loss",
      "D": "Selective inhibition of glucose reabsorption in the proximal tubule",
      "E": "Increased renal blood flow during hypovolaemia"
    },
    "correct_letter": "A",
    "why_correct": "Renal prostaglandins help maintain afferent arteriolar dilation when circulating volume is reduced. NSAIDs inhibit prostaglandin synthesis and can reduce renal perfusion, particularly in people who are dehydrated or otherwise vulnerable to AKI.",
    "distractor_analysis": {
      "B": "NSAIDs reduce, not increase, glomerular filtration in vulnerable patients.",
      "C": "NSAIDs tend to cause hyperkalaemia, not potassium loss.",
      "D": "Proximal glucose reabsorption inhibition is how SGLT2 inhibitors act.",
      "E": "Renal blood flow falls during hypovolaemia, especially with NSAIDs."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q092",
    "subdomain": "Renal & urology",
    "topic": "Acute hyperkalaemia: ECG changes",
    "difficulty": "Moderate",
    "stem": "A 69-year-old man with acute kidney injury has a potassium concentration of 7.1 mmol/L. His ECG shows broad QRS complexes and peaked T waves. Which immediate treatment is required to reduce the risk of a fatal arrhythmia?",
    "options": {
      "A": "Intravenous calcium, following the emergency hyperkalaemia protocol",
      "B": "Oral dietary potassium restriction alone",
      "C": "A loop diuretic as the sole immediate treatment",
      "D": "Repeat potassium measurement tomorrow before acting",
      "E": "Sodium bicarbonate as the sole treatment in every case"
    },
    "correct_letter": "A",
    "why_correct": "Severe hyperkalaemia with ECG changes is a medical emergency. Intravenous calcium stabilises the cardiac membrane but does not itself lower serum potassium; additional treatment is required to shift potassium intracellularly and remove it from the body. Follow the current UK Kidney Association emergency protocol.",
    "distractor_analysis": {
      "B": "Dietary restriction acts far too slowly for an emergency.",
      "C": "A loop diuretic is not the sole immediate treatment and does not protect the heart.",
      "D": "Delaying treatment with ECG changes risks cardiac arrest.",
      "E": "Sodium bicarbonate is not routine sole treatment."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q093",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Gout: interpreting serum urate during a flare",
    "difficulty": "Moderate",
    "stem": "A 57-year-old man presents with sudden severe pain, redness and swelling of the first metatarsophalangeal joint. His serum urate concentration measured during the episode is below 360 micromol/L. Gout remains clinically suspected. What is the most appropriate next step regarding serum urate measurement?",
    "options": {
      "A": "Exclude gout because the urate is below 360 micromol/L",
      "B": "Repeat serum urate at least two weeks after the flare has settled",
      "C": "Repeat serum urate the following hour",
      "D": "Diagnose rheumatoid arthritis from the urate result alone",
      "E": "Start lifelong urate-lowering treatment solely because of this single result"
    },
    "correct_letter": "B",
    "why_correct": "Serum urate may be below the diagnostic threshold during an acute gout flare. NICE recommends repeating the measurement at least two weeks after the flare has settled if gout is strongly suspected despite a level below 360 micromol/L during the episode. If the diagnosis remains uncertain, joint aspiration and synovial-fluid microscopy can help.",
    "distractor_analysis": {
      "A": "Urate can fall during a flare, so a level below 360 does not exclude gout.",
      "C": "Repeating within an hour does not avoid the flare effect.",
      "D": "Serum urate does not diagnose rheumatoid arthritis.",
      "E": "Urate-lowering treatment needs a confirmed diagnosis and discussion, not one result."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q094",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Systemic lupus erythematosus: suspected renal involvement",
    "difficulty": "Moderate",
    "stem": "A 26-year-old woman with systemic lupus erythematosus develops ankle oedema and hypertension. Urinalysis shows blood and protein, and her renal function has deteriorated. Which complication should be urgently considered?",
    "options": {
      "A": "Lupus nephritis",
      "B": "Uncomplicated primary osteoarthritis",
      "C": "Isolated Raynaud phenomenon",
      "D": "Fibromyalgia without renal disease",
      "E": "Acute gout as the explanation for the urinary abnormalities"
    },
    "correct_letter": "A",
    "why_correct": "New proteinuria, haematuria, hypertension and deteriorating renal function in a patient with SLE raise concern for lupus nephritis. Prompt specialist assessment is needed, with quantification of proteinuria, renal investigations and consideration of kidney biopsy according to the clinical picture.",
    "distractor_analysis": {
      "B": "Osteoarthritis does not cause nephritic urine or renal decline.",
      "C": "Raynaud phenomenon does not affect the kidneys.",
      "D": "Fibromyalgia has no renal involvement.",
      "E": "Gout does not explain haematuria, proteinuria and hypertension in SLE."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q095",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "ANCA-associated vasculitis: pulmonary–renal syndrome",
    "difficulty": "Moderate",
    "stem": "A 59-year-old man presents with haemoptysis, breathlessness and rapidly worsening renal function. Urine microscopy shows haematuria and red-cell casts. Which disease process should be urgently considered?",
    "options": {
      "A": "ANCA-associated small-vessel vasculitis",
      "B": "Uncomplicated osteoarthritis",
      "C": "Isolated gout",
      "D": "Polymyalgia rheumatica without vascular involvement",
      "E": "Fibromyalgia"
    },
    "correct_letter": "A",
    "why_correct": "The combination of pulmonary haemorrhage and rapidly progressive glomerular injury suggests a pulmonary–renal syndrome. ANCA-associated vasculitis is an important cause, although anti-GBM disease and other conditions must also be considered. Urgent renal, respiratory and specialist assessment is required.",
    "distractor_analysis": {
      "B": "Osteoarthritis is not a systemic disease.",
      "C": "Gout does not cause pulmonary haemorrhage or glomerulonephritis.",
      "D": "Polymyalgia rheumatica does not cause a pulmonary-renal syndrome.",
      "E": "Fibromyalgia causes no organ damage."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q096",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Axial spondyloarthritis: inflammatory back pain",
    "difficulty": "Moderate",
    "stem": "A 28-year-old man has chronic lower-back pain that began before the age of 40. It improves with exercise, does not improve with rest and wakes him during the second half of the night. He also reports alternating buttock pain. Which diagnosis should be considered?",
    "options": {
      "A": "Axial spondyloarthritis",
      "B": "Acute lumbar fracture without trauma",
      "C": "Isolated knee osteoarthritis",
      "D": "Myasthenia gravis",
      "E": "Polymyalgia rheumatica"
    },
    "correct_letter": "A",
    "why_correct": "Onset at a young age, improvement with exercise, lack of improvement with rest and night pain are features suggestive of inflammatory back pain and axial spondyloarthritis. Normal inflammatory markers or negative HLA-B27 testing do not independently exclude the diagnosis. Appropriate clinical assessment and imaging may be needed.",
    "distractor_analysis": {
      "B": "There is no trauma and the history is chronic.",
      "C": "Knee osteoarthritis does not explain inflammatory back pain.",
      "D": "Myasthenia gravis does not cause back pain.",
      "E": "Polymyalgia rheumatica affects people over 50 with shoulder and hip girdle pain."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q097",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Systemic sclerosis: organ involvement",
    "difficulty": "Moderate",
    "stem": "A 48-year-old woman with Raynaud phenomenon develops progressive skin thickening of the fingers, fingertip ulceration and increasing breathlessness on exertion. Which complication should be actively investigated?",
    "options": {
      "A": "Interstitial lung disease or pulmonary arterial hypertension",
      "B": "Isolated acute appendicitis",
      "C": "Uncomplicated iron deficiency as the sole explanation for all symptoms",
      "D": "Essential tremor",
      "E": "Acute bacterial sinusitis as the defining systemic complication"
    },
    "correct_letter": "A",
    "why_correct": "Systemic sclerosis can affect internal organs, including the lungs. New breathlessness warrants assessment for interstitial lung disease and pulmonary arterial hypertension, among other potential causes. Screening and monitoring should follow specialist guidance and the patient’s disease phenotype.",
    "distractor_analysis": {
      "B": "Appendicitis is not a complication of systemic sclerosis.",
      "C": "Iron deficiency does not explain skin thickening or digital ulcers.",
      "D": "Essential tremor is unrelated.",
      "E": "Sinusitis is not a recognised systemic complication."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q098",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Calcium pyrophosphate deposition disease",
    "difficulty": "Moderate",
    "stem": "A 76-year-old woman develops an acutely painful, swollen knee. Radiography shows chondrocalcinosis. Joint aspiration identifies rhomboid crystals with weak positive birefringence. Which diagnosis best explains the findings?",
    "options": {
      "A": "Calcium pyrophosphate deposition disease",
      "B": "Monosodium urate crystal gout",
      "C": "Rheumatoid arthritis",
      "D": "Septic arthritis as proven by the crystal shape alone",
      "E": "Osteoporosis without crystal deposition"
    },
    "correct_letter": "A",
    "why_correct": "Calcium pyrophosphate crystals are typically rhomboid-shaped and weakly positively birefringent. Monosodium urate crystals are needle-shaped and negatively birefringent. Finding crystals does not exclude a concurrent joint infection, so synovial-fluid culture remains important when septic arthritis is suspected.",
    "distractor_analysis": {
      "B": "Urate crystals are needle-shaped and negatively birefringent.",
      "C": "Rheumatoid arthritis is not a crystal arthropathy.",
      "D": "Crystal shape cannot prove infection; culture is needed.",
      "E": "Osteoporosis does not cause an acute swollen joint."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q099",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Acute confusion in an older adult",
    "difficulty": "Moderate",
    "stem": "An 82-year-old woman is admitted with a urinary tract infection. Her daughter reports that, over the past 24 hours, the patient has become unusually inattentive and intermittently disorientated. She was managing independently before this illness. Her attention and alertness fluctuate during the day. What is the most likely diagnosis?",
    "options": {
      "A": "Alzheimer’s disease",
      "B": "Delirium",
      "C": "Depression",
      "D": "Vascular dementia",
      "E": "Mild cognitive impairment"
    },
    "correct_letter": "B",
    "why_correct": "The acute onset, fluctuating course and impaired attention strongly suggest delirium, precipitated here by an acute illness. Dementia usually develops more gradually. Delirium can coexist with dementia, and uncertainty between the diagnoses should prompt management of possible delirium first.",
    "distractor_analysis": {
      "A": "Alzheimer's disease develops gradually, not over 24 hours.",
      "C": "Depression does not cause acute fluctuating inattention.",
      "D": "Vascular dementia does not develop acutely over 24 hours with fluctuating attention.",
      "E": "Mild cognitive impairment is gradual and does not fluctuate acutely."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q100",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Postural hypotension",
    "difficulty": "Moderate",
    "stem": "An 81-year-old man reports light-headedness shortly after standing. His blood pressure is 142/78 mmHg after resting supine and 108/64 mmHg after standing. He takes several antihypertensive medicines and has had two recent falls. What is the most likely explanation for his symptoms?",
    "options": {
      "A": "Orthostatic hypotension",
      "B": "Essential tremor",
      "C": "Ménière’s disease",
      "D": "Transient ischaemic attack",
      "E": "Vestibular neuritis"
    },
    "correct_letter": "A",
    "why_correct": "The substantial fall in blood pressure after standing, associated with postural symptoms, supports orthostatic hypotension. Potential contributors include medication effects, dehydration and autonomic dysfunction. The clinical response should include reviewing the medication list and assessing reversible causes rather than assuming age alone is responsible.",
    "distractor_analysis": {
      "B": "Essential tremor does not cause a postural blood pressure fall.",
      "C": "Ménière's disease causes vertigo, tinnitus and hearing loss.",
      "D": "A TIA causes focal neurological deficits, not postural symptoms.",
      "E": "Vestibular neuritis causes continuous vertigo, not postural light-headedness."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q101",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Medicines and anticholinergic burden",
    "difficulty": "Moderate",
    "stem": "An 84-year-old woman with pre-existing cognitive impairment develops worsening confusion, dry mouth, constipation and difficulty passing urine after a new medicine is added. The medicine has anticholinergic properties. Which mechanism best explains the cluster of symptoms?",
    "options": {
      "A": "Excessive central and peripheral muscarinic receptor stimulation",
      "B": "Blockade of muscarinic acetylcholine receptors",
      "C": "Inhibition of dopamine breakdown",
      "D": "Increased renal excretion of sodium",
      "E": "Selective stimulation of nicotinic receptors"
    },
    "correct_letter": "B",
    "why_correct": "Anticholinergic medicines can impair cognition and cause dry mouth, constipation and urinary retention. Older people, particularly those with cognitive impairment or polypharmacy, may be more susceptible. A medication review should consider the indication, dose, alternatives and cumulative anticholinergic burden.",
    "distractor_analysis": {
      "A": "Anticholinergics block, not stimulate, muscarinic receptors.",
      "C": "Inhibition of dopamine breakdown describes MAO-B or COMT inhibitors.",
      "D": "Renal sodium excretion does not explain these symptoms.",
      "E": "Anticholinergic effects come from muscarinic blockade, not nicotinic stimulation."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q102",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Dementia assessment",
    "difficulty": "Moderate",
    "stem": "A 76-year-old man has had an 18-month history of progressive memory difficulties. His wife reports that he increasingly struggles with finances and familiar household tasks. He is not acutely unwell, and there is no fluctuating disturbance of attention. Which approach is most appropriate when dementia is suspected in primary care?",
    "options": {
      "A": "Diagnose Alzheimer’s disease solely from the history",
      "B": "Exclude dementia if a brief cognitive screening score is normal",
      "C": "Assess for reversible contributors and obtain a history of cognitive and functional change, including collateral information",
      "D": "Start an antipsychotic as a diagnostic trial",
      "E": "Diagnose vascular dementia from age alone"
    },
    "correct_letter": "C",
    "why_correct": "Assessment should establish the pattern and impact of cognitive decline, use information from someone who knows the patient when possible, and consider alternative or contributing causes such as delirium, depression, sensory impairment and medication effects. A normal cognitive score does not by itself exclude dementia. If dementia remains suspected after initial assessment, referral to a specialist diagnostic service is appropriate.",
    "distractor_analysis": {
      "A": "Diagnosis needs structured assessment and specialist input, not history alone.",
      "B": "A normal brief screening score does not exclude dementia.",
      "D": "Antipsychotics cause harm in dementia and are not diagnostic.",
      "E": "Age alone does not diagnose vascular dementia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q103",
    "subdomain": "Psychiatry",
    "topic": "Capacity and a specific decision",
    "difficulty": "Moderate",
    "stem": "A 79-year-old inpatient with mild dementia refuses a recommended blood test. He can explain that the test involves taking blood but cannot retain the information about why it is needed long enough to weigh the risks and benefits. His ability to make decisions varies with the time of day. Which statement is most accurate?",
    "options": {
      "A": "A diagnosis of dementia automatically means he lacks capacity",
      "B": "Refusal of treatment establishes incapacity",
      "C": "Capacity must be assessed for the particular decision at the relevant time, after appropriate support is offered",
      "D": "His family can automatically make the decision for him",
      "E": "Capacity cannot fluctuate"
    },
    "correct_letter": "C",
    "why_correct": "Capacity is decision-specific and time-specific. A diagnosis of dementia or an apparently unwise decision does not, by itself, establish incapacity. The person should be supported to understand, retain, use or weigh relevant information and communicate a decision. If the person lacks capacity for that decision, the applicable legal framework for decision-making must be followed.",
    "distractor_analysis": {
      "A": "A diagnosis of dementia does not by itself mean he lacks capacity.",
      "B": "Refusing treatment, even unwisely, does not establish incapacity.",
      "D": "Family cannot decide automatically unless they hold relevant legal authority.",
      "E": "Capacity can fluctuate and should be assessed at the relevant time."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q104",
    "subdomain": "Haematology & oncology",
    "topic": "Malignant spinal cord compression",
    "difficulty": "Moderate",
    "stem": "A 68-year-old man with known prostate cancer develops severe progressive back pain, worse at night. He now reports leg weakness and difficulty walking. Examination reveals bilateral lower-limb weakness. What is the most appropriate interpretation?",
    "options": {
      "A": "Uncomplicated mechanical back pain",
      "B": "Peripheral neuropathy caused by diabetes",
      "C": "Suspected metastatic spinal cord compression",
      "D": "Osteoarthritis of the lumbar spine",
      "E": "Chemotherapy-induced nausea"
    },
    "correct_letter": "C",
    "why_correct": "Cancer with progressive back pain and new neurological deficits is a red-flag presentation for metastatic spinal cord compression. This is an oncological emergency requiring immediate escalation for urgent assessment and investigation; routine outpatient review is inappropriate.",
    "distractor_analysis": {
      "A": "New neurological deficits rule out uncomplicated mechanical back pain.",
      "B": "There is no diabetes, and acute bilateral weakness with back pain in cancer suggests cord compression.",
      "D": "Osteoarthritis does not cause progressive limb weakness.",
      "E": "Nausea does not explain back pain and weakness."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q105",
    "subdomain": "Haematology & oncology",
    "topic": "Neutropenic sepsis",
    "difficulty": "Moderate",
    "stem": "A 59-year-old woman receiving chemotherapy presents with fever, rigors and marked lethargy. Her neutrophil count is severely reduced. Her blood pressure is falling, and she appears acutely unwell. What is the most appropriate immediate approach?",
    "options": {
      "A": "Wait for blood culture results before starting treatment",
      "B": "Treat as a medical emergency and initiate the local neutropenic sepsis pathway promptly",
      "C": "Prescribe oral antibiotics and arrange routine review in 48 hours",
      "D": "Give an antipyretic and discharge if the fever falls",
      "E": "Assume the fever is caused by the malignancy and avoid antibiotics"
    },
    "correct_letter": "B",
    "why_correct": "Neutropenic sepsis can deteriorate rapidly and may present with few localising signs. Urgent assessment, cultures and other indicated investigations, and prompt empiric antimicrobial treatment according to the current local protocol are required. Investigations must not cause an unsafe delay in treatment.",
    "distractor_analysis": {
      "A": "Treatment must not wait for culture results.",
      "C": "Oral antibiotics and delayed review are unsafe in a hypotensive patient.",
      "D": "Treating the fever and discharging misses life-threatening sepsis.",
      "E": "Assuming a malignant cause and withholding antibiotics is unsafe."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q106",
    "subdomain": "Haematology & oncology",
    "topic": "Tumour lysis syndrome",
    "difficulty": "Moderate",
    "stem": "A 54-year-old man is admitted with newly diagnosed high-grade lymphoma and a large tumour burden. Shortly after starting chemotherapy, he develops nausea, muscle cramps and reduced urine output. Blood tests show raised potassium, phosphate and urate, with reduced calcium and worsening renal function. Which process best explains these findings?",
    "options": {
      "A": "Increased renal calcium excretion as the sole abnormality",
      "B": "Rapid release of intracellular contents from lysed tumour cells",
      "C": "Autoimmune destruction of renal tubules",
      "D": "Reduced breakdown of bilirubin",
      "E": "Inappropriate secretion of antidiuretic hormone alone"
    },
    "correct_letter": "B",
    "why_correct": "Tumour lysis syndrome results from rapid tumour-cell breakdown, releasing potassium, phosphate and nucleic acids, which are metabolised to uric acid. Hyperphosphataemia can lower serum calcium, while urate and calcium-phosphate deposition and other mechanisms can contribute to acute kidney injury.",
    "distractor_analysis": {
      "A": "Calcium is low, and the pattern involves several electrolytes, not calcium excretion alone.",
      "C": "The picture follows chemotherapy, not autoimmune tubular injury.",
      "D": "Bilirubin metabolism does not explain these findings.",
      "E": "SIADH causes hyponatraemia, not this electrolyte pattern."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q107",
    "subdomain": "Haematology & oncology",
    "topic": "Paraneoplastic hypercalcaemia",
    "difficulty": "Moderate",
    "stem": "A 65-year-old man with a heavy smoking history presents with weight loss, thirst, constipation and confusion. Investigations confirm hypercalcaemia. His parathyroid hormone concentration is suppressed, and imaging identifies a lung mass. Which mechanism is most characteristic of hypercalcaemia associated with squamous cell lung carcinoma?",
    "options": {
      "A": "Ectopic production of parathyroid hormone-related peptide",
      "B": "Increased secretion of calcitonin",
      "C": "Primary hyperparathyroidism",
      "D": "Increased renal activation of vitamin D caused by PTH",
      "E": "Destruction of the thyroid gland"
    },
    "correct_letter": "A",
    "why_correct": "Squamous cell lung carcinoma can cause humoral hypercalcaemia through secretion of parathyroid hormone-related peptide (PTHrP). Suppressed circulating PTH supports a non-parathyroid cause. Malignancy can cause hypercalcaemia through other mechanisms too, including osteolytic bone metastases.",
    "distractor_analysis": {
      "B": "Calcitonin lowers, not raises, serum calcium.",
      "C": "PTH is suppressed, which excludes primary hyperparathyroidism.",
      "D": "PTH is suppressed, so PTH-driven vitamin D activation is not the mechanism.",
      "E": "Thyroid destruction does not cause hypercalcaemia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q108",
    "subdomain": "Haematology & oncology",
    "topic": "Cancer-associated thrombosis",
    "difficulty": "Moderate",
    "stem": "A 61-year-old woman with newly diagnosed pancreatic adenocarcinoma develops unilateral calf swelling and pain. Compression ultrasonography confirms a proximal deep vein thrombosis. She has no active bleeding. Which statement best explains her increased risk of venous thromboembolism?",
    "options": {
      "A": "Most solid tumours cause a generalised deficiency of clotting factors",
      "B": "Malignancy can activate coagulation through tumour-related and host inflammatory mechanisms",
      "C": "Cancer reliably increases fibrinolysis enough to prevent thrombosis",
      "D": "Venous thromboembolism in cancer is usually caused by thrombocytopenia alone",
      "E": "Pancreatic cancer protects against venous thrombosis unless chemotherapy has begun"
    },
    "correct_letter": "B",
    "why_correct": "Cancer can promote thrombosis through procoagulant activity, inflammatory pathways, platelet activation and other changes in haemostasis. Pancreatic adenocarcinoma is particularly associated with venous thromboembolism. Treatment choices depend on factors such as bleeding risk, renal function, interactions and the patient's overall circumstances.",
    "distractor_analysis": {
      "A": "Cancer tends to increase, not deplete, procoagulant factors.",
      "C": "Cancer does not reliably increase fibrinolysis enough to prevent thrombosis.",
      "D": "Thrombocytopenia reduces, not causes, thrombosis.",
      "E": "Pancreatic cancer carries one of the highest thrombosis risks."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q109",
    "subdomain": "Ophthalmology & ENT",
    "topic": "Acute angle-closure glaucoma",
    "difficulty": "Moderate",
    "stem": "A 72-year-old woman develops sudden severe pain in her right eye, blurred vision, coloured halos around lights, headache and nausea. The right eye is red, and the pupil is mid-dilated and poorly reactive. What is the most likely diagnosis?",
    "options": {
      "A": "Acute anterior uveitis",
      "B": "Central retinal artery occlusion",
      "C": "Acute angle-closure glaucoma",
      "D": "Retinal detachment",
      "E": "Optic neuritis"
    },
    "correct_letter": "C",
    "why_correct": "Sudden painful red eye, reduced vision, halos, nausea and a mid-dilated poorly reactive pupil are characteristic of acute angle-closure glaucoma. It is an ophthalmic emergency requiring immediate specialist assessment and pressure-lowering treatment.",
    "distractor_analysis": {
      "A": "Anterior uveitis usually causes a small pupil and photophobia, without halos.",
      "B": "Central retinal artery occlusion causes painless visual loss.",
      "D": "Retinal detachment is painless, with flashes, floaters or a curtain.",
      "E": "Optic neuritis causes pain on eye movement with a white eye."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q110",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Giant cell arteritis and visual symptoms",
    "difficulty": "Moderate",
    "stem": "A 74-year-old woman presents with a new temporal headache, scalp tenderness and pain in her jaw when chewing. She reports a brief episode of visual loss in one eye earlier that day. Which is the most appropriate immediate approach?",
    "options": {
      "A": "Arrange routine optometry review before further action",
      "B": "Start treatment for suspected giant cell arteritis urgently and arrange immediate specialist assessment",
      "C": "Wait for temporal artery biopsy results before starting treatment",
      "D": "Reassure her because transient visual loss is not associated with giant cell arteritis",
      "E": "Prescribe migraine treatment and review in one month"
    },
    "correct_letter": "B",
    "why_correct": "The combination of new headache, jaw claudication and transient visual loss strongly suggests giant cell arteritis, with a risk of irreversible blindness. Treatment should not be delayed while awaiting confirmatory tests. Visual symptoms make same-day specialist assessment especially urgent.",
    "distractor_analysis": {
      "A": "Routine optometry review delays treatment and risks permanent blindness.",
      "C": "Steroids must not wait for biopsy; biopsy can follow treatment.",
      "D": "Transient visual loss is a red flag for giant cell arteritis.",
      "E": "Migraine does not explain jaw claudication or scalp tenderness."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q111",
    "subdomain": "Psychiatry",
    "topic": "Major depressive episode",
    "difficulty": "Moderate",
    "stem": "A 46-year-old man reports six weeks of persistent low mood, loss of interest, early-morning waking, reduced appetite, poor concentration and feelings of worthlessness. These symptoms have impaired his ability to work. He has no history of mania or hypomania. Which diagnosis best fits this presentation?",
    "options": {
      "A": "Generalised anxiety disorder",
      "B": "Major depressive episode",
      "C": "Cyclothymia",
      "D": "Adjustment disorder",
      "E": "Persistent delusional disorder"
    },
    "correct_letter": "B",
    "why_correct": "Persistent low mood or loss of interest, accompanied by other depressive symptoms and significant functional impairment, supports a depressive episode. The duration, symptom pattern and absence of a history of mania or hypomania make this more likely than the alternatives. Assessment should also include suicide risk, possible bipolar disorder and relevant physical or substance-related causes.",
    "distractor_analysis": {
      "A": "Generalised anxiety disorder centres on excessive worry, not pervasive low mood.",
      "C": "Cyclothymia involves chronic mood fluctuation without full depressive episodes.",
      "D": "Adjustment disorder needs an identifiable stressor and does not meet full depressive criteria.",
      "E": "There are no delusions."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q112",
    "subdomain": "Psychiatry",
    "topic": "Generalised anxiety disorder",
    "difficulty": "Moderate",
    "stem": "A 38-year-old woman describes excessive, difficult-to-control worry about work, finances, family and health. She feels tense, sleeps poorly and struggles to concentrate. The symptoms have persisted for many months and interfere with daily functioning. She does not experience discrete episodes of intense fear. Which diagnosis is most likely?",
    "options": {
      "A": "Panic disorder",
      "B": "Generalised anxiety disorder",
      "C": "Specific phobia",
      "D": "Obsessive-compulsive disorder",
      "E": "Acute stress reaction"
    },
    "correct_letter": "B",
    "why_correct": "Generalised anxiety disorder is characterised by persistent, excessive and difficult-to-control anxiety across multiple areas of life, often accompanied by tension, sleep disturbance and impaired concentration. Panic disorder instead centres on recurrent panic attacks and their consequences.",
    "distractor_analysis": {
      "A": "Panic disorder centres on discrete panic attacks, which she does not have.",
      "C": "Specific phobia is fear of a particular trigger.",
      "D": "OCD involves obsessions and compulsions.",
      "E": "An acute stress reaction is brief and follows a specific event."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q113",
    "subdomain": "Psychiatry",
    "topic": "Mania",
    "difficulty": "Moderate",
    "stem": "A 29-year-old man is brought to hospital after ten days of sleeping very little without feeling tired. He is unusually talkative, has racing thoughts, believes he has exceptional business abilities and has spent most of his savings on an implausible venture. His behaviour has caused major disruption at work. Which diagnosis is most likely?",
    "options": {
      "A": "Hypomania",
      "B": "Mania",
      "C": "Generalised anxiety disorder",
      "D": "Attention-deficit hyperactivity disorder",
      "E": "Dysthymia"
    },
    "correct_letter": "B",
    "why_correct": "A sustained period of elevated or irritable mood, increased energy, reduced need for sleep, pressured speech, grandiosity and markedly impaired functioning supports mania. The severity and substantial disruption distinguish it from hypomania. An assessment should consider substance or medication effects and medical causes where appropriate.",
    "distractor_analysis": {
      "A": "Hypomania does not cause marked functional impairment.",
      "C": "Generalised anxiety disorder does not cause elevated mood or grandiosity.",
      "D": "ADHD is lifelong, not an episodic change.",
      "E": "Dysthymia is chronic low mood."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q114",
    "subdomain": "Psychiatry",
    "topic": "Obsessive-compulsive disorder",
    "difficulty": "Moderate",
    "stem": "A 25-year-old woman repeatedly checks that her front door is locked. She recognises that the checking is excessive but feels intense anxiety if she tries to resist it. The ritual takes more than an hour each day and makes her late for work. Which feature most strongly supports obsessive-compulsive disorder?",
    "options": {
      "A": "A fixed false belief that cannot be questioned",
      "B": "Recurrent intrusive thoughts or urges and repetitive behaviours intended to reduce distress",
      "C": "Recurrent unexpected episodes of intense fear alone",
      "D": "Persistent worry across several everyday domains without rituals",
      "E": "Progressive loss of memory and executive function"
    },
    "correct_letter": "B",
    "why_correct": "OCD involves obsessions, compulsions or both. Compulsions are repetitive behaviours or mental acts performed in response to obsessions or according to rigid rules, often to reduce distress. Insight can vary, and the symptoms cause significant distress or functional impairment.",
    "distractor_analysis": {
      "A": "A fixed false belief is a delusion, not an obsession.",
      "C": "Unexpected episodes of intense fear describe panic disorder.",
      "D": "Persistent worry without rituals describes generalised anxiety disorder.",
      "E": "Loss of memory and executive function suggests dementia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q115",
    "subdomain": "Psychiatry",
    "topic": "Schizophrenia: positive symptoms",
    "difficulty": "Moderate",
    "stem": "A 23-year-old man has become socially withdrawn and increasingly suspicious over four months. He hears voices discussing him when nobody is present and believes that strangers are transmitting messages specifically for him through the television. His drug screen is negative. Which finding is a positive symptom of schizophrenia?",
    "options": {
      "A": "Reduced emotional expression",
      "B": "Poverty of speech",
      "C": "Auditory hallucinations",
      "D": "Social withdrawal",
      "E": "Reduced motivation"
    },
    "correct_letter": "C",
    "why_correct": "Positive symptoms include hallucinations, delusions and disorganised thought or behaviour. Reduced emotional expression, poverty of speech and reduced motivation are negative symptoms. Social withdrawal can occur in several conditions and is not specific to schizophrenia.",
    "distractor_analysis": {
      "A": "Reduced emotional expression is a negative symptom.",
      "B": "Poverty of speech is a negative symptom.",
      "D": "Social withdrawal is non-specific and usually grouped with negative symptoms.",
      "E": "Reduced motivation is a negative symptom."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q116",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Lithium toxicity",
    "difficulty": "Moderate",
    "stem": "A 67-year-old man with bipolar disorder has been stable on lithium for several years. He develops vomiting and diarrhoea and continues taking his usual medicines despite poor oral intake. He subsequently develops coarse tremor, unsteady gait and confusion. Which is the most appropriate immediate action?",
    "options": {
      "A": "Increase the lithium dose because the mood disorder may be relapsing",
      "B": "Continue lithium and arrange a routine outpatient review",
      "C": "Withhold lithium and arrange urgent medical assessment for possible toxicity",
      "D": "Prescribe an additional antipsychotic and discharge him",
      "E": "Reassure him that these are expected effects of long-term treatment"
    },
    "correct_letter": "C",
    "why_correct": "Gastrointestinal illness and dehydration can increase the risk of lithium toxicity. Coarse tremor, ataxia and confusion are concerning neurological features. Lithium should be withheld and urgent assessment arranged, including lithium concentration, renal function, electrolytes and evaluation of fluid status. Severe toxicity may require specialist management.",
    "distractor_analysis": {
      "A": "Increasing the dose would worsen toxicity.",
      "B": "Continuing lithium with neurological features is unsafe.",
      "D": "Adding an antipsychotic and discharging misses toxicity.",
      "E": "Coarse tremor, ataxia and confusion are not expected effects; they suggest toxicity."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q117",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Neuroleptic malignant syndrome",
    "difficulty": "Moderate",
    "stem": "A 42-year-old man develops fever, severe generalised muscle rigidity, confusion and autonomic instability several days after starting a dopamine-blocking antipsychotic. Blood tests show a markedly elevated creatine kinase concentration. Which diagnosis is most likely?",
    "options": {
      "A": "Serotonin syndrome",
      "B": "Neuroleptic malignant syndrome",
      "C": "Acute dystonia",
      "D": "Malignant hyperthermia following anaesthesia",
      "E": "Alcohol withdrawal without complications"
    },
    "correct_letter": "B",
    "why_correct": "Neuroleptic malignant syndrome is a potentially fatal reaction associated with dopamine antagonism, typically involving hyperthermia, severe rigidity, altered mental state and autonomic instability. Creatine kinase is often markedly elevated due to muscle injury. The causative drug should be stopped and emergency supportive medical care initiated.",
    "distractor_analysis": {
      "A": "Serotonin syndrome causes clonus and hyperreflexia with rapid onset, not lead-pipe rigidity.",
      "C": "Acute dystonia causes muscle spasms without fever or a marked CK rise.",
      "D": "Malignant hyperthermia follows anaesthetic agents, not antipsychotics.",
      "E": "There is no alcohol history, and withdrawal does not cause this rigidity."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q118",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Serotonin syndrome",
    "difficulty": "Moderate",
    "stem": "A 35-year-old woman taking sertraline is prescribed another medicine with serotonergic activity. Within hours, she develops agitation, sweating, diarrhoea, tremor, hyperreflexia and inducible ankle clonus. Which diagnosis best explains the findings?",
    "options": {
      "A": "Neuroleptic malignant syndrome",
      "B": "Serotonin syndrome",
      "C": "Lithium toxicity",
      "D": "Anticholinergic toxicity",
      "E": "Opioid withdrawal"
    },
    "correct_letter": "B",
    "why_correct": "Serotonin syndrome follows excessive serotonergic activity and may develop rapidly after a medicine is started, increased or combined with another serotonergic agent. Clonus and hyperreflexia are particularly useful clues. The suspected causative medicines should be stopped and urgent assessment and supportive treatment provided according to severity.",
    "distractor_analysis": {
      "A": "Neuroleptic malignant syndrome follows antipsychotics and causes rigidity, not clonus.",
      "C": "Lithium toxicity does not follow adding a serotonergic drug to sertraline.",
      "D": "Anticholinergic toxicity causes dry skin and does not cause clonus.",
      "E": "Opioid withdrawal does not cause clonus and hyperreflexia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q119",
    "subdomain": "Psychiatry",
    "topic": "Alcohol withdrawal",
    "difficulty": "Moderate",
    "stem": "A 51-year-old man with longstanding heavy alcohol consumption is admitted with pneumonia. Approximately 24 hours after his last drink, he develops tremor, sweating, anxiety, nausea and tachycardia. He remains orientated and has no hallucinations. What is the most likely explanation?",
    "options": {
      "A": "Alcohol withdrawal",
      "B": "Wernicke encephalopathy",
      "C": "Hepatic encephalopathy",
      "D": "Alcoholic hallucinosis",
      "E": "Delirium tremens"
    },
    "correct_letter": "A",
    "why_correct": "Tremor, sweating, anxiety, nausea and autonomic activation after reducing or stopping prolonged heavy alcohol consumption are consistent with alcohol withdrawal. Delirium tremens involves a more severe syndrome with delirium and usually marked autonomic disturbance. Withdrawal can progress, so the patient requires appropriate clinical assessment and monitoring.",
    "distractor_analysis": {
      "B": "Wernicke encephalopathy causes confusion, ataxia and ophthalmoplegia; he is orientated.",
      "C": "Hepatic encephalopathy causes confusion and asterixis.",
      "D": "Alcoholic hallucinosis involves hallucinations, which he does not have.",
      "E": "Delirium tremens involves delirium, usually 48 to 72 hours after the last drink."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q120",
    "subdomain": "Renal & urology",
    "topic": "Nephritic syndrome",
    "difficulty": "Moderate",
    "stem": "A 24-year-old man presents with dark urine, facial puffiness and hypertension. Urinalysis shows blood and protein. Microscopy reveals red-cell casts, and blood tests show a reduced serum C3 concentration. He had a sore throat three weeks earlier. Which diagnosis is most likely?",
    "options": {
      "A": "Minimal change disease",
      "B": "Acute post-streptococcal glomerulonephritis",
      "C": "Diabetic nephropathy",
      "D": "Acute interstitial nephritis",
      "E": "Renal artery stenosis"
    },
    "correct_letter": "B",
    "why_correct": "The interval after a preceding throat infection, nephritic features and reduced complement support post-streptococcal glomerulonephritis. Red-cell casts indicate bleeding originating within the kidney, commonly from glomerular inflammation.",
    "distractor_analysis": {
      "A": "Minimal change disease causes nephrotic syndrome with normal C3.",
      "C": "Diabetic nephropathy requires diabetes and develops gradually.",
      "D": "Acute interstitial nephritis is usually drug-related, with white-cell casts.",
      "E": "Renal artery stenosis does not cause red-cell casts or a low C3."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q121",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Imported fever: urgent malaria diagnosis",
    "difficulty": "Moderate",
    "stem": "A 29-year-old man returns to the UK from Ghana. He develops fever, headache and malaise 10 days later. He has no localising symptoms. His platelet count is low and his temperature is 39.2°C. What is the most appropriate investigation to establish the diagnosis?",
    "options": {
      "A": "Blood cultures alone",
      "B": "Serological testing for malaria antibodies",
      "C": "Urgent malaria blood-film examination",
      "D": "Chest radiography",
      "E": "Stool microscopy"
    },
    "correct_letter": "C",
    "why_correct": "Decisive clue: Fever following recent travel to a malaria-risk area. Reasoning path: Malaria must be considered urgently in a patient who becomes unwell after returning from the tropics. UKHSA guidance states that suspected malaria is a medical emergency and that suspected cases should undergo urgent blood-film diagnosis. A single clinical presentation cannot reliably establish or exclude malaria.",
    "distractor_analysis": {
      "A": "Blood cultures are needed for enteric fever and sepsis, but on their own they miss malaria, the diagnosis that must be excluded first.",
      "B": "Antibodies reflect past exposure and take time to appear, so serology cannot diagnose acute malaria.",
      "D": "There are no respiratory symptoms, and a chest film cannot diagnose the systemic febrile illness most likely after West Africa.",
      "E": "He has no diarrhoea, and stool microscopy does not address an undifferentiated fever with thrombocytopenia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q122",
    "subdomain": "Neurology",
    "topic": "Stroke: localising the lesion",
    "difficulty": "Moderate",
    "stem": "A 63-year-old woman develops sudden weakness affecting her right arm and leg. She also has expressive dysphasia. Examination shows a right facial weakness affecting the lower face, with preserved forehead movement. Which anatomical site best accounts for these findings?",
    "options": {
      "A": "Left cerebral hemisphere",
      "B": "Right cerebral hemisphere",
      "C": "Right facial nerve",
      "D": "Left cerebellar hemisphere",
      "E": "Brainstem at the level of the facial nucleus"
    },
    "correct_letter": "A",
    "why_correct": "Decisive clue: Contralateral hemiparesis + expressive dysphasia + upper motor neurone facial weakness. Reasoning path: The motor findings localise above the facial nucleus, while expressive dysphasia strongly supports a dominant cerebral-hemisphere lesion. In a patient with right-sided weakness and dysphasia, the most likely localisation is the left cerebral hemisphere.",
    "distractor_analysis": {
      "B": "A right hemisphere lesion causes left-sided weakness and does not usually produce dysphasia in a right-handed patient.",
      "C": "A facial nerve lesion is lower motor neurone and involves the forehead; it cannot explain limb weakness or dysphasia.",
      "D": "Cerebellar lesions cause ipsilateral ataxia and incoordination, not hemiparesis, facial weakness or dysphasia.",
      "E": "A lesion here gives ipsilateral lower motor neurone facial palsy with contralateral limb weakness, and no dysphasia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q123",
    "subdomain": "Cardiology",
    "topic": "Heart failure with reduced ejection fraction: drug treatment",
    "difficulty": "Moderate",
    "stem": "A 68-year-old man has symptomatic chronic heart failure. Echocardiography demonstrates a left ventricular ejection fraction of 30%. Which combination represents the four main pharmacological treatment classes recommended by NICE for heart failure with reduced ejection fraction?",
    "options": {
      "A": "ARB, loop diuretic, calcium-channel blocker and statin",
      "B": "Beta-blocker, nitrate, digoxin and thiazide diuretic",
      "C": "MRA, calcium-channel blocker, nitrate and statin",
      "D": "ACE inhibitor, beta-blocker, MRA and SGLT2 inhibitor",
      "E": "ACE inhibitor, calcium-channel blocker, digoxin and nitrate"
    },
    "correct_letter": "D",
    "why_correct": "NICE recommends offering four drug classes to people with HFrEF: an ACE inhibitor (or alternative such as an ARB or sacubitril valsartan where appropriate), a beta-blocker licensed for heart failure, a mineralocorticoid receptor antagonist and an SGLT2 inhibitor. These improve survival and reduce hospital admission; diuretics are used for congestion but do not improve prognosis.",
    "distractor_analysis": {
      "A": "Loop diuretics relieve congestion without improving survival, and statins and calcium-channel blockers are not HFrEF disease-modifying treatment.",
      "B": "Only the beta-blocker is a core prognostic drug; the others are symptomatic or specialist add-ons.",
      "C": "The MRA is correct, but the other three classes have no place among the four core HFrEF treatments.",
      "E": "Rate-limiting calcium-channel blockers can worsen HFrEF, and digoxin and nitrates are add-on treatments, not core therapy."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q124",
    "subdomain": "Respiratory",
    "topic": "COPD",
    "difficulty": "Moderate",
    "stem": "A 67-year-old smoker with COPD has stable chronic breathlessness. His oxygen saturation is 91% breathing air. He is receiving otherwise optimal medical treatment. Which investigation is required when assessing whether he may be suitable for long-term oxygen therapy?",
    "options": {
      "A": "Peak expiratory flow monitoring for one week",
      "B": "Arterial blood gases when clinically stable",
      "C": "CT pulmonary angiography",
      "D": "Exercise ECG",
      "E": "Bronchoscopy"
    },
    "correct_letter": "B",
    "why_correct": "NICE recommends assessment for long-term oxygen therapy using arterial blood gases on two occasions at least three weeks apart in appropriately selected, stable patients receiving optimal treatment.",
    "distractor_analysis": {
      "A": "Peak flow helps in asthma but does not measure oxygenation, which decides eligibility for long-term oxygen.",
      "C": "CTPA investigates pulmonary embolism, not suitability for long-term oxygen in stable COPD.",
      "D": "An exercise ECG assesses ischaemic heart disease and has no role in oxygen assessment.",
      "E": "Bronchoscopy looks for airway lesions and does not measure gas exchange."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q125",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Coeliac disease",
    "difficulty": "Moderate",
    "stem": "A 32-year-old woman presents with chronic diarrhoea, fatigue and iron-deficiency anaemia. She has started a gluten-free diet herself, and her symptoms have improved. She asks whether a blood test can now reliably establish the diagnosis of coeliac disease. Which is the most appropriate advice?",
    "options": {
      "A": "Testing is unreliable on a gluten-free diet; seek specialist advice",
      "B": "A faecal calprotectin result would confirm or exclude coeliac disease",
      "C": "HLA-DQ2 positivity alone would establish the diagnosis",
      "D": "She should remain gluten-free for several months before testing",
      "E": "A negative tissue transglutaminase antibody test would reliably exclude coeliac disease"
    },
    "correct_letter": "A",
    "why_correct": "Decisive clue: She has already restricted gluten before diagnostic testing. Reasoning: Coeliac serology is most reliable when the patient is consuming gluten. NICE advises people not to start a gluten-free diet until the diagnosis is confirmed and recommends specialist assessment when someone is already restricting gluten and cannot or will not reintroduce it. If she can reintroduce gluten, she should eat gluten in more than one meal every day for at least 6 weeks before testing. HLA-DQ2/DQ8 testing is not an initial diagnostic test in non-specialist settings.",
    "distractor_analysis": {
      "B": "Calprotectin is a marker of intestinal inflammation, mainly used for IBD, and does not diagnose coeliac disease.",
      "C": "HLA-DQ2 is common in the general population, so a positive result cannot confirm coeliac disease.",
      "D": "Staying gluten-free makes serology and biopsy less accurate; gluten should be eaten before testing.",
      "E": "While she is avoiding gluten, antibody levels may fall, so a negative result could be falsely reassuring."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q126",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Achalasia",
    "difficulty": "Moderate",
    "stem": "A 51-year-old man has progressive difficulty swallowing both solids and liquids. He regurgitates undigested food and has lost weight. Upper gastrointestinal endoscopy does not reveal an obstructing lesion. Which investigation best confirms a suspected oesophageal motility disorder such as achalasia?",
    "options": {
      "A": "Serum gastrin concentration",
      "B": "Faecal elastase",
      "C": "Ambulatory pH monitoring",
      "D": "High-resolution oesophageal manometry",
      "E": "Gastric emptying scintigraphy"
    },
    "correct_letter": "D",
    "why_correct": "Decisive clue: Dysphagia to solids and liquids with no obstructing lesion at endoscopy. Reasoning: Oesophageal manometry measures pressure and motility during swallowing and can confirm achalasia. Endoscopy is important for assessing structural disease, but a normal endoscopy does not exclude an oesophageal motility disorder.",
    "distractor_analysis": {
      "A": "Gastrin is measured for suspected gastrinoma and does not assess swallowing.",
      "B": "Faecal elastase tests pancreatic exocrine function and is unrelated to dysphagia.",
      "C": "pH monitoring quantifies acid reflux; it does not measure sphincter relaxation or peristalsis.",
      "E": "This assesses gastroparesis, not oesophageal motility."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q127",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Helicobacter pylori testing",
    "difficulty": "Moderate",
    "stem": "A 43-year-old woman with dyspepsia is taking omeprazole. Her clinician plans to request a urea breath test for Helicobacter pylori. What should be done to improve the accuracy of the test?",
    "options": {
      "A": "Continue omeprazole unchanged until the test",
      "B": "Replace omeprazole with an antibiotic for two days before testing",
      "C": "Use an office-based antibody test because proton pump inhibitors do not affect it",
      "D": "Stop omeprazole for two weeks before testing, if clinically appropriate",
      "E": "Perform the breath test immediately after the morning omeprazole dose"
    },
    "correct_letter": "D",
    "why_correct": "Decisive clue: Proton pump inhibitor use before a test for active H. pylori infection. Reasoning: NICE recommends a two-week PPI washout before a urea breath test or stool antigen test. Any interruption should be clinically appropriate for the patient.",
    "distractor_analysis": {
      "A": "PPIs suppress H. pylori urease activity and can cause false-negative breath tests.",
      "B": "Recent antibiotics also cause false negatives; a four-week antibiotic-free interval is needed.",
      "C": "Serology cannot distinguish current from past infection, so it is not recommended to test for active infection.",
      "E": "Timing around the dose does not remove the PPI effect; a washout is needed."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q128",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Acute variceal bleeding",
    "difficulty": "Difficult",
    "stem": "A 59-year-old man with established cirrhosis presents with haematemesis and melaena. He is tachycardic and hypotensive. Variceal bleeding is suspected. After immediate assessment and resuscitation have begun, which additional treatment is recommended at presentation for suspected variceal bleeding?",
    "options": {
      "A": "Intravenous proton pump inhibitor before endoscopy",
      "B": "Fresh frozen plasma regardless of clotting results",
      "C": "Intravenous tranexamic acid",
      "D": "Platelet transfusion regardless of platelet count",
      "E": "Prophylactic antibiotic therapy"
    },
    "correct_letter": "E",
    "why_correct": "Decisive clue: Cirrhosis with suspected acute upper gastrointestinal bleeding from varices. Reasoning: People with cirrhosis and upper gastrointestinal bleeding should receive prophylactic intravenous antibiotics at presentation, as this reduces infection and mortality. Terlipressin is also offered at presentation. Antibiotics are an adjunct, not a substitute for resuscitation and endoscopic control of bleeding.",
    "distractor_analysis": {
      "A": "NICE advises against starting acid suppression before endoscopy in acute upper GI bleeding.",
      "B": "FFP is reserved for patients with abnormal clotting tests who are actively bleeding, not given to everyone.",
      "C": "Tranexamic acid has not been shown to reduce death in GI bleeding and increases venous thrombosis risk.",
      "D": "Platelets are given only if the count is low and bleeding is active, not routinely."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q129",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Hereditary haemochromatosis",
    "difficulty": "Moderate",
    "stem": "A 46-year-old man has persistent fatigue, abnormal liver blood tests and a first-degree relative with hereditary haemochromatosis. Which combination of blood tests is most directly useful in the initial assessment for iron overload?",
    "options": {
      "A": "Serum caeruloplasmin and urinary copper alone",
      "B": "Serum amylase and lipase",
      "C": "Serum haptoglobin and reticulocyte count",
      "D": "Serum folate and vitamin B12",
      "E": "Serum ferritin and transferrin saturation"
    },
    "correct_letter": "E",
    "why_correct": "Decisive clue: Family history and possible iron overload. Reasoning: Ferritin provides information about iron stores, while transferrin saturation assesses the proportion of transferrin bound to iron. Both are used in the assessment of suspected haemochromatosis. Ferritin can also rise with inflammation or liver disease, so it must be interpreted in context.",
    "distractor_analysis": {
      "A": "These assess Wilson disease (copper overload), not haemochromatosis.",
      "B": "These help diagnose acute pancreatitis and say nothing about iron overload.",
      "C": "These are markers of haemolysis, not iron stores.",
      "D": "These assess causes of macrocytic anaemia, not iron overload."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q130",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Pancreatic exocrine insufficiency",
    "difficulty": "Moderate",
    "stem": "A 57-year-old man with chronic pancreatitis has weight loss, bulky pale stools and difficulty maintaining his weight despite an adequate appetite. Which mechanism best explains these symptoms?",
    "options": {
      "A": "Excess gastric intrinsic-factor production",
      "B": "Excess pancreatic bicarbonate secretion",
      "C": "Increased ileal absorption of bile acids",
      "D": "Reduced pancreatic enzyme secretion causing maldigestion",
      "E": "Increased colonic water absorption"
    },
    "correct_letter": "D",
    "why_correct": "Decisive clue: Chronic pancreatitis with features of fat malabsorption and weight loss. Reasoning: Chronic pancreatic damage can cause exocrine insufficiency. Reduced digestive-enzyme delivery to the intestine impairs nutrient digestion, particularly fat digestion, resulting in steatorrhoea and weight loss.",
    "distractor_analysis": {
      "A": "Intrinsic factor concerns B12 absorption; an excess would not cause fat malabsorption.",
      "B": "Chronic pancreatitis reduces, not increases, pancreatic secretion, and bicarbonate excess would not cause steatorrhoea.",
      "C": "Steatorrhoea from bile acids follows reduced ileal absorption, as in ileal disease, not increased absorption.",
      "E": "This would make stools firmer and does not explain fatty stools or weight loss."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q131",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Acute upper gastrointestinal bleeding",
    "difficulty": "Difficult",
    "stem": "A 70-year-old man presents with a large haematemesis. He is hypotensive and confused. An acute upper gastrointestinal bleed is suspected. When should endoscopy be performed?",
    "options": {
      "A": "Only after a routine outpatient clinic review",
      "B": "After discharge, if symptoms recur",
      "C": "Only after all haemoglobin measurements have returned to normal",
      "D": "Immediately, before resuscitation",
      "E": "Immediately after resuscitation"
    },
    "correct_letter": "E",
    "why_correct": "Decisive clue: Haemodynamic instability due to severe upper gastrointestinal bleeding. Reasoning: NICE recommends endoscopy for unstable patients with severe acute upper gastrointestinal bleeding immediately after resuscitation. Other patients with upper gastrointestinal bleeding should generally undergo endoscopy within 24 hours of admission.",
    "distractor_analysis": {
      "A": "Outpatient timing is far too slow for a haemodynamically unstable bleed.",
      "B": "A severe bleed with shock needs inpatient endoscopy, not deferred assessment.",
      "C": "Waiting for haemoglobin to normalise delays treatment of the bleeding source.",
      "D": "Endoscopy in a shocked, unresuscitated patient is unsafe; resuscitation comes first."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q132",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Crohn disease versus ulcerative colitis",
    "difficulty": "Moderate",
    "stem": "A 27-year-old woman has chronic diarrhoea, abdominal pain and weight loss. Colonoscopy shows patchy areas of inflammation separated by segments of normal mucosa. An anal fistula is also present. Which diagnosis best fits this combination?",
    "options": {
      "A": "Coeliac disease",
      "B": "Ulcerative colitis",
      "C": "Crohn disease",
      "D": "Microscopic colitis",
      "E": "Irritable bowel syndrome"
    },
    "correct_letter": "C",
    "why_correct": "Decisive clue: Patchy intestinal inflammation with perianal fistulising disease. Reasoning: Crohn disease can affect different parts of the gastrointestinal tract and characteristically produces discontinuous inflammation. Fistula formation is an important feature supporting Crohn disease over ulcerative colitis.",
    "distractor_analysis": {
      "A": "Coeliac disease affects the small bowel and does not produce patchy colitis or fistulae.",
      "B": "UC causes continuous inflammation from the rectum, and fistulae are not a feature.",
      "D": "The colonic mucosa looks normal at colonoscopy in microscopic colitis.",
      "E": "IBS causes no visible inflammation and does not cause weight loss or fistulae."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q133",
    "subdomain": "Renal & urology",
    "topic": "Nephrotic syndrome and thrombosis",
    "difficulty": "Moderate",
    "stem": "A 39-year-old man presents with marked peripheral oedema and frothy urine. Investigations show heavy proteinuria, low serum albumin and hyperlipidaemia. He subsequently develops a painful, swollen leg. Which mechanism contributes to the increased risk of venous thrombosis in nephrotic syndrome?",
    "options": {
      "A": "Increased urinary loss of red blood cells",
      "B": "Reduced hepatic synthesis of all clotting factors",
      "C": "Universal severe thrombocytopenia",
      "D": "Persistent activation of fibrinolysis",
      "E": "Urinary loss of anticoagulant proteins such as antithrombin"
    },
    "correct_letter": "E",
    "why_correct": "Nephrotic syndrome creates a prothrombotic state through several mechanisms, including urinary loss of anticoagulant proteins, increased hepatic synthesis of procoagulant proteins and altered platelet activity. The extent of risk varies with the underlying renal disease and clinical circumstances.",
    "distractor_analysis": {
      "A": "Haematuria is a nephritic feature and does not increase thrombotic risk.",
      "B": "The liver increases synthesis of procoagulant factors such as fibrinogen in nephrotic syndrome.",
      "C": "Platelet counts are usually normal or raised in nephrotic syndrome, and low platelets would reduce clotting.",
      "D": "Fibrinolysis is impaired, not activated, in nephrotic syndrome."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q134",
    "subdomain": "Renal & urology",
    "topic": "Renal artery stenosis",
    "difficulty": "Moderate",
    "stem": "A 72-year-old man with widespread atherosclerotic disease develops a substantial rise in creatinine after starting an ACE inhibitor. His blood pressure remains difficult to control despite several antihypertensive medicines. Which mechanism best explains the rise in creatinine if he has significant bilateral renal artery stenosis?",
    "options": {
      "A": "Increased efferent arteriolar constriction",
      "B": "Increased renal prostaglandin synthesis",
      "C": "Increased aldosterone-mediated potassium excretion",
      "D": "Loss of angiotensin II efferent constriction, lowering glomerular pressure",
      "E": "Direct immune-mediated destruction of glomerular basement membranes"
    },
    "correct_letter": "D",
    "why_correct": "When renal perfusion is compromised, angiotensin II-mediated efferent arteriolar constriction helps maintain glomerular filtration pressure. ACE inhibitors reduce angiotensin II formation, potentially lowering filtration and increasing creatinine in significant bilateral renal artery stenosis or other states dependent on this mechanism. A substantial creatinine rise warrants prompt clinical review and assessment for contributing causes.",
    "distractor_analysis": {
      "A": "ACE inhibitors relax, not constrict, the efferent arteriole; constriction would support filtration.",
      "B": "Prostaglandins dilate the afferent arteriole and protect filtration; NSAIDs that block them reduce GFR.",
      "C": "ACE inhibitors reduce aldosterone and cause potassium retention, which does not explain a creatinine rise.",
      "E": "ACE inhibitors do not cause anti-GBM disease; the change is haemodynamic."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q135",
    "subdomain": "Renal & urology",
    "topic": "Chronic kidney disease and anaemia",
    "difficulty": "Moderate",
    "stem": "A 68-year-old woman with established chronic kidney disease develops fatigue and exertional breathlessness. Her haemoglobin is low, mean corpuscular volume is normal, ferritin is not reduced and there is no evidence of haemolysis or active bleeding. Which mechanism is a major contributor to her anaemia?",
    "options": {
      "A": "Increased intestinal iron absorption",
      "B": "Excessive destruction of platelets",
      "C": "Reduced renal erythropoietin production",
      "D": "Excessive renal erythropoietin production",
      "E": "Increased intrinsic factor secretion"
    },
    "correct_letter": "C",
    "why_correct": "Healthy kidneys produce erythropoietin, which stimulates red-cell production in the bone marrow. Chronic kidney disease can reduce erythropoietin production, contributing to normocytic anaemia. Iron deficiency, inflammation, blood loss and other causes should still be assessed rather than attributing every case of anaemia to CKD alone.",
    "distractor_analysis": {
      "A": "Iron absorption is usually reduced in CKD, and increased absorption would not cause anaemia.",
      "B": "Platelet destruction causes thrombocytopenia, not anaemia.",
      "D": "Excess erythropoietin causes polycythaemia, not anaemia.",
      "E": "Intrinsic factor relates to B12 absorption; an increase would not cause anaemia, and the MCV is normal."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q136",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Diagnostic test interpretation",
    "difficulty": "Moderate",
    "stem": "A diagnostic test is evaluated in 200 people who have a disease and 800 people who do not. It gives a positive result in 180 people with the disease and 160 people without it. What is the specificity of the test?",
    "options": {
      "A": "20%",
      "B": "80%",
      "C": "82%",
      "D": "90%",
      "E": "98%"
    },
    "correct_letter": "B",
    "why_correct": "Specificity is the proportion of people without the disease who test negative. True negatives = 800 − 160 = 640; specificity = 640/800 = 0.80 = 80%.",
    "distractor_analysis": {
      "A": "160/800 is the false-positive rate, which is 1 minus specificity.",
      "C": "(180 + 640)/1,000 = 82% is the overall accuracy, not the specificity.",
      "D": "180/200 is the sensitivity, the proportion of people with the disease who test positive.",
      "E": "This would need only 16 false positives, not 160."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q137",
    "subdomain": "Genetics",
    "topic": "Hardy–Weinberg equilibrium",
    "difficulty": "Moderate",
    "stem": "In a population in Hardy–Weinberg equilibrium, the frequency of a recessive disease allele is q = 0.1. Assume the disease is fully penetrant and occurs only in homozygotes for that allele. What proportion of the population is expected to have the disease?",
    "options": {
      "A": "0.1%",
      "B": "1%",
      "C": "9%",
      "D": "18%",
      "E": "81%"
    },
    "correct_letter": "B",
    "why_correct": "Under Hardy–Weinberg equilibrium, the expected frequency of homozygous recessive individuals is q² = 0.1 × 0.1 = 0.01, or 1%. This calculation assumes the stated genetic model and population equilibrium.",
    "distractor_analysis": {
      "A": "This is q³; the homozygote frequency is q².",
      "C": "This is pq (0.9 × 0.1), half the carrier frequency; the affected frequency is q².",
      "D": "2pq = 2 × 0.9 × 0.1 = 0.18 is the carrier (heterozygote) frequency, not the affected frequency.",
      "E": "p² = 0.81 is the frequency of unaffected homozygotes for the normal allele."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q138",
    "subdomain": "Clinical physiology",
    "topic": "Acid–base interpretation",
    "difficulty": "Moderate",
    "stem": "A patient with prolonged vomiting has the following arterial blood gas results: pH 7.50; PCO2 6.0 kPa; bicarbonate 35 mmol/L. Which is the primary acid–base disturbance?",
    "options": {
      "A": "Respiratory alkalosis",
      "B": "Mixed metabolic and respiratory acidosis",
      "C": "Metabolic acidosis",
      "D": "Respiratory acidosis",
      "E": "Metabolic alkalosis"
    },
    "correct_letter": "E",
    "why_correct": "The pH indicates alkalaemia and the bicarbonate is elevated, identifying metabolic alkalosis as the primary disturbance. The raised carbon dioxide is in the direction expected for respiratory compensation. Vomiting can cause loss of gastric hydrochloric acid and contribute to metabolic alkalosis.",
    "distractor_analysis": {
      "A": "Respiratory alkalosis would have a low PCO2, not a raised one.",
      "B": "The pH is above 7.45, which rules out any net acidosis.",
      "C": "Metabolic acidosis has a low pH and low bicarbonate, the opposite of these results.",
      "D": "The pH is alkalaemic, so the primary disturbance cannot be an acidosis; the raised PCO2 is compensation."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q139",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Pharmacokinetics",
    "difficulty": "Moderate",
    "stem": "A medicine is eliminated by first-order kinetics over its therapeutic concentration range. Its half-life is six hours, and the patient has stable drug distribution and clearance. Approximately what proportion of the original drug amount remains after 18 hours?",
    "options": {
      "A": "6.25%",
      "B": "12.5%",
      "C": "25%",
      "D": "50%",
      "E": "75%"
    },
    "correct_letter": "B",
    "why_correct": "Eighteen hours represents three half-lives. The amount remaining is 100% → 50% → 25% → 12.5%. This assumes first-order elimination and no additional doses during the interval.",
    "distractor_analysis": {
      "A": "This is the amount after four half-lives (24 hours), not three.",
      "C": "This is the amount after two half-lives (12 hours).",
      "D": "This is the amount after one half-life (6 hours).",
      "E": "This assumes linear loss of about a quarter, which is not how first-order elimination works."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q140",
    "subdomain": "Clinical physiology",
    "topic": "Oxygen–haemoglobin dissociation curve",
    "difficulty": "Moderate",
    "stem": "A patient develops a fever of 39.5°C due to pneumonia. At a given partial pressure of oxygen, haemoglobin has a lower affinity for oxygen than it would at normal body temperature. Which change explains this finding?",
    "options": {
      "A": "A leftward shift of the oxygen–haemoglobin dissociation curve",
      "B": "A reduction in hydrogen ion concentration",
      "C": "A rightward shift of the oxygen–haemoglobin dissociation curve",
      "D": "A reduction in carbon dioxide concentration",
      "E": "A reduction in 2,3-bisphosphoglycerate concentration"
    },
    "correct_letter": "C",
    "why_correct": "Increased temperature shifts the dissociation curve to the right, reducing haemoglobin's affinity for oxygen and facilitating oxygen unloading in tissues. Increased carbon dioxide, increased hydrogen ion concentration and increased 2,3-bisphosphoglycerate also promote a rightward shift.",
    "distractor_analysis": {
      "A": "A left shift increases oxygen affinity, as with hypothermia or carbon monoxide.",
      "B": "Alkalosis increases oxygen affinity (left shift).",
      "D": "Lower CO2 increases affinity and shifts the curve left.",
      "E": "Lower 2,3-BPG increases affinity and shifts the curve left."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q141",
    "subdomain": "Clinical physiology",
    "topic": "Starling forces and oedema",
    "difficulty": "Moderate",
    "stem": "A 67-year-old man with severe hypoalbuminaemia develops bilateral ankle oedema. His cardiac function is normal, and there is no evidence of venous obstruction. Which mechanism most directly contributes to the oedema?",
    "options": {
      "A": "Reduced plasma colloid osmotic pressure",
      "B": "Increased lymphatic drainage",
      "C": "Reduced capillary hydrostatic pressure",
      "D": "Increased intracellular oncotic pressure in red blood cells",
      "E": "Increased plasma colloid osmotic pressure"
    },
    "correct_letter": "A",
    "why_correct": "Albumin contributes substantially to plasma colloid osmotic pressure. A marked reduction in plasma albumin decreases the force retaining fluid within the vascular compartment and can promote movement of fluid into the interstitial space. Renal sodium retention and other mechanisms may also contribute to oedema in clinical disease.",
    "distractor_analysis": {
      "B": "More lymphatic drainage removes interstitial fluid; reduced drainage causes oedema.",
      "C": "Lower hydrostatic pressure reduces fluid filtration and would not cause oedema.",
      "D": "Red-cell oncotic pressure does not govern fluid movement across the capillary wall.",
      "E": "Higher oncotic pressure would hold fluid in the vessels and reduce oedema."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q142",
    "subdomain": "Immunology",
    "topic": "Immunoglobulin class switching",
    "difficulty": "Moderate",
    "stem": "A patient with a B-cell immune response initially produces IgM antibodies against a newly encountered antigen. Following an appropriate immune response, the same B-cell lineage begins producing antigen-specific IgG. Which process allows this change?",
    "options": {
      "A": "Class-switch recombination",
      "B": "Negative selection of thymocytes",
      "C": "Somatic hypermutation alone",
      "D": "Neutrophil degranulation",
      "E": "Complement fixation"
    },
    "correct_letter": "A",
    "why_correct": "Class-switch recombination changes the immunoglobulin heavy-chain constant region, allowing a B cell to produce a different antibody class while retaining antigen specificity. Somatic hypermutation instead introduces mutations into variable-region genes and contributes to affinity maturation.",
    "distractor_analysis": {
      "B": "This removes self-reactive T cells in the thymus and does not affect B-cell antibody class.",
      "C": "Hypermutation alters the variable region to improve affinity; it does not change the antibody class.",
      "D": "This is an innate effector response with no role in antibody production.",
      "E": "Complement fixation is an antibody effector function, not a mechanism for changing class."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q143",
    "subdomain": "Genetics",
    "topic": "Mitochondrial inheritance",
    "difficulty": "Moderate",
    "stem": "A woman carries a pathogenic mitochondrial DNA variant associated with a mitochondrial disorder. She has children with a man who does not carry the variant. The clinical severity varies among affected members of her family. Which phenomenon best explains variation in disease severity between individuals carrying the mitochondrial variant?",
    "options": {
      "A": "Genomic imprinting of the paternal mitochondrial genome",
      "B": "Independent assortment of homologous nuclear chromosomes alone",
      "C": "Heteroplasmy, with varying proportions of mutant mitochondrial DNA",
      "D": "X-linked recessive inheritance",
      "E": "Anticipation caused by expansion of nuclear DNA repeats"
    },
    "correct_letter": "C",
    "why_correct": "Heteroplasmy refers to the coexistence of different mitochondrial DNA populations within a cell or individual. The proportion and distribution of mutant mitochondrial DNA can influence whether a tissue reaches the threshold at which dysfunction becomes apparent. Mitochondrial DNA is generally maternally inherited.",
    "distractor_analysis": {
      "A": "Mitochondria are inherited from the mother, and imprinting affects nuclear genes.",
      "B": "Independent assortment concerns nuclear chromosomes, not mitochondrial genomes.",
      "D": "Mitochondrial DNA is not on the X chromosome, and affected mothers pass it to children of both sexes.",
      "E": "Anticipation applies to nuclear trinucleotide repeat disorders, not mitochondrial DNA variants."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q144",
    "subdomain": "Clinical physiology",
    "topic": "Autonomic physiology",
    "difficulty": "Moderate",
    "stem": "A healthy volunteer stands rapidly from a supine position. Venous return and stroke volume initially decrease, causing a transient fall in arterial blood pressure. Which response is expected from the arterial baroreceptor reflex?",
    "options": {
      "A": "Suppression of cardiac sympathetic activity",
      "B": "Reduced peripheral vascular resistance",
      "C": "Increased baroreceptor firing with reduced sympathetic output",
      "D": "Reduced baroreceptor firing with increased sympathetic output",
      "E": "Increased vagal output to the ventricles with reduced heart rate"
    },
    "correct_letter": "D",
    "why_correct": "Reduced arterial stretch decreases firing from carotid sinus and aortic arch baroreceptors. The reflex increases sympathetic activity and reduces parasympathetic activity, promoting tachycardia, increased contractility and peripheral vasoconstriction to help restore blood pressure.",
    "distractor_analysis": {
      "A": "Cardiac sympathetic activity increases to raise heart rate and contractility.",
      "B": "The reflex causes vasoconstriction, increasing resistance to restore pressure.",
      "C": "This is the response to a rise in blood pressure, not a fall.",
      "E": "Vagal output falls when blood pressure drops, allowing the heart rate to rise."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q145",
    "subdomain": "Genetics",
    "topic": "Inheritance patterns",
    "difficulty": "Moderate",
    "stem": "A genetic disorder affects males and females. An affected father transmits the disorder to all his daughters but none of his sons. An affected mother can transmit the disorder to children of either sex. Which inheritance pattern best fits this pedigree?",
    "options": {
      "A": "Y-linked",
      "B": "Autosomal recessive",
      "C": "X-linked recessive",
      "D": "Autosomal dominant",
      "E": "X-linked dominant"
    },
    "correct_letter": "E",
    "why_correct": "A father transmits his X chromosome to every daughter and his Y chromosome to every son. In an X-linked dominant condition, an affected father therefore transmits the variant to all daughters and no sons. An affected heterozygous mother may transmit the variant to children of either sex.",
    "distractor_analysis": {
      "A": "Y-linked conditions pass only from father to son and never affect females.",
      "B": "Recessive conditions need two affected alleles, and a father would not affect all his daughters.",
      "C": "Daughters of an affected father are usually carriers, not affected, in X-linked recessive disease.",
      "D": "An autosomal dominant condition passes from father to son as often as to daughters."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q146",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Randomised controlled trials",
    "difficulty": "Moderate",
    "stem": "A randomised controlled trial allocates participants to treatment or control using a concealed randomisation process. What is the principal methodological advantage of randomisation?",
    "options": {
      "A": "It balances known and unknown confounders between groups on average",
      "B": "It guarantees that the results apply to every patient population",
      "C": "It guarantees that every participant receives the allocated intervention",
      "D": "It eliminates all loss to follow-up",
      "E": "It removes the need for blinding or appropriate outcome measurement"
    },
    "correct_letter": "A",
    "why_correct": "Randomisation reduces the risk that treatment allocation is systematically associated with prognostic factors, including unmeasured factors. It does not guarantee perfect balance in a particular trial, prevent attrition, eliminate measurement bias or ensure generalisability.",
    "distractor_analysis": {
      "B": "Generalisability depends on who was recruited, not on randomisation.",
      "C": "Randomisation does not ensure adherence; crossover and non-adherence still happen.",
      "D": "Attrition can occur in any trial regardless of how participants were allocated.",
      "E": "Blinding protects against performance and detection bias, which randomisation does not address."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q147",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Type I and type II errors",
    "difficulty": "Moderate",
    "stem": "A clinical trial fails to demonstrate a statistically significant difference between a new treatment and placebo. The treatment actually has a genuine effect in the population, but the trial fails to detect it. What type of error has occurred?",
    "options": {
      "A": "Type I error",
      "B": "Type II error",
      "C": "Publication bias",
      "D": "Selection bias",
      "E": "Confounding"
    },
    "correct_letter": "B",
    "why_correct": "A type II error occurs when a study fails to reject the null hypothesis despite a genuine effect. The probability of a type II error is denoted by β; statistical power is 1 − β. A non-significant result does not, by itself, establish that the treatments are equivalent.",
    "distractor_analysis": {
      "A": "A type I error is a false positive: finding a difference that does not truly exist.",
      "C": "Publication bias affects which studies are published, not the result of a single trial.",
      "D": "Selection bias is a systematic error in who enters the study, not a statistical decision error.",
      "E": "Confounding distorts an association through a third factor; it is not the failure to detect a real effect."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q148",
    "subdomain": "Clinical physiology",
    "topic": "Membrane transport",
    "difficulty": "Moderate",
    "stem": "A laboratory experiment measures glucose uptake into intestinal epithelial cells. Uptake across the apical membrane occurs against the glucose concentration gradient and depends on the sodium concentration gradient maintained by the basolateral sodium–potassium ATPase. Which transport mechanism accounts for apical glucose uptake?",
    "options": {
      "A": "Facilitated diffusion independent of ion gradients",
      "B": "Secondary active transport coupled to sodium",
      "C": "Primary active transport powered by ATP at the glucose transporter",
      "D": "Simple diffusion",
      "E": "Osmosis through aquaporins"
    },
    "correct_letter": "B",
    "why_correct": "The sodium–glucose cotransporter (SGLT1) uses the energy stored in the sodium electrochemical gradient to move glucose against its gradient. The basolateral sodium–potassium ATPase maintains that sodium gradient using ATP. The cotransporter itself does not directly hydrolyse ATP.",
    "distractor_analysis": {
      "A": "Facilitated diffusion (e.g. GLUT2) moves glucose only down its gradient.",
      "C": "The transporter does not use ATP itself; the ATPase that does is on the basolateral membrane.",
      "D": "Simple diffusion cannot move a substance against its concentration gradient.",
      "E": "Aquaporins move water, not glucose."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q149",
    "subdomain": "Clinical physiology",
    "topic": "Respiratory compensation",
    "difficulty": "Moderate",
    "stem": "A patient with diabetic ketoacidosis has the following arterial blood gas results: pH 7.18; PCO2 2.5 kPa; bicarbonate 10 mmol/L. Which process best explains the low carbon dioxide concentration?",
    "options": {
      "A": "Reduced alveolar ventilation",
      "B": "Reduced renal bicarbonate excretion",
      "C": "Primary respiratory acidosis",
      "D": "Respiratory compensation through increased alveolar ventilation",
      "E": "Increased carbon dioxide production without a change in ventilation"
    },
    "correct_letter": "D",
    "why_correct": "The low pH and reduced bicarbonate indicate primary metabolic acidosis. Increased alveolar ventilation (Kussmaul breathing) lowers arterial carbon dioxide and partially compensates for the fall in bicarbonate. This is a compensatory response, not a separate primary respiratory disorder.",
    "distractor_analysis": {
      "A": "Hypoventilation raises PCO2, not lowers it.",
      "B": "This is a renal response affecting bicarbonate and does not lower PCO2.",
      "C": "Respiratory acidosis has a high PCO2; here the PCO2 is low.",
      "E": "More CO2 production without extra ventilation would raise PCO2."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q150",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Bilirubin metabolism",
    "difficulty": "Moderate",
    "stem": "A 24-year-old man develops mild jaundice during a febrile illness after several days of reduced food intake. His unconjugated bilirubin is raised, but liver enzymes, haemoglobin and reticulocyte count are normal. The jaundice resolves as he recovers. Which mechanism best explains this pattern?",
    "options": {
      "A": "Impaired conjugation of bilirubin",
      "B": "Massive intravascular haemolysis",
      "C": "Complete obstruction of the common bile duct",
      "D": "Autoimmune destruction of hepatocytes",
      "E": "Failure of bile acid synthesis"
    },
    "correct_letter": "A",
    "why_correct": "Mild isolated unconjugated hyperbilirubinaemia precipitated by illness or fasting, with otherwise reassuring tests and no evidence of haemolysis, is characteristic of Gilbert syndrome. Reduced activity of the bilirubin-conjugating enzyme UGT1A1 causes the unconjugated bilirubin rise.",
    "distractor_analysis": {
      "B": "Haemoglobin and reticulocytes are normal, which argues against haemolysis.",
      "C": "Obstruction causes conjugated hyperbilirubinaemia with a cholestatic enzyme pattern.",
      "D": "Autoimmune hepatitis raises transaminases, which are normal here.",
      "E": "Bile acid synthesis defects cause cholestasis and malabsorption, not isolated unconjugated jaundice."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q151",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Enzyme kinetics",
    "difficulty": "Moderate",
    "stem": "An enzyme-catalysed reaction is studied at different substrate concentrations. In the presence of a reversible competitive inhibitor, the maximum reaction velocity can still be achieved by increasing the substrate concentration sufficiently. Which change is expected?",
    "options": {
      "A": "Increased apparent Km with unchanged Vmax",
      "B": "Complete irreversible loss of enzyme activity",
      "C": "Reduced Km with reduced Vmax",
      "D": "Increased Vmax with unchanged Km",
      "E": "Reduced Vmax with unchanged Km"
    },
    "correct_letter": "A",
    "why_correct": "A competitive inhibitor competes with substrate for enzyme binding. More substrate is required to reach half of Vmax, so the apparent Km increases. At sufficiently high substrate concentration, the same Vmax can be achieved.",
    "distractor_analysis": {
      "B": "The stem says the inhibitor is reversible and can be overcome by more substrate.",
      "C": "This is the pattern of an uncompetitive inhibitor.",
      "D": "An inhibitor cannot increase the maximum velocity.",
      "E": "This is the pattern of a non-competitive inhibitor."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q152",
    "subdomain": "Immunology",
    "topic": "Type I hypersensitivity",
    "difficulty": "Moderate",
    "stem": "A patient develops urticaria, wheeze and hypotension within minutes of exposure to a known allergen. Previous exposure has sensitised the patient to that allergen. Which mechanism is primarily responsible for this immediate reaction?",
    "options": {
      "A": "Direct activation of cytotoxic T lymphocytes against infected cells",
      "B": "T-cell-mediated delayed tissue injury",
      "C": "IgG-mediated activation of complement against cell-surface antigens",
      "D": "Allergen-mediated cross-linking of IgE bound to mast cells",
      "E": "Immune-complex deposition in small blood vessels"
    },
    "correct_letter": "D",
    "why_correct": "In type I hypersensitivity, allergen cross-linking of IgE bound to FcεRI receptors on sensitised mast cells triggers mediator release. Histamine and other mediators contribute to urticaria, bronchoconstriction and vascular leakage. The clinical presentation is consistent with anaphylaxis, which requires immediate emergency treatment.",
    "distractor_analysis": {
      "A": "This is an antiviral cellular response, not an allergic reaction.",
      "B": "Type IV reactions take 48–72 hours, not minutes.",
      "C": "This is type II hypersensitivity, as in haemolytic transfusion reactions, not immediate anaphylaxis.",
      "E": "This is type III hypersensitivity, which develops over days, as in serum sickness."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q153",
    "subdomain": "Genetics",
    "topic": "Oncogenes and tumour suppressor genes",
    "difficulty": "Moderate",
    "stem": "A tumour is found to contain a mutation that constitutively activates a growth-signalling protein. The mutation increases signalling even when the normal extracellular growth stimulus is absent. Which description best fits this genetic change?",
    "options": {
      "A": "Inactivation of a tumour suppressor gene through loss of function",
      "B": "Increased expression of a normal cell-cycle inhibitor",
      "C": "Activation of a proto-oncogene to form an oncogene",
      "D": "Silencing of every gene on one chromosome",
      "E": "Loss of a DNA mismatch-repair gene as the only possible mechanism"
    },
    "correct_letter": "C",
    "why_correct": "Proto-oncogenes encode proteins involved in normal growth and survival signalling, such as RAS. Activating mutations can make these proteins constitutively active, promoting uncontrolled cell proliferation. Tumour suppressor genes generally restrain growth or maintain genomic integrity and contribute to cancer when their function is lost.",
    "distractor_analysis": {
      "A": "Tumour suppressor loss removes a brake; it does not activate a signalling protein.",
      "B": "More cell-cycle inhibitor would slow, not drive, proliferation.",
      "D": "This does not describe a gain-of-function change in a single growth pathway.",
      "E": "Mismatch-repair loss increases mutation rate generally and is not itself a gain of signalling."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q154",
    "subdomain": "Clinical physiology",
    "topic": "Renal clearance",
    "difficulty": "Moderate",
    "stem": "A substance is freely filtered at the glomerulus and is neither secreted nor reabsorbed by the renal tubules. Its plasma concentration is stable. Which relationship describes its renal clearance?",
    "options": {
      "A": "It equals renal plasma flow",
      "B": "It is independent of the glomerular filtration rate",
      "C": "It equals the glomerular filtration rate",
      "D": "It is necessarily greater than renal plasma flow",
      "E": "It is zero"
    },
    "correct_letter": "C",
    "why_correct": "For a substance that is freely filtered and neither reabsorbed nor secreted (such as inulin), the amount excreted per unit time equals the filtered load. Its clearance therefore equals the glomerular filtration rate, under the stated assumptions.",
    "distractor_analysis": {
      "A": "Clearance approaches renal plasma flow only for substances that are filtered and also secreted, such as PAH.",
      "B": "For a filtered-only substance, clearance equals GFR and changes with it.",
      "D": "Clearance cannot exceed renal plasma flow, and a filtered-only substance is cleared at GFR.",
      "E": "Zero clearance applies to a substance that is filtered and then fully reabsorbed, such as glucose normally."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q155",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Partial agonism",
    "difficulty": "Moderate",
    "stem": "A drug binds to the same receptor as a full agonist but produces a smaller maximal response, even when it occupies all available receptors. When given alongside the full agonist, it reduces the overall response. Which description best fits this drug?",
    "options": {
      "A": "Physiological antagonist acting at a different receptor",
      "B": "Inverse agonist",
      "C": "Partial agonist",
      "D": "Enzyme inducer",
      "E": "Irreversible antagonist"
    },
    "correct_letter": "C",
    "why_correct": "A partial agonist activates a receptor but has lower intrinsic efficacy than a full agonist. In the presence of a full agonist, it can compete for receptor occupancy and reduce the overall response.",
    "distractor_analysis": {
      "A": "The drug acts at the same receptor as the agonist, not at a different one.",
      "B": "An inverse agonist reduces receptor activity below baseline rather than producing a smaller positive effect.",
      "D": "Enzyme induction changes drug metabolism and does not involve binding to the agonist's receptor.",
      "E": "An antagonist produces no response on its own, whereas this drug produces a partial one."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q156",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Zero-order elimination",
    "difficulty": "Moderate",
    "stem": "A patient taking phenytoin has a small dose increase, after which the plasma concentration rises disproportionately and he develops ataxia. The enzymes that metabolise the drug are saturated at therapeutic concentrations. Which statement best describes elimination in this situation?",
    "options": {
      "A": "The drug cannot accumulate with repeated dosing",
      "B": "Elimination rate increases proportionally with concentration",
      "C": "The elimination half-life is necessarily constant at all concentrations",
      "D": "A constant proportion of the drug is eliminated per unit time",
      "E": "A constant amount of drug is eliminated per unit time"
    },
    "correct_letter": "E",
    "why_correct": "In zero-order elimination, the elimination rate is approximately constant because the relevant pathways are saturated. Unlike first-order elimination, the proportion eliminated per unit time is not constant, and the half-life can vary with concentration. This is why small dose increases of phenytoin can cause large rises in plasma concentration.",
    "distractor_analysis": {
      "A": "Saturable elimination makes accumulation and toxicity more likely, as here.",
      "B": "This is first-order behaviour; once saturated, elimination rate no longer rises with concentration.",
      "C": "In zero-order kinetics the apparent half-life lengthens as the concentration rises.",
      "D": "This describes first-order kinetics, which applies when elimination pathways are not saturated."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q157",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Loading dose",
    "difficulty": "Moderate",
    "stem": "A medicine has a long elimination half-life. A clinician wants to achieve a therapeutic plasma concentration rapidly rather than waiting for repeated maintenance doses to accumulate. Which pharmacokinetic principle primarily determines the loading dose?",
    "options": {
      "A": "Renal clearance alone",
      "B": "Volume of distribution and target plasma concentration",
      "C": "Elimination half-life alone",
      "D": "Drug clearance alone",
      "E": "The percentage of the drug excreted unchanged, regardless of other factors"
    },
    "correct_letter": "B",
    "why_correct": "The loading dose is determined primarily by the apparent volume of distribution and the desired plasma concentration (loading dose = Vd × target concentration), with adjustment for bioavailability when the drug is not given intravenously. Clearance is a key determinant of maintenance dosing, while half-life influences how quickly steady state is approached.",
    "distractor_analysis": {
      "A": "Renal clearance is part of total clearance and so guides maintenance, not loading, dosing.",
      "C": "Half-life determines how long steady state takes to reach, not the size of the loading dose.",
      "D": "Clearance determines the maintenance dose, not the loading dose.",
      "E": "This guides dose adjustment in renal impairment, not the loading dose."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q158",
    "subdomain": "Immunology",
    "topic": "Antigen presentation",
    "difficulty": "Moderate",
    "stem": "A virus infects a nucleated human cell. Viral peptides are processed intracellularly and displayed on the cell surface for recognition by cytotoxic T lymphocytes. Which molecule principally presents these peptides?",
    "options": {
      "A": "The B-cell receptor",
      "B": "MHC class I",
      "C": "Complement component C3",
      "D": "Secretory IgA",
      "E": "MHC class II"
    },
    "correct_letter": "B",
    "why_correct": "MHC class I molecules present intracellularly derived peptides to CD8-positive cytotoxic T lymphocytes. MHC class II molecules mainly present peptides derived from extracellular material processed by professional antigen-presenting cells to CD4-positive T lymphocytes.",
    "distractor_analysis": {
      "A": "The B-cell receptor binds intact antigen and is found only on B cells, not on infected cells.",
      "C": "C3 opsonises pathogens and is not an antigen-presenting molecule.",
      "D": "Secretory IgA protects mucosal surfaces and does not present peptides to T cells.",
      "E": "MHC class II presents extracellular antigens to CD4 helper T cells, mainly on antigen-presenting cells."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q159",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Relative risk in a cohort study",
    "difficulty": "Moderate",
    "stem": "In a cohort study, 40 of 1,000 people exposed to a suspected risk factor develop a disease. In the unexposed group, 20 of 1,000 people develop the disease. What is the relative risk associated with exposure?",
    "options": {
      "A": "0.5",
      "B": "1",
      "C": "2",
      "D": "20",
      "E": "40"
    },
    "correct_letter": "C",
    "why_correct": "Risk in the exposed group = 40/1,000 = 0.04; risk in the unexposed group = 20/1,000 = 0.02; relative risk = 0.04/0.02 = 2. The observed risk is twice as high in the exposed group. This association alone does not establish causation or exclude confounding.",
    "distractor_analysis": {
      "A": "This is unexposed risk divided by exposed risk, the ratio the wrong way round.",
      "B": "A relative risk of 1 would mean equal risk in both groups, which is not the case.",
      "D": "This is the difference in case numbers (40 − 20), not a ratio of risks.",
      "E": "This is the number of cases in the exposed group, not a measure of relative risk."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q160",
    "subdomain": "Emergency & critical care",
    "topic": "Carbon monoxide poisoning",
    "difficulty": "Moderate",
    "stem": "A 34-year-old man is brought to the emergency department with headache, nausea and confusion after using a petrol-powered generator in an enclosed garage. His conventional pulse oximeter reads 99%. Which statement best explains why this reading does not exclude significant carbon monoxide poisoning?",
    "options": {
      "A": "Carbon monoxide causes falsely low arterial oxygen tension",
      "B": "Carbon monoxide increases dissolved oxygen in plasma",
      "C": "Carbon monoxide causes a right shift of the oxygen–haemoglobin dissociation curve",
      "D": "Conventional pulse oximetry measures only deoxygenated haemoglobin",
      "E": "Pulse oximetry cannot distinguish carboxyhaemoglobin from oxyhaemoglobin"
    },
    "correct_letter": "E",
    "why_correct": "Standard pulse oximeters can give reassuringly high readings in carbon monoxide poisoning because their light-absorption method does not reliably separate carboxyhaemoglobin from oxyhaemoglobin. Diagnosis requires appropriate assessment, including co-oximetry. A normal arterial oxygen tension also does not exclude carbon monoxide poisoning.",
    "distractor_analysis": {
      "A": "PaO2 is usually normal in carbon monoxide poisoning, which is why it is also falsely reassuring.",
      "B": "Carbon monoxide does not increase dissolved oxygen; it reduces oxygen-carrying capacity.",
      "C": "Carbon monoxide shifts the curve to the left, and this would not explain the oximeter reading.",
      "D": "Pulse oximeters compare oxygenated and deoxygenated haemoglobin rather than measuring only one."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q161",
    "subdomain": "Clinical physiology",
    "topic": "Receptor signalling",
    "difficulty": "Moderate",
    "stem": "A drug binds to a cell-surface receptor and activates a G protein, resulting in increased intracellular cyclic AMP. Which enzyme directly synthesises cyclic AMP from ATP?",
    "options": {
      "A": "Adenylyl cyclase",
      "B": "Protein kinase A",
      "C": "Phosphodiesterase",
      "D": "Phospholipase C",
      "E": "Guanylyl cyclase"
    },
    "correct_letter": "A",
    "why_correct": "Activated G proteins (Gs) stimulate adenylyl cyclase, which converts ATP into cyclic AMP. Cyclic AMP acts as a second messenger, including by activating protein kinase A. Phosphodiesterases degrade cyclic AMP; guanylyl cyclase produces cyclic GMP.",
    "distractor_analysis": {
      "B": "Protein kinase A is activated by cyclic AMP; it is downstream, not the producer.",
      "C": "Phosphodiesterase breaks down cyclic AMP rather than making it.",
      "D": "Phospholipase C generates IP3 and DAG through Gq signalling, not cyclic AMP.",
      "E": "Guanylyl cyclase makes cyclic GMP from GTP."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q162",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Enzyme induction",
    "difficulty": "Moderate",
    "stem": "A patient taking a medicine metabolised by a hepatic cytochrome P450 enzyme starts a second medicine that induces that enzyme. The original medicine is pharmacologically active and has no clinically important active metabolites. What is the expected effect at steady state, assuming no other relevant changes?",
    "options": {
      "A": "Increased concentration of the original medicine",
      "B": "Reduced clearance of the original medicine",
      "C": "Complete inhibition of renal excretion",
      "D": "Reduced concentration of the original medicine",
      "E": "No change in concentration because induction affects absorption only"
    },
    "correct_letter": "D",
    "why_correct": "Enzyme induction can increase metabolic clearance and lower the steady-state concentration of an active parent drug. The clinical effect depends on the medicine and its metabolites; induction can have different consequences for prodrugs and drugs with active metabolites.",
    "distractor_analysis": {
      "A": "This is the effect of an enzyme inhibitor, not an inducer.",
      "B": "Induction increases clearance; reduced clearance follows enzyme inhibition.",
      "C": "Hepatic enzyme induction does not block renal excretion.",
      "E": "Cytochrome P450 induction mainly increases hepatic metabolism, not absorption."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q163",
    "subdomain": "Statistics, epidemiology and evidence-based medicine",
    "topic": "Choosing a study design",
    "difficulty": "Moderate",
    "stem": "Researchers want to investigate whether a rare adverse effect is associated with a medicine. The adverse effect may occur years after exposure, and the medicine is already widely prescribed. Which study design is generally the most efficient starting point?",
    "options": {
      "A": "Cross-sectional study",
      "B": "Ecological study",
      "C": "Randomised controlled trial",
      "D": "Case-control study",
      "E": "Case series without a comparison group"
    },
    "correct_letter": "D",
    "why_correct": "A case-control study starts by identifying people with the outcome and suitable controls without it, then compares prior exposure. It is often efficient for rare outcomes and can investigate exposures that occurred years earlier. It is vulnerable to selection and recall bias and does not directly estimate incidence from the sampled groups.",
    "distractor_analysis": {
      "A": "A cross-sectional study measures exposure and outcome at one time point, so it handles long delays and rare outcomes poorly.",
      "B": "Ecological studies use group-level data and cannot link exposure to outcome in individuals.",
      "C": "An RCT would need very large numbers and long follow-up for a rare, late outcome, and may be unethical.",
      "E": "Without controls, a case series cannot show an association with the medicine."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q164",
    "subdomain": "Clinical physiology",
    "topic": "Resting membrane potential",
    "difficulty": "Moderate",
    "stem": "The resting membrane potential of a typical neurone is determined predominantly by which factor?",
    "options": {
      "A": "High resting permeability to potassium relative to sodium",
      "B": "Equal permeability of the membrane to all ions",
      "C": "Continuous opening of voltage-gated sodium channels",
      "D": "Active transport of chloride out of the cell as the sole mechanism",
      "E": "Complete absence of intracellular negatively charged proteins"
    },
    "correct_letter": "A",
    "why_correct": "At rest, neuronal membranes are much more permeable to potassium than to sodium, largely because of potassium leak channels. Potassium movement down its electrochemical gradient contributes substantially to the resting membrane potential, which therefore lies close to the potassium equilibrium potential. The sodium–potassium ATPase maintains the ion gradients that make this possible.",
    "distractor_analysis": {
      "B": "Equal permeability would collapse the potential towards zero; the membrane is selectively permeable.",
      "C": "Open sodium channels would depolarise the cell, as in an action potential.",
      "D": "Chloride transport is not the main determinant of the neuronal resting potential.",
      "E": "Intracellular anionic proteins are present and contribute to the negative interior."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q165",
    "subdomain": "Dermatology",
    "topic": "Psoriasis",
    "difficulty": "Moderate",
    "stem": "A 29-year-old man presents with sharply demarcated erythematous plaques covered by silvery scale on his elbows and knees. Examination also reveals several nail pits. Which diagnosis best explains these findings?",
    "options": {
      "A": "Plaque psoriasis",
      "B": "Lichen planus",
      "C": "Atopic eczema",
      "D": "Tinea corporis",
      "E": "Pityriasis rosea"
    },
    "correct_letter": "A",
    "why_correct": "Plaque psoriasis typically causes well-demarcated erythematous plaques with silvery scale, commonly on extensor surfaces. Nail pitting is a recognised associated feature. Atopic eczema more often produces poorly demarcated, itchy eczematous lesions, while tinea corporis commonly has an annular lesion with an active scaly edge.",
    "distractor_analysis": {
      "B": "Lichen planus causes purple, flat-topped papules, often on the wrists, without silvery scale.",
      "C": "Eczema favours flexures and has ill-defined borders, not well-demarcated extensor plaques.",
      "D": "Tinea gives annular lesions with an active scaly edge and does not cause nail pitting.",
      "E": "Pityriasis rosea starts with a herald patch and causes a self-limiting truncal rash."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q166",
    "subdomain": "Dermatology",
    "topic": "Melanoma",
    "difficulty": "Moderate",
    "stem": "A 58-year-old woman is concerned about a pigmented lesion on her upper back. Which feature in the history most strongly supports concern for melanoma?",
    "options": {
      "A": "The lesion has been unchanged since childhood",
      "B": "The lesion has changed in size, shape or colour",
      "C": "The lesion is uniformly coloured and symmetrical",
      "D": "The lesion is on the trunk rather than the face",
      "E": "The lesion is less than 6 mm across"
    },
    "correct_letter": "B",
    "why_correct": "Change in size, shape or colour is a major feature on the weighted seven-point checklist used in UK practice and is the most important warning sign in a pigmented lesion. Asymmetry, irregular borders and colour variation also raise concern. A lesion should not be considered safe solely because it is small or located in a particular body region.",
    "distractor_analysis": {
      "A": "Long-term stability is reassuring rather than concerning.",
      "C": "Uniform colour and symmetry are features of a benign naevus.",
      "D": "Site alone does not raise or lower concern; the trunk is a common site in either case.",
      "E": "Small size does not exclude melanoma, and it is not a feature that raises concern."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q167",
    "subdomain": "Dermatology",
    "topic": "Atopic eczema",
    "difficulty": "Moderate",
    "stem": "A 7-year-old child has recurrent itchy, dry, inflamed skin affecting the flexures of the elbows and knees. The symptoms worsen during winter. Which diagnosis is most likely?",
    "options": {
      "A": "Bullous pemphigoid",
      "B": "Herpes zoster",
      "C": "Atopic eczema",
      "D": "Scabies",
      "E": "Plaque psoriasis"
    },
    "correct_letter": "C",
    "why_correct": "Atopic eczema commonly causes recurrent itch and dry, inflamed skin. In children, flexural involvement is characteristic. The distribution and chronic relapsing course support eczema, although the diagnosis should be reconsidered if the morphology or clinical course is atypical.",
    "distractor_analysis": {
      "A": "Bullous pemphigoid causes tense blisters in older adults.",
      "B": "Shingles is acute, painful and dermatomal, not a recurrent flexural rash.",
      "D": "Scabies causes intense itch with burrows in the finger webs and wrists, and close contacts are often affected.",
      "E": "Psoriasis typically affects extensor surfaces with well-defined silvery plaques."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q168",
    "subdomain": "Dermatology",
    "topic": "Bullous pemphigoid",
    "difficulty": "Moderate",
    "stem": "An 82-year-old patient develops intensely itchy, tense blisters on the trunk and limbs. The oral mucosa is unaffected. Which diagnosis is most likely?",
    "options": {
      "A": "Stevens–Johnson syndrome",
      "B": "Dermatitis herpetiformis",
      "C": "Impetigo",
      "D": "Pemphigus vulgaris",
      "E": "Bullous pemphigoid"
    },
    "correct_letter": "E",
    "why_correct": "Bullous pemphigoid usually affects older adults and produces pruritic, tense blisters due to separation at the dermal–epidermal junction. Mucosal involvement is less common than in pemphigus vulgaris. Confirmation may require skin biopsy and immunofluorescence.",
    "distractor_analysis": {
      "A": "SJS is an acute drug reaction with prominent mucosal involvement and systemic illness.",
      "B": "DH causes small grouped vesicles on the extensor surfaces and is linked to coeliac disease.",
      "C": "Impetigo is a bacterial infection with honey-crusted lesions, usually in children.",
      "D": "Pemphigus causes flaccid, easily ruptured blisters with frequent oral involvement."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q169",
    "subdomain": "Dermatology",
    "topic": "Pemphigus vulgaris",
    "difficulty": "Moderate",
    "stem": "A 46-year-old patient presents with painful oral erosions and fragile blisters that rupture easily, leaving raw areas of skin. Which mechanism best explains this disease?",
    "options": {
      "A": "Autoantibodies against the basement membrane zone",
      "B": "Infection of the epidermis by a dermatophyte",
      "C": "IgE-mediated mast-cell degranulation",
      "D": "Immune-complex deposition in dermal blood vessels",
      "E": "Autoantibodies against desmosomal proteins"
    },
    "correct_letter": "E",
    "why_correct": "Pemphigus vulgaris is an autoimmune blistering disorder associated with antibodies against desmosomal proteins, particularly desmogleins. Loss of adhesion between keratinocytes causes intraepidermal blistering. Painful mucosal erosions are common. In contrast, bullous pemphigoid involves antibodies against components of the basement membrane zone.",
    "distractor_analysis": {
      "A": "This is bullous pemphigoid, which gives tense blisters and less mucosal disease.",
      "B": "Dermatophytes cause scaly tinea, not painful mucosal erosions.",
      "C": "This mechanism causes urticaria and anaphylaxis, not blistering with erosions.",
      "D": "This causes vasculitis such as palpable purpura, not intraepidermal blisters."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q170",
    "subdomain": "Dermatology",
    "topic": "Erythema nodosum",
    "difficulty": "Moderate",
    "stem": "A 25-year-old woman develops multiple tender, red nodules over the anterior aspects of both shins. The lesions gradually fade without ulceration or scarring. Which pathological process best characterises this condition?",
    "options": {
      "A": "Necrotising inflammation of the epidermis",
      "B": "Septal panniculitis without primary vasculitis",
      "C": "Superficial fungal invasion of the stratum corneum",
      "D": "Subepidermal blister formation",
      "E": "Granulomatous inflammation confined to hair follicles"
    },
    "correct_letter": "B",
    "why_correct": "Erythema nodosum is an inflammatory disorder of subcutaneous fat, classically presenting with tender nodules on the shins. Histologically, it is a septal panniculitis and does not typically cause ulceration or scarring. Potential associations include streptococcal infection, sarcoidosis, inflammatory bowel disease and certain medicines.",
    "distractor_analysis": {
      "A": "Epidermal necrosis would cause ulceration, which does not occur here.",
      "C": "Superficial fungal infection causes scaly patches, not tender subcutaneous nodules.",
      "D": "This is the pathology of bullous pemphigoid, not tender nodules.",
      "E": "Follicular inflammation produces papules and pustules, not deep shin nodules."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q171",
    "subdomain": "Dermatology",
    "topic": "Tinea corporis",
    "difficulty": "Moderate",
    "stem": "A 33-year-old man develops an enlarging, circular, itchy rash on his forearm. It has a raised, scaly outer edge and relative central clearing. Which diagnosis is most likely?",
    "options": {
      "A": "Cellulitis",
      "B": "Atopic eczema",
      "C": "Tinea corporis",
      "D": "Lichen planus",
      "E": "Plaque psoriasis"
    },
    "correct_letter": "C",
    "why_correct": "Tinea corporis is a dermatophyte infection of the body skin that often produces an annular lesion with an advancing scaly edge and central clearing. If the appearance is atypical or treatment fails, mycological testing can help establish the diagnosis.",
    "distractor_analysis": {
      "A": "Cellulitis gives diffuse, warm, tender erythema without a scaly advancing edge or central clearing.",
      "B": "Atopic eczema is flexural and poorly demarcated, not an expanding ring with central clearing.",
      "D": "Lichen planus gives purple, flat-topped polygonal papules, often on the wrists, with Wickham striae.",
      "E": "Psoriasis gives well-demarcated plaques with silvery scale over the whole surface, usually on extensor surfaces."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q172",
    "subdomain": "Dermatology",
    "topic": "Stevens–Johnson syndrome",
    "difficulty": "Moderate",
    "stem": "A patient develops fever, widespread skin pain, dusky erythematous lesions, blistering and extensive oral and ocular mucosal erosions several days after starting a new medicine. What is the most appropriate immediate response?",
    "options": {
      "A": "Arrange routine outpatient dermatology review",
      "B": "Suspect a severe cutaneous adverse reaction and arrange emergency hospital assessment",
      "C": "Reassure the patient that the rash is a common, self-limiting drug eruption",
      "D": "Start topical antifungal treatment and review in one week",
      "E": "Treat as uncomplicated urticaria with an oral antihistamine"
    },
    "correct_letter": "B",
    "why_correct": "Skin pain, blistering, systemic symptoms and mucosal erosions following a new medicine raise concern for Stevens–Johnson syndrome or toxic epidermal necrolysis. These are medical emergencies requiring immediate hospital assessment, withdrawal of the suspected causative medicine under urgent clinical supervision, and specialist supportive care.",
    "distractor_analysis": {
      "A": "Routine outpatient review delays emergency care for a potentially fatal reaction.",
      "C": "Skin pain, blistering and mucosal erosions are not features of a benign drug eruption.",
      "D": "Nothing suggests fungal infection, and delay risks progression to toxic epidermal necrolysis.",
      "E": "Urticaria gives transient wheals without skin pain, blistering or mucosal erosions."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q173",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Therapeutic index",
    "difficulty": "Moderate",
    "stem": "A patient taking a medicine with a narrow therapeutic index develops toxicity after a modest dose increase. Which property best explains why this medicine requires particular care when its dose is adjusted?",
    "options": {
      "A": "Its absorption is always incomplete",
      "B": "It cannot undergo hepatic metabolism",
      "C": "Its elimination is independent of renal function",
      "D": "It has no clinically significant drug interactions",
      "E": "Its therapeutic and toxic concentrations are relatively close"
    },
    "correct_letter": "E",
    "why_correct": "A narrow therapeutic index means the margin between effective and toxic exposure is small. Dose changes, organ dysfunction and interacting medicines may therefore cause clinically important changes in effect. Drug-level monitoring is useful for selected medicines when interpreted alongside the clinical context.",
    "distractor_analysis": {
      "A": "Incomplete absorption affects bioavailability, not the gap between effective and toxic levels.",
      "B": "Many narrow-index drugs are metabolised by the liver; that is not what defines the risk.",
      "C": "Elimination of many narrow-index drugs, such as lithium and digoxin, depends heavily on renal function.",
      "D": "Narrow-index drugs are often prone to important interactions, which adds to the risk."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q174",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Methotrexate prescribing safety",
    "difficulty": "Moderate",
    "stem": "A patient with rheumatoid arthritis is prescribed methotrexate for the first time. The intended regimen is once weekly, but the patient misunderstands the instructions and takes it every day for five days. What is the most important concern?",
    "options": {
      "A": "Isolated reversible postural hypotension",
      "B": "Reduced anticoagulant effect of all concurrent medicines",
      "C": "Acute severe hypoglycaemia",
      "D": "Immediate serotonin syndrome",
      "E": "Potentially life-threatening methotrexate toxicity"
    },
    "correct_letter": "E",
    "why_correct": "Low-dose methotrexate used for inflammatory disease is generally prescribed weekly, not daily. Accidental daily dosing can cause severe toxicity, including bone-marrow suppression and mucosal injury. Suspected overdose requires urgent specialist assessment and management.",
    "distractor_analysis": {
      "A": "Postural hypotension is not a recognised effect of methotrexate overdose.",
      "B": "Methotrexate does not reduce anticoagulant effect; this is not the concern.",
      "C": "Methotrexate does not cause acute hypoglycaemia.",
      "D": "Methotrexate is not serotonergic and does not cause serotonin syndrome."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q175",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Aminoglycoside toxicity",
    "difficulty": "Moderate",
    "stem": "A hospitalised patient receiving gentamicin develops worsening renal function and new tinnitus. Which adverse-effect profile best explains these findings?",
    "options": {
      "A": "Severe hypoglycaemia and lactic acidosis",
      "B": "Bone-marrow suppression and haemorrhagic cystitis",
      "C": "Nephrotoxicity and ototoxicity",
      "D": "Hepatotoxicity and pancreatitis",
      "E": "Pulmonary fibrosis and retinopathy"
    },
    "correct_letter": "C",
    "why_correct": "Aminoglycosides such as gentamicin can cause renal injury and damage to the auditory or vestibular system. Risk is influenced by exposure, patient factors and concurrent nephrotoxic or ototoxic medicines. Prescribing should follow the applicable monitoring protocol, including renal function and drug concentrations where indicated.",
    "distractor_analysis": {
      "A": "Hypoglycaemia and lactic acidosis are not aminoglycoside effects; lactic acidosis is linked with metformin.",
      "B": "Marrow suppression with haemorrhagic cystitis points to cyclophosphamide.",
      "D": "Hepatotoxicity and pancreatitis are not typical gentamicin effects.",
      "E": "Pulmonary fibrosis suggests drugs such as amiodarone, and retinopathy hydroxychloroquine, not gentamicin."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q176",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Valproate and reproductive safety",
    "difficulty": "Moderate",
    "stem": "A woman of childbearing potential is taking sodium valproate for epilepsy and asks whether she can stop contraception because she is not planning a pregnancy. Which response is most appropriate?",
    "options": {
      "A": "The pregnancy-prevention requirements apply only after pregnancy is confirmed",
      "B": "Valproate carries no important fetal risk when taken for epilepsy",
      "C": "She should abruptly stop valproate without medical advice",
      "D": "Contraception is unnecessary if the valproate dose is low",
      "E": "She needs specialist review and counselling about reproductive risks and the applicable pregnancy-prevention requirements"
    },
    "correct_letter": "E",
    "why_correct": "Valproate is associated with serious fetal risks. UK regulatory requirements include a Pregnancy Prevention Programme for women and girls of childbearing potential, subject to the applicable rules and specialist assessment. Treatment should not be stopped abruptly without clinical advice because uncontrolled seizures can also be dangerous. Current MHRA advice and patient-specific circumstances must guide prescribing.",
    "distractor_analysis": {
      "A": "Prevention must be in place before pregnancy, because most fetal harm occurs very early.",
      "B": "Valproate carries a high risk of congenital malformations and neurodevelopmental disorders.",
      "C": "Abrupt withdrawal risks uncontrolled seizures; any change needs specialist supervision.",
      "D": "Fetal risk is dose-related but no dose is safe, so the requirements still apply."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q177",
    "subdomain": "Emergency & critical care",
    "topic": "Paracetamol overdose",
    "difficulty": "Moderate",
    "stem": "A patient presents after taking a potentially toxic amount of paracetamol. The time of ingestion is uncertain. Which principle should guide the initial approach?",
    "options": {
      "A": "Discharge if the patient has no abdominal pain",
      "B": "A normal initial clinical examination excludes serious toxicity",
      "C": "Undertake urgent assessment and follow the relevant poisoning pathway, including decisions about acetylcysteine",
      "D": "Wait for jaundice before investigating",
      "E": "Give activated charcoal to every patient regardless of presentation time or circumstances"
    },
    "correct_letter": "C",
    "why_correct": "Early paracetamol poisoning may be asymptomatic despite the risk of subsequent liver injury. Management depends on the history, timing, blood results and the applicable toxicology pathway. When timing is uncertain, the standard timed nomogram may not be directly applicable; urgent specialist or poisons-service advice is important.",
    "distractor_analysis": {
      "A": "Early paracetamol poisoning is often symptom-free despite serious risk.",
      "B": "A normal early examination does not exclude later liver injury.",
      "D": "Waiting for jaundice means treatment comes too late.",
      "E": "Charcoal helps only within a limited time after ingestion, in selected patients."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q178",
    "subdomain": "Emergency & critical care",
    "topic": "Opioid toxicity",
    "difficulty": "Moderate",
    "stem": "A patient is found unresponsive with slow, shallow breathing and pinpoint pupils after suspected opioid use. What is the immediate pharmacological priority alongside airway and ventilatory support?",
    "options": {
      "A": "Vitamin K",
      "B": "Atropine",
      "C": "Protamine",
      "D": "Flumazenil",
      "E": "Naloxone"
    },
    "correct_letter": "E",
    "why_correct": "Naloxone is an opioid receptor antagonist that can reverse opioid-induced respiratory depression. Airway support and ventilation remain priorities; naloxone may need repeat administration because its duration of action can be shorter than that of the opioid involved. Monitor for recurrent respiratory depression and acute withdrawal.",
    "distractor_analysis": {
      "A": "Vitamin K reverses warfarin, not opioids.",
      "B": "Atropine treats bradycardia or organophosphate poisoning, not opioid respiratory depression.",
      "C": "Protamine reverses heparin.",
      "D": "Flumazenil reverses benzodiazepines, not opioids, and can precipitate seizures."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q179",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Long-term glucocorticoids",
    "difficulty": "Moderate",
    "stem": "A patient who has taken oral prednisolone for a prolonged period stops it abruptly. Several days later, the patient develops marked weakness, vomiting and hypotension. Which mechanism is most concerning?",
    "options": {
      "A": "Acute increase in endogenous cortisol production",
      "B": "Selective inhibition of aldosterone synthesis with preserved cortisol production as the only possible mechanism",
      "C": "Acute insulin resistance as the sole explanation",
      "D": "Suppression of the hypothalamic–pituitary–adrenal axis",
      "E": "Excess thyroid hormone release"
    },
    "correct_letter": "D",
    "why_correct": "Prolonged systemic glucocorticoid treatment can suppress endogenous cortisol production. Abrupt withdrawal may precipitate adrenal insufficiency, particularly during physiological stress. Suspected adrenal crisis is an emergency and requires prompt treatment; withdrawal plans must be individualised rather than applying one tapering schedule to everyone.",
    "distractor_analysis": {
      "A": "Endogenous cortisol is suppressed, not increased, after long-term steroids.",
      "B": "Aldosterone is largely preserved in secondary adrenal insufficiency; cortisol deficiency is the problem.",
      "C": "Insulin resistance would not explain vomiting and hypotension.",
      "E": "Stopping steroids does not cause thyroid hormone release."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q180",
    "subdomain": "Haematology & oncology",
    "topic": "Anticoagulation and bleeding",
    "difficulty": "Moderate",
    "stem": "A patient taking warfarin presents with major gastrointestinal bleeding and a markedly elevated INR. Which approach best reflects the immediate priority?",
    "options": {
      "A": "Treat with oral iron alone",
      "B": "Delay assessment until a repeat INR is available the following day",
      "C": "Continue warfarin unchanged until the cause of bleeding is confirmed",
      "D": "Give an additional warfarin dose to stabilise the INR",
      "E": "Manage the major bleed urgently and reverse anticoagulation according to the emergency protocol"
    },
    "correct_letter": "E",
    "why_correct": "Major bleeding in a patient taking warfarin requires urgent resuscitation, assessment of the bleeding source and appropriate reversal of anticoagulation. The reversal regimen depends on severity and the clinical setting; management should follow the current local emergency protocol and relevant guidance.",
    "distractor_analysis": {
      "A": "Iron does nothing for the acute bleed or the raised INR.",
      "B": "Delay in major bleeding is dangerous; reversal is needed now.",
      "C": "Warfarin must be withheld in major bleeding.",
      "D": "More warfarin would worsen the bleeding."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q181",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Anticholinergic adverse effects",
    "difficulty": "Moderate",
    "stem": "An older patient develops acute confusion, dry mouth, blurred vision, constipation and urinary retention after several medicines with anticholinergic effects are added to their prescription. Which mechanism best explains this cluster of symptoms?",
    "options": {
      "A": "Increased renal excretion of sodium",
      "B": "Selective dopamine D₂ receptor stimulation",
      "C": "Muscarinic receptor blockade",
      "D": "Excessive muscarinic receptor stimulation",
      "E": "Increased acetylcholine release at all synapses"
    },
    "correct_letter": "C",
    "why_correct": "Anticholinergic medicines block muscarinic acetylcholine receptors and can cause dry mouth, blurred vision, constipation, urinary retention and delirium. Older people may be particularly susceptible. A structured medication review should consider prescribed, over-the-counter and complementary medicines, as well as the potential benefits and harms of changing treatment.",
    "distractor_analysis": {
      "A": "Increased sodium excretion would not cause dry mouth, blurred vision or retention.",
      "B": "D2 stimulation causes nausea or psychosis, not this antimuscarinic picture.",
      "D": "Muscarinic stimulation causes the opposite: salivation, diarrhoea and frequent urination.",
      "E": "Excess acetylcholine release would give cholinergic, not anticholinergic, features."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q182",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Opioid-induced constipation",
    "difficulty": "Moderate",
    "stem": "A 68-year-old patient with advanced cancer starts regular oral morphine for pain. Within several days, they develop hard stools and difficulty opening their bowels. Which approach is most appropriate?",
    "options": {
      "A": "Restrict oral fluids regardless of the clinical context",
      "B": "Assess for complications and institute an appropriate laxative regimen",
      "C": "Prescribe an anti-diarrhoeal medicine",
      "D": "Reassure the patient that opioid-related constipation always resolves spontaneously",
      "E": "Stop all analgesia immediately"
    },
    "correct_letter": "B",
    "why_correct": "Opioids commonly reduce gastrointestinal motility, causing constipation. A laxative is often needed when regular opioids are started. Assess the severity and exclude faecal impaction or bowel obstruction when clinically indicated. The choice of laxative should reflect the patient’s circumstances and local guidance.",
    "distractor_analysis": {
      "A": "Restricting fluids makes constipation worse.",
      "C": "Anti-diarrhoeals such as loperamide, itself an opioid, would make it worse.",
      "D": "Tolerance to opioid constipation is limited, so it rarely settles untreated.",
      "E": "Stopping analgesia leaves pain uncontrolled; the side effect should be treated instead."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q183",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Delirium in palliative care",
    "difficulty": "Moderate",
    "stem": "A patient with advanced cancer becomes acutely confused and agitated over 24 hours. The family believes this is simply part of dying. Which is the best initial approach?",
    "options": {
      "A": "Assume the confusion is irreversible because the patient has advanced cancer",
      "B": "Assess for potentially reversible contributors and relieve distress",
      "C": "Use physical restraint as the first-line intervention",
      "D": "Withhold all fluids and medicines without assessment",
      "E": "Immediately increase opioid treatment regardless of pain"
    },
    "correct_letter": "B",
    "why_correct": "Delirium near the end of life may be associated with infection, medication effects, dehydration, metabolic disturbance, organ failure or the dying process itself. The clinician should consider the patient’s goals of care, investigate proportionately and treat reversible causes where appropriate while managing distress and supporting family members.",
    "distractor_analysis": {
      "A": "Delirium in advanced cancer is often partly reversible, for example infection, drugs or hypercalcaemia.",
      "C": "Restraint is not first line and can worsen agitation.",
      "D": "Fluids and medicines need assessment and discussion, not blanket withdrawal.",
      "E": "Opioid toxicity can itself cause delirium; increasing opioids without pain could worsen it."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q184",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Advance care planning",
    "difficulty": "Moderate",
    "stem": "A patient with advanced illness has decision-making capacity and wishes to discuss what treatments they would or would not want if their condition deteriorates. Which response is most appropriate?",
    "options": {
      "A": "Explain that these discussions are permitted only during the final days of life",
      "B": "Explore the patient’s values, preferences and understanding, and document the discussion appropriately",
      "C": "Explain that every preference expressed in a discussion is automatically legally binding",
      "D": "Ask the family to decide without involving the patient",
      "E": "Avoid the discussion because it may remove hope"
    },
    "correct_letter": "B",
    "why_correct": "Advance care planning can help patients communicate their values and preferences before a crisis. Discussions should be sensitive, individualised and documented. A conversation, an advance statement and a legally valid advance decision to refuse treatment are not interchangeable; their legal status differs. Applicable law must be considered for the relevant UK nation.",
    "distractor_analysis": {
      "A": "Advance care planning is best done early, while the patient has capacity.",
      "C": "Only a valid advance decision to refuse treatment is legally binding; stated preferences are not.",
      "D": "A patient with capacity makes their own decisions.",
      "E": "Avoiding the discussion denies the patient a say; it can be done sensitively."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q185",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Breakthrough cancer pain",
    "difficulty": "Moderate",
    "stem": "A patient with advanced cancer has otherwise well-controlled background pain but experiences brief episodes of severe pain when moving from bed to chair. What is the most appropriate interpretation?",
    "options": {
      "A": "The episodes prove that the cancer has progressed",
      "B": "The background analgesia must always be stopped",
      "C": "The patient necessarily has opioid addiction",
      "D": "The patient should be advised to tolerate the pain because it is brief",
      "E": "The patient may have incident breakthrough pain requiring an individualised pain-management review"
    },
    "correct_letter": "E",
    "why_correct": "Breakthrough pain is a transient exacerbation of pain occurring despite otherwise controlled background pain. Movement-related episodes may represent incident pain. Assessment should consider the trigger, severity, current analgesia, adverse effects and the patient’s preferences before selecting an appropriate strategy.",
    "distractor_analysis": {
      "A": "Incident pain can occur without disease progression.",
      "B": "Background analgesia is working and should continue.",
      "C": "Needing analgesia for movement-related pain is not addiction.",
      "D": "Breakthrough pain is treatable and should not be left uncontrolled."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q186",
    "subdomain": "Haematology & oncology",
    "topic": "Superior vena cava obstruction",
    "difficulty": "Moderate",
    "stem": "A 64-year-old man with a history of smoking develops progressive facial swelling, distended neck veins and breathlessness. The symptoms worsen when he lies flat. Which diagnosis should be considered?",
    "options": {
      "A": "Superior vena cava obstruction",
      "B": "Acute appendicitis",
      "C": "Isolated peripheral neuropathy",
      "D": "Nephrolithiasis",
      "E": "Acute otitis media"
    },
    "correct_letter": "A",
    "why_correct": "Obstruction of the superior vena cava impairs venous drainage from the head, neck and upper limbs, causing facial swelling and distended veins. Intrathoracic malignancy is an important cause. Assess urgency, particularly if there is stridor, significant airway compromise, cerebral symptoms or haemodynamic instability.",
    "distractor_analysis": {
      "B": "Appendicitis causes abdominal pain, not facial swelling and distended neck veins.",
      "C": "Peripheral neuropathy causes limb sensory or motor symptoms, not venous congestion.",
      "D": "Kidney stones cause loin-to-groin pain.",
      "E": "Otitis media causes ear pain and does not explain venous obstruction."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q187",
    "subdomain": "Haematology & oncology",
    "topic": "Tumour markers and screening",
    "difficulty": "Moderate",
    "stem": "A healthy, asymptomatic man asks for a serum tumour-marker panel to screen for all common cancers. Which response is most appropriate?",
    "options": {
      "A": "A raised tumour marker always establishes a cancer diagnosis",
      "B": "No general tumour-marker panel can reliably screen for all common cancers; testing should be guided by the specific clinical context",
      "C": "Tumour markers are never useful in clinical practice",
      "D": "Tumour markers replace histological diagnosis in every suspected cancer",
      "E": "A normal panel reliably excludes all common cancers"
    },
    "correct_letter": "B",
    "why_correct": "Tumour markers vary in sensitivity and specificity. Some are useful in selected diagnostic pathways, monitoring treatment response or detecting recurrence, but they are not a universal cancer-screening solution. A normal result does not exclude malignancy, and an abnormal result does not necessarily prove it.",
    "distractor_analysis": {
      "A": "Tumour markers can be raised in benign conditions.",
      "C": "Some markers are useful in selected settings, such as PSA, CA-125, AFP and hCG.",
      "D": "Histology remains the standard for diagnosis in most cancers.",
      "E": "Many cancers do not raise a marker, so a normal panel does not exclude cancer."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q188",
    "subdomain": "Haematology & oncology",
    "topic": "Cancer cachexia",
    "difficulty": "Moderate",
    "stem": "A patient with advanced pancreatic cancer has progressive weight loss, reduced muscle mass and weakness despite attempts to increase caloric intake. Which statement best describes cancer cachexia?",
    "options": {
      "A": "It is a multifactorial syndrome involving altered metabolism and loss of skeletal muscle",
      "B": "It can always be reversed by increasing calories alone",
      "C": "It occurs only during the final 24 hours of life",
      "D": "It is always caused solely by inadequate food intake",
      "E": "It is synonymous with dehydration"
    },
    "correct_letter": "A",
    "why_correct": "Cancer cachexia involves ongoing loss of skeletal muscle, often with loss of fat, and is associated with metabolic and inflammatory changes. Reduced intake can contribute, but nutritional supplementation alone may not fully reverse the syndrome. Management should be individualised and may include symptom control, nutritional support and functional goals.",
    "distractor_analysis": {
      "B": "Cachexia is driven by inflammation and metabolic change; calories alone do not reverse it.",
      "C": "Cachexia develops over weeks to months, not only at the very end of life.",
      "D": "Reduced intake contributes but is not the only cause.",
      "E": "Dehydration is a fluid deficit, not loss of muscle mass."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q189",
    "subdomain": "Haematology & oncology",
    "topic": "Chemotherapy extravasation",
    "difficulty": "Moderate",
    "stem": "A patient receiving intravenous chemotherapy develops pain, swelling and erythema around the cannula site. Extravasation of the infused drug is suspected. What should be done first?",
    "options": {
      "A": "Increase the infusion rate to complete treatment quickly",
      "B": "Remove the cannula immediately without considering drug-specific instructions",
      "C": "Apply heat to every suspected extravasation regardless of the drug",
      "D": "Stop the infusion immediately and follow the drug-specific extravasation protocol",
      "E": "Flush the line forcefully"
    },
    "correct_letter": "D",
    "why_correct": "Extravasation can cause significant tissue injury, depending on the drug. Stop administration immediately and activate the relevant protocol. The cannula may need to remain in place temporarily to permit aspiration or administration of an antidote, depending on the agent. Subsequent measures, including warm or cold compresses, are drug-specific.",
    "distractor_analysis": {
      "A": "A faster infusion increases tissue exposure to the drug.",
      "B": "The cannula may need to stay in so drug can be aspirated or an antidote given.",
      "C": "Heat suits some drugs, such as vinca alkaloids, but cold is used for others, such as anthracyclines.",
      "E": "Flushing pushes more drug into the tissues."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q190",
    "subdomain": "Haematology & oncology",
    "topic": "Brain metastases",
    "difficulty": "Moderate",
    "stem": "A patient with a known lung malignancy develops a new progressive headache, vomiting and a focal neurological deficit. Which is the most appropriate interpretation?",
    "options": {
      "A": "Neurological imaging is unnecessary in a patient with known cancer",
      "B": "The symptoms establish a diagnosis of migraine without further assessment",
      "C": "Brain metastases are excluded if the patient has no fever",
      "D": "Intracranial metastatic disease or another serious intracranial process must be considered urgently",
      "E": "The symptoms are necessarily due to tension headache"
    },
    "correct_letter": "D",
    "why_correct": "New progressive headache, vomiting and focal neurological signs in a patient with cancer are red flags for intracranial pathology, including metastases and raised intracranial pressure. The patient requires urgent assessment and appropriate neuroimaging; the precise investigation depends on the clinical situation and local pathway.",
    "distractor_analysis": {
      "A": "Urgent imaging is needed to look for metastases or raised intracranial pressure.",
      "B": "New focal signs in someone with cancer cannot be called migraine without investigation.",
      "C": "Fever is not a feature of brain metastases, so its absence excludes nothing.",
      "E": "Tension headache does not cause vomiting or focal deficits."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q191",
    "subdomain": "Haematology & oncology",
    "topic": "Cancer-associated thrombosis",
    "difficulty": "Moderate",
    "stem": "A patient with active malignancy develops unilateral leg swelling and pain. Which statement about venous thromboembolism in cancer is most accurate?",
    "options": {
      "A": "Malignancy can increase thrombosis risk, and suspected venous thromboembolism requires an appropriate diagnostic pathway",
      "B": "Every patient with cancer should receive therapeutic-dose anticoagulation regardless of risk",
      "C": "Active cancer reduces the risk of venous thrombosis",
      "D": "A normal D-dimer invariably excludes venous thromboembolism in a patient with cancer",
      "E": "Leg swelling in cancer should be attributed to lymphoedema without assessment"
    },
    "correct_letter": "A",
    "why_correct": "Cancer and some cancer treatments increase venous thromboembolism risk. New unilateral leg swelling and pain warrant assessment using the applicable diagnostic pathway, with imaging and laboratory testing as appropriate. Anticoagulation decisions depend on whether thrombosis is confirmed or strongly suspected, bleeding risk, contraindications and the clinical context.",
    "distractor_analysis": {
      "B": "Anticoagulation depends on individual risk; blanket therapeutic dosing is not used.",
      "C": "Cancer increases, not reduces, thrombosis risk.",
      "D": "D-dimer is often raised in cancer, and a normal result still needs clinical judgement.",
      "E": "Unilateral swelling needs DVT excluded before another cause is assumed."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q192",
    "subdomain": "Haematology & oncology",
    "topic": "Pancoast tumour",
    "difficulty": "Moderate",
    "stem": "A 61-year-old man with a substantial smoking history develops persistent shoulder pain radiating down the medial aspect of his arm. Examination reveals wasting of the small muscles of the hand and ipsilateral ptosis and miosis. Which diagnosis best explains this presentation?",
    "options": {
      "A": "Pulmonary embolism without local tumour involvement",
      "B": "Isolated cervical radiculopathy affecting the upper cervical roots",
      "C": "Rotator cuff tendinopathy",
      "D": "Apical lung tumour involving the lower brachial plexus and sympathetic pathway",
      "E": "Carpal tunnel syndrome"
    },
    "correct_letter": "D",
    "why_correct": "A Pancoast tumour arises at the lung apex and can invade the lower brachial plexus, producing shoulder pain and lower-arm neurological symptoms. Involvement of the cervical sympathetic pathway can cause Horner syndrome, characterised by ptosis and miosis.",
    "distractor_analysis": {
      "A": "Pulmonary embolism does not cause brachial plexus signs or Horner syndrome.",
      "B": "Upper cervical roots would not cause small hand muscle wasting (C8–T1) or Horner syndrome.",
      "C": "Rotator cuff disease causes shoulder pain without hand wasting or Horner syndrome.",
      "E": "Carpal tunnel affects only the thenar muscles, without ptosis or miosis."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q193",
    "subdomain": "Haematology & oncology",
    "topic": "Carcinoid syndrome",
    "difficulty": "Moderate",
    "stem": "A patient with metastatic neuroendocrine tumour develops episodic flushing, watery diarrhoea and wheezing. Which mediator is most closely associated with these symptoms?",
    "options": {
      "A": "Calcitonin",
      "B": "Erythropoietin",
      "C": "Serotonin",
      "D": "Histamine alone",
      "E": "Insulin"
    },
    "correct_letter": "C",
    "why_correct": "Carcinoid syndrome is associated with secretion of vasoactive substances, including serotonin, by neuroendocrine tumours. It can cause flushing, diarrhoea and bronchospasm. The syndrome is classically associated with metastatic disease, particularly when secreted substances reach the systemic circulation without being inactivated by the liver.",
    "distractor_analysis": {
      "A": "Calcitonin is a marker of medullary thyroid cancer, not the cause of carcinoid symptoms.",
      "B": "Erythropoietin causes polycythaemia, not flushing or diarrhoea.",
      "D": "Histamine contributes to flushing in some tumours, but serotonin is the key mediator.",
      "E": "Insulin causes hypoglycaemia, as in insulinoma."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q194",
    "subdomain": "Haematology & oncology",
    "topic": "Malignant pericardial effusion",
    "difficulty": "Moderate",
    "stem": "A patient with known metastatic cancer develops worsening breathlessness, hypotension, raised jugular venous pressure and muffled heart sounds. Which complication must be urgently excluded?",
    "options": {
      "A": "Uncomplicated pleural thickening",
      "B": "Chronic venous insufficiency",
      "C": "Isolated mitral stenosis",
      "D": "Cardiac tamponade",
      "E": "Stable chronic pericardial calcification"
    },
    "correct_letter": "D",
    "why_correct": "Malignant pericardial effusion can impair cardiac filling and cause tamponade. Hypotension with raised jugular venous pressure in this context is concerning and requires emergency assessment, urgent echocardiography where feasible, and specialist management. In an unstable patient, investigation must not cause unsafe delay in definitive treatment.",
    "distractor_analysis": {
      "A": "Pleural thickening does not cause hypotension, raised JVP and muffled heart sounds.",
      "B": "Venous insufficiency causes leg oedema, not haemodynamic compromise.",
      "C": "Mitral stenosis does not muffle the heart sounds and is not a malignant complication.",
      "E": "Pericardial calcification causes slowly developing constriction, not this acute picture."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q195",
    "subdomain": "Neurology",
    "topic": "Paraneoplastic Lambert–Eaton syndrome",
    "difficulty": "Moderate",
    "stem": "A 67-year-old smoker reports proximal leg weakness that improves briefly after repeated muscle contraction. Examination shows reduced tendon reflexes and autonomic symptoms, including dry mouth. Which underlying malignancy is particularly associated with this syndrome?",
    "options": {
      "A": "Small-cell lung carcinoma",
      "B": "Colorectal adenoma",
      "C": "Renal angiomyolipoma",
      "D": "Basal-cell carcinoma",
      "E": "Papillary thyroid carcinoma"
    },
    "correct_letter": "A",
    "why_correct": "Lambert–Eaton myasthenic syndrome is a presynaptic neuromuscular-junction disorder often associated with antibodies against voltage-gated calcium channels. Proximal weakness, autonomic symptoms and reduced reflexes that may improve after activation are characteristic. Small-cell lung carcinoma is an important association.",
    "distractor_analysis": {
      "B": "Colorectal adenoma is not associated with Lambert–Eaton syndrome.",
      "C": "Angiomyolipoma is linked with tuberous sclerosis, not Lambert–Eaton syndrome.",
      "D": "Basal cell carcinoma does not cause paraneoplastic syndromes.",
      "E": "Papillary thyroid cancer is not linked with Lambert–Eaton syndrome."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q196",
    "subdomain": "Ophthalmology & ENT",
    "topic": "Anterior uveitis",
    "difficulty": "Moderate",
    "stem": "A 32-year-old man develops a painful red eye with photophobia and blurred vision. The pupil is small and irregular, and the redness is most pronounced around the limbus. There is no purulent discharge. Which diagnosis is most likely?",
    "options": {
      "A": "Chronic open-angle glaucoma",
      "B": "Subconjunctival haemorrhage",
      "C": "Blepharitis",
      "D": "Acute anterior uveitis",
      "E": "Uncomplicated allergic conjunctivitis"
    },
    "correct_letter": "D",
    "why_correct": "Anterior uveitis can cause ocular pain, photophobia, blurred vision, ciliary injection and a small or irregular pupil. It requires urgent ophthalmic assessment because delayed treatment can threaten vision. A painful photophobic red eye should not be managed as routine conjunctivitis without appropriate assessment.",
    "distractor_analysis": {
      "A": "Chronic open-angle glaucoma is painless and gradual.",
      "B": "Subconjunctival haemorrhage is painless, with normal vision and pupil.",
      "C": "Blepharitis affects the lid margins, without photophobia or pupil change.",
      "E": "Allergic conjunctivitis is itchy and usually bilateral, with normal vision and pupils."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q197",
    "subdomain": "Ophthalmology & ENT",
    "topic": "Retinal detachment",
    "difficulty": "Moderate",
    "stem": "A 66-year-old man reports sudden onset of flashing lights and new floaters in one eye, followed by a dark curtain spreading across part of his visual field. What is the most appropriate next step?",
    "options": {
      "A": "Routine optometry review in six weeks",
      "B": "Reassurance because floaters are always benign",
      "C": "Start oral antibiotics and review after completing the course",
      "D": "Immediate treatment with topical antihistamines",
      "E": "Urgent same-day ophthalmic assessment for possible retinal detachment"
    },
    "correct_letter": "E",
    "why_correct": "New flashes and floaters followed by a curtain-like visual-field defect are concerning for retinal tear or detachment. Urgent ophthalmic assessment is needed to protect vision. The absence of pain does not make the presentation safe to defer.",
    "distractor_analysis": {
      "A": "Detachment needs same-day assessment; waiting six weeks risks permanent sight loss.",
      "B": "New flashes with a field defect are not benign.",
      "C": "Antibiotics have no role; this is not an infection.",
      "D": "Antihistamines treat allergy, not a retinal tear."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q198",
    "subdomain": "Ophthalmology & ENT",
    "topic": "Diabetic retinopathy",
    "difficulty": "Moderate",
    "stem": "A patient with long-standing diabetes attends retinal screening. Fundoscopy reveals retinal microaneurysms, dot-and-blot haemorrhages and hard exudates. Which underlying process is primarily responsible for these changes?",
    "options": {
      "A": "Acute obstruction of the central retinal artery",
      "B": "Chronic diabetes-related retinal microvascular damage",
      "C": "Raised intraocular pressure as the sole mechanism",
      "D": "Autoimmune inflammation of the optic nerve",
      "E": "Degeneration of the macula caused exclusively by ageing"
    },
    "correct_letter": "B",
    "why_correct": "Diabetic retinopathy results from chronic retinal microvascular injury. Early non-proliferative changes include microaneurysms and retinal haemorrhages; more advanced disease can involve neovascularisation. Macular oedema can impair central vision at different stages of retinopathy.",
    "distractor_analysis": {
      "A": "Central retinal artery occlusion causes sudden loss with a pale retina and cherry-red spot.",
      "C": "Raised intraocular pressure causes disc cupping, not microaneurysms and exudates.",
      "D": "Optic neuritis affects the optic nerve, not the retinal vessels.",
      "E": "Macular degeneration causes drusen and macular change, not dot-and-blot haemorrhages across the retina."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q199",
    "subdomain": "Ophthalmology & ENT",
    "topic": "Age-related macular degeneration",
    "difficulty": "Moderate",
    "stem": "A 79-year-old woman reports progressive difficulty reading and recognising faces. Central vision is distorted, but peripheral vision is relatively preserved. Which anatomical region is primarily responsible for the central visual impairment in age-related macular degeneration?",
    "options": {
      "A": "Macula",
      "B": "Optic chiasm",
      "C": "Peripheral retina only",
      "D": "Extraocular muscles",
      "E": "Ciliary body"
    },
    "correct_letter": "A",
    "why_correct": "The macula is responsible for detailed central vision. Age-related macular degeneration can cause distortion and loss of central visual acuity while peripheral vision is relatively preserved. New distortion or sudden deterioration warrants prompt ophthalmic assessment because some forms are treatable.",
    "distractor_analysis": {
      "B": "Chiasmal lesions cause bitemporal hemianopia, not central loss.",
      "C": "The peripheral retina serves peripheral vision, which is preserved here.",
      "D": "Extraocular muscles affect eye movement, not acuity.",
      "E": "The ciliary body controls accommodation and aqueous production."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q200",
    "subdomain": "Ophthalmology & ENT",
    "topic": "Cataract referral",
    "difficulty": "Moderate",
    "stem": "A 74-year-old woman reports increasing glare when driving at night and difficulty reading despite appropriate spectacles. Examination confirms bilateral cataracts. Her best-corrected visual acuity remains relatively good, but her daily activities are increasingly restricted. Which factor should primarily guide referral for cataract surgery?",
    "options": {
      "A": "The effect of the cataracts on vision and quality of life, discussed with the patient",
      "B": "Whether the cataracts are associated with raised intraocular pressure",
      "C": "Whether both eyes have the same degree of lens opacity",
      "D": "Whether the patient has stopped driving completely",
      "E": "Whether visual acuity has fallen below a fixed threshold"
    },
    "correct_letter": "A",
    "why_correct": "Referral should be based on the impact of cataracts on vision and quality of life, the potential benefits and risks of surgery, and the patient's preferences. NICE specifically advises against restricting access to cataract surgery on visual acuity alone.",
    "distractor_analysis": {
      "B": "Raised intraocular pressure is not the criterion for cataract referral.",
      "C": "Referral does not require both eyes to be equally affected.",
      "D": "She does not need to stop driving to qualify.",
      "E": "NICE advises against using a visual acuity threshold alone."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q201",
    "subdomain": "Psychiatry",
    "topic": "Post-traumatic stress disorder",
    "difficulty": "Moderate",
    "stem": "A 31-year-old man presents four months after a serious road traffic collision. He experiences recurrent distressing memories, avoids travelling by car, feels persistently on edge and has difficulty sleeping. His symptoms significantly impair his work and relationships. Which psychological treatment is recommended for an adult with this presentation?",
    "options": {
      "A": "Individual trauma-focused cognitive behavioural therapy",
      "B": "Cognitive stimulation therapy",
      "C": "A compulsory period of watchful waiting before treatment can be offered",
      "D": "Behavioural activation directed solely at depressive symptoms",
      "E": "Supportive counselling alone, with no structured intervention"
    },
    "correct_letter": "A",
    "why_correct": "NICE recommends individual trauma-focused CBT for adults with PTSD or clinically important PTSD symptoms presenting more than one month after a traumatic event. Treatment should be structured and delivered by appropriately trained practitioners.",
    "distractor_analysis": {
      "B": "Cognitive stimulation therapy is for mild to moderate dementia.",
      "C": "Watchful waiting is not required at four months with significant impairment.",
      "D": "Behavioural activation targets depression, not PTSD.",
      "E": "Non-directive counselling alone is not recommended as treatment for PTSD."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q202",
    "subdomain": "Psychiatry",
    "topic": "Medically compromised eating disorder",
    "difficulty": "Moderate",
    "stem": "A 22-year-old woman presents with rapid weight loss, restrictive eating and recurrent self-induced vomiting. She is bradycardic and has a significant electrolyte disturbance. She says she is willing to attend outpatient appointments but does not want to be admitted. What is the most appropriate next step?",
    "options": {
      "A": "Provide acute medical assessment and treatment, including emergency admission if indicated by her physical compromise",
      "B": "Arrange psychological treatment first and investigate the electrolyte disturbance later",
      "C": "Delay referral until she acknowledges having an eating disorder",
      "D": "Arrange routine outpatient psychological treatment without further medical assessment",
      "E": "Use BMI alone to determine whether treatment is necessary"
    },
    "correct_letter": "A",
    "why_correct": "Significant physical compromise, including severe electrolyte disturbance, can require acute medical care and emergency admission. Assessment must consider physical health and immediate risk; BMI or duration of illness must not be used alone to determine whether treatment is needed.",
    "distractor_analysis": {
      "B": "Electrolyte disturbance with bradycardia is immediately dangerous and cannot wait.",
      "C": "Treatment should not depend on her accepting the diagnosis.",
      "D": "Outpatient care without medical assessment ignores the physical risk.",
      "E": "NICE advises against using BMI alone to decide on treatment."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q203",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Clinically assisted hydration",
    "difficulty": "Moderate",
    "stem": "A patient with advanced cancer is thought to be in the last days of life. They have distressing thirst and possible dehydration-related delirium, but oral hydration is inadequate. There is no clear advance decision refusing clinically assisted hydration. Which approach is most appropriate?",
    "options": {
      "A": "Withhold hydration because the patient is dying",
      "B": "Start clinically assisted hydration automatically and continue regardless of response",
      "C": "Encourage unrestricted oral fluids even if swallowing is unsafe",
      "D": "Discuss the potential benefits and harms and consider an individualised therapeutic trial, monitoring for benefit and harm",
      "E": "Give fluids solely to prolong life, irrespective of the patient's goals"
    },
    "correct_letter": "D",
    "why_correct": "NICE recommends an individualised decision. A therapeutic trial of clinically assisted hydration can be considered when distressing symptoms may be related to dehydration and oral hydration is inadequate. The patient's wishes, swallowing, consciousness and risk of fluid overload matter; treatment should be reviewed and reduced or stopped if harm occurs or benefit is absent.",
    "distractor_analysis": {
      "A": "Hydration need not be withheld simply because the patient is dying.",
      "B": "Assisted hydration should be reviewed and stopped if it causes harm such as fluid overload.",
      "C": "Unsafe swallowing risks aspiration.",
      "E": "Decisions should follow the patient's goals and comfort, not prolonging life alone."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q204",
    "subdomain": "Geriatrics & palliative care",
    "topic": "Medication review in the last days of life",
    "difficulty": "Moderate",
    "stem": "A 79-year-old man with advanced malignancy is recognised as being in the last days of life. He is increasingly unable to swallow tablets. His regular medicines include a statin for long-term cardiovascular prevention and medicines prescribed for symptom relief. What is the most appropriate general approach to his medication regimen?",
    "options": {
      "A": "Replace all oral medicines with intravenous equivalents",
      "B": "Review each medicine with the patient or appropriate decision-makers, stopping medicines that offer no symptomatic benefit or may cause harm, while preserving appropriate symptom relief",
      "C": "Stop every prescribed medicine immediately, without discussion",
      "D": "Continue preventive medicines in preference to medicines for comfort",
      "E": "Continue every medicine unchanged until death"
    },
    "correct_letter": "B",
    "why_correct": "NICE recommends reviewing current medicines when a person may be entering the last days of life and, following appropriate discussion, stopping those that do not provide symptomatic benefit or may cause harm. Decisions should be individualised; this is not a blanket instruction to stop every medicine.",
    "distractor_analysis": {
      "A": "Intravenous medicines are not routinely needed; the subcutaneous route is used for symptom control.",
      "C": "Stopping everything without discussion may remove needed symptom relief.",
      "D": "Preventive medicines such as statins offer no benefit in the last days of life.",
      "E": "Continuing everything adds burden without benefit."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q205",
    "subdomain": "Haematology & oncology",
    "topic": "Malignancy of unknown primary origin",
    "difficulty": "Moderate",
    "stem": "A 68-year-old man has a liver biopsy confirming metastatic adenocarcinoma. Initial history, examination and baseline blood tests have not identified the primary site. There are no specific clinical findings directing investigation towards one organ. Which investigation is included in the initial diagnostic assessment of malignancy of unknown primary origin?",
    "options": {
      "A": "Whole-body PET-CT in every patient before any other imaging",
      "B": "CT of the chest, abdomen and pelvis",
      "C": "Bone-marrow biopsy in every patient",
      "D": "Screening colonoscopy in every patient, regardless of symptoms or findings",
      "E": "Serum tumour-marker panels as the sole method of identifying the primary"
    },
    "correct_letter": "B",
    "why_correct": "NICE guidance on malignancy of unknown primary includes CT of the chest, abdomen and pelvis in the initial diagnostic phase, alongside clinical assessment and other investigations selected according to the presentation. Further testing should be directed by the findings rather than applying every possible investigation to every patient.",
    "distractor_analysis": {
      "A": "PET-CT is for selected cases, not first-line imaging in everyone.",
      "C": "Bone marrow biopsy is not routine without a haematological indication.",
      "D": "Colonoscopy is guided by symptoms or findings, not done in every patient.",
      "E": "Tumour markers cannot locate the primary on their own; only selected markers are recommended."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q206",
    "subdomain": "Cardiology",
    "topic": "Rehabilitation after myocardial infarction",
    "difficulty": "Moderate",
    "stem": "An 82-year-old man is recovering from an uncomplicated myocardial infarction. He is clinically stable, mobilising independently and has no contraindication to an appropriately adapted exercise programme. A team member suggests that cardiac rehabilitation is unnecessary because of his age. What is the most appropriate response?",
    "options": {
      "A": "Offer rehabilitation only if his left ventricular ejection fraction is normal",
      "B": "Prescribe bed rest for several weeks before considering rehabilitation",
      "C": "Offer cardiac rehabilitation with an exercise component, adapting it to his clinical needs",
      "D": "Cardiac rehabilitation is indicated only for patients younger than 70 years",
      "E": "Defer rehabilitation until he develops exercise-related symptoms"
    },
    "correct_letter": "C",
    "why_correct": "NICE recommends offering cardiac rehabilitation after myocardial infarction regardless of age. Stable patients with reduced left ventricular ejection fraction can also be offered the exercise component; the programme should be adapted when necessary for clinical conditions.",
    "distractor_analysis": {
      "A": "Reduced ejection fraction does not exclude rehabilitation.",
      "B": "Prolonged bed rest is harmful and not recommended.",
      "D": "NICE recommends offering rehabilitation regardless of age.",
      "E": "Rehabilitation should start soon after the infarct, not wait for symptoms."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q207",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Sjögren disease",
    "difficulty": "Moderate",
    "stem": "A 53-year-old woman reports persistent gritty eyes, a dry mouth requiring frequent sips of water and increasing dental caries. She also describes intermittent arthralgia. Medication review does not identify a convincing cause of her dryness. Which autoantibody is particularly associated with Sjögren disease?",
    "options": {
      "A": "Anti-cyclic citrullinated peptide antibody",
      "B": "Anti-centromere antibody",
      "C": "Anti-mitochondrial antibody",
      "D": "Anti-Ro/SSA antibody",
      "E": "Anti-glomerular basement membrane antibody"
    },
    "correct_letter": "D",
    "why_correct": "Anti-Ro/SSA is an important autoantibody associated with Sjögren disease. The diagnosis must still be based on the clinical picture and appropriate investigations; an antibody result alone does not establish the diagnosis in every patient.",
    "distractor_analysis": {
      "A": "Anti-CCP is specific for rheumatoid arthritis.",
      "B": "Anti-centromere is linked with limited cutaneous systemic sclerosis.",
      "C": "Anti-mitochondrial antibody is linked with primary biliary cholangitis.",
      "E": "Anti-GBM antibody causes anti-GBM (Goodpasture) disease."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q208",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Initial fracture-risk assessment",
    "difficulty": "Moderate",
    "stem": "A 68-year-old postmenopausal woman has several risk factors for fragility fracture but no previous DXA scan. She has not sustained a fragility fracture, and the clinician wants to estimate her fracture risk before deciding whether bone-density measurement is needed. Which is the recommended initial approach?",
    "options": {
      "A": "Measure serum calcium and use it as the sole estimate of fracture risk",
      "B": "Use BMI alone to determine whether osteoporosis is present",
      "C": "Reassure her because a previous fragility fracture is required before risk assessment",
      "D": "Use FRAX or QFracture, within the tool's applicable age range, to estimate absolute fracture risk",
      "E": "Arrange DXA before undertaking any fracture-risk assessment"
    },
    "correct_letter": "D",
    "why_correct": "NICE recommends using FRAX or QFracture to estimate absolute fracture risk. DXA can then be considered when the estimated risk is around the intervention threshold, with risk recalculated using the bone mineral density result where appropriate. Risk tools have limitations and must be interpreted in clinical context.",
    "distractor_analysis": {
      "A": "Serum calcium does not estimate fracture risk.",
      "B": "BMI is one risk factor, not a diagnostic test for osteoporosis.",
      "C": "Risk assessment does not require a previous fracture.",
      "E": "NICE advises calculating risk first, then using DXA when risk is near the threshold."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q209",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Autoimmune hepatitis",
    "difficulty": "Moderate",
    "stem": "A 36-year-old woman presents with fatigue, nausea and jaundice. Blood tests show ALT 1,180 IU/L, AST 960 IU/L, bilirubin 105 µmol/L and a prolonged prothrombin time. Viral hepatitis testing is negative. Serum IgG is markedly elevated, and anti-smooth-muscle antibodies are detected. She reports no significant alcohol intake or recent medication changes. Which diagnosis best explains these findings?",
    "options": {
      "A": "Hereditary haemochromatosis",
      "B": "Primary sclerosing cholangitis",
      "C": "Alcohol-associated hepatitis",
      "D": "Primary biliary cholangitis",
      "E": "Autoimmune hepatitis"
    },
    "correct_letter": "E",
    "why_correct": "The combination of a hepatocellular injury pattern, raised IgG, compatible autoantibodies and negative viral testing strongly supports the diagnosis. Diagnosis requires integration of serology, exclusion of competing causes and usually specialist assessment with liver biopsy where appropriate.",
    "distractor_analysis": {
      "A": "Haemochromatosis raises ferritin and transferrin saturation, not IgG with smooth-muscle antibodies.",
      "B": "Primary sclerosing cholangitis gives a cholestatic pattern with a raised ALP.",
      "C": "Alcohol is excluded by the history, and alcoholic hepatitis rarely gives aminotransferases above 1,000.",
      "D": "Primary biliary cholangitis is cholestatic, with anti-mitochondrial antibodies and raised IgM."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q210",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Budd–Chiari syndrome",
    "difficulty": "Moderate",
    "stem": "A 29-year-old woman presents with progressive abdominal pain, abdominal distension and tender hepatomegaly. She has shifting dullness. Liver tests are abnormal, and abdominal ultrasound shows ascites and an enlarged liver. Doppler imaging demonstrates absent flow in the major hepatic veins. Her full blood count shows a raised haemoglobin concentration and haematocrit. Which diagnosis best explains the presentation?",
    "options": {
      "A": "Acute viral hepatitis",
      "B": "Budd–Chiari syndrome",
      "C": "Spontaneous bacterial peritonitis",
      "D": "Portal vein thrombosis",
      "E": "Hepatic venous congestion from right-sided heart failure"
    },
    "correct_letter": "B",
    "why_correct": "Hepatic venous outflow obstruction causes hepatic congestion, abdominal pain, hepatomegaly and ascites. Thrombophilic conditions and myeloproliferative neoplasms are important potential underlying causes.",
    "distractor_analysis": {
      "A": "Viral hepatitis would not cause absent hepatic vein flow.",
      "C": "Spontaneous bacterial peritonitis is infection of existing ascites, not a cause of venous occlusion.",
      "D": "Portal vein thrombosis does not occlude the hepatic veins or usually cause tender hepatomegaly.",
      "E": "Heart failure shows patent, distended hepatic veins and a raised JVP."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q211",
    "subdomain": "Ophthalmology & ENT",
    "topic": "Adult acute epiglottitis",
    "difficulty": "Difficult",
    "stem": "A 42-year-old man presents with severe sore throat, fever and difficulty swallowing. He is drooling and sitting upright, leaning forwards. His voice is muffled, and he has inspiratory stridor. He appears distressed. What is the most appropriate immediate approach?",
    "options": {
      "A": "Examine the oropharynx thoroughly with a tongue depressor",
      "B": "Arrange routine outpatient throat swabs before treatment",
      "C": "Arrange urgent senior airway assessment in a controlled setting",
      "D": "Give oral antibiotics and discharge if he can swallow",
      "E": "Send him for a routine lateral neck radiograph before seeking specialist help"
    },
    "correct_letter": "C",
    "why_correct": "Call for immediate experienced anaesthetic and ENT support, minimise distress, and manage the airway in an appropriately equipped environment. Antibiotics and other treatment should follow the emergency team’s plan without delaying airway management.",
    "distractor_analysis": {
      "A": "Examining the throat can trigger complete airway obstruction.",
      "B": "Outpatient swabs ignore an airway emergency.",
      "D": "Discharge risks sudden airway loss.",
      "E": "Sending him to radiology delays airway care and moves him from a safe area."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q212",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Suspected Shiga toxin-producing E. coli infection",
    "difficulty": "Moderate",
    "stem": "A 27-year-old man develops severe abdominal cramps and bloody diarrhoea after attending a barbecue. He is haemodynamically stable and has no signs of sepsis. Initial blood tests show a normal platelet count and renal function. A stool sample is sent for microbiological testing, including Shiga toxin-producing Escherichia coli (STEC). Which management principle is most appropriate while STEC is suspected?",
    "options": {
      "A": "Give empirical antibiotics to all patients with bloody diarrhoea",
      "B": "Start loperamide to reduce stool frequency",
      "C": "Start corticosteroids to reduce intestinal inflammation",
      "D": "Reassure him that renal monitoring is unnecessary if the initial creatinine is normal",
      "E": "Provide supportive care and avoid routine antibiotics and antimotility drugs"
    },
    "correct_letter": "E",
    "why_correct": "Assess hydration, provide appropriate fluid replacement, send stool testing and monitor for complications. The need for further treatment depends on clinical severity and microbiological results.",
    "distractor_analysis": {
      "A": "Antibiotics may increase the risk of haemolytic uraemic syndrome in STEC infection.",
      "B": "Antimotility drugs also increase the risk of haemolytic uraemic syndrome.",
      "C": "Steroids have no role in STEC infection.",
      "D": "Haemolytic uraemic syndrome can develop days later, so renal function and platelets need monitoring."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q213",
    "subdomain": "Renal & urology",
    "topic": "Fanconi syndrome",
    "difficulty": "Moderate",
    "stem": "A 51-year-old man reports fatigue, bone pain and proximal muscle weakness. Blood tests show a normal-anion-gap metabolic acidosis, hypophosphataemia and hypokalaemia. Urinalysis shows glucose despite a normal plasma glucose concentration. Further testing demonstrates urinary phosphate and amino acid losses. Which renal abnormality best explains these findings?",
    "options": {
      "A": "Isolated failure of glomerular filtration",
      "B": "Excessive parathyroid hormone secretion as the sole cause",
      "C": "Generalised dysfunction of the proximal renal tubule",
      "D": "Isolated failure of distal urinary acidification",
      "E": "Selective impairment of aldosterone synthesis"
    },
    "correct_letter": "C",
    "why_correct": "Fanconi syndrome causes impaired proximal tubular reabsorption, producing losses of substances such as bicarbonate, phosphate, glucose, urate and amino acids. Phosphate depletion can contribute to bone pain and muscle weakness.",
    "distractor_analysis": {
      "A": "Glomerular failure would not cause glycosuria, phosphaturia and aminoaciduria.",
      "B": "Hyperparathyroidism causes phosphaturia but not glycosuria or aminoaciduria.",
      "D": "Distal (type 1) RTA does not cause glycosuria or aminoaciduria.",
      "E": "Reduced aldosterone causes hyperkalaemia (type 4 RTA), not hypokalaemia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q214",
    "subdomain": "Haematology & oncology",
    "topic": "Hyperviscosity syndrome in Waldenström macroglobulinaemia",
    "difficulty": "Difficult",
    "stem": "A 71-year-old man with a known IgM-secreting lymphoplasmacytic disorder presents with headache, blurred vision and recurrent epistaxis. Fundoscopy shows markedly dilated, tortuous retinal veins. He is increasingly confused. Which treatment most directly addresses the suspected mechanism of his acute deterioration?",
    "options": {
      "A": "Routine outpatient bone marrow biopsy before any treatment",
      "B": "Oral iron replacement",
      "C": "Vitamin K administration",
      "D": "Platelet transfusion as the sole treatment",
      "E": "Immediate therapeutic plasma exchange"
    },
    "correct_letter": "E",
    "why_correct": "The combination of visual disturbance, neurological symptoms, mucosal bleeding and retinal venous changes in an IgM-secreting disorder strongly suggests symptomatic hyperviscosity. Plasma exchange rapidly reduces circulating paraprotein and viscosity while definitive haematological treatment is arranged.",
    "distractor_analysis": {
      "A": "Biopsy can wait; the hyperviscosity is the emergency.",
      "B": "Iron is irrelevant to hyperviscosity.",
      "C": "Vitamin K does not correct paraprotein-related bleeding.",
      "D": "Platelets do not reduce viscosity."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q215",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Thyroid eye disease",
    "difficulty": "Moderate",
    "stem": "A 44-year-old woman with Graves disease develops gritty eyes, periorbital swelling, proptosis and intermittent diplopia. She smokes. Her thyroid hormone concentrations are now within the reference range on treatment. Which statement is most accurate?",
    "options": {
      "A": "All patients with thyroid eye disease require immediate thyroidectomy",
      "B": "Normal thyroid hormone concentrations exclude thyroid eye disease",
      "C": "Thyroid eye disease can occur despite biochemical control of thyroid function",
      "D": "Smoking has no association with the severity of thyroid eye disease",
      "E": "Proptosis in Graves disease is caused exclusively by excess circulating thyroid hormone"
    },
    "correct_letter": "C",
    "why_correct": "It is an autoimmune orbital disorder associated with Graves disease. Orbital inflammation and tissue remodelling can cause proptosis, discomfort, diplopia and, in severe cases, sight-threatening complications.",
    "distractor_analysis": {
      "A": "Thyroidectomy is not the treatment for eye disease.",
      "B": "Eye disease can occur at any thyroid status.",
      "D": "Smoking is a strong risk factor for severe eye disease.",
      "E": "Proptosis comes from autoimmune orbital inflammation, not circulating thyroid hormone."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q216",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Acute liver failure",
    "difficulty": "Difficult",
    "stem": "A 24-year-old woman with no known chronic liver disease presents with jaundice and progressive confusion. Blood tests show markedly elevated aminotransferases and a prolonged prothrombin time. Her INR is 3.2. She has no history of cirrhosis. Which feature most strongly establishes that this is acute liver failure rather than isolated acute liver injury?",
    "options": {
      "A": "Hepatic encephalopathy with coagulopathy in the appropriate clinical setting",
      "B": "Right upper-quadrant discomfort",
      "C": "Markedly elevated aminotransferases",
      "D": "Jaundice",
      "E": "Raised serum bilirubin alone"
    },
    "correct_letter": "A",
    "why_correct": "Acute liver failure is characterised by acute hepatic dysfunction with coagulopathy and hepatic encephalopathy in a patient without established pre-existing cirrhosis, subject to the applicable diagnostic definition. This presentation requires urgent specialist management.",
    "distractor_analysis": {
      "B": "Right upper quadrant discomfort occurs in many liver conditions.",
      "C": "High aminotransferases show injury, not failure.",
      "D": "Jaundice occurs in liver injury without failure.",
      "E": "Bilirubin alone does not define liver failure."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q217",
    "subdomain": "Haematology & oncology",
    "topic": "Acquired methaemoglobinaemia",
    "difficulty": "Difficult",
    "stem": "A 38-year-old man develops headache, dizziness and breathlessness after using a topical anaesthetic preparation. His oxygen saturation remains around 85% despite supplemental oxygen. An arterial blood gas shows a relatively preserved arterial oxygen tension, and his blood appears chocolate-brown. Which investigation is most useful to confirm the suspected diagnosis?",
    "options": {
      "A": "Arterial blood gas analysis without co-oximetry",
      "B": "Blood co-oximetry to measure methaemoglobin",
      "C": "Measurement of carboxyhaemoglobin alone",
      "D": "Measurement of serum lactate alone",
      "E": "Repeat pulse oximetry using a different finger"
    },
    "correct_letter": "B",
    "why_correct": "Co-oximetry measures haemoglobin species and can confirm elevated methaemoglobin in the appropriate clinical setting.",
    "distractor_analysis": {
      "A": "A standard blood gas calculates saturation from PaO2 and misses methaemoglobin.",
      "C": "Carboxyhaemoglobin is a different species; measuring it alone misses methaemoglobin.",
      "D": "Lactate is non-specific.",
      "E": "Pulse oximetry is unreliable here and tends to read about 85% whatever the finger."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q218",
    "subdomain": "Haematology & oncology",
    "topic": "Heparin-induced thrombocytopenia",
    "difficulty": "Difficult",
    "stem": "A 67-year-old man is receiving unfractionated heparin after orthopaedic surgery. On the seventh day of treatment, his platelet count has fallen substantially from baseline and he develops a new proximal deep-vein thrombosis. He has no obvious alternative explanation for the thrombocytopenia. Which is the most appropriate immediate management principle if heparin-induced thrombocytopenia (HIT) is strongly suspected?",
    "options": {
      "A": "Stop all heparin and arrange an appropriate non-heparin anticoagulant",
      "B": "Give platelet transfusions routinely and continue heparin",
      "C": "Start warfarin alone immediately while continuing heparin",
      "D": "Continue heparin and repeat the platelet count in one week",
      "E": "Stop anticoagulation completely until the platelet count normalises"
    },
    "correct_letter": "A",
    "why_correct": "The timing, substantial platelet fall and new thrombosis are concerning for HIT. Stop heparin, assess clinical probability using an appropriate tool, arrange laboratory testing and initiate suitable non-heparin anticoagulation when indicated, following current specialist guidance.",
    "distractor_analysis": {
      "B": "Platelet transfusion may worsen thrombosis, and heparin must be stopped.",
      "C": "Warfarin alone early in HIT can cause venous limb gangrene, and heparin must be stopped.",
      "D": "Continuing heparin risks further thrombosis.",
      "E": "HIT is prothrombotic, so a non-heparin anticoagulant is needed."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q219",
    "subdomain": "Ophthalmology & ENT",
    "topic": "Central retinal vein occlusion",
    "difficulty": "Moderate",
    "stem": "A 67-year-old man develops sudden, painless blurring of vision in his left eye. Fundoscopy shows widespread retinal haemorrhages in all four quadrants, dilated tortuous retinal veins, retinal oedema and optic-disc swelling. Which is the most likely diagnosis?",
    "options": {
      "A": "Central retinal artery occlusion",
      "B": "Central retinal vein occlusion",
      "C": "Optic neuritis",
      "D": "Retinal detachment",
      "E": "Acute anterior uveitis"
    },
    "correct_letter": "B",
    "why_correct": "Central retinal vein occlusion classically produces widespread retinal haemorrhages, venous dilatation and tortuosity, retinal oedema and sometimes optic-disc swelling. The sudden painless visual disturbance is consistent with this diagnosis. Widespread retinal haemorrhages with dilated tortuous veins strongly suggest central retinal vein occlusion. Prompt ophthalmic assessment is required to assess vision, complications and relevant systemic risk factors.",
    "distractor_analysis": {
      "A": "Central retinal artery occlusion typically causes sudden, painless visual loss with retinal pallor; a cherry-red spot may be seen. The widespread haemorrhages and dilated tortuous veins in this vignette favour venous rather than arterial occlusion.",
      "C": "Optic neuritis often presents with subacute visual loss, impaired colour vision and pain on eye movement. It does not usually produce widespread four-quadrant retinal haemorrhages with dilated tortuous retinal veins.",
      "D": "Retinal detachment commonly presents with flashes, floaters or a curtain-like visual-field defect. Examination demonstrates separation of the neurosensory retina rather than the widespread haemorrhagic venous pattern described.",
      "E": "Acute anterior uveitis typically causes ocular pain, photophobia and anterior-chamber inflammation. It does not explain the widespread retinal haemorrhages and venous changes."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q220",
    "subdomain": "Respiratory",
    "topic": "Sarcoidosis",
    "difficulty": "Moderate",
    "stem": "A 34-year-old woman presents with a persistent dry cough and fatigue. Chest radiography shows bilateral hilar lymphadenopathy. She also reports tender erythematous nodules over both shins and ankle pain. She has no known tuberculosis exposure. Which diagnosis best explains the combination of findings?",
    "options": {
      "A": "Sarcoidosis",
      "B": "Idiopathic pulmonary fibrosis",
      "C": "Acute pulmonary embolism",
      "D": "Pulmonary oedema due to left ventricular failure",
      "E": "Chronic obstructive pulmonary disease"
    },
    "correct_letter": "A",
    "why_correct": "Bilateral hilar lymphadenopathy, respiratory symptoms, erythema nodosum and ankle arthralgia are a characteristic clinical combination associated with sarcoidosis. The findings strongly support the diagnosis, although the need for tissue confirmation and further investigation depends on the clinical presentation and exclusion of alternative causes. Bilateral hilar lymphadenopathy accompanied by erythema nodosum and ankle arthralgia is a strong clue to sarcoidosis, but the diagnosis must be considered in context and relevant alternative causes excluded.",
    "distractor_analysis": {
      "B": "Idiopathic pulmonary fibrosis typically causes progressive exertional breathlessness, dry cough and a restrictive lung pattern, often with bibasal inspiratory crackles. Bilateral hilar lymphadenopathy with erythema nodosum is not its characteristic presentation.",
      "C": "Pulmonary embolism can cause acute breathlessness, pleuritic chest pain and hypoxaemia. It does not account for this subacute multisystem presentation.",
      "D": "Left ventricular failure can cause breathlessness and radiographic pulmonary congestion. It does not adequately explain the combination of bilateral hilar lymphadenopathy, erythema nodosum and ankle arthralgia.",
      "E": "Chronic obstructive pulmonary disease: COPD usually presents with persistent airflow obstruction, often associated with smoking or other relevant exposure. It does not explain the characteristic combination of bilateral hilar lymphadenopathy and erythema nodosum."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q221",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Legionnaires’ disease",
    "difficulty": "Moderate",
    "stem": "A 64-year-old man presents with fever, dry cough, confusion and watery diarrhoea. He has a temperature of 39.4°C and bilateral chest signs. Blood tests show hyponatraemia and raised inflammatory markers. He returned from a hotel stay several days before becoming unwell. Which pathogen is the most likely cause of this pneumonia?",
    "options": {
      "A": "Legionella pneumophila",
      "B": "Pneumocystis jirovecii",
      "C": "Mycoplasma pneumoniae",
      "D": "Streptococcus pyogenes",
      "E": "Mycobacterium tuberculosis"
    },
    "correct_letter": "A",
    "why_correct": "Legionnaires’ disease can cause severe pneumonia with gastrointestinal and neurological features. Hyponatraemia may occur, although it is not specific enough to diagnose the infection on its own. Severe pneumonia accompanied by gastrointestinal or neurological symptoms should raise suspicion for Legionella, particularly when there is a plausible environmental exposure.",
    "distractor_analysis": {
      "B": "Pneumocystis pneumonia is particularly associated with impaired cellular immunity and commonly presents with progressive dyspnoea, dry cough and hypoxaemia. The acute febrile gastrointestinal presentation is less characteristic.",
      "C": "Mycoplasma pneumoniae: This can cause atypical pneumonia, particularly in younger people, but the combination of systemic illness, gastrointestinal symptoms, confusion and a possible accommodation-associated exposure favours Legionella.",
      "D": "Streptococcus pyogenes: This organism is an important cause of other infections, but it is not the best fit for this classic atypical-pneumonia presentation.",
      "E": "Mycobacterium tuberculosis: TB more often presents with a subacute or chronic illness, although acute presentations can occur. The short time course and systemic pattern favour Legionella."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q222",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Familial hypercholesterolaemia",
    "difficulty": "Moderate",
    "stem": "A 32-year-old man is found to have a markedly elevated LDL-cholesterol concentration during routine screening. Examination reveals tendon xanthomas over the Achilles tendons. His father had a myocardial infarction in his early forties, and his older sister has similarly elevated LDL cholesterol. Which diagnosis best explains this pattern?",
    "options": {
      "A": "Secondary hypercholesterolaemia due to untreated hypothyroidism",
      "B": "Familial hypercholesterolaemia",
      "C": "Familial hypertriglyceridaemia",
      "D": "Isolated high lipoprotein(a) concentration",
      "E": "Abetalipoproteinaemia"
    },
    "correct_letter": "B",
    "why_correct": "Markedly raised LDL cholesterol, tendon xanthomas and premature coronary disease across generations are characteristic of familial hypercholesterolaemia, commonly inherited in an autosomal dominant pattern. Severe LDL elevation with tendon xanthomas and premature coronary disease in close relatives should prompt assessment for familial hypercholesterolaemia and appropriate family evaluation.",
    "distractor_analysis": {
      "A": "Hypothyroidism can raise LDL cholesterol and should be assessed as a secondary cause. However, the tendon xanthomas and strong multigenerational history make familial hypercholesterolaemia the best answer.",
      "C": "Familial hypertriglyceridaemia: This primarily affects triglyceride concentrations and does not typically produce the classic combination of markedly elevated LDL cholesterol and tendon xanthomas.",
      "D": "Isolated high lipoprotein(a): Elevated lipoprotein(a) is an inherited cardiovascular risk factor, but it does not adequately explain the overall phenotype and family pattern presented.",
      "E": "Abetalipoproteinaemia: This rare disorder causes very low concentrations of apoB-containing lipoproteins and may present with fat malabsorption and neurological complications, rather than isolated severe LDL elevation."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q223",
    "subdomain": "Respiratory",
    "topic": "Chronic thromboembolic pulmonary hypertension",
    "difficulty": "Moderate",
    "stem": "A 59-year-old woman has persistent exertional dyspnoea and reduced exercise tolerance following a previous pulmonary embolism. Echocardiography suggests pulmonary hypertension. Ventilation–perfusion imaging is requested as part of the assessment. Which finding would most strongly support chronic thromboembolic pulmonary hypertension?",
    "options": {
      "A": "A single small area of reduced ventilation with normal perfusion",
      "B": "Diffuse bilateral air-space opacification",
      "C": "A normal ventilation–perfusion scan",
      "D": "Isolated reduction in lung diffusing capacity with otherwise normal imaging",
      "E": "Multiple segmental perfusion defects with preserved ventilation"
    },
    "correct_letter": "E",
    "why_correct": "This is the characteristic mismatched pattern that raises suspicion for chronic thromboembolic obstruction. Further specialist assessment is needed to establish the diagnosis and define operability and treatment options. In suspected chronic thromboembolic pulmonary hypertension, mismatched perfusion defects on ventilation–perfusion imaging are a key diagnostic clue.",
    "distractor_analysis": {
      "A": "Reduced ventilation with normal perfusion: This is a reverse mismatch (a ventilation defect with preserved perfusion), the opposite of the perfusion defects with preserved ventilation seen in chronic thromboembolic disease.",
      "B": "Diffuse bilateral air-space opacification: This pattern is more suggestive of diffuse parenchymal or alveolar disease than chronic thromboembolic obstruction.",
      "C": "A normal ventilation–perfusion scan: A normal scan makes chronic thromboembolic pulmonary hypertension unlikely in the appropriate diagnostic setting.",
      "D": "Reduced diffusing capacity can occur in pulmonary vascular disease, but it is non-specific and does not establish chronic thromboembolic pulmonary hypertension."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q224",
    "subdomain": "Haematology & oncology",
    "topic": "G6PD deficiency",
    "difficulty": "Moderate",
    "stem": "A 25-year-old man develops jaundice, dark urine and fatigue two days after taking a new medicine. His haemoglobin has fallen, reticulocytes are increased, and blood tests show raised unconjugated bilirubin and lactate dehydrogenase with reduced haptoglobin. The blood film shows bite cells. He has a family history of similar episodes after certain medicines. Which underlying abnormality best explains the presentation?",
    "options": {
      "A": "Reduced glucose-6-phosphate dehydrogenase activity",
      "B": "Failure of vitamin B12 absorption",
      "C": "Defective globin-chain synthesis",
      "D": "Autoantibodies directed against intrinsic factor",
      "E": "Defective platelet adhesion"
    },
    "correct_letter": "A",
    "why_correct": "G6PD helps red cells generate NADPH, which supports protection against oxidative damage. Deficiency can cause episodic haemolysis after exposure to certain medicines, infections or foods. Bite cells are compatible with oxidative damage. Acute haemolysis after an oxidative trigger, particularly with bite cells, should raise suspicion of G6PD deficiency.",
    "distractor_analysis": {
      "B": "B12 deficiency can cause macrocytic anaemia and neurological abnormalities but does not explain the typical acute oxidant-associated haemolysis.",
      "C": "Defective globin-chain synthesis: Thalassaemias cause inherited abnormalities of haemoglobin production, often producing chronic microcytosis rather than this characteristic oxidant-triggered haemolytic episode.",
      "D": "Anti-intrinsic-factor antibodies: These are associated with pernicious anaemia and B12 deficiency, not G6PD deficiency.",
      "E": "Defective platelet adhesion: This causes a bleeding tendency, not red-cell destruction."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q225",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Central hypothyroidism",
    "difficulty": "Moderate",
    "stem": "A 52-year-old woman reports fatigue, cold intolerance and constipation. She has a history of pituitary surgery. Her thyroid function tests show a low free thyroxine concentration with a thyroid-stimulating hormone concentration that is within the laboratory reference range. Which interpretation is most appropriate?",
    "options": {
      "A": "Normal thyroid function because TSH is within range",
      "B": "Thyroid hormone resistance",
      "C": "Subclinical hyperthyroidism",
      "D": "Primary hyperthyroidism",
      "E": "Central hypothyroidism due to hypothalamic or pituitary dysfunction"
    },
    "correct_letter": "E",
    "why_correct": "Pituitary or hypothalamic dysfunction can impair stimulation of the thyroid. The combination of low free T4 and an inappropriately normal or low TSH supports central hypothyroidism in the appropriate context. When pituitary disease is suspected, interpret TSH alongside free T4 rather than relying on TSH alone. NICE specifically recommends measuring both in adults when secondary thyroid dysfunction is suspected.",
    "distractor_analysis": {
      "A": "Normal thyroid function: A TSH within the reference range does not exclude hypothyroidism when pituitary disease is present. The TSH response may be inappropriately normal for the low free T4.",
      "B": "Thyroid hormone resistance more commonly presents with elevated free thyroid hormones and a non-suppressed TSH.",
      "C": "Subclinical hyperthyroidism: This is characterised by a low TSH with free thyroid hormone concentrations within their reference ranges, not a low free T4.",
      "D": "Primary hyperthyroidism generally produces a suppressed TSH with raised free thyroid hormones."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q226",
    "subdomain": "Renal & urology",
    "topic": "Primary membranous nephropathy",
    "difficulty": "Moderate",
    "stem": "A 56-year-old man presents with progressive peripheral oedema and frothy urine. Urine testing confirms heavy proteinuria, and blood tests show hypoalbuminaemia. His renal function is relatively preserved. Serum testing detects antibodies against the M-type phospholipase A2 receptor (anti-PLA2R). Which diagnosis is most strongly supported by this finding in the appropriate clinical context?",
    "options": {
      "A": "Primary membranous nephropathy",
      "B": "Acute post-streptococcal glomerulonephritis",
      "C": "Distal renal tubular acidosis",
      "D": "Acute interstitial nephritis",
      "E": "Isolated renal artery stenosis"
    },
    "correct_letter": "A",
    "why_correct": "Membranous nephropathy is an important cause of nephrotic syndrome in adults. Anti-PLA2R antibodies strongly support primary membranous nephropathy in a compatible presentation, although interpretation and the need for biopsy depend on the clinical context. In an adult with nephrotic syndrome, anti-PLA2R antibodies can support primary membranous nephropathy, but secondary causes and the need for further investigation still require clinical assessment.",
    "distractor_analysis": {
      "B": "Acute post-streptococcal glomerulonephritis: This more typically causes a nephritic presentation with haematuria, hypertension and impaired renal function following infection.",
      "C": "Distal renal tubular acidosis: This causes a defect in urinary acidification and a normal-anion-gap metabolic acidosis; it does not explain nephrotic-range proteinuria.",
      "D": "Acute interstitial nephritis: This commonly causes acute kidney injury, often in association with a drug or infection, rather than this characteristic nephrotic presentation.",
      "E": "Renal artery stenosis may contribute to hypertension and renal dysfunction but does not explain the anti-PLA2R finding and nephrotic syndrome pattern."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q227",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Eosinophilic oesophagitis",
    "difficulty": "Moderate",
    "stem": "A 28-year-old man with asthma and allergic rhinitis reports several years of intermittent difficulty swallowing solid food. On two occasions, food has become lodged in his oesophagus and required urgent assessment. Upper gastrointestinal endoscopy shows oesophageal rings and longitudinal furrows. Which investigation is required to establish the suspected diagnosis?",
    "options": {
      "A": "A urea breath test for Helicobacter pylori",
      "B": "Oesophageal biopsies for histological assessment",
      "C": "A faecal calprotectin measurement",
      "D": "Abdominal ultrasound",
      "E": "Serum amylase measurement"
    },
    "correct_letter": "B",
    "why_correct": "Eosinophilic oesophagitis is an immune-mediated oesophageal disease diagnosed using symptoms of oesophageal dysfunction and histological evidence of eosinophilic inflammation, interpreted in the clinical context. Recurrent food impaction, dysphagia and oesophageal rings should raise suspicion of eosinophilic oesophagitis; oesophageal biopsies are central to diagnosis.",
    "distractor_analysis": {
      "A": "Urea breath test: This tests for H. pylori infection, which is not the suspected cause of the recurrent food impaction and characteristic endoscopic appearance.",
      "C": "Faecal calprotectin: This is used mainly to help assess intestinal inflammation, particularly when distinguishing inflammatory bowel disease from non-inflammatory conditions; it does not diagnose eosinophilic oesophagitis.",
      "D": "Ultrasound can assess abdominal organs but cannot establish eosinophilic inflammation in the oesophageal mucosa.",
      "E": "Amylase is used in the assessment of pancreatic injury and does not diagnose an inflammatory oesophageal disorder."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q228",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Kawasaki disease",
    "difficulty": "Moderate",
    "stem": "A 3-year-old child is brought to hospital with a fever that has persisted for 6 days. Examination reveals bilateral non-purulent conjunctival injection, cracked red lips, a polymorphous rash, erythema and swelling of the hands and feet, and cervical lymphadenopathy. No bacterial focus is identified. Which diagnosis best explains this presentation?",
    "options": {
      "A": "Measles",
      "B": "Kawasaki disease",
      "C": "Scarlet fever",
      "D": "Systemic juvenile idiopathic arthritis",
      "E": "Adenoviral infection"
    },
    "correct_letter": "B",
    "why_correct": "This is an acute inflammatory vasculitis of childhood. The characteristic clinical pattern includes prolonged fever, bilateral non-purulent conjunctivitis, oral mucosal changes, rash, extremity changes and cervical lymphadenopathy. Coronary artery complications are an important concern. A child with persistent fever and characteristic mucocutaneous changes needs prompt assessment for Kawasaki disease because coronary artery complications can occur.",
    "distractor_analysis": {
      "A": "Measles typically features a respiratory prodrome, cough, coryza, conjunctivitis and a rash that begins on the face and spreads downwards. The extremity and oral findings here favour Kawasaki disease.",
      "C": "Scarlet fever usually accompanies group A streptococcal infection, with features such as a sore throat, a sandpaper-like rash and a strawberry tongue. The combination of prolonged fever, non-purulent conjunctivitis and extremity changes is more characteristic of Kawasaki disease.",
      "D": "Systemic juvenile idiopathic arthritis: This can cause persistent fever and a transient salmon-pink rash, often with arthritis. The specific mucocutaneous pattern in this vignette is more suggestive of Kawasaki disease.",
      "E": "Adenoviral infection: Adenovirus can cause fever, conjunctivitis and pharyngitis, making it a genuine differential diagnosis. However, the combination of oral changes, rash and extremity inflammation raises greater concern for Kawasaki disease."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q229",
    "subdomain": "Immunology",
    "topic": "DiGeorge syndrome",
    "difficulty": "Moderate",
    "stem": "A newborn develops hypocalcaemic seizures. Examination identifies a congenital cardiac outflow tract abnormality. Subsequent investigations show a markedly reduced number of circulating T lymphocytes. Which developmental abnormality best explains this combination?",
    "options": {
      "A": "Defective NADPH oxidase activity in phagocytes",
      "B": "Abnormal development of the third and fourth pharyngeal pouches",
      "C": "Failure of B-cell maturation due to a BTK mutation",
      "D": "Defective complement C5–C9 complex formation",
      "E": "Failure of immunoglobulin class switching"
    },
    "correct_letter": "B",
    "why_correct": "DiGeorge syndrome is commonly associated with a 22q11.2 deletion. Abnormal development of the thymus can cause T-cell deficiency, while parathyroid hypoplasia can cause hypocalcaemia. Congenital cardiac abnormalities may also occur. The combination of congenital cardiac abnormalities, hypocalcaemia and T-cell deficiency should raise suspicion of DiGeorge syndrome.",
    "distractor_analysis": {
      "A": "Defective NADPH oxidase activity in phagocytes: This causes chronic granulomatous disease, in which impaired oxidative killing predisposes to recurrent infections. It does not account for neonatal hypocalcaemia and congenital outflow tract abnormalities.",
      "C": "Failure of B-cell maturation due to a BTK mutation: This causes X-linked agammaglobulinaemia, characterised by profoundly reduced mature B cells and immunoglobulins. It does not explain the characteristic combination of congenital cardiac disease and hypocalcaemia.",
      "D": "Defective complement C5–C9 complex formation: Terminal complement deficiency predisposes particularly to recurrent Neisseria infections. It does not produce this developmental phenotype.",
      "E": "Failure of immunoglobulin class switching: This is a feature of hyper-IgM syndromes, in which immunoglobulin switching is impaired. It does not explain thymic hypoplasia with hypocalcaemia and congenital heart disease."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q230",
    "subdomain": "Genetics",
    "topic": "Cystic fibrosis",
    "difficulty": "Moderate",
    "stem": "A 17-year-old has had recurrent chest infections since childhood, chronic productive cough, nasal polyps and difficulty maintaining weight. Sputum cultures have repeatedly grown Pseudomonas aeruginosa. Which underlying defect is most likely responsible?",
    "options": {
      "A": "Defective NADPH oxidase activity in neutrophils",
      "B": "Defective ciliary dynein arms causing impaired mucociliary clearance",
      "C": "Impaired function of the epithelial sodium channel caused by an SCNN1A mutation",
      "D": "Deficient alpha-1 antitrypsin activity",
      "E": "Abnormal function of the CFTR chloride and bicarbonate channel"
    },
    "correct_letter": "E",
    "why_correct": "Cystic fibrosis results from pathogenic variants in the CFTR gene. Dysfunction of this epithelial channel disrupts chloride and bicarbonate transport and contributes to dehydrated secretions, impaired mucociliary clearance and recurrent respiratory infection. Cystic fibrosis is an inherited epithelial ion-transport disorder caused by pathogenic variants in CFTR.",
    "distractor_analysis": {
      "A": "Defective NADPH oxidase activity: This causes chronic granulomatous disease, leading to impaired phagocyte oxidative killing and recurrent infections, rather than the characteristic epithelial ion-transport defect.",
      "B": "Defective ciliary dynein arms: This is associated with primary ciliary dyskinesia, which can also cause recurrent respiratory infections and impaired mucociliary clearance. It is a different inherited disorder.",
      "C": "Impaired function of the epithelial sodium channel: Abnormal epithelial sodium channel function can affect airway surface hydration, but it is not the primary inherited defect in cystic fibrosis.",
      "D": "Alpha-1 antitrypsin deficiency predisposes to emphysema and may cause liver disease. It does not explain the characteristic multisystem presentation of cystic fibrosis."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q231",
    "subdomain": "Renal & urology",
    "topic": "Liddle syndrome",
    "difficulty": "Moderate",
    "stem": "A 24-year-old is investigated for persistent hypertension. Blood tests show hypokalaemia and metabolic alkalosis. Plasma renin activity and plasma aldosterone concentration are both suppressed. There is a strong family history of early-onset hypertension. Which mechanism best explains this presentation?",
    "options": {
      "A": "Impaired 11β-hydroxysteroid dehydrogenase type 2 activity",
      "B": "Constitutive activation of epithelial sodium channels in the distal nephron",
      "C": "Deficiency of 11β-hydroxylase causing accumulation of mineralocorticoid-active precursors",
      "D": "Autonomous aldosterone secretion by an adrenal adenoma",
      "E": "Excess renal potassium reabsorption caused by reduced distal sodium delivery"
    },
    "correct_letter": "B",
    "why_correct": "Liddle syndrome is usually caused by pathogenic variants affecting epithelial sodium channel regulation. Excess sodium reabsorption expands extracellular volume and suppresses renin and aldosterone. Increased distal sodium reabsorption also promotes potassium and hydrogen ion secretion, contributing to hypokalaemia and metabolic alkalosis. Hypertension with hypokalaemic metabolic alkalosis and suppressed renin and aldosterone suggests a low-renin, low-aldosterone mechanism; Liddle syndrome is one important cause.",
    "distractor_analysis": {
      "A": "Impaired 11β-hydroxysteroid dehydrogenase type 2: This can cause apparent mineralocorticoid excess because cortisol activates mineralocorticoid receptors in the kidney. It can produce low renin and aldosterone, but it is a different mechanism.",
      "C": "Deficiency of 11β-hydroxylase: This can cause accumulation of mineralocorticoid-active steroid precursors, hypertension and hypokalaemia. The diagnosis would require supporting steroid and clinical findings; it is not the best explanation of this classic familial pattern.",
      "D": "Autonomous aldosterone secretion: Primary aldosteronism can cause hypertension, hypokalaemia and metabolic alkalosis, but aldosterone is typically inappropriately elevated relative to renin rather than suppressed alongside renin.",
      "E": "Reduced sodium delivery to the distal nephron tends to limit renal potassium secretion rather than produce the characteristic potassium wasting of Liddle syndrome."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q232",
    "subdomain": "Renal & urology",
    "topic": "Haemolytic uraemic syndrome",
    "difficulty": "Moderate",
    "stem": "A 6-year-old develops pallor, reduced urine output and lethargy several days after an episode of bloody diarrhoea. Investigations show acute kidney injury, thrombocytopenia and anaemia with schistocytes on the blood film. The direct antiglobulin test is negative. Which diagnosis best accounts for these findings?",
    "options": {
      "A": "Immune thrombocytopenia",
      "B": "Disseminated intravascular coagulation",
      "C": "Aplastic anaemia",
      "D": "Warm autoimmune haemolytic anaemia",
      "E": "Haemolytic uraemic syndrome"
    },
    "correct_letter": "E",
    "why_correct": "The classic syndrome comprises microangiopathic haemolytic anaemia, thrombocytopenia and acute kidney injury. A preceding bloody diarrhoeal illness raises concern for Shiga toxin-associated disease, although not all cases follow diarrhoea.",
    "distractor_analysis": {
      "A": "Immune thrombocytopenia causes thrombocytopenia but does not ordinarily explain microangiopathic haemolytic anaemia with schistocytes and acute kidney injury.",
      "B": "Disseminated intravascular coagulation: DIC can cause thrombocytopenia, haemolysis and organ dysfunction, but usually occurs in an appropriate systemic context and is supported by coagulation abnormalities such as prolonged clotting times and reduced fibrinogen.",
      "C": "Aplastic anaemia causes bone marrow failure with cytopenias, rather than schistocyte-associated microangiopathic haemolysis and acute kidney injury.",
      "D": "Warm autoimmune haemolytic anaemia: This typically causes immune-mediated haemolysis, often with a positive direct antiglobulin test and spherocytes. It does not explain the full triad as well."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q233",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Takayasu arteritis",
    "difficulty": "Moderate",
    "stem": "A 29-year-old woman reports fatigue, weight loss and aching in both arms when carrying shopping. Her left radial pulse is weaker than the right, and blood pressure is substantially lower in the left arm. Inflammatory markers are raised. Which diagnosis is most likely?",
    "options": {
      "A": "Takayasu arteritis",
      "B": "Giant cell arteritis",
      "C": "Granulomatosis with polyangiitis",
      "D": "Antiphospholipid syndrome",
      "E": "Polyarteritis nodosa"
    },
    "correct_letter": "A",
    "why_correct": "This large-vessel vasculitis often affects younger women and can involve the aorta and its major branches. Arterial stenosis may produce unequal arm blood pressures, reduced pulses and limb claudication. In a younger patient, limb claudication with reduced pulses and unequal arm blood pressures should prompt consideration of Takayasu arteritis.",
    "distractor_analysis": {
      "B": "Giant cell arteritis affects older adults and commonly presents with a new headache, scalp tenderness, jaw claudication or visual symptoms. Large-vessel involvement can occur, but the patient's age and presentation favour Takayasu arteritis.",
      "C": "Granulomatosis with polyangiitis: This commonly affects the upper airways, lungs and kidneys, with findings such as chronic sinonasal disease, pulmonary lesions and glomerulonephritis.",
      "D": "Antiphospholipid syndrome: This is associated with thrombosis and certain pregnancy complications. It does not characteristically cause chronic inflammatory large-vessel stenosis with this pattern of pulse deficits.",
      "E": "Polyarteritis nodosa: This medium-vessel vasculitis can cause systemic symptoms, hypertension, neuropathy and abdominal pain. It does not classically produce the combination of major-branch pulse deficits and inter-arm blood-pressure differences."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q234",
    "subdomain": "Renal & urology",
    "topic": "Nephrogenic diabetes insipidus",
    "difficulty": "Moderate",
    "stem": "A patient receiving long-term lithium develops persistent thirst and passes large volumes of dilute urine. Plasma sodium is elevated, while urine osmolality remains low. Following specialist-supervised administration of desmopressin, urine osmolality shows little meaningful increase. Which mechanism best explains these findings?",
    "options": {
      "A": "Excess aldosterone secretion causing renal water loss",
      "B": "Reduced secretion of antidiuretic hormone from the posterior pituitary",
      "C": "Failure of proximal tubular glucose reabsorption",
      "D": "Renal resistance to the action of antidiuretic hormone",
      "E": "Increased secretion of atrial natriuretic peptide as the primary defect"
    },
    "correct_letter": "D",
    "why_correct": "Nephrogenic diabetes insipidus occurs when the kidneys cannot respond appropriately to antidiuretic hormone. Lithium is a recognised cause. The result is impaired urinary concentration, polyuria and risk of hypernatraemia if water intake cannot keep pace. In a patient taking lithium, polyuria with persistently dilute urine and little response to desmopressin suggests nephrogenic diabetes insipidus.",
    "distractor_analysis": {
      "A": "Excess aldosterone secretion: Primary aldosteronism principally causes hypertension and may cause hypokalaemia. It does not explain the characteristic failure to concentrate urine after desmopressin.",
      "B": "Reduced secretion of antidiuretic hormone: This describes central diabetes insipidus. In central disease, desmopressin generally increases urine concentration because the kidney can respond to the hormone.",
      "C": "Failure of proximal tubular glucose reabsorption: This can cause glycosuria and osmotic diuresis, but it would not be the best explanation for this presentation and desmopressin response.",
      "E": "Natriuretic peptides influence sodium and water excretion but do not explain the classic lithium-associated defect in the renal response to antidiuretic hormone."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q235",
    "subdomain": "Genetics",
    "topic": "Osteogenesis imperfecta",
    "difficulty": "Moderate",
    "stem": "A 10-year-old has had several fractures after minor trauma. Examination reveals blue sclerae and hearing impairment. There is no evidence of non-accidental injury, and the family history includes multiple relatives with recurrent fractures. Which underlying abnormality is most commonly responsible?",
    "options": {
      "A": "Defective dystrophin-associated linkage between muscle cytoskeleton and extracellular matrix",
      "B": "Impaired osteoclast function due to defective acidification of the resorption lacuna",
      "C": "Defective fibrillin-1 microfibril formation",
      "D": "Defective type I collagen synthesis or structure",
      "E": "Reduced intestinal calcium absorption caused by vitamin D deficiency"
    },
    "correct_letter": "D",
    "why_correct": "Osteogenesis imperfecta is a group of inherited connective-tissue disorders commonly involving type I collagen. Fragility fractures, blue sclerae and hearing impairment are characteristic features. Recurrent low-trauma fractures with blue sclerae and a compatible family history suggest osteogenesis imperfecta, commonly involving type I collagen.",
    "distractor_analysis": {
      "A": "Dystrophin defects cause muscular dystrophy, characterised primarily by progressive muscle weakness rather than the classic bone-fragility phenotype.",
      "B": "Impaired osteoclast acidification: Defective osteoclast-mediated bone resorption can cause osteopetrosis, with abnormally dense bone and possible marrow compromise. It does not fit the characteristic osteogenesis imperfecta phenotype.",
      "C": "Defective fibrillin-1 microfibril formation: This is associated with Marfan syndrome, which classically involves features such as aortic-root dilatation, lens dislocation and disproportionate skeletal growth.",
      "E": "Reduced intestinal calcium absorption: Vitamin D deficiency can cause defective bone mineralisation and osteomalacia or rickets. It does not best explain the inherited pattern with blue sclerae and hearing impairment."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q236",
    "subdomain": "Immunology",
    "topic": "X-linked hyper-IgM syndrome",
    "difficulty": "Moderate",
    "stem": "A boy has recurrent bacterial infections and develops an opportunistic infection. Investigations show markedly raised serum IgM with low IgG and IgA. His circulating B-cell count is preserved. Which molecular defect most directly explains the classic X-linked form of this disorder?",
    "options": {
      "A": "A mutation in CFTR impairing epithelial chloride transport",
      "B": "A mutation in CYBB impairing the phagocyte respiratory burst",
      "C": "A mutation in CD40LG impairing CD40-mediated B-cell activation and immunoglobulin class switching",
      "D": "A mutation in BTK preventing mature B-cell development",
      "E": "A deletion involving 22q11.2 causing thymic hypoplasia"
    },
    "correct_letter": "C",
    "why_correct": "The classic X-linked hyper-IgM syndrome results from defective CD40 ligand on activated T cells. Impaired CD40 signalling disrupts immunoglobulin class switching and other immune functions, producing low IgG and IgA with normal or raised IgM. Opportunistic infection is an important clue. Raised IgM with low IgG and IgA, preserved B cells and opportunistic infection should raise concern for a class-switching defect such as X-linked CD40 ligand deficiency.",
    "distractor_analysis": {
      "A": "CFTR mutation: This causes cystic fibrosis, an epithelial ion-transport disorder associated with chronic respiratory disease and other multisystem manifestations.",
      "B": "CYBB mutation: This commonly causes X-linked chronic granulomatous disease, in which defective NADPH oxidase impairs the phagocyte respiratory burst.",
      "D": "BTK mutation: This causes X-linked agammaglobulinaemia, in which mature B cells and immunoglobulin levels are profoundly reduced. The preserved B-cell count and raised IgM argue against this diagnosis.",
      "E": "22q11.2 deletion: This may cause DiGeorge syndrome, with thymic hypoplasia and T-cell deficiency, often alongside congenital cardiac abnormalities and hypocalcaemia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q237",
    "subdomain": "Respiratory",
    "topic": "Acute eosinophilic pneumonia",
    "difficulty": "Moderate",
    "stem": "A 32-year-old develops fever, dry cough and rapidly progressive breathlessness over several days. Oxygen saturation is low, and chest imaging shows bilateral diffuse pulmonary opacities. Bronchoalveolar lavage demonstrates marked eosinophilia. There is no history of asthma or a known chronic eosinophilic disorder. Which diagnosis best fits this acute presentation?",
    "options": {
      "A": "Idiopathic pulmonary fibrosis",
      "B": "Acute eosinophilic pneumonia",
      "C": "Pulmonary alveolar proteinosis",
      "D": "Chronic obstructive pulmonary disease exacerbation",
      "E": "Obstructive sleep apnoea"
    },
    "correct_letter": "B",
    "why_correct": "This can present with an acute febrile respiratory illness, hypoxaemia and diffuse pulmonary infiltrates. Eosinophilia in bronchoalveolar lavage is a key diagnostic clue; peripheral blood eosinophilia may be absent early in the illness. Acute febrile hypoxaemic respiratory illness with diffuse infiltrates and marked bronchoalveolar eosinophilia should prompt consideration of acute eosinophilic pneumonia.",
    "distractor_analysis": {
      "A": "Idiopathic pulmonary fibrosis: This typically causes a more chronic, progressive interstitial lung disease, rather than a rapidly evolving febrile illness with marked lavage eosinophilia.",
      "C": "Pulmonary alveolar proteinosis: This is associated with accumulation of surfactant-like material in the alveoli and may produce diffuse opacities, sometimes with a “crazy-paving” CT pattern. That imaging pattern is not specific, and marked lavage eosinophilia points elsewhere.",
      "D": "COPD exacerbations cause worsening respiratory symptoms in a patient with underlying airflow obstruction. They do not explain the characteristic acute diffuse infiltrates and marked bronchoalveolar eosinophilia.",
      "E": "Obstructive sleep apnoea: This causes recurrent upper-airway obstruction during sleep. It does not explain an acute febrile illness with hypoxaemia and diffuse pulmonary infiltrates."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q238",
    "subdomain": "Renal & urology",
    "topic": "Alport syndrome",
    "difficulty": "Moderate",
    "stem": "A 19-year-old man is referred because of persistent microscopic haematuria. His renal function has gradually deteriorated, and audiometry confirms sensorineural hearing loss. His maternal uncle developed kidney failure in early adulthood. Ophthalmological assessment identifies an abnormality of the lens. Which underlying defect best explains this presentation?",
    "options": {
      "A": "Defective dystrophin production",
      "B": "Defective cystic fibrosis transmembrane conductance regulator",
      "C": "Mutation affecting type I collagen",
      "D": "Mutation affecting type IV collagen",
      "E": "Mutation affecting fibrillin-1"
    },
    "correct_letter": "D",
    "why_correct": "Alport syndrome is caused by pathogenic variants affecting type IV collagen, a structural component of basement membranes. Renal disease, sensorineural hearing loss and ocular abnormalities are characteristic. X-linked disease commonly involves COL4A5. Persistent haematuria, progressive kidney disease, sensorineural hearing loss and compatible family history suggest Alport syndrome.",
    "distractor_analysis": {
      "A": "Dystrophin abnormalities cause muscular dystrophies, presenting predominantly with progressive muscle weakness.",
      "B": "CFTR dysfunction causes cystic fibrosis, with characteristic respiratory, gastrointestinal and other multisystem manifestations.",
      "C": "Type I collagen abnormalities are associated with osteogenesis imperfecta, which typically causes bone fragility and may cause blue sclerae and hearing impairment.",
      "E": "Fibrillin-1 abnormalities are associated with Marfan syndrome, including aortic-root disease, lens dislocation and skeletal features."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q239",
    "subdomain": "Immunology",
    "topic": "Hyper-IgE syndrome",
    "difficulty": "Moderate",
    "stem": "A 12-year-old has a history of recurrent staphylococcal skin abscesses, recurrent pneumonias and severe eczema. Examination identifies retained primary teeth and a characteristic coarse facial appearance. Serum IgE is markedly elevated. Which molecular abnormality is most strongly associated with the classic autosomal dominant form of this disorder?",
    "options": {
      "A": "Variants in CD40LG causing impaired immunoglobulin class switching",
      "B": "Variants in BTK causing failure of B-cell maturation",
      "C": "Deletion of 22q11.2 causing thymic hypoplasia",
      "D": "Variants in CYBB causing defective oxidative killing by phagocytes",
      "E": "Loss-of-function variants in STAT3"
    },
    "correct_letter": "E",
    "why_correct": "The classic autosomal dominant form of hyper-IgE syndrome is associated with impaired STAT3 signalling. Features can include eczema, recurrent infections, characteristic facies, retained primary teeth and skeletal abnormalities. Recurrent infections, eczema, markedly elevated IgE and retained primary teeth are clues to classic STAT3-associated hyper-IgE syndrome.",
    "distractor_analysis": {
      "A": "CD40LG variants: These cause the classic X-linked form of hyper-IgM syndrome, with impaired immunoglobulin class switching.",
      "B": "BTK variants: These cause X-linked agammaglobulinaemia, characterised by markedly reduced mature B cells and immunoglobulins.",
      "C": "22q11.2 deletion: This can cause DiGeorge syndrome, which is associated with thymic hypoplasia, T-cell deficiency, hypocalcaemia and congenital cardiac abnormalities.",
      "D": "CYBB variants: These can cause X-linked chronic granulomatous disease, which impairs the phagocyte respiratory burst and predisposes to recurrent infections."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q240",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Behçet disease",
    "difficulty": "Moderate",
    "stem": "A 31-year-old man has experienced recurrent painful oral ulcers for several years. He now reports recurrent genital ulceration and a painful red eye with photophobia. Examination confirms anterior uveitis. He has no evidence of a sexually transmitted infection. Which diagnosis best unifies these findings?",
    "options": {
      "A": "Behçet disease",
      "B": "Granulomatosis with polyangiitis",
      "C": "Rheumatoid arthritis",
      "D": "Reactive arthritis",
      "E": "Systemic lupus erythematosus"
    },
    "correct_letter": "A",
    "why_correct": "Behçet disease is a multisystem inflammatory disorder characterised by recurrent oral and genital ulceration and ocular inflammation, which may threaten vision. Other manifestations can include skin lesions, vascular disease and neurological involvement. Recurrent oral and genital ulceration with uveitis should prompt consideration of Behçet disease and urgent ophthalmological assessment when eye inflammation is suspected.",
    "distractor_analysis": {
      "B": "Granulomatosis with polyangiitis: This may cause upper-airway disease, pulmonary lesions, glomerulonephritis and ocular inflammation, but recurrent oral and genital ulcers are less characteristic of the syndrome described.",
      "C": "Rheumatoid arthritis primarily causes inflammatory synovitis. It does not explain this characteristic mucosal ulceration pattern.",
      "D": "Reactive arthritis follows certain gastrointestinal or genitourinary infections and can cause arthritis, enthesitis, conjunctivitis or uveitis, and mucocutaneous lesions. The longstanding recurrent oral and genital ulceration pattern favours Behçet disease.",
      "E": "Lupus can cause oral ulcers and ocular or systemic manifestations, but recurrent genital ulceration together with uveitis is more characteristic of Behçet disease."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q241",
    "subdomain": "Neurology",
    "topic": "Familial hypokalaemic periodic paralysis",
    "difficulty": "Moderate",
    "stem": "A 22-year-old man develops several episodes of painless, symmetrical limb weakness, usually after strenuous exercise followed by rest or after a carbohydrate-rich meal. During an episode, serum potassium is low. Sensation and consciousness are preserved, and strength returns as the episode resolves. Which mechanism is most closely associated with the classic inherited form of this condition?",
    "options": {
      "A": "Autoimmune destruction of peripheral myelin",
      "B": "A defect in mitochondrial DNA replication affecting multiple organs",
      "C": "Autoantibodies against acetylcholine receptors",
      "D": "Degeneration of upper and lower motor neurons",
      "E": "Pathogenic variants affecting skeletal-muscle voltage-gated calcium or sodium channel function"
    },
    "correct_letter": "E",
    "why_correct": "Familial hypokalaemic periodic paralysis is associated with skeletal-muscle ion-channel dysfunction, commonly involving CACNA1S or SCN4A. Attacks feature episodic weakness associated with low serum potassium. Recurrent reversible weakness associated with low potassium suggests hypokalaemic periodic paralysis; the inherited form commonly involves skeletal-muscle ion channels.",
    "distractor_analysis": {
      "A": "Autoimmune destruction of peripheral myelin: This can occur in Guillain–Barré syndrome, which usually produces an acute progressive neuropathy with reduced reflexes rather than recurrent potassium-associated episodes.",
      "B": "Mitochondrial disorders can cause muscle weakness and multisystem disease, but they do not best explain the characteristic episodic hypokalaemic attacks.",
      "C": "Autoantibodies against acetylcholine receptors: These are associated with myasthenia gravis, which causes fatigable weakness and is not characterised by episodic hypokalaemia.",
      "D": "Degeneration of upper and lower motor neurons: This describes the pathological process in motor neuron disease, which typically causes progressive rather than reversible episodic weakness."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q242",
    "subdomain": "Renal & urology",
    "topic": "Gordon syndrome",
    "difficulty": "Moderate",
    "stem": "A 35-year-old man is assessed for hypertension. Blood tests repeatedly show hyperkalaemia and a mild hyperchloraemic metabolic acidosis. Renal function is preserved, and plasma renin and aldosterone are suppressed. His father developed hypertension at a young age. Which abnormality best explains this presentation?",
    "options": {
      "A": "Increased sodium chloride reabsorption in the distal convoluted tubule",
      "B": "Defective proximal tubular glucose reabsorption",
      "C": "Excess aldosterone secretion from an adrenal adenoma",
      "D": "Constitutive activation of epithelial sodium channels in the collecting duct",
      "E": "Impaired secretion of antidiuretic hormone"
    },
    "correct_letter": "A",
    "why_correct": "Gordon syndrome, also called pseudohypoaldosteronism type II or familial hyperkalaemic hypertension, is associated with increased activity of the thiazide-sensitive sodium-chloride cotransporter pathway. The resulting physiology causes hypertension, hyperkalaemia and metabolic acidosis. Hypertension with hyperkalaemia and metabolic acidosis, especially with a family history, suggests Gordon syndrome; thiazide sensitivity is a useful distinguishing feature.",
    "distractor_analysis": {
      "B": "Defective proximal tubular glucose reabsorption: This can cause glycosuria and may occur as part of proximal tubular dysfunction, but it does not explain this inherited hypertension phenotype.",
      "C": "Excess aldosterone secretion: Primary aldosteronism usually causes hypertension with suppressed renin and inappropriately elevated aldosterone. Hypokalaemia and metabolic alkalosis are typical, rather than the hyperkalaemia and acidosis described here.",
      "D": "Constitutive activation of epithelial sodium channels: This is the characteristic mechanism of Liddle syndrome, which typically produces hypertension with hypokalaemic metabolic alkalosis and suppressed renin and aldosterone.",
      "E": "Impaired secretion of antidiuretic hormone: This causes central diabetes insipidus, characterised by impaired urine concentration and polyuria, not the characteristic electrolyte and acid–base pattern here."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q243",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Kallmann syndrome",
    "difficulty": "Moderate",
    "stem": "A 19-year-old man is referred because he has not undergone normal pubertal development. Examination shows small testes and sparse facial hair. Testosterone is low, with low or inappropriately normal luteinising hormone and follicle-stimulating hormone concentrations. He also reports that he has never been able to smell coffee or perfume. Which diagnosis best explains this combination?",
    "options": {
      "A": "Prolactinoma",
      "B": "Cushing syndrome",
      "C": "Primary testicular failure",
      "D": "Androgen insensitivity syndrome",
      "E": "Kallmann syndrome"
    },
    "correct_letter": "E",
    "why_correct": "Kallmann syndrome is a form of congenital hypogonadotropic hypogonadism associated with impaired development or migration of gonadotrophin-releasing hormone neurons and olfactory pathways. The combination of absent or impaired smell and deficient pubertal development is characteristic. Delayed puberty with low sex hormones and low or inappropriately normal gonadotrophins indicates central hypogonadism; associated anosmia strongly suggests Kallmann syndrome.",
    "distractor_analysis": {
      "A": "Prolactinoma: Hyperprolactinaemia can suppress the hypothalamic–pituitary–gonadal axis and cause hypogonadism. However, it does not explain congenital anosmia as well as Kallmann syndrome.",
      "B": "Cushing syndrome: Excess cortisol can suppress reproductive function, but it would not explain the characteristic combination of anosmia and congenital hypogonadotropic hypogonadism.",
      "C": "Primary gonadal failure typically causes low testosterone with raised LH and FSH because negative feedback from the gonads is reduced.",
      "D": "Androgen insensitivity syndrome: This results from impaired androgen receptor function in an individual with a 46,XY karyotype. The phenotype depends on the degree of androgen insensitivity and does not characteristically include anosmia with low gonadotrophins."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q244",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Leptospirosis",
    "difficulty": "Moderate",
    "stem": "A 28-year-old develops fever, severe headache and marked calf muscle pain several days after clearing floodwater from a contaminated building. Examination reveals conjunctival suffusion. Blood tests show acute kidney injury and hyperbilirubinaemia. Which infection is the most likely cause?",
    "options": {
      "A": "Acute hepatitis A",
      "B": "Enteric fever",
      "C": "Malaria",
      "D": "Dengue fever",
      "E": "Leptospirosis"
    },
    "correct_letter": "E",
    "why_correct": "Leptospirosis is a zoonotic infection that can be acquired through exposure to water or soil contaminated with infected animal urine. Fever, prominent calf myalgia, conjunctival suffusion and, in severe disease, renal and hepatic dysfunction are characteristic clues. Fever after contaminated-water exposure accompanied by calf myalgia, conjunctival suffusion and renal or hepatic dysfunction should raise suspicion of leptospirosis.",
    "distractor_analysis": {
      "A": "Hepatitis A may cause fever, malaise and jaundice, but does not characteristically cause severe calf myalgia and conjunctival suffusion with this exposure history.",
      "B": "Enteric fever typically follows ingestion of contaminated food or water and can cause sustained fever and gastrointestinal or systemic symptoms. The particular combination described is more suggestive of leptospirosis.",
      "C": "Malaria can cause fever and severe systemic illness after exposure in an endemic area. The exposure described and the characteristic calf pain with conjunctival suffusion favour leptospirosis; malaria must nevertheless be urgently considered when the travel history warrants it.",
      "D": "Dengue may cause fever, severe myalgia and thrombocytopenia, often after mosquito exposure. The water exposure, conjunctival suffusion and renal–hepatic pattern make leptospirosis more likely."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q245",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Hereditary fructose intolerance",
    "difficulty": "Moderate",
    "stem": "A 2-year-old develops recurrent vomiting, sweating and lethargy after eating fruit or foods containing sucrose. Episodes began after weaning. Investigations during an episode show hypoglycaemia and raised liver enzymes. The child has developed a strong aversion to sweet foods. Which enzyme deficiency best explains the presentation?",
    "options": {
      "A": "Glucose-6-phosphatase deficiency",
      "B": "Fructokinase deficiency",
      "C": "Aldolase B deficiency",
      "D": "Galactose-1-phosphate uridylyltransferase deficiency",
      "E": "Phenylalanine hydroxylase deficiency"
    },
    "correct_letter": "C",
    "why_correct": "Hereditary fructose intolerance is caused by deficiency of aldolase B. Fructose exposure leads to accumulation of fructose-1-phosphate, disrupting hepatic metabolism and glycogenolysis and causing hypoglycaemia, vomiting and possible liver injury. Recurrent illness after fructose or sucrose exposure, with hypoglycaemia and hepatic dysfunction, suggests hereditary fructose intolerance due to aldolase B deficiency.",
    "distractor_analysis": {
      "A": "Glucose-6-phosphatase deficiency: This causes glycogen storage disease type I, with fasting hypoglycaemia, hepatomegaly and metabolic abnormalities. The close relationship to fructose or sucrose ingestion is less characteristic.",
      "B": "Fructokinase deficiency: This causes essential fructosuria, a benign condition in which unmetabolised fructose is excreted in the urine; it does not cause hypoglycaemia or liver injury.",
      "D": "Galactose-1-phosphate uridylyltransferase deficiency: Classic galactosaemia can cause illness after milk feeding, including liver dysfunction and hypoglycaemia. It is associated with galactose exposure rather than specifically fructose and sucrose.",
      "E": "Phenylalanine hydroxylase deficiency: This causes phenylketonuria, which affects phenylalanine metabolism and is not the mechanism behind fructose-triggered hypoglycaemia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q246",
    "subdomain": "Renal & urology",
    "topic": "Medullary sponge kidney",
    "difficulty": "Moderate",
    "stem": "A 36-year-old has recurrent episodes of renal colic and microscopic haematuria. Imaging demonstrates multiple small calcifications within the renal medullary regions and ectatic collecting ducts. Renal function is preserved. Which structural abnormality best explains these findings?",
    "options": {
      "A": "Inherited deficiency of type IV collagen",
      "B": "Immune-complex deposition in the glomerular basement membrane",
      "C": "Bilateral renal artery stenosis",
      "D": "Cystic dilatation of collecting ducts in the renal medulla",
      "E": "Obstruction of the ureteropelvic junction"
    },
    "correct_letter": "D",
    "why_correct": "Medullary sponge kidney is a structural disorder involving dilatation of collecting ducts in the renal medulla. It can be associated with nephrocalcinosis, recurrent renal stones, haematuria and urinary tract infections, while renal function is often preserved. Recurrent renal stones or haematuria with medullary nephrocalcinosis and ectatic collecting ducts suggests medullary sponge kidney.",
    "distractor_analysis": {
      "A": "Inherited deficiency of type IV collagen: This is associated with Alport syndrome, which typically causes haematuria and may cause hearing and ocular abnormalities.",
      "B": "Glomerular immune-complex disease can cause haematuria and proteinuria, but it does not explain the characteristic structural changes described.",
      "C": "Bilateral renal artery stenosis: This can cause renovascular hypertension and, in some cases, deterioration in renal function after renin–angiotensin system blockade. It does not explain medullary collecting-duct ectasia and calcifications.",
      "E": "Obstruction of the ureteropelvic junction: This may cause hydronephrosis and impaired drainage from the renal pelvis. It does not account for diffuse medullary collecting-duct dilatation with nephrocalcinosis."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q247",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Hypophosphatasia",
    "difficulty": "Moderate",
    "stem": "A 42-year-old has a history of recurrent metatarsal stress fractures and chronic musculoskeletal pain. He lost several primary teeth prematurely in childhood. Investigations repeatedly show a low serum alkaline phosphatase concentration, despite evidence of impaired bone mineralisation. Which underlying abnormality best explains this presentation?",
    "options": {
      "A": "Excess osteoclast activity caused by increased RANKL signalling",
      "B": "Excess parathyroid hormone secretion",
      "C": "Deficiency of tissue-nonspecific alkaline phosphatase activity",
      "D": "Vitamin D deficiency causing secondary hyperparathyroidism",
      "E": "Defective type I collagen synthesis"
    },
    "correct_letter": "C",
    "why_correct": "Hypophosphatasia is caused by pathogenic variants in ALPL, which encodes tissue-nonspecific alkaline phosphatase. Reduced enzyme activity impairs mineralisation and may cause fractures, musculoskeletal symptoms and premature loss of teeth. Persistently low alkaline phosphatase is an important clue. Persistently low alkaline phosphatase with stress fractures, musculoskeletal symptoms or premature tooth loss should prompt consideration of hypophosphatasia.",
    "distractor_analysis": {
      "A": "Excess osteoclast activity: Increased bone resorption can occur in several metabolic and malignant bone disorders, but it does not explain the characteristic low alkaline phosphatase and premature tooth loss.",
      "B": "Excess parathyroid hormone secretion: Primary hyperparathyroidism commonly causes hypercalcaemia and may cause skeletal disease, but alkaline phosphatase is not characteristically persistently low as a defining feature.",
      "D": "Vitamin D deficiency can cause defective mineralisation and secondary hyperparathyroidism, but alkaline phosphatase is generally raised rather than persistently low.",
      "E": "Defective type I collagen synthesis: This is associated with osteogenesis imperfecta, which typically causes bone fragility and may cause blue sclerae and hearing impairment."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q248",
    "subdomain": "Renal & urology",
    "topic": "Bartter syndrome",
    "difficulty": "Moderate",
    "stem": "A 17-year-old is investigated for recurrent muscle cramps and polyuria. Blood tests show hypokalaemic metabolic alkalosis, raised plasma renin activity and raised aldosterone. Blood pressure is normal, and urinary calcium excretion is increased. Which renal tubular defect best explains these findings?",
    "options": {
      "A": "Impaired aldosterone synthesis in the adrenal cortex",
      "B": "Defective proximal tubular bicarbonate reabsorption",
      "C": "Impaired sodium-potassium-2-chloride cotransport in the thick ascending limb",
      "D": "Constitutive activation of epithelial sodium channels in the collecting duct",
      "E": "Impaired sodium-chloride cotransport in the distal convoluted tubule"
    },
    "correct_letter": "C",
    "why_correct": "Bartter syndrome comprises inherited disorders affecting salt reabsorption in the thick ascending limb. Salt loss activates the renin–angiotensin–aldosterone system, contributing to hypokalaemia and metabolic alkalosis. Increased urinary calcium excretion is a useful distinguishing clue in the classic forms. Bartter syndrome and Gitelman syndrome both cause renal salt wasting and hypokalaemic metabolic alkalosis; urinary calcium and magnesium findings help distinguish them.",
    "distractor_analysis": {
      "A": "Impaired aldosterone synthesis: Reduced aldosterone activity tends to impair potassium and hydrogen ion secretion, potentially causing hyperkalaemia and metabolic acidosis rather than this pattern.",
      "B": "Defective proximal bicarbonate reabsorption: This can cause proximal renal tubular acidosis, which produces metabolic acidosis rather than metabolic alkalosis.",
      "D": "Constitutive activation of epithelial sodium channels: This causes Liddle syndrome, which usually produces hypertension with suppressed renin and aldosterone.",
      "E": "Impaired sodium-chloride cotransport: This is the characteristic tubular defect in Gitelman syndrome, which commonly produces hypokalaemic metabolic alkalosis but is usually associated with hypomagnesaemia and reduced urinary calcium excretion."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q249",
    "subdomain": "Haematology & oncology",
    "topic": "Glanzmann thrombasthenia",
    "difficulty": "Moderate",
    "stem": "A 9-year-old has recurrent epistaxis, gingival bleeding and prolonged bleeding after minor cuts. The platelet count is normal, as are the prothrombin time and activated partial thromboplastin time. Platelet aggregation testing shows impaired aggregation in response to most physiological agonists, but agglutination in response to ristocetin is preserved. Which defect is most likely?",
    "options": {
      "A": "Deficiency of von Willebrand factor",
      "B": "Deficiency of coagulation factor VIII",
      "C": "Deficiency or dysfunction of platelet glycoprotein IIb/IIIa",
      "D": "Defective fibrinogen synthesis by the liver",
      "E": "Deficiency of platelet glycoprotein Ib"
    },
    "correct_letter": "C",
    "why_correct": "Glanzmann thrombasthenia impairs platelet aggregation because the platelet integrin αIIbβ3 cannot function normally in fibrinogen-mediated platelet bridging. Platelet count and routine coagulation tests may be normal. Mucocutaneous bleeding with a normal platelet count and preserved ristocetin response but defective platelet aggregation suggests Glanzmann thrombasthenia.",
    "distractor_analysis": {
      "A": "Von Willebrand disease primarily impairs platelet adhesion and can reduce factor VIII stability. The platelet aggregation pattern described is more characteristic of Glanzmann thrombasthenia.",
      "B": "Deficiency of factor VIII: Haemophilia A causes a coagulation defect, typically with an isolated prolonged aPTT, and more often produces deep tissue bleeding or haemarthroses.",
      "D": "Defective fibrinogen synthesis: A significant fibrinogen deficiency can impair clot formation and may alter coagulation testing. It does not explain the characteristic platelet receptor defect.",
      "E": "Deficiency of platelet glycoprotein Ib: This is associated with Bernard–Soulier syndrome, which impairs platelet adhesion and typically causes thrombocytopenia with unusually large platelets. Ristocetin-induced agglutination is impaired."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q250",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Resistance to thyroid hormone beta",
    "difficulty": "Moderate",
    "stem": "A 24-year-old is investigated after routine blood tests repeatedly show raised free thyroxine and free triiodothyronine concentrations. Thyroid-stimulating hormone is not suppressed. The patient has few symptoms of thyrotoxicosis, and a first-degree relative has a similar biochemical pattern. Which diagnosis best explains these findings?",
    "options": {
      "A": "A toxic thyroid adenoma",
      "B": "Destructive thyroiditis",
      "C": "Primary hypothyroidism",
      "D": "Graves disease",
      "E": "Resistance to thyroid hormone beta"
    },
    "correct_letter": "E",
    "why_correct": "This inherited disorder commonly results from pathogenic variants in THRB. Reduced tissue responsiveness to thyroid hormones can produce raised circulating thyroid hormone concentrations with a non-suppressed TSH. Clinical manifestations vary between tissues and individuals. Raised free thyroid hormones with non-suppressed TSH require careful evaluation; resistance to thyroid hormone and a TSH-secreting pituitary tumour are important differential diagnoses, alongside assay interference.",
    "distractor_analysis": {
      "A": "A toxic thyroid adenoma: Autonomous thyroid hormone production typically suppresses TSH. A familial pattern with persistently non-suppressed TSH suggests an alternative explanation.",
      "B": "Thyroiditis can cause a transient thyrotoxic phase, but TSH is usually suppressed when circulating thyroid hormone concentrations are substantially raised.",
      "C": "Primary thyroid failure typically produces low free T4 and raised TSH, rather than elevated free T4 and T3.",
      "D": "Graves disease: In typical untreated Graves disease, raised thyroid hormones suppress TSH. The non-suppressed TSH and familial pattern are not typical of uncomplicated Graves disease."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q251",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Familial dysbetalipoproteinaemia",
    "difficulty": "Moderate",
    "stem": "A 46-year-old man is investigated for mixed hyperlipidaemia. Both plasma cholesterol and triglyceride concentrations are markedly raised. Examination reveals yellow-orange deposits in the palmar creases and tuberous xanthomas over the elbows. Further testing supports accumulation of cholesterol-rich remnant lipoproteins. Which underlying abnormality is most closely associated with this disorder?",
    "options": {
      "A": "Deficiency of apolipoprotein B-100 synthesis",
      "B": "Increased hepatic uptake of chylomicron remnants",
      "C": "Complete absence of LDL receptors",
      "D": "Impaired apolipoprotein E-mediated clearance of remnant lipoproteins",
      "E": "Increased activity of lipoprotein lipase"
    },
    "correct_letter": "D",
    "why_correct": "Familial dysbetalipoproteinaemia is classically associated with apoE dysfunction, commonly the apoE2/E2 genotype in the appropriate clinical context. Impaired remnant clearance leads to accumulation of cholesterol-rich remnant particles and mixed hyperlipidaemia. Mixed hyperlipidaemia with palmar-crease xanthomas should prompt consideration of familial dysbetalipoproteinaemia and remnant-lipoprotein accumulation.",
    "distractor_analysis": {
      "A": "Deficiency of apolipoprotein B-100 synthesis: ApoB abnormalities can affect lipoprotein production and transport, but this is not the characteristic mechanism of familial dysbetalipoproteinaemia.",
      "B": "Increased remnant uptake would tend to improve clearance rather than explain remnant accumulation.",
      "C": "Complete absence of LDL receptors: Severe LDL receptor dysfunction is associated with familial hypercholesterolaemia, in which LDL cholesterol is markedly elevated. It does not specifically explain the remnant-lipoprotein pattern and palmar xanthomas.",
      "E": "Increased triglyceride-rich lipoprotein hydrolysis would not explain accumulation of remnant particles due to impaired clearance."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q252",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Zollinger–Ellison syndrome",
    "difficulty": "Moderate",
    "stem": "A 38-year-old man has recurrent peptic ulceration despite appropriate treatment. Endoscopy identifies multiple ulcers, including ulcers beyond the duodenal bulb. He also reports chronic watery diarrhoea. Gastric acid secretion is markedly increased, and fasting serum gastrin is substantially elevated. Which diagnosis best explains this presentation?",
    "options": {
      "A": "Autoimmune metaplastic atrophic gastritis",
      "B": "Zollinger–Ellison syndrome",
      "C": "Coeliac disease",
      "D": "Gastric antral G-cell hyperplasia due to chronic achlorhydria",
      "E": "Lactase deficiency"
    },
    "correct_letter": "B",
    "why_correct": "A gastrin-secreting neuroendocrine tumour causes excessive gastric acid production. This can lead to recurrent or multiple ulcers, including distal duodenal ulcers, and diarrhoea due to the effects of acid on intestinal function. Recurrent or multiple peptic ulcers with diarrhoea and markedly elevated gastrin should raise suspicion of Zollinger–Ellison syndrome, but gastrin must be interpreted in the context of gastric acidity and medications.",
    "distractor_analysis": {
      "A": "Autoimmune metaplastic atrophic gastritis: This causes loss of acid-producing parietal cells, leading to reduced gastric acid and compensatory hypergastrinaemia. It does not explain markedly increased acid secretion.",
      "C": "Coeliac disease can cause chronic diarrhoea and malabsorption but does not explain the combination of markedly increased acid secretion and pronounced hypergastrinaemia.",
      "D": "G-cell hyperplasia due to chronic achlorhydria: Reduced gastric acidity can cause compensatory increases in gastrin. The acid-secretion pattern in the vignette argues against this explanation.",
      "E": "Lactase deficiency can cause osmotic diarrhoea after lactose ingestion but does not cause recurrent peptic ulcers or hypergastrinaemia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q253",
    "subdomain": "Genetics",
    "topic": "Neurofibromatosis type 1",
    "difficulty": "Moderate",
    "stem": "A 14-year-old is referred because of multiple café-au-lait macules, axillary freckling and several cutaneous neurofibromas. Ophthalmological examination identifies Lisch nodules. Which gene is associated with this disorder?",
    "options": {
      "A": "RET",
      "B": "NF2",
      "C": "VHL",
      "D": "NF1",
      "E": "TSC1"
    },
    "correct_letter": "D",
    "why_correct": "Neurofibromatosis type 1 is an autosomal dominant disorder caused by pathogenic variants in NF1, which encodes neurofibromin, a negative regulator of RAS signalling. Café-au-lait macules, axillary or inguinal freckling, neurofibromas and Lisch nodules are characteristic findings. Café-au-lait macules, intertriginous freckling, neurofibromas and Lisch nodules strongly suggest neurofibromatosis type 1.",
    "distractor_analysis": {
      "A": "RET: Pathogenic variants in RET are associated with multiple endocrine neoplasia type 2 and some cases of Hirschsprung disease.",
      "B": "NF2-related schwannomatosis is associated with schwannomas, classically bilateral vestibular schwannomas, and other nervous-system tumours. It does not produce the classic NF1 skin phenotype.",
      "C": "VHL: Von Hippel–Lindau disease predisposes to tumours and cysts, including retinal and central nervous system haemangioblastomas and renal cell carcinoma.",
      "E": "TSC1 variants can cause tuberous sclerosis complex, which is associated with findings such as hypomelanotic macules, facial angiofibromas and cortical tubers."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q254",
    "subdomain": "Renal & urology",
    "topic": "Cerebral salt wasting",
    "difficulty": "Moderate",
    "stem": "A 54-year-old is recovering from a subarachnoid haemorrhage. Over the following days, serum sodium falls and urine sodium concentration is high. He has polyuria, postural hypotension and clinical evidence of reduced circulating volume. Which mechanism best explains the hyponatraemia?",
    "options": {
      "A": "Pure water loss caused by central diabetes insipidus",
      "B": "Excess aldosterone secretion causing sodium retention",
      "C": "Renal sodium loss causing extracellular volume depletion and secondary water retention",
      "D": "Water retention caused by inappropriate antidiuretic hormone secretion, with clinical euvolaemia",
      "E": "Excess cortisol secretion causing mineralocorticoid receptor activation"
    },
    "correct_letter": "C",
    "why_correct": "Cerebral salt wasting is characterised by renal sodium loss with extracellular volume depletion in the setting of intracranial disease. The resulting volume depletion stimulates mechanisms that conserve water, contributing to hyponatraemia. In a patient with intracranial disease and hyponatraemia, assess volume status carefully; cerebral salt wasting and SIADH have overlapping laboratory findings but different volume states and management implications.",
    "distractor_analysis": {
      "A": "Central diabetes insipidus: This causes deficient antidiuretic hormone activity, producing large volumes of dilute urine and a risk of hypernatraemia rather than this characteristic sodium-loss presentation.",
      "B": "Aldosterone promotes renal sodium retention and potassium secretion. It does not explain persistent renal sodium loss with volume depletion.",
      "D": "SIADH can cause hypotonic hyponatraemia with inappropriately concentrated urine and urinary sodium excretion, but patients are generally clinically euvolaemic. The evidence of volume depletion favours cerebral salt wasting in this vignette.",
      "E": "Excess cortisol secretion: Cushing syndrome can cause hypertension and metabolic disturbances but does not explain this typical clinical pattern after subarachnoid haemorrhage."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q255",
    "subdomain": "Neurology",
    "topic": "Anti-NMDA receptor encephalitis",
    "difficulty": "Moderate",
    "stem": "A 23-year-old woman develops a febrile illness followed by rapidly progressive behavioural changes, paranoia and short-term memory impairment. Over the following week, she develops seizures, abnormal involuntary movements and episodes of reduced consciousness. Cerebrospinal fluid shows lymphocytic pleocytosis. Which mechanism best explains the underlying disorder?",
    "options": {
      "A": "Antibodies directed against presynaptic voltage-gated calcium channels",
      "B": "Antibodies directed against postsynaptic acetylcholine receptors at the neuromuscular junction",
      "C": "Antibodies directed against myelin oligodendrocyte glycoprotein",
      "D": "Antibodies directed against the GluN1 subunit of the NMDA receptor",
      "E": "Antibodies directed against aquaporin-4 water channels"
    },
    "correct_letter": "D",
    "why_correct": "Anti-NMDA receptor encephalitis is an autoimmune encephalitis associated with antibodies against the GluN1 subunit of the NMDA receptor. It can cause psychiatric symptoms, cognitive dysfunction, seizures, movement disorders and impaired consciousness. Some cases are associated with an underlying tumour, particularly an ovarian teratoma. Rapidly evolving psychiatric symptoms accompanied by seizures, movement abnormalities or reduced consciousness should raise concern for autoimmune encephalitis.",
    "distractor_analysis": {
      "A": "Presynaptic voltage-gated calcium-channel antibodies: These are associated with Lambert–Eaton myasthenic syndrome, which typically causes proximal weakness and reduced reflexes.",
      "B": "Postsynaptic acetylcholine receptor antibodies: These are associated with myasthenia gravis, which causes fluctuating, fatigable skeletal muscle weakness rather than a rapidly progressive encephalitic syndrome.",
      "C": "Myelin oligodendrocyte glycoprotein antibodies: MOG-associated disease can cause optic neuritis, myelitis and certain encephalitic presentations, but it is not the mechanism defining anti-NMDA receptor encephalitis.",
      "E": "Aquaporin-4 antibodies: These are associated with neuromyelitis optica spectrum disorder, which typically causes optic neuritis, myelitis and related neurological syndromes."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q256",
    "subdomain": "Genetics",
    "topic": "Pseudoxanthoma elasticum",
    "difficulty": "Moderate",
    "stem": "A 35-year-old woman is found to have yellowish papules clustered over the sides of her neck and in flexural skin. Ophthalmological examination reveals angioid streaks. She has a history of easy bruising and is being investigated for premature vascular disease. Which underlying abnormality is most closely associated with this condition?",
    "options": {
      "A": "Abnormal mineralisation and fragmentation of elastic fibres associated with ABCC6 variants",
      "B": "Defective type I collagen synthesis",
      "C": "Defective fibrillin-1 microfibril formation",
      "D": "Autoimmune destruction of dermal collagen",
      "E": "Impaired lysosomal degradation of glycosaminoglycans"
    },
    "correct_letter": "A",
    "why_correct": "Pseudoxanthoma elasticum is commonly associated with pathogenic variants in ABCC6. It causes progressive mineralisation and fragmentation of elastic fibres, affecting the skin, Bruch's membrane in the eye and blood vessels. Flexural yellow papules, angioid streaks and premature vascular complications suggest pseudoxanthoma elasticum.",
    "distractor_analysis": {
      "B": "Defective type I collagen synthesis: This is associated with osteogenesis imperfecta, which typically presents with bone fragility and may cause blue sclerae and hearing impairment.",
      "C": "Defective fibrillin-1 formation: This is associated with Marfan syndrome, which can cause aortic-root dilatation, lens dislocation and characteristic skeletal features.",
      "D": "Autoimmune connective-tissue disorders can affect skin and other organs but do not explain the characteristic combination of angioid streaks and mineralised elastic fibres.",
      "E": "Impaired lysosomal degradation of glycosaminoglycans: This describes the broad mechanism of mucopolysaccharidoses, a group of lysosomal storage disorders with distinct multisystem manifestations."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q257",
    "subdomain": "Renal & urology",
    "topic": "Cystinuria",
    "difficulty": "Moderate",
    "stem": "A 19-year-old has experienced recurrent renal colic since adolescence. Urinalysis shows crystals with a characteristic hexagonal appearance. Which underlying defect best explains the condition?",
    "options": {
      "A": "Increased urinary calcium excretion caused by parathyroid hormone excess",
      "B": "Defective renal acidification causing persistently alkaline urine",
      "C": "Reduced renal urate excretion due to impaired proximal tubular transport",
      "D": "Impaired proximal tubular and intestinal transport of cystine and dibasic amino acids",
      "E": "Excess endogenous oxalate production due to a hepatic enzyme deficiency"
    },
    "correct_letter": "D",
    "why_correct": "Cystinuria is an inherited transport disorder affecting cystine and dibasic amino acids, classically involving the proximal renal tubule and intestinal epithelium. Poor cystine solubility in urine predisposes to recurrent stones. Recurrent early-onset renal stones with hexagonal urinary crystals strongly suggest cystinuria.",
    "distractor_analysis": {
      "A": "Increased urinary calcium excretion: Hypercalciuria can predispose to calcium-containing stones, but it does not explain cystine stone composition or hexagonal cystine crystals.",
      "B": "Defective renal acidification: Distal renal tubular acidosis can predispose to calcium phosphate stones, often in association with persistently alkaline urine. It does not cause cystinuria.",
      "C": "Reduced urate excretion: This can contribute to hyperuricaemia or uric acid stones, depending on the underlying disturbance, but it does not explain cystine crystals.",
      "E": "Excess endogenous oxalate production: This is associated with primary hyperoxaluria, which causes calcium oxalate stones and may lead to nephrocalcinosis."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q258",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Bile acid diarrhoea",
    "difficulty": "Moderate",
    "stem": "A 42-year-old has chronic watery diarrhoea, urgency and occasional faecal incontinence. Colonoscopy and colonic biopsies are unremarkable. Symptoms began after a cholecystectomy. There is no evidence of infection, inflammatory bowel disease or coeliac disease. Which mechanism best explains the most likely diagnosis?",
    "options": {
      "A": "Failure of pancreatic acinar cells to secrete digestive enzymes",
      "B": "Autoimmune injury to small-intestinal villi",
      "C": "Excess bile acids reaching the colon, stimulating fluid secretion and motility",
      "D": "Impaired intestinal lactase activity",
      "E": "Autoimmune destruction of gastric parietal cells"
    },
    "correct_letter": "C",
    "why_correct": "Bile acid diarrhoea can result from excessive delivery of bile acids to the colon or impaired ileal bile acid reabsorption. Colonic bile acids stimulate secretion and motility, causing watery diarrhoea and urgency. It can occur after cholecystectomy. Chronic watery diarrhoea after cholecystectomy should prompt consideration of bile acid diarrhoea, even when colonoscopy is normal.",
    "distractor_analysis": {
      "A": "Pancreatic exocrine insufficiency typically causes maldigestion, which may present with bulky, greasy stools, weight loss and fat-soluble vitamin deficiency.",
      "B": "Autoimmune injury to small-intestinal villi: This is the mechanism of coeliac disease, which may cause diarrhoea and malabsorption but is not supported by the negative investigations in the vignette.",
      "D": "Lactase deficiency causes osmotic diarrhoea, bloating and flatulence associated with lactose ingestion.",
      "E": "Autoimmune destruction of gastric parietal cells: This causes autoimmune gastritis, which can result in vitamin B12 deficiency and iron deficiency. It does not explain this characteristic diarrhoeal mechanism."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q259",
    "subdomain": "Neurology",
    "topic": "Myotonia congenita",
    "difficulty": "Moderate",
    "stem": "A 20-year-old man reports difficulty releasing his grip after firmly holding an object. The stiffness improves after he repeatedly opens and closes his hands. Examination reveals percussion myotonia, but muscle strength is largely preserved and there is no evidence of progressive muscle wasting. Which underlying defect is most likely?",
    "options": {
      "A": "Deficiency of dystrophin",
      "B": "Abnormal skeletal-muscle chloride channel function",
      "C": "Degeneration of upper and lower motor neurons",
      "D": "Abnormal mitochondrial oxidative phosphorylation",
      "E": "Autoimmune destruction of acetylcholine receptors"
    },
    "correct_letter": "B",
    "why_correct": "Myotonia congenita is associated with pathogenic variants in CLCN1, which encodes a skeletal-muscle chloride channel. Reduced chloride conductance increases muscle membrane excitability and causes delayed relaxation after contraction. Delayed muscle relaxation that improves with repeated movement suggests myotonia; myotonia congenita is associated with CLCN1 variants.",
    "distractor_analysis": {
      "A": "Deficiency of dystrophin: This causes Duchenne or Becker muscular dystrophy, characterised by progressive muscle weakness and muscle damage rather than isolated classic myotonia with preserved strength.",
      "C": "Degeneration of upper and lower motor neurons: This is the pathological process in motor neuron disease, which typically causes progressive weakness and other motor signs.",
      "D": "Mitochondrial disorders can cause myopathy and exercise intolerance but do not explain the characteristic chloride-channel-related myotonia.",
      "E": "Autoimmune destruction of acetylcholine receptors: This is associated with myasthenia gravis, which causes fatigable weakness rather than delayed muscle relaxation."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q260",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Familial hypobetalipoproteinaemia",
    "difficulty": "Moderate",
    "stem": "A 29-year-old woman is found to have very low LDL cholesterol and apolipoprotein B concentrations. She has mild hepatic steatosis but no evidence of malnutrition, hyperthyroidism or advanced liver disease. A first-degree relative has similarly low LDL cholesterol. Which mechanism best explains the classic inherited form of familial hypobetalipoproteinaemia?",
    "options": {
      "A": "Severe impairment of lipoprotein lipase activity",
      "B": "Impaired apolipoprotein E-mediated clearance of remnant lipoproteins",
      "C": "Reduced production or secretion of apolipoprotein B-containing lipoproteins",
      "D": "Complete absence of LDL receptors",
      "E": "Increased intestinal cholesterol absorption"
    },
    "correct_letter": "C",
    "why_correct": "Familial hypobetalipoproteinaemia is commonly associated with variants affecting APOB. Reduced apoB-containing lipoprotein production or secretion can result in very low LDL cholesterol and may contribute to hepatic fat accumulation. Very low LDL cholesterol and apoB, particularly with a family history and hepatic steatosis, should prompt consideration of familial hypobetalipoproteinaemia.",
    "distractor_analysis": {
      "A": "Severe impairment of lipoprotein lipase activity: This is associated with familial chylomicronaemia syndrome, characterised by extreme hypertriglyceridaemia and risk of pancreatitis.",
      "B": "Impaired apolipoprotein E-mediated remnant clearance: This is associated with familial dysbetalipoproteinaemia, which typically causes remnant accumulation and mixed hyperlipidaemia.",
      "D": "Complete absence of LDL receptors: This causes severe familial hypercholesterolaemia, with markedly raised LDL cholesterol rather than very low concentrations.",
      "E": "Increased cholesterol absorption does not explain the characteristic inherited reduction in apoB and LDL concentrations."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q261",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Glucagonoma",
    "difficulty": "Moderate",
    "stem": "A 54-year-old woman presents with weight loss, new-onset diabetes mellitus and a recurrent painful rash affecting the groin, perineum and lower abdomen. The rash consists of erythematous plaques with superficial blistering and crusting; lesions heal centrally while new lesions develop at the edges. Blood tests show a raised fasting plasma glucose. Abdominal imaging identifies a pancreatic tail mass. Which hormone is most likely being secreted in excess?",
    "options": {
      "A": "Vasoactive intestinal peptide (VIP)",
      "B": "Gastrin",
      "C": "Somatostatin",
      "D": "Glucagon",
      "E": "Insulin"
    },
    "correct_letter": "D",
    "why_correct": "Glucagonoma can cause diabetes, weight loss and necrolytic migratory erythema, a characteristic recurrent inflammatory rash associated with glucagon excess.",
    "distractor_analysis": {
      "A": "VIP: VIPoma classically causes profuse watery diarrhoea, hypokalaemia and reduced gastric acid secretion.",
      "B": "Gastrin: Gastrinomas cause gastric acid hypersecretion, recurrent peptic ulceration and sometimes diarrhoea.",
      "C": "Somatostatin: Somatostatinoma may cause diabetes, gallstones and steatorrhoea, rather than the characteristic rash described.",
      "E": "Insulin: Insulinoma causes endogenous hyperinsulinaemic hypoglycaemia, often with sweating, tremor, confusion or other neuroglycopenic symptoms."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q262",
    "subdomain": "Endocrinology & diabetes",
    "topic": "VIPoma",
    "difficulty": "Moderate",
    "stem": "A 46-year-old man reports several weeks of profuse watery diarrhoea, including overnight. He has lost 8 kg and feels increasingly weak. Investigations show hypokalaemia and a normal-anion-gap metabolic acidosis. Stool cultures are negative, and the diarrhoea persists despite fasting. Imaging reveals a pancreatic mass. Which mechanism best explains this presentation?",
    "options": {
      "A": "Inhibition of intestinal bile acid reabsorption",
      "B": "Excess gastrin stimulating gastric acid secretion",
      "C": "Excess insulin causing recurrent hypoglycaemia",
      "D": "Pancreatic exocrine insufficiency causing fat malabsorption",
      "E": "Excess vasoactive intestinal peptide stimulating intestinal secretion"
    },
    "correct_letter": "E",
    "why_correct": "VIP increases intestinal fluid and electrolyte secretion. A VIP-secreting tumour can cause watery diarrhoea, potassium depletion and bicarbonate loss, producing metabolic acidosis. Persistent watery diarrhoea with hypokalaemia and bicarbonate loss suggests secretory diarrhoea; a pancreatic mass raises the possibility of a VIPoma.",
    "distractor_analysis": {
      "A": "Bile acid diarrhoea can cause watery stools but does not typically explain the combination of severe electrolyte depletion and a pancreatic neuroendocrine tumour.",
      "B": "Gastrin excess causes acid hypersecretion and recurrent ulceration; it does not characteristically produce this profound secretory diarrhoea syndrome.",
      "C": "Insulin excess causes hypoglycaemia, not persistent high-volume secretory diarrhoea.",
      "D": "Pancreatic exocrine insufficiency: This typically produces maldigestion and steatorrhoea, rather than fasting-persistent high-volume watery diarrhoea with this biochemical pattern."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q263",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Cryoglobulinaemic vasculitis",
    "difficulty": "Moderate",
    "stem": "A 61-year-old man presents with recurrent palpable purpura over his lower legs, arthralgia and peripheral sensory neuropathy. He also has microscopic haematuria and proteinuria. Investigations reveal a low C4 concentration and circulating cryoglobulins. Further testing identifies chronic hepatitis C infection. Which mechanism most directly explains this combination?",
    "options": {
      "A": "Immune-complex deposition involving circulating cryoglobulins",
      "B": "IgE-mediated mast-cell activation",
      "C": "Antibodies against presynaptic voltage-gated calcium channels",
      "D": "Defective neutrophil NADPH oxidase activity",
      "E": "Anti-glomerular basement membrane antibodies"
    },
    "correct_letter": "A",
    "why_correct": "Mixed cryoglobulinaemic vasculitis is associated with hepatitis C and may affect small vessels, causing palpable purpura, arthralgia, neuropathy and glomerulonephritis. Complement consumption, particularly low C4, is a useful clue. Palpable purpura, neuropathy, renal abnormalities, low C4 and cryoglobulins in a patient with hepatitis C strongly suggest cryoglobulinaemic vasculitis.",
    "distractor_analysis": {
      "B": "IgE-mediated mast-cell activation: This underlies immediate allergic reactions and does not explain immune-complex vasculitis with renal involvement.",
      "C": "Presynaptic calcium-channel antibodies: These are associated with Lambert–Eaton myasthenic syndrome, causing proximal weakness and autonomic symptoms.",
      "D": "NADPH oxidase defect: This causes chronic granulomatous disease, characterised by recurrent infections with particular bacteria and fungi.",
      "E": "Anti-GBM disease causes pulmonary–renal disease, often with rapidly progressive glomerulonephritis and sometimes pulmonary haemorrhage. It does not characteristically produce this purpura–arthralgia–neuropathy syndrome."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q264",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "Polyarteritis nodosa",
    "difficulty": "Moderate",
    "stem": "A 49-year-old man presents with weight loss, livedo reticularis, abdominal pain after meals, hypertension and asymmetric peripheral neuropathy. Hepatitis B surface antigen is positive. Urinalysis shows no significant glomerular haematuria, and chest imaging shows no pulmonary haemorrhage. Which diagnosis is most consistent with this presentation?",
    "options": {
      "A": "Microscopic polyangiitis",
      "B": "IgA vasculitis",
      "C": "Eosinophilic granulomatosis with polyangiitis",
      "D": "Polyarteritis nodosa",
      "E": "Granulomatosis with polyangiitis"
    },
    "correct_letter": "D",
    "why_correct": "This necrotising vasculitis affects medium-sized arteries and can cause mesenteric ischaemia, hypertension, livedo and mononeuritis multiplex. Hepatitis B is a recognised association. Glomerulonephritis and pulmonary capillaritis are not typical features. Medium-vessel ischaemic manifestations, mononeuritis multiplex and hepatitis B infection should raise suspicion of polyarteritis nodosa.",
    "distractor_analysis": {
      "A": "Microscopic polyangiitis: It commonly causes pauci-immune glomerulonephritis and may cause pulmonary capillaritis.",
      "B": "IgA vasculitis: It classically causes palpable purpura, arthralgia, abdominal pain and sometimes glomerulonephritis, rather than the medium-vessel ischaemic pattern described.",
      "C": "Eosinophilic granulomatosis with polyangiitis: Asthma and eosinophilia are prominent clues, often with pulmonary or peripheral nerve involvement.",
      "E": "Granulomatosis with polyangiitis: This small-vessel vasculitis commonly involves the upper and lower respiratory tracts and kidneys."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q265",
    "subdomain": "Genetics",
    "topic": "Tuberous sclerosis complex",
    "difficulty": "Moderate",
    "stem": "A 19-year-old woman is investigated after a seizure. Examination reveals facial angiofibromas and ungual fibromas. Brain MRI demonstrates cortical tubers, and renal imaging identifies multiple angiomyolipomas. Which molecular mechanism is most closely associated with this disorder?",
    "options": {
      "A": "Defective nucleotide excision repair after ultraviolet exposure",
      "B": "Constitutive activation of the RET receptor tyrosine kinase",
      "C": "Loss of inhibition of the mechanistic target of rapamycin (mTOR) pathway",
      "D": "Impaired type IV collagen formation",
      "E": "Defective mismatch repair of DNA replication errors"
    },
    "correct_letter": "C",
    "why_correct": "Pathogenic variants affecting TSC1 or TSC2 impair the hamartin–tuberin complex, which normally restrains mTORC1 signalling. This contributes to hamartoma formation in multiple organs. Seizures, cortical tubers, facial angiofibromas and renal angiomyolipomas are characteristic of tuberous sclerosis complex, which involves dysregulated mTOR signalling.",
    "distractor_analysis": {
      "A": "Nucleotide excision repair: Defects in this pathway cause xeroderma pigmentosum, with ultraviolet sensitivity and a markedly increased risk of skin cancer.",
      "B": "RET activation: Germline activating variants in RET are associated with MEN2 and medullary thyroid carcinoma, sometimes with phaeochromocytoma.",
      "D": "Type IV collagen abnormalities are associated with disorders such as Alport syndrome, characterised by renal disease and often hearing or ocular involvement.",
      "E": "Mismatch repair gene defects can cause Lynch syndrome and a predisposition to several cancers."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q266",
    "subdomain": "Genetics",
    "topic": "Birt–Hogg–Dubé syndrome",
    "difficulty": "Moderate",
    "stem": "A 42-year-old woman presents with recurrent spontaneous pneumothoraces. Examination reveals multiple small, pale papules on her face and neck. Her father underwent surgery for a renal tumour at a relatively young age. Genetic testing identifies a pathogenic variant in FLCN. Which protein is encoded by the affected gene?",
    "options": {
      "A": "Fibrillin-1",
      "B": "Folliculin",
      "C": "Hamartin",
      "D": "Neurofibromin",
      "E": "Von Hippel–Lindau tumour suppressor protein"
    },
    "correct_letter": "B",
    "why_correct": "Pathogenic FLCN variants cause Birt–Hogg–Dubé syndrome, associated with fibrofolliculomas, pulmonary cysts and spontaneous pneumothorax, and an increased risk of renal tumours. Recurrent spontaneous pneumothorax plus characteristic skin lesions and a family history of renal tumours should raise suspicion of Birt–Hogg–Dubé syndrome.",
    "distractor_analysis": {
      "A": "Fibrillin-1: Encoded by FBN1, it is associated with Marfan syndrome.",
      "C": "Hamartin: Encoded by TSC1 and involved in tuberous sclerosis complex.",
      "D": "Neurofibromin: Encoded by NF1; pathogenic variants cause neurofibromatosis type 1, associated with café-au-lait macules and neurofibromas.",
      "E": "Von Hippel–Lindau protein: Encoded by VHL; pathogenic variants predispose to renal cell carcinoma, haemangioblastomas and other tumours, but do not explain the characteristic combination of pulmonary cysts and fibrofolliculomas."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q267",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Niemann–Pick disease type C",
    "difficulty": "Moderate",
    "stem": "A 17-year-old boy develops progressive difficulty walking, impaired coordination and cognitive decline. His parents report that he has recently struggled to move his eyes vertically, particularly when looking down. Examination confirms vertical supranuclear gaze palsy. He also has mild splenomegaly. Which underlying abnormality is most likely?",
    "options": {
      "A": "Defective lysosomal cholesterol trafficking",
      "B": "Impaired copper excretion into bile",
      "C": "Deficiency of dystrophin",
      "D": "Defective mitochondrial oxidative phosphorylation",
      "E": "Loss of peripheral myelin due to an inherited PMP22 duplication"
    },
    "correct_letter": "A",
    "why_correct": "Niemann–Pick disease type C is usually caused by pathogenic variants in NPC1 or NPC2, disrupting intracellular lipid trafficking. It can produce progressive neurological dysfunction, vertical supranuclear gaze palsy and hepatosplenomegaly. Vertical supranuclear gaze palsy with progressive neurological decline and hepatosplenomegaly is an important clue to Niemann–Pick disease type C.",
    "distractor_analysis": {
      "B": "Impaired biliary copper excretion: This is associated with Wilson disease, which can cause hepatic and neurological manifestations but does not characteristically produce this specific combination.",
      "C": "Dystrophin deficiency: This causes Duchenne or Becker muscular dystrophy, characterised principally by progressive skeletal muscle weakness.",
      "D": "Mitochondrial disorders have diverse neurological and systemic presentations, but the gaze palsy and splenomegaly strongly favour Niemann–Pick disease type C.",
      "E": "PMP22 duplication: This is associated with Charcot–Marie–Tooth disease type 1A, a hereditary peripheral neuropathy."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q268",
    "subdomain": "Haematology & oncology",
    "topic": "Factor V Leiden",
    "difficulty": "Moderate",
    "stem": "A 29-year-old woman is investigated after a second episode of deep-vein thrombosis. Her mother and older brother have both experienced venous thromboembolism. Thrombophilia testing identifies the most common inherited thrombophilia in people of European ancestry. Which mechanism best explains the increased thrombotic tendency?",
    "options": {
      "A": "Failure to synthesise vitamin K-dependent clotting factors",
      "B": "Deficiency of von Willebrand factor",
      "C": "Resistance of factor V to inactivation by activated protein C",
      "D": "Failure to convert fibrinogen into fibrin",
      "E": "Inhibition of platelet glycoprotein IIb/IIIa"
    },
    "correct_letter": "C",
    "why_correct": "Factor V Leiden is caused by a variant that makes factor V less susceptible to inactivation by activated protein C. This reduces a natural anticoagulant mechanism and increases venous thrombosis risk. Factor V Leiden causes inherited thrombophilia through resistance to activated protein C, an important physiological anticoagulant.",
    "distractor_analysis": {
      "A": "Vitamin K deficiency reduces functional factors II, VII, IX and X, as well as proteins C and S, and generally causes a bleeding tendency.",
      "B": "Von Willebrand factor deficiency: This causes impaired platelet adhesion and mucocutaneous bleeding.",
      "D": "Failure to convert fibrinogen into fibrin: Thrombin normally converts fibrinogen to fibrin. A failure of this process would impair clot formation rather than explain the inherited prothrombotic phenotype.",
      "E": "Inhibition of glycoprotein IIb/IIIa: This impairs platelet aggregation and is not the mechanism of inherited factor V Leiden thrombophilia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q269",
    "subdomain": "Genetics",
    "topic": "Hereditary diffuse gastric cancer",
    "difficulty": "Moderate",
    "stem": "A 35-year-old woman is diagnosed with diffuse-type gastric carcinoma. Her mother developed diffuse gastric cancer at 39, and a maternal aunt developed lobular breast cancer at 43. Genetic testing identifies a pathogenic germline variant in CDH1. Which cellular function is directly affected by this gene?",
    "options": {
      "A": "Telomere maintenance",
      "B": "Nucleotide excision repair",
      "C": "DNA mismatch repair",
      "D": "Cell–cell adhesion mediated by E-cadherin",
      "E": "Mitochondrial DNA replication"
    },
    "correct_letter": "D",
    "why_correct": "CDH1 encodes E-cadherin, an important epithelial cell-adhesion protein. Germline pathogenic variants are associated with hereditary diffuse gastric cancer and an increased risk of lobular breast cancer. A family history of diffuse gastric cancer and lobular breast cancer should raise suspicion of a germline CDH1 pathogenic variant.",
    "distractor_analysis": {
      "A": "Telomere biology disorders can cause bone marrow failure and other systemic manifestations but do not explain the classic CDH1 cancer predisposition.",
      "B": "Nucleotide excision repair: Defects in this pathway are associated with xeroderma pigmentosum.",
      "C": "DNA mismatch repair: Defects in mismatch repair genes, such as MLH1 and MSH2, are associated with Lynch syndrome.",
      "E": "Mitochondrial DNA replication: This is not the function of E-cadherin and does not explain the familial cancer pattern."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q270",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Autoimmune gastritis and iron deficiency",
    "difficulty": "Moderate",
    "stem": "A 48-year-old woman presents with fatigue. Investigations show iron-deficiency anaemia that has not responded as expected to oral iron. She has no overt bleeding, and coeliac serology is negative. Gastroscopy with biopsies shows atrophy of the gastric body and fundus with relative preservation of the antrum. Parietal-cell antibodies are detected. Which mechanism most directly contributes to impaired iron absorption in this condition?",
    "options": {
      "A": "Excess hepcidin causing iron retention within intestinal epithelial cells",
      "B": "Reduced gastric acid secretion impairing non-haem iron absorption",
      "C": "Increased intestinal loss of iron due to defective clotting",
      "D": "Increased gastric acidity enhancing conversion of dietary iron to an absorbable form",
      "E": "Increased renal excretion of iron"
    },
    "correct_letter": "B",
    "why_correct": "Autoimmune destruction of parietal cells can cause hypochlorhydria or achlorhydria, reducing the availability of dietary non-haem iron for absorption. Iron deficiency can precede vitamin B12 deficiency. Autoimmune gastritis may present with iron deficiency before pernicious anaemia becomes apparent.",
    "distractor_analysis": {
      "A": "Hepcidin can reduce intestinal iron export, but this is not the principal mechanism suggested by the specific gastric findings.",
      "C": "Intestinal iron loss due to defective clotting: A coagulation disorder may cause bleeding, but it does not explain the characteristic gastric histology and autoantibodies.",
      "D": "Gastric acid can facilitate the solubilisation and absorption of non-haem iron. The atrophic gastritis described reduces acid secretion rather than increasing it.",
      "E": "Renal excretion: Urinary iron loss is not the usual mechanism of iron deficiency in autoimmune gastritis."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q271",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "D-lactic acidosis",
    "difficulty": "Moderate",
    "stem": "A 38-year-old man who underwent extensive small-bowel resection several years ago develops intermittent episodes of confusion, slurred speech and an unsteady gait after carbohydrate-rich meals. During an episode, blood tests show a metabolic acidosis, but the routine laboratory lactate concentration is not substantially elevated. His symptoms resolve between episodes. Which mechanism best explains this presentation?",
    "options": {
      "A": "Increased production of methylmalonic acid due to vitamin B12 deficiency",
      "B": "Accumulation of beta-hydroxybutyrate due to insulin deficiency",
      "C": "Accumulation of L-lactate due to tissue hypoxia",
      "D": "Colonic bacterial production and absorption of D-lactate from unabsorbed carbohydrates",
      "E": "Reduced renal ammonium excretion due to distal renal tubular acidosis"
    },
    "correct_letter": "D",
    "why_correct": "In short-bowel syndrome, unabsorbed carbohydrates may reach the colon, where bacteria produce D-lactate. Absorption can cause episodic encephalopathy and metabolic acidosis. Routine lactate assays commonly measure L-lactate rather than D-lactate. Episodic neurological symptoms and metabolic acidosis after carbohydrate intake in a patient with short-bowel syndrome should raise suspicion of D-lactic acidosis.",
    "distractor_analysis": {
      "A": "Methylmalonic acid: Vitamin B12 deficiency can cause neurological dysfunction and raised methylmalonic acid, but does not characteristically cause this episodic post-carbohydrate syndrome.",
      "B": "Beta-hydroxybutyrate: This accumulates in ketoacidosis, typically associated with diabetes, fasting or alcohol-related metabolic disturbance.",
      "C": "L-lactate accumulation: Tissue hypoperfusion or hypoxia can cause lactic acidosis, usually with an elevated routine L-lactate measurement.",
      "E": "Distal renal tubular acidosis: This can cause a normal-anion-gap metabolic acidosis, but does not explain the meal-related episodic neurological symptoms."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q272",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Ménétrier disease",
    "difficulty": "Moderate",
    "stem": "A 57-year-old man presents with weight loss, epigastric discomfort and bilateral ankle oedema. Serum albumin is low. Gastroscopy reveals markedly enlarged gastric folds, predominantly affecting the body and fundus. Biopsies demonstrate foveolar hyperplasia with loss of normal gastric glands. Urinalysis shows no proteinuria, and liver function tests are otherwise normal. Which mechanism best explains the oedema?",
    "options": {
      "A": "Urinary albumin loss from glomerular disease",
      "B": "Reduced hepatic albumin synthesis due to chronic liver disease",
      "C": "Protein malabsorption due to small-bowel mucosal disease",
      "D": "Excess aldosterone causing isolated sodium retention",
      "E": "Protein loss across the abnormal gastric mucosa"
    },
    "correct_letter": "E",
    "why_correct": "Ménétrier disease is a hypertrophic gastropathy associated with enlarged gastric folds and protein-losing gastropathy. Loss of albumin contributes to reduced plasma oncotic pressure and peripheral oedema. Enlarged gastric folds with foveolar hyperplasia and hypoalbuminaemia should prompt consideration of Ménétrier disease, a protein-losing hypertrophic gastropathy.",
    "distractor_analysis": {
      "A": "Glomerular protein loss causes hypoalbuminaemia, but urinalysis shows no proteinuria.",
      "B": "Impaired synthesis can lower albumin, but liver function is otherwise normal and the gastric findings point elsewhere.",
      "C": "Small-bowel disease can cause protein loss or malabsorption, but the pathology described is confined to the stomach.",
      "D": "Aldosterone can contribute to sodium retention, but it does not explain the characteristic gastric histology and protein loss."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q273",
    "subdomain": "Neurology",
    "topic": "CADASIL",
    "difficulty": "Moderate",
    "stem": "A 46-year-old woman has recurrent episodes consistent with migraine with aura, followed by several transient neurological deficits. Over the next decade she develops executive dysfunction and gait impairment. Her mother developed early-onset vascular dementia. MRI shows extensive white-matter abnormalities and lacunar infarcts, particularly involving the anterior temporal poles and external capsules. Which genetic abnormality is most strongly associated with this disorder?",
    "options": {
      "A": "A pathogenic variant in SMN1",
      "B": "A pathogenic variant in DMD",
      "C": "A pathogenic variant in APP causing familial Alzheimer disease",
      "D": "A pathogenic variant in NOTCH3",
      "E": "A pathogenic variant in HTT"
    },
    "correct_letter": "D",
    "why_correct": "CADASIL is an autosomal dominant small-vessel disease caused by pathogenic variants in NOTCH3. It can cause migraine with aura, recurrent subcortical ischaemic events, mood or cognitive changes and progressive vascular dementia. Migraine with aura, early recurrent subcortical events, a family history of early vascular dementia and characteristic white-matter MRI abnormalities suggest CADASIL.",
    "distractor_analysis": {
      "A": "SMN1: Biallelic loss of SMN1 causes spinal muscular atrophy.",
      "B": "DMD: Pathogenic variants in DMD cause Duchenne or Becker muscular dystrophy.",
      "C": "APP: Certain APP variants cause familial Alzheimer disease or hereditary cerebral amyloid angiopathy, depending on the variant and disease mechanism.",
      "E": "HTT: Pathogenic CAG-repeat expansion in HTT causes Huntington disease, characterised by progressive movement, cognitive and psychiatric abnormalities."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q274",
    "subdomain": "Neurology",
    "topic": "Cerebral amyloid angiopathy",
    "difficulty": "Moderate",
    "stem": "A 76-year-old man presents with a spontaneous lobar intracerebral haemorrhage. He has no history of trauma, and his blood pressure is not markedly elevated. MRI demonstrates multiple strictly lobar cerebral microbleeds and cortical superficial siderosis, without a predominantly deep pattern of haemorrhagic lesions. Which underlying pathology is most likely?",
    "options": {
      "A": "Amyloid-beta deposition in cortical and leptomeningeal vessel walls",
      "B": "Venous sinus thrombosis causing haemorrhagic venous infarction",
      "C": "Demyelination caused by oligodendrocyte injury",
      "D": "Immune-complex deposition in cerebral small vessels",
      "E": "Hypertensive lipohyalinosis of deep perforating arteries"
    },
    "correct_letter": "A",
    "why_correct": "Cerebral amyloid angiopathy involves amyloid-beta deposition in cortical and leptomeningeal vessel walls. It is associated with lobar haemorrhage, strictly lobar microbleeds and cortical superficial siderosis, particularly in older adults. In an older adult, lobar haemorrhage plus strictly lobar microbleeds or cortical superficial siderosis strongly suggests cerebral amyloid angiopathy.",
    "distractor_analysis": {
      "B": "Venous sinus thrombosis: This can cause haemorrhagic venous infarction, but the distribution and chronic markers described are more characteristic of cerebral amyloid angiopathy.",
      "C": "Demyelination: Demyelinating disorders cause neurological deficits and characteristic white-matter lesions but do not explain this haemorrhagic MRI pattern.",
      "D": "Immune-complex deposition: Some inflammatory vascular disorders affect cerebral vessels, but the age and strictly lobar haemorrhagic pattern favour cerebral amyloid angiopathy.",
      "E": "Hypertensive small-vessel disease more often causes deep haemorrhages involving structures such as the basal ganglia, thalamus, pons or cerebellum."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q275",
    "subdomain": "Renal & urology",
    "topic": "Pseudohypoaldosteronism type 1",
    "difficulty": "Moderate",
    "stem": "A 3-week-old infant presents with vomiting, poor feeding and dehydration. Blood tests show hyponatraemia, hyperkalaemia and a normal-anion-gap metabolic acidosis. Plasma renin activity and aldosterone concentrations are markedly elevated. Investigations do not support congenital adrenal hyperplasia. Which mechanism best explains these findings?",
    "options": {
      "A": "Renal resistance to aldosterone action",
      "B": "Constitutive activation of the epithelial sodium channel",
      "C": "Autonomous aldosterone secretion",
      "D": "Excess cortisol activation of mineralocorticoid receptors",
      "E": "Inappropriate secretion of antidiuretic hormone"
    },
    "correct_letter": "A",
    "why_correct": "Pseudohypoaldosteronism type 1 causes impaired aldosterone action, reducing sodium reabsorption and potassium and hydrogen ion excretion. Sodium loss, hyperkalaemia and metabolic acidosis stimulate renin and aldosterone production. An infant with salt wasting, hyperkalaemia, metabolic acidosis and high renin and aldosterone should be assessed for aldosterone resistance after urgent exclusion of adrenal causes.",
    "distractor_analysis": {
      "B": "Constitutive epithelial sodium channel activation: This is the mechanism of Liddle syndrome, which causes hypertension, hypokalaemic metabolic alkalosis and suppressed renin and aldosterone.",
      "C": "Autonomous aldosterone secretion: Primary aldosteronism typically causes hypertension, hypokalaemia and metabolic alkalosis, with suppressed renin.",
      "D": "Excess cortisol activation of mineralocorticoid receptors: Apparent mineralocorticoid excess typically causes hypertension, hypokalaemia and alkalosis with low renin and aldosterone.",
      "E": "Excess antidiuretic hormone: SIADH can cause hyponatraemia but does not explain the characteristic hyperkalaemic metabolic acidosis and markedly elevated aldosterone."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q276",
    "subdomain": "Musculoskeletal & rheumatology",
    "topic": "IgG4-related disease",
    "difficulty": "Moderate",
    "stem": "A 63-year-old man presents with painless jaundice, weight loss and bilateral enlargement of the submandibular glands. CT demonstrates diffuse enlargement of the pancreas and a soft-tissue rind surrounding the abdominal aorta. Serum IgG4 is elevated. Which histological finding would most strongly support the suspected diagnosis?",
    "options": {
      "A": "Storiform fibrosis with a dense lymphoplasmacytic infiltrate and obliterative phlebitis",
      "B": "Non-caseating granulomas with multinucleated giant cells",
      "C": "Amyloid deposits composed of serum amyloid A",
      "D": "Linear deposition of IgG along the glomerular basement membrane",
      "E": "Fibrinoid necrosis of medium-sized arteries with no inflammatory infiltrate"
    },
    "correct_letter": "A",
    "why_correct": "IgG4-related disease is a fibroinflammatory disorder that can affect the pancreas, salivary glands, kidneys, retroperitoneum and other organs. Storiform fibrosis, a dense lymphoplasmacytic infiltrate with increased IgG4-positive plasma cells, and obliterative phlebitis are characteristic, although histological interpretation requires the overall clinical context. Multiorgan fibroinflammatory disease involving the pancreas, salivary glands and retroperitoneum should prompt consideration of IgG4-related disease.",
    "distractor_analysis": {
      "B": "Non-caseating granulomas: These are associated with conditions such as sarcoidosis. Granulomas are not the characteristic histological pattern of IgG4-related disease.",
      "C": "Serum amyloid A deposits: These indicate AA amyloidosis, associated with sustained inflammation.",
      "D": "Linear IgG deposition: This is characteristic of anti-glomerular basement membrane disease.",
      "E": "Fibrinoid necrosis of medium-sized arteries: This is associated with necrotising vasculitides, including polyarteritis nodosa."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q277",
    "subdomain": "Neurology",
    "topic": "Paraneoplastic cerebellar degeneration",
    "difficulty": "Moderate",
    "stem": "A 58-year-old woman develops rapidly progressive gait ataxia, dysarthria and limb incoordination over several weeks. MRI initially shows no structural cerebellar lesion. Investigation identifies a previously unsuspected ovarian malignancy, and serum testing detects anti-Yo antibodies. Which mechanism best explains the neurological syndrome?",
    "options": {
      "A": "Immune-mediated injury to cerebellar neurons associated with the tumour",
      "B": "Acute demyelination of peripheral motor nerves",
      "C": "Direct compression of the cerebellum by metastatic disease",
      "D": "Degeneration caused by a pathogenic HTT CAG-repeat expansion",
      "E": "Deficiency of dopamine in the nigrostriatal pathway"
    },
    "correct_letter": "A",
    "why_correct": "Paraneoplastic cerebellar degeneration is associated with an immune response directed against antigens shared by tumour cells and neural tissue. Anti-Yo antibodies are associated particularly with breast and gynaecological cancers and cerebellar dysfunction. Rapidly progressive cerebellar dysfunction with anti-Yo antibodies should prompt investigation for an associated malignancy, particularly breast or gynaecological cancer.",
    "distractor_analysis": {
      "B": "Peripheral nerve demyelination: This can cause weakness, sensory dysfunction and reduced reflexes, but does not explain a primary cerebellar syndrome with anti-Yo antibodies.",
      "C": "Direct compression: A posterior fossa mass can cause ataxia, but the absence of a structural lesion and the anti-Yo association support a paraneoplastic process.",
      "D": "HTT expansion: This causes Huntington disease, characterised by progressive movement, cognitive and psychiatric abnormalities.",
      "E": "Dopamine deficiency: Nigrostriatal dopamine loss is central to Parkinson's disease, which primarily causes bradykinesia, rigidity and tremor."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q278",
    "subdomain": "Cardiology",
    "topic": "Arrhythmogenic right ventricular cardiomyopathy",
    "difficulty": "Moderate",
    "stem": "A 26-year-old man collapses while playing competitive sport. He recovers spontaneously. His older brother died suddenly at 31. ECG demonstrates T-wave inversion in the right precordial leads, and ambulatory monitoring records ventricular tachycardia with a left bundle branch block morphology. Cardiac MRI demonstrates regional right ventricular akinesia and dilatation. Which pathological process is most strongly associated with this disorder?",
    "options": {
      "A": "Amyloid deposition within the ventricular myocardium",
      "B": "Fibrofatty replacement of right ventricular myocardium",
      "C": "Hypertrophy of the interventricular septum caused by sarcomeric protein variants",
      "D": "Iron deposition causing restrictive cardiomyopathy",
      "E": "Granulomatous inflammation of the cardiac conduction system"
    },
    "correct_letter": "B",
    "why_correct": "Arrhythmogenic right ventricular cardiomyopathy is commonly associated with desmosomal protein abnormalities and fibrofatty myocardial replacement, creating a substrate for ventricular arrhythmias and sudden cardiac death. Exercise-associated syncope, familial sudden death and ventricular arrhythmia with right ventricular abnormalities should raise suspicion of arrhythmogenic cardiomyopathy.",
    "distractor_analysis": {
      "A": "Amyloid deposition: Cardiac amyloidosis causes an infiltrative cardiomyopathy, often with increased ventricular wall thickness and restrictive physiology.",
      "C": "Septal hypertrophy: This is characteristic of hypertrophic cardiomyopathy, which is commonly associated with sarcomeric gene variants.",
      "D": "Iron deposition: Cardiac iron overload can cause dilated or restrictive cardiomyopathy and conduction abnormalities, but does not explain the characteristic familial arrhythmogenic phenotype.",
      "E": "Granulomatous inflammation: Cardiac sarcoidosis can cause ventricular arrhythmias and conduction block, but the family history and imaging pattern favour an inherited cardiomyopathy."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q279",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Type 2 autoimmune pancreatitis",
    "difficulty": "Moderate",
    "stem": "A 38-year-old man with ulcerative colitis develops abdominal discomfort and obstructive jaundice. Imaging shows diffuse pancreatic enlargement with a narrowed pancreatic duct. Pancreatic biopsy demonstrates granulocytic epithelial lesions, with neutrophils infiltrating and damaging pancreatic duct epithelium. Serum IgG4 is not elevated. Which diagnosis is most consistent with these findings?",
    "options": {
      "A": "Type 1 autoimmune pancreatitis",
      "B": "Pancreatic ductal adenocarcinoma",
      "C": "Alcohol-related chronic pancreatitis",
      "D": "Type 2 autoimmune pancreatitis",
      "E": "Acute gallstone pancreatitis"
    },
    "correct_letter": "D",
    "why_correct": "Type 2 disease is characterised by granulocytic epithelial lesions and is associated with inflammatory bowel disease in a proportion of patients. Serum IgG4 is often normal. Granulocytic epithelial lesions, normal IgG4 and coexisting inflammatory bowel disease support type 2 autoimmune pancreatitis.",
    "distractor_analysis": {
      "A": "Type 1 disease is associated with IgG4-related disease and typically shows lymphoplasmacytic inflammation, storiform fibrosis and increased IgG4-positive plasma cells.",
      "B": "Pancreatic ductal adenocarcinoma: Cancer can cause obstructive jaundice and pancreatic abnormalities. Histological findings and the broader clinical context are needed to distinguish malignancy from autoimmune pancreatitis.",
      "C": "Alcohol-related chronic pancreatitis: This commonly produces chronic structural changes, including calcification and ductal abnormalities, but does not characteristically produce granulocytic epithelial lesions.",
      "E": "Acute gallstone pancreatitis: This usually presents acutely with characteristic pain and raised pancreatic enzymes, often with evidence of gallstone disease. It does not explain the characteristic biopsy pattern."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q280",
    "subdomain": "Respiratory",
    "topic": "Hypersensitivity pneumonitis",
    "difficulty": "Moderate",
    "stem": "A 46-year-old woman develops cough, breathlessness and malaise several hours after cleaning a poorly ventilated aviary. She reports that similar symptoms recur after exposure to birds but improve when she spends several days away. High-resolution CT shows patchy ground-glass opacities and areas of mosaic attenuation. Pulmonary function testing demonstrates a restrictive pattern. Which mechanism best explains the disease?",
    "options": {
      "A": "An immune-mediated inflammatory response to inhaled environmental antigens",
      "B": "Pulmonary arterial obstruction by recurrent thromboemboli",
      "C": "Abnormal proliferation of pulmonary Langerhans cells",
      "D": "Destruction of alveolar walls caused by alpha-1 antitrypsin deficiency",
      "E": "Deposition of iron in alveolar macrophages due to chronic intrapulmonary bleeding"
    },
    "correct_letter": "A",
    "why_correct": "Hypersensitivity pneumonitis results from an immune response to inhaled antigens in susceptible individuals. Exposure-related symptoms, ground-glass changes and mosaic attenuation support the diagnosis, although the findings must be interpreted with the exposure history and other investigations. Reproducible respiratory symptoms after a specific inhaled exposure should prompt a detailed occupational and environmental history and assessment for hypersensitivity pneumonitis.",
    "distractor_analysis": {
      "B": "Recurrent thromboemboli: These can cause pulmonary vascular disease and breathlessness, but do not account for the exposure-linked inflammatory syndrome.",
      "C": "Pulmonary Langerhans cell histiocytosis: This is strongly associated with smoking and commonly causes upper-zone nodules and irregular cysts, rather than an exposure-related acute inflammatory pattern.",
      "D": "Alpha-1 antitrypsin deficiency: This can cause early emphysema, classically with lower-zone predominance, but does not explain reproducible symptoms after bird exposure.",
      "E": "Pulmonary haemosiderosis: Recurrent alveolar bleeding can produce iron-laden macrophages and anaemia, but is not the expected response to bird antigen exposure."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q281",
    "subdomain": "Renal & urology",
    "topic": "Pseudohyperkalaemia",
    "difficulty": "Moderate",
    "stem": "A 67-year-old man with marked thrombocytosis is found to have a serum potassium concentration of 6.7 mmol/L on routine testing. He feels well, renal function is normal, and the ECG shows no hyperkalaemic changes. A promptly processed plasma sample has a potassium concentration within the reference range. Which explanation is most likely?",
    "options": {
      "A": "Primary adrenal insufficiency causing true potassium retention",
      "B": "Severe insulin deficiency causing a sustained extracellular potassium shift",
      "C": "Rhabdomyolysis releasing intracellular potassium",
      "D": "Acute renal failure causing true potassium retention",
      "E": "Pseudohyperkalaemia caused by potassium release from platelets during clotting"
    },
    "correct_letter": "E",
    "why_correct": "Platelets release potassium during clot formation. In marked thrombocytosis, serum potassium can therefore be falsely elevated relative to plasma potassium. The discrepancy between serum and promptly processed plasma results supports pseudohyperkalaemia. When the laboratory potassium result conflicts with the clinical picture, consider pseudohyperkalaemia and obtain an appropriately collected, promptly processed sample. Do not dismiss a potentially dangerous potassium result without confirming the discrepancy safely.",
    "distractor_analysis": {
      "A": "Mineralocorticoid deficiency causes true hyperkalaemia, which would also be present in the plasma sample.",
      "B": "Insulin deficiency can contribute to extracellular potassium shifts, but it would not explain the serum–plasma discrepancy in this case.",
      "C": "Muscle breakdown causes true hyperkalaemia; it would not explain a normal plasma potassium in a well patient.",
      "D": "Renal failure can cause true hyperkalaemia, but normal renal function and a normal plasma potassium make this explanation unlikely."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q282",
    "subdomain": "Neurology",
    "topic": "Autoimmune encephalitis associated with LGI1 antibodies",
    "difficulty": "Moderate",
    "stem": "A 68-year-old man develops progressive short-term memory impairment and confusion over several weeks. His family reports frequent, very brief episodes of unilateral facial grimacing accompanied by flexion of the ipsilateral arm. Serum sodium is low. MRI shows mesial temporal signal abnormalities. Which antibody is most strongly associated with this clinical syndrome?",
    "options": {
      "A": "Acetylcholine receptor",
      "B": "Desmoglein 3",
      "C": "Glomerular basement membrane antigen",
      "D": "LGI1",
      "E": "Aquaporin-4"
    },
    "correct_letter": "D",
    "why_correct": "Leucine-rich glioma-inactivated 1 antibodies are associated with autoimmune limbic encephalitis, often in older adults. Brief faciobrachial dystonic seizures, memory impairment and hyponatraemia are characteristic clues. Subacute memory impairment with faciobrachial dystonic seizures and hyponatraemia should raise suspicion of LGI1-associated autoimmune encephalitis.",
    "distractor_analysis": {
      "A": "Acetylcholine receptor: These antibodies are associated with myasthenia gravis and cause fatigable muscle weakness.",
      "B": "Desmoglein 3: Antibodies against desmoglein 3 are associated with pemphigus vulgaris.",
      "C": "Glomerular basement membrane antigen: Antibodies against the relevant type IV collagen antigen cause anti-GBM disease, which can produce rapidly progressive glomerulonephritis and pulmonary haemorrhage.",
      "E": "Aquaporin-4 antibodies are associated with neuromyelitis optica spectrum disorder, which commonly involves optic neuritis and longitudinally extensive transverse myelitis."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q283",
    "subdomain": "Respiratory",
    "topic": "Spontaneous pneumomediastinum",
    "difficulty": "Moderate",
    "stem": "A 20-year-old man presents with acute chest pain after a prolonged episode of forceful coughing. He is haemodynamically stable and has no history of trauma or instrumentation. Examination reveals palpable crepitus over the neck. Chest imaging demonstrates air outlining mediastinal structures, without evidence of a pneumothorax. Which mechanism most likely explains the condition?",
    "options": {
      "A": "Pleural fluid accumulation causing mediastinal displacement",
      "B": "Complete obstruction of the central airway by a foreign body",
      "C": "Alveolar rupture with air dissecting along bronchovascular sheaths into the mediastinum",
      "D": "Full-thickness oesophageal rupture after forceful vomiting",
      "E": "Tracheobronchial rupture after blunt chest injury"
    },
    "correct_letter": "C",
    "why_correct": "A sudden rise in intra-alveolar pressure can cause alveolar rupture. Air may then track along bronchovascular sheaths towards the mediastinum, producing spontaneous pneumomediastinum. Pneumomediastinum can occur when alveolar air tracks along bronchovascular sheaths. Clinical assessment must also consider dangerous alternatives, including oesophageal perforation, according to the presentation.",
    "distractor_analysis": {
      "A": "Pleural fluid can compress the lung and shift mediastinal structures but does not produce mediastinal air.",
      "B": "Central airway obstruction: This can cause acute respiratory compromise but does not account for the characteristic air-tracking mechanism described.",
      "D": "Oesophageal rupture is a dangerous cause of mediastinal air, but it follows vomiting or instrumentation and usually causes severe illness, not a stable patient after coughing.",
      "E": "Airway rupture can cause pneumomediastinum, but there is no history of trauma."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q284",
    "subdomain": "Cardiology",
    "topic": "Hypertrophic obstructive cardiomyopathy: dynamic obstruction",
    "difficulty": "Moderate",
    "stem": "A 24-year-old man with a family history of sudden cardiac death is found to have hypertrophic cardiomyopathy. On examination, a systolic murmur is heard along the left sternal edge. The murmur becomes louder when he stands from a squatting position and softer when he squats. Which physiological change most directly explains the increase in murmur intensity on standing?",
    "options": {
      "A": "Increased systemic vascular resistance reducing outflow tract obstruction",
      "B": "Reduced contractility increasing the velocity of blood through the outflow tract",
      "C": "Increased venous return causing a greater reduction in systolic anterior motion of the mitral valve",
      "D": "Reduced ventricular preload increasing dynamic left ventricular outflow tract obstruction",
      "E": "Increased ventricular preload reducing the left ventricular cavity size"
    },
    "correct_letter": "D",
    "why_correct": "Standing reduces venous return and ventricular filling. In obstructive hypertrophic cardiomyopathy, a smaller ventricular cavity can intensify dynamic left ventricular outflow tract obstruction and increase the murmur.",
    "distractor_analysis": {
      "A": "Increased afterload often reduces the degree of dynamic obstruction rather than intensifying it.",
      "B": "Reduced contractility would not explain an increase in dynamic obstruction; increased contractility can exacerbate it.",
      "C": "Increased venous return generally increases preload and tends to reduce obstruction.",
      "E": "Increased ventricular filling generally enlarges the ventricular cavity and tends to reduce dynamic obstruction."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q285",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Abacavir hypersensitivity and HLA-B*57:01",
    "difficulty": "Moderate",
    "stem": "A 34-year-old man with newly diagnosed HIV is being considered for an antiretroviral regimen containing abacavir. He has never previously taken the drug. His clinician arranges genetic testing before treatment. Which genetic variant is most strongly associated with abacavir hypersensitivity?",
    "options": {
      "A": "HLA-B27",
      "B": "HLA-DQ2",
      "C": "Factor V Leiden",
      "D": "CYP2D6 gene duplication",
      "E": "HLA-B*57:01"
    },
    "correct_letter": "E",
    "why_correct": "This allele is strongly associated with abacavir hypersensitivity. Screening before abacavir treatment substantially reduces the risk of this potentially serious reaction. HLA-B*57:01 testing is required before starting abacavir. A negative result reduces the risk but does not eliminate the possibility of every adverse reaction.",
    "distractor_analysis": {
      "A": "HLA-B27: This allele is associated with conditions including axial spondyloarthritis and acute anterior uveitis.",
      "B": "HLA-DQ2 is associated with susceptibility to coeliac disease, although its presence alone does not diagnose the condition.",
      "C": "Factor V Leiden: This variant causes resistance to activated protein C and increases venous thromboembolism risk; it is not the relevant pharmacogenetic marker.",
      "D": "CYP2D6 gene duplication: Increased CYP2D6 activity can affect the metabolism of certain medicines but is not the established marker for abacavir hypersensitivity."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q286",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Lead poisoning",
    "difficulty": "Moderate",
    "stem": "A 43-year-old man presents with abdominal colic, constipation, fatigue and progressive weakness of wrist extension. He works restoring old painted furniture without consistently using protective equipment. Blood tests show microcytic anaemia, and the blood film demonstrates coarse basophilic stippling. Which exposure best explains this combination?",
    "options": {
      "A": "Organophosphate insecticide",
      "B": "Carbon monoxide",
      "C": "Ethylene glycol",
      "D": "Methanol",
      "E": "Lead"
    },
    "correct_letter": "E",
    "why_correct": "Lead toxicity can cause abdominal colic, constipation, anaemia and peripheral neuropathy, including extensor weakness. Basophilic stippling can occur, and exposure may arise from old paint or other contaminated materials. Abdominal colic, microcytic anaemia, basophilic stippling and extensor neuropathy should prompt consideration of lead exposure and appropriate blood lead testing.",
    "distractor_analysis": {
      "A": "Organophosphate insecticide: Organophosphates inhibit acetylcholinesterase, producing cholinergic symptoms such as secretions, bronchospasm, miosis and muscle fasciculations.",
      "B": "Carbon monoxide: CO poisoning impairs oxygen delivery and can cause headache, confusion and tissue hypoxia; it does not characteristically produce this chronic combination of abdominal colic, basophilic stippling and extensor neuropathy.",
      "C": "Ethylene glycol poisoning can cause high-anion-gap metabolic acidosis and kidney injury, with calcium oxalate deposition; it does not explain the characteristic chronic haematological and neurological pattern.",
      "D": "Methanol poisoning classically causes metabolic acidosis and visual toxicity in acute exposure."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q287",
    "subdomain": "Cardiology",
    "topic": "Atrioventricular nodal re-entrant tachycardia",
    "difficulty": "Moderate",
    "stem": "A 27-year-old woman presents with sudden-onset palpitations. Her heart rate is 190 beats/min, and ECG shows a regular narrow-complex tachycardia. P waves are not clearly visible, although a small pseudo-R′ wave can be seen in lead V1. She is haemodynamically stable. Which mechanism most likely explains the arrhythmia?",
    "options": {
      "A": "Atrial fibrillation with multiple disorganised atrial wavefronts",
      "B": "Atrial flutter with a fixed 4:1 conduction ratio",
      "C": "Ventricular re-entry through an infarct-related scar",
      "D": "Re-entry involving dual conduction pathways within or adjacent to the AV node",
      "E": "Enhanced automaticity arising from the sinoatrial node"
    },
    "correct_letter": "D",
    "why_correct": "AV nodal re-entrant tachycardia (AVNRT) commonly causes sudden-onset, regular narrow-complex tachycardia. A pseudo-R′ in V1 or pseudo-S waves in the inferior leads can reflect retrograde atrial activation close to the QRS complex. Sudden-onset regular narrow-complex tachycardia with very short or hidden P waves is characteristic of AVNRT, although ECG findings must be interpreted in context.",
    "distractor_analysis": {
      "A": "Atrial fibrillation is typically irregularly irregular and does not usually produce a consistently regular narrow-complex rhythm.",
      "B": "Atrial flutter with 4:1 conduction usually produces a ventricular rate around one quarter of the atrial rate, often with flutter waves visible on ECG.",
      "C": "Scar-related ventricular tachycardia usually produces a broad-complex tachycardia, particularly in a patient with previous myocardial infarction.",
      "E": "Sinus tachycardia generally has a visible sinus P wave preceding each QRS and usually accelerates and decelerates more gradually."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q288",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Hyperosmolar hyperglycaemic state",
    "difficulty": "Moderate",
    "stem": "A 79-year-old man with type 2 diabetes presents after several days of polyuria, thirst and progressive confusion. His plasma glucose is markedly elevated, calculated or measured serum osmolality is substantially raised, and he is clinically dehydrated. Blood ketones are low, and there is no significant metabolic acidosis. Which diagnosis best fits this presentation?",
    "options": {
      "A": "Diabetic ketoacidosis",
      "B": "Euglycaemic diabetic ketoacidosis",
      "C": "Hyperosmolar hyperglycaemic state",
      "D": "Insulinoma",
      "E": "Adrenal crisis"
    },
    "correct_letter": "C",
    "why_correct": "Hyperosmolar hyperglycaemic state (HHS) typically presents with severe hyperglycaemia, hyperosmolality and dehydration, often with neurological disturbance. Significant ketoacidosis is absent or less prominent than in DKA. Severe hyperglycaemia with dehydration, raised osmolality and minimal ketonaemia or acidosis suggests HHS.",
    "distractor_analysis": {
      "A": "DKA is characterised by ketonaemia and metabolic acidosis, although hyperglycaemia is common.",
      "B": "Euglycaemic DKA involves ketoacidosis despite glucose that is not markedly elevated. The low ketones and absence of significant acidosis argue against it.",
      "D": "Insulinoma causes endogenous hyperinsulinaemic hypoglycaemia rather than severe hyperglycaemia and hyperosmolality.",
      "E": "Adrenal crisis can cause hypotension, electrolyte abnormalities and sometimes hypoglycaemia, but it does not explain this hyperglycaemic hyperosmolar pattern."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q289",
    "subdomain": "Haematology & oncology",
    "topic": "TRALI versus transfusion-associated circulatory overload",
    "difficulty": "Moderate",
    "stem": "A 78-year-old woman with known heart failure develops acute breathlessness and hypoxaemia during a red-cell transfusion. Examination reveals raised jugular venous pressure and peripheral oedema. Imaging shows bilateral pulmonary oedema, and the clinical assessment supports elevated cardiac filling pressures. Which transfusion complication is most consistent with these findings?",
    "options": {
      "A": "Transfusion-related acute lung injury (TRALI)",
      "B": "Transfusion-transmitted hepatitis",
      "C": "Post-transfusion purpura",
      "D": "Delayed haemolytic transfusion reaction",
      "E": "Transfusion-associated circulatory overload (TACO)"
    },
    "correct_letter": "E",
    "why_correct": "TACO is hydrostatic pulmonary oedema associated with transfusion. Older age, heart failure, raised jugular venous pressure and evidence of volume overload support this diagnosis. In acute respiratory deterioration during transfusion, distinguish hydrostatic overload (TACO) from permeability oedema (TRALI), while initiating the local emergency transfusion-reaction process.",
    "distractor_analysis": {
      "A": "TRALI is an acute lung injury with increased pulmonary capillary permeability and non-cardiogenic pulmonary oedema. It remains an important differential, but the evidence of elevated filling pressures and fluid overload favours TACO.",
      "B": "Transfusion-transmitted hepatitis is not the explanation for acute pulmonary oedema during the transfusion.",
      "C": "Post-transfusion purpura is a delayed immune-mediated thrombocytopenic complication, not an acute volume-overload syndrome.",
      "D": "A delayed haemolytic reaction causes haemolysis after transfusion rather than primarily hydrostatic pulmonary oedema."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q290",
    "subdomain": "Cardiology",
    "topic": "Coarctation of the aorta",
    "difficulty": "Moderate",
    "stem": "A 22-year-old man is referred for hypertension detected during a routine examination. His blood pressure is substantially higher in the arms than in the legs. Femoral pulses are delayed compared with radial pulses, and he has a systolic murmur heard over the back. Which diagnosis best explains the findings?",
    "options": {
      "A": "Atrial septal defect",
      "B": "Mitral valve prolapse",
      "C": "Coarctation of the aorta",
      "D": "Aortic valve regurgitation",
      "E": "Pulmonary valve stenosis"
    },
    "correct_letter": "C",
    "why_correct": "Coarctation causes narrowing of the aorta, typically resulting in upper-limb hypertension, reduced or delayed lower-limb pulses and a systolic murmur that may be heard over the back. Hypertension in a young adult with radiofemoral delay and lower leg blood pressure should prompt assessment for coarctation of the aorta.",
    "distractor_analysis": {
      "A": "An atrial septal defect may cause a pulmonary flow murmur and fixed splitting of the second heart sound, but not the described upper–lower limb blood pressure difference.",
      "B": "Mitral valve prolapse may produce a mid-systolic click and late systolic murmur, but it does not cause this pattern of peripheral pulses.",
      "D": "Aortic regurgitation typically causes an early diastolic murmur and may produce a wide pulse pressure; it does not explain the marked arm–leg pressure difference.",
      "E": "Pulmonary valve stenosis causes right ventricular outflow obstruction and a systolic murmur, usually best heard at the upper left sternal edge."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q291",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Kayser–Fleischer rings",
    "difficulty": "Moderate",
    "stem": "A 21-year-old man presents with progressive tremor, behavioural changes and abnormal liver function tests. Slit-lamp examination reveals a brownish-green ring at the corneal periphery. Which mechanism is responsible for this finding?",
    "options": {
      "A": "Cholesterol deposition in the retinal vessels",
      "B": "Copper deposition in Descemet’s membrane",
      "C": "Amyloid deposition in the conjunctiva",
      "D": "Calcium deposition in the corneal stroma due to chronic hypercalcaemia",
      "E": "Iron deposition in the lens capsule"
    },
    "correct_letter": "B",
    "why_correct": "Kayser–Fleischer rings result from copper deposition in Descemet’s membrane of the cornea. They are associated with Wilson disease, particularly when neurological manifestations are present. Kayser–Fleischer rings in a patient with neurological or hepatic features strongly support Wilson disease, but diagnosis should be confirmed using the appropriate clinical and biochemical assessment.",
    "distractor_analysis": {
      "A": "Cholesterol-related retinal vascular changes do not explain this corneal finding.",
      "C": "Amyloid deposition can affect ocular tissues in some disorders but does not cause the characteristic copper ring.",
      "D": "Calcium deposition can cause band keratopathy, which has a different appearance and mechanism.",
      "E": "Iron deposition can cause ocular changes in particular settings, but it does not explain the characteristic Kayser–Fleischer ring."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q292",
    "subdomain": "Renal & urology",
    "topic": "Renal fibromuscular dysplasia",
    "difficulty": "Moderate",
    "stem": "A 32-year-old woman is investigated for persistent hypertension despite treatment. Renal function is initially preserved. CT angiography demonstrates alternating areas of narrowing and dilatation in the mid-to-distal portions of both renal arteries. There is no substantial atherosclerotic plaque. Which diagnosis is most likely?",
    "options": {
      "A": "Acute renal vein thrombosis",
      "B": "Diabetic nephropathy",
      "C": "Bilateral atherosclerotic renal artery stenosis",
      "D": "Renal artery fibromuscular dysplasia",
      "E": "Acute post-infectious glomerulonephritis"
    },
    "correct_letter": "D",
    "why_correct": "Fibromuscular dysplasia is a non-atherosclerotic, non-inflammatory arterial disorder. Renal artery involvement can cause renovascular hypertension, and multifocal disease may produce alternating stenosis and dilatation, giving a “string-of-beads” appearance. In a younger patient with otherwise unexplained hypertension, multifocal narrowing and dilatation of the renal arteries suggests fibromuscular dysplasia.",
    "distractor_analysis": {
      "A": "Renal vein thrombosis may cause flank pain, haematuria or renal dysfunction but does not explain the characteristic renal arterial imaging.",
      "B": "Diabetic nephropathy is a parenchymal kidney disease and does not produce this renal artery pattern.",
      "C": "Atherosclerotic renal artery stenosis more commonly affects the ostium or proximal renal artery and is associated with atherosclerotic risk factors and plaque.",
      "E": "Post-infectious glomerulonephritis typically presents with a nephritic syndrome and is not characterised by renal artery beading."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q293",
    "subdomain": "Cardiology",
    "topic": "Mitral stenosis",
    "difficulty": "Moderate",
    "stem": "A 46-year-old woman presents with progressive exertional breathlessness. Cardiac auscultation reveals a loud first heart sound and an opening snap followed by a low-pitched, mid-diastolic rumbling murmur at the apex. The murmur is more readily heard with the bell of the stethoscope. Which diagnosis best explains these findings?",
    "options": {
      "A": "Aortic regurgitation",
      "B": "Mitral stenosis",
      "C": "Mitral regurgitation",
      "D": "Aortic stenosis",
      "E": "Tricuspid regurgitation"
    },
    "correct_letter": "B",
    "why_correct": "Mitral stenosis obstructs blood flow from the left atrium to the left ventricle. The characteristic auscultatory findings include an opening snap and a low-pitched mid-diastolic murmur at the apex. An opening snap followed by a low-pitched mid-diastolic apical murmur is characteristic of mitral stenosis.",
    "distractor_analysis": {
      "A": "Aortic regurgitation typically produces an early diastolic decrescendo murmur, usually best heard along the left sternal edge.",
      "C": "Mitral regurgitation produces a pansystolic murmur, usually loudest at the apex and potentially radiating towards the axilla.",
      "D": "Aortic stenosis typically produces an ejection systolic murmur, often radiating to the carotids.",
      "E": "Tricuspid regurgitation produces a pansystolic murmur at the lower left sternal edge, often louder during inspiration."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q294",
    "subdomain": "Cardiology",
    "topic": "Second-degree atrioventricular block, Mobitz type II",
    "difficulty": "Moderate",
    "stem": "A 76-year-old man presents with intermittent light-headedness. His ECG shows sinus rhythm with regular P waves. Some P waves are not followed by QRS complexes, but the PR intervals of conducted beats remain constant. There is no progressive PR prolongation before a dropped beat. Which diagnosis best fits the ECG?",
    "options": {
      "A": "Second-degree atrioventricular block, Mobitz type I",
      "B": "Second-degree atrioventricular block, Mobitz type II",
      "C": "Complete atrioventricular block",
      "D": "First-degree atrioventricular block",
      "E": "Sinus arrhythmia"
    },
    "correct_letter": "B",
    "why_correct": "Mobitz type II is characterised by intermittently non-conducted P waves without progressive PR prolongation before the dropped beat. It may indicate significant conduction-system disease. Distinguish Mobitz II from Mobitz I by the behaviour of the PR interval. Mobitz II warrants prompt assessment because of the risk of progression to complete heart block.",
    "distractor_analysis": {
      "A": "Mobitz type I typically shows progressive PR prolongation before a non-conducted P wave.",
      "C": "Complete AV block involves atrioventricular dissociation, with no consistent relationship between P waves and QRS complexes.",
      "D": "First-degree AV block involves prolonged PR conduction, with every P wave conducted to the ventricles.",
      "E": "Sinus arrhythmia causes variation in sinus cycle length; it does not explain the intermittent failure of atrial impulses to conduct."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q295",
    "subdomain": "Cardiology",
    "topic": "Cardiac sarcoidosis",
    "difficulty": "Moderate",
    "stem": "A 44-year-old man presents with palpitations and two episodes of presyncope. His ECG shows intermittent high-grade atrioventricular block. Echocardiography reveals mildly impaired left ventricular systolic function. Cardiac MRI demonstrates patchy areas of non-ischaemic myocardial enhancement, and chest imaging shows bilateral hilar lymphadenopathy. Which diagnosis best explains the findings?",
    "options": {
      "A": "Arrhythmogenic right ventricular cardiomyopathy",
      "B": "Cardiac sarcoidosis",
      "C": "Hypertensive heart disease",
      "D": "Acute coronary syndrome",
      "E": "Acute rheumatic fever"
    },
    "correct_letter": "B",
    "why_correct": "Sarcoid granulomatous inflammation can involve the myocardium and conduction system, causing atrioventricular block, ventricular arrhythmias and ventricular dysfunction. The combination of conduction disease, non-ischaemic MRI abnormalities and hilar lymphadenopathy supports this diagnosis. Unexplained high-grade AV block in a relatively young adult, particularly with ventricular arrhythmias or extracardiac sarcoidosis, should raise suspicion of cardiac sarcoidosis.",
    "distractor_analysis": {
      "A": "Arrhythmogenic right ventricular cardiomyopathy is associated particularly with ventricular arrhythmias and right ventricular structural abnormalities. It does not explain the hilar lymphadenopathy.",
      "C": "Hypertensive heart disease may cause left ventricular hypertrophy and dysfunction, but it does not characteristically cause this combination of high-grade conduction disease and systemic findings.",
      "D": "Acute coronary syndrome may cause ventricular dysfunction and arrhythmias, but the described non-ischaemic enhancement pattern and hilar lymphadenopathy point towards a systemic inflammatory disorder.",
      "E": "Acute rheumatic fever may cause carditis and valvular disease following streptococcal infection, but this presentation is not characteristic."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q296",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Chagas disease",
    "difficulty": "Moderate",
    "stem": "A 46-year-old man who grew up in rural Bolivia presents with progressive exertional dyspnoea and palpitations. ECG shows right bundle branch block with left anterior fascicular block. Echocardiography reveals a dilated cardiomyopathy with an apical aneurysm. He recalls living in a mud-brick house during childhood. Which infection is the most likely underlying cause?",
    "options": {
      "A": "Trypanosoma brucei",
      "B": "Trypanosoma cruzi",
      "C": "Toxoplasma gondii",
      "D": "Leishmania donovani",
      "E": "Borrelia burgdorferi"
    },
    "correct_letter": "B",
    "why_correct": "T. cruzi causes Chagas disease, transmitted principally by infected triatomine insects. Chronic disease can produce conduction abnormalities, dilated cardiomyopathy, ventricular arrhythmias and apical aneurysms. In a person with relevant Latin American exposure, conduction disease and dilated cardiomyopathy with an apical aneurysm should raise suspicion of chronic Chagas disease.",
    "distractor_analysis": {
      "A": "T. brucei causes African trypanosomiasis, associated with fever, lymphadenopathy and, in later disease, neurological and sleep disturbances.",
      "C": "T. gondii can cause encephalitis, particularly in immunocompromised patients, and congenital infection. It does not characteristically cause this chronic cardiomyopathy.",
      "D": "L. donovani causes visceral leishmaniasis, typically presenting with prolonged fever, splenomegaly and cytopenias.",
      "E": "B. burgdorferi causes Lyme disease and may cause AV conduction block, but the epidemiological setting and apical aneurysm with dilated cardiomyopathy favour Chagas disease."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q297",
    "subdomain": "Renal & urology",
    "topic": "Toluene-associated renal tubular acidosis",
    "difficulty": "Moderate",
    "stem": "A 29-year-old man is admitted with weakness and confusion. He has a history of inhaling solvents. Blood tests reveal severe hypokalaemia and a hyperchloraemic metabolic acidosis with a normal anion gap. Urinary potassium loss is present. There is no evidence of significant diarrhoea. Which exposure is a recognised cause of this presentation?",
    "options": {
      "A": "Carbon monoxide",
      "B": "Methanol",
      "C": "Toluene",
      "D": "Ethylene glycol",
      "E": "Paracetamol"
    },
    "correct_letter": "C",
    "why_correct": "Toluene exposure can cause severe hypokalaemia and metabolic acidosis through effects on renal acid handling and the metabolism of toluene to hippuric acid. The acid–base pattern can vary with the timing and severity of exposure. In a patient with solvent exposure, severe hypokalaemia and metabolic acidosis should prompt consideration of toluene toxicity. Urgent assessment and correction of electrolyte abnormalities are essential.",
    "distractor_analysis": {
      "A": "Carbon monoxide causes tissue hypoxia through carboxyhaemoglobin formation and may cause lactic acidosis, but it is not the characteristic cause of this solvent-associated hypokalaemic, normal-anion-gap pattern.",
      "B": "Methanol is metabolised to formate and classically causes a high-anion-gap metabolic acidosis, often with visual toxicity.",
      "D": "Ethylene glycol can cause high-anion-gap metabolic acidosis and acute kidney injury, sometimes with calcium oxalate crystalluria.",
      "E": "Paracetamol overdose primarily causes hepatic toxicity in severe poisoning. It is not the characteristic explanation for this exposure history and electrolyte pattern."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q298",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Hyperornithinaemia–hyperammonaemia–homocitrullinuria syndrome",
    "difficulty": "Moderate",
    "stem": "A 17-year-old boy develops episodic confusion and vomiting, particularly during intercurrent illness or after a high-protein meal. Investigations during an episode show hyperammonaemia. Plasma amino-acid analysis reveals elevated ornithine, and urine testing identifies homocitrulline. Which defective protein best explains these findings?",
    "options": {
      "A": "Cystathionine beta-synthase",
      "B": "Phenylalanine hydroxylase",
      "C": "Mitochondrial ornithine transporter (ORNT1)",
      "D": "Branched-chain alpha-ketoacid dehydrogenase complex",
      "E": "Homogentisate 1,2-dioxygenase"
    },
    "correct_letter": "C",
    "why_correct": "HHH syndrome is a rare urea-cycle disorder, usually due to defects in the mitochondrial ornithine transporter encoded by SLC25A15. Impaired ornithine transport disrupts ureagenesis and can cause hyperammonaemia, elevated plasma ornithine and urinary homocitrulline. Hyperammonaemia with raised ornithine and urinary homocitrulline should raise suspicion of HHH syndrome.",
    "distractor_analysis": {
      "A": "Classical homocystinuria is associated with elevated homocysteine and methionine and may cause lens dislocation and thrombosis.",
      "B": "Phenylketonuria results from impaired phenylalanine metabolism and is associated with raised phenylalanine, not this characteristic biochemical triad.",
      "D": "Maple syrup urine disease results from impaired branched-chain amino-acid metabolism and can cause neurological deterioration, but does not produce the defining ornithine–homocitrulline pattern.",
      "E": "Alkaptonuria causes homogentisic acid accumulation, ochronosis and degenerative arthropathy, rather than a urea-cycle disorder."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q299",
    "subdomain": "Infectious disease & sexual health",
    "topic": "Streptococcus gallolyticus bacteraemia and colorectal neoplasia",
    "difficulty": "Moderate",
    "stem": "A 68-year-old man is admitted with fever and a new cardiac murmur. Blood cultures grow Streptococcus gallolyticus subsp. gallolyticus. Echocardiography demonstrates a vegetation on the aortic valve. He has no abdominal symptoms and reports no visible rectal bleeding. Which additional investigation is particularly important because of the organism identified?",
    "options": {
      "A": "Bronchoscopy to exclude bronchogenic carcinoma",
      "B": "Bone marrow biopsy to exclude acute leukaemia",
      "C": "Colonoscopy to assess for colorectal neoplasia",
      "D": "Cystoscopy to exclude bladder malignancy",
      "E": "Thyroid ultrasonography to exclude thyroid carcinoma"
    },
    "correct_letter": "C",
    "why_correct": "S. gallolyticus subsp. gallolyticus bacteraemia and infective endocarditis are associated with colorectal neoplasia. Colonic evaluation is therefore important even when bowel symptoms are absent.",
    "distractor_analysis": {
      "A": "This organism does not specifically indicate bronchogenic carcinoma. Bronchoscopy would require a separate clinical indication.",
      "B": "Bone marrow biopsy is not routinely indicated solely because this organism has been isolated; it would require separate evidence of a haematological disorder.",
      "D": "There is no established specific association that makes cystoscopy the priority investigation in this presentation.",
      "E": "Thyroid malignancy is not the relevant associated condition."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q300",
    "subdomain": "Cardiology",
    "topic": "Giant cell myocarditis",
    "difficulty": "Moderate",
    "stem": "A 39-year-old man presents with rapidly progressive breathlessness, chest discomfort and palpitations. Over several days he develops severe left ventricular dysfunction and recurrent ventricular tachycardia. Coronary angiography shows no obstructive coronary disease. Cardiac MRI demonstrates extensive myocardial inflammation, but the clinical course is unusually aggressive despite initial treatment for acute myocarditis. Which diagnosis should be particularly considered?",
    "options": {
      "A": "Stable coronary artery disease",
      "B": "Hypertrophic cardiomyopathy",
      "C": "Giant cell myocarditis",
      "D": "Arrhythmogenic right ventricular cardiomyopathy",
      "E": "Chronic constrictive pericarditis"
    },
    "correct_letter": "C",
    "why_correct": "Giant cell myocarditis is a rare, potentially fulminant inflammatory myocardial disease that can cause rapidly progressive heart failure, ventricular arrhythmias and cardiogenic shock. Endomyocardial biopsy may establish the diagnosis. Rapidly progressive heart failure with ventricular arrhythmias and suspected myocarditis warrants urgent specialist assessment for aggressive inflammatory myocardial disease, including giant cell myocarditis.",
    "distractor_analysis": {
      "A": "Stable coronary artery disease does not explain severe acute myocardial inflammation, particularly with unobstructed coronary arteries.",
      "B": "Hypertrophic cardiomyopathy is characterised by unexplained myocardial hypertrophy and may cause arrhythmias, but does not explain the acute inflammatory presentation.",
      "D": "Arrhythmogenic right ventricular cardiomyopathy is an inherited myocardial disease associated with ventricular arrhythmias and structural abnormalities, classically involving the right ventricle. The rapid inflammatory deterioration favours giant cell myocarditis.",
      "E": "Constrictive pericarditis causes impaired diastolic filling due to pericardial disease; it does not usually cause this rapidly progressive inflammatory myocardial syndrome."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q301",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Congenital adrenal hyperplasia due to 11β-hydroxylase deficiency",
    "difficulty": "Moderate",
    "stem": "A 15-year-old boy presents with early virilisation and persistent hypertension. Blood tests show suppressed renin and evidence of androgen excess. Further endocrine investigation demonstrates increased concentrations of 11-deoxycorticosterone. Which enzyme deficiency best explains the combination of hypertension and androgen excess?",
    "options": {
      "A": "11β-hydroxylase deficiency",
      "B": "17α-hydroxylase deficiency",
      "C": "5α-reductase deficiency",
      "D": "Aromatase deficiency",
      "E": "21-hydroxylase deficiency"
    },
    "correct_letter": "A",
    "why_correct": "11β-hydroxylase deficiency causes accumulation of 11-deoxycorticosterone, which has mineralocorticoid activity and can produce hypertension with suppressed renin. Increased adrenal androgen production can cause virilisation. Hypertension with androgen excess and elevated 11-deoxycorticosterone suggests 11β-hydroxylase deficiency.",
    "distractor_analysis": {
      "B": "17α-hydroxylase deficiency can cause hypertension and low-renin physiology, but androgen and sex-steroid production is reduced rather than increased.",
      "C": "5α-reductase deficiency affects conversion of testosterone to dihydrotestosterone and can alter genital development; it does not explain mineralocorticoid-mediated hypertension.",
      "D": "Aromatase deficiency alters sex-steroid conversion and may cause androgen excess, but does not explain the characteristic elevated 11-deoxycorticosterone.",
      "E": "21-hydroxylase deficiency can cause androgen excess, but salt-wasting or simple virilising forms do not characteristically produce hypertension from 11-deoxycorticosterone accumulation."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q302",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Diabetic muscle infarction",
    "difficulty": "Moderate",
    "stem": "A 49-year-old woman with longstanding diabetes and established microvascular complications presents with acute pain and swelling in her thigh. She is afebrile and has no history of trauma. The affected muscle is tender, but there is no overlying erythema. Creatine kinase is normal or only mildly elevated, and inflammatory markers are modestly raised. MRI shows muscle oedema with areas of abnormal signal but no drainable collection. Which diagnosis is most likely?",
    "options": {
      "A": "Polymyositis",
      "B": "Pyomyositis with a mature intramuscular abscess",
      "C": "Acute compartment syndrome",
      "D": "Deep vein thrombosis",
      "E": "Diabetic muscle infarction"
    },
    "correct_letter": "E",
    "why_correct": "Diabetic muscle infarction, also called diabetic myonecrosis, is an uncommon complication of longstanding diabetes, often with microvascular disease. It causes acute atraumatic muscle pain and swelling; creatine kinase may be normal or only mildly elevated. In a patient with longstanding diabetes and microvascular complications, acute atraumatic focal muscle pain should raise the possibility of diabetic muscle infarction while urgent alternatives, especially infection and compartment syndrome, are assessed.",
    "distractor_analysis": {
      "A": "Polymyositis usually causes subacute, relatively symmetrical proximal muscle weakness rather than sudden focal muscle pain and swelling.",
      "B": "Pyomyositis is an infectious process. Fever, systemic illness or a collection may support it, although early infection can be less obvious. The diagnosis must be considered carefully before attributing muscle symptoms to infarction.",
      "C": "Compartment syndrome is a clinical emergency characterised by concerning compartment findings and possible neurovascular compromise. It must not be dismissed solely because of imaging or laboratory results, but the vignette does not provide its characteristic clinical pattern.",
      "D": "DVT can cause limb pain and swelling, but does not explain the characteristic intramuscular MRI abnormalities as well."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q303",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Clozapine-associated myocarditis",
    "difficulty": "Moderate",
    "stem": "A 29-year-old man begins clozapine for treatment-resistant schizophrenia. During the early weeks of treatment, he develops fever, chest discomfort, persistent tachycardia and breathlessness. Blood tests reveal elevated cardiac troponin and inflammatory markers. Echocardiography demonstrates new left ventricular systolic dysfunction. Which adverse drug reaction is the most important to suspect?",
    "options": {
      "A": "Serotonin syndrome",
      "B": "Acute lithium toxicity",
      "C": "Clozapine-induced agranulocytosis",
      "D": "Neuroleptic malignant syndrome",
      "E": "Clozapine-associated myocarditis"
    },
    "correct_letter": "E",
    "why_correct": "Clozapine-associated myocarditis can present during early treatment with fever, tachycardia, chest symptoms, elevated troponin and impaired ventricular function. This presentation warrants urgent assessment and specialist management. New persistent tachycardia, systemic symptoms and cardiac injury soon after clozapine initiation should raise concern for myocarditis.",
    "distractor_analysis": {
      "A": "Serotonin syndrome is associated with serotonergic drug exposure and typically features neuromuscular hyperactivity, including clonus and hyperreflexia.",
      "B": "Lithium toxicity can cause neurological, gastrointestinal and cardiac manifestations, but there is no stated lithium exposure and the timing points towards clozapine-associated myocarditis.",
      "C": "Clozapine-associated agranulocytosis is an important haematological adverse effect, but it is identified by neutropenia and does not explain the raised cardiac troponin and new ventricular dysfunction.",
      "D": "Neuroleptic malignant syndrome typically involves severe rigidity, altered mental state, autonomic instability and often substantial creatine kinase elevation. It does not best explain the cardiac injury pattern described."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q304",
    "subdomain": "Endocrinology & diabetes",
    "topic": "Insulin-derived amyloidosis at injection sites",
    "difficulty": "Moderate",
    "stem": "A 58-year-old man with longstanding insulin-treated diabetes has persistently poor glycaemic control despite escalating insulin doses. Examination reveals a firm subcutaneous lump at a site he has used repeatedly for insulin injections. After he begins injecting into unaffected tissue, his glucose concentrations fall substantially and his insulin requirement decreases. Which diagnosis best explains this presentation?",
    "options": {
      "A": "Insulin autoimmune syndrome",
      "B": "Diabetic lipoatrophy",
      "C": "Insulin-derived amyloidosis at the injection site",
      "D": "Generalised insulin resistance caused by glucocorticoid excess",
      "E": "Endogenous hyperinsulinaemia from an insulinoma"
    },
    "correct_letter": "C",
    "why_correct": "Repeated insulin injections can lead to local amyloid deposits composed of insulin. Absorption from affected tissue may be impaired, leading to escalating doses and poor glycaemic control. Moving injections to unaffected tissue can substantially increase insulin absorption. Poor glycaemic control with a firm, repeatedly used insulin injection site should prompt consideration of insulin-derived amyloidosis as well as lipohypertrophy.",
    "distractor_analysis": {
      "A": "Insulin autoimmune syndrome involves insulin-binding antibodies and can cause abnormal glucose patterns, particularly hypoglycaemia. It does not characteristically produce a local amyloid mass.",
      "B": "Lipoatrophy causes loss of subcutaneous fat at injection sites, rather than a firm mass associated with impaired insulin absorption.",
      "D": "Glucocorticoid excess can cause systemic insulin resistance, but it does not explain the localised firm injection-site mass or the marked improvement after changing injection sites.",
      "E": "An insulinoma produces endogenous insulin and typically causes inappropriate hypoglycaemia; it does not explain this injection-site finding."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q305",
    "subdomain": "Cardiology",
    "topic": "Catecholaminergic polymorphic ventricular tachycardia",
    "difficulty": "Moderate",
    "stem": "A 17-year-old boy experiences recurrent syncope during competitive sport. His resting ECG is normal, with no prolonged QT interval or characteristic Brugada pattern. Echocardiography reveals no structural heart disease. During exercise testing, ventricular ectopic beats appear and progress to bidirectional ventricular tachycardia. Which diagnosis best explains these findings?",
    "options": {
      "A": "Catecholaminergic polymorphic ventricular tachycardia",
      "B": "Congenital long QT syndrome",
      "C": "Wolff–Parkinson–White syndrome",
      "D": "Hypertrophic cardiomyopathy",
      "E": "Arrhythmogenic right ventricular cardiomyopathy"
    },
    "correct_letter": "A",
    "why_correct": "Catecholaminergic polymorphic ventricular tachycardia is an inherited arrhythmia syndrome in which adrenergic stimulation can trigger ventricular arrhythmias despite a structurally normal heart and often normal resting ECG. Bidirectional or polymorphic ventricular tachycardia during exercise is a key clue. Exercise-triggered syncope in a young person with a normal resting ECG and structurally normal heart warrants consideration of an inherited arrhythmia syndrome, particularly CPVT.",
    "distractor_analysis": {
      "B": "Congenital long QT syndrome can cause exertional syncope, but QT prolongation is a central diagnostic clue in many cases. The exercise-induced bidirectional ventricular tachycardia described is more characteristic of CPVT.",
      "C": "Wolff–Parkinson–White syndrome is associated with ventricular pre-excitation on the ECG, although intermittent pre-excitation can occur. It does not best explain this exercise-induced arrhythmia pattern.",
      "D": "Hypertrophic cardiomyopathy can cause exertional syncope, but structural imaging would usually demonstrate ventricular hypertrophy.",
      "E": "Arrhythmogenic right ventricular cardiomyopathy can cause exercise-associated ventricular arrhythmias, but structural or electrical evidence of the cardiomyopathy would be sought; bidirectional ventricular tachycardia with a normal resting ECG and structurally normal heart points more strongly to CPVT."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q306",
    "subdomain": "Neurology",
    "topic": "Cerebral cavernous malformations",
    "difficulty": "Moderate",
    "stem": "A 39-year-old woman presents with a focal seizure. MRI of the brain demonstrates several well-circumscribed lesions containing blood products of different ages, giving a mixed-signal “popcorn-like” appearance on susceptibility-sensitive sequences. There is no associated high-flow vascular shunt. Her father had a similar diagnosis. Which lesion is most likely?",
    "options": {
      "A": "Saccular intracranial aneurysms",
      "B": "Arteriovenous malformations",
      "C": "Cerebral cavernous malformations",
      "D": "Multiple intracranial meningiomas",
      "E": "Acute ischaemic infarcts"
    },
    "correct_letter": "C",
    "why_correct": "Cavernous malformations are low-flow vascular lesions composed of abnormal dilated vascular spaces. Repeated small haemorrhages can produce blood products of different ages and a characteristic mixed-signal appearance on MRI. Multiple lesions and a family history support a familial form. Multiple low-flow brain vascular lesions with characteristic susceptibility findings and a family history suggest familial cerebral cavernous malformations.",
    "distractor_analysis": {
      "A": "Saccular aneurysms are focal arterial dilatations and are more commonly associated with subarachnoid haemorrhage when they rupture; they do not characteristically produce this MRI appearance.",
      "B": "Arteriovenous malformations contain abnormal arterial-to-venous shunts and often demonstrate high-flow vascular features, unlike the low-flow lesions described.",
      "D": "Meningiomas are extra-axial tumours that commonly enhance after contrast and may cause seizures, but do not have the described vascular-malformation appearance.",
      "E": "Ischaemic infarcts cause acute tissue injury in a vascular distribution and do not typically produce multiple longstanding popcorn-like lesions containing blood products of different ages."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q307",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Macroamylasaemia",
    "difficulty": "Moderate",
    "stem": "A 46-year-old woman is found to have persistently elevated serum amylase during investigations for intermittent abdominal discomfort. Serum lipase is normal, renal function is normal, and abdominal imaging shows no evidence of pancreatitis. Urinary amylase excretion is low relative to the serum amylase concentration. Which diagnosis best explains the biochemical findings?",
    "options": {
      "A": "Acute pancreatitis",
      "B": "Acute mesenteric ischaemia",
      "C": "Salivary-gland inflammation",
      "D": "Severe renal impairment",
      "E": "Macroamylasaemia"
    },
    "correct_letter": "E",
    "why_correct": "Macroamylasaemia occurs when amylase forms a high-molecular-weight complex, often with immunoglobulin. The complex is poorly filtered by the kidneys, causing elevated serum amylase with relatively low urinary amylase excretion. It is often a benign explanation for persistent hyperamylasaemia. Persistent isolated hyperamylasaemia with normal lipase, preserved renal function and low urinary amylase should prompt consideration of macroamylasaemia.",
    "distractor_analysis": {
      "A": "Acute pancreatitis usually presents with a compatible acute clinical syndrome and typically raises serum lipase. The persistent isolated amylase elevation and absent imaging findings argue against it.",
      "B": "Acute mesenteric ischaemia may cause abdominal pain and sometimes elevated amylase, but would require assessment for an acute ischaemic presentation rather than explaining this stable, persistent biochemical pattern.",
      "C": "Salivary-gland disease can elevate serum amylase, but does not specifically explain the low urinary excretion relative to serum concentration that suggests macroamylasaemia.",
      "D": "Renal impairment can reduce amylase clearance, but the case specifically describes normal renal function."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q308",
    "subdomain": "Renal & urology",
    "topic": "Nephrogenic systemic fibrosis",
    "difficulty": "Moderate",
    "stem": "A 59-year-old man with advanced chronic kidney disease develops progressive thickening and hardening of the skin over his limbs. The skin has a woody texture, joint movement is becoming restricted, and examination reveals no typical sclerodactyly. His symptoms began after contrast-enhanced imaging performed when his renal function was severely impaired. Which exposure is most strongly associated with the suspected disorder?",
    "options": {
      "A": "Gadolinium-based contrast agent",
      "B": "Barium sulphate contrast",
      "C": "Oral polyethylene glycol bowel preparation",
      "D": "Iodinated contrast agent",
      "E": "Intravenous iron"
    },
    "correct_letter": "A",
    "why_correct": "Nephrogenic systemic fibrosis is a rare fibrosing disorder historically associated with exposure to certain gadolinium-based contrast agents in patients with severe renal impairment. Risk varies by agent, and modern contrast practice has reduced this complication. Progressive woody skin thickening and restricted joint movement in a patient with severe renal impairment, following historical gadolinium exposure, suggest nephrogenic systemic fibrosis.",
    "distractor_analysis": {
      "B": "Barium sulphate is used in gastrointestinal imaging and is not the recognised trigger for this fibrosing syndrome.",
      "C": "Polyethylene glycol is used for bowel preparation and does not explain the characteristic post-exposure fibrosing skin disease.",
      "D": "Iodinated contrast can be associated with acute kidney injury in susceptible patients, but it is not the characteristic exposure associated with nephrogenic systemic fibrosis.",
      "E": "Intravenous iron can cause adverse effects, but it is not the established exposure associated with nephrogenic systemic fibrosis."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q309",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Hereditary coproporphyria",
    "difficulty": "Moderate",
    "stem": "A 28-year-old woman develops severe abdominal pain, nausea and agitation. During a subsequent episode, she develops blistering skin lesions on sun-exposed areas. Urinary porphobilinogen and porphyrin precursors are elevated during the acute illness. Further specialist testing identifies a marked increase in faecal coproporphyrin III. Which diagnosis best accounts for the combination of neurovisceral and cutaneous manifestations?",
    "options": {
      "A": "Congenital erythropoietic porphyria",
      "B": "Hereditary coproporphyria",
      "C": "Acute intermittent porphyria",
      "D": "Porphyria cutanea tarda",
      "E": "Lead poisoning"
    },
    "correct_letter": "B",
    "why_correct": "Hereditary coproporphyria results from deficient coproporphyrinogen oxidase activity. It can cause acute neurovisceral attacks and, in some affected individuals, photosensitive skin lesions. Faecal porphyrin analysis helps distinguish it from other acute hepatic porphyrias. Acute neurovisceral attacks with photosensitive skin lesions suggest a porphyria in which both manifestations occur; biochemical profiling is needed to identify the specific type.",
    "distractor_analysis": {
      "A": "Congenital erythropoietic porphyria typically causes severe photosensitivity beginning early in life and is associated with a different porphyrin pattern.",
      "C": "Acute intermittent porphyria causes acute neurovisceral attacks but does not typically cause the blistering photosensitivity described.",
      "D": "Porphyria cutanea tarda causes fragile skin and blistering photosensitivity, but does not characteristically cause acute neurovisceral attacks with markedly raised urinary porphobilinogen.",
      "E": "Lead poisoning can cause abdominal pain, neurological symptoms and disturbed haem synthesis, but does not explain the combined biochemical pattern and characteristic faecal porphyrin findings."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q310",
    "subdomain": "Gastroenterology & hepatology",
    "topic": "Hepatic adenoma associated with anabolic steroid exposure",
    "difficulty": "Moderate",
    "stem": "A 37-year-old man presents with right upper-quadrant discomfort. Liver imaging identifies a hypervascular hepatic mass. He has used anabolic-androgenic steroids for several years for bodybuilding. Background liver imaging does not show established cirrhosis, and there is no evidence of chronic viral hepatitis. Which benign liver lesion is particularly associated with anabolic steroid exposure?",
    "options": {
      "A": "Biliary hamartoma",
      "B": "Hepatocellular adenoma",
      "C": "Haemangioma",
      "D": "Simple hepatic cyst",
      "E": "Focal nodular hyperplasia"
    },
    "correct_letter": "B",
    "why_correct": "Hepatocellular adenomas are benign hepatocellular tumours associated with certain hormonal exposures, including anabolic steroids. They can cause abdominal discomfort and, depending on their features, carry risks including haemorrhage and malignant transformation. A solid hepatic lesion in someone using anabolic steroids should prompt consideration of hepatocellular adenoma and appropriate specialist imaging assessment.",
    "distractor_analysis": {
      "A": "Biliary hamartomas are benign developmental lesions of the bile ducts and do not have the characteristic exposure relationship described.",
      "C": "Haemangioma is a common benign vascular liver lesion, but anabolic steroid exposure is not its characteristic association.",
      "D": "A simple hepatic cyst is a fluid-filled lesion and does not explain a hypervascular solid mass.",
      "E": "Focal nodular hyperplasia is a benign hyperplastic lesion associated with a vascular abnormality. It is not characteristically linked to anabolic steroid exposure."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q311",
    "subdomain": "Haematology & oncology",
    "topic": "Systemic mastocytosis",
    "difficulty": "Moderate",
    "stem": "A 46-year-old woman has recurrent episodes of flushing, abdominal cramping, diarrhoea and light-headedness. Examination reveals multiple small brown-red skin lesions that become raised and itchy when rubbed. Serum tryptase is persistently elevated when she is clinically well. Which molecular abnormality is most strongly associated with systemic mastocytosis?",
    "options": {
      "A": "BCR–ABL1 fusion",
      "B": "PML–RARA fusion",
      "C": "JAK2 V617F mutation",
      "D": "Activating mutation in KIT",
      "E": "MYD88 L265P mutation"
    },
    "correct_letter": "D",
    "why_correct": "Systemic mastocytosis is commonly associated with an activating KIT mutation, particularly D816V, which promotes abnormal mast-cell survival and accumulation. Mediator release accounts for flushing, gastrointestinal symptoms and episodes of hypotension; persistently elevated basal tryptase supports further investigation. Recurrent mediator-related symptoms, suggestive skin lesions and persistently elevated basal tryptase should raise suspicion of a clonal mast-cell disorder.",
    "distractor_analysis": {
      "A": "BCR–ABL1 is associated with chronic myeloid leukaemia and some acute lymphoblastic leukaemias.",
      "B": "PML–RARA is the characteristic fusion in acute promyelocytic leukaemia.",
      "C": "JAK2 V617F is strongly associated with several classical myeloproliferative neoplasms, including polycythaemia vera.",
      "E": "MYD88 L265P is strongly associated with lymphoplasmacytic lymphoma and Waldenström macroglobulinaemia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q312",
    "subdomain": "Immunology",
    "topic": "Wiskott–Aldrich syndrome",
    "difficulty": "Moderate",
    "stem": "A 2-year-old boy is referred with recurrent bacterial infections, eczema and easy bruising. His full blood count shows thrombocytopenia, and the platelets are unusually small. His maternal uncle died in childhood following recurrent infections. Which molecular defect most likely explains this presentation?",
    "options": {
      "A": "Defective WAS protein, impairing actin cytoskeleton remodelling in haematopoietic cells",
      "B": "Defective C1 esterase inhibitor, causing excessive bradykinin activity",
      "C": "Defective BTK signalling, impairing B-cell maturation",
      "D": "Defective CD18 integrin, impairing leukocyte adhesion",
      "E": "Defective NADPH oxidase, impairing the neutrophil respiratory burst"
    },
    "correct_letter": "A",
    "why_correct": "Wiskott–Aldrich syndrome is an X-linked disorder caused by pathogenic variants in WAS. WAS protein supports actin cytoskeleton organisation and immune-cell function. The characteristic combination is eczema, recurrent infections and thrombocytopenia with small platelets.",
    "distractor_analysis": {
      "B": "C1 esterase inhibitor deficiency causes hereditary angioedema, characterised by episodic swelling rather than the characteristic triad described here.",
      "C": "BTK deficiency causes X-linked agammaglobulinaemia, with markedly reduced mature B cells and immunoglobulins.",
      "D": "CD18 deficiency causes leukocyte adhesion deficiency, typically associated with impaired pus formation, delayed umbilical cord separation and recurrent bacterial infections.",
      "E": "NADPH oxidase dysfunction causes chronic granulomatous disease, characterised by impaired oxidative killing and recurrent infections, but not the classic small-platelet thrombocytopenia."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q313",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Metachromatic leukodystrophy",
    "difficulty": "Moderate",
    "stem": "A 6-year-old child develops progressive gait disturbance, loss of previously acquired skills and peripheral neuropathy. MRI demonstrates symmetrical abnormalities of cerebral white matter. Enzyme analysis identifies deficient arylsulfatase A activity. Which substance accumulates in this disorder?",
    "options": {
      "A": "Glucocerebroside",
      "B": "Very-long-chain fatty acids",
      "C": "Ganglioside GM2",
      "D": "Sulfatides",
      "E": "Sphingomyelin"
    },
    "correct_letter": "D",
    "why_correct": "Metachromatic leukodystrophy is usually caused by deficient arylsulfatase A activity, resulting in sulfatide accumulation in myelin and progressive central and peripheral demyelination. Progressive demyelination with deficient arylsulfatase A activity suggests metachromatic leukodystrophy, associated with sulfatide accumulation.",
    "distractor_analysis": {
      "A": "Glucocerebroside accumulation characterises Gaucher disease, caused by deficient glucocerebrosidase activity.",
      "B": "Increased very-long-chain fatty acids are associated with X-linked adrenoleukodystrophy, which can cause cerebral demyelination and adrenal dysfunction.",
      "C": "GM2 ganglioside accumulation occurs in Tay–Sachs disease and related GM2 gangliosidoses.",
      "E": "Sphingomyelin accumulation is characteristic of acid sphingomyelinase deficiency, historically known as Niemann–Pick disease types A and B."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q314",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Menkes disease",
    "difficulty": "Moderate",
    "stem": "A 4-month-old boy presents with developmental regression, hypotonia and seizures. His hair is sparse, brittle and unusually twisted on microscopy. Blood tests demonstrate low copper and ceruloplasmin concentrations. His mother’s male relatives include two boys who died in infancy with unexplained neurological disease. Which molecular defect most directly explains this presentation?",
    "options": {
      "A": "Impaired cellular copper transport due to pathogenic variants in ATP7A",
      "B": "Impaired intestinal zinc absorption due to pathogenic variants in SLC39A4",
      "C": "Deficient mitochondrial iron–sulphur cluster formation",
      "D": "Impaired copper incorporation into ceruloplasmin due to pathogenic variants in ATP7B",
      "E": "Deficient lysosomal glucocerebrosidase activity"
    },
    "correct_letter": "A",
    "why_correct": "Menkes disease is an X-linked disorder caused by pathogenic variants in ATP7A. Impaired copper transport disrupts copper distribution and the function of copper-dependent enzymes. Neurological deterioration and characteristic brittle, twisted hair are important clues. An infant boy with neurological deterioration and characteristic brittle, twisted hair should prompt consideration of Menkes disease. The underlying defect is impaired copper transport caused by ATP7A dysfunction.",
    "distractor_analysis": {
      "B": "SLC39A4 variants cause inherited acrodermatitis enteropathica, characterised by zinc deficiency, dermatitis, diarrhoea and impaired growth.",
      "C": "Mitochondrial iron–sulphur cluster disorders can cause neurological and metabolic abnormalities, but do not explain the characteristic copper deficiency and hair findings.",
      "D": "ATP7B variants cause Wilson disease, in which impaired biliary copper excretion leads to copper accumulation, particularly in the liver and brain.",
      "E": "Glucocerebrosidase deficiency causes Gaucher disease, which can present with hepatosplenomegaly, cytopenias and, in some forms, neurological manifestations."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q315",
    "subdomain": "Pharmacology & prescribing",
    "topic": "Methanol poisoning",
    "difficulty": "Moderate",
    "stem": "A 37-year-old man presents with vomiting, abdominal discomfort and progressive visual disturbance after drinking an illicitly produced alcoholic liquid. Blood gas analysis shows a high-anion-gap metabolic acidosis. His measured serum osmolality is elevated relative to the calculated value. Which metabolite is primarily responsible for the characteristic visual toxicity?",
    "options": {
      "A": "Acetaldehyde",
      "B": "Formate",
      "C": "Acetoacetate",
      "D": "Salicylate",
      "E": "Oxalate"
    },
    "correct_letter": "B",
    "why_correct": "Methanol is metabolised to formaldehyde and then formate. Formate contributes to metabolic acidosis and is strongly associated with optic-nerve and retinal toxicity. Visual disturbance with high-anion-gap metabolic acidosis after exposure to illicit alcohol should raise urgent concern for methanol poisoning.",
    "distractor_analysis": {
      "A": "Acetaldehyde is a metabolite of ethanol and contributes to some of its toxic effects, but it is not the principal cause of methanol-associated visual toxicity.",
      "C": "Acetoacetate is a ketone body and may contribute to ketoacidosis, but it is not responsible for the characteristic visual injury in methanol poisoning.",
      "D": "Salicylate poisoning can cause mixed acid–base disturbances and tinnitus, among other features, but does not explain the exposure history and characteristic methanol-related visual toxicity.",
      "E": "Oxalate is associated with ethylene glycol poisoning and can form calcium oxalate crystals, contributing to renal injury."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q316",
    "subdomain": "Clinical biochemistry and metabolism",
    "topic": "Fabry disease",
    "difficulty": "Moderate",
    "stem": "A 27-year-old man has episodic burning pain in his hands and feet, reduced sweating and clusters of small dark-red skin lesions. Urinalysis reveals albuminuria, and echocardiography shows left ventricular hypertrophy. His maternal uncle developed renal failure at a young age. Which enzyme deficiency is associated with this disorder?",
    "options": {
      "A": "Acid sphingomyelinase",
      "B": "Hexosaminidase A",
      "C": "Alpha-galactosidase A",
      "D": "Lysosomal acid lipase",
      "E": "Beta-glucocerebrosidase"
    },
    "correct_letter": "C",
    "why_correct": "Fabry disease is an X-linked lysosomal storage disorder caused by deficient alpha-galactosidase A activity, resulting in accumulation of globotriaosylceramide and related substrates. It can affect the skin, peripheral nerves, kidneys and heart. Neuropathic pain, hypohidrosis, angiokeratomas, renal disease and cardiac hypertrophy should raise suspicion for Fabry disease.",
    "distractor_analysis": {
      "A": "Acid sphingomyelinase deficiency is associated with acid sphingomyelinase deficiency disorders, historically including Niemann–Pick disease types A and B.",
      "B": "Hexosaminidase A deficiency causes Tay–Sachs disease.",
      "D": "Lysosomal acid lipase deficiency can cause hepatic disease and dyslipidaemia but does not explain the characteristic Fabry phenotype.",
      "E": "Beta-glucocerebrosidase deficiency causes Gaucher disease, which may present with hepatosplenomegaly, cytopenias and bone disease."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q317",
    "subdomain": "Genetics",
    "topic": "Von Hippel–Lindau disease",
    "difficulty": "Moderate",
    "stem": "A 35-year-old woman is found to have bilateral renal lesions during surveillance after treatment for a retinal haemangioblastoma. Her father underwent surgery for a similar renal tumour at a young age. Genetic testing identifies a pathogenic germline variant in VHL. Which additional tumour is particularly associated with this inherited syndrome?",
    "options": {
      "A": "Medullary thyroid carcinoma",
      "B": "Hepatocellular carcinoma arising in chronic viral hepatitis",
      "C": "Gastric gastrointestinal stromal tumour associated with a KIT variant",
      "D": "Colonic adenocarcinoma arising from hundreds of adenomatous polyps",
      "E": "Phaeochromocytoma"
    },
    "correct_letter": "E",
    "why_correct": "Von Hippel–Lindau disease is an autosomal dominant tumour-predisposition syndrome associated with retinal and central nervous system haemangioblastomas, clear-cell renal cell carcinoma, phaeochromocytoma and several other lesions. A family history of renal tumours combined with retinal haemangioblastoma should raise suspicion for von Hippel–Lindau disease.",
    "distractor_analysis": {
      "A": "Medullary thyroid carcinoma is classically associated with multiple endocrine neoplasia type 2 and pathogenic variants in RET.",
      "B": "Hepatocellular carcinoma is associated with chronic liver disease and specific inherited conditions, but it is not the characteristic association being tested.",
      "C": "Many familial gastrointestinal stromal tumours are associated with activating variants in genes such as KIT or PDGFRA, rather than the characteristic VHL tumour spectrum.",
      "D": "Numerous colorectal adenomas with substantial colorectal cancer risk suggest familial adenomatous polyposis, associated with APC."
    },
    "generalisation": "",
    "review_status": "reviewed"
  },
  {
    "id": "M1Q318",
    "subdomain": "Genetics",
    "topic": "Marfan syndrome",
    "difficulty": "Moderate",
    "stem": "A 24-year-old man is unusually tall, with long fingers, pectus deformity and generalised joint laxity. He has severe myopia, and ophthalmological examination identifies displacement of the lens. His father died suddenly from a ruptured aortic aneurysm. Which protein is most directly implicated in the underlying disorder?",
    "options": {
      "A": "Dystrophin",
      "B": "Elastase inhibitor alpha-1 antitrypsin",
      "C": "Type IV collagen",
      "D": "Type VII collagen",
      "E": "Fibrillin-1"
    },
    "correct_letter": "E",
    "why_correct": "Marfan syndrome is usually caused by pathogenic variants in FBN1, which encodes fibrillin-1, a component of extracellular microfibrils. The condition can affect the skeleton, eyes and cardiovascular system, particularly the aortic root. A combination of characteristic skeletal features, lens displacement and aortic disease suggests Marfan syndrome and warrants assessment for potentially life-threatening cardiovascular involvement.",
    "distractor_analysis": {
      "A": "Dystrophin deficiency causes muscular dystrophy.",
      "B": "Alpha-1 antitrypsin deficiency can cause emphysema and liver disease but does not explain the characteristic combination of skeletal features, lens displacement and aortic disease.",
      "C": "Type IV collagen abnormalities are associated with disorders such as Alport syndrome, which typically affects the kidneys, hearing and eyes.",
      "D": "Type VII collagen abnormalities cause dystrophic epidermolysis bullosa."
    },
    "generalisation": "",
    "review_status": "reviewed"
  }
];

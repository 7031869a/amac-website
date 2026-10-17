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
  }
];

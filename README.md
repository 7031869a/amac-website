# AMaC Website — unified site (amac-medical.com)

One clean site, replacing the scattered version files. Built around the books-site
design you chose, with your real Master Cards content folded into Study Tools.

## Pages
| File             | What it is                                                            |
|------------------|-----------------------------------------------------------------------|
| index.html       | Homepage — 3D Master Series book shelf (your preferred design)        |
| books.html       | The Master Series — three volumes in detail                           |
| tools.html       | Study Tools hub — links to the live tools below                       |
| mastercards.html | **Interactive Master Cards** — your 15 detailed chapters (57–72)      |
| osce.html        | **OSCE Stations** — 18-station index, sorted by risk tier             |
| about.html       | About — the AMaC story / examiner-led method                          |
| contact.html     | Contact — message form, branded email                                 |
| CNAME            | amac-medical.com (custom domain)                                      |

All pages share the same navy/gold/cream design, Fraunces + Outfit fonts, and nav.
Keep all files together in the repo root (no sub-folders); they link by filename.

## How this was assembled
- mastercards.html reuses your chapter content **verbatim** from
  amac_plab2_complete_72chapters_v6 — no clinical wording was changed or invented.
- osce.html uses your station titles/risk tiers/summaries. Detailed walkthroughs are
  marked "In preparation" — they were NOT auto-generated.

## Before public launch (owner to provide)
- CLINICAL REVIEW: have a suitably qualified clinician verify all doses/protocols on
  mastercards.html against current UK guidance, and approve the OSCE risk labels.
- Build out the remaining OSCE station detail, Question Bank, Mock Exam.
- Pricing on books.html (currently "Launching soon").
- Confirm the info@amac-medical.com inbox is receiving mail.
- Replace placeholder Buy / tool buttons with real destinations.
- Add testimonials only when genuine.

## To deploy
Upload all files to the `amac-website` repo root (replacing the old ones), commit,
and once amac-medical.com points at this repo the unified site goes live.

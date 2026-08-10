# AI Showdown Unpacked

Create a premium, visually stunning presentation-style web app titled "Claude vs ChatGPT: The Definitive Breakdown" — designed with the polish and restraint of decks from Apple, Stripe, Linear, Notion, and OpenAI. This must NOT look like a PowerPoint or generic slide deck — it should feel like a high-end interactive product teardown.

DESIGN LANGUAGE

- Base: deep near-black background (#0B0B0F) with soft radial gradients/grain for depth.

- Two accent colors tied to brand identity: warm amber (#D97757) for Claude, cool teal (#10A37F) for ChatGPT — used consistently as visual "tags" on every comparison so the reader instantly knows which tool is being discussed without reading labels.

- Typography: large, confident display headlines (Inter/Geist-style), tight tracking on titles, generous line-height on body copy. Strong visual hierarchy — headline, sub-headline, supporting detail, never more than one idea per slide.

- Consistent 12-col grid, consistent spacing scale, rounded-2xl cards with soft shadows and subtle glow on hover.

- Icons (Lucide) for every single concept — zero plain bullet lists anywhere in the entire build.

- Smooth scroll-triggered fade/slide-up animations between sections, subtle parallax, animated counters for numeric stats, and a scroll-progress indicator with section nav dots on the side.

STRUCTURE — build each as its own full-height, visually distinct section:

1. HERO — Bold title + one-line framing ("Two AI giants, one head-to-head test"). Two glowing orbs (amber vs teal) facing off as the centerpiece visual.

2. THE THESIS — One punchy full-bleed statement slide: "Claude wins on depth and workflow. ChatGPT wins on speed and reach." Split-screen visual treatment.

3. ECOSYSTEM SHOWDOWN — Process-flow diagram: Claude shown as one connected pipeline (Deep Research → Claude Design → Claude Code → Claude Co-work → MCP integrations into Apollo/HeyGen/Meta Ads) vs ChatGPT shown as an isolated chat bubble with dotted lines to external apps requiring manual copy-paste. Make the contrast visually obvious.

4. FIVE KEY BATTLEGROUNDS — Interactive card grid covering: Writing & Tone Matching, Automation & Persistent Systems, Agentic Browser Tasks, Visual/Interactive Learning, Workflow Ecosystem. Each card: icon, one punchy insight line, colored winner badge (amber/teal).

5. LIVE TEST: THE LINKEDIN CHALLENGE — Step-tracker/timeline visual recreating the real test (schedule a LinkedIn post for 5PM tomorrow): Claude via Claude in Chrome completing each step with checkmarks vs ChatGPT/Codex stalling with an X at the final step. Make this feel like a narrative mini-story, not a table.

6. FULL SCORECARD — Custom-designed comparison table (not default HTML styling) with icon per row, animated bar comparison for Context Window (200k vs 128k tokens), and colored glow on whichever tool wins each row: Visual/Code Output, Editing Style, Writing Style, Long-Term Memory, Voice & Audio, Image/Video, Daily Reliability, Usage Limits, Quick Q&A.

7. TROPHY WALL — Two-column final summary: amber column = every Claude win, teal column = every ChatGPT win. Icon + short phrase per point only, no paragraphs.

8. VERDICT & CTA — Balanced, confident closing: "Different tools, different jobs." Simple decision guide (e.g. "Building a full product workflow → Claude. Need fast daily Q&A + voice → ChatGPT."). Clean closing line, no real logos/trademarked assets — use abstract/text-based marks only.

HARD RULES

- No plain bullet-point slides anywhere — every point becomes a card, stat block, diagram, badge, or timeline.

- Condense all source content into short, scannable, visual-first phrases — never dump long paragraphs onto a slide.

- Fully responsive, hover states on every interactive element, animated numeric comparisons where relevant.

- Reorganize content order if it improves storytelling flow, but keep every fact from the source material represented.

- Tone throughout: confident, editorial, premium — a product teardown, not a corporate slideshow.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://mofi-ai-claude-course.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/675d21d5-d7fb-467b-a779-63e2edd95161).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

"use client";

import Image from "next/image";

/* ------------------------ UI Helpers ------------------------ */

function Divider() {
  return <div className="my-12 h-px w-full bg-zinc-200/80" />;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-2 text-xl font-semibold tracking-tight text-black sm:text-2xl">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold tracking-tight text-black">
      {children}
    </h3>
  );
}

function ImageBlock({
  src,
  alt,
  label,
  hoverText,
  aspect = "16/9",
  customAspect,
  hiRes = false,
  priority = false,
}: {
  src: string;
  alt: string;
  label?: string;
  hoverText?: string;
  aspect?: "16/9" | "4/3" | "5/4";
  /** Exact ratio string like "2129 / 2044" or "1048 / 720" */
  customAspect?: string;
  hiRes?: boolean;
  priority?: boolean;
}) {
  const aspectRatio =
    customAspect ??
    (aspect === "4/3" ? "4 / 3" : aspect === "5/4" ? "5 / 4" : "16 / 9");

  // higher-res request for desktop when hiRes is true
  const sizes = hiRes
    ? "(min-width: 1024px) 1200px, 100vw"
    : "(min-width: 1024px) 900px, 100vw";

  return (
    <figure className="space-y-2">
      <div
        className="group relative w-full overflow-hidden rounded-xl bg-zinc-200"
        style={{ aspectRatio }}
        tabIndex={0}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          quality={hiRes ? 100 : 75}
          sizes={sizes}
          priority={priority}
        />

        {hoverText ? (
          <div className="pointer-events-none absolute inset-0 flex items-end bg-black/0 p-4 opacity-0 transition duration-200 group-hover:bg-black/55 group-hover:opacity-100 group-focus:bg-black/55 group-focus:opacity-100">
            <p className="text-sm font-medium leading-snug text-white">
              {hoverText}
            </p>
          </div>
        ) : null}
      </div>

      {label ? (
        <figcaption className="text-xs font-medium text-zinc-700">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

function StepSection({
  kicker,
  title,
  children,
  images,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
  images: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
        {kicker}
      </p>
      <H3>{title}</H3>

      <div className="space-y-3 text-sm leading-relaxed text-black">
        {children}
      </div>

      <div className="mt-6">{images}</div>
    </section>
  );
}

/* ------------------------ Page ------------------------ */

export default function ProjectMechThesisPage() {
  return (
    <div className="flex justify-center bg-transparent px-3 py-10">
      {/* Match Project2 styling: light panels, black borders, no dark-mode panels */}
      <main className="w-full max-w-4xl rounded-2xl border border-black bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-10">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            (Thesis) Analyzing the Softening Behavior of Brain Vessels
          </h1>
          <p className="text-sm font-medium text-zinc-700">
            University of Utah • Biomechanics • Experimental mechanics • Tissue
            microstructure
          </p>
        </header>

        {/* Hero (placeholder) */}
        <section className="mt-8">
          <ImageBlock
            src="/photos/ME-thesis-hero.jpg"
            alt="Biomechanics testing of a cerebral artery (placeholder)"
            label="Placeholder: hero image (tester + vessel, or a montage of key figures)"
            hoverText="Project focus: compare sub-yield overstretch softening to softening caused by controlled collagen digestion."
            aspect="16/9"
            hiRes
            priority
          />
        </section>

        {/* Summary + Skills (DO NOT TOUCH per request) */}
        <section className="mt-12 space-y-6">
          <div className="rounded-2xl border border-black bg-white/75 p-6 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
              Summary
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              Cerebral arteries can mechanically "soften" after sub-failure loading, even though they
              do not show any physical signals of damage. Because collagen is a major load-bearing ingredient in the artery wall,
              a common assumption is that softening is caused by collagen “damage.”
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              In this project, I tested that idea using a simple comparison: I measured how vessels
              soften after quasi-static overstretch, and compared that behavior to
              softening caused by controlled collagen removal using collagenase
              (an enzyme that targets collagen).
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Skills Required &amp; Applied
              </p>

              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "Ex vivo arterial testing & specimen handling",
                  "Protocol & experiment design",
                  "Coding (MATLAB, LabView)",
                  "Image processing (motion-tracking, feature detection)",
                  "Quantitative comparisons + statistics",
                  "Biochemical reagent handling",
                  "Data visualization",
                  "Technical writing (thesis + scientific paper)",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-black">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-black" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        {/* Background */}
        <section className="space-y-3">
          <Kicker>Background</Kicker>
          <H2>Why softening in brain vessels matters</H2>

          <p className="text-sm leading-relaxed text-black">
            Cerebral blood vessels are often overstretched during traumatic brain injuries and
            surgical procedures. Even without rupture, these events can cause the vessel to "soften". 
            This kind of sub-failure damage is not typically accounted for in injury models or clinical discussions,
            despite evidence that vascular dysfunction after TBI may contribute to ischemic stroke risk.
          </p>

          <p className="text-sm leading-relaxed text-black">
            Previous work has suggested this softening effect is a result of collagen fibers becoming 
            damaged and "denaturing" at sub-failure vessel stretch limits. However, other work has 
            reported collagen fiber damage to occur at higher strains than where vessel softening begins. 
          </p>

          <p className="text-sm leading-relaxed text-black">
            My thesis was aimed to further understand and confirm collagen’s role in vessel softening 
            by directly changing the collagen content of brain vessels and testing how that changes the mechanical outcome. 
            We hypothesized that if collagen is driving sub-yield softening, then partial collagen degradation should measurably 
            shift the softening response even if the collagen is not showing signs of damage/denaturation.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/elastin_collagen_curve.jpg"
              alt="Placeholder: artery wall constituents"
              label="Placeholder: vessel wall schematic (elastin vs collagen regimes)"
              hoverText="Place a clean schematic: elastin-dominated vs collagen-dominated stretch regimes."
              customAspect="1048 / 720"
              hiRes
            />
            <ImageBlock
              src="/photos/softening.jpg"
              alt="Placeholder: conceptual softening plot"
              label="Placeholder: baseline stress–stretch curves before/after overstretch"
              hoverText="A simple plot: Baseline 1 vs Baseline 2 (post-insult) showing softening."
              customAspect="2129 / 2044"
              hiRes
            />
          </div>
        </section>

        <Divider />

        {/* Methods + Steps 1–4 */}
        <section className="space-y-3">
          <Kicker>Methods</Kicker>
          <H2>How I tested collagen's role in softening</H2>

          <p className="text-sm leading-relaxed text-black">
            I tested our hypothesis following two sets of experiments: (1) I compared overstretch-induced softening
            in native vs collagen-digested brain vessels, and (2) I continously digested brain vessels of their 
            collagen and measured for corresponding softening effects. The preparation of vessels and processing of the data were 
            distinct between the sets of experiments; however, both sets of experiments followed the same general 
            testing protocol:
          </p>

          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-black">
            <li>
              <strong>Mount and baseline-test vessels</strong> on a custom vessel testing system.
            </li>
            <li>
              <strong>Apply the sub-failure damage condition</strong> via axial overstretch or collagen digestion.
            </li>
            <li>
              <strong>Re-test baseline response</strong> and compute softening from Baseline 1 → Baseline 2.
            </li>
          </ol>

          <div className="mt-6 space-y-10">
            <StepSection
              kicker="Step 1"
              title="Mount and baseline-test vessels"
              images={
                <div className="grid gap-6 sm:grid-cols-2">
                  <ImageBlock
                    src="/photos/ME-step1-tester.jpg"
                    alt="Placeholder: tester overview"
                    label="Placeholder: testing system overview"
                    hoverText="Bath + cannulation needles + axial actuation + force + pressure sensors."
                    aspect="4/3"
                  />
                  <ImageBlock
                    src="/photos/ME-step1-mounting.jpg"
                    alt="Placeholder: mounting detail"
                    label="Placeholder: cannulation + fixation detail"
                    hoverText="Needles, sutures, and fixation details (grooves, adhesive) for repeatable tests."
                    aspect="4/3"
                  />
                </div>
              }
            >
              <p>
                Sheep MCAs were cannulated on hypodermic needles in a PBS bath and secured with sutures
                (and fixation as needed) to prevent slip during axial loading. The setup provides axial
                displacement and force, internal pressure, and synchronized video for deformation tracking.
              </p>
              <p>
                The point of the setup is not novelty—it’s repeatability. The study relies on baseline curves
                being comparable before and after an intervention, so mounting stability and consistent test
                conditions were treated as first-order requirements.
              </p>
            </StepSection>

            <StepSection
              kicker="Step 2"
              title="Apply the sub-failure damage condition"
              images={
                <div className="grid gap-6 sm:grid-cols-2">
                  <ImageBlock
                    src="/photos/ME-step2-overstretch.jpg"
                    alt="Placeholder: overstretch protocol"
                    label="Placeholder: axial overstretch protocol"
                    hoverText="Baseline curves → overstretch to λ (e.g., 1.1–1.4) → repeat baseline curves."
                    aspect="4/3"
                  />
                  <ImageBlock
                    src="/photos/ME-step2-digestion.jpg"
                    alt="Placeholder: collagenase protocol"
                    label="Placeholder: collagenase exposure protocol"
                    hoverText="Digestion conditions (enzyme concentration, temperature, time) + repeat baselines."
                    aspect="4/3"
                  />
                </div>
              }
            >
              <p>
                <strong>Experiment 1 (overstretch):</strong> native and collagen-digested MCAs were axially
                stretched to prescribed stretch ratios and then re-tested. Softening was compared between groups
                at each overstretch magnitude.
              </p>
              <p>
                <strong>Experiment 2 (continuous digestion):</strong> separate MCAs were exposed to collagenase
                while mechanical response was measured repeatedly over time to characterize how stiffness and
                energy storage evolve with progressive collagen reduction.
              </p>
              <p>
                Digestion conditions were selected to reduce collagen while maintaining mountability and testability.
                Over-digestion makes samples too fragile for the handling required in the tester, so the protocol is
                intentionally constrained.
              </p>
            </StepSection>

            <StepSection
              kicker="Step 3"
              title="Re-test baseline response"
              images={
                <div className="grid gap-6 sm:grid-cols-2">
                  <ImageBlock
                    src="/photos/ME-step3-curves.jpg"
                    alt="Placeholder: representative curves"
                    label="Placeholder: Baseline 1 vs Baseline 2 stress–stretch curves"
                    hoverText="Show representative curves for multiple overstretch magnitudes."
                    aspect="4/3"
                  />
                  <ImageBlock
                    src="/photos/ME-step3-metrics.jpg"
                    alt="Placeholder: softening metrics"
                    label="Placeholder: metric definitions / summary"
                    hoverText="Examples: stress reduction at in vivo length, stiffness measures, strain energy."
                    aspect="4/3"
                  />
                </div>
              }
            >
              <p>
                Softening was computed from the change between sequential baseline curves. Metrics were intentionally
                redundant and curve-based (not a single derivative-heavy scalar) so conclusions didn’t depend on one
                fragile number.
              </p>
              <p>
                In the paper/thesis, examples include stress reduction at in vivo length, stiffness-style measures over a
                defined stretch window, and strain energy changes over the same window. Statistical comparisons were then
                performed between native and digested groups at matched overstretch levels.
              </p>
            </StepSection>

            <StepSection
              kicker="Additional Processing"
              title="Imaging Damaged Collagen using CHP"
              images={
                <div className="space-y-6">
                  <ImageBlock
                    src="/photos/ME-step4-chp.jpg"
                    alt="Placeholder: CHP images"
                    label="Placeholder: CHP fluorescence (native vs digested; pre/post where relevant)"
                    hoverText="If you include CHP: keep the figure clean and directly tied to the question."
                    aspect="16/9"
                  />
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ImageBlock
                      src="/photos/ME-step4-imaging-setup.jpg"
                      alt="Placeholder: imaging workflow"
                      label="Placeholder: staining + imaging workflow"
                      hoverText="Stain, rinse, mount, confocal imaging (or your actual imaging modality)."
                      aspect="4/3"
                    />
                    <ImageBlock
                      src="/photos/ME-step4-quant.jpg"
                      alt="Placeholder: image quantification"
                      label="Placeholder: CHP summary / quantification"
                      hoverText="Only include if it supports a specific point in the results."
                      aspect="4/3"
                    />
                  </div>
                </div>
              }
            >
              <p>
                Collagen volume fraction was estimated in separate samples to connect digestion time to collagen loss.
                CHP staining/imaging was used as an additional collagen-related readout where applicable.
              </p>
              <p>
                Practically: CHP is a measurement with constraints. If you show it, keep it in its lane—use it to support
                what it can support, not as a gatekeeper for whether collagen is involved in the mechanics.
              </p>
            </StepSection>
          </div>
        </section>

        <Divider />

        {/* Results */}
        <section className="space-y-3">
          <Kicker>Results</Kicker>
          <H2>Main findings</H2>

          <p className="text-sm leading-relaxed text-black">
            The overstretch experiment reproduced the expected pattern: softening increases with overstretch magnitude.
            Collagen-digested vessels showed substantially lower stress levels and reduced softening magnitude, but the
            normalized softening pattern versus overstretch remained similar across groups.
          </p>

          <p className="text-sm leading-relaxed text-black">
            In the continuous digestion experiment, mechanical properties degraded progressively over the digestion period,
            and the resulting “softening-like” patterns were consistent with the idea that collagen governs the observed
            behavior under sub-yield conditions—even though the mechanism does not require molecular denaturation as the
            primary explanation.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/ME-results-overstretch-trends.jpg"
              alt="Placeholder: overstretch trends"
              label="Placeholder: overstretch-induced softening vs stretch magnitude (native vs collagen-digested)"
              hoverText="Headline plot: softening measures grouped by overstretch (e.g., λ=1.1–1.4)."
              aspect="4/3"
              hiRes
            />
            <ImageBlock
              src="/photos/ME-results-digestion-time.jpg"
              alt="Placeholder: digestion time trends"
              label="Placeholder: mechanical property changes during continuous digestion"
              hoverText="Show response over time (e.g., 0–60 min) with the cleanest metric set."
              aspect="4/3"
              hiRes
            />
          </div>

          <div className="mt-6">
            <ImageBlock
              src="/photos/ME-results-summary.jpg"
              alt="Placeholder: summary graphic"
              label="Placeholder: summary figure (native vs digested; raw vs normalized)"
              hoverText="Good place for a compact summary: magnitude shifts, shape similarity, and what you conclude from that."
              aspect="16/9"
              hiRes
            />
          </div>
        </section>

        <Divider />

        {/* Conclusions + Future Work */}
        <section className="space-y-3">
          <Kicker>Conclusions</Kicker>
          <H2>Conclusions and future work</H2>

          <p className="text-sm leading-relaxed text-black">
            This work clarifies collagen’s role in sub-yield overstretch softening of cerebral arteries. Collagen reduction
            changes the absolute mechanical response and reduces softening magnitude, while the normalized softening pattern
            versus overstretch remains similar. That combination supports collagen as the dominant contributor without requiring
            molecular denaturation to be the primary mechanism at the strains where softening begins.
          </p>

          <p className="text-sm leading-relaxed text-black">
            Next steps are about tightening the mechanics–microstructure link under controlled conditions: improved digestion
            calibration, better alignment between mechanical test states and imaging/biochemical measurements, and constitutive
            damage models that can reproduce observed softening without hard-coding denaturation as the only pathway.
          </p>

          <div className="mt-6">
            <ImageBlock
              src="/photos/ME-futurework.jpg"
              alt="Placeholder: future work mechanism diagram"
              label="Placeholder: future work schematic (collagen recruitment / organization changes)"
              hoverText="Keep it simple: one figure that matches whatever you actually argue as the likely mechanism."
              aspect="16/9"
            />
          </div>
        </section>

        <Divider />

        {/* References */}
        <section className="space-y-3">
          <Kicker>Sources</Kicker>
          <H2>References</H2>

          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black">
            <li>
              <span className="font-medium">M.S. Thesis:</span>{" "}
              <a
                href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xckc45IAAAAJ&citation_for_view=xckc45IAAAAJ:u5HHmVD_uO8C"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                Google Scholar citation link
              </a>
            </li>

            <li>
              <span className="font-medium">
                Lab of Head Injury &amp; Vessel Biomechanics:
              </span>{" "}
              <a
                href="https://vesselmechanics.mech.utah.edu/research/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                https://vesselmechanics.mech.utah.edu/research/
              </a>
            </li>

            <li>
              <span className="font-medium">
                Collagen Hybridizing Peptide (CHP):
              </span>{" "}
              <a
                href="https://www.3helix.com/products/collagen-hybridizing-peptide-5-fam-conjugate-f-chp?srsltid=AfmBOoqDOQtd8np8plpMkRrUYOu8wY2gOUuzRFQslDRwBfO5mWa8Sh7h"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                3Helix product page
              </a>
            </li>
          </ul>

          <p className="pt-2 text-xs text-zinc-600">
            Note: This page is a high-level summary. Full experimental detail and citations
            are in the thesis/manuscript.
          </p>
        </section>
      </main>
    </div>
  );
}

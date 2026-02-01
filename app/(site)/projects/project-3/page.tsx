"use client";

import React, { useEffect, useMemo, useState } from "react";
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

/* ------------------------ Lightbox ------------------------ */

type LightboxPayload = {
  src: string;
  alt: string;
  caption?: string;
};

function Lightbox({
  open,
  onClose,
  payload,
}: {
  open: boolean;
  onClose: () => void;
  payload: LightboxPayload | null;
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);

    // prevent background scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open || !payload) return null;

  const isGif = payload.src.toLowerCase().endsWith(".gif");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Expanded image"
      onMouseDown={(e) => {
        // close if clicking the backdrop
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 rounded-lg bg-white/90 px-3 py-1 text-sm font-medium text-black shadow-sm hover:bg-white"
          aria-label="Close expanded image"
          type="button"
        >
          Close
        </button>

        <div className="overflow-hidden rounded-2xl border border-black bg-white shadow-lg">
          <div className="relative w-full bg-zinc-100">
            {/* Use a responsive ratio block; image contains to avoid cropping */}
            <div className="relative h-[70vh] w-full">
              <Image
                src={payload.src}
                alt={payload.alt}
                fill
                className="object-contain"
                quality={100}
                sizes="100vw"
                priority
                unoptimized={isGif}
              />
            </div>
          </div>

          {(payload.caption || payload.alt) && (
            <div className="border-t border-zinc-200 px-5 py-4">
              <p className="text-sm font-medium text-black">
                {payload.caption ?? payload.alt}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------ Image Block ------------------------ */

function ImageBlock({
  src,
  alt,
  label,
  hoverText,
  aspect = "16/9",
  customAspect,
  hiRes = true,
  priority = false,
  fullBleed = false,
  border = true,
  cropSides = false,
  cropScale = 1.6, // 1.4 subtle, 1.6 medium, 1.8 aggressive
  className = "",
  onOpen,
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
  /** Make the image request full viewport width (inside the container, it will still be constrained by parent) */
  fullBleed?: boolean;
  /** Black border on wrapper */
  border?: boolean;
  /** Visually crop left/right by making the media wider than the container */
  cropSides?: boolean;
  /** How much wider to render the media (1.0 = none). */
  cropScale?: number;
  /** Extra classes applied to the image wrapper div (lets you cap width/height per-image) */
  className?: string;
  /** Called when user clicks/activates the image */
  onOpen?: (p: LightboxPayload) => void;
}) {
  const aspectRatio =
    customAspect ??
    (aspect === "4/3" ? "4 / 3" : aspect === "5/4" ? "5 / 4" : "16 / 9");

  // High-res by default; keep fullBleed behavior the same
  const sizes = fullBleed
    ? "100vw"
    : hiRes
    ? "(min-width: 1024px) 1200px, 100vw"
    : "(min-width: 1024px) 900px, 100vw";

  const isGif = src.toLowerCase().endsWith(".gif");

  const wrapperClass =
    "group relative w-full overflow-hidden rounded-xl bg-zinc-200" +
    (border ? " border border-black" : "") +
    (className ? ` ${className}` : "");

  const canOpen = typeof onOpen === "function";

  const open = () => {
    if (!canOpen) return;
    // Prefer label as the caption in the enlarged view (requested)
    onOpen({ src, alt, caption: label });
  };

  return (
    <figure className="space-y-2">
      <div
        className={
          wrapperClass +
          (canOpen ? " cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-black/40" : "")
        }
        style={{ aspectRatio }}
        tabIndex={canOpen ? 0 : -1}
        role={canOpen ? "button" : undefined}
        aria-label={canOpen ? "Open enlarged image" : undefined}
        onClick={open}
        onKeyDown={(e) => {
          if (!canOpen) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        }}
      >
        {cropSides ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative h-full"
              style={{ width: `${Math.max(1, cropScale) * 100}%` }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                quality={hiRes ? 100 : 85}
                sizes={sizes}
                priority={priority}
                unoptimized={isGif}
              />
            </div>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            quality={hiRes ? 100 : 85}
            sizes={sizes}
            priority={priority}
            unoptimized={isGif}
          />
        )}

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxPayload, setLightboxPayload] = useState<LightboxPayload | null>(
    null
  );

  const openLightbox = (p: LightboxPayload) => {
    setLightboxPayload(p);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // keep payload briefly (fine either way); leaving it makes reopen instant
    // setLightboxPayload(null);
  };

  return (
    <div className="flex justify-center bg-transparent px-3 py-10">
      <Lightbox open={lightboxOpen} onClose={closeLightbox} payload={lightboxPayload} />

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
            src="/photos/brain_vessel.bmp"
            alt="Biomechanics testing of a cerebral artery (placeholder)"
            label="Placeholder: hero image (tester + vessel, or a montage of key figures)"
            hoverText="Project focus: compare sub-yield overstretch softening to softening caused by controlled collagen digestion."
            customAspect="1280 / 1024"
            hiRes
            priority
            border
            onOpen={openLightbox}
          />
        </section>

        {/* Summary + Skills (DO NOT TOUCH per request) */}
        <section className="mt-12 space-y-6">
          <div className="rounded-2xl border border-black bg-white/75 p-6 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
              Summary
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              Cerebral arteries can mechanically "soften" after sub-failure loading,
              even though they do not show any physical signals of damage. Because
              collagen is a major load-bearing ingredient in the artery wall, a common
              assumption is that softening is caused by collagen “damage.”
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              In this project, I tested that idea using a simple comparison: I measured
              how vessels soften after quasi-static overstretch, and compared that
              behavior to softening caused by controlled collagen removal using collagenase
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
            This kind of sub-failure damage is not typically accounted for when treating TBI,
            despite evidence that vascular damage can occur during TBI may contribute to ischemic stroke risk.
          </p>

          <p className="text-sm leading-relaxed text-black">
            Previous work suggested this softening effect is a result of collagen fibers becoming
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
              label="This is a plot I made for my thesis to help visualize how elastin and collagen make up the structural integrity of a brain vessel."
              hoverText="Place a clean schematic: elastin-dominated vs collagen-dominated stretch regimes."
              customAspect="1048 / 720"
              hiRes
              border={false}
              onOpen={openLightbox}
            />
            <ImageBlock
              src="/photos/softening.jpg"
              alt="Placeholder: conceptual softening plot"
              label="Here is an example of one of my results that show the evolving stress-strain curve for a brain vessel that is experiencing softening damage."
              customAspect="2129 / 2044"
              hiRes
              border={false}
              onOpen={openLightbox}
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
                <div className="space-y-6">
                  {/* NO BORDER for testsetup.jpg */}
                  <ImageBlock
                    src="/photos/testsetup.jpg"
                    alt="Testing system overview"
                    label="Placeholder: testing system overview"
                    hoverText="Bath + cannulation needles + axial actuation + force + pressure sensors."
                    customAspect="964 / 381"
                    hiRes
                    fullBleed
                    border={false}
                    priority
                    onOpen={openLightbox}
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
                <div className="grid gap-6 sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)] items-start">
                  <ImageBlock
                    src="/photos/vessel_test.gif"
                    alt="Axial overstretch protocol"
                    label="Axial overstretch protocol"
                    hoverText="Baseline curves → overstretch to λ (e.g., 1.1–1.4) → repeat baseline curves."
                    customAspect="552 / 1188"
                    hiRes
                    border
                    className="mx-auto max-w-[220px] max-h-[70vh]"
                    onOpen={openLightbox}
                  />

                  <ImageBlock
                    src="/photos/experiment2_setup.jpg"
                    alt="Collagenase protocol setup"
                    label="Placeholder: collagenase exposure protocol"
                    hoverText="Digestion conditions (enzyme concentration, temperature, time) + repeat baselines."
                    customAspect="620 / 323"
                    hiRes
                    border
                    onOpen={openLightbox}
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
                    src="/photos/mechanical_tests.png"
                    alt="Placeholder: representative curves"
                    label="Placeholder: Baseline 1 vs Baseline 2 stress–stretch curves"
                    hoverText="Show representative curves for multiple overstretch magnitudes."
                    customAspect="1106 / 1964"
                    hiRes
                    border
                    onOpen={openLightbox}
                  />
                  <ImageBlock
                    src="/photos/normalized_tests.png"
                    alt="Placeholder: softening metrics"
                    label="Placeholder: metric definitions / summary"
                    hoverText="Examples: stress reduction at in vivo length, stiffness measures, strain energy."
                    customAspect="1083 / 1966"
                    hiRes
                    border
                    onOpen={openLightbox}
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
                  {/* CHP image: add border (requested) */}
                  <ImageBlock
                    src="/photos/chp.jpg"
                    alt="CHP fluorescence imaging"
                    label="CHP fluorescence imaging"
                    hoverText="CHP binds to unfolded collagen strands, providing a readout of collagen disruption."
                    customAspect="695 / 204"
                    hiRes
                    fullBleed
                    border
                    priority
                    onOpen={openLightbox}
                  />
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
              src="/photos/mechanical_softening.png"
              alt="Placeholder: overstretch trends"
              label="Placeholder: overstretch-induced softening vs stretch magnitude (native vs collagen-digested)"
              hoverText="Headline plot: softening measures grouped by overstretch (e.g., λ=1.1–1.4)."
              customAspect="2033 / 1430"
              hiRes
              border
              onOpen={openLightbox}
            />
            <ImageBlock
              src="/photos/digested_softening.png"
              alt="Placeholder: digestion time trends"
              label="Placeholder: mechanical property changes during continuous digestion"
              hoverText="Show response over time (e.g., 0–60 min) with the cleanest metric set."
              customAspect="2265 / 1620"
              hiRes
              border
              onOpen={openLightbox}
            />
          </div>

          <div className="mt-6">
            <ImageBlock
              src="/photos/comparison.png"
              alt="Placeholder: summary graphic"
              label="Placeholder: summary figure (native vs digested; raw vs normalized)"
              hoverText="Good place for a compact summary: magnitude shifts, shape similarity, and what you conclude from that."
              customAspect="2022 / 1509"
              hiRes
              border
              onOpen={openLightbox}
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

          {/* conclusion image removed per request */}
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

"use client";

import React, { useEffect, useState } from "react";
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
  caption?: React.ReactNode;
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
  label?: React.ReactNode;
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
          (canOpen
            ? " cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-black/40"
            : "")
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
  const [lightboxPayload, setLightboxPayload] =
    useState<LightboxPayload | null>(null);

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
      <Lightbox
        open={lightboxOpen}
        onClose={closeLightbox}
        payload={lightboxPayload}
      />

      {/* Match Project2 styling: light panels, black borders, no dark-mode panels */}
      <main className="w-full max-w-4xl rounded-2xl border border-black bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-10">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            (Thesis) Analyzing the Softening Behavior of Brain Vessels
          </h1>
          <p className="text-sm font-medium text-zinc-700">
            University of Utah • Biomechanics • Mechanical Engineering• Experimental
            Design &amp; Execution
          </p>
        </header>

        {/* Hero (scaled down) */}
        <section className="mt-8">
          <ImageBlock
            src="/photos/brain_vessel.bmp"
            alt="Biomechanics testing of a cerebral artery (placeholder)"
            label="Microscopic image of one of the cerebral blood vessels I tested. You can
            see that I've sutured all the branches off the main vessel axis, so the vessel may be
            pressurized on our tester."
            customAspect="1280 / 1024"
            hiRes
            priority
            border
            onOpen={openLightbox}
            /* ↓ This is the only change you asked for:
               cap the hero width + reduce vertical dominance, while keeping responsive */
            className="mx-auto max-w-[520px] sm:max-w-[600px] lg:max-w-[640px]"
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
              even though they do not show any physical signals of damage. This
              type of damage is likely occurring during traumatic brain injuries
              (TBI). However, because the damage is difficult to deteect,
              sub-failure vessel damage is largely untreated and likely causing
              the long-term, fatal health concerns that are poorly-understood,
              but known consequences of TBI.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              In this thesis, I further investigated the mechanics underlying
              sub-failure damage in cerebral blood vessels. I designed,
              executed, and reported a series of experiments providing evidence
              that collagen fiber damage occurs at sub-failure stretch levels
              and contributes to the softening behavior observed in brain
              vessels under these conditions.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              This project page provides a simplified version of my thesis and
              key takeaways. More detailed information can be found in my{" "}
              <a
                href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jc_bJg4AAAAJ&authuser=1&citation_for_view=jc_bJg4AAAAJ:u5HHmVD_uO8C"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                published thesis
              </a>
              . Follow-up work for this research effort has been completed
              since my defense, and I am also in the process of submitting this
              work to the <em>Journal of Biomechanics</em> as a first author
              (expected release 2026).
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Skills Required &amp; Applied
              </p>

              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "Protocol & experimental design",
                  "Data collection & management",
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
            Cerebral blood vessels are often overstretched during traumatic brain
            injuries and surgical procedures. Even without rupture, these
            events can cause the vessel to "soften". This kind of sub-failure
            damage is not typically accounted for when treating TBI, despite
            evidence that vascular damage can occur during TBI may contribute to
            ischemic stroke risk.
          </p>

          <p className="text-sm leading-relaxed text-black">
            Previous work suggested this softening effect is a result of
            collagen fibers becoming damaged and "denaturing" at sub-failure
            vessel stretch limits. However, other work has reported collagen
            fiber damage to occur at higher strains than where vessel softening
            begins.
          </p>

          <p className="text-sm leading-relaxed text-black">
            My thesis was aimed to further understand and confirm collagen’s
            role in vessel softening by directly changing the collagen content
            of brain vessels and testing how that changes the mechanical
            outcome. We hypothesized that if collagen is driving sub-yield
            softening, then partial collagen degradation should measurably shift
            the softening response even if the collagen is not showing signs of
            damage/denaturation.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/elastin_collagen_curve.jpg"
              alt="Placeholder: artery wall constituents"
              label="This is a plot I made for my thesis to help visualize how elastin and collagen make up the structural integrity of a brain vessel."
              customAspect="1048 / 720"
              hiRes
              border={false}
              onOpen={openLightbox}
            />
            <ImageBlock
              src="/photos/softening.jpg"
              alt="Placeholder: conceptual softening plot"
              label="Here is an example of one of my results that show the evolving stress-strain curve for a brain vessel that is experiencing softening damage. 
              Softening effectively means the vessel is getting weaker when stretched to lengths below failure limits, as demonstrated
              by a shallowing stress-strain curve"
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
            I tested our hypothesis following two sets of experiments: (1) I
            compared overstretch-induced softening in native vs collagen-digested
            brain vessels, and (2) I continously digested brain vessels of their
            collagen and measured for corresponding softening effects. The
            preparation of vessels and processing of the data were distinct
            between the sets of experiments; however, both sets of experiments
            followed the same general testing protocol:
          </p>

          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-black">
            <li>
              <strong>Mount and baseline-test vessels</strong> on a custom vessel
              testing system.
            </li>
            <li>
              <strong>Apply the sub-failure damage condition</strong> via axial
              overstretch or collagen digestion.
            </li>
            <li>
              <strong>Re-test baseline response</strong> and compute softening
              from Baseline 1 → Baseline 2.
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
                    label={
                      <>
                        Schematic of the vessel testing system with labeled
                        components:
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          <li>
                            <strong>(A) Cannulas:</strong> Secure the vessel and
                            supply saline fluid to the lumen.
                          </li>
                          <li>
                            <strong>(B) 3D translation stage:</strong> Allows fine
                            axial alignment to ensure the vessel is mounted
                            straight.
                          </li>
                          <li>
                            <strong>(C) Fluid inlet:</strong> Cannula delivering
                            fluid into the vessel.
                          </li>
                          <li>
                            <strong>(D) Fluid outlet:</strong> Carries fluid out
                            of the vessel and can be opened or closed to control
                            pressurization.
                          </li>
                          <li>
                            <strong>(E) P1 pressure transducer:</strong> Measures
                            pressure upstream of the vessel.
                          </li>
                          <li>
                            <strong>(F) P2 pressure transducer:</strong> Measures
                            downstream pressure, allowing pressure differentials
                            to be calculated.
                          </li>
                          <li>
                            <strong>(G) Actuator guide:</strong> Provides slow,
                            precise axial displacement to stretch the vessel,
                            driven by a stepper motor.
                          </li>
                          <li>
                            <strong>(H) Load cell:</strong> Measures axial force
                            with high precision for stress calculations.
                          </li>
                          <li>
                            <strong>(I) Thermocouple:</strong> Monitors bath
                            temperature during collagenase experiments.
                          </li>
                          <li>
                            <strong>(J) Heating pad:</strong> Operates in a
                            feedback loop with the thermocouple to maintain
                            target bath temperature.
                          </li>
                        </ul>
                      </>
                    }
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
                Sheep MCAs were cannulated on hypodermic needles in a PBS bath and
                secured with sutures and special, benign glue to prevent slip
                during axial loading. The setup provides axial displacement and
                force, internal pressure, and synchronized video for deformation
                tracking.
              </p>
            </StepSection>

            <StepSection
              kicker="Step 2"
              title="Apply the sub-failure damage condition"
              images={
                <div className="grid items-start gap-6 sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)]">
                  <ImageBlock
                    src="/photos/vessel_test.gif"
                    alt="Axial overstretch protocol"
                    label="Example of stretch/loading procedure"
                    customAspect="552 / 1188"
                    hiRes
                    border
                    className="mx-auto max-h-[70vh] max-w-[220px]"
                    onOpen={openLightbox}
                  />

                  <ImageBlock
                    src="/photos/experiment2_setup.jpg"
                    alt="Sideview schematic of tester for Experiment 2"
                    label="Sideview schematic of tester for Experiment 2"
                    customAspect="620 / 323"
                    hiRes
                    border
                    onOpen={openLightbox}
                  />
                </div>
              }
            >
              <p>
                <strong>Experiment 1 (overstretch):</strong> I extracted cerebral
                vessels from sheep brains, and digested half of the vessels in
                collagenase- a biochemical solution that targets and digests
                collagen fibers. I charactertized a vessel's baseline strength by
                stretching to its natural length and recorded the force. I then
                axially overstretched the vessels to 1.1 to 1.4 times the in vivo
                length and then recharacterized the baseline strength of vessel.
              </p>
              <p>
                <strong>Experiment 2 (continuous digestion):</strong> separate
                cerebral vessels were collected and exposed to collagenase while
                mechanical response was measured repeatedly over time to
                characterize how softening occurs with progressive collagen
                reduction.
              </p>
            </StepSection>

            <StepSection
              kicker="Step 3"
              title="Evaluation for Softening"
              images={
                <div className="grid gap-6 sm:grid-cols-2">
                  <ImageBlock
                    src="/photos/mechanical_tests.png"
                    alt="Placeholder: representative curves"
                    label="RAW Baseline 1 vs Baseline 2 stress–stretch curves"
                    customAspect="1106 / 1964"
                    hiRes
                    border
                    onOpen={openLightbox}
                  />
                  <ImageBlock
                    src="/photos/normalized_tests.png"
                    alt="Placeholder: softening metrics"
                    label="NORMALIZED Baseline 1 vs Baseline 2 stress–stretch curves"
                    customAspect="1083 / 1966"
                    hiRes
                    border
                    onOpen={openLightbox}
                  />
                </div>
              }
            >
              <p>
                Softening was evident in the progressive shallowing of the
                baseline stress–stretch curves for samples subjected to higher
                overstretch limits. As expected, collagen-digested vessels
                exhibited substantially lower stress values across all tests.
                However, after normalizing the stress–stretch data, both native
                and digested samples displayed very similar softening behavior.
              </p>
              <p>
                These results further support collagen’s role in governing vessel
                softening. The reduced stress magnitudes observed in digested
                vessels reflect a decrease in load-bearing collagen content.
                Because digestion was partial, we proposed that the remaining
                collagen fibers were still dominating the mechanical response,
                producing softening behavior consistent with that observed in
                native vessels, as revealed by the normalized data.
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
                    label="Example of CHP staining sequence and result"
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
                Collagen Hybridizing Peptide (CHP) is a molecule that is engineered
                to bind with damaged collagen fibers. Under a microscopic laser
                with specific wavelengths, CHP is fluorescent and can be imaged.
                The intensity of the fluorescence can be correlated with a
                percentage of damaged collagen fibers.
              </p>
              <p>
                For this work, we leveraged CHP's abilities, following protocol
                of other work, to bind CHP to undamaged vessels (control) and our
                tested vessels (test). The relative increase in intensity of the
                tested samples were further proof that collagen fibers were
                damaged.
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
            Beyond visualizing the obvious softening occurring between the
            baseline tests of experiment 1, I quantified softening using common
            parameterization strategies. Namely, I derived % change in strain
            energy, in vivo stiffness, dynamic modulus, and in vivo stress after
            overstretch. The % reduction of these parameters has been shown to
            correlate strongly with softening in previous work and are standard
            metrics for quanitifying softening. As expected, the digested vessels
            showed softening trends practically identical to the native vessels
            when normalized (see plots in upper right corners). However, the raw
            softening metrics are much lower in magntitude when compared to the
            native vessels, which is likely a result of fewer fibers being
            available to contribute to higher, natural stress values.
          </p>

          <p className="text-sm leading-relaxed text-black">
            In the continuous digestion experiment, mechanical properties degraded
            progressively over the digestion period, and the resulting
            “softening-like” patterns were consistent with the idea that collagen
            governs the observed behavior under sub-yield conditions—even though
            the mechanism does not require molecular denaturation as the primary
            explanation.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/mechanical_softening.png"
              alt="Placeholder: overstretch trends"
              label="Overstretch-induced softening in native and collagen-depleted brain vessels"
              customAspect="2033 / 1430"
              hiRes
              border
              onOpen={openLightbox}
            />
            <ImageBlock
              src="/photos/digested_softening.png"
              alt="Placeholder: digestion time trends"
              label="Softening occurring in brain vessels that were continously tested in a collagenase base that was depelting 
              the vessels of their collagen content with time"
              customAspect="2265 / 1620"
              hiRes
              border
              onOpen={openLightbox}
            />
          </div>

          {/* TEXT (between the 1 image and the comparison figure) */}
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-black">
            <p>
              When these time-dependent digestion trends are compared alongside
              the overstretch results, the key pattern was found to be consistent:
              reducing effective collagen contribution shifts the absolute
              mechanical response downward and reduces the magnitude of softening,
              while preserving the overall shape of the response under sub-failure
              conditions.
            </p>
            <p>
              The comparison figure below summarizes how native vs digested
              behavior relates across the two experimental approaches, highlighting
              the interpretation that collagen governs the dominant load-sharing
              behavior driving softening in these vessels.
            </p>
          </div>

          {/* COMPARISON IMAGE (now INSIDE the experiment 2 section) */}
          <div className="mt-6">
            <ImageBlock
              src="/photos/comparison.png"
              alt="Placeholder: summary graphic"
              label="How digestion softening results compared to overstretch-induced softening"
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
            This work clarifies collagen’s role in sub-yield overstretch softening
            of cerebral arteries. Collagen reduction changes the absolute
            mechanical response and reduces softening magnitude, while the
            normalized softening pattern versus overstretch remains similar. That
            combination supports collagen as the dominant contributor without
            requiring molecular denaturation to be the primary mechanism at the
            strains where softening begins.
          </p>

          <p className="text-sm leading-relaxed text-black">
            This work is currently being submitted (as of February 2026) for
            publication to the Journal of Biomechanics.
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
            Note: This page is a high-level summary. Full experimental detail and
            citations are in the thesis/manuscript.
          </p>
        </section>
      </main>
    </div>
  );
}

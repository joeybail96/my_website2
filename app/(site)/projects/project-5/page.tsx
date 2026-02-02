"use client";

import Image from "next/image";
import React from "react";

/* ------------------------ UI Helpers ------------------------ */

function Divider() {
  return (
    <div className="my-12 h-px w-full bg-zinc-200/80 dark:bg-zinc-800/80" />
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
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

/**
 * IMPORTANT FIX:
 * Your “horizontal line” issue is because Tailwind will NOT reliably generate
 * dynamic classes like `aspect-[${customAspect}]` in production builds,
 * so the container ends up with essentially no height.
 *
 * Solution: use CSS `aspect-ratio` inline style (always works), while keeping
 * the exact same layout/styling.
 */

type PresetAspect = "16/9" | "4/3" | "9/16" | "4/5" | "5/4";

function presetToAspectRatio(preset: PresetAspect) {
  switch (preset) {
    case "4/3":
      return "4 / 3";
    case "9/16":
      return "9 / 16";
    case "4/5":
      return "4 / 5";
    case "5/4":
      return "5 / 4";
    case "16/9":
    default:
      return "16 / 9";
  }
}

// Accepts "1297/518" or "1297 / 518"
function normalizeAspectRatio(input: string) {
  const cleaned = input.replace(/\s+/g, "");
  const parts = cleaned.split("/");
  if (parts.length === 2 && parts[0] && parts[1]) return `${parts[0]} / ${parts[1]}`;
  // Fallback (still valid if user passes something like "2 / 1")
  return input;
}

function ImageBlock({
  src,
  alt,
  label,
  hoverText,
  aspect = "16/9",
  customAspect, // e.g. "1297/518"
}: {
  src: string;
  alt: string;
  label?: string;
  hoverText?: string;
  aspect?: PresetAspect;
  customAspect?: string;
}) {
  const aspectRatio = customAspect
    ? normalizeAspectRatio(customAspect)
    : presetToAspectRatio(aspect);

  return (
    <figure className="space-y-2">
      <div
        className="group relative w-full overflow-hidden rounded-xl border border-black bg-zinc-200"
        style={{ aspectRatio }}
        tabIndex={0}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 800px, 100vw"
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

/**
 * GIF block: use <img> (not next/image) so the browser loops the GIF reliably.
 */
function GifBlock({
  src,
  alt,
  label,
  hoverText,
  aspect = "16/9",
  customAspect,
  cacheBust = false,
}: {
  src: string;
  alt: string;
  label?: string;
  hoverText?: string;
  aspect?: PresetAspect;
  customAspect?: string;
  cacheBust?: boolean;
}) {
  const aspectRatio = customAspect
    ? normalizeAspectRatio(customAspect)
    : presetToAspectRatio(aspect);

  const finalSrc = cacheBust ? `${src}?v=${Date.now()}` : src;

  return (
    <figure className="space-y-2">
      <div
        className="group relative w-full overflow-hidden rounded-xl border border-black bg-zinc-200"
        style={{ aspectRatio }}
        tabIndex={0}
        aria-label={alt}
      >
        <img
          src={finalSrc}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          draggable={false}
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

/** Simple panel wrapper to keep Project1-style consistent */
function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black bg-white/75 p-6 shadow-sm backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
        {title}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

/* ------------------------ Page ------------------------ */

export default function ProjectCNCPlotterPage() {
  return (
    <div className="flex justify-center bg-transparent px-3 py-10">
      <main className="w-full max-w-4xl rounded-2xl border border-black bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-10">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            CNC Plotter
          </h1>
          <p className="text-sm font-medium text-zinc-700">
            Personal machine build • Mechanical design, motion systems, and image → G-code
            pipeline
          </p>
        </header>

        {/* Hero */}
        <section className="mt-8">
          <ImageBlock
            src="/photos/cncplotter-profile.jpg"
            alt="CNC plotter drawing an image"
            label="CNC plotter in operation"
            hoverText="Custom two-axis plotter executing G-code generated from edge-detected images."
            customAspect="4032/3024"
          />
        </section>

        {/* ====== SUMMARY SECTION (Project1-style) ====== */}
        <section className="mt-12 space-y-6">
          <Panel title="Summary">
            <p className="text-sm leading-relaxed text-black">
              This project is a custom-built CNC plotter that converts photographs into
              marker drawings. The workflow takes an input image, detects edges, converts
              those edges into vector paths, generates G-code, and then executes the
              toolpaths on a two-axis motion system.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              The machine was designed in SolidWorks and built from plywood, T-slot
              aluminum, stepper motors, and ball screws. Most of the design decisions were
              driven by simplicity and repeatability with limited tooling.
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Skills Required &amp; Applied
              </p>

              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "CAD modeling (SolidWorks)",
                  "Packaging + motion layout",
                  "Ball screw + linear guide integration",
                  "Stepper motor sizing + mechanics",
                  "Design for assembly with limited tools",
                  "Prototype iteration + fit-up refinement",
                  "3D printing (custom pen holder)",
                  "Image processing → toolpath workflow",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-black">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-black" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </section>

        <Divider />

        {/* Mechanical Design */}
        <section className="space-y-3">
          <Kicker>Mechanical</Kicker>
          <H2>Mechanical Design</H2>

          <p className="text-sm leading-relaxed text-black">
            I designed the plotter around a stiff but simple frame, a two-axis gantry, and
            ball screw actuation for precise, repeatable motion. The goal was reliable
            positioning without relying on heavy machining — just off-the-shelf components,
            clean packaging, and straightforward assembly.
          </p>

          <div className="mt-6">
            <ImageBlock
              src="/photos/cnc_assembly.jpg"
              alt="Rendered CAD model of the CNC plotter"
              label="Rendered CAD model (SolidWorks)"
              hoverText="Full assembly model used to validate clearances, travel, and component layout."
              customAspect="1058/643"
            />
          </div>
        </section>

        <Divider />

        {/* Prototyping */}
        <section className="space-y-3">
          <Kicker>Build</Kicker>
          <H2>Prototyping</H2>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-black">
                Early prototypes focused on proving the ball screw actuation concept and
                dialing in alignment. The biggest priorities were eliminating binding,
                keeping motion smooth across the travel, and making the assembly forgiving
                enough that it could be built with basic tools.
              </p>

              <p className="text-sm leading-relaxed text-black">
                Once the concept worked, I iterated the mounting approach and stiffness
                until the system felt repeatable and didn’t drift or rack under load.
              </p>
            </div>

            <ImageBlock
              src="/photos/prototype1.jpg"
              alt="Initial ball screw actuation concept prototype"
              label="Initial ball screw actuation concept"
              hoverText="Early proof-of-concept focused on alignment and smooth travel."
              customAspect="4032/3024"
            />
          </div>

          {/* final ballscrew design implemented (2nd is now a GIF that loops) */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/ballscrew_final.jpg"
              alt="Final ball screw design implemented photo 1"
              label="Final ball screw implementation (1)"
              hoverText="Stiffer mounts + improved alignment reduced binding."
              customAspect="4032/3024"
            />

            <GifBlock
              src="/photos/actuating.gif"
              alt="Final ball screw actuation shown in motion"
              label="Final ball screw implementation (2) — GIF"
              hoverText="Animated clip of the final ball screw system in motion."
              customAspect="854/480"
              cacheBust={false}
            />
          </div>

          {/* body text followed by pen holder + z-axis */}
          <div className="mt-10 space-y-3">
            <p className="text-sm leading-relaxed text-black">
              After the main motion system was stable, I built out the tool interface: a
              custom pen holder and a simple Z-axis actuator to manage contact and lift.
              The goal was consistent pressure and clean pen-up / pen-down behavior while
              still allowing quick swaps between different markers.
            </p>

            {/* Pen holder (2 photos) */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Custom pen holder
              </p>

              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <ImageBlock
                  src="/photos/straight_orientation.jpg"
                  alt="Custom pen holder photo showing straight orientation"
                  label="Straight orientation"
                  hoverText="Straight configuration for consistent contact and repeatable setup."
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/Angled_Orientation.jpg"
                  alt="Custom pen holder photo showing angled orientation"
                  label="Angled orientation"
                  hoverText="Angled configuration for tuning stroke style and contact behavior."
                  aspect="4/3"
                />
              </div>
            </div>

            {/* Z-axis actuator (text left / image right) */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Z-axis actuator
              </p>

              <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed text-black">
                    The Z-axis mechanism handles pen-up / pen-down motion so the plotter can
                    move between strokes without dragging ink. I kept it intentionally
                    simple: reliable lift, consistent return position, and minimal slop so
                    the pen touches down the same way every time.
                  </p>
                  <p className="text-sm leading-relaxed text-black">
                    This also let me tune contact pressure (and therefore line weight)
                    without changing the XY motion system. Once this was dialed in, the
                    drawing quality improved a lot — fewer skips, cleaner corners, and more
                    consistent shading in high-density regions.
                  </p>
                </div>

                <ImageBlock
                  src="/photos/zaxis.jpg"
                  alt="Z-axis actuator mechanism for pen up/down"
                  label="Pen-up / pen-down lift mechanism"
                  hoverText="Simple lift mechanism for reliable pen-up and pen-down control."
                  aspect="4/3"
                />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Programming */}
        <section className="space-y-3">
          <Kicker>Software</Kicker>
          <H2>Programming</H2>

          <p className="text-sm leading-relaxed text-black">
            On the software side, I built a lightweight pipeline to turn an image into
            drawable paths: edge detection, vectorization into line segments, and G-code
            generation tuned for smooth plotting. The output is standard G-code that the
            motion controller can execute directly.
          </p>

          <div className="mt-6">
            <ImageBlock
              src="/photos/series_of_pippins.png"
              alt="Diagram showing edge detection to G-code algorithm"
              label="Edge detection → vector paths → G-code"
              hoverText="Processing pipeline from image input to motion instructions."
              customAspect="1297/518"
            />
          </div>
        </section>

        <Divider />

        {/* Plotting */}
        <section className="space-y-3">
          <Kicker>Results</Kicker>
          <H2>Plotting</H2>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <ImageBlock
              src="/photos/aang.gif"
              alt="GIF of the plotter drawing Aang"
              label="Plotting example: Aang"
              hoverText="Executing generated G-code to draw a line-art portrait."
              aspect="4/3"
            />

            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-black">
                Once the tuning was dialed in, the plotter could reliably reproduce
                edge-detected portraits as clean marker drawings. Most of the quality came
                down to balancing speed, pen pressure, and simplifying the path density so
                the machine didn’t overdraw or chatter.
              </p>

              <p className="text-sm leading-relaxed text-black">
                The “feel” of the drawing (bold vs. sketchy) was adjustable by changing
                edge thresholds and how aggressively vectors were simplified before
                generating G-code.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-black">
                For a real-world test, I ran the pipeline on a photo of my dog Pippin. This
                was a good stress test because fur texture can generate noisy edges — so it
                forced me to tune the algorithm toward cleaner, more intentional linework
                instead of raw edge density.
              </p>
            </div>

            <ImageBlock
              src="/photos/pippin.gif"
              alt="GIF of the plotter drawing Pippin the dog"
              label="Plotting example: Pippin"
              hoverText="Edge-detected photo converted into G-code and plotted as a marker drawing."
              aspect="4/3"
            />
          </div>
        </section>

        <Divider />

        {/* Takeaways */}
        <section className="space-y-3">
          <Kicker>Wrap-up</Kicker>
          <H2>Takeaways</H2>

          <p className="text-sm leading-relaxed text-black">
            The biggest lessons from this build were all about repeatability: mechanical
            alignment matters more than “precision parts,” and software results are only as
            good as the assumptions baked into the pipeline. The best improvements came from
            iterating between the physical machine and the algorithm — tightening up motion,
            then simplifying toolpaths until the machine could draw smoothly and consistently.
          </p>

          <p className="text-sm leading-relaxed text-black">
            If I were to iterate again, I’d focus on faster setup/calibration, more consistent
            pen pressure control, and a cleaner vector simplification step to reduce overdraw
            on high-texture photos.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/aang.jpg"
              alt="Finished Aang drawing produced by the plotter"
              label="Finished drawing (Aang)"
              hoverText="Final marker drawing produced from the generated toolpath."
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/Pippin_finished_copy.jpg"
              alt="Finished Pippin drawing produced by the plotter"
              label="Finished drawing (Pippin)"
              hoverText="Final marker drawing produced from the generated toolpath."
              aspect="4/3"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

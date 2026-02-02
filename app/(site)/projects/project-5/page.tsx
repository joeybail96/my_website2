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
            Personal project • Mechanical Design • Laser Cutting • 3D Printing • Mechatronics
          </p>
        </header>

        {/* Hero */}
        <section className="mt-8">
          <ImageBlock
            src="/photos/cncplotter-profile.jpg"
            alt="CNC plotter drawing an image"
            label="Finished CNC Plotter"
            customAspect="4032/3024"
          />
        </section>

        {/* ====== SUMMARY SECTION (Project1-style) ====== */}
        <section className="mt-12 space-y-6">
          <Panel title="Summary">
            <p className="text-sm leading-relaxed text-black">
              I designed, built, and programmed this CNC Plotter while quarantined during COVID. I 
              have always been fascinated with 3D printers and CNC machines. In college, I worked a 
              lot with FDM printers and gained some familiarity with
              CNC machines as part of class projects and working in a machine shop as a member of the Formula SAE team. 
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              While a plotter is not exactly useful. It is effectively an overcomplicated, worse ink printer. 
              I still chose to design and build my 
              own. I figured it would be a fun project to exercise my engineering skills and refamiliarize 
              myself with g-code. 
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Skills Required &amp; Applied
              </p>

              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "CAD modeling (Autodesk Inventor)",
                  "Resource constraints ($$$ and tools)",
                  "Mechatronics (GRBL, Arduino, stepper motors, etc.)",
                  "Design for assembly with limited tools",
                  "Prototype iteration",
                  "3D printing",
                  "Image processing",
                  "Coding (g-code, Python)",
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
            I fully designed the CNC plotter with the constraints of limited tools in mind. Because I was restricted
            to simple hand tools, the assembly was intentionally based on straightforward, modular components.
            The structure primarily uses standard aluminum extrusion, eliminating the need for additional cutting
            or machining after delivery. Particle board was selected for the platforms to ensure flat, stable
            surfaces critical for accurate plotting.
          </p>

          <p className="text-sm leading-relaxed text-black">
            Laser-cut acrylic served as the primary structural interface between the aluminum extrusions.
            The acrylic sheets were custom cut with precisely located holes, allowing the frame to be assembled
            accurately and repeatably. Maintaining near-perfect alignment was essential, as the plotter’s control
            system depends on precise motion across three orthogonal axes. Using laser-cut acrylic provided a
            low-cost and highly effective solution for achieving this level of precision with limited at-home
            fabrication resources.
          </p>


          <div className="mt-6">
            <ImageBlock
              src="/photos/cnc_assembly.jpg"
              alt="Rendered CAD model of the CNC plotter"
              label="Here is a screenshot of the model loaded in Solidworks (originally designed in Autodesk Inventor)"
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
                I evaluated several actuation options for translating each axis and ultimately selected a
                ball screw mechanism due to its high positional accuracy and reduced risk of slip compared
                to pulley-based systems.
              </p>

              <p className="text-sm leading-relaxed text-black">
                Shown here is an early prototype built to evaluate ball screw control and overall feasibility.
                I initially had concerns that the ball screw might be too slow, prone to binding if the woodworking
                tolerances were not tight enough, or limited by stepper motor torque. The prototype performed
                reliably and validated the design approach, giving me confidence to proceed with the ball
                screw actuation strategy.
              </p>

            </div>

            <ImageBlock
              src="/photos/prototype1.jpg"
              alt="Initial ball screw actuation concept prototype"
              label="Initial ball screw actuation concept"
              customAspect="4032/3024"
            />
          </div>

          {/* final ballscrew design implemented (2nd is now a GIF that loops) */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/ballscrew_final.jpg"
              alt="Final ball screw design implemented photo 1"
              label="Ball screw X and Y axes"
              customAspect="4032/3024"
            />

            <GifBlock
              src="/photos/actuating.gif"
              alt="Final ball screw actuation shown in motion"
              label="Animation of X and Y actuation (sorry...this gif is kind of poor)"
              customAspect="854/480"
              cacheBust={false}
            />
          </div>

          {/* body text followed by pen holder + z-axis */}
          <div className="mt-10 space-y-3">
            <p className="text-sm leading-relaxed text-black">
              The pen holder concept I designed and produced using an SLA 3D printer turned out exceptionally well.
              The holder fits a Sharpie comfortably and clamps securely to a custom acrylic mount using two screws.
              A key feature of the design is adjustability: it allows the Sharpie to be set anywhere from vertical
              to a 45° angle of attack.
              I also designed the plate to accept a press-fit rack (for a rack-and-pinion system), which interfaces
              with a stepper motor and gear to raise and lower the Sharpie during plotting. This mechanism functions
              as the plotter’s Z-axis actuation system.
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
                  label="Pen holder - straight orientation"
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/Angled_Orientation.jpg"
                  alt="Custom pen holder photo showing angled orientation"
                  label="Pen holder - angled orientation"
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
                    Here, you can see a closer image of how the Z-axis mechanism handles pen-up / pen-down motion so the plotter can
                    move between strokes without dragging ink.
                  </p>
                </div>

                <ImageBlock
                  src="/photos/zaxis.jpg"
                  alt="Z-axis actuator mechanism for pen up/down"
                  label="Rack and pinion Z-axis mechanism"
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
            On the software side, I wrote a few simple programs that could take a photo, apply some 
            simple filters to smooth minor features and emphasize key contrast edges, detect those edges, and 
            convert those edges into g-code. Here, I have a few screenshots of this pipeline.
          </p>

          <div className="mt-6">
            <ImageBlock
              src="/photos/series_of_pippins.png"
              alt="Diagram showing edge detection to G-code algorithm"
              label="Original photo → filtered and smoothed → edges detected → converted to g-code for plotting"
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
              label="Drawing Aang from The Last Airbender"
              aspect="4/3"
            />

            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-black">
                Once the tuning was dialed in, the plotter could reliably reproduce
                edge-detected portraits as clean marker drawings. Here is a gif of the plotter 
                making a drawing of Aang from Avatar the Last Airbender. 
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-black">
                Here the plotter is drawing my dog Pippin. You can see a fuller video of this 
                here https://www.youtube.com/watch?v=E39LJF87FLg.
              </p>
            </div>

            <ImageBlock
              src="/photos/pippin.gif"
              alt="GIF of the plotter drawing Pippin the dog"
              label="Drawing my dog, Pippin"
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
            One persistent issue I had with this design iteration was that the stepper motor for the 
            z-axis would burn out. As a result, the plotter did not always lift up the sharpie between strokes. Instead, 
            the marker would stay pressed on the paper, and it would generate lines connecting features that should 
            have been isolated from each other. I once thought I would someday like to upgrade the z-axis motor to be more robust to 
            address this issue. More than likely, I won't ever do this! I would like to embark on a whole new cnc project 
            that is more capable, now that I have grown my machining resources and skillset!
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/aang.jpg"
              alt="Finished Aang drawing produced by the plotter"
              label="Finished drawing of Aang"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/Pippin_finished_copy.jpg"
              alt="Finished Pippin drawing produced by the plotter"
              label="Finished drawing of Pippin"
              aspect="4/3"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";

function Divider() {
  return <div className="my-10 h-px w-full bg-zinc-200 dark:bg-zinc-800" />;
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
    <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
      {children}
    </h2>
  );
}

function ImageBlock({
  src,
  alt,
  label,
  hoverText,
  aspect = "16/9",
}: {
  src: string;
  alt: string;
  label?: string;
  hoverText?: string;
  aspect?: "16/9" | "4/3";
}) {
  const aspectClass = aspect === "4/3" ? "aspect-[4/3]" : "aspect-[16/9]";

  return (
    <figure>
      <div
        className={`group relative w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800 ${aspectClass}`}
        tabIndex={0}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
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
        <figcaption className="mt-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function ProjectCNCPlotterPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        CNC Plotter
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Personal machine build • Mechanical design, motion systems, and toolpath generation
      </p>

      {/* Hero */}
      <div className="mt-6">
        <ImageBlock
          src="/photos/CNC-hero.jpg"
          alt="CNC plotter drawing an image"
          label="Placeholder: Plotter drawing an image"
          hoverText="Custom CNC plotter executing G-code to draw an edge-detected image with a marker."
        />
      </div>

      {/* Overview */}
      <section className="mt-10 max-w-3xl space-y-4">
        <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          This project is a custom-built CNC plotter designed to convert photographs into
          line drawings using a marker. The workflow consists of detecting image edges,
          converting those edges into vector paths, generating G-code, and executing the
          toolpaths on a two-axis motion system.
        </p>

        <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          The machine was designed in SolidWorks and built from plywood, T-slot aluminum,
          stepper motors, and ball screws. Because the available tool set was limited to
          hand tools and a miter saw, all structural and motion components were selected
          or designed to be assembled from off-the-shelf parts with minimal machining.
        </p>
      </section>

      <Divider />

      {/* System */}
      <section className="grid gap-6 sm:grid-cols-2">
        <div>
          <Kicker>Software pipeline</Kicker>
          <H2>Image → toolpath → motion</H2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            <li>Input image is processed with edge detection.</li>
            <li>Detected edges are converted into vector line segments.</li>
            <li>Vectors are translated into G-code toolpaths.</li>
            <li>The plotter executes the G-code to draw the image.</li>
          </ol>
        </div>

        <div>
          <Kicker>Mechanical design</Kicker>
          <H2>Motion and pen control</H2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            The plotter uses stepper motors driving ball screws to provide precise,
            repeatable two-axis motion. The pen carriage rides on linear guides and
            holds a custom resin-printed marker holder that allows both diameter
            adjustment and angular control.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            The pen holder accepts markers of different diameters and allows the pen
            to be rotated from 0° to 90° using a set screw and arced slot. This makes it
            possible to tune contact angle and pressure depending on the drawing style
            and marker type. All other machine components were used as ordered or
            modified using hand tools and a miter saw.
          </p>
        </div>
      </section>

      <Divider />

      {/* Images */}
      <section>
        <Kicker>Process</Kicker>
        <H2>Design, build, and operation</H2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          These images document the design, fabrication, and operation of the plotter.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ImageBlock
            src="/photos/CNC-cad.jpg"
            alt="SolidWorks model of CNC plotter"
            label="Placeholder: SolidWorks model"
            hoverText="Complete CAD model of the frame, gantry, and motion system."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/CNC-build.jpg"
            alt="CNC plotter under construction"
            label="Placeholder: Build in progress"
            hoverText="Assembly of plywood frame, T-slot aluminum, and motion components."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/CNC-marker-holder.jpg"
            alt="Resin-printed marker holder"
            label="Placeholder: Custom pen holder"
            hoverText="Resin-printed holder with adjustable diameter and 0–90° tilt via arced slot and set screw."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/CNC-plotting.gif"
            alt="CNC plotter executing G-code"
            label="Placeholder: Plotting GIF"
            hoverText="Machine executing G-code to produce a line drawing."
            aspect="4/3"
          />
        </div>
      </section>
    </main>
  );
}

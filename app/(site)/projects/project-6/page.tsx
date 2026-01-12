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

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
        {title}
      </p>
      <div className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
        {children}
      </div>
    </div>
  );
}

export default function ProjectGlassAutoloaderPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Automated Glass Autoloader (Capstone)
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Penn State Learning Factory • Mechanical design • Prototyping • Automation concept → prototype
      </p>

      {/* Quick context */}
      <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        Designed and prototyped a machine concept to automatically transfer up to ~100 sheets of
        vertically-stored glass from a harp rack onto a tilt-table conveyor, reducing manual handling,
        improving consistency, and lowering breakage risk.
      </p>

      {/* Hero */}
      <div className="mt-6">
        <ImageBlock
          src="/photos/GLASSLOADER-hero.jpg"
          alt="Automated glass autoloader concept render"
          label="Placeholder: Hero (CAD render of autoloader + harp rack + tilt table)"
          hoverText="Glass Autoloader: automated indexing platform + pusher mechanism to unload stacked sheets safely and consistently."
          aspect="16/9"
        />
      </div>

      {/* Snapshot */}
      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        <Card title="Project goal">
          Create a mechanical system that automatically unloads glass sheets from a harp rack and
          places them onto a tilt-table conveyor with a repeatable cycle.
        </Card>

        <Card title="My role">
          Mechanical design + build contributor: requirements → concepts → CAD → fabrication planning →
          assembly and subsystem testing.
        </Card>

        <Card title="Key contributions">
          <ul className="list-disc space-y-1 pl-4">
            <li>Supported concept generation and down-selection using a weighted decision matrix.</li>
            <li>Helped develop the core “index + push” approach for repeatable sheet transfer.</li>
            <li>Produced CAD and build inputs for platform, drive, and pusher components.</li>
            <li>Assisted with assembly, alignment, and validation of the cycle behavior.</li>
          </ul>
        </Card>

        <Card title="Outcomes">
          <ul className="list-disc space-y-1 pl-4">
            <li>Delivered a functioning prototype demonstrating indexing + push/retract motion.</li>
            <li>Validated repeatable cycle operation and identified improvements for robustness.</li>
            <li>Produced documentation that supported handoff for future iteration.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* Photos */}
      <section>
        <Kicker>Photos</Kicker>
        <H2>Concept → Prototype</H2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          Swap these placeholders with your strongest visuals: system CAD, indexing hardware,
          pusher detail, and a shop photo of the prototype.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ImageBlock
            src="/photos/GLASSLOADER-cad-overview.jpg"
            alt="CAD overview of the system"
            label="Placeholder: CAD overview (platform + harp rack + tilt table)"
            hoverText="System-level CAD: shows the indexing platform and pusher alignment with the tilt table."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/GLASSLOADER-platform-drive.jpg"
            alt="Rack and pinion / platform drive"
            label="Placeholder: Indexing drive detail (rack + pinion + motor mount)"
            hoverText="Indexing platform: step motion that advances the rack by fixed increments."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/GLASSLOADER-pusher.jpg"
            alt="Pusher mechanism detail"
            label="Placeholder: Pusher mechanism detail"
            hoverText="Pusher subsystem: a guided linear push to transfer one sheet at a time onto the conveyor."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/GLASSLOADER-prototype.jpg"
            alt="Prototype in the shop"
            label="Placeholder: Prototype photo (in the shop / during testing)"
            hoverText="Prototype validation: assembled system undergoing alignment and cycle testing."
            aspect="4/3"
          />
        </div>
      </section>
    </main>
  );
}

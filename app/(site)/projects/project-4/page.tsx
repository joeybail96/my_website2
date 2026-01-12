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

export default function ProjectSubaruCamperPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Subaru Outback Camper Build
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Personal build • CAD → wood → road-tested
      </p>

      {/* Hero */}
      <div className="mt-6">
        <ImageBlock
          src="/photos/CAMPER-hero.jpg"
          alt="Camper inside a Subaru Outback"
          label="Placeholder: Camper installed in the Outback"
          hoverText="A simple, removable camper platform designed to turn a Subaru Outback into a road-trip rig."
        />
      </div>

      {/* Story */}
      <section className="mt-10 max-w-3xl space-y-4">
        <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          I built this camper as a way to move out west and live out of my car while
          road-tripping through South Dakota, Wyoming, Washington, and Utah.
          The goal was simple: create a clean, level sleeping platform with organized
          storage that fit perfectly inside my Subaru Outback and could be installed
          or removed without modifying the car.
        </p>

        <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          I modeled the entire interior envelope in SolidWorks, designed a flat bed
          surface with under-platform storage, and added a pull-out drawer for clothes,
          tools, and cooking gear. Then I bought the plywood, slides, fasteners, and
          hardware and built the whole thing in my garage.
        </p>

        <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          It wasn’t a showpiece — it was built to be used. I slept in it, lived out of it,
          and took it through thousands of miles of real travel. It held up, stayed quiet,
          and made the road trip genuinely comfortable.
        </p>
      </section>

      <Divider />

      {/* What it includes */}
      <section className="grid gap-6 sm:grid-cols-2">
        <div>
          <Kicker>What it includes</Kicker>
          <H2>Design features</H2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            <li>Flat, level sleeping platform sized to the Outback interior</li>
            <li>Under-bed compartments for clothes and gear</li>
            <li>Full-length pull-out drawer for easy access to storage</li>
            <li>Lightweight plywood construction with removable mounting</li>
            <li>Built to fit without drilling or modifying the vehicle</li>
          </ul>
        </div>

      </section>

      <Divider />

      {/* Photos */}
      <section>
        <Kicker>Photos</Kicker>
        <H2>Design → Build → Road trip</H2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          These are the kinds of images that sell the story best: CAD, construction,
          and the camper actually being used.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ImageBlock
            src="/photos/CAMPER-cad.jpg"
            alt="SolidWorks model of the camper"
            label="Placeholder: SolidWorks model"
            hoverText="Modeled to match the exact interior envelope of the Subaru Outback."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/CAMPER-build.jpg"
            alt="Camper under construction"
            label="Placeholder: Build in progress"
            hoverText="Plywood panels, drawer slides, and framing assembled into a rigid platform."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/CAMPER-drawer.jpg"
            alt="Pull-out drawer"
            label="Placeholder: Pull-out drawer"
            hoverText="Full-length drawer for clothes, food, and road-trip gear."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/CAMPER-roadtrip.jpg"
            alt="Camper on a road trip"
            label="Placeholder: Camper on the road"
            hoverText="Field-tested across South Dakota, Wyoming, Washington, and Utah."
            aspect="4/3"
          />
        </div>
      </section>
    </main>
  );
}

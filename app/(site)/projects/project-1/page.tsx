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
      {/* group enables group-hover styles */}
      <div
        className={`group relative w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800 ${aspectClass}`}
        tabIndex={0} // keyboard focus support
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
          sizes="(min-width: 1024px) 800px, 100vw"
        />

        {/* Hover overlay */}
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

export default function Project1Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Design and Deployment of a Remote Aerosol Research Facility
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        University of Utah × Rainmaker • Mechanical design • Field deployment • Systems integration
      </p>

      {/* Hero */}
      <div className="mt-6">
        <ImageBlock
          src="/photos/PROJECT1-hero.jpg"
          alt="Container lab and inlet deployed at mountain site"
          label="Placeholder: Hero photo (container + inlet installed at site)"
          hoverText="Remote aerosol facility deployed at Powder Mountain: container lab + inlet system (field-ready integration)."
          aspect="16/9"
        />
      </div>

      {/* Snapshot */}
      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        <Card title="Goal">
          Build a transportable aerosol monitoring lab that mimics permanent research facilities,
          deployed in a remote mountain environment to support cloud-seeding aerosol measurements.
        </Card>

        <Card title="My role">
          Sole engineer responsible for inlet redesign, container modifications, structural support
          strategy, instrument layout, and on-site installation/troubleshooting.
        </Card>

        <Card title="Key contributions">
          <ul className="list-disc space-y-1 pl-4">
            <li>Redesigned a 30-ft inlet to meet new scientific criteria + fit a shipping container.</li>
            <li>Produced fabrication-ready drawings and coordinated rapid machine-shop iteration.</li>
            <li>Engineered a non-concrete support solution using guy wires + custom interfaces.</li>
            <li>Designed container cutouts, framing, and an ergonomic instrument layout.</li>
            <li>Led field installation under winter mountain conditions and solved issues on-site.</li>
          </ul>
        </Card>

        <Card title="Outcomes">
          <ul className="list-disc space-y-1 pl-4">
            <li>Deployed a functioning remote aerosol facility at Powder Mountain.</li>
            <li>Installed a 30-ft inlet and structural support system without concrete.</li>
            <li>Integrated multiple instruments into a serviceable, field-ready container layout.</li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* Proof (images that sell the story) */}
      <section>
        <Kicker>Proof of work</Kicker>
        <H2>Design → Fabrication → Installation</H2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          A few visuals that quickly show engineering ownership across CAD, build, and field execution.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ImageBlock
            src="/photos/PROJECT1-cad-container.jpg"
            alt="SolidWorks model of container and support framing"
            label="Placeholder: SolidWorks assembly (container + Unistrut frames + hardware)"
            hoverText="CAD ownership: full container layout, framing strategy, interfaces, and clearances for instruments and inlet routing."
            aspect="4/3"
          />
          <ImageBlock
            src="/photos/PROJECT1-inlet-drawings.jpg"
            alt="Fabrication drawings for inlet modifications"
            label="Placeholder: Inlet fabrication drawings / GD&T snapshot"
            hoverText="Fabrication-ready deliverables: drawings that enabled rapid machine-shop iteration and field-fit assembly."
            aspect="4/3"
          />
          <ImageBlock
            src="/photos/PROJECT1-guy-wire-detail.jpg"
            alt="Guy wire anchor and turnbuckle interface"
            label="Placeholder: Guy-wire interface (anchor + turnbuckle + inlet attachment)"
            hoverText="Structural solution without concrete: guy-wire anchoring, turnbuckles, and custom attachment points for stability."
            aspect="4/3"
          />
          <ImageBlock
            src="/photos/PROJECT1-installed.jpg"
            alt="Installed inlet at site"
            label="Placeholder: Installed inlet at site (full-height or mid-height shot)"
            hoverText="Field execution: installed inlet + supports in winter mountain conditions; validated stability and service access."
            aspect="4/3"
          />
        </div>
      </section>

      <Divider />

      {/* Skills / Tools */}
      <section className="grid gap-5 sm:grid-cols-2">
        <Card title="Skills demonstrated">
          <ul className="list-disc space-y-1 pl-4">
            <li>Mechanical design under real constraints (wind/snow/access/timeline/budget)</li>
            <li>Design for manufacturability + rapid vendor iteration</li>
            <li>Structural thinking (load paths, anchoring, stability without foundations)</li>
            <li>Systems integration (inlet + instruments + container modifications)</li>
            <li>Field execution (install leadership, troubleshooting, tool work)</li>
          </ul>
        </Card>

        <Card title="Tools">
          <ul className="list-disc space-y-1 pl-4">
            <li>SolidWorks (3D modeling, assemblies, GD&amp;T, drawings)</li>
            <li>Machine shop coordination (quotes, revisions, manufacturability)</li>
            <li>Unistrut + hardware BOMs</li>
            <li>Power tools & fabrication (drilling, cutting, grinding, metal/wood work)</li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* Optional: standards-driven design */}
      <section className="grid gap-6 sm:grid-cols-[1fr_1fr] sm:items-start">
        <div>
          <Kicker>Optional add-on</Kicker>
          <H2>Standards-driven inlet heating concept</H2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            Designed a future inlet heating approach aligned with WMO-GAW and ACTRIS/EUSAAR
            guidance for sampling integrity (condensation control). Not deployed initially due to
            lead times, but ready for future upgrades.
          </p>
        </div>

        <ImageBlock
          src="/photos/PROJECT1-heating-concept.jpg"
          alt="Inlet heating concept schematic or CAD"
          label="Placeholder: Heating concept (routing / insulation / heat trace)"
          hoverText="Upgrade concept: heat tracing + insulation routing to control condensation and preserve sampling integrity."
          aspect="4/3"
        />
      </section>

      <Divider />

      {/* References */}
      <section>
        <Kicker>References</Kicker>
        <H2>Partners, facilities & standards</H2>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          <li>
            <a
              href="https://atmos.utah.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 hover:text-blue-600"
            >
              University of Utah — Department of Atmospheric Sciences
            </a>
          </li>

          <li>
            <a
              href="https://www.rainmaker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 hover:text-blue-600"
            >
              Rainmaker Technology
            </a>
          </li>

          <li>
            <a
              href="https://atmos.utah.edu/storm_peak_lab/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 hover:text-blue-600"
            >
              Storm Peak Laboratory (Steamboat Springs, CO)
            </a>
          </li>

          <li>
            <a
              href="https://community.wmo.int/en/programmes/global-atmosphere-watch-programme"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 hover:text-blue-600"
            >
              WMO-GAW & EUSAAR/ACTRIS Aerosol Inlet Guidelines
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

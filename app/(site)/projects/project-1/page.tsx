import Image from "next/image";

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Divider() {
  return <div className="my-10 h-px w-full bg-zinc-200 dark:bg-zinc-800" />;
}

function ImagePlaceholder({
  src,
  alt,
  label,
  aspect = "16/9",
}: {
  src: string;
  alt: string;
  label?: string;
  aspect?: "16/9" | "4/3" | "1/1";
}) {
  const aspectClass =
    aspect === "16/9"
      ? "aspect-[16/9]"
      : aspect === "4/3"
        ? "aspect-[4/3]"
        : "aspect-[1/1]";

  return (
    <figure>
      <div
        className={`relative w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800 ${aspectClass}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 800px, 100vw"
        />
      </div>
      {label ? (
        <figcaption className="mt-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

function LabeledBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
        {label}
      </p>
      <div className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
        {children}
      </div>
    </div>
  );
}

function TimelineItem({
  title,
  bullets,
  image,
}: {
  title: string;
  bullets: string[];
  image?: {
    src: string;
    alt: string;
    label: string;
  };
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-[1fr_220px] sm:items-start">
      <div>
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      {image ? (
        <div className="sm:pt-1">
          <ImagePlaceholder
            src={image.src}
            alt={image.alt}
            label={image.label}
            aspect="4/3"
          />
        </div>
      ) : null}
    </div>
  );
}

export default function Project1Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Design & Deployment of a Remote Aerosol Research Facility
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        University of Utah × Rainmaker • Container lab retrofit • 30-ft aerosol inlet •
        Powder Mountain (Wasatch Mountains)
      </p>

      {/* Hero image */}
      <div className="mt-6">
        <ImagePlaceholder
          src="/photos/PROJECT1-hero.jpg"
          alt="Remote aerosol container lab and inlet at the mountain site"
          label="Placeholder: Hero photo of container + installed inlet at site"
          aspect="16/9"
        />
      </div>

      {/* Quick summary */}
      <section className="mt-10 grid gap-8 sm:grid-cols-2">
        <LabeledBlock label="One-liner">
          <p>
            I led mechanical design and field execution of a transportable, container-based
            aerosol research lab to support cloud-seeding and aerosol monitoring in remote
            mountain conditions—delivering a functioning facility on an aggressive timeline.
          </p>
        </LabeledBlock>

        <LabeledBlock label="Context">
          <p>
            In August, the University of Utah and Rainmaker began executing a partnership to
            develop a remote aerosol lab that mimics permanent facilities at the University
            of Utah and Storm Peak Lab (Steamboat, CO), but in a retrofitted shipping
            container that can be redeployed as science needs change.
          </p>
        </LabeledBlock>
      </section>

      <Divider />

      {/* Project Snapshot */}
      <section>
        <SectionTitle
          kicker="Project snapshot"
          title="Goal, contributions, outcomes, and references"
          subtitle="A scannable overview for readers who want the high-level story first."
        />

        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <LabeledBlock label="Goal">
            <p>
              Develop and deploy a transportable aerosol monitoring laboratory—built into a
              shipping container—capable of operating reliably in the Wasatch Mountains to
              measure aerosols relevant to cloud-seeding impacts.
            </p>
          </LabeledBlock>

          <LabeledBlock label="Contributions">
            <ul className="list-disc space-y-1 pl-4">
              <li>Interpreted scientific design criteria and translated them into buildable hardware.</li>
              <li>Modified a 30-ft inlet design to meet new requirements and fit a shipping container.</li>
              <li>Produced fabrication-ready drawings and managed rapid machine-shop iteration.</li>
              <li>Designed container modifications (roof penetrations, framing, layout, mounting).</li>
              <li>Designed a non-concrete structural support system using guy wires + custom interfaces.</li>
              <li>Led on-site installation and troubleshooting in harsh mountain conditions.</li>
            </ul>
          </LabeledBlock>

          <LabeledBlock label="Outcomes">
            <ul className="list-disc space-y-1 pl-4">
              <li>Delivered a deployed 30-ft (~150 lb) aerosol inlet and container lab at Powder Mountain.</li>
              <li>Integrated an “arsenal” of aerosol instrumentation with ergonomic, serviceable layout.</li>
              <li>Built a stable inlet support solution without a concrete foundation using guy wires.</li>
              <li>Enabled ongoing remote aerosol measurements supporting cloud-seeding research.</li>
            </ul>
          </LabeledBlock>

          <LabeledBlock label="Reference / standards / partners">
            <ul className="list-disc space-y-1 pl-4">
              <li>University of Utah</li>
              <li>Rainmaker Technology</li>
              <li>Storm Peak Lab (Steamboat, CO) — reference facility</li>
              <li>WMO-GAW aerosol inlet guidance (thermal / sampling integrity considerations)</li>
              <li>EUSAAR / ACTRIS research infrastructure standards (thermal / sampling integrity considerations)</li>
            </ul>
          </LabeledBlock>

          <LabeledBlock label="Skills">
            <ul className="list-disc space-y-1 pl-4">
              <li>Fast-paced mechanical design under real field constraints</li>
              <li>3D CAD, GD&amp;T, design for manufacturability</li>
              <li>Structural concepting, load paths, and installation planning</li>
              <li>Systems integration (inlet + instruments + container modifications)</li>
              <li>Field leadership, troubleshooting, and safe execution</li>
              <li>Cross-functional communication with scientists and managers</li>
            </ul>
          </LabeledBlock>

          <LabeledBlock label="Tools">
            <ul className="list-disc space-y-1 pl-4">
              <li>SolidWorks (full container + structural assemblies, layouts, drawings)</li>
              <li>Machine-shop collaboration (rapid revisions, manufacturability)</li>
              <li>Unistrut framing and hardware (BOMs with contingencies)</li>
              <li>Power tools: drilling, cutting, grinding, woodworking, metalworking, soldering</li>
              <li>Thermal design concepts: inlet heating / condensation control (standards-driven)</li>
            </ul>
          </LabeledBlock>
        </div>
      </section>

      <Divider />

      {/* Key images */}
      <section>
        <SectionTitle
          kicker="Key visuals"
          title="What to show (placeholders)"
          subtitle="These images make the story credible. Replace placeholders with your photos as you collect them."
        />

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ImagePlaceholder
            src="/photos/PROJECT1-container-exterior.jpg"
            alt="Container exterior at site"
            label="Placeholder: Container at Powder Mountain (exterior)"
            aspect="4/3"
          />
          <ImagePlaceholder
            src="/photos/PROJECT1-inlet-installed.jpg"
            alt="30-ft inlet installed"
            label="Placeholder: 30-ft inlet installed (full-height shot)"
            aspect="4/3"
          />
          <ImagePlaceholder
            src="/photos/PROJECT1-cad-container.jpg"
            alt="SolidWorks model of container + frames"
            label="Placeholder: SolidWorks container model (Unistrut frames + hardware)"
            aspect="4/3"
          />
          <ImagePlaceholder
            src="/photos/PROJECT1-guy-wire-system.jpg"
            alt="Guy wire anchoring details"
            label="Placeholder: Guy wire anchor + turnbuckle interface (close-up)"
            aspect="4/3"
          />
        </div>
      </section>

      <Divider />

      {/* Narrative / timeline */}
      <section>
        <SectionTitle
          kicker="How it happened"
          title="From concept to deployment"
          subtitle="A chronological view of the engineering decisions and pivots that made this deployment possible."
        />

        <div className="mt-6 space-y-8">
          <TimelineItem
            title="1) Kickoff & requirements (August)"
            bullets={[
              "Partnership initiated between University of Utah and Rainmaker to deploy a remote aerosol lab for cloud-seeding-related aerosol monitoring.",
              "Goal: replicate performance of permanent labs (U of U + Storm Peak Lab) in a transportable shipping container platform.",
              "Collected design criteria from the scientific team and translated requirements into engineering constraints (geometry, sampling integrity, maintainability, site conditions).",
              "Measured the container and gathered reference 2D CAD models of existing 30-ft inlet systems.",
            ]}
            image={{
              src: "/photos/PROJECT1-requirements-notes.jpg",
              alt: "Requirements and reference inlet documentation",
              label: "Placeholder: Requirements doc / reference inlet drawings",
            }}
          />

          <TimelineItem
            title="2) Rapid inlet redesign & fabrication (first ~2 months)"
            bullets={[
              "Worked closely with a machine shop to quickly modify the inlet to meet new criteria and comply with the shipping container geometry.",
              "Produced my own fabrication drawings with manufacturability in mind (GD&T where needed, serviceability, assembly logic).",
              "Delivered a machined inlet on an aggressive timeline while coordinating revisions in parallel with container planning.",
            ]}
            image={{
              src: "/photos/PROJECT1-inlet-drawings.jpg",
              alt: "Fabrication drawings for inlet modifications",
              label: "Placeholder: Fabrication drawings / CAD of inlet changes",
            }}
          />

          <TimelineItem
            title="3) Constraint discovery: no concrete foundation → support redesign"
            bullets={[
              "Learned a concrete foundation was not permitted at the field site—removing the standard Rohn tower option.",
              "Brainstormed multiple non-concrete support concepts; aligned the team on a guy-wire approach as the most feasible path.",
              "Identified a key gap: guy wires stabilize laterally but do not inherently provide vertical support—triggering a rapid inlet support modification.",
            ]}
            image={{
              src: "/photos/PROJECT1-support-concepts.jpg",
              alt: "Support structure concept sketches or CAD",
              label: "Placeholder: Support concept sketches / decision slide",
            }}
          />

          <TimelineItem
            title="4) Container layout & permanent modifications"
            bullets={[
              "Took inventory of all instruments, captured placement constraints (relative to inlet, service clearances, routing).",
              "Designed an ergonomic, serviceable interior layout for instruments, lines, and cabling.",
              "Executed permanent container alterations to enable installation: roof penetrations, internal studs/framing, mudroom placement, and mounts—ensuring nothing interfered with instrumentation or inlet routing.",
            ]}
            image={{
              src: "/photos/PROJECT1-container-interior-layout.jpg",
              alt: "Container interior layout plan",
              label: "Placeholder: Interior layout plan (CAD) + annotated instrument locations",
            }}
          />

          <TimelineItem
            title="5) Field deployment & structural execution (Powder Mountain)"
            bullets={[
              "Delivered inlet + modifications as the container was transported to the site.",
              "Modeled container structure in SolidWorks and designed internal/external Unistrut frames with hardware; produced BOMs with contingencies.",
              "Researched guy-wire installation practices and designed a custom anchoring system to attach turnbuckles to the container and guy wires to the inlet.",
              "Coordinated with machine shops to create inlet interfaces for guy wires (not included in original inlet design).",
            ]}
            image={{
              src: "/photos/PROJECT1-bom.jpg",
              alt: "Bill of materials and Unistrut frame design",
              label: "Placeholder: BOM screenshot + Unistrut frame CAD",
            }}
          />

          <TimelineItem
            title="6) On-site problem solving & installation leadership"
            bullets={[
              "Led graduate students and Rainmaker technicians through safe installation: anchoring, tensioning, alignment, and securing the inlet.",
              "Responded to unforeseen issues in harsh winter mountain conditions with practical mechanical fixes and rapid iteration.",
              "Completed installation of a stable, field-ready remote lab now hosting a full suite of aerosol equipment.",
            ]}
            image={{
              src: "/photos/PROJECT1-install-team.jpg",
              alt: "Installation in progress at site",
              label: "Placeholder: Installation day photo (team + inlet + container)",
            }}
          />
        </div>
      </section>

      <Divider />

      {/* Standards-driven heater concept */}
      <section>
        <SectionTitle
          kicker="Future work"
          title="Standards-driven inlet heating concept"
          subtitle="A thermal control design aligned with international aerosol sampling guidance."
        />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:items-start">
          <div className="space-y-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            <p>
              I designed a heating system for the inlet following guidance from the WMO-GAW
              program and the European research infrastructure networks EUSAAR/ACTRIS to
              reduce condensation risk and preserve sampling integrity in cold conditions.
            </p>
            <p>
              Due to long lead times, the heating system was not executed during the initial
              deployment, but the design is intended for future upgrades as the facility evolves.
            </p>
          </div>

          <ImagePlaceholder
            src="/photos/PROJECT1-heating-concept.jpg"
            alt="Inlet heating concept CAD or schematic"
            label="Placeholder: Heating concept (CAD/schematic) + insulation/heat trace routing"
            aspect="4/3"
          />
        </div>
      </section>

      <Divider />

      {/* Design communication / cross-functional */}
      <section>
        <SectionTitle
          kicker="Working style"
          title="Cross-functional execution under pressure"
          subtitle="How decisions were made and communicated in a team with limited engineering bandwidth."
        />

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          <p>
            This project was executed by a cross-functional group composed mostly of managers
            and scientists, many with limited engineering experience. I consistently provided
            progress updates and enabled key decisions by presenting clear SolidWorks models
            (3D assemblies, layouts, and 2D drawings) to communicate constraints and tradeoffs.
          </p>
          <p>
            As the lone engineer, any mechanical or technical problem became my responsibility
            to diagnose and solve. The work required rapid decision-making, creative engineering
            under uncertainty, and practical fabrication skills—while staying within a tight budget
            and an extremely aggressive timeline.
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ImagePlaceholder
            src="/photos/PROJECT1-decision-slide.jpg"
            alt="3D layout used for decision making"
            label="Placeholder: 3D layout / decision slide used in team updates"
            aspect="4/3"
          />
          <ImagePlaceholder
            src="/photos/PROJECT1-asbuilt.jpg"
            alt="As-built interior or inlet system"
            label="Placeholder: As-built photo matching the model (credibility shot)"
            aspect="4/3"
          />
        </div>
      </section>

      <Divider />

      {/* Closing */}
      <section>
        <SectionTitle
          kicker="Result"
          title="A field-ready research facility built end-to-end"
          subtitle="This was a real deployment with real constraints—designed, fabricated, and installed to operate in remote winter conditions."
        />

        <div className="mt-4 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          <p>
            The delivered system is now operating as a remote aerosol research facility in the
            Wasatch Mountains, supporting cloud-seeding and aerosol monitoring efforts. The work
            spans concepting, detailed mechanical design, manufacturable drawings, site-driven
            structural engineering, and hands-on installation leadership.
          </p>
        </div>
      </section>
    </main>
  );
}

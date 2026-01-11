import Image from "next/image";

function Pair({
  title,
  subtitle,
  leftLabel,
  leftSrc,
  rightLabel,
  rightSrc,
  caption,
}: {
  title: string;
  subtitle?: string;
  leftLabel: string;
  leftSrc: string;
  rightLabel: string;
  rightSrc: string;
  caption: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-sm text-zinc-900 dark:text-zinc-100">{subtitle}</p>
        ) : null}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
            <Image
              src={leftSrc}
              alt={`${title} - ${leftLabel}`}
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs font-medium text-zinc-800 dark:text-zinc-300">
            {leftLabel}
          </figcaption>
        </figure>

        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
            <Image
              src={rightSrc}
              alt={`${title} - ${rightLabel}`}
              fill
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-xs font-medium text-zinc-800 dark:text-zinc-300">
            {rightLabel}
          </figcaption>
        </figure>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
        {caption}
      </p>
    </div>
  );
}

export default function Project1Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Design & Deployment of a Remote Aerosol Research Facility
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-800 dark:text-zinc-300">
        Mechanical design • Field instrumentation • Systems integration
      </p>

      {/* Hero image (16:9) */}
      <div className="relative mt-6 w-full aspect-[16/9] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
        <Image
          src="/photos/labcover-profile.jpg"
          alt="Remote aerosol research facility and inlet system"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 800px, 100vw"
        />
      </div>

      {/* High-level summary (design/build focused) */}
      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 dark:text-zinc-300">
            What I owned
          </h2>
          <ul className="mt-2 list-disc pl-4 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            <li>Concept → CAD → fabrication-ready drawings</li>
            <li>Design for field constraints (wind, snow, access, maintenance)</li>
            <li>Thermal strategy (heat tracing, insulation, condensation control)</li>
            <li>Integration of inlet + tubing + instruments within the container lab</li>
            <li>On-site installation, commissioning, and troubleshooting</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 dark:text-zinc-300">
            Outcomes
          </h2>
          <ul className="mt-2 list-disc pl-4 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            <li>Deployed a heated aerosol inlet system at a remote mountain site</li>
            <li>Integrated multiple instruments into a container-based lab layout</li>
            <li>Produced months of continuous, usable data under winter conditions</li>
            <li>Created documentation supporting repeat deployment and servicing</li>
          </ul>
        </div>
      </section>

      {/* Tools & skills (blue pills) */}
      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 dark:text-zinc-300">
          Tools & skills
        </h2>

        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200">
            SolidWorks / Fusion 360
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200">
            Fabrication drawings
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200">
            Aluminum & steel fabrication
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200">
            Heat tracing & insulation
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200">
            Flow control / sampling lines
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200">
            Field commissioning
          </span>
        </div>
      </section>

      {/* Narrative (shorter, more to-the-point) */}
      <article className="mt-10 space-y-4 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
        <p>
          The core challenge was building a sampling system that behaves like a lab instrument
          while living outdoors: freeze–thaw cycles, wind exposure, limited access for repairs,
          and strict requirements on sampling integrity.
        </p>
        <p>
          I focused on design choices that would survive real field conditions and still be
          maintainable: robust mounting, sensible cable/tube routing, serviceable subassemblies,
          and clear documentation. The comparisons below show “design intent” versus the
          as-built hardware installed in the container lab and at the site.
        </p>
      </article>

      {/* Design -> Build comparisons */}
      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 dark:text-zinc-300">
          Design → Build comparisons
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          A few snapshots that highlight the path from CAD and layout planning to fabricated
          components and installed hardware.
        </p>

        <div className="mt-6 space-y-6">
          <Pair
            title="Seal assembly"
            subtitle="Condensation control and serviceability at the inlet interface"
            leftLabel="Design (CAD)"
            leftSrc="/photos/seal-cad.jpg"
            rightLabel="Built (installed)"
            rightSrc="/photos/seal-built.jpg"
            caption="Designed the seal interface to prevent moisture ingress and to be easy to service in the field (glove-friendly fasteners, accessible mating surfaces, and clear assembly order)."
          />

          <Pair
            title="Inlet inside the container"
            subtitle="Routing, accessibility, and minimizing sampling artifacts"
            leftLabel="Design (layout / CAD)"
            leftSrc="/photos/inlet-cad.jpg"
            rightLabel="Built (as-installed)"
            rightSrc="/photos/inlet-built.jpg"
            caption="Planned routing and mounting inside the container to keep lines short, reduce sharp bends, and preserve access for maintenance while keeping heaters and insulation organized."
          />

          <Pair
            title="Lab equipment layout"
            subtitle="Instrument placement, mounting, and cable/line management"
            leftLabel="Design (floorplan / layout)"
            leftSrc="/photos/layout-cad.jpg"
            rightLabel="Built (as-built)"
            rightSrc="/photos/layout-built.jpg"
            caption="Converted an instrument wish-list into a workable layout: mounting strategy, service clearances, airflow considerations, and practical cable/line routing for long-term reliability."
          />
        </div>
      </section>

      {/* Extra images (optional) */}
      <section className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 dark:text-zinc-300">
          Additional photos
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
            <Image
              src="/photos/feature-1.jpg"
              alt="Inlet assembly"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
            <Image
              src="/photos/feature-2.jpg"
              alt="Container lab interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
            <Image
              src="/photos/feature-3.jpg"
              alt="Field deployment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-800 dark:text-zinc-300">
          References & context
        </h2>
        <p className="mt-2 text-sm text-zinc-900 dark:text-zinc-100">
          This system supported atmospheric field campaigns focused on aerosols and cloud
          microphysics in the Wasatch Mountains and contributed to ongoing research into
          dust, ice-nucleating particles, and regional air quality.
        </p>
      </section>
    </main>
  );
}

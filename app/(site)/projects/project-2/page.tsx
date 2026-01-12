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
      {/* IMPORTANT: keep text visible even if your dark mode is forcing black */}
      <div className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
        {children}
      </div>
    </div>
  );
}

export default function Project2Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        (Thesis) Implementing Playa Dust as Sources for Particulate Chloride in GEOS-Chem
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        University of Utah • Atmospheric chemistry modeling • Emissions + CTM development • Evaluation against field observations
      </p>

      {/* Hero */}
      <div className="mt-6">
        <ImageBlock
          src="/photos/geoschem-hero.jpg"
          alt="GEOS-Chem modeling of playa dust and chloride chemistry"
          label="Placeholder: Hero image (GEOS-Chem / dust / map / figure montage)"
          hoverText="First implementation of inland playa dust as a particulate chloride source in GEOS-Chem to explore impacts on ClNO₂, N₂O₅, O₃, and PM chemistry."
          aspect="16/9"
        />
      </div>

      {/* Snapshot */}
      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        <Card title="Project goal">
          Build the first GEOS-Chem framework that treats saline playa dust as an inland
          particulate chloride (pCl⁻) source, enabling heterogeneous chemistry that can
          form nitryl chloride (ClNO₂) and alter oxidant budgets and air quality.
        </Card>

        <Card title="Impact">
          As saline lakes shrink, chloride-rich lakebeds are exposed and emit dust.
          Laboratory studies show playa dust can efficiently produce ClNO₂ when mixed with
          urban NOₓ pollution. Large-scale atmospheric impacts remain poorly constrained—this work
          built the modeling infrastructure to quantify them.
        </Card>

        <Card title="My role">
          End-to-end developer of the workflow: playa mapping → dust emissions modeling →
          GEOS-Chem/HEMCO integration → new tracers + chemistry parameterizations →
          evaluation against NACHTT 2011 observations.
        </Card>

        <Card title="Project scope">
          Western U.S. playa surface mapping, hourly emissions modeling, implementation of new
          dust and chloride tracers, and paired base vs. modified GEOS-Chem simulations for
          the NACHTT 2011 period with diurnal analysis.
        </Card>
      </section>

      <Divider />

      {/* Contributions */}
      <section>
        <Kicker>What I built</Kicker>
        <H2>Core Contributions</H2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          A complete modeling pipeline that adds inland playa dust as a new chloride-bearing aerosol
          class in GEOS-Chem—something not represented in the base model.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Card title="1) Playa surface map (SSURGO → mask → regrid)">
            <ul className="list-disc space-y-1 pl-4">
              <li>Retrieved U.S. soil electrical conductivity from SSURGO.</li>
              <li>Gridded the data and masked high-conductivity regions to identify saline playas.</li>
              <li>Regridded the playa mask to the emissions model resolution for downstream use.</li>
            </ul>
          </Card>

          <Card title="2) Playa dust emissions (FENGSHA + MERRA-2)">
            <ul className="list-disc space-y-1 pl-4">
              <li>Computed hourly playa dust fluxes over the western U.S. using FENGSHA.</li>
              <li>Used MERRA-2 meteorology to match the GEOS-Chem driving fields.</li>
              <li>Regridded emissions to GEOS-Chem offline dust resolution for HEMCO ingestion.</li>
            </ul>
          </Card>

          <Card title="3) GEOS-Chem integration (HEMCO + new tracers)">
            <ul className="list-disc space-y-1 pl-4">
              <li>Introduced playa dust tracers (PLYA1–4) and playa chloride tracers (PLYACL1–4).</li>
              <li>Distributed total emissions into GEOS-Chem dust size bins for consistency.</li>
              <li>Ensured co-location with base dust to reuse aerosol physical properties (surface area, etc.).</li>
            </ul>
          </Card>

          <Card title="4) Chemistry implementation (N₂O₅ uptake → ClNO₂)">
            <ul className="list-disc space-y-1 pl-4">
              <li>Enabled heterogeneous N₂O₅ uptake on playa chloride aerosols to produce ClNO₂.</li>
              <li>Partitioned playa chloride across the sub-bin framework used by GEOS-Chem chemistry.</li>
              <li>Applied lab-derived parameterizations with humidity-dependent branching behavior.</li>
            </ul>
          </Card>

          <Card title="5) Evaluation (base vs modified + NACHTT 2011)">
            <ul className="list-disc space-y-1 pl-4">
              <li>Ran paired GEOS-Chem simulations (base and playa-enabled) for NACHTT 2011.</li>
              <li>Compared modeled ClNO₂ and N₂O₅ to observations in the BAO tower grid cell.</li>
              <li>Separated daytime vs nighttime behavior to capture diurnal chemistry sensitivity.</li>
            </ul>
          </Card>

          <Card title="6) Outcomes of the first-pass implementation">
            <ul className="list-disc space-y-1 pl-4">
              <li>Showed playa dust can strongly enhance inland ClNO₂ and reduce N₂O₅ where introduced.</li>
              <li>Base model substantially underpredicted inland ClNO₂; playa-enabled chemistry increased it.</li>
              <li>Using upper-end parameters can overpredict, highlighting the need for improved constraints.</li>
            </ul>
          </Card>
        </div>
      </section>

      <Divider />

      {/* Proof of Work (visuals) */}
      <section>
        <Kicker>Proof of work</Kicker>
        <H2>Maps, fluxes, and model impacts</H2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          Replace these placeholders with figures/GIFs that quickly communicate the workflow and results:
          playa identification, emissions differences, and chemistry impacts.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ImageBlock
            src="/photos/PROJECT2-playa-mask.png"
            alt="Playa mask derived from SSURGO conductivity"
            label="Placeholder: Playa mask (conductivity → threshold → mask → regrid)"
            hoverText="Playa mapping: SSURGO soil conductivity gridded and masked to identify saline playa surfaces used as dust sources."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/PROJECT2-emissions-compare.png"
            alt="FENGSHA vs GEOS-Chem dust emissions"
            label="Placeholder: Emissions comparison (FENGSHA playa vs base GEOS-Chem dust)"
            hoverText="Emissions modeling: FENGSHA-derived playa fluxes compared to GEOS-Chem base dust inventory to show missing western sources."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/PROJECT2-clno2-night.png"
            alt="Nighttime ClNO2 difference map"
            label="Placeholder: Nighttime ΔClNO₂ (modified − base)"
            hoverText="Chemistry impact: nighttime ClNO₂ enhancements across the intermountain west where playa chloride chemistry is enabled."
            aspect="4/3"
          />

          <ImageBlock
            src="/photos/PROJECT2-diurnal.gif"
            alt="Diurnal cycle time series or animation"
            label="Placeholder GIF: diurnal cycles (N₂O₅ + ClNO₂) or model vs NACHTT"
            hoverText="Evaluation: time series/GIF showing base vs modified diurnal patterns and comparison to NACHTT observations."
            aspect="4/3"
          />
        </div>
      </section>

      <Divider />

      {/* Skills / Tools */}
      <section className="grid gap-5 sm:grid-cols-2">
        <Card title="Skills demonstrated">
          <ul className="list-disc space-y-1 pl-4">
            <li>Atmospheric chemistry reasoning (halogen/heterogeneous processes)</li>
            <li>Emissions modeling (dust flux parameterization + domain setup)</li>
            <li>GEOS-Chem development (new tracers, configuration, evaluation workflows)</li>
            <li>Data engineering (NetCDF formatting, regridding, COARDS conventions)</li>
            <li>Scientific validation (base vs modified, observation comparison, diurnal analysis)</li>
          </ul>
        </Card>

        <Card title="Tools">
          <ul className="list-disc space-y-1 pl-4">
            <li>GEOS-Chem + HEMCO</li>
            <li>FENGSHA dust emission model</li>
            <li>MERRA-2 meteorology</li>
            <li>Python (analysis, preprocessing, plotting)</li>
            <li>NetCDF tooling + HPC workflows</li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* Project Description */}
      <section className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-start">
        <div>
          <Kicker>Project description</Kicker>
          <H2>End-to-end modeling workflow</H2>

          <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            This thesis addressed a major limitation in inland air-quality modeling: while GEOS-Chem
            supports sea-salt chloride chemistry, it does not represent chloride carried by mineral dust
            emitted from saline playas. To close that gap, I derived a playa surface inventory using
            SSURGO soil conductivity as a proxy for salt-rich lakebed sediments, then modeled hourly
            playa dust emissions using FENGSHA driven by MERRA-2 meteorology to match GEOS-Chem forcing.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            I integrated the emissions into GEOS-Chem via HEMCO using new tracers for playa dust and
            playa particulate chloride. I then implemented heterogeneous N₂O₅ uptake and ClNO₂ production
            on playa chloride aerosols using laboratory-derived parameterizations with humidity-dependent
            branching. Paired base and modified simulations were evaluated against the NACHTT 2011 field
            campaign, emphasizing nighttime chemistry where ClNO₂ production is strongest.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            The modified model produced strong inland ClNO₂ enhancements and corresponding N₂O₅ depletion
            in regions influenced by playa dust, demonstrating that saline lakebeds are a plausible driver
            of inland halogen chemistry. The results also highlighted the sensitivity of outcomes to
            emission magnitudes and chemical parameter choices—pointing directly to what needs refinement
            in follow-on work.
          </p>
        </div>

        <ImageBlock
          src="/photos/PROJECT2-workflow.png"
          alt="Workflow diagram placeholder"
          label="Placeholder: workflow diagram (map → emissions → HEMCO → tracers → chemistry → evaluation)"
          hoverText="One-slide summary: mapping → emissions → model integration → chemistry → evaluation."
          aspect="4/3"
        />
      </section>
    </main>
  );
}

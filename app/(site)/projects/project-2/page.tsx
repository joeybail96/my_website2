import Image from "next/image";

/* ------------------------ UI Helpers ------------------------ */

function Divider() {
  return <div className="my-12 h-px w-full bg-zinc-200 dark:bg-zinc-800" />;
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
    <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
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
  border = "black",
}: {
  src: string;
  alt: string;
  label?: string;
  hoverText?: string;
  aspect?: "16/9" | "4/3" | "5/4" | "3952/905" | "2186/1191" | "3771/1902";
  border?: "black" | "none";
}) {
  const aspectClass =
    aspect === "4/3"
      ? "aspect-[4/3]"
      : aspect === "5/4"
      ? "aspect-[5/4]"
      : aspect === "3952/905"
      ? "aspect-[3952/905]"
      : aspect === "2186/1191"
      ? "aspect-[2186/1191]"
      : aspect === "3771/1902"
      ? "aspect-[3771/1902]"
      : "aspect-[16/9]";

  const borderClass = border === "none" ? "border-transparent" : "border-black";

  const isUrl = !!label && /^https?:\/\//i.test(label);

  return (
    <figure className="space-y-2">
      <div
        className={`group relative w-full overflow-hidden rounded-xl border ${borderClass} bg-zinc-200 dark:bg-zinc-800 ${aspectClass}`}
        tabIndex={0}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover" // no hover/focus zoom
          sizes="(min-width: 1024px) 800px, 100vw"
          unoptimized={src.endsWith(".gif")}
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
        <figcaption className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
          {isUrl ? (
            <a
              href={label}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-blue-600"
            >
              Source: Salt Lake Tribune
            </a>
          ) : (
            label
          )}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ------------------------ Page ------------------------ */

export default function Project2Page() {
  return (
    <div className="flex justify-center bg-transparent px-3 py-10">
      <main className="w-full max-w-4xl rounded-2xl border border-black bg-white/80 p-6 shadow-sm backdrop-blur-md dark:bg-zinc-950/50 sm:p-10">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            (Thesis) Implementing Playa Dust as Sources for Particulate Chloride
            in GEOS-Chem
          </h1>
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            University of Utah • Atmospheric chemistry modeling • Emissions + CTM
            development • Evaluation against field observations
          </p>
        </header>

        {/* Hero */}
        <section className="mt-8">
          <ImageBlock
            src="/photos/geoschem-profile.jpg"
            alt="GEOS-Chem modeling of playa dust and chloride chemistry"
            label="Photo of Great Salt Lake playas off causeway to Antelope Island (taken August 2025)"
            aspect="16/9"
          />
        </section>

        {/* Summary */}
        <section className="mt-12 space-y-6">
          <div className="rounded-2xl border border-black bg-white/75 p-6 shadow-sm backdrop-blur dark:bg-zinc-950/60">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
              Summary
            </p>

            <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
              This thesis addressed a missing inland chlorine pathway in chemical
              transport modeling: GEOS-Chem represents sea-salt chloride chemistry,
              but does not represent chloride carried by mineral dust emitted from
              saline playas. As saline lakes shrink and lakebeds are exposed, this
              chloride-rich dust can mix with NOₓ pollution and drive heterogeneous
              chemistry that forms ClNO₂ and alters oxidant budgets.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
              I built an end-to-end pipeline to represent playa dust as a new
              chloride-bearing aerosol class: mapping saline surfaces from SSURGO
              conductivity, modeling hourly emissions using FENGSHA driven by
              MERRA-2 meteorology, integrating new tracers through HEMCO, and
              enabling N₂O₅ uptake and ClNO₂ formation on playa particulate
              chloride. I evaluated paired base vs. modified simulations during
              NACHTT 2011, focusing on nighttime chemistry where ClNO₂ production
              is strongest.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
              The modified model produced strong inland ClNO₂ enhancements and
              corresponding N₂O₅ depletion in regions influenced by playa dust,
              demonstrating that saline lakebeds can be a meaningful driver of
              inland halogen chemistry. The work also highlighted outcome
              sensitivity to emissions and parameter choices—pinpointing what
              needs tighter constraints in follow-on studies.
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                Skills Required &amp; Applied
              </p>

              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "Atmospheric chemistry reasoning (heterogeneous halogen processes)",
                  "Emissions modeling (dust flux parameterization + domain setup)",
                  "GEOS-Chem development (tracers, HEMCO config, chemistry hooks)",
                  "Data engineering (NetCDF formatting, regridding, conventions)",
                  "Scientific evaluation (base vs. modified, obs comparison, diurnal)",
                  "Python analysis (preprocessing, plotting, QA/QC)",
                  "HPC workflows (batch runs, storage, reproducibility)",
                  "Model–measurement comparison (NACHTT 2011 focus)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-zinc-900 dark:text-zinc-100"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-zinc-900 dark:bg-zinc-100" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        {/* Lakes shrinking */}
        <section className="space-y-3">
          <Kicker>Motivation</Kicker>
          <H2>Saline lakes are shrinking, exposing new dust-emitting surfaces</H2>
          <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            Across the western U.S., saline lakes are shrinking as drought and
            water diversion reduce inflows. As lake levels drop, large areas of
            previously submerged lakebed become exposed. These newly exposed
            surfaces can become significant dust sources, with consequences for
            ecosystem health, nearby communities, and regional air quality.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/shrinking_gsl.jpg"
              alt="Shrunken Great Salt Lake extent"
              label="Placeholder: Shrunken Great Salt Lake (satellite / before-after / shoreline retreat)"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/plot_gsl.jpg"
              alt="Plot of declining Great Salt Lake levels over time"
              label="Placeholder: declining lake levels (time series)"
              aspect="2186/1191"
              border="none" // <- NO border
            />
          </div>
        </section>

        <Divider />

        {/* Dust emissions */}
        <section className="space-y-3">
          <Kicker>Health &amp; exposure</Kicker>
          <H2>Shrinking saline lakes generate unhealthy dust</H2>
          <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            When strong winds blow across exposed lakebeds, they can loft fine
            particulate matter that travels downwind into population centers. This
            dust can contribute to elevated PM concentrations and respiratory
            health risks, especially during frequent wind events.
          </p>

          <div className="mt-6">
            <ImageBlock
              src="/photos/owens.gif"
              alt="Dust being blown from exposed playa"
              label="https://www.sltrib.com/news/environment/2022/10/10/how-owens-lake-became-disaster/"
              aspect="16/9"
            />
          </div>
        </section>

        <Divider />

        {/* Chloride chemistry context */}
        <section className="space-y-3">
          <Kicker>Chemistry beyond emissions</Kicker>
          <H2>Saline dust carries chloride that can amplify air-quality impacts</H2>
          <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            Saline lake dust can contain substantial particulate chloride. Chloride
            is known to participate in heterogeneous chemistry that interacts with
            NOₓ-rich pollution typical of dense communities—creating pathways that
            can worsen air quality beyond the direct effects of dust emissions.
          </p>

          <div className="mt-6">
            <ImageBlock
              src="/photos/chem_mechanism.jpg"
              alt="Illustration or figure showing particulate chloride chemistry interacting with NOx-rich pollution"
              label="Placeholder: chloride + NOₓ heterogeneous chemistry context"
              aspect="3771/1902"
              border="none" // <- NO border
            />
          </div>
        </section>

        <Divider />

        {/* GEOS-Chem + additions */}
        <section className="space-y-3">
          <Kicker>Model development</Kicker>
          <H2>Using GEOS-Chem to represent dust transport and halogen chemistry</H2>
          <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            GEOS-Chem is a global chemical transport model (CTM) used to simulate
            atmospheric chemistry and the transport of aerosols and trace gases.
            To better represent inland saline dust, I added functionality that
            improves dust transport from dried saline lake regions and introduced
            an inventory for particulate chloride from particularly saline
            surfaces. I then edited GEOS-Chem so this new chloride-bearing dust
            participates in appropriate halogen reactions in the model.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/PROJECT2-dust-before.gif"
              alt="Dust emissions visualization before changes"
              label="Placeholder GIF: dust emissions before model updates"
              hoverText="Baseline emissions/transport representation prior to playa-specific updates."
              aspect="16/9"
            />
            <ImageBlock
              src="/photos/PROJECT2-dust-after.gif"
              alt="Dust emissions visualization after changes"
              label="Placeholder GIF: dust emissions after model updates"
              hoverText="After: improved saline lake dust representation + particulate chloride inventory."
              aspect="16/9"
            />
          </div>
        </section>

        <Divider />

        {/* Chemistry summary + schematic */}
        <section className="space-y-3">
          <Kicker>Chemistry implementation</Kicker>
          <H2>Heterogeneous N₂O₅ uptake and ClNO₂ formation on particulate chloride</H2>
          <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            In the updated model, particulate chloride associated with saline dust
            provides a reactive surface for nighttime chemistry. The primary
            pathway implemented enables heterogeneous N₂O₅ uptake on chloride-bearing
            aerosols with branching that produces ClNO₂. This shifts nocturnal
            nitrogen oxide reservoirs and can alter oxidant budgets after sunrise
            when ClNO₂ photolyzes.
          </p>

          <div className="mt-6">
            <ImageBlock
              src="/photos/PROJECT2-chemistry-graphic.png"
              alt="Graphic detailing the implemented halogen chemistry"
              label="Placeholder: chemistry schematic (N₂O₅ uptake → ClNO₂; downstream radicals)"
              hoverText="Schematic of the implemented chemistry and its link to nocturnal reservoirs and morning radical production."
              aspect="16/9"
            />
          </div>
        </section>

        <Divider />

        {/* N2O5 panels */}
        <section className="space-y-3">
          <Kicker>Results</Kicker>
          <H2>N₂O₅: before, after, and difference</H2>
          <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            These panels summarize how the updated saline dust and chloride
            chemistry impacted modeled N₂O₅.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <ImageBlock
              src="/photos/PROJECT2-n2o5-before.png"
              alt="N2O5 before changes map"
              label="N₂O₅ (before)"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/PROJECT2-n2o5-after.png"
              alt="N2O5 after changes map"
              label="N₂O₅ (after)"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/PROJECT2-n2o5-diff.png"
              alt="N2O5 difference map (after - before)"
              label="ΔN₂O₅ (after − before)"
              aspect="4/3"
            />
          </div>
        </section>

        <Divider />

        {/* ClNO2 panels */}
        <section className="space-y-3">
          <Kicker>Results</Kicker>
          <H2>ClNO₂: before, after, and difference</H2>
          <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            These panels summarize how the updated saline dust and chloride
            chemistry impacted modeled ClNO₂.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <ImageBlock
              src="/photos/PROJECT2-clno2-before.png"
              alt="ClNO2 before changes map"
              label="ClNO₂ (before)"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/PROJECT2-clno2-after.png"
              alt="ClNO2 after changes map"
              label="ClNO₂ (after)"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/PROJECT2-clno2-diff.png"
              alt="ClNO2 difference map (after - before)"
              label="ΔClNO₂ (after − before)"
              aspect="4/3"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

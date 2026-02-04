"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

/* ------------------------ UI Helpers ------------------------ */

function Divider() {
  return <div className="my-12 h-px w-full bg-zinc-200/80" />;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
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

function withCacheBuster(src: string, token: string | number) {
  // cache-bust to force both GIFs to start from frame 0 at the same time
  const joiner = src.includes("?") ? "&" : "?";
  return `${src}${joiner}sync=${encodeURIComponent(String(token))}`;
}

/**
 * Ensures two GIFs "start" together by:
 * 1) preloading both sources
 * 2) once both are ready, applying the SAME cache-busting token to both src values
 *    (forces a synchronized reload/start from frame 0)
 */
function SyncedGifPair({
  left,
  right,
  className = "mt-6 grid gap-6 sm:grid-cols-2",
}: {
  left: Omit<Parameters<typeof ImageBlock>[0], "syncToken">;
  right: Omit<Parameters<typeof ImageBlock>[0], "syncToken">;
  className?: string;
}) {
  const [syncToken, setSyncToken] = useState<number>(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function preload(src: string) {
      const img = new window.Image();
      img.decoding = "async";
      img.src = src;

      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });

      // @ts-ignore
      if (typeof img.decode === "function") {
        try {
          // @ts-ignore
          await img.decode();
        } catch {
          // ignore
        }
      }
    }

    (async () => {
      setReady(false);

      await Promise.all([preload(left.src), preload(right.src)]);

      if (cancelled) return;

      setSyncToken(Date.now());
      setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [left.src, right.src]);

  return (
    <div className={className} aria-busy={!ready}>
      <ImageBlock {...left} syncToken={syncToken} />
      <ImageBlock {...right} syncToken={syncToken} />
    </div>
  );
}

function ImageBlock({
  src,
  alt,
  label,
  hoverText,
  aspect = "16/9",
  border = "black",
  hiRes = false,
  zoom = 1,
  priority = false,
  syncToken,
}: {
  src: string;
  alt: string;
  label?: React.ReactNode; // ✅ allow JSX (links) in labels
  hoverText?: string;
  aspect?:
    | "16/9"
    | "4/3"
    | "5/4"
    | "2186/1191"
    | "3771/1902"
    | "1020/660"
    | "846/505"
    | "836/475"
    | "1665/1089"
    | "1690/1060";
  border?: "black" | "none";
  hiRes?: boolean;
  zoom?: number;
  priority?: boolean;
  syncToken?: string | number;
}) {
  const aspectClass =
    aspect === "4/3"
      ? "aspect-[4/3]"
      : aspect === "5/4"
      ? "aspect-[5/4]"
      : aspect === "2186/1191"
      ? "aspect-[2186/1191]"
      : aspect === "3771/1902"
      ? "aspect-[3771/1902]"
      : aspect === "1020/660"
      ? "aspect-[1020/660]"
      : aspect === "846/505"
      ? "aspect-[846/505]"
      : aspect === "836/475"
      ? "aspect-[836/475]"
      : aspect === "1665/1089"
      ? "aspect-[1665/1089]"
      : aspect === "1690/1060"
      ? "aspect-[1690/1060]"
      : "aspect-[16/9]";

  // ✅ FORCE black borders on ALL images (ignores border="none" calls)
  const borderClass = "border-black";

  const isGif = src.toLowerCase().endsWith(".gif");
  const isOwensGif = src === "/photos/owens.gif";

  const safeZoom = Math.min(Math.max(zoom, 1), 1.35);

  const effectiveSrc = useMemo(() => {
    if (!isGif) return src;
    if (syncToken === undefined || syncToken === null || syncToken === "")
      return src;
    return withCacheBuster(src, syncToken);
  }, [isGif, src, syncToken]);

  return (
    <figure className="space-y-2">
      <div
        className={`group relative w-full overflow-hidden rounded-xl border ${borderClass} bg-zinc-200 ${aspectClass}`}
        tabIndex={0}
      >
        {isGif ? (
          <img
            src={effectiveSrc}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            style={{
              transform: safeZoom > 1 ? `scale(${safeZoom})` : undefined,
              transformOrigin: "center",
            }}
          />
        ) : (
          <Image
            src={effectiveSrc}
            alt={alt}
            fill
            className="object-cover"
            quality={hiRes ? 100 : 75}
            sizes={
              hiRes
                ? "(min-width: 1024px) 1200px, 100vw"
                : "(min-width: 1024px) 800px, 100vw"
            }
            priority={priority}
            style={{
              transform: safeZoom > 1 ? `scale(${safeZoom})` : undefined,
              transformOrigin: "center",
            }}
          />
        )}

        {hoverText ? (
          <div className="pointer-events-none absolute inset-0 flex items-end bg-black/0 p-4 opacity-0 transition duration-200 group-hover:bg-black/55 group-hover:opacity-100 group-focus:bg-black/55 group-focus:opacity-100">
            <p className="text-sm font-medium leading-snug text-white">
              {hoverText}
            </p>
          </div>
        ) : null}
      </div>

      {/* ✅ Only Owens GIF shows the Tribune/GBUAPCD source caption */}
      {label ? (
        <figcaption className="text-xs font-medium text-zinc-700">
          {isOwensGif ? (
            <>
              <span>
                Strong winds blowing dust from exposed playa surfaces surrounding
                the desiccated Owens Lake in California.
              </span>
              <span className="mt-1 block">
                Source:&nbsp;
                <a
                  href="https://www.sltrib.com/news/environment/2022/10/10/how-owens-lake-became-disaster/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-blue-600"
                >
                  Salt Lake Tribune
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://www.gbuapcd.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-blue-600"
                >
                  Great Basin Unified Air Pollution Control District
                </a>
              </span>
            </>
          ) : (
            <span>{label}</span>
          )}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ------------------------ Page ------------------------ */

export default function Project2Page() {
  const SUN = "☀️";

  return (
    <div className="flex justify-center bg-transparent px-3 py-10">
      {/* Match Project1: lighter panel look (no dark-mode panel styling) */}
      <main className="w-full max-w-4xl rounded-2xl border border-black bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-10">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            (Thesis) Implementing Playa Dust as Sources for Particulate Chloride
            in GEOS-Chem
          </h1>
          <p className="text-sm font-medium text-zinc-700">
            University of Utah • Atmospheric Chemistry • GEOS-Chem • Fortran Coding
          </p>
        </header>

        {/* Hero */}
        <section className="mt-8">
          <ImageBlock
            src="/photos/geoschem-profile.jpg"
            alt="GEOS-Chem modeling of playa dust and chloride chemistry"
            label="Photo of Great Salt Lake playas off causeway to Antelope Island (taken August 2025)"
            aspect="16/9"
            hiRes
            priority
          />
        </section>

        {/* Summary */}
        <section className="mt-12 space-y-6">
          {/* Match Project1: lighter “panel” */}
          <div className="rounded-2xl border border-black bg-white/75 p-6 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
              Summary
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              This thesis addressed a missing process in how large-scale air quality
              models represent chlorine chemistry over land. While these models
              already capture chlorine reactions from sea spray, they typically do
              not account for chloride carried by dust emitted from drying saline
              lakebeds. As saline lakes shrink across the western United States,
              exposed playas become sources of chloride-rich dust that can mix with
              pollution and drive harmful secondary chemical reactions. These
              effects have been observed in field measurements but were not
              previously represented in the model.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              I designed and implemented a modeling framework to add this missing
              pathway. This involved mapping playa surfaces across the United
              States, calculating dust emissions from these surfaces, integrating
              these emissions as a new chloride inventory, and enabling key
              chemical reactions within the model’s chemistry schemes. Together,
              these developments added a new capability to begin understanding how
              shrinking saline lakes affect air quality and how their chemical
              impacts may evolve in the future.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              I evaluated the impact of this new capability across the United States
              during periods of elevated dust activity over western playa regions
              and compared model behavior to existing observational and modeling
              case studies. The results show that drying saline lakebeds can
              meaningfully worsen air quality through secondary chemistry and that
              their influence depends on emissions and model parameters. This
              thesis is currently being prepared for publication and serves as the
              foundation for multiple follow-on studies.
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Skills Required &amp; Applied
              </p>

              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "Atmospheric chemistry",
                  "Dust emission/saltation theory",
                  "Modeling (GEOS-Chem, FENGSHA, STILT, HEMCO)",
                  "Large data (Vector/Raster Files, NetCDF, xarray)",
                  "Scientific/model evaluation",
                  "Coding (Fortran, Python, R, Batch, Linux)",
                  "HPC workflows",
                  "Communication (conferences, poster, presentations)",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-black">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-black" />
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
          <Kicker>Background</Kicker>
          <H2>Saline lakes are shrinking, exposing new dust-emitting surfaces</H2>
          <p className="text-sm leading-relaxed text-black">
            Across the western U.S., major saline lakes are shrinking due to a combination of
            drought and upstream water use. As lake levels fall, large areas of lakebed are
            exposed. These dry, salty surfaces can become major dust sources—affecting
            ecosystems, nearby communities, and regional air quality.
          </p>

          <p className="text-sm leading-relaxed text-black">
            Salt Lake City’s namesake, the Great Salt Lake, has been influenced by human
            water diversions since the arrival of settlers in the mid-1800s, when its inlet
            rivers began to be redirected for agriculture and development. Although the lake
            naturally fluctuates, long-term declines in surface area and volume are strongly
            linked to these diversions: today, roughly 40–50% of the river flow that would
            naturally reach the lake is diverted upstream. Maintaining lake levels is
            critical—the Great Salt Lake supports habitat for millions of migratory birds,
            influences regional weather (including lake-effect precipitation), and helps
            suppress dust from exposed lakebed that can degrade air quality along the
            Wasatch Front. As a result, the lake is estimated to be roughly 50% below the
            level it would reach if humans were not diverting water.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/shrinking_gsl.jpg"
              alt="Shrunken Great Salt Lake extent"
              label={
                <>
                  Satellite view of how much the Great Salt Lake has desiccated since
                  humans began diverting inlet river systems. Image adapted from{" "}
                  <a
                    href="https://science.nasa.gov/earth/earth-observatory/the-great-shrinking-lake-150187/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-blue-600"
                  >
                    NASA Earth Observatory
                  </a>
                  .
                </>
              }
              aspect="4/3"
              hiRes
            />
            <ImageBlock
              src="/photos/plot_gsl.jpg"
              alt="Plot of declining Great Salt Lake levels over time"
              label={
                <>
                  Time series of the declining Great Salt Lake&apos;s levels compared to
                  predicted, natural levels. Image adapted from{" "}
                  <a
                    href="https://collections.lib.utah.edu/ark:/87278/s6qw8qhv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-blue-600"
                  >
                    University of Utah Collections
                  </a>
                  .
                </>
              }
              aspect="2186/1191"
              border="none"
              hiRes
            />
          </div>
        </section>

        <Divider />

        {/* Dust emissions */}
        <section className="space-y-3">
          <H2>Shrinking saline lakes generate unhealthy dust</H2>
          <p className="text-sm leading-relaxed text-black">
            When strong winds blow across exposed lakebeds, they can loft fine dust that
            travels downwind into population centers. Numerous studies have shown that
            these dust events are directly linked to increased respiratory illness, as
            high concentrations of fine particulate matter degrade air quality and stress
            the respiratory system.
          </p>

          <div className="mt-6">
            <ImageBlock
              src="/photos/owens.gif"
              alt="Dust being blown from exposed playa"
              label="https://www.sltrib.com/news/environment/2022/10/10/how-owens-lake-became-disaster/"
              aspect="16/9"
              hiRes
            />
          </div>
        </section>

        <Divider />

        {/* Chloride chemistry context */}
        <section className="space-y-3">
          <H2>How does playa dust alter atmospheric chemistry and air quality?</H2>

          <p className="text-sm leading-relaxed text-black">
            Despite evidence from field and laboratory studies that saline playa dust
            can be a significant source of atmospheric chloride, no global atmospheric chemistry
            model currently represents playa dust as a chloride source. As a result, the tools
            needed to simulate and understand the chemical and air-quality impacts of playa dust
            are largely absent from large-scale modeling frameworks. This gap limits our ability
            to quantify how observed playa dust emissions influence atmospheric chemistry,
            downwind air quality, and pollutant formation.
          </p>

          <p className="text-sm leading-relaxed text-black">
            Chloride in dust is important because it can actively influence atmospheric
            chemistry once it mixes with polluted air. In contrast to typical mineral dust emissions
            that mainly act as particles, particulate chloride can participate in chemical reactions that
            affect how nitrogen oxides and other pollutants behave. These reactions can enhance
            air-quality impacts beyond what would be expected from dust mass alone, particularly
            in regions influenced by urban and industrial emissions.
          </p>

          <p className="text-sm leading-relaxed text-black">
            One important pathway occurs at night, when nitrogen oxide pollution forms a
            temporary reservoir known as N₂O₅. When N₂O₅ encounters particles that contain
            chloride, chemical reactions within the particle can produce ClNO₂. After sunrise,
            ClNO₂ breaks apart in sunlight, releasing reactive chlorine that can drive additional
            chemical reactions downwind and further degrade air quality beyond the direct effects
            of dust alone.
          </p>

          <p className="text-sm leading-relaxed text-black">
            In the figure below, I illustrate the relevant chemical pathways linking
            chloride-rich dust to secondary atmospheric chemistry:
          </p>

          <div className="mt-6">
            <ImageBlock
              src="/photos/chem_mechanism.jpg"
              alt="Illustration or figure showing particulate chloride chemistry interacting with NOx-rich pollution"
              label="Graphic that depicts how playa dust can uptake common pollution species and generate negative effects on downwind air quality"
              aspect="3771/1902"
              border="none"
              hiRes
            />
          </div>
        </section>

        {/* UPDATED SECTION: simple numbered list, one column, no borders */}
        <section className="mt-10 space-y-3">
          <Kicker>Methods</Kicker>
          <H2>How I implemented playa dust & chloride chemistry into GEOS-Chem</H2>
          <p className="text-sm leading-relaxed text-black">
            GEOS-Chem is a global chemical transport model that simulates atmospheric chemistry
            and the transport of aerosols and trace gases. To implement playa dust as a source
            of inland particulate chloride within GEOS-Chem&apos;s framework and to model the associated chemistry, I followed
            the steps below:
          </p>

          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-black">
            <li>
              <strong>Mapped playa surfaces across the United States.</strong> I created a high-resolution
              playa mask from USDA soil and salinity survey data and formatted it into a gridded dataset.
            </li>

            <li>
              <strong>Built a playa dust emissions inventory.</strong> I modeled/calculated dust emissions from the gridded
              playa sources using meteorological reanalysis data and then formatted and integrated the gridded emission results
              for use in GEOS-Chem.
            </li>

            <li>
              <strong>Enabled chloride and halogen chemistry pathways.</strong> I linked emitted playa dust
              to NOx-related chemical pathways, allowing particulate chloride to participate in halogen
              chemistry relevant to regional air quality.
            </li>

            <li>
              <strong>Ran baseline and modified simulations and evaluated impacts.</strong> I compared dust
              and chemistry results between base and modified model runs and evaluated the models against available
              field measurements to assess model performance and the influence of playa dust on secondary
              chemistry.
            </li>
          </ol>
        </section>

        <Divider />

        {/* Step 1: High-res playa map */}
        <section className="space-y-3">
          <Kicker>Step 1 • Map Playas</Kicker>
          <H2>Mapping playas into a model-ready source mask</H2>

          <p className="text-sm leading-relaxed text-black">
            To identify where playa dust can be emitted, I first mapped the spatial
            distribution of playa surfaces across the United States using data from the
            SSURGO soil database. SSURGO provides high-resolution information on soil
            properties, including electrical conductivity.
          </p>

          <p className="text-sm leading-relaxed text-black">
            Because playa surfaces are typically salt-rich, they tend to exhibit elevated
            electrical conductivity. By organizing the SSURGO data into a uniform,
            high-resolution grid in QGIS and isolating regions with consistently high
            conductivity, I was able to distinguish playas from surrounding soil types and
            create a model-ready playa source mask.
          </p>

          {/* stacked (2x1), full-width */}
          <div className="mt-6 space-y-6">
            <ImageBlock
              src="/photos/ssurgo.jpg"
              alt="High-resolution map of U.S. playas derived from SSURGO electrical conductivity"
              label="High-resolution map of electrical conductivity over the United States"
              aspect="846/505"
              hiRes
              priority
              border="none"
            />

            <p className="text-sm leading-relaxed text-black">
              Once playa locations were identified, the next challenge was representing
              their dust emissions within GEOS-Chem. The model relies on precomputed,
              offline dust emission inventories, but its native dust sources and emission
              framework are too simplified and spatially inaccurate to realistically
              represent dust emitted from inland playa surfaces.
            </p>

            <p className="text-sm leading-relaxed text-black">
              To overcome this limitation, I generated a new offline dust emission
              inventory using FENGSHA, a more physically based dust emission model. I
              constrained FENGSHA to emit dust only from grid boxes identified as playas,
              then formatted and integrated this inventory into GEOS-Chem’s existing dust
              framework. This approach allowed playa dust to be transported and deposited
              using standard model processes, while also enabling the playa dust to
              participate in chemical reaction pathways rather than being treated as
              chemically benign.
            </p>

            <ImageBlock
              src="/photos/fengsha.jpg"
              alt="Playa dust source regions used within the FENGSHA dust emission framework"
              label="Map of playa grid boxes used to constrain the FENGSHA model to calculate playa dust emissions, exclusively"
              aspect="836/475"
              hiRes
              priority
              border="none"
            />
          </div>
        </section>

        <Divider />

        {/* Step 2: Build Emission Inventory */}
        <section className="space-y-6">
          <Kicker>Step 2 • Build Emission Inventory</Kicker>
          <H2>Using GEOS-Chem to transport playa dust and ingest the inventory</H2>

          {/* ⬆️ two-column text row */}
          <div className="grid gap-6 md:grid-cols-2">
            <p className="text-sm leading-relaxed text-black">
              The left animation shows dust emissions from the base GEOS-Chem model during a
              period when playa dust was known to be elevated across the western United
              States due to strong westerly wind events over playa regions. Even under these
              favorable conditions, the model produces relatively weak dust emissions.
            </p>

            <p className="text-sm leading-relaxed text-black">
              The right animation shows dust emissions after integrating a playa-specific
              emission inventory generated using FENGSHA during the same period. Emissions
              are more widespread and better aligned with known playa source regions,
              resulting in substantially stronger and more realistic dust emission patterns.
            </p>
          </div>

          {/* ✅ synced GIF row */}
          <SyncedGifPair
            left={{
              src: "/photos/dst_daily_mass_map_20110215_20110315.gif",
              alt: "Dust emissions visualization before changes",
              label: "Baseline dust emission map",
              aspect: "1020/660",
              hiRes: true,
              zoom: 1.18,
              priority: true,
            }}
            right={{
              src: "/photos/dstmod_daily_mass_map_20110215_20110315.gif",
              alt: "Dust emissions visualization after changes",
              label: "Modified dust emission map (w/FENGSHA playa emissions)",
              aspect: "1020/660",
              hiRes: true,
              zoom: 1.18,
              priority: true,
            }}
          />
        </section>

        <Divider />

        {/* Step 3: Chemistry implementation */}
        <section className="space-y-3">
          <Kicker>Step 3 • Chemistry implementation</Kicker>
          <H2>Adding chemical reaction pathways for new playa dust species</H2>
          <p className="text-sm leading-relaxed text-black">
            With the dust emission scheme modified to include playa dust species, I enabled
            chemical pathways that allow the chloride content of playa dust to participate
            in atmospheric reactions. When playa dust is emitted or transported into a grid
            box that also contains dinitrogen pentoxide (N₂O₅), GEOS-Chem can produce nitryl
            chloride (ClNO₂) within that grid box.
          </p>

          <div className="mt-6">
            <p className="text-sm leading-relaxed text-black">
              Below is a concise reaction list illustrating nighttime NOₓ reservoir
              chemistry, heterogeneous N₂O₅ uptake on chloride-containing playa dust aerosols, and the
              subsequent photolysis (sunlight) reactions that releases reactive chlorine (ClNO₂).
            </p>

            {/* ✅ UPDATED: centered block + fixed label column so R1→R5 align vertically */}
            <div className="mt-4 flex justify-center">
              {/* ✅ black border around reaction panel */}
              <div className="w-full max-w-3xl rounded-xl border border-black bg-zinc-50 p-5">
                <div className="space-y-3">
                  {[
                    {
                      left: <>NO₂ + O₃</>,
                      right: <>NO₃ + O₂</>,
                      tag: "R1",
                    },
                    {
                      left: <>NO₂ + NO₃ + M</>,
                      right: <>N₂O₅ + M</>,
                      tag: "R2",
                    },
                    {
                      left: (
                        <>
                          N₂O₅ + Cl<sup>−</sup>
                          <sub>(aq)</sub>
                        </>
                      ),
                      right: <>φClNO₂ + (1 − φ)HNO₃</>,
                      tag: "R3",
                    },
                    {
                      left: (
                        <>
                          ClNO₂ + {SUN}
                        </>
                      ),
                      right: <>Cl + NO₂</>,
                      tag: "R4",
                    },
                    {
                      left: (
                        <>
                          NO₂ + {SUN}
                        </>
                      ),
                      right: <>NO + O₃</>,
                      tag: "R5",
                    },
                  ].map((r) => (
                    <div
                      key={r.tag}
                      className="grid grid-cols-[1fr_auto_1fr_auto] items-baseline gap-x-4"
                    >
                      <div className="text-right text-lg font-semibold text-black sm:text-xl">
                        {r.left}
                      </div>

                      {/* ✅ arrow column aligned vertically */}
                      <div className="px-3 text-center text-lg font-semibold text-black sm:text-xl">
                        →
                      </div>

                      <div className="text-left text-lg font-semibold text-black sm:text-xl">
                        {r.right}
                      </div>

                      {/* ✅ fixed-width tag column aligned vertically */}
                      <div className="w-14 text-right text-sm font-medium text-zinc-500">
                        ({r.tag})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Step 4: Run & Evaluate */}
        <section className="space-y-3">
          <Kicker>Step 4 • Run &amp; Evaluate</Kicker>
          <H2>Playa dust&apos;s impact on NOₓ chemistry</H2>
          <p className="text-sm leading-relaxed text-black">
            These maps show how my modifications to GEOS-Chem introduce a new loss pathway
            for N₂O₅ through reactions with playa dust. I evaluated the model during a
            period with elevated dust emissions, when playa dust was actively emitted from
            drying saline lakes. In these regions, playa dust reacts with N₂O₅ and removes
            it from the atmosphere, leading to slightly lower N₂O₅ concentrations downwind of playa
            source areas.
          </p>

          <p className="text-sm leading-relaxed text-black">
            With this loss mechanism established, it can be further refined alongside
            improved N₂O₅ representations. This provides a pathway toward more accurate
            treatment of playa dust emissions and N₂O₅ chemistry within GEOS-Chem.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/SpeciesConcVV_N2O5_US_night_MST_base_column.png"
              alt="N2O5 before changes map"
              label="Modeled N₂O₅ over CONUS without including playa dust chemistry"
              aspect="1665/1089"
              hiRes
              border="none"
            />
            <ImageBlock
              src="/photos/SpeciesConcVV_N2O5_US_night_MST_mod_column.png"
              alt="N2O5 after changes map"
              label="Modeled N₂O₅ over CONUS with playa dust & chemistry included"
              aspect="1665/1089"
              hiRes
              border="none"
            />
          </div>

          <div className="mt-6">
            <ImageBlock
              src="/photos/SpeciesConcVV_N2O5_US_night_MST_diff_column.png"
              alt="N2O5 difference map (after - before)"
              label="ΔN₂O₅ over CONUS between my modified model and the base GEOS-Chem model"
              aspect="1690/1060"
              hiRes
              border="none"
            />
          </div>
        </section>

        <Divider />

        {/* Step 4: ClNO2 panels */}
        <section className="space-y-3">
          <Kicker>Step 4 • Results</Kicker>
          <H2>ClNO₂: before, after, and difference</H2>
          <p className="text-sm leading-relaxed text-black">
            In contrast to the N₂O₅ trends, my modifications to GEOS-Chem introduce a new
            production pathway for ClNO₂. During the same modeling period, ClNO₂
            concentrations increase as expected as playa dust participates in this
            chemistry. With this production pathway established, playa dust emissions and
            their influence on ClNO₂ can be further refined, allowing the downwind air-quality
            impacts of ClNO₂ to be more clearly linked to dust from shrinking saline
            lakebeds.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/SpeciesConcVV_ClNO2_US_night_MST_base_column.png"
              alt="ClNO2 before changes map"
              label="Modeled ClNO₂ over CONUS without including playa dust chemistry"
              aspect="1665/1089"
              hiRes
              border="none"
            />
            <ImageBlock
              src="/photos/SpeciesConcVV_ClNO2_US_night_MST_mod_column.png"
              alt="ClNO2 after changes map"
              label="Modeled ClNO₂ over CONUS with playa dust & chemistry included"
              aspect="1665/1089"
              hiRes
              border="none"
            />
          </div>

          <div className="mt-6">
            <ImageBlock
              src="/photos/SpeciesConcVV_ClNO2_US_night_MST_diff_column.png"
              alt="ClNO2 difference map (after - before)"
              label="ΔClNO₂ over CONUS between my modified model and the base GEOS-Chem model"
              aspect="1690/1060"
              hiRes
              border="none"
            />
          </div>
        </section>

        <Divider />

        {/* ✅ NEW: Conclusion & Next Steps (inserted after Step 4 and before References) */}
        <section className="mt-10 space-y-3">
          <H2>Conclusions & Future Work</H2>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-black">
              This work establishes a new framework in GEOS-Chem for representing the
              secondary-chemistry impacts of shrinking saline lakes. By introducing playa
              dust emissions into the model and allowing chloride carried by these particles
              to participate in atmospheric chemistry, the model can now capture chemical
              pathways that were not previously represented.
            </p>

            <p className="text-sm leading-relaxed text-black">
              While particulate chloride has traditionally been represented in GEOS-Chem
              through sea-salt aerosols, this work extends that capability inland by explicitly
              representing chloride carried by dust emitted from drying saline lakebeds. This
              distinction is critical, as shrinking saline lakes emit dust directly into
              populated continental regions, where it can interact with pollution in ways
              that marine sources alone cannot capture.
            </p>

            <p className="text-sm leading-relaxed text-black">
              As saline lakes continue to decline due to climate change and water diversion,
              the secondary chemical impacts of playa dust are expected to become more
              important for regional air quality. This framework improves the ability to
              quantify these impacts, supporting more complete assessments of environmental
              and public-health consequences and providing scientific context for future
              research, water management, and air-quality policy decisions.
            </p>
          </div>
        </section>

        <Divider />

        <section className="mt-10 space-y-3">
          <Kicker>Sources</Kicker>
          <H2>References</H2>

          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black">
            <li>
              <span className="font-medium">Thesis (forthcoming publication):</span>{" "}
              <a
                href="https://scholar.google.com/citations?hl=en&user=jc_bJg4AAAAJ&view_op=list_works&authuser=1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                Will be published and linked to my Google Scholar profile
              </a>
            </li>

            <li>
              <span className="font-medium">
                Modified chemical transport model (my branch):
              </span>{" "}
              <a
                href="https://github.com/joeybail96/geos-chem/tree/FENGSHA_CLNO2"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                github.com/joeybail96/geos-chem/tree/FENGSHA_CLNO2
              </a>
            </li>

            <li>
              <span className="font-medium">
                FENGSHA dust model (adapted from D. Mallia):
              </span>{" "}
              <a
                href="https://github.com/joeybail96/FENGSHA_python"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                github.com/joeybail96/FENGSHA_python
              </a>
            </li>

            <li>
              <span className="font-medium">GEOS-Chem model:</span>{" "}
              <a
                href="https://geoschem.github.io/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                https://geoschem.github.io
              </a>
            </li>

            <li>
              <span className="font-medium">HART Lab (University of Utah):</span>{" "}
              <a
                href="https://atmos.utah.edu/hart-lab/home.php"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                https://atmos.utah.edu/hart-lab/home.php
              </a>
            </li>

            <li>
              <span className="font-medium">Haskins Lab:</span>{" "}
              <a
                href="https://www.jessicahaskinsphd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                https://www.jessicahaskinsphd.com
              </a>
            </li>

            <li>
              <span className="font-medium">SSURGO soil database:</span>{" "}
              <a
                href="https://www.nrcs.usda.gov/resources/data-and-reports/soil-survey-geographic-database-ssurgo"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-blue-600"
              >
                USDA NRCS Soil Survey Geographic Database (SSURGO)
              </a>
            </li>
          </ul>

          <p className="pt-2 text-xs text-zinc-600">
            Note: This is a concise, web-friendly reference list. Full citations will be
            included in the forthcoming thesis (currently under review) and associated
            journal articles.
          </p>
        </section>
      </main>
    </div>
  );
}

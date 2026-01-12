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

export default function ProjectMechThesisPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        (M.S. Thesis) Collagen Damage vs Overstretch in Cerebral Arteries
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        University of Utah • Biomechanics • Experimental mechanics • Tissue microstructure • Data analysis
      </p>

      {/* Hero */}
      <div className="mt-6">
        <ImageBlock
          src="/photos/ME-thesis-hero.jpg"
          alt="Middle cerebral artery biomechanics testing"
          label="Placeholder: Hero image (tester + vessel, or a montage of key figures)"
          hoverText="Comparative study of artery softening caused by quasi-static overstretch vs collagenase digestion, with collagen structure probed using collagen hybridizing peptides (CHP)."
          aspect="16/9"
        />
      </div>

      {/* Snapshot */}
      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        <Card title="Project goal">
          Determine how collagen contributes to <strong>softening damage</strong> in middle cerebral arteries (MCAs)
          by comparing two damage pathways: (1) quasi-static overstretch and (2) collagenase digestion that
          depletes collagen content.
        </Card>

        <Card title="Impact">
          Sub-failure vascular damage may play a role in traumatic brain injury outcomes.
          Understanding whether collagen damage mechanisms explain MCA softening helps bridge tissue
          microstructure and injury-scale mechanics.
        </Card>

        <Card title="My role">
          Led end-to-end experimental design and execution: specimen preparation, mechanical testing,
          collagen digestion protocols, CHP staining/imaging workflow, data processing, and analysis/interpretation.
        </Card>

        <Card title="Core question">
          If collagen dictates softening, do vessels softened by overstretch behave similarly to vessels softened
          by controlled collagen removal—and can collagen microstructural changes be detected using CHP?
        </Card>
      </section>

      <Divider />

      {/* Contributions */}
      <section>
        <Kicker>What I built</Kicker>
        <H2>Key Contributions</H2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          This thesis created a controlled comparison between mechanical damage and biochemical collagen depletion,
          using repeatable protocols and multiple softening metrics to isolate the role of collagen.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Card title="1) Two damage pathways, one comparison framework">
            <ul className="list-disc space-y-1 pl-4">
              <li>Designed overstretch protocol to induce softening at controlled stretch levels.</li>
              <li>Designed collagenase digestion protocol to partially deplete collagen without destroying specimen integrity.</li>
              <li>Built analysis to compare softening trends between both pathways (compared, not force-correlated).</li>
            </ul>
          </Card>

          <Card title="2) Custom mechanical testing workflow (ex situ MCA tester)">
            <ul className="list-disc space-y-1 pl-4">
              <li>Mounted cannulated MCA segments on opposing needles with sutures + cyanoacrylate.</li>
              <li>Applied microspheres for optical tracking / DIC-based strain measurements.</li>
              <li>Collected load, displacement, and pressure for repeated baseline + damage cycles.</li>
            </ul>
          </Card>

          <Card title="3) Collagen depletion methodology">
            <ul className="list-disc space-y-1 pl-4">
              <li>Optimized digestion conditions to induce measurable softening while maintaining mountability.</li>
              <li>Ran both pre-digested samples (before overstretch) and continuous digestion experiments.</li>
              <li>Accounted for practical issues like enzyme effectiveness changing with reuse.</li>
            </ul>
          </Card>

          <Card title="4) Quantification + microstructure probing">
            <ul className="list-disc space-y-1 pl-4">
              <li>Used a collagen quantification assay workflow to estimate digested collagen volume fractions.</li>
              <li>Applied CHP staining protocols to probe collagen denaturation (pre/post staining strategy).</li>
              <li>Produced confocal-ready sample prep for imaging and comparison to controls.</li>
            </ul>
          </Card>

          <Card title="5) Softening metrics + signal processing">
            <ul className="list-disc space-y-1 pl-4">
              <li>Implemented filtering + conversion to stress–stretch space (including baseline normalization).</li>
              <li>Computed softening using multiple mechanical measures (e.g., energy/stiffness-style metrics).</li>
              <li>Compared groups using trend fits and statistical tests to evaluate differences.</li>
            </ul>
          </Card>

          <Card title="6) Interpretation that informs future experiments">
            <ul className="list-disc space-y-1 pl-4">
              <li>Identified similar softening “shape/trend” behavior across digestion and overstretch conditions.</li>
              <li>Highlighted measurement and microstructure-detection limitations (CHP sensitivity + binding constraints).</li>
              <li>Produced a reusable blueprint for future vascular damage studies.</li>
            </ul>
          </Card>
        </div>
      </section>

      <Divider />

      {/* Outcomes */}
      <section className="grid gap-5 sm:grid-cols-2">
        <Card title="Outcomes">
          <ul className="list-disc space-y-1 pl-4">
            <li>Established that digestion- and overstretch-induced softening can follow similar softening trends.</li>
            <li>Showed that collagen removal conditions that produce softening can be estimated via collagen quantification.</li>
            <li>Demonstrated challenges in using CHP as a direct readout of softening-level collagen damage in this setting.</li>
          </ul>
        </Card>

        <Card title="What an employer should take away">
          This project demonstrates experimental ownership: designing protocols, building repeatable measurements,
          executing wet-lab + mechanical testing, analyzing noisy physical data, and translating results into
          actionable next steps for research and instrumentation workflows.
        </Card>
      </section>

      <Divider />

      {/* Proof of Work */}
      <section>
        <Kicker>Proof of work</Kicker>
        <H2>Design → Experiment → Analysis</H2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          Drop in visuals that tell the story in 10 seconds: the tester, the protocols, and the key results plots.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ImageBlock
            src="/photos/ME-tester.jpg"
            alt="Custom MCA mechanical tester"
            label="Placeholder: Mechanical tester photo"
            hoverText="Custom ex situ tester used to mount and load cannulated MCA segments while recording load, pressure, and displacement."
            aspect="4/3"
          />
          <ImageBlock
            src="/photos/ME-mounting.jpg"
            alt="Vessel mounted to needles with microspheres"
            label="Placeholder: Mounting + microspheres close-up"
            hoverText="Specimen prep: sutures + cyanoacrylate fixation and microspheres for local strain measurements via imaging."
            aspect="4/3"
          />
          <ImageBlock
            src="/photos/ME-protocol-flowchart.png"
            alt="Protocol flowchart"
            label="Placeholder: Protocol flowchart (overstretch + CHP staining)"
            hoverText="Workflow figure: segmentation → prestain → digest/control → mechanical tests → post-stain → confocal imaging."
            aspect="4/3"
          />
          <ImageBlock
            src="/photos/ME-chp-mechanism.png"
            alt="CHP binding mechanism diagram"
            label="Placeholder: CHP mechanism diagram"
            hoverText="CHP binds to denatured collagen alpha chains to report microstructural damage via fluorescence."
            aspect="4/3"
          />
          <ImageBlock
            src="/photos/ME-softening-plots.png"
            alt="Softening trends plot"
            label="Placeholder: Softening trends (overstretch vs digestion)"
            hoverText="Core result: softening metrics plotted vs overstretch magnitude and vs digestion time, showing comparative trends."
            aspect="4/3"
          />
          <ImageBlock
            src="/photos/ME-timeseries.gif"
            alt="Time series GIF of continuous digestion softening"
            label="Placeholder GIF: continuous digestion response"
            hoverText="Animation idea: baseline curves degrading over digestion time (control vs 250 vs 500 U/mL)."
            aspect="4/3"
          />
        </div>
      </section>

      <Divider />

      {/* Skills / Tools */}
      <section className="grid gap-5 sm:grid-cols-2">
        <Card title="Skills demonstrated">
          <ul className="list-disc space-y-1 pl-4">
            <li>Experimental design for controlled comparisons</li>
            <li>Wet-lab protocols (collagenase digestion, staining, rinsing)</li>
            <li>Biomechanics testing & instrumentation workflow ownership</li>
            <li>Signal processing, normalization, statistical comparisons</li>
            <li>Technical writing & figure-driven communication (thesis-quality)</li>
          </ul>
        </Card>

        <Card title="Tools">
          <ul className="list-disc space-y-1 pl-4">
            <li>Custom mechanical tester (load cell, pressure transducers, displacement actuation)</li>
            <li>Confocal microscopy imaging workflow</li>
            <li>MATLAB (geometry measurement scripts, analysis utilities)</li>
            <li>Data processing + plotting (MATLAB/Python—use whichever you actually used for final figures)</li>
            <li>Lab protocols: collagenase digestion, CHP staining, collagen quantification assay workflow</li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* Description */}
      <section className="grid gap-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-start">
        <div>
          <Kicker>Project description</Kicker>
          <H2>Comparative analysis of MCA softening mechanisms</H2>

          <p className="mt-2 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            Collagen is a primary structural constituent of cerebral arteries and is believed to govern softening
            behavior when vessels are damaged. Prior work showed that CHP-based collagen denaturation signals
            appear only at stretches beyond where softening begins, creating a mismatch between “softening onset”
            and “detectable collagen denaturation.”
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            To test whether collagen damage explains softening in MCAs, I compared vessels softened by quasi-static
            overstretch to vessels softened by controlled collagen depletion using collagenase. I used repeated baseline
            mechanical tests to quantify softening and implemented multiple metrics to reduce reliance on any single
            noisy derivative. I additionally ran continuous-digestion experiments to track mechanical response decay
            over time and paired those results with collagen quantification workflows to estimate how much collagen
            removal corresponds to observed softening levels.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            Finally, I applied CHP staining and confocal imaging protocols to probe collagen microstructural changes
            caused by overstretch and digestion. The combined results provide a clearer picture of how vessel softening
            relates to collagen integrity, while also documenting practical detection and protocol limitations that guide
            future experimental refinement.
          </p>
        </div>

        <ImageBlock
          src="/photos/ME-workflow.png"
          alt="Workflow diagram placeholder"
          label="Placeholder: one-slide workflow diagram"
          hoverText="Summary visual: specimen prep → digestion/overstretch protocols → softening metrics → collagen quantification → CHP imaging."
          aspect="4/3"
        />
      </section>
    </main>
  );
}

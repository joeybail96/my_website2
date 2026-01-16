import Image from "next/image";

function Divider() {
  return <div className="my-14 h-px w-full bg-zinc-200/80 dark:bg-zinc-800/80" />;
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight text-black">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-sm leading-relaxed text-black">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold uppercase tracking-wider text-black">
      {children}
    </h3>
  );
}

function LabeledLine({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <p className="text-base leading-relaxed text-black">
      <span className="font-semibold text-black">{label}</span>{" "}
      {children}
    </p>
  );
}

function Photo({
  src,
  alt,
  overlay,
  aspect = "4/3",
}: {
  src: string;
  alt: string;
  overlay?: string;
  aspect?: "16/9" | "4/3";
}) {
  const aspectClass = aspect === "16/9" ? "aspect-[16/9]" : "aspect-[4/3]";
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-black bg-white/70 shadow-sm backdrop-blur dark:border-black dark:bg-zinc-950/55">
      <div className={`relative w-full ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />

        {overlay ? (
          <div className="pointer-events-none absolute inset-0 flex items-end bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/45 group-hover:opacity-100">
            <div className="w-full p-4">
              <p className="text-sm font-medium leading-snug text-white">
                {overlay}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ---------------- Boxed Links (like Personal page) ---------------- */

function LinkCard({
  href,
  label,
  children,
  download = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...(download ? { download: true } : {})}
      className="group flex items-center gap-3 rounded-lg bg-white/75 px-4 py-2 text-sm font-medium text-black shadow-sm backdrop-blur transition hover:bg-white/90"
    >
      <span className="h-5 w-5">{children}</span>
      <span>{label}</span>
    </a>
  );
}

/* ---------------- Icons ---------------- */

const Icons = {
  file: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M7 3h7l3 3v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M14 3v4h4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0A66C2"
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 5.9V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.6h-4V8.5z"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        className="fill-zinc-900"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.9 1.1 2 1.1 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z"
      />
    </svg>
  ),
  scholar: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      <path fill="#34A853" d="M11 12.98L3.24 9 11 5.02 18.76 9 11 12.98z" />
      <path fill="#FBBC05" d="M11 14.97L5 11.94V17l6 3 6-3v-5.06l-6 3.03z" />
    </svg>
  ),
  flickr: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="7" cy="12" r="4" fill="#0063DC" />
      <circle cx="17" cy="12" r="4" fill="#FF0084" />
    </svg>
  ),
};

export default function ProfessionalPage() {
  return (
    <div className="flex justify-center bg-transparent px-3 py-8">
      <main className="w-full max-w-4xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/60 sm:p-8">
        <header className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Engineering and Research Background
            </h1>
          </div>

          <div className="space-y-3 text-sm leading-relaxed text-black sm:text-base">
            <p>
              I’m a mechanical engineer with bachelor’s and master’s degrees in
              Mechanical Engineering and a master’s degree in Atmospheric Sciences.
              I’m motivated by work where strong fundamentals, practical design,
              and hands-on execution matter—especially when systems have to operate
              reliably outside a lab.
            </p>

            <p>
              I bring several years of industry experience as a project engineer
              leading large-scale capital engineering projects, and I apply that
              same rigor to scientific and field-based systems. Most recently, I
              led the design, fabrication, and installation of a 30-foot aerosol
              inlet and support structure for a remote mountain field site using
              SolidWorks, machining, and on-site construction—now operating in the
              field collecting aerosol and meteorological data.
            </p>
          </div>

          {/* LINKS (boxed like Personal page) */}
          <div className="pt-2">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <LinkCard href="/files/Bail-Resume.pdf" label="Resume (PDF)">
                {Icons.file}
              </LinkCard>
              <LinkCard href="/files/Bail-CV.pdf" label="CV (PDF)">
                {Icons.file}
              </LinkCard>
              <LinkCard
                href="https://www.linkedin.com/in/josephbail2018/"
                label="LinkedIn"
              >
                {Icons.linkedin}
              </LinkCard>
              <LinkCard href="https://github.com/joeybail96" label="GitHub">
                {Icons.github}
              </LinkCard>
              <LinkCard
                href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=jc_bJg4AAAAJ"
                label="Google Scholar"
              >
                {Icons.scholar}
              </LinkCard>
              <LinkCard
                href="https://www.flickr.com/photos/204000233@N02/albums"
                label="Flickr"
              >
                {Icons.flickr}
              </LinkCard>
            </div>
          </div>

          {/* PROOF PHOTOS */}
          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            <Photo
              src="/photos/snowclime-profile.jpg"
              alt="Deploying a probe at Storm Peak Lab"
              overlay="Storm Peak Lab: field deployment + custom mounting hardware"
            />
            <Photo
              src="/photos/buddys.jpg"
              alt="Aerosol inlet support structure"
              overlay="Remote site build: inlet + structural support system"
            />
          </div>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black">
            These photos were taken during the{" "}
            <a
              href="https://www.eol.ucar.edu/field_projects/s2noclime"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-zinc-100"
            >
              S2noClime
            </a>{" "}
            winter field campaign at{" "}
            <a
              href="https://atmos.utah.edu/storm_peak_lab/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-zinc-100"
            >
              Storm Peak Laboratory
            </a>
            , and were featured in a{" "}
            <a
              href="https://www.steamboatpilot.com/news/scientists-study-variability-in-snowfall-wetter-snowpack/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-zinc-100"
            >
              local news article
            </a>{" "}
            covering the campaign.
          </p>
        </header>

        <Divider />

        <section className="space-y-8">
          <SectionHeading
            title="Career Objective"
            subtitle="I’m strongest when I can own ambiguous engineering problems end-to-end."
          />

          <div className="space-y-4 text-base leading-relaxed text-black">
            <p>
              I’m seeking an engineering role where I have the freedom and
              responsibility to tackle complex technical problems through thoughtful
              design and hands-on execution. I’m motivated by work that lets me own
              real systems from concept through deployment.
            </p>

            <p>
              While I’m especially drawn to projects connected to the environment,
              nature, and field-deployed systems, I’m not limited to any single
              industry. I’m most interested in teams that value strong technical
              foundations, practical problem solving, and building things that work
              in the real world.
            </p>
          </div>

          <div className="space-y-3">
            <Subheading>Programming Languages</Subheading>
            <div className="space-y-2">
              <LabeledLine label="Proficient:">Python, MATLAB, R</LabeledLine>
              <LabeledLine label="Familiar:">
                Fortran, Bash, JavaScript, HTML, Arduino (C++), G-Code, C
              </LabeledLine>
            </div>
          </div>

          <div className="space-y-3">
            <Subheading>Tools and Software</Subheading>
            <div className="space-y-2">
              <LabeledLine label="CAD Tools:">SolidWorks, Inventor, Fusion 360</LabeledLine>
              <LabeledLine label="FE Modeling:">
                Inventor NASTRAN, Inventor CFD, SolidWorks FEA, ANSYS, Abaqus
              </LabeledLine>
              <LabeledLine label="Data Analysis & Visualization:">
                Pandas, NumPy, Xarray, Rasterio, Matplotlib, Cartopy
              </LabeledLine>
              <LabeledLine label="Development Tools:">
                VS Code, Jupyter Notebook, Anaconda, RStudio, Git/GitHub, Linux
              </LabeledLine>
              <LabeledLine label="Atmospheric Modeling:">
                GEOS-Chem, STILT, HYSPLIT, FENGSHA
              </LabeledLine>
              <LabeledLine label="Remote Sensing / Instruments:">
                Optical Particle Counters, Nephelometer, PINE, SMPS, Droplet/Imaging
                Probes, Radiosonde
              </LabeledLine>
              <LabeledLine label="Machining:">
                Woodworking, manual lathe, manual mill, power tools
              </LabeledLine>
              <LabeledLine label="Functional Expertise:">
                Technical writing, experimental design, scientific communication,
                cross-functional collaboration, project management, R&amp;D
              </LabeledLine>
            </div>
          </div>
        </section>

        <div className="h-10" />
      </main>
    </div>
  );
}

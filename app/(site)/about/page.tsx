import Image from "next/image";

function Divider() {
  return <div className="my-14 h-px w-full bg-zinc-200 dark:bg-zinc-800" />;
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
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
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
    <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
      <span className="font-semibold text-zinc-900 dark:text-zinc-100">
        {label}
      </span>{" "}
      {children}
    </p>
  );
}

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
      <div className="relative aspect-[4/3] w-full">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

function IconLink({
  href,
  label,
  color,
  children,
}: {
  href: string;
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 text-base font-semibold underline decoration-zinc-300 underline-offset-4 transition hover:decoration-zinc-500 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
      style={{ color }}
    >
      <span className="inline-flex h-5 w-5 items-center justify-center">
        {children}
      </span>
      <span>{label}</span>
    </a>
  );
}

export default function AboutPage() {
  return (
    <div className="flex justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="w-full max-w-4xl">
        {/* TOP SUMMARY */}
        <header className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
            About
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Hello!
          </h1>

          <div className="space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
            <p>
              I am a mechanical engineer with a background in atmospheric science and
              environmental systems. I enjoy work that blends modeling and analysis with
              prototyping and execution—building real hardware and workflows that hold up
              outside the lab.
            </p>
            <p>
              I’m based in Salt Lake City and I’m most energized by projects tied to the
              environment: air quality, weather, and field-ready instrumentation.
            </p>
          </div>

          {/* 3x1 PHOTO STRIP */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Photo src="/photos/snowclime-profile.jpg" alt="Installing a cloud droplet probe" />
            <Photo src="/photos/cncplotter-profile.jpg" alt="Working on a home project" />
            <Photo src="/photos/climbing-profile.jpg" alt="Outdoors" />
          </div>

          {/* Minimal links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
            <a
              href="/files/Bail-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
            >
              Resume (PDF)
            </a>
            <a
              href="/files/Bail-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:decoration-zinc-400"
            >
              CV (PDF)
            </a>

            <IconLink
              href="https://www.linkedin.com/in/josephbail2018/"
              label="LinkedIn"
              color="#0A66C2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 5.9V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4v7.6h-4V8.5z" />
              </svg>
            </IconLink>

            <IconLink
              href="https://github.com/joeybail96"
              label="GitHub"
              color="#181717"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.9 1.1 2 1.1 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </IconLink>

            <IconLink
              href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=jc_bJg4AAAAJ"
              label="Google Scholar"
              color="#4285F4"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                <path d="M11 12.98L3.24 9 11 5.02 18.76 9 11 12.98z" />
                <path d="M11 14.97L5 11.94V17l6 3 6-3v-5.06l-6 3.03z" />
              </svg>
            </IconLink>

            <IconLink
              href="https://www.flickr.com/photos/204000233@N02/albums"
              label="Flickr"
              color="#FF0084"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="7" cy="12" r="5" />
                <circle cx="17" cy="12" r="5" />
              </svg>
            </IconLink>

          </div>
        </header>

        <Divider />

        {/* CAREER OBJECTIVE */}
        <section className="space-y-8">
          <SectionHeading
            title="Career Objective"
            subtitle="My goal is to build a career where I can continue to grow as an engineer—especially in modeling, prototyping, and execution—while contributing to environment-related work in a practical, measurable way."
          />

          <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              I’m seeking opportunities where I can take ownership of systems end-to-end:
              define requirements, build and validate prototypes, deploy in real
              conditions, and iterate based on performance. I’m especially interested in
              roles connected to air quality, weather, remote sensing, and field
              instrumentation.
            </p>
          </div>

          {/* Programming Languages */}
          <div className="space-y-3">
            <Subheading>Programming Languages</Subheading>

            <div className="space-y-2">
              <LabeledLine label="Proficient:">Python, MATLAB, Bash</LabeledLine>
              <LabeledLine label="Familiar:">R, JavaScript/TypeScript, SQL</LabeledLine>
            </div>
          </div>

          {/* Tools and Software */}
          <div className="space-y-3">
            <Subheading>Tools and Software</Subheading>

            <div className="space-y-2">
              <LabeledLine label="CAD Tools:">SolidWorks, Fusion 360, Inventor</LabeledLine>

              <LabeledLine label="Data Analysis & Visualization:">
                Pandas, NumPy, Xarray, Rasterio, Matplotlib, Cartopy
              </LabeledLine>

              <LabeledLine label="Development Tools:">
                VS Code, Jupyter Notebook, Anaconda, RStudio, Git/GitHub, Linux
              </LabeledLine>

              <LabeledLine label="Atmospheric Modeling:">
                GEOS-Chem, STILT, HYSPLIT, FENGSHA
              </LabeledLine>

              <LabeledLine label="Remote Sensing:">
                Optical Particle Counters, Nephelometer, PINE, SMPS, Droplet/Imaging Probes,
                Radiosonde
              </LabeledLine>

              <LabeledLine label="Machining:">
                Woodworking, Manual Lathe, Manual Mill, Power Tools
              </LabeledLine>

              <LabeledLine label="Functional Expertise:">
                Experimental Design, Scientific Communication, Technical Writing,
                Cross-Functional Collaboration, Project Management, Research & Development
              </LabeledLine>
            </div>
          </div>
        </section>

        <Divider />

        {/* BACKGROUND (WITH PHOTOS WOVEN IN) */}
        <section className="space-y-8">
          <SectionHeading
            title="Background"
            subtitle="A little more about who I am outside of school and work."
          />

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>
                I grew up in{" "}
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  [your hometown/region]
                </span>
                , and I’ve always been drawn to building things and learning how systems
                work. Over time, that turned into mechanical engineering—and eventually
                into environmental work where weather and real-world constraints matter.
              </p>

              <p>
                Outside of work, I spend a lot of time in the mountains. Trail running,
                climbing, skiing, and being outdoors are a big part of my life, and
                they’re a big reason I care about environment-related problems in the
                first place.
              </p>

              <p>
                I also like hands-on projects at home—fixing, building, and iterating on
                small designs. That same mindset shows up in how I approach engineering
                work: practical, detail-oriented, and focused on what actually works.
              </p>
            </div>

            {/* Photos woven into Background */}
            <div className="space-y-4">
              <Photo src="/photos/app-backpacking.jpg" alt="Background photo 1" />
              <Photo src="/photos/mountain-profile.jpg" alt="Background photo 2" />
            </div>
          </div>
        </section>

        <Divider />

        {/* EDUCATION & WORK EXPERIENCES */}
        <section className="space-y-10">
          <SectionHeading
            title="Education"
            subtitle="A quick overview (details in my resume/CV)."
          />

          <div className="space-y-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                University of Utah
              </span>{" "}
              — PhD track (in progress / winding down)
            </p>
            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                M.S. Atmospheric Sciences
              </span>{" "}
              — air quality research, modeling, field campaign involvement
            </p>
            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                M.S. Mechanical Engineering
              </span>{" "}
              — design, manufacturing, testing, hands-on engineering foundations
            </p>
          </div>

          <Divider />

          <SectionHeading
            title="Work Experience"
            subtitle="Selected experience (we can format as a clean list with dates once you paste roles)."
          />

          <div className="space-y-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                [Role / Company]
              </span>{" "}
              — [Dates]
              <br />
              Short 1–2 sentence description of what you did and what you owned.
            </p>

            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                [Role / Company]
              </span>{" "}
              — [Dates]
              <br />
              Short 1–2 sentence description of what you did and what you owned.
            </p>

            <p>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                [Role / Company]
              </span>{" "}
              — [Dates]
              <br />
              Short 1–2 sentence description of what you did and what you owned.
            </p>
          </div>
        </section>

        <div className="h-10" />
      </main>
    </div>
  );
}

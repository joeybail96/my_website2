import Image from "next/image";

function Divider() {
  // was: bg-zinc-200 dark:bg-zinc-800
  return <div className="my-14 h-px w-full bg-black dark:bg-black" />;
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
      {/* was: text-zinc-900 dark:text-zinc-100 */}
      <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-black">
        {title}
      </h2>
      {subtitle ? (
        /* was: text-zinc-700 dark:text-zinc-300 */
        <p className="max-w-3xl text-sm leading-relaxed text-black dark:text-black">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    // was: text-zinc-800 dark:text-zinc-200
    <h3 className="text-base font-semibold uppercase tracking-wider text-black dark:text-black">
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
    // was: text-zinc-700 dark:text-zinc-300
    <p className="text-base leading-relaxed text-black dark:text-black">
      {/* was: text-zinc-900 dark:text-zinc-100 */}
      <span className="font-semibold text-black dark:text-black">{label}</span>{" "}
      {children}
    </p>
  );
}

function Photo({
  src,
  alt,
  overlay,
}: {
  src: string;
  alt: string;
  overlay?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-black bg-zinc-200 dark:bg-zinc-800">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />

        {/* Hover overlay */}
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
      className="inline-flex items-center gap-2 text-base font-semibold underline decoration-black underline-offset-4 transition hover:decoration-black dark:decoration-black dark:hover:decoration-black"
      style={{ color }}
    >
      <span className="inline-flex h-5 w-5 items-center justify-center">
        {children}
      </span>
      {/* ensure label text is black */}
      <span className="text-black dark:text-black">{label}</span>
    </a>
  );
}

export default function AboutPage() {
  return (
    <div className="flex justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="w-full max-w-4xl">
        {/* TOP SUMMARY */}
        <header className="space-y-6">
          {/* was: text-zinc-600 dark:text-zinc-400 */}
          <p className="text-xs font-semibold uppercase tracking-wider text-black dark:text-black">
            About
          </p>

          {/* was: text-zinc-900 dark:text-zinc-100 */}
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-black sm:text-4xl">
            Hello! Thanks for visting my site!
          </h1>

          {/* was: text-zinc-700 dark:text-zinc-300 */}
          <div className="space-y-3 text-sm leading-relaxed text-black dark:text-black sm:text-base">
            <p>
              I am a mechanical engineer with undergraduate and master’s degrees in
              Mechanical Engineering and a strong background in industry, modeling,
              and field systems. I also recently earned a master’s degree in
              Atmospheric Sciences, where I applied engineering principles to
              environmental and air quality problems.
            </p>

            <p>
              My recent, academic research focused on extending GEOS-Chem, a global
              atmospheric chemistry model, to represent chloride rich dust emissions
              from shrinking saline lakes across the western United States. This work
              combined physical modeling, environmental data analysis, and software
              development in Python and Fortran, managed through Git based
              collaboration.
            </p>

            <p>
              Alongside my modeling work, I was deeply involved in multiple field
              campaigns through the Department of Atmospheric Sciences, applying my
              mechanical engineering and industry experience to real-world
              instrumentation challenges. I led the design, fabrication, and
              installation of a 30 foot aerosol inlet and support structure for a
              remote field site in the Wasatch Mountains. Using SolidWorks, machining,
              and civil and mechanical construction methods, I helped build and
              install a field ready system that is now collecting aerosol and
              meteorological data for cloud seeding and air quality studies.
            </p>

            <p>
              I am strongly driven by creative engineering design and hands-on
              execution. Whether at work or on personal projects, I am always looking
              for ways to apply and grow my technical skills by solving real
              problems. The outdoors is also a big part of my life, which is why I
              have been especially drawn to projects that connect engineering with
              environmental understanding, protection, and exploration.
            </p>
          </div>

          {/* 3x1 PHOTO STRIP */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Photo
              src="/photos/snowclime-profile.jpg"
              alt="Installing a cloud droplet probe"
              overlay="Deploying an imaging probe at Storm Peak Lab (located at Mt Werner summit in Steamboat, CO) on a custom mount I designed"
            />
            <Photo
              src="/photos/cncplotter-profile.jpg"
              alt="Working on a home project"
              overlay="Custom built and programmed CNC Plotter - a COVID home project"
            />
            <Photo
              src="/photos/climbing-profile.jpg"
              alt="Outdoors"
              overlay="Climbing at The Pile in Big Cottonwood, Utah"
            />
          </div>

          {/* Minimal links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
            <a
              href="/files/Bail-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-black underline decoration-black underline-offset-4 hover:decoration-black dark:text-black dark:decoration-black dark:hover:decoration-black"
            >
              Resume (PDF)
            </a>
            <a
              href="/files/Bail-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-black underline decoration-black underline-offset-4 hover:decoration-black dark:text-black dark:decoration-black dark:hover:decoration-black"
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
          <SectionHeading title="Career Objective" />

          {/* was: text-zinc-700 dark:text-zinc-300 */}
          <div className="space-y-4 text-base leading-relaxed text-black dark:text-black">
            <p>
              I am seeking an engineering role where I have the freedom and
              responsibility to tackle complex technical problems through creative
              design and hands-on execution. I’m motivated by work that allows me to
              apply and grow my core engineering skills while taking ownership of real
              systems from concept through deployment/execution.
            </p>

            <p>
              While I am especially drawn to projects connected to the environment,
              nature, and field-deployed systems, I am not limited to any single
              industry. I am most interested in teams that value thoughtful design,
              strong technical foundations, and practical problem solving, whether the
              application is environmental, industrial, or product focused.
            </p>

            <p>
              My background spans modeling, prototyping, and field deployment, and I
              enjoy working on tight, cross-functional teams that take systems from
              concept through build and on-site operation.
            </p>
          </div>

          {/* Programming Languages */}
          <div className="space-y-3">
            <Subheading>Programming Languages</Subheading>

            <div className="space-y-2">
              <LabeledLine label="Proficient:">Python, MATLAB</LabeledLine>
              <LabeledLine label="Familiar:">
                Fortran, R, Bash, Arduino (C++), G-Code, C
              </LabeledLine>
            </div>
          </div>

          {/* Tools and Software */}
          <div className="space-y-3">
            <Subheading>Tools and Software</Subheading>

            <div className="space-y-2">
              <LabeledLine label="CAD Tools:">
                SolidWorks, Inventor, Fusion 360
              </LabeledLine>

              <LabeledLine label="FE Modeling:">
                Inventor NASTRAN, Inventor CFD, SolidWorks FEA, ANSYS, Abaqus
              </LabeledLine>

              <LabeledLine label="Data Analysis & Visualization:">
                Pandas, NumPy, Xarray, Rasterio, Matplotlib, Cartopy
              </LabeledLine>

              <LabeledLine label="Development Tools:">
                Spyder, VS Code, Jupyter Notebook, Anaconda, RStudio, Git/GitHub,
                Linux
              </LabeledLine>

              <LabeledLine label="Atmospheric Modeling:">
                GEOS-Chem, STILT, HYSPLIT, FENGSHA
              </LabeledLine>

              <LabeledLine label="Remote Sensing:">
                Optical Particle Counters, Nephelometer, PINE, SMPS,
                Droplet/Imaging Probes, Radiosonde
              </LabeledLine>

              <LabeledLine label="Machining:">
                Woodworking, Manual Lathe, Manual Mill, Power Tools
              </LabeledLine>

              <LabeledLine label="Functional Expertise:">
                Experimental Design, Scientific Communication, Technical Writing,
                Cross-Functional Collaboration, Project Management, Research &amp;
                Development
              </LabeledLine>
            </div>
          </div>
        </section>

        <Divider />

        {/* BACKGROUND */}
        <section className="space-y-8">
          <SectionHeading title="Background" />

          {/* was: text-zinc-700 dark:text-zinc-300 */}
          <div className="space-y-4 text-base leading-relaxed text-black dark:text-black">
            <p>
              I grew up in Carlisle, Pennsylvania, where I was always building things,
              first with Legos and later with woodworking and Arduino projects. I
              studied Mechanical Engineering at Penn State University, where I was
              also involved in 3D modeling and machining through the Formula SAE race
              car team. After college, I worked as an engineer for Carlisle
              Construction Materials, managing large capital projects focused on
              automating and upgrading manufacturing processes. I later returned to
              graduate school at the University of Utah, first to study biomechanics
              and then atmospheric science, where I researched air quality, dust, and
              climate impacts across the western United States. Across both industry
              and research, my path has always centered on using engineering to
              understand and improve complex, real-world systems.
            </p>

            <p>
              The outdoors has been a constant thread throughout my life. Growing up
              near the Appalachian Trail, I spent much of my time exploring creeks,
              forests, and local climbing areas, and that early connection to nature
              never faded. Over time it grew into a love for longer and more ambitious
              adventures, from my first backpacking trip to my first mountaineering
              adventure. Whether I am trail running, climbing, skiing, or camping, I
              am happiest when I am outside, and that connection to wild places is a
              big reason I care so deeply about the environment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Photo
              src="/photos/app-backpacking.jpg"
              alt="Backpacking"
              overlay="My first multi-day backpacking trip along PA's Appalachian Trail in 2014. Scrappy, ill-prepared, and stoked!"
            />
            <Photo
              src="/photos/mountain-profile.jpg"
              alt="Mountain profile"
              overlay="The summit of Mt. Rainier up Disappointment Cleaver in 2021. 3rd bagged peak of the trip!"
            />
          </div>

          <div className="space-y-4 text-base leading-relaxed text-black dark:text-black">
            <p>
              What I love most about engineering is the process of thoughtfully
              planning a design and then bringing it to life. I enjoy taking an idea,
              modeling it, refining the details, and finally turning it into something
              that actually works. That cycle of design, build, test, and improve is
              what keeps me excited about engineering, whether I am working on large
              field systems, research equipment, or personal projects in my own shop.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Photo
              src="/photos/cncdesign-profile.jpg"
              alt="CNC design work"
              overlay="Rendered CAD model of CNC Plotter"
            />
            <Photo
              src="/photos/cncplotter-profile.jpg"
              alt="CNC plotter project"
              overlay="Completed prototype of CNC Plotter"
            />
          </div>
        </section>

        <Divider />

        {/* EDUCATION & WORK EXPERIENCES */}
        <section className="space-y-10">
          <SectionHeading title="Education" />

          <div className="space-y-6 text-base leading-relaxed text-black dark:text-black">
            <p>
              <span className="font-semibold">M.S. Atmospheric Sciences</span> (Dec
              2025) | University of Utah | GPA: 4.00
            </p>

            <p>
              <span className="font-semibold">M.S. Mechanical Engineering</span>{" "}
              (May 2023) | University of Utah | GPA: 4.00
            </p>

            <p>
              <span className="font-semibold">B.S. Mechanical Engineering</span> (Dec
              2018) | Penn State University | GPA: 3.61
            </p>
          </div>

          <Divider />

          <SectionHeading title="Work Experience" />

<div className="space-y-6 text-base leading-relaxed text-black dark:text-black">
  <div>
    <p>
      <span className="font-semibold">Graduate Researcher | University of Utah</span>{" "}
      | Department of Atmospheric Sciences | Aug 2023 to December 2025
    </p>

    <ul className="mt-2 list-disc space-y-1 pl-6 italic">
      <li>
        Designed and led construction of a remote instrumentation lab at Powder
        Mountain, including a 30-foot inlet manifold, internal framing, external
        support structures, and mechanical integration of the inlet system.
      </li>
      <li>
        Installed and maintained atmospheric measurement instruments at remote
        field sites in the Wasatch Mountains, Ogden Valley, and Steamboat Ski
        Resort.
      </li>
      <li>
        Authored a master’s thesis identifying chlorine emissions from desiccating
        saline lakebeds and simulating their atmospheric impacts across the U.S.
        using GEOS-Chem.
      </li>
    </ul>
  </div>

  <div>
    <p>
      <span className="font-semibold">Graduate Researcher | University of Utah</span>{" "}
      | Department of Mechanical Engineering | Aug 2021 to Dec 2023
    </p>

    <ul className="mt-2 list-disc space-y-1 pl-6 italic">
      <li>
        Authored a master’s thesis on mechanical failure of brain vessels by
        dissecting and mechanically testing middle cerebral arteries using custom
        test setups and imaging systems.
      </li>
      <li>
        Developed MATLAB scripts and an interactive application to automatically
        process and organize raw mechanical test data from LabView.
      </li>
      <li>
        Designed and fabricated a microscope fixture to position and secure
        cerebral arteries for precise wall-thickness measurements.
      </li>
    </ul>
  </div>

  <div>
    <p>
      <span className="font-semibold">
        Mechanical Project Engineer | Carlisle Construction Materials
      </span>{" "}
      | Central Engineering | Jan 2019 to May 2021
    </p>

    <ul className="mt-2 list-disc space-y-1 pl-6 italic">
      <li>
        Owned capex projects end-to-end, including budget proposals and
        coordination with OEM suppliers, millwrights, electricians, maintenance
        teams, engineers, operators, and plant leadership across OH, OR, UT, and
        the Netherlands.
      </li>
      <li>
        Implemented a $1.4M automation project replacing a hazardous six-operator
        process for shearing and stacking 200-pound rubber mats.
      </li>
      <li>
        Implemented a $1.2M equipment upgrade for large-roll rubber flooring
        manufacturing, increasing throughput and reducing scrap.
      </li>
    </ul>
  </div>
</div>


        </section>

        <div className="h-10" />
      </main>
    </div>
  );
}

import Image from "next/image";

/* ------------------------ UI Helpers ------------------------ */

function Divider() {
  return <div className="my-12 h-px w-full bg-zinc-200/80 dark:bg-zinc-800/80" />;
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-black">
      {title}
    </h2>
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
    <div className="group relative overflow-hidden rounded-2xl border border-black bg-white/70 shadow-sm backdrop-blur">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
        />

        <div className="pointer-events-none absolute inset-0 flex items-end bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/45 group-hover:opacity-100">
          <div className="w-full p-4">
            <p className="text-sm font-medium text-white">{overlay ?? alt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- Social Links ----------------------- */

function SocialLink({
  href,
  label,
  icon,
  iconClassName,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  iconClassName?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg bg-white/75 px-4 py-2 text-sm font-medium text-black shadow-sm backdrop-blur transition hover:bg-white/90"
    >
      <span className={`h-5 w-5 ${iconClassName ?? ""}`}>{icon}</span>
      <span>{label}</span>
    </a>
  );
}

/* Brand colors (unchanged) */
const BRAND = {
  strava: "text-[#FC4C02]",
  mountain: "text-emerald-600",
  flickrBlue: "text-[#0063DC]",
  flickrPink: "text-[#FF0084]",
  youtube: "text-[#FF0000]",
};

const Icons = {
  strava: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.06 13.45L10.92 4.5h-2.9l4.14 8.95-2.7 5.05h2.93l2.67-5.05zm5.26 5.05l-2.53-5.05h-2.8l2.53 5.05h2.8z" />
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 20l9-16 9 16H3zm9-4l-3-5 3-5 3 5-3 5z" />
    </svg>
  ),
  flickr: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="7" cy="12" r="4" fill="currentColor" className={BRAND.flickrBlue} />
      <circle cx="17" cy="12" r="4" fill="currentColor" className={BRAND.flickrPink} />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 7s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-1C17.4 3.5 12 3.5 12 3.5s-5.4 0-8.2.5c-.4.1-1.3.1-2 1C1.2 5.6 1 7 1 7S.8 8.7.8 10.4v1.2C.8 13.3 1 15 1 15s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.6.2 6.8.5 8.1.5s5.4 0 8.2-.5c.4-.1 1.3-.1 2-1 .6-.6.8-2 .8-2s.2-1.7.2-3.4v-1.2C23.2 8.7 23 7 23 7zM9.75 14.2V9.8l4.5 2.2-4.5 2.2z" />
    </svg>
  ),
};

/* ------------------------- Page ---------------------------- */

export default function PersonalPage() {
  return (
    <div className="flex justify-center bg-transparent px-3 py-10">
      <main className="w-full max-w-4xl rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-10">
        <header className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Who am I?
            </h1>

            <div className="space-y-4 text-base text-black">
              <p>
                I grew up in Carlisle, Pennsylvania. Like most budding engineers, a large
                portion of my childhood was spent tinkering with Lego and slowly
                evolving into more ambitious woodworking and Arduino projects.
                This early curiosity led me to earn my Bachelor's degree in
                Mechanical Engineering at Penn State in 2018 and work as a
                professional, project engineer for 3 years post-graduation.
              </p>

              <p>
                Ever since I was a kid, I was infatuated with nature and the
                mountains of the western United States. In 2021, I took action
                and moved west to join a Mechanical Engineering lab at the
                University of Utah focused on studying the mechanical failure
                mechanisms of brain vessels during traumatic brain injuries.
              </p>

              <p>
                Soon after moving to Utah, I became acutely aware of how much air
                quality and dust affect both daily life and access to the
                outdoors. I wanted to do anything I could to contribute to our
                understanding of these issues, and so I ultimately joined two
                different labs in the Department of Atmospheric Sciences at the
                University of Utah that were focused on dust storms, drying
                saline lakes, and environmental monitoring in the mountains
                (while simultaneously completing my Master's in Mechanical
                Engineering).
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Photo src="/photos/climbing-profile.jpg" alt="Climbing" overlay="climbing up Pile Left in Big Cottonwood, Utah" />
            <Photo src="/photos/ski-profile.jpg" alt="Skiing" overlay="skiing down from Mt Werner to a beautiful sunset" />
            <Photo src="/photos/sub_build.jpg" alt="Camping build" overlay="using my custom-built Subaru camper in the Winds, WY" />
          </div>
        </header>

        <Divider />

        <section className="space-y-12">
          <div className="space-y-5">
            <SectionHeading title="My Outdoor Hobbies" />

            <div className="space-y-4 text-base text-black">
              <p>
                The outdoors has been a constant thread throughout my life.
                Growing up near the Appalachian Trail, I spent much of my time
                exploring creeks, forests, and local climbing areas, and that
                early connection to nature never faded. Over time it grew into a
                love for longer and more ambitious adventures, from my first
                backpacking trip to my first mountaineering adventure. Whether I
                am trail running, climbing, skiing, or camping, I am happiest
                when I am outside, and that connection to wild places is a big
                reason I care so deeply about the environment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Photo src="/photos/app-backpacking.jpg" alt="Backpacking" overlay="first multi-day backpacking trip on the App trail in 2015. Ill-prepared, scrappy, and stoked." />
              <Photo src="/photos/mountain-profile.jpg" alt="Mountain" overlay="summit of Mt Rainier in 2021 up Disappointment Cleaver. 3rd bagged peak of the trip!" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <SocialLink href="https://www.strava.com/athletes/88981982" label="Strava" icon={Icons.strava} iconClassName={BRAND.strava} />
              <SocialLink href="https://www.mountainproject.com/user/201189785/joey-b" label="Mountain Project" icon={Icons.mountain} iconClassName={BRAND.mountain} />
              <SocialLink href="https://www.flickr.com/photos/204000233@N02/albums" label="Flickr" icon={Icons.flickr} />
              <SocialLink href="https://www.youtube.com/@nut_tool" label="YouTube" icon={Icons.youtube} iconClassName={BRAND.youtube} />
            </div>
          </div>

          <div className="space-y-5">
            <SectionHeading title="My Indoor Hobbies" />

            <div className="space-y-4 text-base text-black">
              <p>
                When I am inside, I enjoy picking up random personal projects, in
                which I can apply and expand my engineering design and
                fabrication skills. What I love most about engineering is the
                process of thoughtfully planning a design and then bringing it
                to life. I enjoy taking an idea, modeling it, refining the
                details, and finally turning it into something that actually
                works. That cycle of design, build, test, and improve is what
                keeps me excited about engineering, whether I am working on
                large field systems, research equipment, or personal projects in
                my own shop.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Photo src="/photos/cncdesign-profile.jpg" alt="CNC design" overlay="one of my COVID projects: a custom CNC plotter." />
              <Photo src="/photos/cncplotter-profile.jpg" alt="CNC plotter" overlay="my favorite part of engineering is seeing a design come to fruition!" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

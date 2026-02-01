"use client";

import Image from "next/image";

/* ------------------------ UI Helpers ------------------------ */

function Divider() {
  return (
    <div className="my-12 h-px w-full bg-zinc-200/80 dark:bg-zinc-800/80" />
  );
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
    <h2 className="mt-2 text-xl font-semibold tracking-tight text-black sm:text-2xl">
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
  aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4";
}) {
  const aspectClass =
    aspect === "4/3"
      ? "aspect-[4/3]"
      : aspect === "9/16"
      ? "aspect-[9/16]"
      : aspect === "4/5"
      ? "aspect-[4/5]"
      : aspect === "5/4"
      ? "aspect-[5/4]"
      : "aspect-[16/9]";

  return (
    <figure className="space-y-2">
      <div
        className={`group relative w-full overflow-hidden rounded-xl border border-black bg-zinc-200 ${aspectClass}`}
        tabIndex={0}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover" // no hover/focus zoom
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
        <figcaption className="text-xs font-medium text-zinc-700">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Simple panel wrapper to keep Project1-style consistent */
function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black bg-white/75 p-6 shadow-sm backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
        {title}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

/* ------------------------ Page ------------------------ */

export default function ProjectSubaruCamperPage() {
  return (
    <div className="flex justify-center bg-transparent px-3 py-10">
      <main className="w-full max-w-4xl rounded-2xl border border-black bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-10">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Subaru Outback Camper Build
          </h1>
          <p className="text-sm font-medium text-zinc-700">
            Personal build • CAD → wood → road-tested
          </p>
        </header>

        {/* Hero */}
        <section className="mt-8">
          <ImageBlock
            src="/photos/camper-profile.jpg"
            alt="Camper inside a Subaru Outback"
            label="Camper installed in the Outback (finished build)"
            hoverText="A removable camper platform that turns an Outback into a simple road-trip sleeping + storage rig."
            aspect="16/9"
          />
        </section>

        {/* ====== SUMMARY SECTION (Project1-style) ====== */}
        <section className="mt-12 space-y-6">
          <Panel title="Summary">
            <p className="text-sm leading-relaxed text-black">
              I built this camper so I could move out west and live out of my car
              while road-tripping through South Dakota, Wyoming, Washington, and
              Utah. The goal was a clean, level sleeping platform with organized
              storage that fit perfectly inside my Subaru Outback and could be
              installed/removed without modifying the vehicle.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              I modeled the interior envelope in SolidWorks, designed a flat bed
              surface with under-platform storage, and added a full-length pull-out
              drawer for clothes, tools, and cooking gear. Then I built it from
              plywood with simple hardware and drawer slides in my garage.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              This wasn’t a showpiece — it was built to be used. I slept in it,
              lived out of it, and put real miles on it. It stayed quiet, held up,
              and made the trip genuinely comfortable.
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Skills Required &amp; Applied
              </p>

              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "CAD modeling (SolidWorks)",
                  "Measurement + packaging constraints",
                  "Design for assembly (simple, repeatable cuts)",
                  "Material selection (plywood, fasteners, slides)",
                  "Basic woodworking + shop tools",
                  "Hardware planning + BOM mindset",
                  "Iteration + fit-up troubleshooting",
                  "Real-world testing + refinement",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-black">
                    <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-black" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </section>

        <Divider />

        {/* ===================================================== */}
        {/* 1) Measuring the Space */}
        {/* ===================================================== */}
        <section className="space-y-3">
          <Kicker>Process</Kicker>
          <H2>Measuring the Space</H2>

          <p className="text-sm leading-relaxed text-black">
            I started by getting the trunk geometry locked down: usable length,
            width between trim, seat-back angle effects, and where the platform
            could sit flat without rocking or binding. The goal was a tight fit
            that still installs and removes easily.
          </p>

          {/* 3 photos of trunk space (4032x3024 => 4:3) */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <ImageBlock
              src="/photos/trunk_space.jpg"
              alt="Trunk space view 1 inside the Subaru Outback"
              label="Trunk space — overall envelope"
              hoverText="Establishing the real usable footprint (not the brochure dimensions)."
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/wheel_well1.jpg"
              alt="Trunk space view 2 showing seat/trim constraints"
              label="Trim + seat constraints"
              hoverText="Clearances around trim and seat geometry drove the layout."
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/wheel_well2.jpg"
              alt="Trunk space view 3 showing measurement references"
              label="Reference points + measurements"
              hoverText="Picking consistent reference points kept the CAD honest."
              aspect="4/3"
            />
          </div>

          {/* text left / image right */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-black">
                Once I had clean reference dimensions, I started translating the
                envelope into a design layout. I kept the platform split into
                simple panels so it could be built with basic cuts, assembled
                quickly, and still come apart cleanly when I needed the back seats
                again.
              </p>

              <p className="text-sm leading-relaxed text-black">
                The big design constraints were: keep the sleeping surface level,
                preserve usable storage volume below, and make sure the drawer
                travel was practical from the hatch without snagging on trim.
              </p>
            </div>

            {/* measuring photos are 4032x3024 => 4:3 */}
            <ImageBlock
              src="/photos/measurements.jpg"
              alt="Early design layout transferring measurements into a CAD sketch/model"
              label="Early translation: measurements → layout"
              hoverText="First pass: turning the real car envelope into a buildable geometry."
              aspect="4/3"
            />
          </div>
        </section>

        <Divider />

        {/* ===================================================== */}
        {/* 2) Modeling the Build */}
        {/* ===================================================== */}
        <section className="space-y-3">
          <Kicker>Process</Kicker>
          <H2>Modeling the Build</H2>

          <p className="text-sm leading-relaxed text-black">
            With the envelope mapped, I modeled the platform in SolidWorks and
            iterated until the layout made sense for both storage and assembly.
            I kept the geometry simple: flat sleeping surface, under-bed
            compartments, and a full-length drawer that’s easy to access from the
            hatch.
          </p>

          {/* modeling photos are 1677x848 => ~2:1 (closest supported is 16:9) */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <ImageBlock
              src="/photos/Assembled.jpg"
              alt="CAD view of the overall camper platform"
              label="CAD — overall platform"
              hoverText="Overall footprint and panel split."
              aspect="16/9"
            />
            <ImageBlock
              src="/photos/Clothes-Bin.jpg"
              alt="CAD view of storage compartments under the platform"
              label="CAD — storage layout"
              hoverText="Compartment sizing driven by real gear + usability."
              aspect="16/9"
            />
            <ImageBlock
              src="/photos/Cooking-Area.jpg"
              alt="CAD view focusing on the drawer system"
              label="CAD — drawer system"
              hoverText="Drawer length, slide placement, and access clearance."
              aspect="16/9"
            />
          </div>
        </section>

        <Divider />

        {/* ===================================================== */}
        {/* 3) Building the Rig */}
        {/* ===================================================== */}
        <section className="space-y-3">
          <Kicker>Process</Kicker>
          <H2>Building the Rig</H2>

          <p className="text-sm leading-relaxed text-black">
            After finalizing the layout, I built the platform from plywood with a
            simple internal skeleton for stiffness. The order mattered: get the
            base panels cut and fitting correctly first, level the base, build the
            skeleton, then add access ports and drawer hardware, and dial in the
            storage layout.
          </p>

          <div className="mt-8 space-y-10">
            {/* 1) cutting out the base panels (4032x3024 => 4:3) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                1) Cutting the base panels
              </p>

              <p className="text-sm leading-relaxed text-black">
                I started by cutting the main floor panels and keeping everything
                square and repeatable. These pieces define the footprint, so I
                treated them like the “datum” for the whole rig. I dry-fit early
                and often to catch mistakes before they got baked in.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <ImageBlock
                  src="/photos/cutting_panels.jpg"
                  alt="Cutting out the base panels for the camper platform"
                  label="Base panels cut from plywood"
                  hoverText="Start with clean, accurate panel geometry so everything downstream fits."
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/placing_panels.jpg"
                  alt="Test-fitting base panels inside the Outback"
                  label="Test fit inside the car"
                  hoverText="Quick fit checks prevented compounding errors later."
                  aspect="4/3"
                />
              </div>
            </div>

            {/* 2) leveling the base (TEXT LEFT, IMAGE RIGHT) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                2) Leveling the base
              </p>

              <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed text-black">
                    The trunk isn’t a flat datum, so I adjusted the base until it
                    sat level and didn’t rock. If this step is off, you feel it
                    every single night sleeping on it — and the rest of the build
                    starts fighting itself.
                  </p>

                  <p className="text-sm leading-relaxed text-black">
                    I was mainly watching for wobble, contact points, and anything
                    that would squeak once weight was on it. Getting this right
                    early made everything else go together cleaner.
                  </p>
                </div>

                <ImageBlock
                  src="/photos/leveled.jpg"
                  alt="Leveling the camper base platform"
                  label="Leveling and dialing in the base"
                  hoverText="Make it level now so the rest of the build stays square."
                  aspect="4/3"
                />
              </div>
            </div>

            {/* 3) constructing the skeleton (4032x3024 => 4:3) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                3) Constructing the skeleton
              </p>

              <p className="text-sm leading-relaxed text-black">
                This is the structural core. I used just enough framing to kill
                flex and squeaks, while keeping the layout open for storage,
                access ports, and drawer clearance. I test-fit as I built so the
                “bench-square” frame still matched the actual car geometry.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <ImageBlock
                  src="/photos/assembling_skeleton.jpg"
                  alt="Internal skeleton frame of the camper platform"
                  label="Skeleton frame"
                  hoverText="Internal framing adds stiffness without much weight."
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/top_platform.jpg"
                  alt="Top panels installed on the camper platform"
                  label="Top panels installed"
                  hoverText="Once the top is on, the platform becomes rigid and quiet."
                  aspect="4/3"
                />
              </div>
            </div>

            {/* 4) building access ports (4032x3024 => 4:3) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                4) Access ports for small items
              </p>

              <p className="text-sm leading-relaxed text-black">
                These were for the random stuff that otherwise ends up floating
                around the car: headlamp, cords, toiletries, batteries, etc. I
                placed them where they stayed reachable even when the main storage
                was packed so I didn’t have to unpack everything to find one small
                thing.
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                <ImageBlock
                  src="/photos/accessport1.jpg"
                  alt="Access port build photo 1"
                  label="Access port — cutouts"
                  hoverText="Cut and fit the openings before final assembly."
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/accessport2.jpg"
                  alt="Access port build photo 2"
                  label="Access port — hardware/fit-up"
                  hoverText="Dialing in hinges/latches so it’s easy to use."
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/side_port.jpg"
                  alt="Final access port in the completed build"
                  label="Access port — finished"
                  hoverText="In the final rig, these stayed useful every day."
                  aspect="4/3"
                />
              </div>
            </div>

            {/* 5) building the drawer system (4032x3024 => 4:3) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                5) Building the drawer system
              </p>

              <p className="text-sm leading-relaxed text-black">
                The drawer was the main “live out of it” feature. I sized it for
                clothes + cooking gear and focused on smooth, quiet travel. Slide
                alignment was the whole game here — get it right and it feels
                effortless; get it wrong and it binds forever.
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                <ImageBlock
                  src="/photos/drawer.jpg"
                  alt="Drawer system construction photo 1"
                  label="Drawer box + slide layout"
                  hoverText="Full-length drawer sized for clothes + cooking gear."
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/drawer_installed.jpg"
                  alt="Drawer system construction photo 2"
                  label="Slides installed + smooth travel"
                  hoverText="Dialed in alignment so it runs quietly and doesn’t bind."
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/drawer_open.jpg"
                  alt="Finished drawer in the completed rig"
                  label="Finished drawer"
                  hoverText="Final fit-up: stable, smooth travel, and easy access."
                  aspect="4/3"
                />
              </div>
            </div>

            {/* 6) Building the Closet (4032x3024 => 4:3) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                6) Building the Closet
              </p>

              <p className="text-sm leading-relaxed text-black">
                I wanted a dedicated spot for clothes so they didn’t end up in
                grocery bags or scattered through the rig. This compartment kept
                the sleeping area clean and made packing/unpacking faster.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <ImageBlock
                  src="/photos/clothes_closed.jpg"
                  alt="Clothes compartment closed"
                  label="Closet closed"
                  hoverText="Everything packed and secured for driving."
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/clothes_open.jpg"
                  alt="Clothes compartment open"
                  label="Closet open"
                  hoverText="Quick access without tearing the setup apart."
                  aspect="4/3"
                />
              </div>
            </div>

            {/* 7) finished product (leave as-is) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                7) Finished product
              </p>

              <p className="text-sm leading-relaxed text-black">
                Once everything was assembled, I did a final fit check, made sure
                nothing rattled, and verified that the drawer and access points
                were usable with the car packed. After that, it was ready to get
                abused on the road.
              </p>

              <div className="mt-2">
                <ImageBlock
                  src="/photos/finished.jpg"
                  alt="Completed Subaru Outback camper build"
                  label="Completed build"
                  hoverText="Final setup: bed surface, working drawer, and organized storage."
                  aspect="16/9"
                />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ===================================================== */}
        {/* 4) Using the Rig */}
        {/* ===================================================== */}
        <section className="space-y-3">
          <Kicker>In use</Kicker>
          <H2>Using the Rig</H2>

          <p className="text-sm leading-relaxed text-black">
            The whole point was practicality. I lived out of this setup for real
            travel: sleeping comfortably, staying organized, and keeping the car
            functional day-to-day. Once you’re doing it every night, the small
            decisions (drawer access, compartment layout, quick packing) end up
            mattering way more than aesthetics.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {/* using photos are 4032x3024 => 4:3, except me_and_car (589x662 => ~4:5) */}
            <ImageBlock
              src="/photos/olympic.jpg"
              alt="Subaru camper build being used on a trip photo 1"
              label="In action — camp setup"
              hoverText="Quick setup and teardown made it easy to use every day."
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/tensleep.jpg"
              alt="Subaru camper build being used on a trip photo 2"
              label="In action — sleeping mode"
              hoverText="Level sleeping surface that actually feels comfortable."
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/gas_station2.jpg"
              alt="Subaru camper build being used on a trip photo 3"
              label="In action — storage access"
              hoverText="Storage stays accessible without unloading the car."
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/me_and_car.png"
              alt="Subaru camper build being used on a trip photo 4"
              label="In action — road life"
              hoverText="Built to be used, not babied."
              aspect="4/5"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

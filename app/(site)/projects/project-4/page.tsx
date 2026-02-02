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
            Woodworking • Solidworks • Budgeting • Adventure
          </p>
        </header>

        {/* Hero */}
        <section className="mt-8">
          <ImageBlock
            src="/photos/camper-profile.jpg"
            alt="Camper inside a Subaru Outback"
            label="Cooking some dinner by our trusty steeds in the Winds, WY"
            aspect="16/9"
          />
        </section>

        {/* ====== SUMMARY SECTION (Project1-style) ====== */}
        <section className="mt-12 space-y-6">
          <Panel title="Summary">
            <p className="text-sm leading-relaxed text-black">
              In 2021, I bought a Subaru Outback, designed a camper build for it using Autodesk Inventor, 
              bought the wood and hardware, built it in my parents' driveway, and left for a 2-month 
              roadtrip with a friend. I did this all within a week. It remains one of my favorite home projects. 
              I got to bring a design to fruition and use it immediately, and it helped me experience
              many cool places on my way to my new home in Utah.
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Skills Required &amp; Applied
              </p>

              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "CAD modeling (Autodesk Inventor)",
                  "Design for easy assembly (only simple hand tools)",
                  "Basic woodworking",
                  "Budgeting",
                  "Tight time constraints",
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
            As soon as I bought my car, I brought it home and started measuring the trunk geometry. 
            I wanted my design to maximize its use of the limited, compact space of my trunk. The wheel 
            wells prevented me from using a simple rectangular approach, so I made sure to take 
            careful measurements around each well. 
          </p>

          {/* 3 photos of trunk space (4032x3024 => 4:3) */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <ImageBlock
              src="/photos/trunk_space.jpg"
              alt="Trunk space view 1 inside the Subaru Outback"
              label="total trunk space"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/wheel_well1.jpg"
              alt="Trunk space view 2 showing seat/trim constraints"
              label="right wheel well"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/wheel_well2.jpg"
              alt="Trunk space view 3 showing measurement references"
              label="left wheel well"
              aspect="4/3"
            />
          </div>

          {/* text left / image right */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-sm leading-relaxed text-black">
                Once I had reliable reference dimensions, I used my sketches to design a full
                assembly of my camper idea in Autodesk Inventor. I kept the platform split into simple panels so
                it could be built with basic cuts, assembled quickly, and still come apart
                cleanly whenever I needed the back seats again.
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
            I wanted the build to do more than just provide a sleeping platform and basic unorganized
            storage. I designed a clothes compartment accessible from the mattress,
            simple shelving for toiletries, and a drawer system that doubles as a cooking
            counter with quick access to supplies. CAD made it much easier to integrate
            these features, check clearances, and make sure everything worked together.
            Since I was also working with a constrained budget, I also used CAD to generate a
            bill of materials and stay on top of costs throughout the build.
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
            After finalizing the design, I bought the wood and hardward and began building.
            Here, I've included a few pictures of the process, but it was honestly all 
            pretty straightfoward woodworking (e.g., sawing and assembling with screws and nails).
          </p>

          <div className="mt-8 space-y-10">
            {/* 1) cutting out the base panels (4032x3024 => 4:3) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                1) Cutting the base panels
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <ImageBlock
                  src="/photos/cutting_panels.jpg"
                  alt="Cutting out the base panels for the camper platform"
                  label="Base panels cut from plywood"
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/placing_panels.jpg"
                  alt="Test-fitting base panels inside the Outback"
                  label="Test fit inside the car"
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
                    I wanted the platform to be relatively flat and level for comfortability. 
                    I measured the level of the driveway and tried to match that as best as I could to 
                    try and make my sleeping platform parallel with the ground. 
                  </p>
                  <p className="text-sm leading-relaxed text-black">
                    Obviously, this step 
                    was not too critical since I did not anticipate that I would ever be parking my car on a perfectly level 
                    surface, but whatever! The leveling base boards under my bed system also created a 
                    nice storage slot for shoes.
                  </p>
                </div>

                <ImageBlock
                  src="/photos/leveled.jpg"
                  alt="Leveling the camper base platform"
                  label="Leveling and dialing in the base"
                  aspect="4/3"
                />
              </div>
            </div>

            {/* 3) constructing the skeleton (4032x3024 => 4:3) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                3) Constructing the skeleton
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <ImageBlock
                  src="/photos/assembling_skeleton.jpg"
                  alt="Internal skeleton frame of the camper platform"
                  label="Skeleton frame showing different storage compartments"
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/top_platform.jpg"
                  alt="Top panels installed on the camper platform"
                  label="Top panels installed"
                  aspect="4/3"
                />
              </div>
            </div>

            {/* 4) building access ports (4032x3024 => 4:3) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                4) Access ports for small items
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                <ImageBlock
                  src="/photos/accessport1.jpg"
                  alt="Access port build photo 1"
                  label="Cutting out shelves for toiletries"
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/accessport2.jpg"
                  alt="Access port build photo 2"
                  label="Covered and finished!"
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/side_port.jpg"
                  alt="Final access port in the completed build"
                  label="Getting put to use!"
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
                The drawer was a very simple design. Basically, it was just a totally independent
                drawer that could slide in and out of a slot within the camper build. I cut out 
                and built a counter platform on the end of the drawer to function as a cooking surface, 
                which proved to be very comfortable and useful throughout my travels.
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                <ImageBlock
                  src="/photos/drawer.jpg"
                  alt="Drawer system construction photo 1"
                  label="Independent drawer built"
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/drawer_installed.jpg"
                  alt="Drawer system construction photo 2"
                  label="Drawer installed"
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/drawer_open.jpg"
                  alt="Finished drawer in the completed rig"
                  label="Finished drawer (in cooking mode)"
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
                I wanted my clothes to be easily accessible from my bed/mattress, so I cut out a "closet" that accesses
                a compartment within the camper build. The compartment could be accessed by simply opening a covering 
                panel. When closed, the panel is still load bearing to hold my weight or whatever else I needed to store 
                in my trunk.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <ImageBlock
                  src="/photos/clothes_closed.jpg"
                  alt="Clothes compartment closed"
                  label="Closet closed"
                  aspect="4/3"
                />
                <ImageBlock
                  src="/photos/clothes_open.jpg"
                  alt="Clothes compartment open"
                  label="Closet open"
                  aspect="4/3"
                />
              </div>
            </div>

            {/* 7) finished product (leave as-is) */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                7) Finished product
              </p>

              <div className="mt-2">
                <ImageBlock
                  src="/photos/finished.jpg"
                  alt="Completed Subaru Outback camper build"
                  label="Completed build. Ready for takeoff."
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
            My friend and I convoyed out west in our respective trusty steeds on a fully-loaded roadtrip. 
            We took our diy campers through the mountains, deserts, rainforests, and coasts from PA to Washington with 
            a lot of stops along the way.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {/* using photos are 4032x3024 => 4:3, except me_and_car (589x662 => ~4:5) */}
            <ImageBlock
              src="/photos/olympic.jpg"
              alt="Subaru camper build being used on a trip photo 1"
              label="Olympic NP, WA"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/tensleep.jpg"
              alt="Subaru camper build being used on a trip photo 2"
              label="Ten Sleep, WY"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/gas_station2.jpg"
              alt="Subaru camper build being used on a trip photo 3"
              label="Somewhere in South Dakota"
              aspect="4/3"
            />
            <ImageBlock
              src="/photos/me_and_car.png"
              alt="Subaru camper build being used on a trip photo 4"
              label="Finishing the trip in Glacier NP, MT"
              aspect="4/5"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Canvas, useLoader } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { STLLoader } from "three-stdlib";
import * as THREE from "three";

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
  aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
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
      : aspect === "3952/905"
      ? "aspect-[3952/905]"
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
        <figcaption className="text-xs font-medium text-zinc-700">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* Card is still here (fine to keep even if not used everywhere) */
function Card({
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
      <div className="mt-3 text-sm leading-relaxed text-black">{children}</div>
    </div>
  );
}

/** Side-by-side design vs installed hardware */
function DesignVsBuildRow({
  title,
  description,
  left,
  right,
}: {
  title: string;
  description?: React.ReactNode;
  left: {
    src: string;
    alt: string;
    label?: string;
    hoverText?: string;
    aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
  };
  right: {
    src: string;
    alt: string;
    label?: string;
    hoverText?: string;
    aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
  };
}) {
  return (
    <div className="rounded-2xl border border-black bg-white/75 p-6 shadow-sm backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
        {title}
      </p>

      {description ? (
        <div className="mt-3 text-sm leading-relaxed text-black">
          {description}
        </div>
      ) : null}

      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <ImageBlock {...left} />
        <ImageBlock {...right} />
      </div>
    </div>
  );
}

/** Custom row: LEFT side is TWO stacked photos, RIGHT side is single photo */
function DesignVsBuildRowLeftStack({
  title,
  description,
  leftTop,
  leftBottom,
  right,
}: {
  title: string;
  description?: React.ReactNode;
  leftTop: {
    src: string;
    alt: string;
    label?: string;
    hoverText?: string;
    aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
  };
  leftBottom: {
    src: string;
    alt: string;
    label?: string;
    hoverText?: string;
    aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
  };
  right: {
    src: string;
    alt: string;
    label?: string;
    hoverText?: string;
    aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
  };
}) {
  return (
    <div className="rounded-2xl border border-black bg-white/75 p-6 shadow-sm backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
        {title}
      </p>

      {description ? (
        <div className="mt-3 text-sm leading-relaxed text-black">
          {description}
        </div>
      ) : null}

      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <div className="grid gap-6">
          <ImageBlock {...leftTop} />
          <ImageBlock {...leftBottom} />
        </div>

        <ImageBlock {...right} />
      </div>
    </div>
  );
}

/** Custom row: 2×2 grid of photos (useful for sequences like seal assembly) */
function FourPhotoGridRow({
  title,
  description,
  a,
  b,
  c,
  d,
}: {
  title: string;
  description?: React.ReactNode;
  a: {
    src: string;
    alt: string;
    label?: string;
    hoverText?: string;
    aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
  };
  b: {
    src: string;
    alt: string;
    label?: string;
    hoverText?: string;
    aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
  };
  c: {
    src: string;
    alt: string;
    label?: string;
    hoverText?: string;
    aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
  };
  d: {
    src: string;
    alt: string;
    label?: string;
    hoverText?: string;
    aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
  };
}) {
  return (
    <div className="rounded-2xl border border-black bg-white/75 p-6 shadow-sm backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
        {title}
      </p>

      {description ? (
        <div className="mt-3 text-sm leading-relaxed text-black">
          {description}
        </div>
      ) : null}

      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <ImageBlock {...a} />
        <ImageBlock {...b} />
        <ImageBlock {...c} />
        <ImageBlock {...d} />
      </div>
    </div>
  );
}

/** ---------- 3D STL Viewer ---------- */

function STLModel({ url, color = "#a1a1aa" }: { url: string; color?: string }) {
  const geometry = useLoader(STLLoader, url);

  geometry.computeVertexNormals();
  geometry.center();

  const box = new THREE.Box3().setFromBufferAttribute(
    geometry.getAttribute("position") as THREE.BufferAttribute
  );
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = maxDim > 0 ? 1 / maxDim : 1;

  return (
    <mesh
      geometry={geometry}
      scale={[scale, scale, scale]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color={color} metalness={0.15} roughness={0.6} />
    </mesh>
  );
}

function STLViewer({
  stlUrl,
  label,
  hoverText,
  aspect = "9/16",
}: {
  stlUrl: string;
  label?: string;
  hoverText?: string;
  aspect?: "16/9" | "4/3" | "9/16" | "4/5" | "5/4" | "3952/905";
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
      : aspect === "3952/905"
      ? "aspect-[3952/905]"
      : "aspect-[16/9]";

  return (
    <figure className="space-y-2">
      <div
        className={`group relative w-full overflow-hidden rounded-xl border border-black bg-white shadow-sm ${aspectClass}`}
        tabIndex={0}
        aria-label="Interactive STL viewer. Use mouse/touch to rotate and zoom."
      >
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [1.6, 1.2, 1.8], fov: 45, near: 0.01, far: 100 }}
          className="h-full w-full"
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 4, 2]} intensity={1.1} />
          <Center>
            <STLModel url={stlUrl} />
          </Center>

          <OrbitControls
            makeDefault
            enablePan={false}
            enableDamping
            dampingFactor={0.08}
            minDistance={0.6}
            maxDistance={6}
          />
          <Environment preset="city" />
        </Canvas>

        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium text-white">
          Drag to rotate • Scroll/pinch to zoom
        </div>

        {hoverText ? (
          <div className="pointer-events-none absolute inset-0 flex items-end bg-black/0 p-4 opacity-0 transition duration-200 group-hover:bg-black/45 group-hover:opacity-100 group-focus:bg-black/45 group-focus:opacity-100">
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

export default function Project1Page() {
  return (
    <div className="flex justify-center bg-transparent px-3 py-10">
      <main className="w-full max-w-4xl rounded-2xl border border-black bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-10">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Design and Deployment of a Remote Aerosol Research Facility
          </h1>
          <p className="text-sm font-medium text-zinc-700">
            Powder Mountain, Utah • Mechanical design • Project execution • Field
            deployment
          </p>
        </header>

        {/* Hero */}
        <section className="mt-8">
          <ImageBlock
            src="/photos/labcover-profile.jpg"
            alt="Finished container lab at Powder Mountain with inlet system at sunset"
            label="installed 30-ft inlet on top of the remote lab at the summit of Poweder Mtn, UT"
            aspect="16/9"
          />
        </section>

        {/* ====== UPDATED SUMMARY SECTION (replaces the boxy Snapshot cards) ====== */}
        <section className="mt-12 space-y-6">
          <div className="rounded-2xl border border-black bg-white/75 p-6 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
              Summary
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              I led the engineering design and field installation of a 30-ft aerosol inlet for a
              remote mountaintop lab at Powder Mountain, Utah, and I delivered the system on a
              four-month timeline. For the winters of 2025 and 2026, this inlet will be supplying ambient mountain air to multiple instruments
              that are collecting data to study the impacts of cloud-seeding in the Wasatch Range.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              I collaborated with aerosol scientists to iterate quickly on requirements, and I
              maintained an active and respectful relationships with our University machine shop to refine drawings
              for manufacturability so parts could be produced reliably and with our rushed schedule. I also designed the support and anchoring
              approach to keep the ~150-lb inlet stable in harsh winter conditions and wind speeds
              above 100 mph.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-black">
              During installation, I worked closely with local technicians to install the inlet to the roof of the container, and I
              physically built, aligned, and fastened the inlet and support structure, as per my design specifications.
              Of course, as is expected with any fieldwork in the mountains, I was constantly needing to quickly react and solve
              unexpected field issues quickly to keep the system safe, serviceable, and sampling-ready.
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Skills Required & Applied
              </p>

              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "Mechanical system design (SolidWorks 3D & 2D)",
                  "Familiarity w/machining (mills, lathes, CNC, welding)",
                  "Machine ship coordination (DFM, quotes, revs)",
                  "Structural load-path thinking (wind/snow stability)",
                  "Constraint-driven engineering (landuse, time, $$$)",
                  "Hardware selection + BOM planning",
                  "Field installation (powertools & troubleshooting)",
                  "Communication (shop <-> science team <-> on-site)",
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

        {/* Inlet build highlights */}
        <section className="space-y-3">
          <Kicker>Inlet build highlights</Kicker>
          <H2>Custom manifold design for high-integrity aerosol sampling</H2>
          <p className="text-sm leading-relaxed text-black">
            The inlet manifold was designed to deliver ambient air to multiple
            aerosol instruments while minimizing particle losses. The concept
            intentionally mirrored proven research inlets at the University of Utah
            (William Browning Building rooftop inlet) and Storm Peak Laboratory,
            but was adapted for a remote container deployment and improved flow
            distribution. A key enhancement was an alternating outlet pattern that
            spreads flow more evenly—improving delivery efficiency across ports.
            <br />
            <br />
            Because this project ran on a tight 3-month timeline, I partnered
            closely with a machine shop to rework the original inlet design for fast,
            repeatable manufacturing. Instead of complex fixtures and manual tooling
            that could introduce obstructions to inlet airflow, we used custom
            precision-machined inserts that could be easily welded to the pipe. That
            approach was time efficient, while also mitigating risks of human error
            during the machining process and providing improved dimensional control.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <ImageBlock
              src="/photos/manifold_design.jpg"
              alt="CAD of manifold assembly showing geometry and port layout"
              label="Manifold assembly design (CAD)"
              aspect="9/16"
            />

            <STLViewer
              stlUrl="/models/manifold_insert.STL"
              label="Interactive: precision-machined pickoff port"
              aspect="9/16"
            />

            <ImageBlock
              src="/photos/manifold_installed.jpg"
              alt="Completed manifold installed in the lab"
              label="Completed manifold installed in lab"
              aspect="9/16"
            />
          </div>

          {/* single ultrawide photo */}
          <div className="mt-6">
            <ImageBlock
              src="/photos/inlet_full_assembly_labeled.jpg"
              alt="Complete inlet assembly including manifold, bulkhead, modular inlets, and inlet head"
              label="Complete inlet assembly (labeled)"
              aspect="3952/905"
            />
          </div>

          {/* short body text describing the panoramic assembly photo */}
          <div className="pt-2">
            <p className="text-sm leading-relaxed text-black">
              This full design assembly view shows how the inlet was engineered as a
              modular system. The manifold distributes flow inside the container,
              while a roof bulkhead fitting both seals the penetration against
              snow/ice/water and supports the vertical load of the inlet. Above
              the roof, two modular 10-foot inlet sections extend the sampling
              point beyond local contamination near the container and into cleaner
              atmospheric flow (and cloud/fog conditions). The inlet head pulls in
              ambient air and incorporates heating features intended to prevent
              icing during winter operations.
            </p>
          </div>
        </section>

        <Divider />

        {/* Lab support assembly */}
        <section className="space-y-3">
          <Kicker>Lab support assembly</Kicker>
          <H2>Support strategy: concept iteration under real site constraints</H2>
          <p className="text-sm leading-relaxed text-black">
            The 30-ft inlet weighed approximately 150 pounds, and 20 ft of the inlet
            needed to extend above the roof the container. Furthermore, the
            container would be stationed on a summit of Powder Mountain Ski Resort,
            where winds have been recorded above 100 mph. Beyond the structural
            needs, the inlet needed to be installed in an appropriate position, so
            that instruments could be placed around the inlet, as close as possible,
            to minimize particle loss.
          </p>
          <p className="text-sm leading-relaxed text-black">
            As the lead on this body of engineering work, it was necessary to
            communicate concepts to the larger team of managers and scientists
            effectively using SolidWorks modeling. I first made detailed
            measurements of the shipping container and the instruments that would
            need to be installed. I then iterated through several support concepts,
            as per my own independent research and by connecting with local
            millwrights and several mechanical engineers within my network to gain
            their respective insights.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <ImageBlock
              src="/photos/concrete_concept.jpg"
              alt="Design iteration 1: Rohn tower concept requiring concrete base"
              label="Concept — Rohn tower + Concrete Foundation"
              hoverText="Initial approach: leverage known Rohn tower installation practices to support the inlet. However, concrete footings were not permitted on our site location"
              aspect="9/16"
            />
            <ImageBlock
              src="/photos/rohn_concept.jpg"
              alt="Design iteration 2: above-ground ballast approach for tower support"
              label="Concept 2 — Rohn Tower + above-ground ballast"
              hoverText="Constraint-driven iteration: Generated a lightweight ballast system that utilized the fork ports at the base of the container"
              aspect="9/16"
            />
            <ImageBlock
              src="/photos/wire_assembly.jpg"
              alt="Design iteration 3: guy-wire concept with clean, self-contained load path"
              label="Concept 3 — guy-wire system (final direction)"
              hoverText="Final strategy: self-contained anchoring to the container."
              aspect="9/16"
            />
          </div>

          <div className="pt-2">
            <p className="text-sm leading-relaxed text-black">
              Ultimately, the team decided the guy-wire system anchored directly to
              the container would be most appropriate. That decision created three
              urgent engineering needs as the schedule tightened:
              <span className="font-medium"> (1)</span> a container anchor system to
              hold the guy wires to the container&apos;s four corner castings,
              <span className="font-medium"> (2)</span> safe, non-slip clamp system
              onto which the guy wires would fasten to the inlet, and
              <span className="font-medium"> (3)</span> a vertical load support
              solution, since guy wires stabilize laterally but would not carry the
              inlet’s weight.
            </p>
          </div>

          <div className="mt-6 grid gap-6">
            <DesignVsBuildRow
              title="Challenge 1: anchoring guy wires to the container"
              description={
                <p>
                  The anchoring approach needed to convert high lateral loads from
                  wind into a clean load path from the guy wires and through the container’s corner
                  castings. The corner castings were quite bulky, so a typical shackle system was not possible.
                  The final hardware was effectively a modified U-bolt, designed to be simple and strong and needing minimal
                  machining work.
                </p>
              }
              left={{
                src: "/photos/corner_anchor.jpg",
                alt: "Container anchor design concept interfacing corner castings to turnbuckles",
                label: "Custom Anchor Design",
                hoverText:
                  "a simple U-bolt with a custom-machined stainless, half-rod to reduce any stress concentrations on the anchor.",
                aspect: "4/5",
              }}
              right={{
                src: "/photos/corner_anchor_real.jpg",
                alt: "Installed container anchor in the field",
                label: "Installed Anchor",
                hoverText: "the installed anchor on one of the corner castings",
                aspect: "4/5",
              }}
            />

            <DesignVsBuildRowLeftStack
              title="Challenge 2: attaching guy wires to the inlet pipe"
              description={
                <p>
                  Because the guy wire support system was not the original plan, the inlet
                  was not inherently designed or built to interface with guy wires.
                  I designed and built a custom pipe-clamp-mount, that would hold tight
                  to the inlet diameter and attach to the four guy wires running to each corner casting.
                  Because the inlet would be in cold and windy environments, I had beads of weldement added
                  around the circumference of the inlet to mitigate any risk of the clamp becoming loose and
                  slipping down the inlet.
                </p>
              }
              leftTop={{
                src: "/photos/guywire_sketchup.jpg",
                alt: "Clamp concept for attaching guy wires to inlet",
                label: "Initial Sketch of Clamp Idea",
                hoverText:
                  "an initial sketch of the clamp idea before detailing the concept to CAD",
                aspect: "4/3",
              }}
              leftBottom={{
                src: "/photos/guywire_prototype.jpg",
                alt: "Prototype or alternate view of the inlet clamp system",
                label: "Clamp-Mount Prototype",
                hoverText:
                  "a completely installed prototype of the clamp-mount and weldement beads on the inlet",
                aspect: "4/3",
              }}
              right={{
                src: "/photos/inlet_guy_wire_installed.jpg",
                alt: "Installed clamp and guy wire attachment on inlet",
                label: "Installed hardware",
                hoverText:
                  "on-site, we found that we could simplify the design to reduce the weight of the clamp system, which is what is pictured here. Success!",
                aspect: "9/16",
              }}
            />

            <FourPhotoGridRow
              title="Challenge 3: supporting inlet weight + sealing the roof penetration"
              description={
                <p>
                  In reaction to the new challenge of needing to support the weight of the inlet and downward force of the tensioned guy wires,
                  I quickly designed and rush ordered a custom seal and support assembly. I ensured the assembly only required basic machining practices
                  and could be manufactured and installed quickly, but also meet appropriate structural requirements.
                </p>
              }
              a={{
                src: "/photos/seal_exploded.jpg",
                alt: "Exploded view of seal assembly and bulkhead support",
                label: "Seal/Support Concept (design exploded view)",
                hoverText:
                  "dual-purpose design: weather seal + a support surface for the bulkhead flange to carry vertical load.",
                aspect: "4/3",
              }}
              b={{
                src: "/photos/seal_assembly_design.jpg",
                alt: "Seal assembly fit-up on the container roof",
                label: "Assembled w/Lab in CAD",
                hoverText:
                  "mock-up/fit-up: confirm interfaces w/rest of modeled lab before field installation to reduce surprises under time pressure.",
                aspect: "4/3",
              }}
              c={{
                src: "/photos/install_seal3.jpg",
                alt: "Seal assembly being installed in the field",
                label: "Installing in field",
                hoverText:
                  "On-site execution: align, fasten, and seal while maintaining inlet alignment.",
                aspect: "4/3",
              }}
              d={{
                src: "/photos/install_seal2.jpg",
                alt: "Completed seal assembly installed on container roof",
                label: "Installed & Sealed Support Assembly",
                hoverText:
                  "final install: robust weather sealing and a reliable load-bearing interface.",
                aspect: "4/3",
              }}
            />
          </div>

          {/* Heated inlet concept */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-2">
              <Kicker>Additional responsibility</Kicker>
              <H2>Heated Inlet Concept Generation</H2>
              <p className="text-sm leading-relaxed text-black">
                I also developed a heating approach aligned with aerosol inlet
                standards (e.g., WMO-GAW / ACTRIS-style guidance) to prevent icing
                while protecting sampling integrity. Although we ultimately did not
                execute this design initially—because tariffs and supply chain
                disruptions pushed the preferred heating elements to long lead
                times—I delivered a complete concept and analysis that could be
                implemented later without redesigning the system from scratch.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <ImageBlock
                src="/photos/heated_inlet.jpg"
                alt="Inlet heating concept — view 1"
                label="Heating concept — view 1"
                hoverText="sillicone heaters line the length of the inlet, housed in 3/4-in fiberglass insulation"
                aspect="9/16"
              />
              <ImageBlock
                src="/photos/heated_inlet_head.jpg"
                alt="Inlet heating concept — view 2"
                label="Heating concept — view 2"
                hoverText="at the inlet cap, a thermocouple provides a temperature reading of the incoming air, so the sillicone heating power can be adjusted"
                aspect="9/16"
              />
            </div>
          </div>

          {/* Field installation */}
          <div className="mt-12 space-y-3">
            <Kicker>Field installation</Kicker>
            <H2>On-site build, alignment, and commissioning</H2>

            <p className="text-sm leading-relaxed text-black">
              The field work required fast, high-quality decisions in winter conditions. Key
              mechanical challenges included positioning and aligning the inlet, sealing the container,
              validating and reinforcing the stability of internal and external support structures,
              plumbing the air to an outlet of the container, positioning the instruments within the container around the inlet,
              and keeping the container sealed and serviceable between site visits while
              scientists began commissioning their instruments in parallel.
            </p>

            <div className="mt-6 space-y-12">
              {/* Group 1 */}
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-black">
                  Here, I have included two photos of the inlet after it had been lowered by a crane to the roof
                  of the mobile lab.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <ImageBlock
                    src="/photos/installed_inlet.jpg"
                    alt="Inlet install above the roof (installation phase)"
                    label="Standing (left) under the inlet preparing the guy wires for anchoring with another fellow grad student."
                    aspect="9/16"
                  />
                  <ImageBlock
                    src="/photos/inlet_exterior_done.jpg"
                    alt="Finished inlet above the roof (commissioned state)"
                    label="The inlet installed with guy wires fully tensioned."
                    aspect="9/16"
                  />
                </div>
              </div>

              {/* Group 2 */}
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-black">
                  In parallel to the inlet being designed and built, I helped transfrom the shipping container into the
                  serviceable lab that it is today: planning instrument placement, cutting penetrations,
                  crafting unistrut framing, routing the inlet through the interior, and
                  building an ergonomic layout that supports both performance and
                  maintenance.
                </p>

                <div className="flex justify-center">
                  <div className="w-full max-w-3xl">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <ImageBlock
                        src="/photos/original_container.jpg"
                        alt="Original shipping container before modifications"
                        label="My first view of the container in August"
                        hoverText="a virgin shipping container before any lab-related modifications"
                        aspect="5/4"
                      />
                      <ImageBlock
                        src="/photos/trailer_moving.jpg"
                        alt="Shipping container being transported to the site"
                        label="Placing the container at Powder Mtn in October"
                        hoverText="lab being transported and leveled to its allocated area"
                        aspect="5/4"
                      />
                      <ImageBlock
                        src="/photos/trailer_construction.jpg"
                        alt="Container under construction / modifications in progress"
                        label="Building the lab in November"
                        hoverText="a view of the messy inside of the lab being built and organized"
                        aspect="5/4"
                      />
                      <ImageBlock
                        src="/photos/inlet_interior_done.jpg"
                        alt="Instruments installed inside the container lab"
                        label="Lab being used and collecting data in January"
                        hoverText="a view of the instruments that were commissioned (by others) and using air fed by the inlet"
                        aspect="5/4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Group 3 */}
              <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                    Team Communication
                  </p>
                  <p className="text-sm leading-relaxed text-black">
                    Shown here is an early installation of an instrument that measures ice-nucleating
                    particles, positioned near the base manifold of the 30-ft inlet. Close coordination with scientists was essential to ensure that
                    on-site engineering decisions aligned with instrument requirements as
                    commissioning began in parallel.
                  </p>
                  <p className="text-sm leading-relaxed text-black">
                    In the early stages of the project planning,
                    I also led many of the discussions where I shared possible floorplans for the lab
                    using SolidWorks and the team decided how they wanted instruments and the inlet
                    positioned in the lab.
                  </p>
                </div>

                <ImageBlock
                  src="/photos/manifold_interior.jpg"
                  alt="PINE instrument commissioned next to manifold, with manifold visible"
                  label="PINE next to manifold"
                  aspect="4/5"
                />
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                Random Fieldwork Highlights
              </p>

              <p className="text-sm leading-relaxed text-black">
                Here are some photos showing day-to-day field work during installation,
                including winter conditions, on-site iteration, and hands-on construction
                details.
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                <ImageBlock
                  src="/photos/shoveling.jpg"
                  alt="Shoveling snow off the container roof during field work"
                  label="Shoveling snow off the lab to prepare for roofwork"
                  aspect="4/5"
                />
                <ImageBlock
                  src="/photos/building_support.jpg"
                  alt="Installing supplemental roof brace using Unistrut to stabilize inlet"
                  label="Adding an external unistrut frame on the roof to further support the base of the inlet"
                  aspect="4/5"
                />
                <ImageBlock
                  src="/photos/wiring.jpg"
                  alt="Wiring power cables for inlet heaters running down the inlet into a controller"
                  label="routing de-icing heater's power cables from the inlet head and down the inlet length"
                  aspect="4/5"
                />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* References */}
        <section className="space-y-3">
          <Kicker>References</Kicker>
          <H2>Facilities &amp; inspiration sources</H2>

          <p className="text-sm leading-relaxed text-black">
            The manifold concept drew from proven inlet designs used at established
            atmospheric research facilities, then adapted for a container-based,
            remote deployment and improved for efficient multi-port flow
            distribution and manufacturability.
          </p>

          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-black">
            <li>
              <a
                href="https://www.researchgate.net/figure/Webcam-photos-from-the-roof-of-the-William-Browning-Building-at-the-University-of-Utah_fig11_258466586"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-2 hover:text-blue-600"
              >
                University of Utah — William Browning Building rooftop inlet
                (reference photo)
              </a>
            </li>

            <li>
              <a
                href="https://atmos.utah.edu/storm_peak_lab/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-2 hover:text-blue-600"
              >
                Storm Peak Laboratory (Steamboat Springs, CO)
              </a>
            </li>

            <li>
              <a
                href="https://atmos.utah.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-2 hover:text-blue-600"
              >
                University of Utah — Department of Atmospheric Sciences
              </a>
            </li>

            <li>
              <a
                href="https://community.wmo.int/en/programmes/global-atmosphere-watch-programme"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-2 hover:text-blue-600"
              >
                WMO Global Atmosphere Watch (GAW) programme (standards context)
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

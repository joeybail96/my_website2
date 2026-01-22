"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Environment } from "@react-three/drei";
import { STLLoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
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
  left,
  right,
}: {
  title: string;
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
  leftTop,
  leftBottom,
  right,
}: {
  title: string;
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
  a,
  b,
  c,
  d,
}: {
  title: string;
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

function STLModel({
  url,
  color = "#a1a1aa",
}: {
  url: string;
  color?: string;
}) {
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
            deployment • Systems integration
          </p>
        </header>

        {/* Hero */}
        <section className="mt-8">
          <ImageBlock
            src="/photos/labcover-profile.jpg"
            alt="Finished container lab at Powder Mountain with inlet system at sunset"
            label="Finished container lab at Powder Mountain (sunset)"
            hoverText="A field-ready, transportable aerosol research facility deployed on a tight timeline in a harsh alpine environment."
            aspect="16/9"
          />
        </section>

        {/* Snapshot */}
        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card title="Project snapshot">
            <p className="text-sm leading-relaxed text-black">
              Built a transportable aerosol monitoring lab that performs like a
              permanent research facility—deployed at a remote mountain site for
              long-duration winter operations and cloud-seeding aerosol
              measurements.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-black bg-white/75 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                  Scope
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-black">
                  <li>Container-based lab buildout</li>
                  <li>~30 ft modular inlet + manifold</li>
                  <li>Support/anchoring + roof bulkhead seal</li>
                  <li>On-site install, alignment, commissioning</li>
                </ul>
              </div>

              <div className="rounded-xl border border-black bg-white/75 p-4 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                  Results
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-black">
                  <li>Deployed on a compressed 3-month timeline</li>
                  <li>Stable inlet without concrete foundations</li>
                  <li>Commissioned instruments on ambient sampling</li>
                  <li>Serviceable layout for winter site visits</li>
                </ul>
              </div>
            </div>

            <details className="mt-4 rounded-xl border border-black bg-white/75 p-4 shadow-sm backdrop-blur">
              <summary className="cursor-pointer text-sm font-medium text-black">
                Expand: skills &amp; tools used
              </summary>

              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                    Skills demonstrated
                  </p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-black">
                    <li>
                      Systems engineering under constraints (wind/snow, access,
                      land-use rules, schedule pressure)
                    </li>
                    <li>Design-for-manufacturability + rapid vendor iteration</li>
                    <li>
                      Structural load-path thinking (stability, anchoring, safety,
                      maintainability)
                    </li>
                    <li>
                      Requirements-driven aerosol sampling integrity (minimize
                      obstructions/particle loss)
                    </li>
                    <li>Field execution + troubleshooting</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                    Tools
                  </p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-black">
                    <li>SolidWorks (assemblies, drawings, interface control)</li>
                    <li>Machine shop coordination (DFM reviews, quotes, revs)</li>
                    <li>Hardware selection + BOM (Unistrut, anchors, rigging)</li>
                    <li>Field fabrication/tool work (cutting, drilling, fit-up)</li>
                  </ul>
                </div>
              </div>
            </details>
          </Card>

          <Card title="My role (what I owned end-to-end)">
            <ul className="list-disc space-y-1.5 pl-4">
              <li>Redesigned the inlet/manifold and drove design reviews</li>
              <li>
                Partnered with a machine shop to simplify and harden
                manufacturability
              </li>
              <li>
                Selected support strategy under site constraints; engineered
                interfaces/anchors
              </li>
              <li>
                Managed on-site build: alignment, tensioning, commissioning, rapid
                fixes
              </li>
            </ul>
          </Card>
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
            closely with a machine shop to rework the design for fast, repeatable
            manufacturing. Instead of complex fixtures and manual tooling that
            could introduce obstructions, we used custom precision-machined
            inserts welded to the pipe. That approach reduced internal
            discontinuities, improved dimensional control, and protected sampling
            quality.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <ImageBlock
              src="/photos/manifold_design.jpg"
              alt="CAD of manifold assembly showing geometry and port layout"
              label="Manifold assembly design (CAD)"
              hoverText="Design intent: a low-loss manifold supplying ambient air to multiple instruments, with geometry tuned for field deployment."
              aspect="9/16"
            />

            <STLViewer
              stlUrl="/models/manifold_insert.STL"
              label="Interactive: precision-machined pickoff port (STL)"
              hoverText="Rotate/zoom: the welded insert concept that improved manufacturability while minimizing internal obstructions."
              aspect="9/16"
            />

            <ImageBlock
              src="/photos/manifold_installed.jpg"
              alt="Completed manifold installed in the lab"
              label="Completed manifold installed in lab"
              hoverText="Final hardware installed and integrated with the lab layout—ready for instrument connections and commissioning."
              aspect="9/16"
            />
          </div>

          {/* single ultrawide photo */}
          <div className="mt-6">
            <ImageBlock
              src="/photos/inlet_full_assembly_labeled.jpg"
              alt="Complete inlet assembly including manifold, bulkhead, modular inlets, and inlet head"
              label="Complete inlet assembly (labeled)"
              hoverText="System overview: manifold + roof bulkhead/support + two modular 10 ft exterior sections + inlet head with heating to prevent icing."
              aspect="3952/905"
            />
          </div>

          {/* short body text describing the panoramic assembly photo */}
          <div className="pt-2">
            <p className="text-sm leading-relaxed text-black">
              This full assembly view shows how the inlet was engineered as a
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
            A tall inlet over a container lab needs a stable support strategy—but
            the “best” engineering solution also had to fit site rules, schedule,
            and how the interior instrument layout would be arranged. I led
            multiple design reviews with the team to rapidly iterate concepts and
            converge on a design that could be built quickly before winter.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <ImageBlock
              src="/photos/concrete_concept.jpg"
              alt="Design iteration 1: Rohn tower concept requiring concrete base"
              label="Concept 1 — Rohn tower (concrete foundation)"
              hoverText="Initial approach: leverage known Rohn tower installation practices to support the inlet."
              aspect="9/16"
            />
            <ImageBlock
              src="/photos/rohn_concept.jpg"
              alt="Design iteration 2: above-ground ballast approach for tower support"
              label="Concept 2 — tower + above-ground ballast"
              hoverText="Constraint-driven iteration: alternative anchoring ideas when concrete was not allowed."
              aspect="9/16"
            />
            <ImageBlock
              src="/photos/wire_assembly.jpg"
              alt="Design iteration 3: guy-wire concept with clean, self-contained load path"
              label="Concept 3 — guy-wire system (final direction)"
              hoverText="Final strategy: cleanest and least invasive to the site—self-contained anchoring to the container."
              aspect="9/16"
            />
          </div>

          <div className="pt-2">
            <p className="text-sm leading-relaxed text-black">
              When we learned concrete footings were not permitted, the original
              Rohn-tower concept became infeasible. I explored above-ground ballast
              options, but the cleanest, most self-contained solution was a
              guy-wire system anchored directly to the container. That decision
              created three urgent engineering needs as the schedule tightened:
              <span className="font-medium"> (1)</span> a container anchor system
              that could load into corner castings,
              <span className="font-medium"> (2)</span> a safe, non-slip clamp
              interface for guy wires on an inlet pipe that was never designed for
              this, and
              <span className="font-medium"> (3)</span> a vertical load support
              solution, since guy wires stabilize laterally but do not carry the
              inlet’s weight.
            </p>
          </div>

          <div className="mt-6 grid gap-6">
            <DesignVsBuildRow
              title="Challenge 1: anchoring guy wires to the container"
              left={{
                src: "/photos/corner_anchor.jpg",
                alt: "Container anchor design concept interfacing corner castings to turnbuckles",
                label: "Design (CAD/drawing)",
                hoverText:
                  "Custom anchor concept: interface between container corner castings and guy-wire turnbuckles with a clean load path.",
                aspect: "4/5",
              }}
              right={{
                src: "/photos/corner_anchor_real.jpg",
                alt: "Installed container anchor in the field",
                label: "Installed hardware",
                hoverText:
                  "Executed quickly on-site: finalized anchor hardware installed and tension-ready.",
                aspect: "4/5",
              }}
            />

            <DesignVsBuildRowLeftStack
              title="Challenge 2: attaching guy wires to the inlet pipe"
              leftTop={{
                src: "/photos/guywire_sketchup.jpg",
                alt: "Clamp concept for attaching guy wires to inlet",
                label: "Clamp concept (design)",
                hoverText:
                  "Rapid design: a clamp system to hold four guy wires evenly around the inlet while preserving service access.",
                aspect: "4/3",
              }}
              leftBottom={{
                src: "/photos/guywire_prototype.jpg",
                alt: "Prototype or alternate view of the inlet clamp system",
                label: "Prototype / alternate view",
                hoverText:
                  "Iterated quickly for simplicity and weight reduction while maintaining reliable grip and alignment.",
                aspect: "4/3",
              }}
              right={{
                src: "/photos/inlet_guy_wire_installed.jpg",
                alt: "Installed clamp and guy wire attachment on inlet",
                label: "Installed hardware",
                hoverText:
                  "Field-installed interface: clamp aligned for four guy wires; anti-slip strategy included weld beads below clamp locations.",
                aspect: "9/16",
              }}
            />

            <FourPhotoGridRow
              title="Challenge 3: supporting inlet weight + sealing the roof penetration"
              a={{
                src: "/photos/seal_exploded.jpg",
                alt: "Exploded view of seal assembly and bulkhead support",
                label: "Seal/support concept (design)",
                hoverText:
                  "Dual-purpose design: weather seal + a support surface for the bulkhead flange to carry vertical load.",
                aspect: "4/3",
              }}
              b={{
                src: "/photos/seal_assembly_design.jpg",
                alt: "Seal assembly fit-up on the container roof",
                label: "Fit-up on container",
                hoverText:
                  "Mock-up/fit-up: confirm interfaces before field installation to reduce surprises under time pressure.",
                aspect: "4/3",
              }}
              c={{
                src: "/photos/install_seal3.jpg",
                alt: "Seal assembly being installed in the field",
                label: "Installing in field",
                hoverText:
                  "On-site execution: align, fasten, and seal while maintaining inlet alignment and serviceability.",
                aspect: "4/3",
              }}
              d={{
                src: "/photos/install_seal2.jpg",
                alt: "Completed seal assembly installed on container roof",
                label: "Installed",
                hoverText:
                  "Final install: robust weather sealing and a reliable load-bearing interface for winter operations.",
                aspect: "4/3",
              }}
            />
          </div>

          {/* Heated inlet concept */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-2">
              <Kicker>Additional responsibility</Kicker>
              <H2>Standards-driven inlet heating concept</H2>
              <p className="text-sm leading-relaxed text-black">
                I also developed a heating approach aligned with aerosol inlet
                standards (e.g., WMO-GAW / ACTRIS-style guidance) to prevent icing
                while protecting sampling integrity. Although we ultimately did
                not execute this design initially—because tariffs and supply chain
                disruptions pushed the preferred heating elements to long lead
                times—I delivered a complete concept and analysis that could be
                implemented later without redesigning the system from scratch.
              </p>
              <p className="text-sm leading-relaxed text-black">
                In practice, this meant balancing three competing requirements:
                keep the inlet ice-free, avoid creating hot spots that could alter
                aerosol properties, and route power/controls safely in a harsh
                environment with limited service windows.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <ImageBlock
                src="/photos/heated_inlet.jpg"
                alt="Inlet heating concept — view 1"
                label="Heating concept — view 1"
                hoverText="Concept view: heat-trace routing + insulation approach intended for reliable winter operation."
                aspect="9/16"
              />
              <ImageBlock
                src="/photos/heated_inlet_head.jpg"
                alt="Inlet heating concept — view 2"
                label="Heating concept — view 2"
                hoverText="Concept view: inlet head interface details, strain relief planning, and control placement."
                aspect="9/16"
              />
            </div>
          </div>

          {/* Field installation */}
          <div className="mt-12 space-y-3">
            <Kicker>Field installation</Kicker>
            <H2>On-site build, alignment, and commissioning</H2>

            <p className="text-sm leading-relaxed text-black">
              This project was won or lost in execution. The field work required
              fast, high-quality decisions in winter conditions: positioning and
              aligning the inlet, tensioning guy wires safely, validating stability
              in wind, and commissioning instruments while keeping the container
              layout serviceable for future site visits.
            </p>

            <div className="mt-6 space-y-12">
              {/* Group 1 */}
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-black">
                  The rooftop install progressed in phases: first set the inlet
                  through the roof penetration and lock alignment, then complete
                  the final above-roof configuration. This sequencing reduced risk
                  and helped keep the team moving while weather windows were
                  limited.
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <ImageBlock
                    src="/photos/installed_inlet.jpg"
                    alt="Inlet install above the roof (installation phase)"
                    label="Roof install — alignment & initial set"
                    hoverText="Set the inlet, align the roof penetration/bulkhead interface, and prepare for final fastening and guy-wire tensioning."
                    aspect="9/16"
                  />
                  <ImageBlock
                    src="/photos/inlet_exterior_done.jpg"
                    alt="Finished inlet above the roof (commissioned state)"
                    label="Roof install — finished/commissioned"
                    hoverText="Final above-roof configuration after tensioning, verification checks, and readiness for operations."
                    aspect="9/16"
                  />
                </div>
              </div>

              {/* Group 2 */}
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-black">
                  In parallel, the shipping container was transformed into a
                  serviceable lab: planning instrument placement, cutting and
                  framing penetrations, routing the inlet through the interior,
                  and building an ergonomic layout that supports both performance
                  and maintenance.
                </p>

                <div className="flex justify-center">
                  <div className="w-full max-w-3xl">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <ImageBlock
                        src="/photos/original_container.jpg"
                        alt="Original shipping container before modifications"
                        label="Container — original"
                        hoverText="Baseline: empty container before cutouts, framing, routing, and instrument layout work."
                        aspect="5/4"
                      />
                      <ImageBlock
                        src="/photos/trailer_moving.jpg"
                        alt="Shipping container being transported to the site"
                        label="Container — transport"
                        hoverText="Logistics: moving the container to the Powder Mountain summit for build-out and deployment."
                        aspect="5/4"
                      />
                      <ImageBlock
                        src="/photos/trailer_construction.jpg"
                        alt="Container under construction / modifications in progress"
                        label="Container — under construction"
                        hoverText="Build phase: framing, penetrations, inlet routing, and integrating mounting surfaces for instruments."
                        aspect="5/4"
                      />
                      <ImageBlock
                        src="/photos/inlet_interior_done.jpg"
                        alt="Instruments installed inside the container lab"
                        label="Container — commissioned instruments"
                        hoverText="Commissioned state: instruments installed and connected to the inlet/manifold with clean routing and service access."
                        aspect="5/4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Group 3 */}
              <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed text-black">
                    Final commissioning focused on integration details: confirming
                    flow paths, ensuring stable mounting, verifying clearances for
                    service access, and placing the manifold relative to
                    instruments so troubleshooting could happen quickly during
                    winter site visits.
                  </p>
                  <p className="text-sm leading-relaxed text-black">
                    The image on the right captures a key “done right” detail: an
                    instrument (PINE) commissioned next to the manifold, with the
                    manifold clearly visible and routing kept clean.
                  </p>
                </div>

                <ImageBlock
                  src="/photos/manifold_interior.jpg"
                  alt="PINE instrument commissioned next to manifold, with manifold visible"
                  label="Commissioning detail — PINE next to manifold"
                  hoverText="Operational layout: manifold clearly visible next to an instrument, with clear service access and tidy routing."
                  aspect="4/5"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <ImageBlock
                src="/photos/shoveling.jpg"
                alt="Shoveling snow off the container roof during field work"
                label="Winter conditions — roof access"
                hoverText="Reality of remote winter operations: clearing snow to access the roof and keep installation/maintenance moving."
                aspect="4/5"
              />
              <ImageBlock
                src="/photos/building_support.jpg"
                alt="Installing supplemental roof brace using Unistrut to stabilize inlet"
                label="Supplemental support — Unistrut roof brace"
                hoverText="On-site iteration: added a supplemental support/bracing concept to improve robustness and reduce risk."
                aspect="4/5"
              />
              <ImageBlock
                src="/photos/wiring.jpg"
                alt="Wiring power cables for inlet heaters running down the inlet into a controller"
                label="Heater wiring — power + controls"
                hoverText="Execution detail: routing and wiring heater power down the inlet into a controller inside the container."
                aspect="4/5"
              />
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

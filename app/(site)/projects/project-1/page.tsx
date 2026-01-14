"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Environment } from "@react-three/drei";
import { STLLoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

function Divider() {
  return <div className="my-12 h-px w-full bg-zinc-200 dark:bg-zinc-800" />;
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
    <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
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
        className={`group relative w-full overflow-hidden rounded-xl border border-black bg-zinc-200 dark:bg-zinc-800 ${aspectClass}`}
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
        <figcaption className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
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
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
        {title}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
        {children}
      </div>
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
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
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
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
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
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
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
        className={`group relative w-full overflow-hidden rounded-xl border border-black bg-white shadow-sm dark:bg-zinc-950 ${aspectClass}`}
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
        <figcaption className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function Project1Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          Design and Deployment of a Remote Aerosol Research Facility
        </h1>
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          University of Utah × Rainmaker • Mechanical design • Field deployment •
          Systems integration
        </p>
      </header>

      {/* Hero */}
      <section className="mt-8">
        <ImageBlock
          src="/photos/labcover-profile.jpg"
          alt="Container lab and inlet deployed at mountain site"
          label="Hero: container lab + inlet installed at site"
          hoverText="Remote aerosol facility deployed at Powder Mountain: container lab + inlet system (field-ready integration)."
          aspect="16/9"
        />
      </section>

      {/* Snapshot */}
      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <Card title="Goal">
          Build a transportable aerosol monitoring lab that mimics permanent
          research facilities, deployed in a remote mountain environment to
          support cloud-seeding aerosol measurements.
        </Card>

        <Card title="My role">
          Sole engineer responsible for inlet redesign, container modifications,
          structural support strategy, instrument layout, and on-site
          installation/troubleshooting.
        </Card>

        <Card title="Key contributions">
          <ul className="list-disc space-y-1.5 pl-4">
            <li>
              Redesigned a 30-ft inlet to meet new scientific criteria + fit a
              shipping container.
            </li>
            <li>
              Produced fabrication-ready drawings and coordinated rapid
              machine-shop iteration.
            </li>
            <li>
              Engineered a non-concrete support solution using guy wires + custom
              interfaces.
            </li>
            <li>
              Designed container cutouts, framing, and an ergonomic instrument
              layout.
            </li>
            <li>
              Led field installation under winter mountain conditions and solved
              issues on-site.
            </li>
          </ul>
        </Card>

        <Card title="Outcomes">
          <ul className="list-disc space-y-1.5 pl-4">
            <li>
              Deployed a functioning remote aerosol facility at Powder Mountain.
            </li>
            <li>
              Installed a 30-ft inlet and structural support system without
              concrete.
            </li>
            <li>
              Integrated instruments into a serviceable, field-ready container
              layout.
            </li>
          </ul>
        </Card>
      </section>

      {/* ✅ SPACING FIX: match the “row gap” feel from Snapshot (gap-6) */}
      <section className="mt-6 grid gap-6 sm:grid-cols-2">
        <Card title="Skills demonstrated">
          <ul className="list-disc space-y-1.5 pl-4">
            <li>
              Mechanical design under real constraints
              (wind/snow/access/timeline/budget)
            </li>
            <li>Design for manufacturability + rapid vendor iteration</li>
            <li>
              Structural thinking (load paths, anchoring, stability without
              foundations)
            </li>
            <li>
              Systems integration (inlet + instruments + container modifications)
            </li>
            <li>Field execution (install leadership, troubleshooting, tool work)</li>
          </ul>
        </Card>

        <Card title="Tools">
          <ul className="list-disc space-y-1.5 pl-4">
            <li>SolidWorks (3D modeling, assemblies, GD&amp;T, drawings)</li>
            <li>Machine shop coordination (quotes, revisions, manufacturability)</li>
            <li>Unistrut + hardware BOMs</li>
            <li>
              Power tools &amp; fabrication (drilling, cutting, grinding, metal/wood
              work)
            </li>
          </ul>
        </Card>
      </section>

      <Divider />

      {/* Inlet build highlights */}
      <section className="space-y-3">
        <Kicker>Inlet build highlights</Kicker>
        <H2>Inlet design → machining drawings → finished hardware</H2>
        <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          A quick visual sequence showing concept ownership and fabrication-ready
          deliverables.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <ImageBlock
            src="/photos/manifold_design.jpg"
            alt="Inlet design CAD"
            label="Placeholder: inlet design (CAD)"
            hoverText="CAD inlet design: geometry, interfaces, and constraints for field deployment."
            aspect="9/16"
          />

          <STLViewer
            stlUrl="/models/manifold_insert.STL"
            label="Interactive: inlet STL (rotate/zoom)"
            hoverText="Interactive model: rotate/zoom the inlet assembly to inspect geometry and interfaces."
            aspect="9/16"
          />

          <ImageBlock
            src="/photos/manifold_installed.jpg"
            alt="Finished inlet hardware"
            label="Placeholder: finished inlet hardware"
            hoverText="Finished component: manufactured parts installed/validated in the field."
            aspect="9/16"
          />
        </div>

        {/* single ultrawide photo */}
        <div className="mt-6">
          <ImageBlock
            src="/photos/inlet_full_assembly_labeled.jpg"
            alt="Long panoramic project photo"
            label="Placeholder: long photo (3952×905)"
            hoverText="Replace the old machining drawings with a single panoramic image that summarizes the build/fabrication story."
            aspect="3952/905"
          />
        </div>
      </section>

      <Divider />

      {/* Lab support assembly */}
      <section className="space-y-3">
        <Kicker>Lab support assembly</Kicker>
        <H2>Design iterations → final assembly → build & install</H2>
        <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
          Support hardware evolved through multiple CAD iterations before a final
          field-ready design was built and installed.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <ImageBlock
            src="/photos/concrete_concept.jpg"
            alt="Support assembly design iteration 1 in SolidWorks"
            label="Support design — iteration 1"
            hoverText="Iteration 1: early geometry and interface concepts."
            aspect="9/16"
          />
          <ImageBlock
            src="/photos/rohn_concept.jpg"
            alt="Support assembly design iteration 2 in SolidWorks"
            label="Support design — iteration 2"
            hoverText="Iteration 2: refined load path, mounting strategy, and service access."
            aspect="9/16"
          />
          <ImageBlock
            src="/photos/wire_assembly.jpg"
            alt="Final support assembly design in SolidWorks"
            label="Final support assembly (CAD)"
            hoverText="Final design: fabrication-ready assembly with validated interfaces."
            aspect="9/16"
          />
        </div>

        <div className="pt-2">
          <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            With the overall support concept locked in, I designed the critical
            interfaces that made the system stable and serviceable in high winds:
            guy-wire anchors on the container and inlet, and a sealing/connection
            assembly that protected the inlet penetration while allowing reliable
            maintenance. Below are side-by-side comparisons of the design intent
            versus the hardware we installed in the field.
          </p>
        </div>

        <div className="mt-6 grid gap-6">
          <DesignVsBuildRow
            title="Guy-wire anchors — container interface"
            left={{
              src: "/photos/corner_anchor.jpg",
              alt: "Guy wire anchor design on container (CAD/drawing)",
              label: "Design (CAD/drawing)",
              hoverText:
                "Container anchor design: load path into container framing and hardware selection.",
              aspect: "4/5",
            }}
            right={{
              src: "/photos/corner_anchor_real.jpg",
              alt: "Installed guy wire anchor on container",
              label: "Installed hardware",
              hoverText:
                "Installed container anchor: field-fit hardware and finalized attachment points.",
              aspect: "4/5",
            }}
          />

          <DesignVsBuildRowLeftStack
            title="Guy-wire anchors — inlet interface"
            leftTop={{
              src: "/photos/guywire_sketchup.jpg",
              alt: "Guy wire anchor design on inlet (CAD/drawing)",
              label: "Design (CAD/drawing)",
              hoverText:
                "Inlet anchor design: attachment geometry and service clearance around the inlet.",
              aspect: "4/3",
            }}
            leftBottom={{
              src: "/photos/guywire_prototype.jpg",
              alt: "Second inlet anchor photo (placeholder)",
              label: "Additional view / detail",
              hoverText:
                "Swap this for your second photo (close-up detail, alternate angle, or drawing excerpt).",
              aspect: "4/3",
            }}
            right={{
              src: "/photos/inlet_guy_wire_installed.jpg",
              alt: "Installed guy wire anchor on inlet",
              label: "Installed hardware",
              hoverText:
                "Installed inlet anchor: aligned and tension-ready for turnbuckles/guy wires.",
              aspect: "9/16",
            }}
          />

          <FourPhotoGridRow
            title="Seal assembly"
            a={{
              src: "/photos/seal_exploded.jpg",
              alt: "Seal assembly design (CAD/drawing)",
              label: "Design (CAD/drawing)",
              hoverText:
                "Seal assembly design: weather protection, alignment, and maintenance access.",
              aspect: "4/3",
            }}
            b={{
              src: "/photos/seal_assembly_design.jpg",
              alt: "Seal assembly assembled onto the lab (fit-up / mock-up)",
              label: "Assembled onto lab",
              hoverText:
                "Fit-up/assembly: seal assembly mounted to the container interface before field install.",
              aspect: "4/3",
            }}
            c={{
              src: "/photos/install_seal3.jpg",
              alt: "Seal assembly being installed",
              label: "Installing",
              hoverText:
                "Installation: aligning the penetration interface and fastening/sealing in the field.",
              aspect: "4/3",
            }}
            d={{
              src: "/photos/install_seal2.jpg",
              alt: "Seal assembly installed",
              label: "Installed",
              hoverText:
                "Installed seal assembly: final fit-up showing weather sealing and clean routing.",
              aspect: "4/3",
            }}
          />
        </div>

        {/* Heated inlet concept */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-2">
            <Kicker>Optional add-on</Kicker>
            <H2>Standards-driven inlet heating concept</H2>
            <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
              Designed a future inlet heating approach aligned with WMO-GAW and
              ACTRIS/EUSAAR guidance for sampling integrity (condensation
              control). Not deployed initially due to lead times, but ready for
              future upgrades.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <ImageBlock
              src="/photos/heated_inlet.jpg"
              alt="Inlet heating concept — view 1"
              label="Heating concept — view 1"
              hoverText="Concept view 1: heat trace routing + insulation strategy."
              aspect="9/16"
            />
            <ImageBlock
              src="/photos/heated_inlet_head.jpg"
              alt="Inlet heating concept — view 2"
              label="Heating concept — view 2"
              hoverText="Concept view 2: interface details + control/strain relief planning."
              aspect="9/16"
            />
          </div>
        </div>

        {/* Field installation */}
        <div className="mt-12 space-y-3">
          <Kicker>Field installation</Kicker>
          <H2>On-site build, alignment, and commissioning</H2>

          <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
            Installation required rapid problem solving in winter conditions:
            positioning the inlet, aligning interfaces, tensioning guy wires,
            validating stability, and ensuring the system remained serviceable
            for instrument access and long-duration operations.
          </p>

          <div className="mt-6 space-y-12">
            {/* Group 1 */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
                The exterior install happened in two phases: first getting the
                inlet set through the roof penetration and aligned to the
                container interface, then finishing the rooftop routing and
                securing the system into its final operating configuration.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <ImageBlock
                  src="/photos/installed_inlet.jpg"
                  alt="Inlet install above the roof (installation phase)"
                  label="Roof install — alignment & initial set"
                  hoverText="Setting the inlet above the roof and dialing in alignment before final fastening/tensioning."
                  aspect="9/16"
                />
                <ImageBlock
                  src="/photos/inlet_exterior_done.jpg"
                  alt="Finished inlet above the roof (commissioned state)"
                  label="Roof install — finished/commissioned"
                  hoverText="End-state above-roof configuration after fastening, tensioning, and readiness checks."
                  aspect="9/16"
                />
              </div>
            </div>

            {/* Group 2 */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
                In parallel, the shipping container was converted into a
                serviceable lab space: cutting and framing penetrations, routing
                the inlet through the interior, and integrating instruments so
                the system could run unattended while still being easy to
                maintain on-site.
              </p>

              <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ImageBlock
                      src="/photos/original_container.jpg"
                      alt="Original shipping container before modifications"
                      label="Container — original"
                      hoverText="Baseline state prior to cutouts, framing, and instrument layout work."
                      aspect="5/4"
                    />
                    <ImageBlock
                      src="/photos/trailer_moving.jpg"
                      alt="Shipping container being transported to the site"
                      label="Container — transport"
                      hoverText="Logistics: moving the container lab to the field site for build-out and deployment."
                      aspect="5/4"
                    />
                    <ImageBlock
                      src="/photos/trailer_construction.jpg"
                      alt="Container under construction / modifications in progress"
                      label="Container — under construction"
                      hoverText="Build phase: framing, cutouts, routing, and interior layout integration."
                      aspect="5/4"
                    />
                    <ImageBlock
                      src="/photos/inlet_interior_done.jpg"
                      alt="Instruments installed inside the container lab"
                      label="Container — instruments installed"
                      hoverText="Final interior layout: instruments mounted and wired for serviceable, long-term operation."
                      aspect="5/4"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Group 3 */}
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="space-y-3">
                <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
                  Final commissioning focused on integration details: confirming
                  clearances, verifying stable mounting, validating flow paths,
                  and ensuring the manifold and instruments were positioned for
                  both performance and fast troubleshooting during winter field
                  visits.
                </p>
                <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
                  This last view captures the “ready for operations”
                  state—manifold placement relative to an instrument, with
                  service access preserved and routing kept clean.
                </p>
              </div>

              <ImageBlock
                src="/photos/manifold_interior.jpg"
                alt="Manifold installed next to an instrument (integration detail)"
                label="Integration detail — manifold adjacent to instrument"
                hoverText="Commissioned interior detail showing manifold placement and instrument adjacency for service access."
                aspect="4/5"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <ImageBlock
              src="/photos/shoveling.jpg"
              alt="Team assembling support structure"
              label="Support assembly build — photo 1"
              hoverText="Build phase: assembling supports and hardware in the field."
              aspect="4/5"
            />
            <ImageBlock
              src="/photos/building_support.jpg"
              alt="Support structure assembly detail"
              label="Support assembly build — photo 2"
              hoverText="Hardware detail: alignment, fasteners, and quick iteration on-site."
              aspect="4/5"
            />
            <ImageBlock
              src="/photos/wiring.jpg"
              alt="Support structure installed"
              label="Support assembly build — photo 3"
              hoverText="Installed state: support assembly integrated and field-validated."
              aspect="4/5"
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* References */}
      <section className="space-y-3">
        <Kicker>References</Kicker>
        <H2>Partners, facilities &amp; standards</H2>

        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
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
              href="https://www.rainmaker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 hover:text-blue-600"
            >
              Rainmaker Technology
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
              href="https://community.wmo.int/en/programmes/global-atmosphere-watch-programme"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 hover:text-blue-600"
            >
              WMO-GAW &amp; EUSAAR/ACTRIS Aerosol Inlet Guidelines
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

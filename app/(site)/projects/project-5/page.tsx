import Image from "next/image";

export default function Project5Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        CNC Plotter
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-500">
        Mechatronics & Prototyping
      </p>

      <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
        <Image
          src="/photos/cnc-plotter.jpg"
          alt="CNC Plotter"
          fill
          className="object-cover"
        />
      </div>

      <article className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          I built a desktop CNC plotter to explore motion control, electronics, and digital fabrication.
        </p>
        <p>
          The system uses stepper motors, belt drives, and a microcontroller to translate vector drawings into precise physical motion.
        </p>
        <p>
          This project connected CAD, firmware, and mechanical hardware into a single working machine and taught me about calibration, backlash, and system tuning.
        </p>
      </article>
    </main>
  );
}

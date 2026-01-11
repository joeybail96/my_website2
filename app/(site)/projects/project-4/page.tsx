import Image from "next/image";

export default function Project4Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Subaru Camper
      </h1>
      <p className="mt-2 text-sm font-medium text-zinc-500">
        Mechanical Design & Fabrication
      </p>

      <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
        <Image
          src="/photos/subaru-camper.jpg"
          alt="Subaru Camper"
          fill
          className="object-cover"
        />
      </div>

      <article className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          I designed and built a modular camper system inside my Subaru for long road trips and outdoor travel.
        </p>
        <p>
          The build included a raised sleeping platform, integrated storage, and mounting hardware designed to be removable and vehicle-safe. Weight, vibration, and durability were key design constraints.
        </p>
        <p>
          This project combined CAD, fabrication, and real-world testing into a functional mobile living space that has been used for extended trips and field travel.
        </p>
      </article>
    </main>
  );
}

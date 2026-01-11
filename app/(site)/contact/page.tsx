export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        Contact
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
        If you’d like to reach out about roles, collaborations, or any of the work on this
        site, the form below will send me an email.
      </p>

      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
        <form
          action="https://formspree.io/f/REPLACE_ME"
          method="POST"
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              required
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-600"
            />
          </div>

          {/* Optional: redirects to a thank-you page you can create */}
          {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/contact/thanks" /> */}

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Send message
          </button>

          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            (Replace the Formspree URL with your own form endpoint.)
          </p>
        </form>
      </div>
    </main>
  );
}

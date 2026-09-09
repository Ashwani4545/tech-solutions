import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center py-32 text-center">
      <p className="font-display text-6xl font-semibold text-emerald">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink dark:text-white">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-2 text-slate-soft">The page you&apos;re looking for was moved or never existed.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-emerald px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-dark"
      >
        Back to home
      </Link>
    </section>
  );
}

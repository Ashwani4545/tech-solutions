import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center py-40 text-center">
      <p className="font-display text-6xl font-semibold text-cyan">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-white">This page doesn&apos;t exist.</h1>
      <p className="mt-2 text-ink-muted">The page you&apos;re looking for was moved or never existed.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-base transition-all hover:bg-cyan-bright"
      >
        Back to home
      </Link>
    </section>
  );
}

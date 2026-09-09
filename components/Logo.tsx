export function InfinityMark({ className = "h-7 w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F9D6E" />
          <stop offset="50%" stopColor="#2E6BE6" />
          <stop offset="100%" stopColor="#0F9D6E" />
        </linearGradient>
      </defs>
      <path
        d="M15 15C15 8 8 4 4 10C0 16 4 26 15 15C26 4 30 16 26 22C22 28 15 22 15 15Z"
        stroke="url(#infinityGradient)"
        strokeWidth="2"
      />
      <path
        d="M45 15C45 22 52 26 56 20C60 14 56 4 45 15C34 26 30 14 34 8C38 2 45 8 45 15Z"
        stroke="url(#infinityGradient)"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <InfinityMark />
      <span className="font-display text-lg font-semibold tracking-tight text-ink dark:text-white">
        Infinity Tech Nexus
      </span>
    </span>
  );
}

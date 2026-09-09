export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2L21 7V17L12 22L3 17V7L12 2Z"
          stroke="#22D3EE"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M12 8V16M8.5 10L12 8L15.5 10M8.5 14L12 16L15.5 14" stroke="#22D3EE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
        Infinity Techies
      </span>
    </span>
  );
}

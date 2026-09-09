export function HeroInfinity() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="h-auto w-full max-w-lg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F9D6E" />
          <stop offset="100%" stopColor="#2E6BE6" />
        </linearGradient>
      </defs>
      <path
        d="M100 100C100 60 60 30 30 70C0 110 30 170 100 100C170 30 200 110 170 150C140 190 100 150 100 100Z"
        stroke="url(#heroGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={300}
        strokeDasharray={300}
        className="animate-infinity-draw"
      />
      <path
        d="M300 100C300 150 340 190 370 150C400 110 370 30 300 100C230 170 200 90 230 50C260 10 300 50 300 100Z"
        stroke="url(#heroGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={300}
        strokeDasharray={300}
        className="animate-infinity-draw"
        style={{ animationDelay: "0.3s" }}
      />
    </svg>
  );
}

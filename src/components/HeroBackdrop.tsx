export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-bg-glow absolute inset-0" />
      <div className="hero-grid-pattern absolute inset-0" />

      <div className="hero-vectors absolute inset-0">
        <svg
          className="hero-deco hero-deco--blob-a"
          viewBox="0 0 240 240"
          fill="none"
        >
          <path
            className="hero-deco-blob"
            d="M58 128c-28-36-8-88 42-98 34-7 72 12 88 44 18 36-2 84-44 98-36 12-74-2-86-44Z"
          />
        </svg>

        <svg
          className="hero-deco hero-deco--blob-b"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            className="hero-deco-blob hero-deco-blob--soft"
            d="M42 104c-18-30 6-68 46-74 28-4 56 14 64 42 10 34-14 66-48 72-30 5-54-16-62-40Z"
          />
        </svg>

        <svg
          className="hero-deco hero-deco--accent"
          viewBox="0 0 180 180"
          fill="none"
        >
          <circle className="hero-deco-ring" cx="90" cy="90" r="62" />
          <circle
            className="hero-deco-ring hero-deco-ring--inner"
            cx="90"
            cy="90"
            r="38"
          />
          <path
            className="hero-deco-spark"
            d="M90 24v28M90 128v28M24 90h28M128 90h28"
          />
        </svg>

        <span className="hero-deco-dot hero-deco-dot--1" />
        <span className="hero-deco-dot hero-deco-dot--2" />
        <span className="hero-deco-dot hero-deco-dot--3" />
        <span className="hero-deco-plus hero-deco-plus--1">+</span>
        <span className="hero-deco-plus hero-deco-plus--2">+</span>
      </div>
    </div>
  );
}

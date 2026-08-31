export function BackgroundAnimation() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="bg-grid absolute inset-0 opacity-[0.35]" />
      <div className="bg-ambient absolute inset-0" />
      <div className="bg-ambient-pulse absolute inset-0" />
      <div className="bg-vignette absolute inset-0" />
    </div>
  );
}

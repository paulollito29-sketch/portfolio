export default function BackgroundScroll() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Flat technical grid pattern */}
      <div className="absolute inset-0 bg-flat-grid opacity-70" />
      
      {/* Subtle top subtle border separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-zinc-800" />
    </div>
  );
}

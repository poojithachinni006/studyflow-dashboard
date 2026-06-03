export default function SkeletonCard() {
  return (
    <div className="animate-pulse bg-zinc-900 border border-zinc-800 rounded-3xl p-6 h-40">
      <div className="h-5 w-24 bg-zinc-700 rounded mb-4" />
      <div className="h-4 w-32 bg-zinc-700 rounded mb-4" />
      <div className="h-2 w-full bg-zinc-700 rounded" />
    </div>
  );
}
import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="grid lg:grid-cols-3 gap-5">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </main>
  );
}
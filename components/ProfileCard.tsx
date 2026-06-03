export default function ProfileCard() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center font-bold">
          PS
        </div>

        <div>
          <h3 className="font-semibold">
            Poojitha
          </h3>

          <p className="text-sm text-zinc-500">
            View Profile
          </p>
        </div>
      </div>
    </div>
  );
}
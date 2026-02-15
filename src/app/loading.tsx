export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-swell-slate-700 border-t-accent" />
        <span className="text-sm text-swell-slate-400">Loading...</span>
      </div>
    </div>
  );
}

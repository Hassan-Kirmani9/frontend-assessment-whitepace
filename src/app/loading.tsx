export default function Loading() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-ink-900/5 bg-paper/80">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <div className="h-7 w-32 animate-pulse rounded-md bg-ink-900/10" />
          <div className="hidden items-center gap-6 lg:flex">
            <div className="h-4 w-16 animate-pulse rounded bg-ink-900/10" />
            <div className="h-4 w-16 animate-pulse rounded bg-ink-900/10" />
            <div className="h-4 w-16 animate-pulse rounded bg-ink-900/10" />
            <div className="h-4 w-16 animate-pulse rounded bg-ink-900/10" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-20 animate-pulse rounded-lg bg-ink-900/10" />
            <div className="h-9 w-32 animate-pulse rounded-lg bg-ink-900/10" />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pt-[120px] sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-[160px]">
        <div className="flex flex-col gap-4">
          <div className="h-12 w-full max-w-md animate-pulse rounded-lg bg-ink-900/10" />
          <div className="h-12 w-3/4 max-w-sm animate-pulse rounded-lg bg-ink-900/10" />
          <div className="mt-4 h-4 w-full max-w-lg animate-pulse rounded bg-ink-900/10" />
          <div className="h-4 w-5/6 max-w-lg animate-pulse rounded bg-ink-900/10" />
          <div className="mt-6 h-12 w-44 animate-pulse rounded-lg bg-ink-900/10" />
        </div>
        <div className="aspect-[4/3] w-full animate-pulse rounded-2xl bg-ink-900/10" />
      </div>

      <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-2xl bg-ink-900/10" />
        ))}
      </div>
    </div>
  );
}
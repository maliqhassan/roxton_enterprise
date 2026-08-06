export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div role="status" className="flex items-center justify-center">
        <div
          aria-hidden="true"
          className="border-border border-t-primary size-8 animate-spin rounded-full border-2"
        />
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}

interface CategoryListProps {
  items: string[];
  /** Names the list for assistive tech, since the bullets carry no label. */
  label: string;
  /** Show at most this many, then summarise the remainder. */
  limit?: number;
}

/**
 * The products/services within a category.
 *
 * Only a sample is shown — the full set would triple the card's height, and
 * the card links through to the category anyway. The remainder is stated as a
 * count rather than silently dropped, so the list never implies it is
 * exhaustive.
 *
 * A real <ul> rather than styled divs, so screen readers announce the count.
 */
export function CategoryList({ items, label, limit }: CategoryListProps) {
  const shown = limit ? items.slice(0, limit) : items;
  const remaining = items.length - shown.length;

  return (
    <ul aria-label={label} className="mt-4 space-y-1.5">
      {shown.map((item) => (
        <li key={item} className="text-body-sm text-muted-foreground flex gap-2.5">
          <span
            aria-hidden="true"
            className="bg-accent/60 mt-[0.55em] size-1 shrink-0 rounded-full"
          />
          {item}
        </li>
      ))}
      {remaining > 0 && (
        <li className="text-body-sm text-muted-foreground/70 pl-[0.875rem] italic">
          +{remaining} more
        </li>
      )}
    </ul>
  );
}

import type { ArtworkStatus } from "@/types/artwork";

const statusStyles: Record<ArtworkStatus, string> = {
  "В наличии": "border-[var(--border-strong)] text-[var(--foreground)]",
  Забронировано: "border-[var(--border)] text-[var(--page-accent)]",
  Продано: "border-[var(--border)] bg-[var(--background)] text-[var(--muted)]",
};

type StatusBadgeProps = {
  status: ArtworkStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`shrink-0 border px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
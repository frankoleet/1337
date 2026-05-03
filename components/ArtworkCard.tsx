import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/types/artwork";
import { StatusBadge } from "./StatusBadge";

type ArtworkCardProps = {
  artwork: Artwork;
  variant?: "default" | "compact";
};

export function ArtworkCard({
  artwork,
  variant = "default",
}: ArtworkCardProps) {
  const formattedPrice = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: artwork.currency,
    maximumFractionDigits: 0,
  }).format(artwork.price);

  const isCompact = variant === "compact";
  const imageHeight = isCompact ? "h-36 sm:h-40" : "h-64";
  const cardHeight = isCompact ? "min-h-[310px]" : "min-h-[420px]";
  const hasImageSource = artwork.image.startsWith("/");

  return (
    <Link
      href={`/artwork/${artwork.slug}`}
      className={`${cardHeight} group flex h-full flex-col overflow-hidden border border-[var(--border)] bg-[var(--card)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:bg-[var(--card-hover)]`}
      aria-label={`Открыть работу ${artwork.title}`}
    >
      <div
        className={`${imageHeight} relative w-full shrink-0 overflow-hidden border-b border-[var(--border)]`}
        aria-hidden="true"
      >
        {hasImageSource ? (
          <Image
            src={artwork.image}
            alt=""
            fill
            sizes={isCompact ? "280px" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover"
          />
        ) : (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ background: artwork.image, backgroundSize: "cover" }}
          />
        )}
      </div>

      <div className={`flex flex-1 flex-col ${isCompact ? "p-4" : "p-6"}`}>
        <div
          className={`${isCompact ? "mb-6" : "mb-8"} flex items-start justify-between gap-4`}
        >
          <h3
            className={`${isCompact ? "text-sm" : "text-lg"} font-medium text-[var(--foreground)]`}
          >
            {artwork.title}
          </h3>
          <StatusBadge status={artwork.status} />
        </div>

        <dl
          className={`${isCompact ? "gap-2.5 pt-4 text-xs" : "gap-4 pt-5 text-sm"} mt-auto grid border-t border-[var(--border)]`}
        >
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Техника</dt>
            <dd className="text-right text-[var(--foreground)]">
              {artwork.technique}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Цена</dt>
            <dd className="text-right font-medium text-[var(--foreground)]">
              {formattedPrice}
            </dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}

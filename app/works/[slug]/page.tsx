import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StatusBadge } from "@/components/StatusBadge";
import { artworks } from "@/data/artworks";

type ArtworkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

function findArtwork(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArtworkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork = findArtwork(slug);

  if (!artwork) {
    return {
      title: "Работа не найдена | Artbufin",
    };
  }

  return {
    title: `${artwork.title} | Artbufin`,
    description: artwork.description,
  };
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await params;
  const artwork = findArtwork(slug);

  if (!artwork) {
    notFound();
  }

  const formattedPrice = formatPrice(artwork.price, artwork.currency);
  const hasImageSource = artwork.image.startsWith("/");

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main>
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-20">
            <div className="relative min-h-[440px] overflow-hidden border border-[var(--border)] sm:min-h-[620px]">
              {hasImageSource ? (
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className="h-full min-h-[440px] w-full bg-cover bg-center sm:min-h-[620px]"
                  style={{ background: artwork.image, backgroundSize: "cover" }}
                  aria-label={`${artwork.title}: изображение работы`}
                />
              )}
            </div>

            <div className="flex flex-col">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                    Работа Artbufin
                  </p>
                  <h1 className="text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
                    {artwork.title}
                  </h1>
                </div>
                <StatusBadge status={artwork.status} />
              </div>

              <dl className="grid gap-0 border border-[var(--border)] bg-[var(--card)] text-sm">
                <div className="flex items-center justify-between gap-5 border-b border-[var(--border)] px-5 py-4">
                  <dt className="text-[var(--muted)]">Техника</dt>
                  <dd className="text-right text-[var(--foreground)]">
                    {artwork.technique}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-5 border-b border-[var(--border)] px-5 py-4">
                  <dt className="text-[var(--muted)]">Размер</dt>
                  <dd className="text-right text-[var(--foreground)]">
                    {artwork.size}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-5 px-5 py-4">
                  <dt className="text-[var(--muted)]">Цена</dt>
                  <dd className="text-right font-medium text-[var(--foreground)]">
                    {formattedPrice}
                  </dd>
                </div>
              </dl>

              <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)]">
                {artwork.description}
              </p>

              <dl className="mt-8 grid border border-[var(--border)] bg-[var(--card)] text-sm sm:grid-cols-3">
                <div className="border-b border-[var(--border)] px-4 py-4 sm:border-b-0 sm:border-r">
                  <dt className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Материал
                  </dt>
                  <dd className="text-[var(--foreground)]">
                    {artwork.material}
                  </dd>
                </div>
                <div className="border-b border-[var(--border)] px-4 py-4 sm:border-b-0 sm:border-r">
                  <dt className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Год
                  </dt>
                  <dd className="text-[var(--foreground)]">{artwork.year}</dd>
                </div>
                <div className="px-4 py-4">
                  <dt className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    Статус
                  </dt>
                  <dd className="text-[var(--foreground)]">
                    {artwork.status}
                  </dd>
                </div>
              </dl>

              <a
                href="mailto:studio@ris.art"
                className="mt-8 inline-flex h-12 w-full items-center justify-center border border-[var(--button)] bg-[var(--button)] px-6 text-sm font-medium text-[var(--button-text)] transition-opacity hover:opacity-85 sm:w-auto"
              >
                Забронировать
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

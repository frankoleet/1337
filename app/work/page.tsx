import type { Metadata } from "next";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { artworks } from "@/data/artworks";

export const metadata: Metadata = {
  title: "Все работы | Artbufin",
  description:
    "Авторские картины и рисунки в единственном экземпляре. Каталог доступных работ Artbufin.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main>
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                КАТАЛОГ
              </p>
              <h1 className="text-5xl font-semibold leading-tight text-[var(--foreground)] sm:text-6xl">
                Все работы
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Авторские картины и рисунки в единственном экземпляре. Выберите
                работу и откройте карточку, чтобы посмотреть детали.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
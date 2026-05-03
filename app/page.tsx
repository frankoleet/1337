import { ArtworkCard } from "@/components/ArtworkCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { artworks } from "@/data/artworks";

const featuredArtworks = artworks.slice(0, 3);
const previewArtworks = artworks.slice(3, 6);

const steps = [
  {
    title: "Выберите работу",
    text: "Посмотрите каталог и выберите оригинальную работу.",
  },
  {
    title: "Оставьте заявку",
    text: "Напишите нам, какую работу хотите забронировать.",
  },
  {
    title: "Договоритесь о доставке",
    text: "Мы уточним детали, оплату и способ доставки.",
  },
];

const heroCardPositions = [
  "lg:absolute lg:left-0 lg:top-4 lg:w-[58%]",
  "lg:absolute lg:right-0 lg:top-24 lg:w-[52%]",
  "lg:absolute lg:bottom-0 lg:left-[18%] lg:w-[56%]",
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main>
        <section id="about" className="border-b border-[var(--border)]">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-6 text-xs font-medium tracking-[0.28em] text-[var(--muted)]">
                ARTBUFIN РИСУЮ ДЛЯ ВАС
              </p>
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--foreground)] sm:text-7xl lg:text-8xl">
                Картины, которые существуют вживую
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">
                Авторские картины и рисунки, созданные вручную. Каждая работа
                существует в одном экземпляре и доступна для заказа.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#works"
                  className="inline-flex h-12 items-center justify-center border border-[var(--button)] bg-[var(--button)] px-6 text-sm font-medium text-[var(--button-text)] transition-opacity hover:opacity-85"
                >
                  Посмотреть работы
                </a>
                <a
                  href="tg://resolve?domain=ARTBUFIN"
                  className="inline-flex h-12 items-center justify-center border border-[var(--border-strong)] px-6 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)] hover:bg-[var(--card)]"
                >
                  Написать художнику
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:relative lg:block lg:min-h-[620px]">
              {featuredArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className={`${heroCardPositions[index]} shadow-[0_24px_80px_rgba(0,0,0,0.18)]`}
                >
                  <ArtworkCard artwork={artwork} variant="compact" />
                </div>
              ))}
            </div>

            <div className="grid border-y border-[var(--border)] text-sm text-[var(--muted)] sm:grid-cols-3 lg:col-span-2">
              <div className="border-b border-[var(--border)] py-5 sm:border-b-0 sm:border-r sm:pr-6">
                <span className="block text-[var(--foreground)]">
                  Один экземпляр
                </span>
                Без копий и повторов.
              </div>
              <div className="border-b border-[var(--border)] py-5 sm:border-b-0 sm:border-r sm:px-6">
                <span className="block text-[var(--foreground)]">
                  Живопись и графика
                </span>
                Масло, бумага, пастель и смешанные техники.
              </div>
              <div className="py-5 sm:pl-6">
                <span className="block text-[var(--foreground)]">
                  Можно забронировать
                </span>
                Сначала уточняем детали, потом подтверждаем оплату и доставку.
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                  Готовые работы
                </p>
                <h2 className="text-3xl font-semibold tracking-normal text-[var(--foreground)] sm:text-4xl">
                  Картины в наличии
                </h2>
              </div>
              <a
                href="/work"
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                Все работы
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {featuredArtworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>

            {previewArtworks.length > 0 && (
              <div className="relative mt-5 overflow-hidden">
                <div className="grid gap-5 opacity-45 blur-[0.2px] md:grid-cols-3">
                  {previewArtworks.map((artwork) => (
                    <div key={artwork.id} className="scale-[0.97]">
                      <ArtworkCard artwork={artwork} />
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent" />
              </div>
            )}

            <div className="mt-10 flex justify-center">
              <a
                href="/work"
                className="inline-flex h-12 items-center justify-center border border-[var(--border-strong)] px-6 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)] hover:bg-[var(--card)]"
              >
                Смотреть все работы
              </a>
            </div>
          </div>
        </section>

        <section id="delivery" className="border-b border-[var(--border)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-24">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                Покупка картины
              </p>
              <h2 className="text-3xl font-semibold tracking-normal text-[var(--foreground)]">
                Как купить картину
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="border border-[var(--border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--card-hover)]"
                >
                  <span className="mb-10 block text-sm text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-3 text-base font-medium text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
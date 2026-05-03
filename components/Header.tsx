import Link from "next/link";

const navigation = [
  { label: "Работы", href: "/work" },
  { label: "Обо мне", href: "/#about" },
  { label: "Доставка", href: "/#delivery" },
  { label: "Контакты", href: "tg://resolve?domain=ARTBUFIN" },
];

export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-[0.18em] text-[var(--foreground)]"
            aria-label="Главная страница Artbufin"
          >
            Artbufin
          </Link>
          <a
            href="tg://resolve?domain=ARTBUFIN"
            className="inline-flex h-10 items-center justify-center border border-[var(--border-strong)] px-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)] md:hidden"
          >
            Забронировать
          </a>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:flex-1 md:justify-end md:gap-10">
          <nav aria-label="Основная навигация">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="tg://resolve?domain=ARTBUFIN"
            className="hidden h-10 items-center justify-center border border-[var(--border-strong)] px-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground)] hover:bg-[var(--card)] md:inline-flex"
          >
            Забронировать
          </a>
        </div>
      </div>
    </header>
  );
}
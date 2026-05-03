const links = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Telegram", href: "tg://resolve?domain=ARTBUFIN" },
];

export function Footer() {
  return (
    <footer>
      <div className="mx-auto grid max-w-7xl justify-items-center gap-10 px-6 py-10 text-center sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:justify-items-stretch md:text-left lg:px-10">
        <div>
          <p className="mb-3 text-lg font-semibold tracking-[0.18em] text-[var(--foreground)]">
            Artbufin
          </p>
          <p className="text-sm text-[var(--muted)]">
            Авторские картины и рисунки в единственном экземпляре.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 text-center md:items-end md:text-right">
          <nav aria-label="Ссылки в подвале">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[var(--muted)] md:justify-end">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-[var(--muted)]">
            2025 Artbufin. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
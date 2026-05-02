const links = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Telegram", href: "https://telegram.org" },
  { label: "Email", href: "mailto:studio@ris.art" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--background)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
        <div>
          <p className="mb-3 text-lg font-semibold tracking-[0.18em] text-[var(--foreground)]">
            Artbufin
          </p>
          <p className="text-sm text-[var(--muted)]">
            Авторские картины и рисунки в единственном экземпляре.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <nav aria-label="Ссылки в подвале">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
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
            {new Date().getFullYear()} Artbufin. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

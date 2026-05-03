"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import type { Artwork } from "@/types/artwork";

type ArtworkLightboxProps = {
  artwork: Artwork;
  formattedPrice: string;
};

export function ArtworkLightbox({
  artwork,
  formattedPrice,
}: ArtworkLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const hasImageSource = artwork.image.startsWith("/");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative min-h-[440px] w-full cursor-zoom-in overflow-hidden border border-[var(--border)] bg-[var(--card)] text-left transition-colors hover:border-[var(--border-strong)] sm:min-h-[620px]"
        aria-label={`Открыть изображение работы ${artwork.title}`}
      >
        {hasImageSource ? (
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-contain"
          />
        ) : (
          <div
            className="h-full min-h-[440px] w-full bg-cover bg-center sm:min-h-[620px]"
            style={{ background: artwork.image, backgroundSize: "cover" }}
            aria-label={`${artwork.title}: изображение работы`}
            role="img"
          />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[80] bg-[var(--background)]/95 px-4 py-4 backdrop-blur-sm sm:px-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={() => setIsOpen(false)}
        >
          <button
            type="button"
            aria-label="Закрыть просмотр"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-[82] h-10 border border-[var(--border-strong)] bg-[var(--card)] px-4 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--foreground)] sm:right-5 sm:top-4"
          >
            Закрыть
          </button>

          <div
            className="mx-auto grid h-full max-w-[1480px] grid-rows-[minmax(0,1fr)_auto] gap-5 pt-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:grid-rows-1 lg:pt-0"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[50vh] overflow-hidden bg-[var(--card)] lg:min-h-0">
              {hasImageSource ? (
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  sizes="(min-width: 1024px) calc(100vw - 380px), 100vw"
                  className="object-contain"
                />
              ) : (
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ background: artwork.image, backgroundSize: "cover" }}
                  aria-label={`${artwork.title}: изображение работы`}
                  role="img"
                />
              )}
            </div>

            <aside className="max-h-[34vh] overflow-y-auto bg-[var(--background)]/80 p-1 text-sm text-[var(--muted)] lg:flex lg:max-h-none lg:self-stretch lg:items-center lg:overflow-visible lg:p-0 lg:pl-2">
              <div className="w-full">
                <h2
                  id={titleId}
                  className="mb-6 text-2xl font-semibold leading-tight text-[var(--foreground)]"
                >
                  {artwork.title}
                </h2>

                <p className="mb-8 leading-6">{artwork.description}</p>

                <dl className="grid gap-5">
                  <div className="flex justify-between gap-6">
                    <dt>Техника</dt>
                    <dd className="max-w-[58%] text-right font-medium text-[var(--foreground)]">
                      {artwork.technique}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt>Размер</dt>
                    <dd className="max-w-[58%] text-right font-medium text-[var(--foreground)]">
                      {artwork.size}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt>Цена</dt>
                    <dd className="max-w-[58%] text-right font-medium text-[var(--foreground)]">
                      {formattedPrice}
                    </dd>
                  </div>
                </dl>

                <a
                  href="tg://resolve?domain=ARTBUFIN"
                  className="mt-8 inline-flex h-12 w-full items-center justify-center border border-[var(--button)] bg-[var(--button)] px-6 text-sm font-medium text-[var(--button-text)] transition-opacity hover:opacity-85"
                >
                  Забронировать
                </a>
              </div>
            </aside>
          </div>
        </div>
      )}
    </>
  );
}

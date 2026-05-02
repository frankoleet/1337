import type { Artwork } from "@/types/artwork";

export const artworks: Artwork[] = [
  {
    id: "art-001",
    slug: "quiet-line-study",
    title: "Тихая линия",
    description:
      "Сдержанная графическая композиция с мягким пространством и тонким ритмом линий.",
    price: 280,
    currency: "USD",
    size: "21 × 29.7 см",
    technique: "Графит, бумага",
    material: "Хлопковая бумага",
    year: 2026,
    status: "В наличии",
    image:
      "linear-gradient(135deg, #f8fafc 0%, #f8fafc 48%, #d4d4d8 49%, #f4f4f5 51%, #ffffff 100%)",
  },
  {
    id: "art-002",
    slug: "folded-shadow",
    title: "Сложенная тень",
    description:
      "Работа тушью и размывкой, построенная вокруг одного спокойного тонального поля.",
    price: 340,
    currency: "USD",
    size: "30 × 40 см",
    technique: "Тушь, бумага",
    material: "Бумага холодного прессования",
    year: 2026,
    status: "Забронировано",
    image:
      "radial-gradient(circle at 34% 28%, #e4e4e7 0%, #f8fafc 22%, transparent 23%), linear-gradient(160deg, #ffffff 0%, #f4f4f5 62%, #d4d4d8 100%)",
  },
  {
    id: "art-003",
    slug: "paper-horizon",
    title: "Бумажный горизонт",
    description:
      "Минималистичная работа углем с низкой, ровной линией на теплой фактурной бумаге.",
    price: 410,
    currency: "USD",
    size: "42 × 29.7 см",
    technique: "Уголь, бумага",
    material: "Фактурная бумага",
    year: 2025,
    status: "В наличии",
    image:
      "linear-gradient(180deg, #ffffff 0%, #fafafa 54%, #71717a 55%, #e4e4e7 56%, #f8fafc 100%)",
  },
  {
    id: "art-004",
    slug: "thin-room",
    title: "Тонкая комната",
    description:
      "Лаконичная архитектурная графика, собранная из точных линий и пауз.",
    price: 360,
    currency: "USD",
    size: "24 × 32 см",
    technique: "Тушь, бумага",
    material: "Архивная бумага",
    year: 2025,
    status: "Продано",
    image:
      "linear-gradient(90deg, transparent 0 19%, #a1a1aa 19.2% 19.6%, transparent 19.8% 100%), linear-gradient(180deg, #ffffff 0%, #f4f4f5 100%)",
  },
  {
    id: "art-005",
    slug: "grey-margin",
    title: "Серое поле",
    description:
      "Пастельная работа с мягкими отметками у края и спокойным центральным пространством.",
    price: 300,
    currency: "USD",
    size: "18 × 24 см",
    technique: "Пастель, бумага",
    material: "Плотная бумага",
    year: 2026,
    status: "В наличии",
    image:
      "linear-gradient(90deg, #d4d4d8 0%, #f8fafc 12%, #ffffff 50%, #f4f4f5 88%, #a1a1aa 100%)",
  },
  {
    id: "art-006",
    slug: "single-mark",
    title: "Один жест",
    description:
      "Камерная работа в смешанной технике, сосредоточенная вокруг одного плотного темного жеста.",
    price: 260,
    currency: "USD",
    size: "20 × 20 см",
    technique: "Смешанная техника",
    material: "Бумага ручной работы",
    year: 2025,
    status: "В наличии",
    image:
      "radial-gradient(ellipse at 52% 48%, #18181b 0%, #27272a 7%, transparent 8%), linear-gradient(135deg, #ffffff 0%, #f4f4f5 100%)",
  },
];

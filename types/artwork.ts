export type ArtworkStatus = "В наличии" | "Забронировано" | "Продано";

export type Artwork = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  currency: "RUB";
  size: string;
  technique: string;
  material: string;
  year: number;
  status: ArtworkStatus;
  image: string;
};

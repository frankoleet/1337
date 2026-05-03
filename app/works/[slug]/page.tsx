import { redirect } from "next/navigation";
import { artworks } from "@/data/artworks";

type LegacyArtworkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export default async function LegacyArtworkPage({
  params,
}: LegacyArtworkPageProps) {
  const { slug } = await params;

  redirect(`/artwork/${slug}`);
}
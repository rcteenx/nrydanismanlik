import { acilisGalerisi } from "@/content/data/galeri";
import ImageGallery from "@/components/sections/gallery/images";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "FOTOĞRAF GALERİSİ",
  };
}

export default function StaticPage() {
  return (
    <>
      <ImageGallery galeri={acilisGalerisi} />

      <SocialMedia />
    </>
  );
}

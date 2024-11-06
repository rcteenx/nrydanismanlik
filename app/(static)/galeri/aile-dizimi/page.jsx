import { aileDizimiGalerisi } from "@/content/data/galeri";
import SocialMedia from "@/components/sections/common/z-contact";

import ImageGallery from "@/components/sections/gallery/images";

export async function generateMetadata() {
  return {
    title: "FOTOĞRAF GALERİSİ",
  };
}

export default function StaticPage() {
  return (
    <>
      <ImageGallery galeri={aileDizimiGalerisi} />

      <SocialMedia />
    </>
  );
}

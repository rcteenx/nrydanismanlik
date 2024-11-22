import {
  acilisGalerisi,
  aileDizimiGalerisi,
  seansGalerisi,
} from "@/content/data/galeri";
import SocialMedia from "@/components/sections/common/z-contact";

import ImageGallery from "@/components/sections/gallery/images";

export async function generateMetadata() {
  return {
    title: "Fotoğraf Galerimiz",
  };
}

export default function StaticPage() {
  return (
    <>
      <ImageGallery galeri={acilisGalerisi} />
      <ImageGallery galeri={aileDizimiGalerisi} />
      <ImageGallery galeri={seansGalerisi} />
      <SocialMedia />
    </>
  );
}

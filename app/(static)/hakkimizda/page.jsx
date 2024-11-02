import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import SubMovie from "@/components/sections/platform/what";
import MissionVision from "@/components/sections/platform/mission-vision";
import SocialMedia from "@/components/sections/common/z-contact";

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>Metasistematik</HeaderTitle>

      <PageContent h2Title="Farkındalığın Işığında, Dönüşüme Adım Adım: Platformumuzun Hikayesi">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mM373kwYNTY?si=L18Ks_cBXlTQ7x-0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h3>Farkındalığın Işığında, Dönüşüme Adım Adım</h3>
        <p>
          2020'de Enneagram Okulu’muzla başladığımız yolculuk, 2024'te
          "METASİSTEMİK Farkındalık Geliştirme ve Sistemik Çalışma Platformu"
          markasıyla yeni bir boyuta taşındı.
        </p>
        <p>
          Platformumuzda yer alan 4 okulumuz ile birlikte global standartlarda
          tasarladığımız mesleki yeterlilik ve gelişime yönelik eğitim
          programlarımızla hizmet veriyor ve rehberlik sunuyoruz.
        </p>
      </PageContent>

      <SubMovie />
      <MissionVision />
      <SocialMedia />
    </>
  );
}

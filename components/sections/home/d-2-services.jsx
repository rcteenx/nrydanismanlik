import IconComponent from "@/components/ui/icons/icons";

import { socialMedia } from "@/content/data";

export default function HomeServices() {
  return (
    <section className="container mx-auto my-16 lg:my-24">
      <div className="mx-auto px-8 text-center max-w-4xl">
        <h2 className="text-2xl lg:text-6xl text-accent-dark-6">
          HİZMETLERİMİZ
        </h2>
        <h3 className="my-4 text-base md:text-xl text-accent-dark-5">
          Dönüşüme Doğru İlk Adımı Atın
        </h3>
        <p>
          Amaçlarınızı destekliyoruz: METASİSTEMİK, kişisel veya organizasyonel
          hedefleriniz söz konusu olduğunda size rehberlik edecek araçlara ve
          uzmanlığa sahiptir. Hizmetlerimizle birlikte sistemik farkındalığın
          gücünü bugün keşfedin.
        </p>
        <h4 className="text-accent my-8">
          Detaylı Bilgi İçin{" "}
          <a href="/hizmetlerimiz" className="text-accent-dark-5 font-bold">
            Hizmetlerimiz
          </a>{" "}
          sayfasına ulaşın
        </h4>
      </div>
    </section>
  );
}

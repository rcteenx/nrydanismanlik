import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Danışmanlık Hizmetlerimizle İçsel Dengenizi Keşfedin",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Danışmanlık Hizmetlerimizle İçsel Dengenizi Keşfedin">
        <p>
          Hayatın getirdiği zorluklarla başa çıkmak ve daha sağlıklı, dengeli
          bir yaşam sürmek, çoğu zaman dışarıdan destek almayı gerektirir. Bizim
          amacımız, size bu yolculukta rehberlik etmek ve kişisel dönüşümünüzü
          desteklemektir. Koçluk, Reiki, Bio Enerji, Trans Terapi ve Wellness
          gibi farklı alanlarda sunduğumuz danışmanlık hizmetleri ile zihinsel,
          duygusal ve fiziksel sağlığınızı iyileştirmenize yardımcı oluyoruz.
        </p>
        <h3>
          <a
            href="/danismanlik/kocluk"
            className="hover:text-violet-800 gradientTransition"
          >
            Koçluk
          </a>
        </h3>
        <p>
          Koçluk hizmetimizle, hayatınızdaki hedeflere ulaşmak için gerekli
          stratejileri ve adımları belirlemenize destek oluyoruz. İster kariyer,
          ister kişisel gelişim olsun, koçluk süreçleriyle kendinizi daha güçlü
          ve net hissedeceksiniz.
        </p>
        <h3>
          <a
            href="/danismanlik/reiki"
            className="hover:text-violet-800 gradientTransition"
          >
            Reiki
          </a>{" "}
          ve{" "}
          <a
            href="/danismanlik/bio-enerji"
            className="hover:text-violet-800 gradientTransition"
          >
            Bio Enerji
          </a>
        </h3>
        <p>
          Reiki ve Bio Enerji terapileri ile enerji akışını dengeleyerek,
          bedeninizin ve zihninizin daha uyumlu çalışmasını sağlıyoruz. Bu
          terapiler, hem ruhsal hem de fiziksel sağlığınız üzerinde
          derinlemesine olumlu etkiler yaratır.
        </p>
        <h3>
          <a
            href="/danismanlik/trans-terapi"
            className="hover:text-violet-800 gradientTransition"
          >
            Trans Terapi
          </a>
        </h3>
        <p>
          Trans Terapi sayesinde bilinçaltınızdaki engelleri fark eder ve bu
          engelleri aşmanıza yardımcı oluruz. Geçmişin yüklerinden özgürleşmek,
          özgüveninizi artırmak ve daha huzurlu bir yaşam sürmek için bu derin
          terapi tekniklerini kullanıyoruz.
        </p>
        <h3>
          <a
            href="/danismanlik/wellness"
            className="hover:text-violet-800 gradientTransition"
          >
            Wellness
          </a>
        </h3>
        <p>
          Son olarak, Wellness danışmanlığımız ile sağlıklı yaşam tarzları
          oluşturarak, bedeninizi ve zihninizi güçlendirmeyi hedefliyoruz.
          Duygusal dengeyi sağlamak, sağlıklı alışkanlıklar edinmek ve yaşam
          kalitenizi artırmak için sizi destekliyoruz.
        </p>
        <p>
          Danışmanlık hizmetlerimizle, kendinizi daha iyi tanıyabilir,
          potansiyelinizi keşfederek daha sağlıklı, mutlu ve dengeli bir yaşam
          sürebilirsiniz. Siz de bu yolculuğa bizimle adım atmak isterseniz,
          hemen bizimle iletişime geçin.
        </p>
      </PageContent>

      <SocialMedia />
    </>
  );
}

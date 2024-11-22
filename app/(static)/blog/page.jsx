import PageContent from "@/components/templates/pageContent";

import HacamatTerapi from "@/components/sections/blog/hacamat-terapi";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Nry Blog",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h1Title="Nry Blog - Şifa ve Dönüşüm Yolculuğunuza Hoş Geldiniz">
        <p>
          Modern yaşamın yoğun temposunda kendimizi unutmak kolaydır. Ancak,
          gerçek mutluluğa ve içsel dengeye ulaşmak için hem bedenimize hem de
          ruhumuza özen göstermemiz gerekir. İşte bu blog, hayatınıza şifa,
          farkındalık ve dönüşüm katmak için bir rehber olarak tasarlandı.
        </p>
        <p>
          Burada kişisel gelişim, koçluk, reiki, Çin tıbbı, hacamat ve kupa
          terapisi gibi geleneksel ve modern yöntemler hakkında bilgi
          bulabilirsiniz. Amacımız, hem bilimsel hem de doğal şifa yöntemlerini
          bir araya getirerek, sağlıklı ve dengeli bir yaşam sürmenize yardımcı
          olmaktır.
        </p>
        <p>
          Hangi alanda ilham arıyorsanız, burada sizi destekleyecek bilgiler ve
          öneriler bulacaksınız. Zihinsel, fiziksel ve ruhsal sağlığınızı
          geliştirmek, kendinizi daha iyi tanımak ve daha tatmin edici bir yaşam
          sürmek için keşfetmeye başlayın.
        </p>
        <p>
          Haydi, birlikte bu yolculuğa çıkalım ve daha sağlıklı, dengeli ve
          huzurlu bir yaşam için ilk adımı atalım!
        </p>
      </PageContent>

      <HacamatTerapi />

      <SocialMedia />
    </>
  );
}

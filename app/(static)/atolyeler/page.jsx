import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Atölye Çalışmalarımız",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h1Title="Atölye Çalışmalarımızla Kendinizi Keşfedin ve Dönüştürün">
        <p>
          Hayatınızda değişim ve dönüşüm arayışında mısınız? Atölye çalışmaları,
          derinlemesine keşif yapmak ve kişisel gelişiminizi hızlandırmak için
          etkili bir yoldur. Aile Dizimi ve Sistemik Dizimler ile geçmişin
          gölgelerinden özgürleşebilir, Kişisel Gelişim atölyeleri ile yeni bir
          farkındalık seviyesine ulaşabilirsiniz.
        </p>
        <h3>
          <a
            href="/atolyeler/aile-dizimi"
            className="hover:text-violet-800 gradientTransition"
          >
            Aile Dizimi ve Sistemik Dizimler
          </a>
        </h3>
        <p>
          Aile Dizimi ve Sistemik Dizimler atölyelerimiz, bireylerin aile
          geçmişlerindeki bilinçdışı bağları ve kalıpları fark etmelerine
          yardımcı olur. Geçmiş nesillerin travmaları, gizli sadakatleri ve
          çözülmemiş çatışmaları, bugünkü yaşamınızı etkileyebilir. Bu
          atölyelerde, aile içindeki dengeyi yeniden kurarak daha sağlıklı bir
          yaşam yolu inşa edebilirsiniz.
        </p>
        <h3>
          <a
            href="/atolyeler/kisisel-gelisim"
            className="hover:text-violet-800 gradientTransition"
          >
            Kişisel Gelişim
          </a>
        </h3>
        <p>
          Kişisel Gelişim atölyelerimiz ise, bireylerin kendi potansiyellerini
          keşfetmelerini, engelleri aşmalarını ve daha tatmin edici bir yaşam
          sürmelerini hedefler. Kendini tanıma, duygusal farkındalık geliştirme,
          özgüven artırma gibi konularda derinlemesine çalışmalar yaparak,
          hayatınızı dönüştürmeye yönelik adımlar atabilirsiniz.
        </p>
        <p>
          Bu atölye çalışmaları, yaşamınızı dönüştürmek, engelleri aşmak ve daha
          huzurlu bir zihinle ilerlemek için size rehberlik edecek. Eğer siz de
          kendi dönüşüm yolculuğunuza başlamak isterseniz, atölyelerimize
          katılmak için bizimle iletişime geçebilirsiniz.
        </p>
      </PageContent>

      <SocialMedia />
    </>
  );
}

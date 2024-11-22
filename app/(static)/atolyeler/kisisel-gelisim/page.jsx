import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Kişisel Gelişim: Hayatınıza Değer Katın",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Kişisel Gelişim: Hayatınıza Değer Katın">
        <h3>Kişisel gelişim nedir?</h3>
        <p>
          Kişisel gelişim, bireyin kendi potansiyelini keşfetmek, yeteneklerini
          geliştirmek ve yaşam kalitesini artırmak için yaptığı sürekli bir
          ilerleme sürecidir. Hem bireysel hem de profesyonel yaşamda daha
          başarılı, mutlu ve dengeli bir insan olmayı amaçlayan bu süreç,
          kişinin kendine yaptığı en değerli yatırımdır.
        </p>
        <h3>Kişisel gelişimin temel alanları nelerdir?</h3>
        <p>Kişisel gelişim, farklı alanlarda çalışmayı gerektirir:</p>
        <ul>
          <li>
            <h4 className="italic font-light">Zihinsel Gelişim:</h4>
            <p>
              Yeni bilgiler öğrenmek, problem çözme becerilerini geliştirmek ve
              yaratıcı düşünme.
            </p>
          </li>
          <li>
            <h4 className="italic font-light">Duygusal Gelişim:</h4>
            <p>Kendini tanıma, duyguları yönetme ve empati geliştirme.</p>
          </li>
          <li>
            <h4 className="italic font-light">Fiziksel Gelişim:</h4>
            <p>
              Sağlıklı bir yaşam tarzı benimseme ve beden farkındalığını
              artırma.
            </p>
          </li>
          <li>
            <h4 className="italic font-light">Sosyal Gelişim:</h4>
            <p>İletişim becerilerini güçlendirme ve ilişkileri iyileştirme.</p>
          </li>
          <li>
            <h4 className="italic font-light">Ruhsal Gelişim:</h4>
            <p>
              Hayatta anlam ve amaç bulma, mindfulness ve meditasyon gibi
              uygulamalarla içsel huzuru sağlama
            </p>
          </li>
        </ul>

        <h3>Kişisel gelişim neden önemlidir?</h3>
        <p>
          Kişisel gelişim, bireylerin yaşamlarına birçok yönden katkı sağlar:
        </p>
        <ul>
          <li>Öz güveni artırır</li>
          <li>Hedeflere ulaşmayı kolaylaştırır</li>
          <li>Daha sağlıklı ilişkiler kurmaya yardımcı olur</li>
          <li>Stres ve kaygıyı azaltır</li>
          <li>Zihinsel netlik ve kararlılık sağlar</li>
          <li>Hayatın tüm alanlarında denge ve tatmin yaratır</li>
        </ul>
        <h3>Kişisel gelişim nasıl yapılır?</h3>
        <p>
          Kişisel gelişim yolculuğuna başlamak için şu adımları takip
          edebilirsiniz:
        </p>
        <ul>
          <li>Hedeflerinizi net bir şekilde belirleyin</li>
          <li>Kendinizi tanıyın ve güçlü yönlerinizi keşfedin</li>
          <li>Zaman yönetimi ve planlama becerilerinizi geliştirin</li>
          <li>Kendi kendinize motivasyon teknikleri uygulayın</li>
          <li>
            Kitaplar okuyarak, eğitimlere katılarak ve mentorluk alarak
            kendinizi sürekli geliştirin
          </li>
        </ul>
        <h3>Kişisel gelişim aktiviteleri nelerdir?</h3>
        <ul>
          <li>Kitap okuma ve yeni bilgiler edinme</li>
          <li>Online veya yüz yüze eğitimlere katılma</li>
          <li>Kişisel gelişim koçluğu veya mentorluk alma</li>
          <li>Mindfulness ve meditasyon pratikleri yapma</li>
          <li>Yeni hobiler edinme ve ilgi alanlarını keşfetme</li>
        </ul>
        <hr />
        <h2>Kişisel Gelişim ile Hayatınızı Dönüştürün</h2>
        <p>
          Kendi potansiyelinizi keşfetmek ve daha başarılı, dengeli bir yaşam
          sürmek için kişisel gelişim yolculuğuna adım atın. Kişisel gelişimle
          ilgili daha fazla bilgi almak ve rehberlik desteği için bizimle
          iletişime geçin.
        </p>
      </PageContent>

      <SocialMedia />
    </>
  );
}

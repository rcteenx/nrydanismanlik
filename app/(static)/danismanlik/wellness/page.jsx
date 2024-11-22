import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Wellness: Bütüncül Sağlık ve İyi Yaşam",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Wellness: Bütüncül Sağlık ve İyi Yaşam">
        <h3>Wellness nedir?</h3>
        <p>
          Wellness, fiziksel, zihinsel ve ruhsal sağlığı dengelemeyi amaçlayan
          bir yaşam tarzıdır. Bireyin sağlığını sadece hastalık veya fiziksel
          iyilik hali üzerinden değil, hayatın tüm yönleriyle ele alır.
          Wellness, kişinin kendini daha iyi hissetmesini ve yaşam kalitesini
          artırmasını sağlayan bir farkındalık ve uygulama sürecidir.
        </p>
        <h3>Wellness’ın temel boyutları nelerdir?</h3>
        <p>
          Wellness, genellikle aşağıdaki temel boyutlar üzerinden ele alınır:
        </p>
        <ul>
          <li>
            <h4 className="italic font-light">Fiziksel Wellness:</h4>
            <p>
              Sağlıklı beslenme, düzenli egzersiz, uyku düzeni ve beden
              sağlığını koruma.
            </p>
          </li>
          <li>
            <h4 className="italic font-light">Zihinsel Wellness:</h4>
            <p>
              Stres yönetimi, zihinsel dayanıklılık ve olumlu düşünce
              alışkanlıklarını geliştirme.
            </p>
          </li>
          <li>
            <h4 className="italic font-light">Duygusal Wellness:</h4>
            <p>
              Sağlıklı ilişkiler kurma, duygusal dengeyi sağlama ve kendini
              ifade etme.
            </p>
          </li>
          <li>
            <h4 className="italic font-light">Ruhsal Wellness:</h4>
            <p>
              Hayatta anlam ve amaç bulma, farkındalık geliştirme ve içsel
              huzura ulaşma.
            </p>
          </li>
          <li>
            <h4 className="italic font-light">Sosyal Wellness:</h4>
            <p>
              Güçlü bir destek ağı kurma ve sosyal ilişkilerde dengeyi sağlama.
            </p>
          </li>
        </ul>

        <h3>Wellness neden önemlidir?</h3>
        <p>
          Wellness, kişinin yaşam kalitesini artırırken uzun vadeli sağlığı
          destekler. Ayrıca aşağıdaki alanlarda olumlu etkiler sunar:
        </p>
        <ul>
          <li>Stresi ve kaygıyı azaltır</li>
          <li>Enerji seviyelerini yükseltir</li>
          <li>Bağışıklık sistemini güçlendirir</li>
          <li>Zihinsel netlik ve odaklanmayı artırır</li>
          <li>Daha mutlu ve dengeli bir yaşam sağlar</li>
        </ul>
        <h3>Wellness nasıl bir yaşam tarzına dönüştürülür?</h3>
        <p>
          Wellness’ı hayatınıza dahil etmek için şu adımları izleyebilirsiniz:
        </p>
        <ul>
          <li>Sağlıklı beslenme alışkanlıkları geliştirin</li>
          <li>Günlük egzersiz rutini oluşturun</li>
          <li>Meditasyon ve mindfulness pratikleri yapın</li>
          <li>Duygusal ihtiyaçlarınızı göz önünde bulundurun</li>
          <li>Kaliteli uyku için bir rutin oluşturun</li>
          <li>Kendinize zaman ayırın ve ilgi alanlarınıza yönelin</li>
        </ul>
        <h3>Wellness aktiviteleri nelerdir?</h3>
        <ul>
          <li>Yoga ve pilates gibi beden-zihin aktiviteleri</li>
          <li>Doğa yürüyüşleri ve açık hava sporları</li>
          <li>Aromaterapi ve masaj terapileri</li>
          <li>Meditasyon ve nefes çalışmaları</li>
          <li>Sağlıklı yemek tarifleri ve detoks programları</li>
        </ul>
        <hr />
        <h2>Wellness ile Hayatınızı Dönüştürün</h2>
        <p>
          Bütünsel bir sağlık anlayışıyla daha mutlu ve dengeli bir yaşam için
          wellness alışkanlıkları geliştirin. Wellness hakkında daha fazla bilgi
          edinmek ve yaşam tarzınızı dönüştürmek için bizimle iletişime geçin.
        </p>
      </PageContent>

      <SocialMedia />
    </>
  );
}

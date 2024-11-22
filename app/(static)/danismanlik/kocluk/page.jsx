import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Koçluk: Potansiyelinizi Keşfedin ve Hedeflerinize Ulaşın",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Koçluk: Potansiyelinizi Keşfedin ve Hedeflerinize Ulaşın">
        <h3>Koçluk nedir?</h3>
        <p>
          Koçluk, bireylerin kişisel ve profesyonel hedeflerine ulaşmalarını
          sağlamak için uygulanan bir rehberlik ve destek sürecidir. Koç,
          bireyin potansiyelini açığa çıkarmasına yardımcı olarak farkındalık,
          motivasyon ve eylem planı oluşturmasını destekler. Bu süreç, bireyin
          hem kariyerinde hem de yaşamında olumlu değişimler yaratır.
        </p>
        <h3>Koçluk süreci nasıl işler?</h3>
        <p>
          Koçluk, bireyin mevcut durumunu analiz ederek güçlü yanlarını ve
          geliştirilmesi gereken alanlarını belirlemekle başlar. Ardından, net
          hedefler ve bir eylem planı oluşturulur. Koç, bireyin bu hedeflere
          ulaşmasına rehberlik ederken, aynı zamanda kişinin içsel motivasyonunu
          artırmayı amaçlar.
        </p>
        <h3>Koçluk türleri nelerdir?</h3>
        <p>Farklı ihtiyaçlara yönelik çeşitli koçluk türleri bulunmaktadır:</p>
        <ul>
          <li>
            <h4 className="italic font-light">Yaşam Koçluğu:</h4>
            <p>Kişisel hedeflere ve yaşam dengesine odaklanır.</p>
          </li>
          <li>
            <h4 className="italic font-light">Kariyer Koçluğu:</h4>
            <p>
              Mesleki hedeflerin belirlenmesi ve kariyer gelişimi için rehberlik
              sağlar.
            </p>
          </li>
          <li>
            <h4 className="italic font-light">Yönetici Koçluğu:</h4>
            <p>
              Liderlik becerilerini geliştirmek isteyen yöneticilere destek
              olur.
            </p>
          </li>
          <li>
            <h4 className="italic font-light">Eğitim Koçluğu:</h4>
            <p>
              Öğrencilere akademik başarı ve motivasyon konusunda yol gösterir.
            </p>
          </li>
          <li>
            <h4 className="italic font-light">İlişki Koçluğu:</h4>
            <p>
              Sağlıklı ilişkiler geliştirmek ve iletişim becerilerini artırmak
              için yardımcı olur.
            </p>
          </li>
        </ul>
        <h3>Koçluk almanın faydaları nelerdir?</h3>
        <p>Koçluk süreci, bireylere aşağıdaki konularda yardımcı olabilir:</p>
        <ul>
          <li>Net ve ulaşılabilir hedefler belirlemek</li>
          <li>Motivasyonu ve öz güveni artırmak</li>
          <li>Stres ve zaman yönetimini geliştirmek</li>
          <li>Kişisel ve profesyonel engelleri aşmak</li>
          <li>Daha etkili kararlar almak</li>
          <li>Hayatta denge ve tatmin sağlamak</li>
        </ul>
        <h3>Koçluk kimler için uygundur?</h3>
        <p>
          Koçluk, hayatında değişim yaratmak isteyen herkes için uygundur. Yeni
          bir kariyer yolu arayanlar, kişisel gelişimine önem verenler veya
          belirli bir hedefe ulaşmak isteyenler koçluk sürecinden
          faydalanabilir.
        </p>
        <hr />
        <h2>Koçluk ile Geleceğinizi Şekillendirin</h2>
        <p>
          Hayallerinizi gerçeğe dönüştürmek için şimdi harekete geçin. Koçluk
          hakkında daha fazla bilgi almak ve bireysel bir görüşme planlamak için
          bizimle iletişime geçin.
        </p>
      </PageContent>

      <SocialMedia />
    </>
  );
}

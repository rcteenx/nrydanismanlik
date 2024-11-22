import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "Reiki: Şifa Sanatı ve Enerji Dengesi",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Reiki: Şifa Sanatı ve Enerji Dengesi">
        <h3>Reiki nedir?</h3>
        <p>
          Reiki, Japonca kökenli bir kelime olup "evrensel yaşam enerjisi"
          anlamına gelir. Bu şifa tekniği, kişinin bedenindeki enerji akışını
          dengeleyerek fiziksel, duygusal ve ruhsal sağlığı desteklemeyi
          amaçlar. Reiki, doğal ve yan etkisiz bir uygulama olmasıyla hem
          kişisel gelişim hem de şifa arayışında olanlar için popüler bir
          tercihtir.
        </p>
        <h3>Reiki nasıl çalışır?</h3>
        <p>
          Reiki, uzman bir Reiki uygulayıcısının ellerini belirli bölgelerde
          tutarak ya da beden üzerinde dolaştırarak enerji aktarımı yapmasıyla
          gerçekleştirilir. Bu süreç, kişinin enerji merkezlerini (çakralarını)
          açarak blokajları serbest bırakır ve iyileşme sürecini destekler.
        </p>
        <h3>Reiki'nin faydaları nelerdir?</h3>
        <p>Reiki, aşağıdaki alanlarda fayda sağlayabilir:</p>
        <ul>
          <li>Stres ve kaygıyı azaltma</li>
          <li>Bedenin doğal iyileşme sürecini hızlandırma</li>
          <li>Enerji seviyesini artırma</li>
          <li>Daha derin bir rahatlama ve huzur hissi sağlama</li>
          <li>Ruhsal dengeyi geliştirme</li>
        </ul>
        <h3>Reiki seansı nasıl yapılır?</h3>
        <p>
          Bir Reiki seansı genellikle 30-60 dakika sürer ve uygulayıcı, kişinin
          üzerinde nazik ve rahatlatıcı bir enerji çalışması yapar. Seans
          sırasında kişi genellikle oturur veya uzanır.
        </p>
        <h3>Reiki'nin kökeni ve tarihi</h3>
        <p>
          Reiki, 20. yüzyılın başlarında Japonya'da Mikao Usui tarafından
          geliştirilmiştir. Usui, Reiki'yi, kişinin kendi enerjisel şifasını
          bulmasına yardımcı olacak bir yöntem olarak sunmuştur.
        </p>
        <h3>Reiki öğrenilebilir mi?</h3>
        <p>
          Evet! Reiki öğrenmek isteyenler için özel eğitimler ve inisiyasyonlar
          mevcuttur. Reiki'nin çeşitli seviyeleri vardır ve her seviye kişiye
          farklı şifa tekniklerini öğrenme imkanı sunar.
        </p>
        <hr />
        <h2>Reiki ile Şifa Bulun</h2>
        <p>
          Evrensel enerji ile tanışarak yaşamınıza sağlık, denge ve huzur katın.
          Reiki hakkında daha fazla bilgi almak ve seans rezervasyonu yapmak
          için bizimle iletişime geçin.
        </p>
      </PageContent>

      <SocialMedia />
    </>
  );
}

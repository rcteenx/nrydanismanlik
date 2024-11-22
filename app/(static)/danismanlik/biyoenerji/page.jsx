import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "enerji: Doğal Şifa ve Enerji Dengeleme",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h1Title="Biyoenerji: Doğal Şifa ve Enerji Dengeleme">
        <h3>Biyoenerji nedir?</h3>
        <p>
          Biyoenerji, vücudun doğal enerji alanını (biyokimyasal enerji)
          dengelemeyi amaçlayan bir şifa yöntemidir. İnsan bedeninin çevresinde
          bir enerji alanı olduğu fikrine dayanır ve bu enerji alanındaki
          blokajların çözülmesi, fiziksel ve ruhsal sağlığı olumlu yönde
          etkileyebilir.
        </p>
        <h3>Biyoenerji nasıl çalışır?</h3>
        <p>
          Biyoenerji uygulayıcıları, kişinin enerji alanını hissetmek ve
          dengelemek için ellerini kullanır. Herhangi bir fiziksel temas
          olmaksızın, enerji akışını düzenleyerek bedendeki tıkanıklıkları
          açmayı hedefler. Bu yöntem, enerji akışını optimize ederek bedenin
          kendini iyileştirme sürecine katkı sağlar.
        </p>
        <h3>Biyoenerjinin faydaları nelerdir?</h3>
        <p>Biyoenerji, birçok alanda fayda sağlayabilir:</p>
        <ul>
          <li>Stres ve kaygıyı azaltır</li>
          <li>Ağrıların hafiflemesine yardımcı olur</li>
          <li>Bedenin doğal iyileşme sürecini destekler</li>
          <li>Enerji seviyesini artırır</li>
          <li>Ruhsal dengeyi ve odaklanmayı güçlendirir</li>
        </ul>
        <h3>Biyoenerji seansı nasıl yapılır?</h3>
        <p>
          Bir biyoenerji seansı sırasında kişi genellikle rahat bir şekilde
          oturur veya uzanır. Uygulayıcı, kişinin enerji alanını analiz eder ve
          enerji blokajlarını tespit eder. Ardından ellerini belirli noktalarda
          tutarak enerji dengesini yeniden sağlamak için çalışır. Seanslar
          genellikle 30-60 dakika arasında sürer ve tamamen doğal bir süreçtir.
        </p>
        <h3>Biyoenerjinin tarihi ve kökeni</h3>
        <p>
          Biyoenerji, çeşitli kültürlerin eski şifa uygulamalarından etkilenmiş,
          ancak modern yaklaşımlar ve bilimsel prensiplerle yeniden
          şekillendirilmiştir. Bu teknik, hem fiziksel hem de ruhsal sağlık
          arayışında olanlar için bütüncül bir yöntem sunar.
        </p>
        <hr />
        <h2>Biyoenerji ile Şifaya Kavuşun</h2>
        <p>
          Doğal enerji alanınızı dengeleyerek yaşam kalitenizi artırın.
          Biyoenerji hakkında daha fazla bilgi almak ve uzman bir uygulayıcıdan
          destek almak için bizimle iletişime geçin.
        </p>
      </PageContent>

      <SocialMedia />
    </>
  );
}

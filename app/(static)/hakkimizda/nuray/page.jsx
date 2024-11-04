import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";
import { nuray1 } from "@/public/assets/images";

export async function generateMetadata() {
  return {
    title: "Nuray Özel Arkun Hakkında",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Nuray Özel Arkun">
        <div className="flex justify-center items-center p-4 rounded-xl bg-xpurple">
          <div className="p-4 shadow-xl rounded-b-xl ">
            <img
              src={nuray1.src}
              alt="img colletion"
              width="w-full"
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
        <h3>Nuray Özel Arkun'ın Ünvanları</h3>
        <ul>
          <li>Reiki Grandmaster Teacher 8. Seviye </li>
          <li>Işık Hocası / Eğitim Uzmanı</li>
          <li>Bioenerji Biyomanyetizma 1. Seviye Uygulayıcı / Eğitim Uzmanı</li>
          <li>Trans Terapi Uygulayıcı / Eğitim Uzmanı</li>
          <li>Birinci Seviye Hipnoterapi Uygulayıcı </li>
        </ul>
        <hr />
        <h3>Merhaba, ben Nuray Özel Arkun</h3>
        <p>
          2021 yılından bu yana Reiki ile aktif olarak ilgileniyorum ve
          eğitimlerine devam ediyorum. Şu anda Usui Reiki 8. Grandmaster Teacher
          seviyesine ulaşmış durumdayım.
        </p>
        <h2>Reiki Nedir?</h2>
        <p>
          Reiki nedir sorusuna gelirsek, Reiki; ruhsal, bedensel ve zihinsel
          olarak tam bir iyilik halidir ve dengeye ulaşmanın en kolay
          yollarından biridir. Kademeli olarak alınan Reiki eğitimleri, kişiyi
          daha dengeli ve sağlıklı bir hale getirir. Kendini iyileştirme
          sürecindeki en etkili adımlardan biridir.
        </p>
        <h3>Reiki Ne Kazandırır?</h3>
        <p>
          Reiki, bedendeki toksinleri arındırır, strese iyi gelir ve
          derinlerdeki gerilim, öfke ve kızgınlığı sakinliğe dönüştürür
        </p>
        <p>
          Bedendeki çakraların dengelenmesi, enerjiyi en güzel haliyle
          yaşamamıza olanak sağlar. Evrensel bir enerji olan Reiki, bedendeki
          tortuların iyileşmesine katkıda bulunarak çakraların dengelenmesinde
          en keyifli adımlardan biridir.
        </p>
      </PageContent>

      <SocialMedia />
    </>
  );
}

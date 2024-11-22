import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";
import { deha20acilis1, deha20acilis2 } from "@/public/assets/images";

export async function generateMetadata() {
  return {
    title: "Basında Nry Koçluk",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h1Title="WORLD TURK TV Kanalında Çıkan Açılış Haberimiz">
        <div className="flex justify-center items-center p-4 rounded-xl bg-xpurple">
          <div className="flex justify-center items-center p-4 rounded-xl bg-black">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https://fb.watch/v_CGAKICtm/%2F&show_text=false&width=560"
              width="560"
              height="314"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <h3>DENİZLİ’DE NRY KOÇLUK ve DANIŞMANLIK MERKEZİ AÇILDI</h3>
        <p>
          Biyoenerji ve Reiki konusunda uzun yıllar çalışma yapan Nuray Özel
          Arkun NRY Koçluk ve Danışmanlık Merkezi Gültepe Mahallesi 719 sokakta
          davetlilerin katılımıyla açıldı. Açılışa Denizli Büyükşehir Belediye
          Başkanı Bülent Nuri Çavuşoğlu, Denizli Berberler ve Kuaförler Odası
          Başkanı Yakup Güleç ve çok sayıda davetli katıldı. Organizasyon da
          misafirlere nohut pilav ve ayran ikram edildi. Açılış kurdelesini
          Denizli Büyükşehir Belediye Başkanı Bülent Nuri Çavuşoğlu, Denizli
          Berberler ve Kuaförler Odası Başkanı Yakup Güleç ve Profesyonel Yaşam
          Koçu Nuray Özel Arkun kesti. Yaşam Koçu Arkun davetlilere danışmanlık
          merkezini gezdirerek Reiki ve Biyoenerji hakkında bilgiler verdi.
        </p>
        <hr />
        <h2>Deha 20 Gazetesi'nde Çıkan Açılış Haberimiz</h2>
        <div className="px-4 shadow-xl rounded-b-xl ">
          <img
            src={deha20acilis1.src}
            alt="Deha 20 Gazetesi - Nry Koçluk ve Danışmanlık Merkezi Açılış Görseli"
            title="Deha 20 Gazetesi - Nry Koçluk ve Danışmanlık Merkezi Açılış Haberi"
            width="w-full"
            className="rounded-xl"
          />
        </div>
        <p className="px-4 text-sm text-center">
          Biyoenerji ve Reiki konusunda uzun yıllar çalışma yapan Nuray Özel
          Arkun, Nry Koçluk ve Danışmanlık Merkezi Gültepe Mahallesi 719 sokakta
          davetlilerin katılımıyla açıldı. Açılış kurdelesini Denizli Büyükşehir
          Belediye Başkanı Bülent Nuri Çavuşoğlu, Denizli Berberler ve Kuaförler
          Odası Başkanı Yakup Güleç ve Profesyonel Yaşam Koçu Nuray Özel Arkun
          kesti. Yaşam Koçu Arkun, davetlilere danışmanlık merkezini gezdirerek,
          Reiki ve Biyoenerji hakkında bilgiler verdi.
        </p>
        <div className="px-4 shadow-xl rounded-b-xl ">
          <img
            src={deha20acilis2.src}
            alt="Deha 20 Gazetesi - Nry Koçluk ve Danışmanlık Merkezi Açılış - Tam Boy"
            title="Deha 20 Gazetesi - Nry Koçluk ve Danışmanlık Merkezi Açılış Haberi - Tam Boy"
            width="w-full"
            className="rounded-xl"
          />
        </div>
      </PageContent>

      <SocialMedia />
    </>
  );
}

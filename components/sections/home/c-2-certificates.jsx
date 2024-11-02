import SvgCheck from "@/components/ui/svg/check";
import IconComponent from "@/components/ui/icons/icons";

export default function Certificates({ img, img2, mekanikYollar }) {
  return (
    <section id="mekanikYollar" className="bg-accent/50 py-10">
      <div className="container mx-auto">
        <div className="mx-auto lg:p-0 text-left xl:text-center max-w-3xl ">
          <div className="p-4 lg:p-8 bg-accent/80 rounded-xl border">
            <h2>Mesleki Yeterlilik ve Gelişim Sertifika Programları</h2>
            <p>
              Platformumuzda yer alan 4 okulumuzdaki tüm sertifika programları
              hem ulusal hem de uluslararası standartlara uyumluluğu esas alarak
              hazırlanmıştır. Platformumuz, her sertifika programı için hem
              tanınma hem de mesleki güvenilirlik sağlayan ikili sertifika
              modeli sunar.
            </p>
            <p>
              Bu ikili sertifikalandırma yaklaşımı, kimlik bilgilerinizin hem
              Metasistemik toplulukta hem de global çapta daha geniş profesyonel
              ortamda tanınmasını ve saygı duyulmasını sağlar.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:my-8 items-start bg-accent-light-7 lg:p-4 rounded-xl text-center">
          <div className="p-4">
            <img
              src={img.src}
              alt="img colletion"
              className="w-full rounded-xl object-cover object-center shadow-lg border-8 border-white"
            />
            <h3 className="mt-4">METASİSTEMİK Onaylı Sertifikalar</h3>
            <p className="bg-white p-4 rounded-lg shadow-lg ">
              Uzman okullarımız tarafından verilen ve platformumuz tarafından
              onaylanan transkriptli bu sertifikalar, desteklediğimiz sıkı
              eğitim ve değerlendirme standartlarını yansıtır.
            </p>
          </div>
          <div className="p-4">
            <img
              src={img2.src}
              alt="img colletion"
              className="w-full rounded-xl object-cover object-center shadow-lg border-8 border-white"
            />
            <h3 className="my-4">
              Uluslararası Onaylı Güvenilir Sertifikasyon Sistemi
            </h3>
            <p className="bg-white p-4 rounded-lg shadow-lg ">
              Ek bir onay ve güvenlik katmanı sağlamak için üniversitelerdeki
              Sürekli Eğitim Merkezlerinin de (SEM) tercih ettiği (CARDCERT) ile
              ortaklık yapıyoruz. Mezunlarımız, güvenli doğrulama ve küresel
              erişilebilirlik için uluslararası onaylı ve ingilizce olarak
              düzenlenmiş elektronik sertifika alırlar ve tüm sertifikaların
              yüklendiği akıllı (çipli ve barkodlu) kimlik kartlarını edinirler.
            </p>
          </div>
        </div>
        <div className="text-center bg-accent-dark-3 p-8 rounded-xl text-accent-light-7 ">
          <div className="mx-auto max-w-3xl">
            <h3>Sertifika Programlarımızda Avrupa Standartlarına Uyum</h3>
            <p>
              Mesleki Yeterlilik ve Gelişim Sertifika Programlarımız, MYK
              Seviye-6 ve Avrupa Yeterlilikler Çerçevesi (EQF) Seviye 6 referans
              alınarak tasarlanmıştır.
            </p>
            <p>
              “SEVİYE 6”, verilen eğitimin üniversite lisans derecesine uygun
              olduğunu standardı gösterir. Bunula birlikte, sertifika
              programlarımıza katılım için lisans diploması gerekli değildir.
            </p>
            <p>
              Yaklaşan yeni sınıflarımızı kaçırmayın; dönüştürücü öğrenme
              yolculuğunuza başlamak için bugün bizimle iletişime geçin!
            </p>
            <div className="bg-accent-light-5 p-4 mt-8 rounded-xl text-accent-dark-5 max-w-lg mx-auto">
              <h4>Bizimle iletişime geçin</h4>
              <p>
                Yaklaşan başlangıç tarihleri hakkında daha fazla bilgi edinmek
                veya mesleki gelişim hedeflerinizi tartışmak için sizi
                bekliyoruz:
              </p>
              <ul className="flex flex-col justify-center gap-4 my-4 ">
                <li className="p-4 border rounded-xl">
                  <dd className="font-semibold">Mesaj Gönder</dd>
                  <dt>
                    <a
                      href="https://wa.me/905434649144?text=genel%20bilgi%20istiyorum"
                      title="WhatsApp Mesajı Gönderin"
                    >
                      <IconComponent
                        name="whatsapp"
                        size={24}
                        color="green"
                        className="mx-auto text-center"
                      />
                    </a>
                  </dt>
                </li>
                <li className="p-4 border rounded-xl">
                  <dd className="font-semibold">Ara</dd>
                  <dt>
                    <a href="tel:+905434649144" className="hover:border-b">
                      0 (543) 464 91 44
                    </a>
                  </dt>
                </li>
                <li className="p-4 border rounded-xl">
                  <dd className="font-semibold">Mail At</dd>
                  <dt>
                    <a
                      href="mailto:social@metasistemik.com"
                      className="hover:border-b"
                    >
                      social@metasistemik.com
                    </a>
                  </dt>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

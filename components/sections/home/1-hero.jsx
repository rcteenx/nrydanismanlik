import IconComponent from "@/components/ui/icons/icons";
import { hero1 } from "@/public/assets/images";

export default function Hero() {
  return (
    <section id="hero" className="xl:py-0  gap-0 bg-violet-200">
      <div className="md:container mx-auto flex flex-col xl:flex-row justify-center items-center ">
        <div className="mx-auto px-4 md:py-8 flex flex-col justify-end">
          <div className="p-4 shadow-xl rounded-b-xl ">
            <img
              src={hero1.src}
              alt="img colletion"
              width="w-full"
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="py-8 xl:w-1/2 xl:pl-8 text-center xl:text-left text-purple-500">
          <h1 className="my-8 text-2xl md:text-4xl">
            <span className="text-6xl">NRY WELLNESS</span>
            <br />
            Sağlıklı Yaşam Uygulamaları
          </h1>
          <h3 className="text-2xl py-2 font-thin border-b">
            Kendinize Yatırım Yapın
            <br />
            Bütünsel Sağlığınıza Öncelik Verin
          </h3>
          <p className="py-2 text-xpink">
            Sağlıklı yaşam ve ipuçları için bekliyoruz
          </p>
          <div className="py-4  flex flex-row space-x-8 justify-center xl:justify-start items-center ">
            <div className="relative inline-flex group">
              <a
                href="#"
                title="Bize ulaşın"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200  font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 gradientViolet400ViaViolet300ToViolet200 shadow-lg gradientTransition btn-hero"
                role="button"
              >
                Arayın
                <IconComponent name="whatsapp" size={18} color="white" />
              </a>
            </div>
            <a
              href="https://wa.me/905434649144?text=wellness%20hakkında%20bilgi%20istiyorum"
              title="WhatsApp Mesajı Gönderin"
              className="border-0 border-b border-white rounded-none hover:text-xpink "
            >
              Mesaj Atın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

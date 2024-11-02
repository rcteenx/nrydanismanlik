import IconComponent from "@/components/ui/icons/icons";
import { hero1 } from "@/public/assets/images";

export default function Hero() {
  return (
    <section id="hero" className="xl:my-8  gap-0">
      <div className="md:container mx-auto flex flex-col xl:flex-row justify-center items-center ">
        <div className="mx-auto px-4 md:py-8 flex flex-col justify-end">
          <div className="p-4 shadow-xl rounded-b-xl">
            <img
              src={hero1.src}
              alt="img colletion"
              width="w-full"
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="xl:w-1/2 xl:pl-8 text-center xl:text-left text-accent">
          <h1 className="mt-8 text-3xl md:text-4xl">
            Potansiyelinizin Kilidini Açın
          </h1>
          <h3 className="text-xl md:text-2xl font-light ">
            Farkındalığa Dayalı Kişisel Dönüşümün Sistemik Çapta Değişimle
            Gerçekleştiği Yer
          </h3>
          {/* bg-accent/30 */}
          <h2 className="mb-12 inline-block font-bold text-5xl lg:text-6xl ">
            METASİSTEMİK
          </h2>
          <div className="flex flex-row space-x-8 justify-center xl:justify-start items-center">
            <div className="relative inline-flex group">
              <a
                href="https://wa.me/905434649144?text=genel%20bilgi%20istiyorum"
                title="WhatsApp Mesajı Gönderin"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200  font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 gradientAccentToDark gradientTransition btn-hero"
                role="button"
              >
                Mesaj Atın
                <IconComponent name="whatsapp" size={18} color="white" />
              </a>
            </div>
            <a
              href="#"
              className="border-0 border-b border-white rounded-none "
            >
              Sizi Arayalım
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

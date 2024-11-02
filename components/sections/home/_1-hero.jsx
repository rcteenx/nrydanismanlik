import IconComponent from "@/components/ui/icons/icons";

export default function Hero() {
  return (
    <section id="hero" className="text-center text-white gradientHero">
      <div className="relative overflow-hidden bg-no-repeat h-96 imageBG">
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-cover flex items-center justify-center text-white">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Potansiyelinizin Kilidini Açın
            </h1>
            <h3 className="mb-4 text-xl md:text-2xl font-light ">
              Farkındalığa Dayalı Kişisel Dönüşümün Sistemik Çapta Değişimle
              Gerçekleştiği Yer
            </h3>
            {/* bg-accent/30 */}
            <h2 className="border-b-4 inline-block font-bold text-5xl lg:text-6xl ">
              METASİSTEMİK
            </h2>
            <div className="flex flex-row space-x-8 justify-center items-center">
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
      </div>
    </section>
  );
}

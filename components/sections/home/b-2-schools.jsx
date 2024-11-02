import IconComponent from "@/components/ui/icons/icons";
import MySvgIcon from "@/components/ui/svg/enegram";

export default function Schools2() {
  return (
    <section id="servicestut" className="m-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[328px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className=" xl:px-12  flex items-center flex-col xl:flex-row xl:mb-[60px]">
            <h2 className="xl:pr-8 text-3xl xl:text-5xl text-white">
              ATÖLYELERİMİZ
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:-mt-36 ">
        <div className="xl:mx-8 grid md:grid-cols-2 xl:grid-cols-4 gap-8 px-8 xl:px-0 ">
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientVioletToPurple gradientTransition ">
            <a href="/okullar/kocluk">
              <div className=" flex justify-center items-center">
                <IconComponent name="school" size={64} color="white" />
              </div>
              <h3 className="mb-[10px] font-semibold">Koçluk</h3>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                Potansiyelinizi Ortaya Çıkarın
              </p>
            </a>
          </div>

          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientPurpleToPink gradientTransition">
            <a href="/okullar/egitmenlik">
              <div className=" flex justify-center items-center">
                <IconComponent name="aileDizimi" size={64} color="white" />
              </div>
              <h3 className="mb-[10px] font-semibold">Aile Dizimi</h3>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                Rutine sıkışmış mı hissediyorsunuz?
              </p>
            </a>
          </div>
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientPinkToRed gradientTransition">
            <a href="/okullar/sistemik-dizim">
              <div className=" flex justify-center items-center">
                <IconComponent name="systemic" size={64} color="white" />
              </div>
              <h3 className="mb-[10px] font-semibold">Bio Enerji</h3>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                İçinizdeki doğal şifacıyı ortaya çıkarın
              </p>
            </a>
          </div>
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientRedToOrange gradientTransition">
            <a href="/okullar/enneagram">
              <div className=" flex justify-center items-center">
                <IconComponent name="reiki" size={64} color="white" />
              </div>
              <h3 className="mb-[10px] font-semibold">Reiki</h3>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                Dengenizi ve sağlığınızı bulun
              </p>
            </a>
          </div>
        </div>
        <p className="text-center mt-4 ">
          Karar veremediyseniz, danışman desteği için bize ulaşın
        </p>
        <div className="text-center">
          <a
            href="https://wa.me/905434649144?text=genel%20bilgi%20istiyorum"
            title="WhatsApp Mesajı Gönderin"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200  font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 gradientMagentaToBlack gradientTransition btn-hero"
            role="button"
          >
            Mesaj Atın
            <IconComponent name="whatsapp" size={24} color="white" />
          </a>
        </div>
      </div>
    </section>
  );
}

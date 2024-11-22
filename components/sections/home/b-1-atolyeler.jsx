import IconComponent from "@/components/ui/icons/icons";
import MySvgIcon from "@/components/ui/svg/enegram";

export default function Atolyeler() {
  return (
    <section id="servicestut" className="m-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 my-8 xl:my-0 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative xl:h-[328px] flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className=" xl:px-12 flex items-center flex-col xl:flex-row xl:mb-[60px]">
            <h2 className="xl:pr-8 text-3xl xl:text-5xl text-white">
              ATÖLYELERİMİZ
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:-mt-36 ">
        <div className="xl:mx-8 grid md:grid-cols-2 xl:grid-cols-4 gap-4 px-4 xl:px-0 ">
          <div className="p-4 xl:py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientVioletToPurple gradientTransition ">
            <a href="#">
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
            <a href="#">
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
            <a href="#">
              <div className=" flex justify-center items-center">
                <IconComponent name="systemic" size={64} color="white" />
              </div>
              <h3 className="mb-[10px] font-semibold">Biyoenerji</h3>
              <p className=" font-light leading-normal max-w-[300px] text-sm">
                İçinizdeki doğal şifacıyı ortaya çıkarın
              </p>
            </a>
          </div>
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientRedToOrange gradientTransition">
            <a href="#">
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
      </div>
    </section>
  );
}

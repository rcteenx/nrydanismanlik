import IconComponent from "@/components/ui/icons/icons";
import MySvgIcon from "@/components/ui/svg/enegram";

export default function BlogCategories() {
  return (
    <section id="coaching-programms" className="mx-4">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative xl:h-72 flex items-center xl:items-start -z-10">
        <div className="container mx-auto">
          <div className="text-center text-white">
            <h2 className="xl:text-4xl ">METASİSTEMATİK BLOG KATEGORİLERİ</h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4 xl:-mt-[80px]">
        <div className="xl:mx-8 grid md:grid-cols-2 xl:grid-cols-4 gap-8 px-8 xl:px-0 ">
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientAccentToDark gradientTransition ">
            <a href="/blog/kocluk">
              <div className=" flex justify-center items-center h-24">
                <IconComponent name="school" size={64} color="white" />
              </div>
              <h3 className="mb-[10px] font-semibold">Koçluk Okulu Bloğu</h3>
            </a>
          </div>
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientGreenToBlack gradientTransition">
            <a href="/blog/egitmenlik">
              <div className=" flex justify-center items-center h-24">
                <IconComponent name="teacher" size={64} color="white" />
              </div>
              <h3 className="mb-[10px] font-semibold">
                Eğitmenlik Okulu Bloğu
              </h3>
            </a>
          </div>
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientAccentOppositeToBlack gradientTransition">
            <a href="/blog/sistemik-dizim">
              <div className=" flex justify-center items-center h-24">
                <IconComponent name="systemic" size={64} color="white" />
              </div>
              <h3 className="mb-[10px] font-semibold">
                Sistemik Dizim Okulu Bloğu
              </h3>
            </a>
          </div>
          <div className="px-4 py-8 rounded-2xl shadow-custom2 flex flex-col items-center text-center gradientRedToBlack gradientTransition">
            <a href="/blog/enneagram">
              <div className=" flex justify-center items-center h-24">
                <MySvgIcon />
              </div>
              <h3 className="mb-[10px] font-semibold">Enneagram Okulu Bloğu</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

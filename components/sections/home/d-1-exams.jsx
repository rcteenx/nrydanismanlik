import SvgCheck from "@/components/ui/svg/check";

export default function Exams({ img, img2 }) {
  return (
    <div id="gain" className="bg-white py-10 lg:my-16">
      <div className="container mx-auto ">
        <h2 className="text-2xl lg:text-6xl text-accent-dark-6 text-left xl:text-center">
          MESLEK SINAVLARINA HAZIRLIK PROGRAMLARI
        </h2>
        <div className="mx-auto px-4 lg:p-0 text-left xl:text-center  max-w-4xl">
          <h5>
            Sınav Hazırlık Programlarıyla, Sınav Başarınızı Artırın ve Ulusal ve
            Uluslararası Mesleki Tanınırlığa Ulaşın
          </h5>
          <p>
            Ulusal ve uluslararası düzeyde tanınan mesleki yeterlilik
            belgelerine ulaşmanıza yardımcı olmak için tasarlanan sınav hazırlık
            programlarımız, başarılı olmanız için ihtiyaç duyduğunuz bilgi ve
            desteği sağlar
          </p>
          <p>
            Ulusal ve uluslararası düzeyde tanınan mesleki yeterlilik
            belgelerine ulaşmanıza yardımcı olmak için tasarlanan
            programlarımız, başarılı olmanız için ihtiyaç duyduğunuz bilgi ve
            desteği sağlar.
          </p>
        </div>
        <div className="m-4 p-8 bg-accent-dark-5 text-accent-light-7 rounded-xl ">
          <h3 className=" mx-auto my-4 text-center">
            <a href="/sinavlara-hazirlik/myk">
              Ulusal Mesleki Kimlik Kazanımı (MYK Düzey-6)
            </a>
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8 ">
            <div className="rounded-xl p-4 bg-white ">
              <img
                src={img.src}
                alt="img colletion"
                className=" mx-auto object-cover object-center rounded-xl"
              />
            </div>
            <div className="p-4 ">
              <ul className="space-y-5">
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold text-accent-light-9  ">
                      Sertifikalı ve Meslek Belgeli Koç Olun
                    </dt>
                    <dd className="-ml-7 mt-2">
                      Profesyonel Koçluk Sertifika Programımız ve özel MYK
                      Seviye-6 Koçluk Sınavına Hazırlık Programımızla koçluk
                      kariyerinize başlayın.
                    </dd>
                  </div>
                </li>
                <li className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="font-semibold text-accent-light-9  ">
                      Sertifikalı ve Meslek Belgeli Eğitim Uzmanı veya Kurumsal
                      Eğitmen Olun
                    </dt>
                    <dd className="-ml-7 mt-2 ">
                      Eğitim Uzmanı ve Kurumsal Eğitmen sertifikalarına yönelik
                      hedeflenen MYK Seviye-6 Sınav Hazırlık Programlarıyla
                      tamamlanan Profesyonel Eğitmen Sertifika Programımızla
                      eğitim ve gelişim alanındaki uzmanlığınızı geliştirin.
                    </dd>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:mt-4 p-8 border rounded-xl border-accent-dark-3 text-accent-dark-3">
          <h3 className=" mx-auto my-4 text-center">
            <a href="/sinavlara-hazirlik/icf">
              ACC veya PCC Ünvanlama Sınavına Bizimle Hazırlanın
            </a>
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8 ">
            <div className="p-4 ">
              <ul className="space-y-5">
                <li className="flex gap-2">
                  <div>
                    <dd className="-ml-7 mt-2">
                      Uluslararası Koçluk Federasyonu (ICF) ile Ortak
                      Sertifikalı Koç (ACC) veya Profesyonel Sertifikalı Koç
                      (PCC) olma yolunda son adımı atmaya hazırsanız, sıkı ICF
                      Sınav Hazırlık Programımız size gerekli donanımı
                      sağlayacaktır.
                    </dd>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl hidden xl:block bg-accent p-4">
              <img
                src={img2.src}
                alt="img colletion"
                className=" mx-auto object-cover object-center border-8 border-white rounded-xl"
              />
            </div>
          </div>
        </div>

        <p className="text-center my-4">
          Daha kapsamlı bilgiler için{" "}
          <a href="/sinavlara-hazirlik" className="text-accent font-bold">
            Mesleki Yeterlilik Sınavları
          </a>{" "}
          sayfamızı ziyaret edin
        </p>
      </div>
    </div>
  );
}

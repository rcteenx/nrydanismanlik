import { StaticPages } from "@/content/data";

export default function MissionVision() {
  return (
    <section id="mission" className="">
      <div className="container mx-auto my-8 lg:my-16">
        <div className=" mx-auto my-8 p-4 md:p-12  bg-accent-light-3  text-accent-dark-7 rounded-xl text-center ">
          <h2 className="text-2xl md:text-4xl lg:text-6xl">
            Temel Anlayış ve Değerlerimiz
          </h2>
          <ul className="grid md:grid-cols-2 mx-auto gap-8 my-4 md:mt-8 [&>li]:border [&>li]:bg-accent-light-7 [&>li]:rounded-xl [&>li]:p-4">
            <li>
              <h3>Bütünsel Dönüşümün Merkezi:</h3>
              <p>
                Farkındalık Geliştirme ve Sistemik Çalışma prensipleriyle
                entegre inovatif eğitim programlarımızla, bireylerin ve
                organizasyonların tam potansiyellerine ulaşmalarına yardım ve
                rehberlik ederek bütünsel dönüşümlerine katkı sağlamak.
              </p>
            </li>
            <li>
              <h3>Erişilebilir Hizmet:</h3>
              <p>
                Eğitim hizmetlerimizi, tüm koşulları gözeterek, bireylere ve
                organizasyonlara ulaştırılmasını kolaylaştırmak.
              </p>
            </li>
            <li>
              <h3>Metasistemik Liderlik:</h3>
              <p>
                Metasistemik yaklaşımla entegre, global standartlarda mesleki
                eğitim ve gelişim hizmetleri veren öncü ve lider bir platform
                olmak.
              </p>
            </li>
            <li>
              <h3>Metasistemik Toplulukları:</h3>
              <p>
                Farkındalık Geliştirme ve Sistemik Çalışma prensiplerini
                paylaşan global ölçekte topluluklar oluşmasını sağlayarak, bilgi
                ve deneyim alışverişini kolaylaştırmak; birlikte öğrenmeyi ve
                büyümeyi teşvik etmek
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

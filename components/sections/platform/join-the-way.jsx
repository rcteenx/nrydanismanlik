import { StaticPages } from "@/content/data";

export default function JoinTheWay() {
  return (
    <section id="theway" className="">
      <div className="container mx-auto my-8 lg:my-24">
        <div className="bg-gradient-to-br from-accent via-accent-dark-3 to-accent-dark-7 p-12 m-4 border rounded-2xl shadow-lg text-center text-white">
          <h2 className=" text-accent-light-7 lg:text-6xl">YOLCULUK</h2>
          <div className=" mx-auto bg-accent-light-3 p-4 md:p-12 text-accent-dark-7 rounded-xl my-8">
            <h2 className="">
              Farkındalık Geliştirme ve Sistemik Çalışma Anlayışına Dayalı Bu
              Yolculuğuna Katılın
            </h2>
            <ul className="grid md:grid-cols-2 mx-auto gap-8 my-8 p-4 [&>li]:border [&>li]:bg-accent-light-7 [&>li]:rounded-xl [&>li]:p-4">
              <li>
                <h3>Aşkın Yaşam Amacınızı Edinin:</h3>
                <p>Kendi menkıbenizi keşfedin!...</p>
              </li>
              <li>
                <h3>Farkındalığınızı Geliştirin:</h3>
                <p>
                  Kendi potansiyelinizle, aşkın yönünüzle, sistemik
                  bağlantılarınızla ve sınırlarınızla tanışın.
                </p>
              </li>
              <li>
                <h3>Bilinçli Yaşayın:</h3>
                <p>
                  İlk derslerden itibaren kişisel doğrulamalarınızla
                  farkındalığınızın genişlediğine tanıklık edin ve daha bilinçli
                  ve sorumlu bir şekilde seçimler yapın.
                </p>
              </li>
              <li>
                <h3>Potansiyelinizi Açığa Çıkarın:</h3>
                <p>
                  Gizli kalan eşsiz yeteneklerinizi ortaya çıkarın ve yeni
                  beceriler geliştirin.
                </p>
              </li>
              <li>
                <h3>Sistemik Bağlantısallığınızı Keşfedin:</h3>
                <p>
                  Kişiliğin, yaşamla kurulan sistemik bağlamlarını ve sistemik
                  inşasını keşfedin.
                </p>
              </li>
              <li>
                <h3>Dönüşümü Yaşayın:</h3>
                <p>
                  Daha verimli, daha sağlıklı, daha bağlantılı ve daha tatmin
                  edici bir yaşama adım atın.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

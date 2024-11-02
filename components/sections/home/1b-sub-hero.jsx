export default function SubHero({ img }) {
  return (
    <section id="subhero" className="container mx-auto px-4 my-16 md:p-0 ">
      <h2 className="p-4 lg:p-8 text-center lg:text-6xl gradientAccentToDark sm:rounded-xl ">
        METASİSTEMİK YAKLAŞIMI KEŞFEDİN
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4 justify-center items-center">
        <div className="flex justify-center items-center p-4 rounded-xl bg-black">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mM373kwYNTY?si=L18Ks_cBXlTQ7x-0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="px-4 text-center xl:text-left ">
          <div className="lg:my-8 text-base [&>p]:leading-6 [&>p]:my-4">
            <p>
              <strong className="text-accent">
                Bireysel ve Kurumsal Dönüşümün Anahtarı:
              </strong>{" "}
              Platformumuz bünyesinde ye alan okullarımız, farkındalık
              geliştirme ve sistemik çalışma anlayışına bağlı kalarak ve global
              standartlara uyumluluğu sağlayarak, bireylerin ve
              organizasyonların potansiyellerini keşfetmelerine ve tam
              potansiyellerine ulaşmalarına yardımcı olmak üzere çeşitli
              düzeylerde mesleki yeterlilik ve bütünsel gelişime dayalı
              sertifika programları sunmaktadır.
            </p>
          </div>
          <hr className="my-2" />
          <h3 className="text-accent">Eğitim Programlarımızla:</h3>
          <ul className="xl:px-4 my-4 xl:list-disc [&>li]:text-sm [&>li]:my-2 [&>li]:leading-6">
            <li>Bireysel yetenek ve beceri geliştirmenin ötesine geçiyoruz.</li>
            <li>
              Daha büyük sistemlerin dinamikleri içerisinde nasıl etkileşime
              girdiğimize dair derinlemesine bir anlayış ve farkındalık
              geliştiriyoruz.
            </li>
            <li>
              Kapsamlı mesleki yeterlilik ve gelişim sertifika programlarımızla,
              kişisel gelişim ve sistemik etki için dönüştürücü bir alan
              sağlıyoruz.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

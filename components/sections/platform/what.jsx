export default function SubMovie({ img }) {
  return (
    <section id="subhero" className="container mx-auto px-4 mt-12 md:p-0">
      <h2 className="p-4 lg:p-8 text-center lg:text-6xl gradientAccentToDark sm:rounded-xl ">
        METASİSTEMİK NEDİR?
      </h2>
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4 lg:mx-8 justify-center items-center">
        <div className="lg:my-8 text-base">
          <ul className="p-4 my-4 xl:list-none [&>li]:text-sm [&>li]:my-2 [&>li]:leading-6 bg-accent-opposite/60 rounded-xl">
            <li>
              "Meta sistemik”, kelime anlamı olarak, Sistem’le ilgili olanların
              ötesinde; onları aşan, anlamına gelmektedir.
            </li>
            <li>
              Metasistemik yaklaşım, “Farkındalık Geliştirme” anlayışına ve
              “Sistemik Çalışma” uygulamalarına dayanır.
            </li>
            <li>
              Özünde Metasistemik yaklaşım, olağan bir yaşamda olağanüstü
              insanlar olmaya çalışma anlayışına meydan okur.
            </li>
            <li>
              Bunun yerine, varoluşun olağanüstü doğasına dahil olarak, olağan
              birer insan olmaya çalışmaya teşvik eder.
            </li>
          </ul>
        </div>
        <div className="text-center xl:text-left ">
          <div className="p-4 bg-accent-light-3 lg:my-8 text-base [&>p]:leading-6 [&>p]:my-4 rounded-xl">
            <p>
              Yaşamın bu “Metasistemik” kavranışı, çeşitli seviyelerde ve
              modlarda Bütün-Parça ilişkisini anlamada ve uyumlanmada bitmeyen
              bir süreçtir; bunu, “Farkındalık Geliştirme” olarak tanımlıyoruz.
            </p>
            <p>
              Yaşamı algılayışımızdaki bu değişim, bağlantısal bütünlüğünü
              takdir etmemize olanak sağlayan, Metasistemik bakış açısını
              yansıtır.
            </p>
            <p>
              Böylece, kim(?) olduğumuz sorusuna katı bireyselci sınırlamalar
              içerisinde cevap aramak yerine, kişiliklerimizin dinamik ve
              bağlantısal bir akış içerisinde var olduğunu deneyimleyerek
              Farkındalığımızı Geliştiriyor, Sistemik Çalışmalarla kendimizi,
              diğerlerini ve yaşamı keşfediyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

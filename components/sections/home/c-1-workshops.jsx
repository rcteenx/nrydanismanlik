import IconComponent from "@/components/ui/icons/icons";

export default function Workshops() {
  return (
    <section id="workshops" className="">
      <div className="container mx-auto my-8 lg:my-24">
        <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-12 m-4 border rounded-2xl shadow-lg text-center text-white">
          <h2 className=" text-accent-light-7 lg:text-6xl">
            Çin Tıbbı Hacamat ve Kupa Terapisi
          </h2>
          <div className=" mx-auto max-w-2xl text-accent-light-8 ">
            <p>
              Geçmişten geleceği hacamat ve kupa terapisi soğuk algınlığında
              lenf ödeme bedenden uzaklaştırmada ve ağrılarda çok etkili olduğu
              gözlenmiş ve tercih edilmiştir.
            </p>
            <p>
              Belirli seanslarla uygulanan kupa terapisi ve hacamat İbni
              Sina'nın "El Kanun Fit Tıb" kitabında vurgulanarak bahsedilmiştir.
            </p>
          </div>
          <ul className="my-4 text-xpink text-base flex flex-col md:flex-row gap-4 ">
            <li className=" w-full border p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 ">
              <h3>HACAMAT</h3>
              <p className="px-2">
                Deri altına yerleşen ve kas içine fibroblast oluşturarak
                bedendeki farklı rahatsızlıklara sebep olur. Kupa terapisi ve
                hacamatla bu fibroplastlar açılabilir. Bir bu bedenin en iyi
                olma halidir.
              </p>
            </li>
            <li className=" w-full border p-4 rounded-md shadow-lg bg-white hover:bg-gray-100">
              <h3>KUPA TERAPİSİ</h3>
              <p>
                Kas için ayar değişmiş ölmüş, atık uyuşuk kan hacamatla dışarı
                atılabilmektedir.
              </p>
            </li>
          </ul>
          <h3>Birlikte Çalışıyoruz</h3>
          <p>
            Her ay düzenli olarak yüz-yüze atölyeler ve 3-4 ayda bir gelişim
            inziva programlarımız için bize katılın.
          </p>
        </div>
      </div>
    </section>
  );
}

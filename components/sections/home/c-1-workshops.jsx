import IconComponent from "@/components/ui/icons/icons";

export default function Workshops() {
  return (
    <section id="workshops" className="">
      <div className="container mx-auto my-8 lg:my-24">
        <div className="bg-gradient-to-br from-accent via-accent-dark-3 to-accent-dark-7 p-12 m-4 border rounded-2xl shadow-lg text-center text-white">
          <h2 className=" text-accent-light-7 lg:text-6xl">
            ATÖLYE VE ETKİNLİKLER
          </h2>
          <p className=" text-accent-light-8">
            Aşağıdaki haftalık online (canlı) çalışma gruplarımız genel katılıma
            açıktır:
          </p>
          <p> (Sürekli çalışma grupları)</p>
          <ul className="my-4 text-accent text-base flex flex-col md:flex-row gap-4 ">
            <li className=" w-full border p-4 rounded-md shadow-lg bg-white hover:bg-gray-100 ">
              <h4>
                <a href="/atolyeler/farkindalik-gelistirme">
                  Farkındalık Geliştirme ve Sistemik Çalışma Grubu
                </a>
              </h4>
              <ul className="my-4 flex items-center justify-center gap-4  ">
                <li className="px-4 py-2 bg-accent-opposite text-white hover:bg-accent-dark-5 rounded-xl cursor-pointer shadow-lg">
                  <a href="https://wa.me/905443087402?text=bilgi">
                    Kayıt İçin
                    <IconComponent
                      name="whatsapp"
                      size={18}
                      color="white"
                      className="inline-block ml-2"
                    />
                  </a>
                </li>
              </ul>
            </li>
            <li className=" w-full border p-4 rounded-md shadow-lg bg-white hover:bg-gray-100">
              <h4>
                <a href="/atolyeler/sistemik-dizim">
                  Sistemik Dizim Çalışma Grubu
                </a>
              </h4>
              <ul className="my-4 flex items-center justify-center gap-4  ">
                <li className="px-4 py-2 bg-accent-opposite text-white hover:bg-accent-dark-5 rounded-xl cursor-pointer shadow-lg">
                  <a href="https://wa.me/905443087402?text=bilgi">
                    Kayıt İçin
                    <IconComponent
                      name="whatsapp"
                      size={18}
                      color="white"
                      className="inline-block ml-2"
                    />
                  </a>
                </li>
              </ul>
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

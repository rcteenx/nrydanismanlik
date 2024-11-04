import IconComponent from "@/components/ui/icons/icons";

import { socialMedia } from "@/content/data";

export default function SocialMedia() {
  return (
    <section className="container mx-auto text-center my-16 lg:my-24">
      <div className="px-8">
        <h2 className="text-2xl lg:text-6xl text-center border-b-4 inline-block border-black">
          BİZE ULAŞIN
        </h2>

        <h3>Danışmanlık almak ya da Atölye çalışmalarımıza katılmak için</h3>
        <div className="my-4 relative inline-flex group">
          <a
            href="https://wa.me/905074873424?text=genel%20bilgi%20istiyorum"
            title="WhatsApp Üzerinden Mesaj Gönderin"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200  font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-900 gradientPinkToPurple gradientTransition btn-hero"
            role="button"
          >
            Bize Yazın
            <IconComponent name="whatsapp" size={24} color="white" />
          </a>
        </div>
        <hr className="my-8" />
        <div className="text-2xl lg:text-4xl">
          Doğrudan iletişim için
          <span className="font-bold">"sosyal medya"dayız!</span>
        </div>
        <div className="text-center mt-4 text-base md:text-xl">
          Karşılıklı etkileşim için sosyal medya sayfalarımıza bekliyoruz.
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-8 max-w-4xl mx-auto bg-violet-100 p-8 rounded-xl border ">
        {socialMedia.map((i) => (
          <div key={i.id}>
            <a
              href={i.link}
              className="group flex sm:block items-center justify-center gap-8 bg-white hover:bg-violet-100 shadow-violet[3px_4px_20px_0_rgba(0,0,0,.15)] hover:shadow-[3px_4px_20px_0_rgba(0,0,0,.35)] rounded-xl transition-all text-center "
              target="_blank"
            >
              <div className="flex justify-center items-center w-36 h-36 hover:scale-90 transition duration-300 ease-in-out cursor-pointer">
                <IconComponent
                  name={i.svgIcon}
                  size={96}
                  color="#ff00cc"
                  alt={i.alt}
                  title={i.alt}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

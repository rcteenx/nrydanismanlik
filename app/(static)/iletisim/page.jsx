import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "İLETİŞİM",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>İletişim</HeaderTitle>

      <PageContent h2Title="İletişim Bilgileri">
        <div className="mx-auto rounded-lg bg-white text-center">
          <div className="p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6115187115447!2d29.086681762533104!3d37.775706275110736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73fac532bb495%3A0xea59aa4ae2c584b7!2s15%20May%C4%B1s%2C%20719.%20Sk.%2C%2020150%20Pamukkale%2FDenizli!5e0!3m2!1sen!2str!4v1730621336525!5m2!1sen!2str"
              width="480"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-xpurple">
              Gültepe Mah. 719. Sk. Albayrak Suit Apt. Kat:1 D:6
              <br />
              Merkezefendi / DENİZLİ
            </p>
          </div>
        </div>
        <p>Hızlı erişim için aşağıdaki kanallardan ulaşabilirsiniz.</p>
        <ul>
          <li>
            <dd className="font-semibold">Whatsapp & Telefon:</dd>
            <dt>
              <a href="tel:+905074873424" className="hover:border-b">
                0 (507) 487 34 24
              </a>
            </dt>
          </li>
          <li className="mt-4">
            <dd className="font-semibold">Email:</dd>
            <dt>
              <a
                href="mailto:info@nrydanismanlik.com"
                className="hover:border-b"
              >
                info@nrydanismanlik.com
              </a>
            </dt>
          </li>
        </ul>
      </PageContent>

      <SocialMedia />
    </>
  );
}

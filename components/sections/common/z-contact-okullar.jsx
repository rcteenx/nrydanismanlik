import IconComponent from "@/components/ui/icons/icons";

import { socialMedia } from "@/content/data";

export default function ContactSchools() {
  return (
    <div className="px-8">
      <h3>Sertifika Programları Sunum Dosyaları İçin:</h3>

      <div className="my-4 relative inline-flex group">
        <a
          href="https://wa.me/905434649144?text=genel%20bilgi%20istiyorum"
          title="WhatsApp Mesajı Gönderin"
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200  font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 gradientAccentOppositeToBlack gradientTransition btn-hero"
          role="button"
        >
          Mesaj Atın
          <IconComponent name="whatsapp" size={24} color="white" />
        </a>
      </div>
    </div>
  );
}

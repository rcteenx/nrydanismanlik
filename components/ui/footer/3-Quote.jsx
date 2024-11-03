import { socialMedia } from "@/content/data";
import IconComponent from "@/components/ui/icons/icons";

export default function FooterQuote() {
  return (
    <div className="flex flex-col md:flex-row justify-end items-end">
      {/* <div className="flex items-center gap-2 mt-4">
        {socialMedia.map((icon) => (
          <div className="flex justify-center items-center" key={icon.alt}>
            <a href={icon.link} target="_blank" title={icon.title}>
              {icon.name}
            </a>
          </div>
        ))}
      </div> */}
      <p className="text-right text-xs">
        <IconComponent
          name="location"
          size={18}
          color="black"
          className="inline-block"
        />
        Gültepe Mah. 719. Sk. Albayrak Suit Apt. Kat:1 D:6 - Merkezefendi /
        DENİZLİ
      </p>
    </div>
  );
}

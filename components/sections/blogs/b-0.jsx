import SvgCheck from "@/components/ui/svg/check16";
import { metasistemik1, metasistemik2 } from "@/public/assets/images";

export default function Blog0({ gain, gain2 }) {
  return (
    <div className="py-4 ">
      <div className="container mx-auto">
        <div className="mx-auto p-4 max-w-4xl">
          <h2 className="p-4 text-center lg:text-5xl gradientAccentToDark sm:rounded-xl ">
            Dönüşüme Giden Yolunuzu Seçin
          </h2>
          <ul className="[&>li>dd]:font-bold">
            <li>
              <dd>Kişisel Gelişiminizi Ateşleyin: </dd>
              <dt>
                Bireysel hizmetlerimizle kendinizi keşfetme ve kişisel dönüşüm
                yolculuğuna çıkın. Yeni bakış açıları keşfedin, eski yaraları
                iyileştirin ve en derin değerleriniz ve arzularınızla uyumlu bir
                yaşam yaratın.
              </dt>
            </li>
            <li>
              <dd>Organizasyonunuzu Güçlendirin: </dd>
              <dt>
                Size özel kurumsal çözümlerimizle şirketinizin performansını,
                kültürünü ve liderliğini yükseltin. Ekipleriniz ve
                sistemlerinizdeki gizli potansiyeli açığa çıkarmak için uzman
                rehberliği ve kanıtlanmış metodolojiler sunuyoruz.
              </dt>
            </li>
            <li>
              <dd>Olumlu Bir Etki Yaratın: </dd>
              <dt>
                Sosyal sorumluluk taahhüdümüze katılın. Sistemik farkındalığın
                daha iyi bir dünya yaratma gücüne sahip olduğuna inanıyoruz ve
                sizi olumlu değişim yaratma konusunda bizimle ortak olmaya davet
                ediyoruz.
              </dt>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import ServicesPrograms from "@/components/sections/services/programs";

import PageContent from "@/components/templates/pageContent";

import ServicesWhy from "@/components/sections/services/why";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "HİZMETLERİMİZ",
  };
}

export default function StaticPage() {
  return (
    <>
      <ServicesPrograms />

      <PageContent h2Title="Hayatınızı ve Organizasyonunuzu Dönüştürün">
        <p>
          Metasistemik olarak derin dönüşümün tohumlarının her birimizin içinde
          yattığına inanıyoruz. Atölye çalışmalarımız ve etkinliklerimiz bu
          tohumları beslemek, derin kişisel farkındalığa, sistemik anlayışa ve
          kalıcı değişime giden yollar sunmak üzere tasarlanmıştır.
        </p>
        <h3>Dönüşüme Giden Yolunuzu Seçin</h3>
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
      </PageContent>

      <ServicesWhy />

      <SocialMedia />
    </>
  );
}

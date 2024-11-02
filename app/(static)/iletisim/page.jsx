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
        <p>Hızlı erişim için aşağıdaki kanallardan ulaşabilirsiniz.</p>
        <ul>
          <li>
            <dd className="font-semibold">Whatsapp & Telefon:</dd>
            <dt>
              <a href="tel:+905434649144" className="hover:border-b">
                0 (543) 464 91 44
              </a>
            </dt>
          </li>
          <li className="mt-4">
            <dd className="font-semibold">Email:</dd>
            <dt>
              <a
                href="mailto:social@metasistemik.com"
                className="hover:border-b"
              >
                social@metasistemik.com
              </a>
            </dt>
          </li>
        </ul>
      </PageContent>

      <SocialMedia />
    </>
  );
}

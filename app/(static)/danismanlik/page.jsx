import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "DANIŞMANLIK HİZMETLERİ",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Danışmanlık Hizmetleri">
        <p>...</p>
      </PageContent>

      <SocialMedia />
    </>
  );
}

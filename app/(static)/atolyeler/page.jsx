import PageContent from "@/components/templates/pageContent";

import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "ATÖLYELER",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="Atölye Çalışmaları">
        <p>...</p>
      </PageContent>

      <SocialMedia />
    </>
  );
}

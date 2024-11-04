import PageContent from "@/components/templates/pageContent";

import HacamatTerapi from "@/components/sections/blog/hacamat-terapi";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "BLOG",
  };
}

export default function StaticPage() {
  return (
    <>
      <PageContent h2Title="BLOG">
        <p>...</p>
      </PageContent>

      <HacamatTerapi />

      <SocialMedia />
    </>
  );
}

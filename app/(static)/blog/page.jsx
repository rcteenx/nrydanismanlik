import HeaderTitle from "@/components/templates/headerTitle";
import PageContent from "@/components/templates/pageContent";
import BlogCategories from "@/components/sections/blogs/categories";
import Blog0 from "@/components/sections/blogs/b-0";

import BlogsWhy from "@/components/sections/blogs/why";
import SocialMedia from "@/components/sections/common/z-contact";

export async function generateMetadata() {
  return {
    title: "BLOG",
  };
}

export default function StaticPage() {
  return (
    <>
      <HeaderTitle>BLOG</HeaderTitle>

      <PageContent h2Title="Potansiyelinizi Ortaya Çıkarın">
        <h3>Metasistemik Blogu Keşfedin</h3>
        <p>
          İçgörü, ilham ve dönüşümle dolu bir dünyaya adım atın. Blogumuz,
          düşündürücü makalelerden, uzman bakış açılarından ve aşağıdakileri
          yapmanıza yardımcı olacak pratik araçlardan oluşan seçilmiş bir
          koleksiyondur:
        </p>
      </PageContent>
      <BlogCategories />

      <Blog0 />

      <BlogsWhy />
      <SocialMedia />
    </>
  );
}

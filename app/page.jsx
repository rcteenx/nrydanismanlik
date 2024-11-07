import smd from "@/content/data/siteMetaData";

import { consultancy } from "@/content/data";

import Hero from "@/components/sections/home/1-hero";
import SubHero from "@/components/sections/home/1b-sub-hero";
// import InfoBar from "@/components/sections/home/3-info-bar";

import Atolyeler from "@/components/sections/home/b-1-atolyeler";
import Fayda from "@/components/sections/home/b-2-fayda";

import BlogBar from "@/components/sections/home/d-3-blog-bar";
import SocialMedia from "@/components/sections/common/z-contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />

      <Atolyeler />
      <Fayda consultancy={consultancy} />

      <BlogBar />
      <SocialMedia />
    </>
  );
}

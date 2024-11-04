import smd from "@/content/data/siteMetaData";

import { whatwegain, whatwegain2 } from "@/content/data";
import { yarar1, yarar2 } from "@/public/assets/images";

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
      <Fayda img={yarar1} img2={yarar2} gain={whatwegain} gain2={whatwegain2} />

      <BlogBar />
      <SocialMedia />
    </>
  );
}

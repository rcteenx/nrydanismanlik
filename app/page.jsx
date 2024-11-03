import smd from "@/content/data/siteMetaData";

import {
  barInfo,
  whatwegain,
  whatwegain2,
  mekanikYollar,
} from "@/content/data";

import Hero from "@/components/sections/home/1-hero";
import SubHero from "@/components/sections/home/1b-sub-hero";
// import InfoBar from "@/components/sections/home/3-info-bar";

import Schools from "@/components/sections/home/b-2-schools";

import Workshops from "@/components/sections/home/c-1-workshops";

import BlogBar from "@/components/sections/home/d-3-blog-bar";
import SocialMedia from "@/components/sections/common/z-contact";

// export async function generateMetadata() {
//   return {
//     title: smd.title,
//   };
// }

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <Schools />

      <Workshops />

      <SocialMedia />
    </>
  );
}

import smd from "@/content/data/siteMetaData";

import {
  barInfo,
  whatwegain,
  whatwegain2,
  mekanikYollar,
} from "@/content/data";
import {
  metasistemikNedir,
  metasistemik1,
  metasistemik2,
  sertifikaMetasistemik,
  sertifikaUluslararasi,
} from "@/public/assets/images";

import Hero from "@/components/sections/home/1-hero";
import SubHero from "@/components/sections/home/1b-sub-hero";
// import InfoBar from "@/components/sections/home/3-info-bar";

import WhatWeGain from "@/components/sections/home/b-1-what-we-gain";

import Schools from "@/components/sections/home/b-2-schools";

import Workshops from "@/components/sections/home/c-1-workshops";
import Certificates from "@/components/sections/home/c-2-certificates";

import Exams from "@/components/sections/home/d-1-exams";
import SignupBar from "@/components/sections/home/dx-mailing-bar";
import HomeServices from "@/components/sections/home/d-2-services";

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
      <SubHero img={metasistemikNedir} />
      <Schools />

      <Workshops />

      <SignupBar />

      <SocialMedia />
    </>
  );
}

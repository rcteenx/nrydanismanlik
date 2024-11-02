import Link from "next/link";
import smd from "@/content/data/siteMetaData";

export default function HeaderLogo() {
  return (
    <div className="w-32 md:w-48 p-4 gradientLogo gradientTransition rounded-xl">
      <Link id="metasistemik" href="/">
        <img src={smd.siteLogo} alt={smd.title} className="" />
      </Link>
    </div>
  );
}

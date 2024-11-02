import Link from "next/link";
import smd from "@/content/data/siteMetaData";

export default function HeaderLogo() {
  return (
    <div className="w-12 lg:w-24 xl:w-32 p-0">
      <Link id="metasistemik" href="/">
        <img src={smd.siteLogo} alt={smd.title} className="" />
      </Link>
    </div>
  );
}

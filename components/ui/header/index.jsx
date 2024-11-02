import HeaderLogo from "@/components/ui/header/Logo";

import MainNav from "@/components/ui/header/MainNav";
import ServiceNav from "@/components/ui/header/ServiceNav";

export default function HeaderStaticIndex() {
  return (
    // md:justify-between
    <header className="mx-auto container-p flex items-end justify-between text-gray-800 py-2 shadow-lg">
      <HeaderLogo />

      <MainNav />
      <ServiceNav />
    </header>
  );
}

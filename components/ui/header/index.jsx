import HeaderLogo from "@/components/ui/header/Logo";

import MainNav from "@/components/ui/header/MainNav";
import ServiceNav from "@/components/ui/header/ServiceNav";

export default function HeaderStaticIndex() {
  return (
    // md:justify-between
    <header className="mx-auto px-4 py-2 container-p flex items-end justify-between text-violet-800 shadow-2xl gradientViolet400ViaViolet300ToViolet200 border-b border-violet-100">
      <HeaderLogo />

      <MainNav />
      <ServiceNav />
    </header>
  );
}

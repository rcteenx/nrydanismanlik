import FooterLinks from "@/components/ui/footer/2-Links";

import FooterQuote from "@/components/ui/footer/3-Quote";
import FooterCopyRight from "@/components/ui/footer/4-CopyRight";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="xl:container mx-auto container-p px-4 mt-16 gradientViolet400ViaViolet300ToViolet200 xl:rounded-t-2xl text-violet-700"
    >
      <div className="py-8">
        <FooterLinks />
      </div>

      <FooterQuote />
      <FooterCopyRight />
    </footer>
  );
}

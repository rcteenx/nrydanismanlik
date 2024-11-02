import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleStyles = cva(
  "mx-auto p-4 md:p-12 max-w-2xl flex flex-col gap-4 text-left shadow-xl rounded-2xl ",
  {
    variants: {
      bgColor: {
        default: "gradientAccentToDark",
        secondary: "bg-accent",
        white: "white",
        schools: "gradientSchools",
        coaching: "gradientAccentToDark",
        teaching: "gradientGreenToBlack",
        enneagram: "gradientRedToBlack",
        systemic: "gradientAccentOppositeToBlack",
      },
    },
    defaultVariants: {
      bgColor: "default",
    },
  }
);

export default function PageContent({ bgColor, h2Title, children, ...props }) {
  return (
    <section className="mx-auto container-p my-4">
      <div className={cn(titleStyles({ bgColor }))}>
        <h2 className="mx-auto inline-block py-1 border-coral-red border-b text-center">
          {h2Title}
        </h2>
        {children}
      </div>
    </section>
  );
}

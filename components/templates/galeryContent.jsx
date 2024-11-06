import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleStyles = cva(
  "mx-auto md:p-8 max-w-2xl flex flex-col gap-4 text-center shadow-xl rounded-2xl ",
  {
    variants: {
      bgColor: {
        default: "gradientVioletToPurple",
        secondary: "bg-purple-400",
        white: "white",
        schools: "gradientSchools",
        teaching: "gradientGreenToBlack",
        enneagram: "gradientRedToBlack",
      },
    },
    defaultVariants: {
      bgColor: "default",
    },
  }
);

export default function GalleryContent({
  bgColor,
  h2Title,
  children,
  ...props
}) {
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

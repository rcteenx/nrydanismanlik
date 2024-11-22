import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleStyles = cva(
  "mx-auto p-4 md:p-8 max-w-2xl flex flex-col gap-4 shadow-xl md:rounded-2xl text-center",
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
  h1Title,
  children,
  ...props
}) {
  return (
    <section className="mx-auto md:my-4">
      <div className={cn(titleStyles({ bgColor }))}>
        <h1 className="mx-auto inline-block py-1 border-coral-red border-b text-center">
          {h1Title}
        </h1>
        {children}
      </div>
    </section>
  );
}

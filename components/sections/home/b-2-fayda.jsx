import SvgCheck from "@/components/ui/svg/check";
import { yarar1 } from "@/public/assets/images";

export default function Atolye({ consultancy }) {
  return (
    <div id="gain" className="bg-white py-10 lg:my-16">
      <div className="container mx-auto">
        <div className="lg:px-4 lg:p-0 text-left xl:text-center">
          <h2 className="p-4 lg:p-8 text-center lg:text-6xl gradientPinkToPurple sm:rounded-xl ">
            {consultancy.h2}
          </h2>
        </div>
        {consultancy.items.map((i, index) => (
          <div
            key={index}
            className="grid grid-cols-1 xl:grid-cols-2  gap-8 lg:mt-4 items-center  "
          >
            <div className={`rounded-3xl hidden xl:block ${i.order}`}>
              <img
                src={`/assets/images/${i.img}`}
                alt="img colletion"
                className=" h-[420px] w-full rounded-xl object-cover object-center "
              />
            </div>
            <div className="p-4">
              <ul className="space-y-5 text-violet-500 font-light">
                <li key={index}>
                  <div className="flex gap-2">
                    <SvgCheck />
                    <h4 className="border-b border-purple-500 text-purple-500 uppercase lg:text-3xl">
                      {i.title}
                    </h4>
                  </div>
                  {i.info.map((p, index) => (
                    <p key={index}>{p}</p>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

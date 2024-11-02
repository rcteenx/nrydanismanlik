import SvgCheck from "@/components/ui/svg/check";

export default function WhatWeGain({ img, img2, gain, gain2 }) {
  return (
    <div id="gain" className="bg-white py-10 lg:my-16">
      <div className="container mx-auto">
        <div className="px-4 lg:p-0 text-left xl:text-center">
          <h2 className="p-4 lg:p-8 text-center lg:text-6xl gradientAccentToDark sm:rounded-xl ">
            {gain.h2}
          </h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4 items-center ">
          <div className="rounded-3xl hidden xl:block">
            <img
              src={img.src}
              alt="img colletion"
              className=" h-[420px] w-full rounded-xl object-cover object-center "
            />
          </div>
          <div className="p-4">
            <ul className="space-y-5">
              {gain.items.map((i, index) => (
                <li key={index} className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className=" text-2xl text-accent-dark-3 ">{i.title}</dt>
                    <dd className="-ml-7 mt-2 pb-2 border-b border-gray-200">
                      {i.info}
                    </dd>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:mt-4 items-center">
          <div className="p-4">
            <ul className="space-y-5">
              {gain2.items.map((i, index) => (
                <li key={index} className="flex gap-2">
                  <SvgCheck />
                  <div>
                    <dt className="text-2xl text-accent-dark-3">{i.title}</dt>
                    <dd className="-ml-7 mt-2 pb-2 border-b border-gray-200">
                      {i.info}
                    </dd>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl hidden xl:block">
            <img
              src={img2.src}
              alt="img colletion"
              className=" h-[480px] w-full rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

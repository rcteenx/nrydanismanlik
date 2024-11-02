export default function InfoBar({ info }) {
  return (
    <section className="bg-gradient-to-r from-accent via-accent-dark-7 to-accent py-8 lg:py-16 text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-4xl text-center ">{info.h2}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:divide-x divide-accent lg:[&>*]:pl-14 mt-10 md:text-left">
          {info.items.map((i, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-lg lg:text-2xl ">{i.title}</div>
              <div className="text-2xl lg:text-[2.5rem] font-extrabold lg:mt-2">
                {i.info} +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

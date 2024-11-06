export default function SubHero({}) {
  return (
    <section id="subhero" className="container mx-auto my-8 md:p-0">
      <div className="p-4 lg:p-8 text-center lg:text-4xl gradientViolet400ViaViolet300ToViolet200 sm:rounded-xl ">
        <h2 className="text-center text-purple-500 md:text-white lg:text-4xl ">
          REFAH HASTALIĞIN YOKLUĞUNDAN DAHA FAZLADIR
        </h2>
        <ul className="xl:mx-8 grid md:grid-cols-3 gap-4 xl:gap-8 px-8 xl:px-0 ">
          <li className="py-2 px-8 uppercase border rounded-lg shadow-lg text-xpurple lg:text-xl">
            Vücudunuzu sağlıklı beslenme ve hareketle besleyin.
          </li>
          <li className="py-2 px-8 uppercase border rounded-lg shadow-lg text-xpurple lg:text-xl">
            Farkındalık ve öz bakım yoluyla iç huzuru geliştirin.
          </li>
          <li className="py-2 px-8 uppercase border rounded-lg shadow-lg text-xpurple lg:text-xl">
            Amacınıza bağlanın ve özgün bir şekilde yaşayın.
          </li>
        </ul>
      </div>
    </section>
  );
}

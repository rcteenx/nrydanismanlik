import MailForm from "../common/mail-form";

export default function SignupBar() {
  return (
    <section className="bg-bilincSonrasi bg-cover bg-fixed ">
      <div className="py-12 lg:py-24  mx-auto text-center text-gray-800 ">
        <h2 className="text-2xl lg:text-6xl text-center border-b-4 inline-block border-black">
          BAĞLANTIDA KALALIM
        </h2>
        <MailForm />
      </div>
    </section>
  );
}

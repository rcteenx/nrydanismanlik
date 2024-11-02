export default function MailForm() {
  return (
    <div
      id="mc_embed_shell"
      className="p-4 bg-black/40 max-w-md mx-auto rounded-xl"
    >
      <div id="mc_embed_signup">
        <form
          action="https://metasistemik.us13.list-manage.com/subscribe/post?u=85b058277cd081f045d3ab691&amp;id=727fa11803&amp;f_id=00715ae1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_self"
        >
          <div id="mc_embed_signup_scroll">
            <h3>Mail Listemize Üye Olun</h3>

            <div className="sm:flex  justify-center items-center">
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required="required"
                placeholder="Email adresiniz"
                aria-label="Email address"
                className="w-full px-4 py-2 text-base leading-6  rounded-md   sm:max-w-xs placeholder-gray-500 "
              />
              <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  value="Üye Ol"
                  className="block px-4 py-2 text-white/80 transition duration-100 ease-in-out shadow-sm gradientRedToBlack rounded-full"
                ></input>
              </div>
            </div>
          </div>
        </form>
        <p className="mt-3 text-sm leading-5 text-gray-500 hidden">
          <a
            href="http://eepurl.com/iTflO-"
            title="Mailchimp - email marketing made easy and fun"
          >
            <span>
              <img
                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                alt="Intuit Mailchimp"
                className="w-48"
              />
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1180px] mx-auto px-7 grid md:grid-cols-2 gap-16 items-start">
        <img
          src="https://images.pexels.com/photos/7108778/pexels-photo-7108778.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Foreman overseeing a Garnet Construction building site"
          className="w-full h-full object-cover"
        />
        <div>
          <div className="text-rust text-sm mb-2">About us</div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-5">
            An indigenous builder with a national outlook.
          </h2>
          <p className="text-[#33383E] max-w-[58ch]">
            Garnet Construction is an indigenous company based in Lagos, Nigeria
            that specializes in real estate development, both residential and
            commercial. We work across the full lifecycle of a property — from
            concept design through construction and handover.
          </p>

          <div className="mt-8 border-t border-ink/10">
            <div className="py-6 border-b border-ink/10">
              <h3 className="font-display font-semibold mb-2">Vision statement</h3>
              <p className="text-steel max-w-[52ch]">
                To be the leading real estate development company in Africa.
              </p>
            </div>
            <div className="py-6 border-b border-ink/10">
              <h3 className="font-display font-semibold mb-2">Mission statement</h3>
              <p className="text-steel max-w-[52ch]">
                To provide quality construction services that meet the needs of
                our clients while contributing to the development of the local
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

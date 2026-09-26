export default function Footer() {
  return (
    <footer className="bg-ink text-[#C9CDD3] pt-16 pb-7">
      <div className="max-w-[1180px] mx-auto px-7 grid md:grid-cols-3 gap-12 pb-11 border-b border-concrete/15">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white [clip-path:polygon(0_100%,0_40%,50%_0,100%_40%,100%_100%,65%_100%,65%_55%,35%_55%,35%_100%)]" />
            <span className="font-display font-bold text-white">GARNET CONSTRUCTION</span>
          </div>
          <p className="mt-4 max-w-[40ch] text-[#9FA5AD] text-sm">
            Garnet Construction is an indigenous company based in Lagos,
            Nigeria that specializes in real estate development, both
            residential and commercial.
          </p>
        </div>
        <div>
          <h5 className="text-white text-sm mb-4">Quick links</h5>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#services" className="hover:text-white">Real Estate Development</a></li>
            <li><a href="#services" className="hover:text-white">Residential Development</a></li>
            <li><a href="#services" className="hover:text-white">Commercial Development</a></li>
            <li><a href="#services" className="hover:text-white">Project Management</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white text-sm mb-4">Contact</h5>
          <ul className="space-y-2.5 text-sm">
            <li><a href="tel:+2349022222225" className="hover:text-white">+234 902 222 2225</a></li>
            <li><a href="mailto:info@garnetconstruct.com" className="hover:text-white">info@garnetconstruct.com</a></li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1180px] mx-auto px-7 flex flex-wrap justify-between gap-2 pt-6 text-sm text-[#8F959D]">
        <span>© Copyright Garnet Construction 2026. All Rights Reserved.</span>
        <span>Built with Next.js &amp; Tailwind CSS.</span>
      </div>
    </footer>
  );
}

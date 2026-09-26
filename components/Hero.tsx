export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center text-paper"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(15,17,20,.55), rgba(15,17,20,.8)), url('https://images.pexels.com/photos/14265867/pexels-photo-14265867.jpeg?auto=compress&cs=tinysrgb&w=1920')"
      }}
    >
      <div className="max-w-[1180px] mx-auto px-7 py-28 md:py-36">
        <div className="flex items-center gap-3 text-sm text-paper/70 mb-6">
          <span className="w-9 h-px bg-rust" /> Lagos, Nigeria
        </div>
        <h1 className="font-display font-semibold text-4xl md:text-6xl leading-tight max-w-[12ch]">
          We build the places Lagos <span className="text-blueprint">lives, works</span> and grows in.
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg text-paper/85">
          Garnet Construction is an indigenous real estate developer delivering
          residential and commercial projects across Nigeria — from first
          concept to finished keys.
        </p>
        <div className="mt-9 flex gap-4">
          <a href="#contact" className="bg-rust hover:bg-[#832F22] px-7 py-3.5 font-medium transition-colors">
            Start a project
          </a>
          <a href="#services" className="border border-paper px-7 py-3.5 font-medium hover:bg-paper hover:text-ink transition-colors">
            Our services
          </a>
        </div>
      </div>
    </section>
  );
}

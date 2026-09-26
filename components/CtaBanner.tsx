export default function CtaBanner() {
  return (
    <section
      className="bg-cover bg-center text-paper"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(15,17,20,.75), rgba(15,17,20,.85)), url('https://images.pexels.com/photos/30195869/pexels-photo-30195869/free-photo-of-modern-high-rise-building-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=1920')"
      }}
    >
      <div className="max-w-[1180px] mx-auto px-7 py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <h2 className="font-display font-semibold text-2xl md:text-3xl max-w-[22ch]">
          Have a site in mind? Let&apos;s put a plan on it.
        </h2>
        <a href="#contact" className="bg-rust hover:bg-[#832F22] px-8 py-4 font-medium transition-colors whitespace-nowrap">
          Talk to our team
        </a>
      </div>
    </section>
  );
}

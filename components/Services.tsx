const SERVICES = [
  {
    title: "Real estate development",
    text: "From concept design to construction and project management, we take developments from idea to occupancy.",
    img: "https://images.pexels.com/photos/20993117/pexels-photo-20993117/free-photo-of-photo-of-a-building-under-construction-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Residential development",
    text: "Single-family homes, condominiums and residential estates, built to be lived in for decades.",
    img: "https://images.pexels.com/photos/2497637/pexels-photo-2497637.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Commercial development",
    text: "Office buildings, retail spaces and other commercial premises, delivered to business-ready standard.",
    img: "https://images.pexels.com/photos/2497641/pexels-photo-2497641.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Project management",
    text: "Dedicated oversight to keep construction projects on time, within budget and to specification.",
    img: "https://images.pexels.com/photos/32132512/pexels-photo-32132512/free-photo-of-industrial-construction-site-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Renovations & remodeling",
    text: "We work with clients to update and modernize existing properties, residential and commercial alike.",
    img: "https://images.pexels.com/photos/33762932/pexels-photo-33762932/free-photo-of-modern-building-construction-in-bratislava.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Property management",
    text: "Ongoing management for clients who own and operate commercial and residential properties.",
    img: "https://images.pexels.com/photos/26928564/pexels-photo-26928564/free-photo-of-wall-of-block-of-flats.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Consulting",
    text: "Advisory support for clients who are exploring or planning a real estate development of their own.",
    img: "https://images.pexels.com/photos/6950120/pexels-photo-6950120.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-ink text-concrete py-24">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid md:grid-cols-2 gap-10 border-b border-concrete/15 pb-7 mb-14">
          <div>
            <div className="text-[#E8846B] text-sm mb-2">Our services</div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl">
              Everything a property needs, under one roof.
            </h2>
          </div>
          <p className="text-[#B9BEC6] self-end max-w-[44ch]">
            From the first drawing to the day-to-day running of a finished
            building, our teams cover each stage in-house.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <article key={s.title} className="flex flex-col">
              <img src={s.img} alt="" className="w-full h-40 object-cover mb-4" />
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                {s.title}
              </h3>
              <p className="text-[#AEB4BC] text-sm mb-3">{s.text}</p>
              <a href="#contact" className="text-[#E8846B] text-sm border-b border-transparent hover:border-[#E8846B] w-fit">
                Continue reading →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

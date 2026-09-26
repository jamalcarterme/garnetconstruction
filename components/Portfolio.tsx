const PROJECTS = [
  {
    name: "Victoria Island Office Tower",
    img: "https://images.pexels.com/photos/2467168/pexels-photo-2467168.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  {
    name: "Ikoyi Mixed-Use Development",
    img: "https://images.pexels.com/photos/32978278/pexels-photo-32978278/free-photo-of-modern-architecture-reflection-with-urban-greenery.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  {
    name: "Lekki Corporate Headquarters",
    img: "https://images.pexels.com/photos/19046330/pexels-photo-19046330/free-photo-of-modern-office-building.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  {
    name: "Ajah Residential Estate",
    img: "https://images.pexels.com/photos/13458422/pexels-photo-13458422.jpeg?auto=compress&cs=tinysrgb&w=900"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid md:grid-cols-2 gap-10 border-b border-ink/10 pb-7 mb-14">
          <div>
            <div className="text-rust text-sm mb-2">Recent projects</div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl">
              A portfolio built on site, not in slides.
            </h2>
          </div>
          <p className="text-steel self-end">
            A sample of the developments our teams have delivered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <figure key={p.name} className="relative overflow-hidden group">
              <img src={p.img} alt={p.name} className="w-full h-64 object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent text-white text-sm p-4">
                {p.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

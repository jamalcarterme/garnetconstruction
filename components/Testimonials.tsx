const QUOTES = [
  {
    text: "Garnet managed our office fit-out end to end and handed over two weeks ahead of schedule.",
    name: "A. Okafor, Lekki"
  },
  {
    text: "Clear communication from foundation to finishing. Our estate came out exactly as designed.",
    name: "F. Adebayo, Ajah"
  },
  {
    text: "Their consulting team helped us scope a project we'd been unsure about for a year.",
    name: "C. Nwosu, Ikoyi"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-ink text-concrete py-24">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="border-b border-concrete/15 pb-7 mb-14">
          <div className="text-[#E8846B] text-sm mb-2">Client feedback</div>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">
            What clients say after handover.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {QUOTES.map((q) => (
            <blockquote key={q.name} className="text-[#D7DBE0]">
              <p>&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-4 text-sm text-[#8F959D]">— {q.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

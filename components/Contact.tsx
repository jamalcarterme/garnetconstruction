"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [note, setNote] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Enter your email...");

  function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNote("Thanks — your message has been noted. We'll reply within one working day.");
    e.currentTarget.reset();
  }

  function handleNewsletterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    setEmailPlaceholder("Thanks — we'll be in touch!");
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid md:grid-cols-2 gap-10 border-b border-ink/10 pb-7 mb-14">
          <div>
            <div className="text-rust text-sm mb-2">Contact us</div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl">
              Tell us about your project.
            </h2>
          </div>
          <p className="text-steel self-end">
            Call, email, or send a message below — our team replies within one
            working day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="space-y-0">
              {[
                { icon: "📞", label: "Call us", value: "+234 902 222 2225", href: "tel:+2349022222225" },
                { icon: "✉", label: "Email", value: "info@garnetconstruct.com", href: "mailto:info@garnetconstruct.com" },
                { icon: "📍", label: "Office", value: "Lagos, Nigeria", href: undefined }
              ].map((item) => (
                <div key={item.label} className="flex gap-4 py-4 border-b border-ink/10">
                  <div className="text-rust text-lg">{item.icon}</div>
                  <div>
                    <h4 className="text-steel text-sm">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="font-display text-lg">{item.value}</a>
                    ) : (
                      <div className="font-display text-lg">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-7 border-t border-ink/10">
              <h4 className="font-semibold mb-1">Need more information?</h4>
              <p className="text-steel text-sm mb-4 max-w-[40ch]">
                Email us and our support staff will contact you back.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex border border-ink">
                <input
                  type="email"
                  required
                  placeholder={emailPlaceholder}
                  className="flex-1 bg-transparent px-4 py-3.5 outline-none"
                />
                <button type="submit" className="bg-ink text-white px-6 hover:bg-rust transition-colors">
                  Send
                </button>
              </form>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="flex flex-col">
            <div className="border-b border-ink py-3.5 flex flex-col">
              <label htmlFor="name" className="text-xs text-steel mb-1">Name</label>
              <input id="name" type="text" required className="bg-transparent outline-none" />
            </div>
            <div className="border-b border-ink py-3.5 flex flex-col">
              <label htmlFor="email" className="text-xs text-steel mb-1">Email</label>
              <input id="email" type="email" required className="bg-transparent outline-none" />
            </div>
            <div className="border-b border-ink py-3.5 flex flex-col">
              <label htmlFor="message" className="text-xs text-steel mb-1">Message</label>
              <textarea id="message" required rows={3} className="bg-transparent outline-none resize-none" />
            </div>
            <button
              type="submit"
              className="mt-6 self-start bg-rust hover:bg-[#832F22] text-white px-8 py-4 font-medium transition-colors"
            >
              Send Message
            </button>
            <div className="text-sm text-steel mt-2 min-h-[1.2em]">{note}</div>
          </form>
        </div>
      </div>
    </section>
  );
}

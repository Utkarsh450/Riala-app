'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <section id="contact" className="w-full bg-[#f8f9fb] px-4 sm:px-10 md:px-16 lg:px-24 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-22">

        {/* ── LEFT ── */}
        <div className="flex flex-col gap-6 w-full lg:w-[45%]">
          <div>
            <p className="text-xs text-zinc-400 font-medium mb-3">
              We are here to help you...
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1f36] leading-tight">
              <span className="text-[#4f6ef7]">Discuss</span> Your Finance
              <br />Solution Needs
            </h2>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
            Simplify you payments with Riala Pay, Paying bills nad making
            transactions has never been easier.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-5 mt-2">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#eef0fd] flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="#4f6ef7" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-medium">E-Mail</p>
                <p className="text-sm font-medium text-[#1a1f36] mt-0.5">
                  info@rialapay.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#eef0fd] flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="#4f6ef7" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-medium">Phone</p>
                <p className="text-sm font-medium text-[#1a1f36] mt-0.5">
                  +1-298-23-242-22
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#eef0fd] flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                     stroke="#4f6ef7" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-medium">Address</p>
                <p className="text-sm font-medium text-[#1a1f36] mt-0.5">
                  No. 1, New York, United States
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form card ── */}
        <div className="w-full lg:w-[55%] bg-white rounded-2xl border border-zinc-100 shadow-sm p-6 sm:p-8 flex flex-col gap-5">

          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#1a1f36]">Full Name</label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-300">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-zinc-200
                           text-[#1a1f36] placeholder:text-zinc-300
                           focus:outline-none focus:ring-2 focus:ring-[#4f6ef7]/30
                           focus:border-[#4f6ef7] transition-all"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#1a1f36]">Phone</label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-300">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
                </svg>
              </span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-zinc-200
                           text-[#1a1f36] placeholder:text-zinc-300
                           focus:outline-none focus:ring-2 focus:ring-[#4f6ef7]/30
                           focus:border-[#4f6ef7] transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#1a1f36]">Email</label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-300">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your Email"
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-zinc-200
                           text-[#1a1f36] placeholder:text-zinc-300
                           focus:outline-none focus:ring-2 focus:ring-[#4f6ef7]/30
                           focus:border-[#4f6ef7] transition-all"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[#1a1f36]">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message goes here..."
              rows={4}
              className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-200
                         text-[#1a1f36] placeholder:text-zinc-300 resize-none
                         focus:outline-none focus:ring-2 focus:ring-[#4f6ef7]/30
                         focus:border-[#4f6ef7] transition-all"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2
                       bg-[#4f6ef7] hover:bg-[#3d5ce0] active:scale-[0.98]
                       text-white text-sm font-semibold
                       py-3.5 rounded-xl transition-all duration-200 mt-1"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.5">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Message
          </button>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
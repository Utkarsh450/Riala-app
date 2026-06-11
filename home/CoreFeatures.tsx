import React from 'react';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b7fc4" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "User Friendly",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b7fc4" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M7 9h10M7 13h6"/>
      </svg>
    ),
    title: "Transaction Detail",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b7fc4" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Pockets",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b7fc4" strokeWidth="1.5">
        <path d="M12 2v20M17 7l-5-5-5 5M17 17l-5 5-5-5"/>
      </svg>
    ),
    title: "Send/Request",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
];

const CoreFeatures = () => {
  return (
    <div id="features" className="w-full sm:mt-28 md:mt-36 bg-white font-['satoshi'] px-6 py-12 sm:px-16 sm:py-16 lg:px-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-52">

        {/* LEFT */}
        <div className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-left lg:w-100 lg:shrink-0">
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-400">
            Core Features
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#43495B] leading-tight">
            Here's How We Are{' '}
            <span className="inline-block bg-[#e8ecfd] text-[#4f6ef7] px-4 py-1 rounded-full">
              Different
            </span>{' '}
            From Others
          </h2>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
            Simplify you payments with Riala Pay, Paying bills nad making
            transactions has never been easier.
          </p>

          <div className="flex flex-col sm:flex-row lg:flex-row gap-3 w-full sm:w-auto mt-1">
            <button className="flex items-center justify-center gap-2 bg-[#43495B] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-85 transition-opacity w-full sm:w-auto">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
              </svg>
              Watch Tizer
            </button>
            <button className="flex items-center justify-center gap-2 border border-zinc-200 text-zinc-700 text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-zinc-50 transition-colors w-full sm:w-auto">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
              </svg>
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT: feature grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-10 flex-1">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-3 items-center text-center lg:items-start lg:text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#eef0fd] flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-[#1a1f36]">{f.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CoreFeatures;
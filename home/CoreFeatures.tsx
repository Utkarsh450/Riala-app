"use client"
import { ArrowUpDown, TicketCheck, User, Palette, Phone, Play } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Pocket from "../public/pocket.png"

const features = [
  {
    icon: <User size={20} stroke="#6b7fc4" />,
    title: "User Friendly",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
  {
    icon: <TicketCheck size={20} stroke="#6b7fc4" />,
    title: "Transaction Detail",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7fc4" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Pockets",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
  {
    icon: <ArrowUpDown size={20} stroke="#6b7fc4" />,
    title: "Send/Request",
    desc: "Simplify you payments with Riala Pay, Paying bills nad making transactions has never been easier.",
  },
];

const CoreFeatures = () => {
  const words = ["Different", "Unique", "Distinct"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="features" className="w-full sm:mt-28 md:mt-36 bg-white font-['satoshi'] px-6 py-12 sm:px-16 sm:py-16 lg:px-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-22">

        {/* LEFT */}
        <div className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-left lg:w-140 lg:shrink-0">
          <p className="text-base font-regular tracking-widest text-zinc-400">
            Core Features
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#43495B] leading-tight">
            Here's How We Are{" "}
            <span className="relative inline-block overflow-hidden bg-[#CBD7FD] text-[#5A81FA] px-2 py-1 rounded-full h-[52px] align-middle">
              <div
                className="transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${currentWord * 52}px)` }}
              >
                {words.map((word) => (
                  <div key={word} className="h-[52px] flex items-center justify-center font-semibold">
                    {word}
                  </div>
                ))}
              </div>
            </span>
            <span className="ml-3 relative top-[1px]">From Others</span>
          </h2>

          <p className="text-base text-zinc-400 leading-relaxed max-w-sm">
            Simplify you payments with Riala Pay, Paying bills nad making
            transactions has never been easier.
          </p>

         <div className="flex flex-row gap-3 w-full mt-1">

  {/* Watch Tizer */}
  <button
    className="
      flex items-center justify-center gap-2
      bg-[#43495B] text-white
      text-sm font-medium
      px-6 h-[40px]
      rounded-[14px]
      shadow-sm
      hover:bg-[#43495B]/85
      hover:-translate-y-0.5
      hover:shadow-md
      transition-all duration-300
      whitespace-nowrap
      flex-1 sm:flex-none
    "
  >
    <Play size={14} className="shrink-0" fill='white' />
    <span className='mt-1'>Watch Tizer</span>
  </button>

  {/* Contact Us */}
  <button
    className="
      flex items-center justify-center gap-2
      bg-white text-[#43495B]
      border border-[#D9DCE5]
      text-sm font-medium
      px-6 h-[40px]
      rounded-[14px]
      hover:bg-[#F8F9FC]
      hover:border-[#C7CBD6]
      hover:-translate-y-0.5
      hover:shadow-sm
      transition-all duration-300
      whitespace-nowrap
      flex-1 sm:flex-none
    "
  >
    <Phone size={15} className="shrink-0" />
    <span className='mt-1'>Contact Us</span>
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
              <h3 className="text-lg font-semibold text-[#1a1f36]">{f.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CoreFeatures;
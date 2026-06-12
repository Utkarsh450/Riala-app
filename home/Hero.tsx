import Image from "next/image";
import React from "react";
import HandMobile from "../public/HandMobile.png";
import mobile2 from "../public/Mobile2.png";
import man from "../public/man.png";
import girl from "../public/girl.png";

import { Download } from 'lucide-react';


const Hero = () => {
  return (
    <div className="w-full font-inter mt-4 lg:min-h-[calc(100vh+2rem)] bg-zinc-100 overflow-hidden">
      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:block relative">
        {/* Background circles */}
        <div
          className="absolute left-1/2 -translate-x-[52%] top-[68%] -translate-y-1/2 rounded-full border border-[#E0E2E8] pointer-events-none"
          style={{ width: "1250px", height: "1250px" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[85%] -translate-y-1/2 rounded-full border border-[#E0E2E8] bg-zinc-50/30 pointer-events-none"
          style={{ width: "680px", height: "680px" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[78%] -translate-y-1/2 rounded-full bg-zinc-50 pointer-events-none"
          style={{ width: "370px", height: "370px" }}
        />

        {/* Title */}
<div className="relative z-20 flex flex-col items-center gap-4 pt-2">        
    <h1 className="text-9xl hi'] mr-56 tracking-tight text-[#43495B]">
            Welcome
          </h1>
          <div className="flex gap-4 mr-20">
            <div className="relative mr-24 mt-12 z-20">
<div className="relative rounded-[28px] bg-white w-[92px] h-[108px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] overflow-visible">                <Image
                  src={man}
                  alt="man"
                  width={80}
                  height={95}
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-[110px] h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>
            <h1 className="text-9xl ml-10 hi'] z-2 tracking-tight text-[#43495B]">
              To Riala
            </h1>
          </div>
        </div>

        {/* Bottom row */}
        <div className="w-full flex items-center justify-between px-10 xl:px-24 2xl:px-34 py-10 mt-10">
          {" "}
         <h1 className="absolute left-10 xl:left-0 top-[140%] translate-x-[65%] -translate-y-1/2 font-semibold font-['inter'] text-[#43495B] text-2xl z-20">
  The ultimate finance <br /> application is here...
</h1>
          <div className="absolute top-[54%] left-[46%] -translate-x-1/2 z-20">
            <Image src={HandMobile} alt="HandMobile" width={480} height={480} />

<div className="absolute top-36 left-full -ml-2 flex flex-col gap-4 w-[320px]">              {/* Girl Card */}
              <div className="relative w-[95px] h-[100px] rounded-[22px] bg-[#FAFAFA] shadow-lg overflow-visible">
                <Image
                  src={girl}
                  alt="girl"
                  width={100}
                  height={130}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 object-cover object-top drop-shadow-xl"
                />
              </div>

              {/* Text */}
<div className="font-medium text-zinc-400 text-sm w-[260px] leading-relaxed">                Simplify your payment with Riala Pay, Paying bills and making
                transactions has never been easier.
              </div>

              {/* Buttons */}
           <div className="flex items-center gap-2">
  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl cursor-pointer bg-[#43495B] hover:bg-[#43495B]/85 text-white text-[11px] font-medium">
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
    Watch Tizer
  </button>

  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-300 cursor-pointer bg-[#F3F4F6] hover:bg-[#F3F4F6]/50 text-[#43495B] text-[11px] font-medium">
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 11.19 18.85a19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
    </svg>
    Contact Us
  </button>
</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TABLET (md to lg) ── */}
   {/* ── TABLET (md to lg) ── */}
<div className="hidden md:flex lg:hidden flex-col w-full">
  <div
    className="relative w-full flex items-end justify-center overflow-hidden"
    style={{ minHeight: "720px" }}
  >
    {/* Title */}
    <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none">
      <h1 className="text-[84px] hi'] tracking-tight text-[#43495B] leading-none">
        Welcome
      </h1>

      <h1 className="text-[84px] hi'] tracking-tight text-[#43495B] leading-none ml-16 -mt-2">
        To Riala
      </h1>
    </div>

    {/* Outer Circle */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/40 z-0"
      style={{
        width: "920px",
        height: "920px",
      }}
    />

    {/* Middle Circle */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/30 z-0"
      style={{
        width: "620px",
        height: "620px",
      }}
    />

    {/* White Circle */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-50 z-0"
      style={{
        width: "380px",
        height: "380px",
      }}
    />

    {/* Background Phone */}
    <div
      className="absolute z-10 opacity-20"
      style={{
        transform: "translateX(-40px) translateY(50px)",
      }}
    >
      <Image
        src={mobile2}
        alt="bg-phone"
        width={220}
        height={360}
        className="object-contain"
      />
    </div>

    {/* Main Phone */}
    <div
      className="relative z-30"
      style={{
        transform: "translateX(-8%) translateY(5px)",
      }}
    >
      <Image
        src={mobile2}
        alt="Riala App"
        width={260}
        height={433}
        className="object-contain drop-shadow-2xl rounded-[2.5rem]"
      />
    </div>
  </div>

  {/* Bottom Text */}
  <div className="flex flex-col items-center gap-4 px-8 pb-12 -mt-20 text-center">
    <p className="font-medium text-zinc-400 text-sm max-w-sm">
      Simplify your payments with Riala Pay, Paying bills and making
      transactions has never been easier.
    </p>

    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 px-5 py-2.5 font-medium text-xs rounded-full bg-[#43495B] text-white cursor-pointer">
        ▶ Watch Tizer
      </div>

      <div className="flex items-center gap-2 px-5 py-2.5 font-medium text-xs rounded-full text-zinc-800 bg-zinc-50 border border-zinc-300 cursor-pointer">
        📞 Contact Us
      </div>
    </div>
  </div>
</div>

      {/* ── MOBILE (below md) ── */}
      <div className="flex md:hidden flex-col w-full">
        <div
          className="relative w-full flex items-end justify-center"
          style={{ minHeight: "560px" }}
        >
          {/* Title — behind phone */}
          <div className="absolute top-2 left-0 right-0 flex flex-col items-center z-0 pointer-events-none select-none">
            <h1
              className="hi'] tracking-tight text-[#43495B] mr-16 leading-none text-7xl text-center"
            >
              Welcome
            </h1>
            <h1
              className="hi'] tracking-tight text-[#43495B]  text-7xl leading-none text-center"
            >
              To Riala
            </h1>
          </div>

          {/* Circles */}
          <div
            className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/50 pointer-events-none z-10"
            style={{ width: "450px", height: "450px" }}
          />
          <div
            className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/50 bg-zinc-50/20 pointer-events-none z-10"
            style={{ width: "580px", height: "580px" }}
          />
          <div
            className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-50/60 pointer-events-none z-10"
            style={{ width: "328px", height: "328px" }}
          />

          {/* Main phone — front, shifted slightly right */}
          <div
            className="relative z-30"
            style={{ transform: "translateX(-8%)  translateY(-95px)" }}
          >
            <Image
              src={mobile2}
              alt="Riala App"
              width={220}
              height={220}
              className="object-contain rounded-[2rem]"
            />
          </div>
        </div>

        {/* Bottom text */}
        <div className="flex flex-col items-center gap-3 px-6 pb-10 -mt-2 text-center">
          <p className="font-medium text-zinc-400 text-sm max-w-[268px]">
            Simplify your payments with Riala Pay, Paying bills and making
            transactions has never been easier.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center gap-2 px-4 py-2 font-medium text-xs rounded-2xl bg-[#43495B] text-white cursor-pointer">
              ▶ Watch Tizer
            </div>
            <div className="flex items-center gap-2 px-4 py-2 font-medium text-xs rounded-2xl text-zinc-800 bg-zinc-50 border border-zinc-300 cursor-pointer">
              📞 Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Image from 'next/image';
import React from 'react'
import HandMobile from "../public/HandMobile.png"

const Hero = () => {
  return (
    <div className="w-full font-inter min-h-screen bg-zinc-100 overflow-hidden">

      {/* ── DESKTOP (lg+): original untouched ── */}
      <div className="hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-8xl font-['satoshi'] mr-56 tracking-tight text-[#43495B]">Welcome</h1>
          <div className="flex gap-4 mr-20">
            <div className="rounded-xl mr-20 shadow mt-8 shadow-zinc-800 overflow-hidden">
              <Image
                src="https://images.unsplash.com/file-1715714113747-b8b0561c490eimage?w=416&dpr=2&auto=format&fit=crop&q=60"
                alt="image.png"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-8xl font-['satoshi'] z-2 tracking-tight text-[#43495B]">To Riala</h1>
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-34 py-10 mt-10">
          <h1 className="font-semibold font-['inter'] text-zinc-800 text-xl">The ultimate finance <br /> applicaton is here...</h1>
          <div className="w-80 h-80 border relative top-0 left-0 translate-x-22 z-1 -translate-y-1/2 bg-zinc-50 rounded-full" />
          <Image className="absolute top-0 left-0 translate-x-130 translate-y-52 z-3" src={HandMobile} alt="HandMobile" width={440} height={440} />
          <div className="flex flex-col gap-4">
            <div className="w-28 h-34 rounded-xl bg-slate-800 shadow-zinc-800" />
            <div className="font-medium text-zinc-400 text-sm">Simplify your payment with Riala Pay, Paying bills and <br /> making transactions has never been easier.</div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 w-fit h-fit font-medium text-xs rounded-2xl bg-zinc-800 text-white">Watch Tizer</div>
              <div className="px-3 py-1 w-fit h-fit font-medium text-xs rounded-2xl text-zinc-800 bg-zinc-50 border border-zinc-300">Contact Us</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TABLET + MOBILE (below lg): matches your screenshots ── */}
      <div className="lg:hidden flex flex-col w-full">

        {/* Title */}
        <div className="flex flex-col items-center pt-8 px-6">
          <h1 className="text-6xl sm:text-7xl font-['satoshi'] tracking-tight text-[#43495B] text-center">Welcome</h1>
          <h1 className="text-6xl sm:text-7xl font-['satoshi'] tracking-tight text-[#43495B] text-center">To Riala</h1>
        </div>

        {/* Phone centered over circle */}
        <div className="relative flex items-center justify-center mt-4 mx-auto w-full max-w-md">
          {/* Circle background */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 bg-zinc-50 rounded-full border border-zinc-200" />
          {/* Phone on top */}
          <Image
            src={HandMobile}
            alt="HandMobile"
            width={320}
            height={320}
            className="absolute z-10 w-56 sm:w-72 object-contain drop-shadow-xl"
          />
        </div>

        {/* Description + Buttons below phone */}
        <div className="flex flex-col items-center gap-4 mt-6 px-8 pb-10">
          <p className="font-medium text-zinc-400 text-sm text-center">
            Simplify your payments with Riala Pay, Paying bills and<br />
            making transactions has never been easier.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-4 py-2 font-medium text-xs rounded-2xl bg-zinc-800 text-white cursor-pointer">
              ▶ Watch Tizer
            </div>
            <div className="flex items-center gap-1 px-4 py-2 font-medium text-xs rounded-2xl text-zinc-800 bg-zinc-50 border border-zinc-300 cursor-pointer">
              📞 Contact Us
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
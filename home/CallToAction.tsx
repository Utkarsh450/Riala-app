import Image from 'next/image';
import phoneImg from '../public/mobile1.png';

const CTABanner = () => {
  return (
    <section id="calltoaction" className="w-full bg-zinc-100 mt-28 px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-14">
      <div className="relative bg-[#5b6ef5] rounded-3xl max-w-5xl mx-auto min-h-[280px] sm:min-h-[340px] flex items-center overflow-visible">

        {/* Phone — overflows top and bottom */}
        <div className="hidden sm:block absolute -left-6 md:left-10 -bottom-8 z-10">
          <Image
            src={phoneImg}
            alt="Riala Pay App"
            width={240}
            height={480}
            className="w-[200px] md:w-[200px] h-auto object-contain"
            priority
          />
        </div>

        {/* Text content */}
<div className="relative z-10 flex flex-col gap-4 w-full px-6 py-10 sm:pl-[380px] md:pl-[420px] sm:pr-10 md:pr-16 text-left items-start">  <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
    Ready? Let's Start with <span className="font-bold">Riala Pay</span>
    <br />and Get <span className="font-extrabold">Awesome Experience!</span>
  </h2>

  <p className="text-sm text-white/75 leading-relaxed max-w-sm">
    Simplify you payments with Riala Pay, Simplify you payments with
    Riala Pay, Paying bills nad making transactions has never been
    easier. Paying bills nad making.
  </p>

  <div className="flex justify-start mt-2">
    <button className="flex items-center gap-2 bg-[#43495B] text-white text-sm font-medium px-5 py-3 rounded-xl hover:opacity-85 transition-opacity">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
      </svg>
      Watch Tizer
    </button>
  </div>
</div>

      </div>
    </section>
  );
};

export default CTABanner;
import Image from 'next/image';
import phoneImg from '../public/mobile1.png';

const CTABanner = () => {
  return (
    <section id="calltoaction" className="w-full bg-zinc-100 mt-28 px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-14">
      <div className="relative bg-[#5b6ef5] rounded-3xl overflow-visible max-w-5xl mx-auto min-h-[220px] sm:min-h-[320px] flex items-center">

        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white/10 -translate-x-10 -translate-y-10 pointer-events-none" />
        <div className="absolute bottom-0 left-32 w-32 h-32 rounded-full bg-white/10 translate-y-8 pointer-events-none" />
        <div className="absolute top-6 right-16 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute bottom-6 right-8 w-14 h-14 rounded-full bg-white/10 pointer-events-none" />

        {/* Phone — hidden on mobile, visible sm+ */}
        <div className="
          hidden sm:flex
          items-center justify-center
          flex-shrink-0
          sm:absolute sm:left-6 md:left-10
          sm:-top-8 sm:-bottom-8
          sm:h-[calc(100%+4rem)]
          z-10
        ">
          <div style={{ perspective: '900px' }}>
            <Image
              src={phoneImg}
              alt="Riala Pay App"
              width={220}
              height={440}
              className="w-[190px] md:w-[220px] h-auto object-contain"
              style={{
                transform: 'rotateY(-12deg) rotateX(3deg) scale(1.04)',
                transformStyle: 'preserve-3d',
                filter: 'drop-shadow(-12px 20px 24px rgba(0,0,0,0.35))',
              }}
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="
          relative z-10
          flex flex-col gap-4
          w-full
          px-6 py-10
          sm:pl-[230px] md:pl-[260px]
          sm:pr-8 md:pr-12
          sm:py-10
          text-center sm:text-left
        ">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
            Ready? Let's Start with{' '}
            <span className="text-[#c7d2fe]">Riala Pay</span>
            <br className="hidden sm:block" />
            {' '}and Get{' '}
            <span className="font-extrabold">Awesome Experience!</span>
          </h2>

          <p className="text-sm text-white/75 leading-relaxed max-w-sm mx-auto sm:mx-0">
            Simplify you payments with Riala Pay, Simplify you payments with
            Riala Pay, Paying bills nad making transactions has never been
            easier. Paying bills nad making.
          </p>

          <div className="flex justify-center sm:justify-start mt-2">
            <button className="flex items-center gap-2 bg-[#1a1f36] text-white text-sm font-medium px-5 py-3 rounded-xl hover:opacity-85 transition-opacity">
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
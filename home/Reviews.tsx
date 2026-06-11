'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Zahra Hashemi',
    since: 'User Since 2019',
    avatar: '/avatars/zahra.jpg',
    text: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est. at, placerat. cursus faucibus elementum vehicula.',
    stars: 5,
  },
  {
    name: 'Fateme Ahmadi',
    since: 'User Since 2019',
    avatar: '/avatars/fateme.jpg',
    text: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est. at, placerat. cursus faucibus elementum vehicula. est. ex risus urna. vehicula, efficitur.',
    stars: 5,
  },
  {
    name: 'Alireza Ezlegini',
    since: 'User Since 2019',
    avatar: '/avatars/alireza.jpg',
    text: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est. at, placerat. cursus faucibus elementum vehicula.',
    stars: 5,
  },
  {
    name: 'Reza Mohammadi',
    since: 'User Since 2020',
    avatar: '/avatars/reza.jpg',
    text: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est. at, placerat. cursus faucibus elementum vehicula.',
    stars: 5,
  },
  {
    name: 'Sara Karimi',
    since: 'User Since 2021',
    avatar: '/avatars/sara.jpg',
    text: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est. at, placerat. cursus faucibus elementum vehicula.',
    stars: 4,
  },
  {
    name: 'Fateme Ahmadi',
    since: 'User Since 2019',
    avatar: '/avatars/fateme.jpg',
    text: 'scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est. at, placerat. cursus faucibus elementum vehicula.',
    stars: 4,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={i < count ? '#f59e0b' : 'none'}
        stroke={i < count ? '#f59e0b' : '#d1d5db'}
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' });
  };

  return (
    <section id="reviews" className="w-full font-['inter'] bg-[#f8f9fb] px-22 py-14 sm:py-20">

      {/* Header */}
    {/* Header */}
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5
                px-4 sm:px-10 md:px-16 lg:px-24 mb-8 sm:mb-10">

  {/* Left: badge + heading */}
  <div className="flex flex-col gap-3 items-center sm:mx-auto text-center w-full sm:w-auto sm:items-start sm:text-left">
    <span className="self-center sm:self-center flex items-center gap-1.5 text-xs font-medium
                     text-zinc-50 border border-[#c7d2fe] bg-[#4f6ef7]
                     px-3 py-1.5 rounded-full">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
           stroke="#4f6ef7" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
      Trusted By 200K+ Clients
    </span>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1f36] leading-tight">
      What Our Clients Say About Us?
    </h2>
  </div>

  {/* Right: scroll buttons */}
  <div className="flex items-center gap-2 self-center sm:self-end shrink-0">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                        transition-all duration-200
                        ${canScrollLeft
                          ? 'border-[#4f6ef7] text-[#4f6ef7] hover:bg-[#4f6ef7] hover:text-white'
                          : 'border-zinc-200 text-zinc-300 cursor-not-allowed'}`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                        transition-all duration-200
                        ${canScrollRight
                          ? 'border-[#4f6ef7] text-[#4f6ef7] hover:bg-[#4f6ef7] hover:text-white'
                          : 'border-zinc-200 text-zinc-300 cursor-not-allowed'}`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Cards scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2
                   px-4 sm:px-10 md:px-16 lg:px-24
                   snap-x snap-mandatory
                   [&::-webkit-scrollbar]:hidden
                   [-ms-overflow-style:none]
                   [scrollbar-width:none]"
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 flex flex-col gap-4
                       w-[78vw] sm:w-[280px] md:w-[300px] lg:w-[290px] xl:w-[310px]
                       bg-white rounded-2xl border border-zinc-100
                       p-5 sm:p-6 shadow-sm"
          >
            {/* Stars */}
            <Stars count={r.stars} />

            {/* Text */}
            <p className="text-sm text-zinc-500 leading-relaxed flex-1">
              {r.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 mt-auto">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-200 flex-shrink-0">
                <Image
                  src={r.avatar}
                  alt={r.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a1f36] leading-tight">{r.name}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{r.since}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Right padding spacer so last card doesn't flush edge */}
        <div className="flex-shrink-0 w-4 sm:w-10 md:w-16 lg:w-24" />
      </div>

    </section>
  );
};

export default ReviewsSection;
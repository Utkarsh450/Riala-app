"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const reviews = [
  {
    name: "Zahra Hashemi",
    since: "User Since 2019",
    avatar: "/avatars/zahra.jpg",
    text: "scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est. at, placerat. cursus faucibus elementum vehicula.",
    stars: 5,
  },
  {
    name: "Fateme Ahmadi",
    since: "User Since 2019",
    avatar: "/avatars/fateme.jpg",
    text: "scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est. at, placerat. cursus faucibus elementum vehicula.",
    stars: 5,
  },
  {
    name: "Alireza Ezlegini",
    since: "User Since 2019",
    avatar: "/avatars/alireza.jpg",
    text: "scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est. at, placerat. cursus faucibus elementum vehicula.",
    stars: 5,
  },
  {
    name: "Reza Mohammadi",
    since: "User Since 2020",
    avatar: "/avatars/reza.jpg",
    text: "scelerisque efficitur. nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem. nec urna ultrices sed Nunc turpis est.",
    stars: 5,
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
        fill={i < count ? "#F59E0B" : "none"}
        stroke={i < count ? "#F59E0B" : "#D1D5DB"}
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 10
    );
  };

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    updateScrollState();

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden isolate bg-[#F8F9FB] py-20 px-2">

      {/* Arcs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 scale-x-[1.2] -top-[650px]">
          {[990, 890, 790].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border border-[#E5E7EB]"
              style={{
                width: size,
                height: size,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          ))}
        </div>
      </div>
      <div className="mt-16">
          {/* Header */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <div className="flex items-center gap-2 bg-[#5A81FA] text-white text-[12px] font-medium px-4 py-1.5 rounded-full">
          <Star size={15}/> Trusted By 200K+ Clients
        </div>

        <h2 className="mt-5 text-[28px] md:text-[42px] font-bold text-[#111827]">
          What Our Clients Say About Us?
        </h2>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="
          flex gap-5
          overflow-x-auto
          scroll-smooth
          px-6 md:px-10 lg:px-16
          mt-12 pb-4
          snap-x snap-mandatory
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="
              snap-start
              flex-shrink-0
              w-[320px]
              min-h-[250px]
              bg-[#FAFAFA]
              border border-[#E5E7EB]
              rounded-[22px]
              p-5
              flex flex-col
            "
          >
            <Stars count={review.stars} />

            <p className="mt-5 text-[14px] leading-7 text-[#9CA3AF] flex-1">
              {review.text}
            </p>

            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-200">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-[14px] font-semibold text-[#111827]">
                  {review.name}
                </h4>

                <p className="text-[11px] text-[#9CA3AF]">
                  {review.since}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Mobile Controls */}
      <div className="flex sm:hidden justify-center gap-3 mt-6">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="w-10 h-10 flex items-center justify-center"
        >
          <ChevronLeft color="black" />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="w-10 h-10 flex items-center justify-center"
        >
          <ChevronRight color="black" />
        </button>
      </div>
    </section>
  );
  
}
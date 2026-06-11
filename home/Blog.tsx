'use client';

import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: 'How to get to know riala more and more b...',
    desc: 'Simplify you payments with Riala Pay, Paying bills nad making tr...',
    image: '/blog/post1.jpg',
    large: true,
  },
  {
    id: 2,
    title: 'How to get to know riala more and more b...',
    desc: 'Simplify you payments with Riala Pay, Paying bills nad making tr...',
    image: '/blog/post2.jpg',
    large: false,
  },
  {
    id: 3,
    title: 'How to get to know riala more and more b...',
    desc: 'Simplify you payments with Riala Pay, Paying bills nad making tr...',
    image: '/blog/post3.jpg',
    large: false,
  },
  {
    id: 4,
    title: 'How to get to know riala more and more b...',
    desc: 'Simplify you payments with Riala Pay, Paying bills nad making tr...',
    image: '/blog/post4.jpg',
    large: false,
  },
];

const BlogCard = ({
  post,
  className = '',
}: {
  post: (typeof posts)[0];
  className?: string;
}) => (
  <div
  id="blog"
    className={`relative overflow-hidden rounded-2xl bg-[#eef0f7] group cursor-pointer ${className}`}
  >
    {/* Image */}
    <div className="absolute inset-0">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
    </div>

    {/* Text overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <h3 className="text-white text-sm sm:text-base font-semibold leading-snug">
        {post.title}
      </h3>
      <p className="text-white/70 text-xs mt-1 leading-relaxed line-clamp-1">
        {post.desc}
      </p>
    </div>
  </div>
);

const BlogSection = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16">

      {/* Header */}
      <div className="flex items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <p className="text-sm sm:text-base font-medium text-[#1a1f36]">
            Get to know Riala With Our
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4f6ef7] leading-tight">
            Blog Posts
          </h2>
        </div>

        <button className="flex items-center gap-2 bg-[#4f6ef7] text-white
                           text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl
                           hover:bg-[#3d5ce0] transition-colors shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          View All Posts
        </button>
      </div>

      {/* Grid */}
      {/* 
        Layout matches screenshot:
        - Row 1: large card (spans 2 cols) | small card
        - Row 2: small card | small card (spans 2 cols)
        On mobile: all cards stack in single column
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px] sm:auto-rows-[200px] md:auto-rows-[220px]">

        {/* Card 1 — large, spans 2 cols on lg */}
        <BlogCard
          post={posts[0]}
          className="lg:col-span-2 sm:row-span-1"
        />

        {/* Card 2 — top right */}
        <BlogCard post={posts[1]} />

        {/* Card 3 — bottom left */}
        <BlogCard post={posts[2]} />

        {/* Card 4 — large bottom right, spans 2 cols on lg */}
        <BlogCard
          post={posts[3]}
          className="lg:col-span-2"
        />

      </div>

    </section>
  );
};

export default BlogSection;
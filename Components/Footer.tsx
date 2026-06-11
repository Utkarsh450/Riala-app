import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import phone from "../public/mobile1.png"; // apna actual phone mockup image use karo

const footerLinks = {
  Product: ["Patch", "Updates", "Careers"],
  Company: ["Patch", "Api", "Beta Test"],
  Support: ["Help Center", "Account Information", "Early Access", "Talk to Support"],
};

export default function FooterSection() {
  return (
    <footer className="w-full bg-white">
      {/* Phone + arc rings */}
      <div className="relative w-full flex justify-center items-end overflow-hidden bg-white pt-12 h-[260px] sm:h-[360px]">
        {/* Arc rings */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          {[160, 240, 320, 400, 480].map((r, i) => (
            <div
              key={i}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 border border-gray-200 rounded-t-full"
              style={{ width: r * 2, height: r }}
            />
          ))}
        </div>

        {/* Phone image — cropped from bottom, top portion visible */}
        <div className="relative z-10 w-[150px] sm:w-[190px] h-[220px] sm:h-[300px] overflow-hidden">
          <Image
            src={phone}
            alt="Riala App"
            fill
            className="object-top object-cover"
          />
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-gray-100 px-6 pt-10 pb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">

          {/* Brand + newsletter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="32" height="32" viewBox="0 0 43 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="43" height="35" rx="6" fill="url(#logoGrad)" />
                <path d="M10 8h12c4.4 0 8 3.6 8 8s-3.6 8-8 8h-4l8 8H20l-8-8v8h-2V8z M12 10v10h10c3.3 0 6-2.7 6-6s-2.7-6-6-6H12z" fill="white" />
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="43" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7C3AED" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">Riala</span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Simplify your payments with Riala Pay. Paying bills and making transactions has never been easier.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-full border border-gray-200 shadow-sm px-4 py-2 max-w-sm gap-2 sm:gap-0">
              <Mail className="w-4 h-4 text-gray-400 shrink-0 mr-2 hidden sm:block" />
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 text-sm text-gray-500 outline-none bg-transparent placeholder:text-gray-400 min-w-0"
              />
              <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-medium px-5 py-2 rounded-full whitespace-nowrap">
                Join News Letter
              </button>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-base font-bold text-gray-800 mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-200 flex justify-center">
          <p className="text-xs text-gray-400">© All Rights Reserved 2025 – By iGraphical School</p>
        </div>
      </div>
    </footer>
  );
}
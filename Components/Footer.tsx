import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import phone from "../public/mobile1.png"; // apna actual phone mockup image use karo
import logo from "../public/Logo.png";
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
       {/* Arc rings — centered behind phone */}
{/* Arc rings — centered behind phone, full circles */}
<div className="absolute inset-0 flex items-center justify-center">
  <div className="relative" style={{ width: 0, height: 0 }}>
    {[100, 160, 220, 280, 340].map((r, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-gray-200"
        style={{
          width: r * 2,
          height: r * 2,
          top: -r,
          left: -r,
        }}
      />
    ))}
  </div>
</div>

{/* White fade at bottom */}
<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

{/* White fade at bottom */}
<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

        {/* Phone image — cropped from bottom, top portion visible */}
        <div className="relative z-10 w-[150px] sm:w-[200px] h-[220px] sm:h-[280px] overflow-hidden">
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
              <Image src={logo} alt="logo" width={25} height={25}/>
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
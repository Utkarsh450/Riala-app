import Image from "next/image"
import qr from "../public/qr.png"
import account from "../public/account.png"
import stats from "../public/Stats.png"

const Why = () => {
  return (
    <section id="whyrelay" className="w-full bg-[#F3F4F6] md:mt-36 mt-28 px-4 sm:px-6 lg:px-22 py-6">

      <div className="relative w-full h-100 bg-zinc-800 rounded-[1.5rem] pt-8 pb-24 overflow-hidden">

        {/* Arc rings */}
        {[120, 180, 240, 300, 360].map((r, i) => (
          <div
            key={i}
            className="absolute bottom-0 border border-white/[0.07] rounded-t-full"
            style={{ width: r * 2, height: r, left: "50%", transform: "translateX(-50%)" }}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center text-center gap-1 px-4">
          <p className="font-medium text-zinc-500 text-xs tracking-widest">
            Why Riala?
          </p>
          <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
            We Made Banking{" "}
            <span className="text-blue-500">Easier!</span>
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="relative lg:ml-14 -mt-56 z-10 flex flex-col lg:flex-row items-stretch px-2 sm:px-4 lg:px-10 gap-8">

        {/* Card 1 — text top, image bottom */}
       <div className="relative bg-[#F3F4F6] h-100 rounded-2xl overflow-hidden flex flex-col px-16">

  {/* Concentric Circles */}
 <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
  {[300, 340, 380].map((size) => (
    <div
      key={size}
      className="absolute rounded-full border border-[#E3E3E3]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  ))}
</div>

  <div className="pt-6 pb-3 px-5 relative z-10">
    <h3 className="font-bold text-xl text-center text-gray-900 leading-snug">
      QR scanner;<br />
      a piece of cake
    </h3>
  </div>

  <div className="flex justify-center overflow-hidden h-[220px] sm:h-[300px] relative z-10">
    <Image
      src={qr}
      alt="QR Scanner Phone"
      width={200}
      height={500}
      className="object-top object-cover mt-2"
    />
  </div>

</div>

        {/* Card 2 — image top, text bottom, slightly raised */}
      <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden flex flex-col px-16">

  <div className="relative flex justify-center overflow-hidden h-[220px] sm:h-[300px]">

    {/* Circles behind bottom of image */}
    <div className="absolute left-1/2 top-[95%] -translate-x-1/2 pointer-events-none">
      {[300, 340, 380].map((size) => (
        <div
          key={size}
          className="absolute rounded-full border border-[#E3E3E3]"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>

    <Image
      src={stats}
      alt="Filter Phone"
      width={200}
      height={500}
      className="object-bottom object-cover relative z-10"
    />
  </div>

  <div className="pt-3 pb-6 px-5">
    <h3 className="font-bold text-lg text-center sm:text-xl text-gray-900 leading-snug">
      Control card spend,<br />
      before it happens.
    </h3>
  </div>

</div>

        {/* Card 3 — text top, image bottom */}
    <div className="bg-[#F3F4F6] relative rounded-2xl overflow-hidden flex flex-col px-16">

  {/* Circles */}
  <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
    {[300, 340, 380].map((size) => (
      <div
        key={size}
        className="absolute rounded-full border border-[#E3E3E3]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    ))}
  </div>

  <div className="pt-6 pb-3 px-5 relative z-10">
    <h3 className="font-bold text-lg sm:text-xl text-center text-gray-900 leading-snug">
      Control card spend,<br />before it happens.
    </h3>
  </div>

  <div className="flex justify-center overflow-hidden h-[220px] sm:h-[300px] relative z-10">
    <Image
      src={account}
      alt="Credit Card Phone"
      width={200}
      height={500}
      className="object-top object-cover mt-2"
    />
  </div>

</div>

      </div>
    </section>
  )
}

export default Why
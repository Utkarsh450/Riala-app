import Image from "next/image"
import qr from "../public/qr.png"
import account from "../public/account.png"
import stats from "../public/Stats.png"

const Why = () => {
  return (
    <section className="w-full bg-[#e5e5e7] px-4 sm:px-8 lg:px-14 py-8">

      <div className="relative w-full bg-zinc-800 rounded-[1.5rem] pt-10 pb-28 sm:pb-32 overflow-hidden">

        {/* Arc rings */}
        {[160, 240, 320, 400, 480].map((r, i) => (
          <div
            key={i}
            className="absolute bottom-0 border border-white/[0.07] rounded-t-full"
            style={{ width: r * 2, height: r, left: "50%", transform: "translateX(-50%)" }}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center text-center gap-2 px-4">
          <h1 className="font-medium text-zinc-500 text-sm tracking-widest uppercase">
            Why Riala?
          </h1>
          <p className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
            We Made Banking{" "}
            <span className="text-blue-500">Easier!</span>
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="relative -mt-20 sm:-mt-10 z-10 flex flex-col lg:flex-row items-stretch px-0 sm:px-6 lg:px-10 gap-4 sm:gap-6">

        {/* Card 1 */}
        <div className="bg-[#f2f2f4] rounded-3xl overflow-hidden flex flex-col flex-1">
          <div className="pt-8 pb-4 px-6 text-center">
            <h3 className="font-bold text-xl sm:text-2xl text-gray-900 leading-snug">
              QR scanner;<br />a piece of cake
            </h3>
          </div>
          <div className="flex justify-center overflow-hidden h-[260px] sm:h-[300px]">
            <Image
              src={qr}
              alt="QR Scanner Phone"
              width={260}
              height={520}
              className="object-top object-cover mt-4"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f2f2f4] rounded-3xl overflow-hidden flex flex-col flex-1 lg:-mt-8">
          <div className="flex justify-center overflow-hidden h-[260px] sm:h-[300px]">
            <Image
              src={stats}
              alt="Filter Phone"
              width={260}
              height={520}
              className="object-bottom object-cover"
            />
          </div>
          <div className="pt-4 pb-8 px-6">
            <h3 className="font-bold text-xl sm:text-2xl text-gray-900 leading-snug">
              Control card spend,<br />before it happens.
            </h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f2f2f4] rounded-3xl overflow-hidden flex flex-col flex-1">
          <div className="pt-8 pb-4 px-6">
            <h3 className="font-bold text-xl sm:text-2xl text-gray-900 leading-snug">
              Control card spend,<br />before it happens.
            </h3>
          </div>
          <div className="flex justify-center overflow-hidden h-[260px] sm:h-[300px]">
            <Image
              src={account}
              alt="Credit Card Phone"
              width={260}
              height={520}
              className="object-top object-cover mt-4"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Why
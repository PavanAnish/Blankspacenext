import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION (MERGED + ANIMATED) */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #2b1b4a, #9B4BF9, #C78AFC)",
        }}
      >
        {/* ROTATING CUBIC RING */}
        <div
          className="
            absolute 
            right-[-140px] 
            bottom-[-140px] 
            w-[420px] 
            h-[420px]
            rounded-full
            opacity-40
            blur-md
            animate-spin-slow
            bg-[conic-gradient(from_0deg,#9B4BF9,#C78AFC,#9B4BF9)]
            ring-mask
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-28 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-purple-200 mb-4">Welcome to</p>

            <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
              BLANKSPACE —
              <br />
              Ideas that teach.
            </h1>

            <p className="text-purple-100 mt-6 max-w-xl">
              We build learning environments, online programs and community tools
              that help educators scale meaningful teaching experiences.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-white text-[#6b32d1] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                Explore Programs
              </button>
              <button className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                Join the Community
              </button>
            </div>
          </div>

          {/* RIGHT FLOATING CARD */}
          <div className="flex justify-center md:justify-end">
            <div
              className="
                w-[320px]
                h-[320px]
                bg-white
                rounded-3xl
                shadow-2xl
                animate-float
              "
            />
          </div>

        </div>
      </section>
    </main>
  );
}

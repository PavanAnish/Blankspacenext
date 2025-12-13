import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #2b1b4a 0%, #9B4BF9 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="text-purple-200 mb-4">Welcome to</p>
            <h1 className="text-white text-5xl font-extrabold leading-tight">
              BLANKSPACE —
              <br />
              Ideas that teach.
            </h1>
            <p className="text-purple-100 mt-6 max-w-xl">
              We build learning environments, online programs and community tools
              that help educators scale great teaching.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-white text-[#6b32d1] px-6 py-3 rounded-lg font-semibold">
                Explore Programs
              </button>
              <button className="border border-white/30 text-white px-6 py-3 rounded-lg">
                Join the Community
              </button>
            </div>
          </div>

          {/* RIGHT (WHITE CARD PLACEHOLDER) */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[320px] h-[320px] bg-white rounded-3xl shadow-2xl" />
          </div>

        </div>
      </section>
    </main>
  );
}

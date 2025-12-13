import Navbar from "@/components/Navbar";

export default function HeroDemo() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden min-h-[90vh] flex items-center"
        style={{
          background: "linear-gradient(120deg, #2b1b4a, #9B4BF9, #C78AFC)"
        }}
      >
        {/* Rotating Ring */}
        <div className="absolute right-[-120px] bottom-[-120px] w-[420px] h-[420px]
          rounded-full opacity-40 blur-md animate-spin-slow
          bg-[conic-gradient(from_0deg,#9B4BF9,#C78AFC,#9B4BF9)]
          mask-ring" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* TEXT */}
          <div>
            <h1 className="text-white text-6xl font-extrabold">
              Ideas that
              <br /> move people.
            </h1>
            <p className="text-purple-100 mt-6 max-w-lg">
              A living, evolving space for educators, builders and learners.
            </p>
          </div>

          {/* FLOATING CARD */}
          <div className="relative">
            <div className="w-[320px] h-[320px] bg-white rounded-3xl shadow-2xl
              animate-float" />
          </div>

        </div>
      </section>
    </main>
  );
}

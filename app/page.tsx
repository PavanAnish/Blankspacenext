import Navbar from "@/components/Navbar";
import LogoScrollMotion from "@/components/LogoScrollMotion";

export default function Home() {
  return (
    <main className="page-enter page-enter-active min-h-screen bg-white overflow-hidden">

    
      <Navbar />

      {/* HERO SECTION (MERGED + ANIMATED) */}
      <section
  className="relative overflow-hidden"
  style={{
    background: "linear-gradient(120deg, #2b1b4a, #9B4BF9, #C78AFC)",
  }}
>
  {/* HERO CONTENT GRID */}
  <div className="relative z-10 max-w-7xl mx-auto px-8 py-28 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
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
          {/* PRIMARY BUTTON */}
  <button
    className="
      bg-white
      text-[#6b32d1]
      px-6
      py-3
      rounded-lg
      font-semibold
      transition
      duration-300
      ease-out
      hover:-translate-y-1
      hover:shadow-xl
      active:translate-y-0
      active:scale-[0.97]
    "
  >
    Explore Programs
  </button>

  {/* SECONDARY BUTTON */}
  <button
    className="
      border
      border-white/30
      text-white
      px-6
      py-3
      rounded-lg
      transition
      duration-300
      ease-out
      hover:bg-white/10
      hover:-translate-y-0.5
      active:scale-[0.98]
    "
  >
    Join the Community
  </button>
      </div>
    </div>

    {/* RIGHT SVG (STATIC FOR NOW) */}
  <div className="relative hidden md:flex justify-end items-center">
  
  {/* Soft glow */}
  <div
    className="absolute right-6 w-[340px] h-[340px] rounded-full blur-3xl opacity-30"
    style={{
      background: "radial-gradient(circle, #ff00fbff, transparent 70%)",
    }}
  />

  {/* SVG */}
    <img
    src="/pills.svg"
    alt="Blankspace visual"
    className="
      relative
      z-10
      w-[420px]
      opacity-90
      translate-x-6
      translate-y-2
      select-none
    "
  />
</div>


  </div>
</section>


      {/* ================= MARQUEE SECTION ================= */}
<section className="bg-white py-16">
  <div className="marquee">
    <div className="marquee-track">

      {/* First set */}
      <span className="marquee-item">LEARN</span>
      <span className="marquee-item">BUILD</span>

      <span className="marquee-item marquee-highlight">
        BLANKSPACE
      </span>

      <span className="marquee-item">COLLABORATE</span>
      <span className="marquee-item">MENTOR</span>
      <span className="marquee-item">CREATE</span>

      {/* Duplicate set */}
      <span className="marquee-item">LEARN</span>
      <span className="marquee-item">BUILD</span>

      <span className="marquee-item marquee-highlight">
        BLANKSPACE
      </span>

      <span className="marquee-item">COLLABORATE</span>
      <span className="marquee-item">MENTOR</span>
      <span className="marquee-item">CREATE</span>

    </div>
  </div>
</section>


      {/* COMMUNITY VALUES SECTION */}
      <section className="relative py-28 overflow-hidden bg-white">
  <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* LEFT CONTENT */}
    <div>
      <p className="uppercase tracking-widest text-sm text-purple-500 font-semibold mb-4">
        Built Around People
      </p>

      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Our Community Values
      </h2>

      <p className="mt-6 text-gray-600 max-w-md">
        Blankspace is a people-first community focused on learning,
        collaboration, and real-world growth.
      </p>
    </div>

    {/* RIGHT ACCORDION */}
    <div className="space-y-4">

      {[
        {
          title: "Mentorship & Support",
          content:
            "Connect with mentors, educators, and peers who guide you through learning and growth."
        },
        {
          title: "Real-World Collaboration",
          content:
            "Work on meaningful projects with people who value practical outcomes."
        },
        {
          title: "Learning Resources",
          content:
            "Access curated tools, templates, and shared knowledge built by the community."
        },
        {
          title: "Events & Workshops",
          content:
            "Participate in discussions, workshops, and meetups that spark ideas and action."
        }
      ].map((item, index) => (
        <details
          key={index}
          className="group rounded-2xl border border-gray-200 bg-white shadow-sm open:shadow-lg transition"
        >
          <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-gray-900">
            {item.title}
            <span className="text-purple-500 group-open:rotate-45 transition-transform text-xl">
              +
            </span>
          </summary>

          <div className="px-6 pb-5 text-gray-600">
            {item.content}
          </div>
        </details>
      ))}

    </div>
  </div>
  {/* DEBUG: CUBIC ROTATION */}
<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
  <div className="cubic-3d" />
</div>


    
  {/* BLURRED GRADIENT DECORATION */}
  <div
    className="absolute -left-40 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full opacity-40 blur-3xl"
    style={{
      background: "radial-gradient(circle, #C78AFC, #9B4BF9)"
    }}
  />

  {/* CUBIC RING DECORATION */}
  <div
    className="
      absolute
      right-[-120px]
      bottom-[-120px]
      w-[360px]
      h-[360px]
      rounded-full
      opacity-30
      blur-md
      animate-spin-slow
      bg-[conic-gradient(from_0deg,#9B4BF9,#C78AFC,#9B4BF9)]
      ring-mask
    "
  />
      </section>

          </main>
      );
}

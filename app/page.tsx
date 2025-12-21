import Navbar from "@/components/Navbar";
import LogoScrollMotion from "@/components/LogoScrollMotion";
import RevealText from "@/components/RevealText";
import ParallaxSVG from "@/components/ParallaxSVG";


export default function Home() {
  return (
    <main className="page-enter page-enter-active min-h-screen bg-white overflow-hidden">

    
      <Navbar />

      <section
  className="
    relative
    min-h-screen
    flex
    items-center
    overflow-hidden
  "
  style={{
    background: "linear-gradient(120deg, #120b24, #2b1b4a)",
  }}
>
  {/* =====================
      BACKGROUND LIGHTS
     ===================== */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div
      className="absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full blur-[140px] opacity-35"
      style={{
        background: "#9B4BF9",
        animation: "floatLight 32s ease-in-out infinite",
      }}
    />
    <div
      className="absolute bottom-[-160px] right-1/4 w-[560px] h-[560px] rounded-full blur-[160px] opacity-30"
      style={{
        background: "#C78AFC",
        animation: "floatLight 36s ease-in-out infinite reverse",
      }}
    />
  </div>

  {/* Contrast overlay for readability */}
  <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/40 via-transparent to-black/10" />

  {/* =====================
      HERO CONTENT GRID
     ===================== */}
  <div className="relative z-10 max-w-7xl mx-auto px-8 py-28 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-purple-200 mb-4">Welcome to</p>

      <div className="space-y-2">
        <RevealText>
          <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
            BLANKSPACE —
          </h1>
        </RevealText>

        <RevealText delay={120}>
          <h2 className="text-purple-100 text-4xl md:text-5xl font-bold">
            Ideas that teach.
          </h2>
        </RevealText>
      </div>

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

    {/* RIGHT SVG */}
    <div className="relative hidden md:flex justify-end items-center">
      {/* Soft glow */}
      <div
        className="absolute right-6 w-[340px] h-[340px] rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, #9B4BF9, transparent 70%)",
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

{/* SECTION TRANSITION */}
<div className="relative h-20 overflow-hidden">
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(to bottom, rgba(18,11,36,0), rgba(247,245,251,1))",
    }}
  />
</div>

     {/* COMMUNITY VALUES SECTION */}
<section
  className="relative py-32 overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, #f7f5fb 0%, #efe9ff 40%, #f7f5fb 100%)",
  }}
>

{/* SOFT PURPLE AMBIENT LIGHT */}
<div
  className="absolute inset-0 z-0"
  style={{
    background:
      "radial-gradient(circle at 30% 10%, rgba(155,75,249,0.25), transparent 55%)",
  }}
/>

  {/* =====================
      AMBIENT BACKGROUND LIGHTS
     ===================== */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div
      className="absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full blur-[160px] opacity-25"
      style={{
        background: "#9B4BF9",
        animation: "floatLight 42s ease-in-out infinite",
      }}
    />
    <div
      className="absolute bottom-[-180px] right-1/4 w-[560px] h-[560px] rounded-full blur-[180px] opacity-20"
      style={{
        background: "#C78AFC",
        animation: "floatLight 46s ease-in-out infinite reverse",
      }}
    />
  </div>

  {/* =====================
      CONTENT
     ===================== */}
  <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* LEFT CONTENT */}
    <div>
      <p className="uppercase tracking-widest text-sm text-purple-600 font-semibold mb-4">
        Built Around People
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-[#1e1333]">

        Our Community Values
      </h2>

      <p className="mt-6 text-gray-600">

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
            "Connect with mentors, educators, and peers who guide you through learning and growth.",
        },
        {
          title: "Real-World Collaboration",
          content:
            "Work on meaningful projects with people who value practical outcomes.",
        },
        {
          title: "Learning Resources",
          content:
            "Access curated tools, templates, and shared knowledge built by the community.",
        },
        {
          title: "Events & Workshops",
          content:
            "Participate in discussions, workshops, and meetups that spark ideas and action.",
        },
      ].map((item, index) => (
        <details
          key={index}
          className="
            group
            rounded-2xl
            bg-white/80
            backdrop-blur-xl
            border
            border-purple-200/40
            shadow-lg
            
          "
        >
          <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-gray-900">
            {item.title}
            <span className="text-purple-500 group-open:rotate-45 transition-transform text-xl">
              +
            </span>
          </summary>

          <div className="px-6 pb-5 text-gray-700">
            {item.content}
          </div>
        </details>
      ))}
    </div>

  </div>
</section>

          </main>
      );
}

import Navbar from "@/components/Navbar";
import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <main className="page-enter page-enter-active min-h-screen overflow-hidden text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND LIGHTS */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full blur-[160px] opacity-35"
            style={{
              background: "#9B4BF9",
              animation: "floatLight 36s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-[-200px] right-1/4 w-[600px] h-[600px] rounded-full blur-[200px] opacity-30"
            style={{
              background: "#C78AFC",
              animation: "floatLight 42s ease-in-out infinite reverse",
            }}
          />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-purple-300 mb-4">Welcome to</p>

            <RevealText>
              <h1 className="text-5xl md:text-6xl font-extrabold">
                BLANKSPACE —
              </h1>
            </RevealText>

            <RevealText delay={120}>
              <h2 className="text-4xl md:text-5xl font-bold text-purple-200">
                Ideas that teach.
              </h2>
            </RevealText>

            <p className="mt-6 text-purple-200 max-w-xl">
              We build learning environments, online programs and community tools
              that help educators scale meaningful teaching experiences.
            </p>

            <div className="mt-8 flex gap-4">
  <MagneticButton
    className="
      bg-white
      text-[#6b32d1]
      px-6
      py-3
      rounded-lg
      font-semibold
      hover:-translate-y-1
      hover:shadow-xl
      active:scale-[0.96]
    "
  >
    Explore Programs
  </MagneticButton>

  <MagneticButton
    className="
      border
      border-white/30
      text-white
      px-6
      py-3
      rounded-lg
      hover:-translate-y-1
      hover:bg-white/10
      hover:shadow-lg
      active:scale-[0.97]
    "
  >
    Join the Community
  </MagneticButton>
</div>

          </div>

          {/* RIGHT SVG */}
          <div className="hidden md:flex justify-end relative">
            <div className="absolute w-[360px] h-[360px] rounded-full blur-3xl opacity-30 bg-[#9B4BF9]" />
            <img src="/pills.svg" className="relative z-10 w-[420px]" />
          </div>
        </div>
      </section>
{/* ================= SEAM GLOW ================= */}
<div className="relative h-0 overflow-visible pointer-events-none">
  <div
    className="
      absolute
      left-1/2
      top-0
      -translate-x-1/2
      -translate-y-1/2
      w-[520px]
      h-[520px]
      rounded-full
      blur-[160px]
      opacity-40
      bg-[#9B4BF9]
    "
  />
</div>

      {/* ================= MARQUEE ================= */}
      
<section className="relative py-0 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track text-white/80">

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

      {/* ================= COMMUNITY ================= */}
      <section className="relative py-40 overflow-hidden">

        {/* Ambient depth */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(155,75,249,0.25), transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <p className="uppercase tracking-widest text-sm text-purple-300 font-semibold mb-4">
              Built Around People
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold">
              Our Community Values
            </h2>

            <p className="mt-6 text-purple-200 max-w-md">
              Blankspace is a people-first community focused on learning,
              collaboration, and real-world growth.
            </p>
          </div>

          {/* RIGHT */}
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
            ].map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl"
              >
                <summary className="flex justify-between px-6 py-5 font-semibold cursor-pointer">
                  {item.title}
                  <span className="text-purple-400 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-purple-200">
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

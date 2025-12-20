"use client";

import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* PAGE WRAPPER */}
      <section className="max-w-5xl mx-auto px-8 py-28 space-y-24">

        {/* ABOUT */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tight">

            About Blankspace
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Blankspace is a student-driven college community built for individuals
            who don’t fit neatly into predefined paths. It is a space where ideas
            begin unpolished, creativity remains unrestricted, and growth happens
            through building, experimenting, and collaboration.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            We’re not here to chase trends. We’re here to{" "}
            <span className="font-semibold text-gray-900">
              create, learn, and ship meaningful work
            </span>.
          </p>
        </div>

        {/* WHY */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">

            Why Blankspace Exists
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">

            Many students have ideas, but lack a platform to explore them. Many
            communities impose structure, but leave little room for freedom.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">

            Blankspace exists to bridge that gap.
          </p>

          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">

            <li>Beginners are welcomed without judgment</li>
            <li>Curiosity is encouraged over credentials</li>
            <li>Skills are developed through real work, not just theory</li>
            <li>Failure is treated as part of learning, not something to hide</li>
          </ul>
        </div>

        {/* WHAT WE DO */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            What We Do
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">

            Blankspace brings together students with interests in:
          </p>

          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">

            <li>Technology and development</li>
            <li>Design and creative thinking</li>
            <li>Content, ideas, and open discussions</li>
            <li>Projects, workshops, and collaborative learning</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed">

            From small experiments to meaningful initiatives, we focus on{" "}
            <span className="font-semibold text-gray-900">
              learning by doing
            </span>{" "}
            and growing through shared experience.
          </p>
        </div>

        {/* CULTURE */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Culture
          </h2>

          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">

            <li>Action over talk</li>
            <li>Growth over perfection</li>
            <li>Community over competition</li>
            <li>Consistency over hype</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed">

            No gatekeeping. No manufactured motivation.  
            Just people showing up, learning together, and improving one step at
            a time.
          </p>
        </div>

        {/* WHO IT'S FOR */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Who Blankspace Is For
          </h2>

          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">

            <li>Students who want to build practical, real-world skills</li>
            <li>Those tired of chasing certificates without substance</li>
            <li>People who enjoy learning beyond the classroom</li>
            <li>Anyone who believes progress comes from trying and showing up</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed">

            You don’t need to be an expert.  
            <span className="font-semibold text-gray-900">
              You just need the willingness to start.
            </span>
          </p>
        </div>

        {/* VISION */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Vision
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">

            To grow into a self-driven college community where students create
            real impact through skills, ideas, and collaboration — and graduate
            with <span className="font-bold text-gray-900">
              more than just a degree
            </span>.
          </p>
        </div>

      </section>
    </main>
  );
}
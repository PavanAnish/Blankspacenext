"use client";

import Navbar from "@/components/Navbar";
import { useInView } from "@/components/useInView";

const programs = [
  {
    title: "Foundations of Learning",
    description:
      "Core principles and frameworks that help educators design meaningful learning experiences.",
  },
  {
    title: "Community Mentorship",
    description:
      "Learn with guidance from mentors and peers through collaborative problem solving.",
  },
  {
    title: "Applied Teaching Labs",
    description:
      "Hands-on sessions focused on real-world classroom and education challenges.",
  },
  {
    title: "Digital Tools & Methods",
    description:
      "Explore modern tools, workflows, and methods to enhance teaching effectiveness.",
  },
  {
    title: "Workshops & Events",
    description:
      "Interactive workshops designed to spark ideas and encourage experimentation.",
  },
  {
    title: "Research & Insights",
    description:
      "Curated research-backed insights to support better learning outcomes.",
  },
];

/* ✅ CARD COMPONENT (HOOK IS SAFE HERE) */
function ProgramCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`
        bg-white
        rounded-3xl
        p-8
        shadow-xl
        hover:shadow-2xl
        transition
        animate-float
        fade-in
        ${visible ? "visible" : ""}
      `}
      style={{
        animationDelay: `${index * 0.3}s`,
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

      <div className="mt-6">
        <span className="inline-block text-sm font-semibold text-[#9B4BF9]">
          Learn more →
        </span>
      </div>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#f6f5fb]">
      <Navbar />

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Programs
        </h1>

        <p className="mt-6 max-w-2xl text-gray-600">
          A collection of structured programs, collaborative spaces, and learning
          experiences built for growth.
        </p>
      </section>

      {/* PROGRAM CARDS */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

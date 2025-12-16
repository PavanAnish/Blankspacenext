"use client";

import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

const programDetails = {
  foundations: {
    title: "Foundations of Learning",
    content:
      "This program focuses on the core principles of effective learning design, educational psychology, and curriculum planning.",
  },
  mentorship: {
    title: "Community Mentorship",
    content:
      "Work closely with mentors and peers to develop skills through guided collaboration and feedback.",
  },
  "teaching-labs": {
    title: "Applied Teaching Labs",
    content:
      "Hands-on teaching simulations and labs designed to solve real classroom challenges.",
  },
  "digital-tools": {
    title: "Digital Tools & Methods",
    content:
      "Explore modern educational tools, digital platforms, and workflows to enhance learning experiences.",
  },
  workshops: {
    title: "Workshops & Events",
    content:
      "Participate in interactive workshops and events led by educators and industry experts.",
  },
  research: {
    title: "Research & Insights",
    content:
      "Dive into research-backed insights and data-driven approaches to improve learning outcomes.",
  },
};

export default function ProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = programDetails[params.slug as keyof typeof programDetails];

  if (!program) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-4xl mx-auto px-8 py-28">
        <h1 className="text-5xl font-extrabold text-gray-900">
          {program.title}
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          {program.content}
        </p>
      </section>
    </main>
  );
}

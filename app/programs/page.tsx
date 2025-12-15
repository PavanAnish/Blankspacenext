"use client";

import Navbar from "@/components/Navbar";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Programs
        </h1>

        <p className="mt-6 max-w-2xl text-gray-600">
          Explore learning programs, structured paths, and community-driven
          initiatives designed to help you grow with clarity.
        </p>
      </section>
    </main>
  );
}

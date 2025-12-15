"use client";

import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-5xl font-extrabold text-gray-900">
          About Blankspace
        </h1>

        <p className="mt-6 max-w-2xl text-gray-600">
          Blankspace is built around people, ideas, and practical learning.
          We create environments where education meets real-world impact.
        </p>
      </section>
    </main>
  );
}

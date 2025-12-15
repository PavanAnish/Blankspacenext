"use client";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Contact
        </h1>

        <p className="mt-6 max-w-xl text-gray-600">
          Have questions, ideas, or want to collaborate?
          Reach out and let’s start a conversation.
        </p>

        <div className="mt-10 space-y-4 text-gray-700">
          <p>Email: hello@blankspace.dev</p>
          <p>Community: Join our Discord (coming soon)</p>
        </div>
      </section>
    </main>
  );
}

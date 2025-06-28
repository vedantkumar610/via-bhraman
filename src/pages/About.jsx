import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
const navigate = useNavigate();

return (
<main className="bg-base text-gray-800">
  {/* Header */}
  <section className="bg-primary text-white py-20 px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">About TravelCo</h1>
    <p className="text-lg max-w-2xl mx-auto">
      We turn your travel dreams into unforgettable journeys.
    </p>
  </section>

  {/* Who We Are */}
  <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-3xl font-bold text-heading mb-4">Who We Are</h2>
      <p className="text-gray-600">
        TravelCo is a passionate team of explorers, planners, and storytellers. Since our launch,
        we've helped thousands of travelers craft their perfect getaways — from solo adventures to family vacations.
        Our mission is to make travel accessible, enriching, and seamless for everyone.
      </p>
    </div>
    <img src="https://images.unsplash.com/photo-1502920917128-1aa500764ce7?auto=format&fit=crop&w=800&q=80"
      alt="Team Travel" className="rounded-xl shadow-md" />
  </section>

  {/* Mission / Values */}
  <section className="bg-white py-16 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
      <p className="text-gray-600">
        We believe in transforming trips into stories. Whether you seek adventure, peace, culture, or connection —
        we create journeys that leave a lasting impact. Your happiness fuels our passion to plan better.
      </p>
    </div>
  </section>

  {/* Stats */}
  <section className="py-16 px-6 bg-base">
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 text-center gap-8">
      {[
      ["+15K", "Happy Travelers"],
      ["50+", "Destinations"],
      ["1K+", "Custom Itineraries"],
      ["24/7", "Customer Support"],
      ].map(([value, label], index) => (
      <div key={index}>
        <h3 className="text-3xl font-bold text-heading">{value}</h3>
        <p className="text-gray-500">{label}</p>
      </div>
      ))}
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="bg-white py-16 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold text-heading mb-4">Why Choose TravelCo?</h2>
        <ul className="space-y-4 text-gray-600 list-disc list-inside">
          <li>🌎 Curated trips with local experiences</li>
          <li>🔒 Easy booking & secure payments</li>
          <li>🧭 Personalized itineraries & expert guides</li>
          <li>🕐 24/7 support before and during travel</li>
        </ul>
      </div>
      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80"
        alt="Travel Highlights" className="rounded-xl shadow-lg" />
    </div>
  </section>

  {/* CTA Section */}
  <section className="bg-primary text-white py-16 text-center px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
    <p className="mb-6 text-lg">
      Let’s plan the trip of a lifetime, together.
    </p>
    <button onClick={()=> navigate("/package")}
      className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
      Book Now
    </button>
  </section>
</main>
);
}
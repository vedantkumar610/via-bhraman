import React from "react";

export default function Hero() {
return (
<section className="bg-base py-20 px-4 text-center">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">
      Discover Your Next Adventure
    </h1>
    <p className="text-gray-600 mb-8">
      Plan unforgettable journeys with the best travel experiences curated just for you.
    </p>
    <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
      Start Planning
    </button>
  </div>
</section>
);
}
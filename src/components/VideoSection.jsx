import React from "react";

export default function VideoSection() {
return (
<section className="bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    <div className="aspect-video w-full shadow-md rounded-xl overflow-hidden">
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/dyU9S7SCfTo" title="Travel Video"
        frameBorder="0" allowFullScreen></iframe>
    </div>
    <div>
      <h2 className="text-3xl font-bold text-heading mb-4">
        Explore the World with Confidence
      </h2>
      <p className="text-gray-600">
        Our guided tours, custom itineraries, and exclusive offers make travel effortless and memorable.
      </p>
    </div>
  </div>
</section>
);
}
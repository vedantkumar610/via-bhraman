import React from "react";

const destinations = [
{
name: "Bali, Indonesia",
image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
description: "Tropical beaches, temples, and lush rice terraces.",
},
{
name: "Paris, France",
image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
description: "City of lights and romance with iconic landmarks.",
},
{
name: "Tokyo, Japan",
image: "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80",
description: "Blend of modern tech and traditional culture.",
},
{
name: "Swiss Alps, Switzerland",
image: "https://images.unsplash.com/photo-1518684079-96a08a01e43d?auto=format&fit=crop&w=800&q=80",
description: "Snowy peaks, cozy villages, and scenic train rides.",
},
];

export default function Destinations() {
return (
<section className="bg-base py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-primary mb-12">Top Destinations</h2>
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    {destinations.map((dest, index) => (
    <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={dest.image} alt={dest.name} className="w-full h-56 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-heading mb-2">{dest.name}</h3>
        <p className="text-gray-600 text-sm">{dest.description}</p>
      </div>
    </div>
    ))}
  </div>
</section>
);
}
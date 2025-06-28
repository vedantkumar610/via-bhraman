import React from "react";
import DestinationCard from "./DestinationCard";

const destinations = [
{
image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
title: "Bali, Indonesia",
description: "Tropical paradise with beaches and rice terraces.",
},
{
image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
title: "Paris, France",
description: "The City of Light, art, fashion, and romance.",
},
{
image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
title: "Tokyo, Japan",
description: "Modern city blended with traditional temples.",
},
{
image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
title: "Santorini, Greece",
description: "Iconic blue domes and sunsets over the Aegean Sea.",
},
{
image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
title: "Mp, India",
description: "Tropical paradise with beaches and rice terraces.",},
{
image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
title: "Manali, India",
description: "Tropical paradise with beaches and rice terraces.",},
];

export default function Destinations() {
return (
<section className="py-12 px-4 bg-gray-50">
  <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Popular Destinations</h2>
  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
    {destinations.map((dest, index) => (
    <DestinationCard key={index} image={dest.image} title={dest.title} description={dest.description} />
    ))}
  </div>
</section>
);
}
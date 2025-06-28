import React from "react";

export default function DestinationCard({ image, title, description }) {
return (
<div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105">
  <img src={image} alt={title} className="h-48 w-full object-cover" />
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <p className="text-gray-600 text-sm mt-2">{description}</p>
  </div>
</div>
);
}
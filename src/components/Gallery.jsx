import React from "react";

export default function Gallery() {
const galleryItems = [
{ type: "image", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
{ type: "video", url: "https://www.youtube.com/embed/J---aiyznGQ" },
{ type: "image", url: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=800&q=80" },
{ type: "video", url: "https://www.youtube.com/embed/XE0fU6K74IQ" },
{ type: "image", url: "https://images.unsplash.com/photo-1526779259212-939e647d59c5?auto=format&fit=crop&w=800&q=80" },
];

return (
<section className="bg-base py-16 px-4">
  <h2 className="text-3xl font-bold text-center text-primary mb-10">Travel Memories</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {galleryItems.map((item, index) => (
    <div key={index} className="overflow-hidden rounded-xl shadow-md group aspect-video bg-white">
      {item.type === "image" ? (
      <img src={item.url} alt={`Gallery ${index}`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      ) : (
      <iframe src={item.url} title={`Video ${index}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
        className="w-full h-full"></iframe>
      )}
    </div>
    ))}
  </div>
</section>
);
}
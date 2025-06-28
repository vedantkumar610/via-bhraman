import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
useEffect(() => {
AOS.init({ duration: 800 });
}, []);

const [testimonials, setTestimonials] = useState([
{
name: "Anjali Mehta",
location: "Mumbai, India",
review: "TravelCo made my honeymoon unforgettable! Everything was perfect and hassle-free.",
avatar: "https://randomuser.me/api/portraits/women/44.jpg",
},
{
name: "Rohit Sharma",
location: "Delhi, India",
review: "I booked my first solo trip with them. Great support and amazing destinations!",
avatar: "https://randomuser.me/api/portraits/men/32.jpg",
},
{
name: "Emily Clark",
location: "London, UK",
review: "Excellent service and very responsive team. Highly recommend for family vacations.",
avatar: "https://randomuser.me/api/portraits/women/68.jpg",
},
]);

const [formData, setFormData] = useState({
name: "",
location: "",
review: "",
});

const swiperRef = useRef(null);

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
e.preventDefault();
const newReview = {
...formData,
avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
};
setTestimonials((prev) => [...prev, newReview]);
setFormData({ name: "", location: "", review: "" });

// Slide to the newly added testimonial
setTimeout(() => {
swiperRef.current?.slideTo(testimonials.length);
}, 100);
};

return (
<section className="bg-white py-16 px-4">
  <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">What Our Travelers Say</h2>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
    {/* Swiper Carousel */}
    <div className="md:w-2/3 w-full" data-aos="fade-up">
      <Swiper onSwiper={(swiper)=> (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
        }}
        modules={[Navigation]}
        className="w-full"
        >
        {testimonials.map((t, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center max-w-xl mx-auto">
            <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover" />
            <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{t.location}</p>
            <p className="text-gray-700 text-sm">“{t.review}”</p>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="prev-btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          ⬅ Previous
        </button>
        <button className="next-btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Next ➡
        </button>
      </div>
    </div>

    {/* Review Form */}
    <div className="md:w-1/3 w-full bg-gray-100 rounded-lg p-6 shadow h-fit" data-aos="fade-left">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Your Location"
          required className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
        <textarea name="review" value={formData.review} onChange={handleChange} placeholder="Your Review" required
          rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Submit Review
        </button>
      </form>
    </div>
  </div>
</section>
);
}
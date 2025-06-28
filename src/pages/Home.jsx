import React from "react";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";

export default function Home() {
return (
<main>
  <Hero />
  <VideoSection />
  <Gallery />
  <Testimonials />
</main>
);
}
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
return (
<footer className="bg-gray-900 text-gray-200 py-10">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
    {/* Brand */}
    <div className="md:col-span-1">
      <h2 className="text-2xl font-bold text-white mb-2">TravelCo</h2>
      <p className="text-sm text-gray-400">
        Explore the world with us. Find your next adventure in just a few clicks.
      </p>
      {/* Social Icons */}
      <div className="flex space-x-4 mt-4">
        <a href="#" className="hover:text-blue-400 text-xl">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-blue-400 text-xl">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-blue-400 text-xl">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-blue-400 text-xl">
          <FaYoutube />
        </a>
      </div>
    </div>

    {/* Explore */}
    <div>
      <h3 className="text-lg font-semibold mb-3 text-white">Explore</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-blue-400">Destinations</a></li>
        <li><a href="#" className="hover:text-blue-400">Packages</a></li>
        <li><a href="#" className="hover:text-blue-400">Blog</a></li>
        <li><a href="#" className="hover:text-blue-400">Gallery</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="text-lg font-semibold mb-3 text-white">Company</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-blue-400">About Us</a></li>
        <li><a href="#" className="hover:text-blue-400">Careers</a></li>
        <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
      <ul className="space-y-2 text-sm">
        <li>Email: support@travelco.com</li>
        <li>Phone: +91 9876543210</li>
        <li>Location: Bhopal, India</li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="text-lg font-semibold mb-3 text-white">Newsletter</h3>
      <p className="text-sm text-gray-400 mb-3">Get travel deals and updates in your inbox.</p>
      <form className="flex flex-col space-y-2">
        <input type="email" placeholder="Enter your email"
          className="px-3 py-2 rounded-md text-sm text-black focus:outline-none" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center text-gray-500">
    &copy; {new Date().getFullYear()} TravelCo. All rights reserved.
  </div>
</footer>
);
}
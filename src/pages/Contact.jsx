import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Contact() {
const [form, setForm] = useState({ name: "", email: "", message: "" });
const [success, setSuccess] = useState(false);

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();
if (!form.name || !form.email || !form.message) {
alert("Please fill all fields");
return;
}

try {
await addDoc(collection(db, "messages"), {
...form,
createdAt: new Date(),
});
setForm({ name: "", email: "", message: "" });
setSuccess(true);
setTimeout(() => setSuccess(false), 4000);
} catch (error) {
alert("Error sending message");
console.error("Error:", error);
}
};

return (
<main className="min-h-screen bg-white text-gray-800 py-12 px-4 md:px-8">
  <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
    Contact Us
  </h1>

  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    {/* Contact Form */}
    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>

      {success && (
      <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
        ✅ Message sent successfully!
      </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full border border-gray-300 p-3 rounded"
          value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" className="w-full border border-gray-300 p-3 rounded"
          value={form.email} onChange={handleChange} required />
        <textarea rows="5" name="message" placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded" value={form.message} onChange={handleChange}
          required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>

    {/* Contact Info & Map */}
    <div className="flex flex-col gap-6">
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
        <p className="mb-2">📞 <strong>Phone:</strong> +91 98765 43210</p>
        <p className="mb-2">📧 <strong>Email:</strong> contact@travelnow.com</p>
        <p>📍 <strong>Address:</strong> 123 Dream Street, New Delhi</p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-md">
        <iframe title="Map" className="w-full h-64"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83925384157!2d77.06889940000001!3d28.527582000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3dd2d4a4695%3A0x9c2c8e90c3c9a965!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1688041854290!5m2!1sen!2sin"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</main>
);
}
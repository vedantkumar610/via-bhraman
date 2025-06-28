import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Package() {
const [packages, setPackages] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const fetchPackages = async () => {
try {
const querySnapshot = await getDocs(collection(db, "packages"));
const data = querySnapshot.docs.map((doc) => ({
id: doc.id,
...doc.data(),
}));
setPackages(data);
setLoading(false);
} catch (error) {
console.error("Error fetching packages:", error);
setLoading(false);
}
};
fetchPackages();
}, []);

return (
<main className="bg-white text-gray-800 py-16 px-4 md:px-10">
  <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
    Our Travel Packages
  </h1>

  {loading ? (
  <p className="text-center">Loading packages...</p>
  ) : packages.length === 0 ? (
  <p className="text-center">No packages available.</p>
  ) : (
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {packages.map((pkg) => (
    <div key={pkg.id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img src={pkg.image} alt={pkg.title} className="rounded-md mb-4 h-40 w-full object-cover" />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {pkg.title}
      </h2>
      <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
      <p className="text-lg font-bold text-blue-600">{pkg.price}</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">
        Book Now
      </button>
    </div>
    ))}
  </div>
  )}
</main>
);
}
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
collection,
addDoc,
getDocs,
deleteDoc,
updateDoc,
doc,
} from "firebase/firestore";

export default function Admin() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);

const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");
const [packages, setPackages] = useState([]);
const [editId, setEditId] = useState(null);
const [editData, setEditData] = useState({
title: "",
price: "",
description: "",
image: "",
});

useEffect(() => {
const storedEmail = localStorage.getItem("adminEmail");
if (storedEmail === "admin@travel.com") {
setIsLoggedIn(true);
fetchPackages();
}
}, []);

const fetchPackages = async () => {
const querySnapshot = await getDocs(collection(db, "packages"));
const data = querySnapshot.docs.map((doc) => ({
id: doc.id,
...doc.data(),
}));
setPackages(data);
};

const handleLogin = (e) => {
e.preventDefault();
if (email === "admin@travel.com" && password === "123456") {
localStorage.setItem("adminEmail", email);
setIsLoggedIn(true);
fetchPackages();
} else {
alert("Invalid credentials");
}
};

const handleLogout = () => {
localStorage.removeItem("adminEmail");
setIsLoggedIn(false);
};


const handleAddPackage = async (e) => {
e.preventDefault();
if (!title || !price || !description || !image) {
return alert("Please fill all fields");
}
try {
await addDoc(collection(db, "packages"), {
title,
price,
description,
image,
});
alert("Package added!");
setTitle("");
setPrice("");
setDescription("");
setImage("");
fetchPackages();
} catch (err) {
console.error("Error adding package:", err);
alert("Error adding package");
}
};

const handleDelete = async (id) => {
const confirm = window.confirm("Are you sure you want to delete this package?");
if (!confirm) return;
try {
await deleteDoc(doc(db, "packages", id));
fetchPackages();
} catch (err) {
alert("Error deleting package");
}
};

const startEdit = (pkg) => {
setEditId(pkg.id);
setEditData({
title: pkg.title,
price: pkg.price,
description: pkg.description,
image: pkg.image,
});
};

const handleUpdate = async () => {
try {
const docRef = doc(db, "packages", editId);
await updateDoc(docRef, editData);
setEditId(null);
fetchPackages();
} catch (err) {
alert("Error updating package");
}
};

if (!isLoggedIn) {
return (
<div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
  <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
    <h2 className="text-xl font-bold mb-4">Admin Login</h2>
    <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" value={email} onChange={(e)=>
    setEmail(e.target.value)}
    />
    <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" value={password}
      onChange={(e)=> setPassword(e.target.value)}
    />
    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
      Login
    </button>
  </form>
</div>
);
}

return (
<div className="min-h-screen bg-gray-100 py-10 px-4">
  <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
    <div className="flex justify-end max-w-xl mx-auto mb-4">
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        Logout
      </button>
    </div>
    
    <h2 className="text-2xl font-bold mb-4 text-center">Add New Package</h2>
    <form onSubmit={handleAddPackage} className="space-y-4">
      <input type="text" placeholder="Title" className="w-full p-2 border rounded" value={title} onChange={(e)=>
      setTitle(e.target.value)}
      />
      <textarea placeholder="Description" className="w-full p-2 border rounded" value={description} onChange={(e)=> setDescription(e.target.value)}
          ></textarea>
      <input type="text" placeholder="Price" className="w-full p-2 border rounded" value={price} onChange={(e)=>
      setPrice(e.target.value)}
      />
      <input type="text" placeholder="Image URL" className="w-full p-2 border rounded" value={image} onChange={(e)=>
      setImage(e.target.value)}
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
        Add Package
      </button>
    </form>
  </div>

  <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {packages.map((pkg) => (
    <div key={pkg.id} className="bg-white rounded shadow p-4 hover:shadow-md transition">
      <img src={pkg.image} alt={pkg.title} className="rounded-md h-40 w-full object-cover mb-3" />
      {editId === pkg.id ? (
      <>
        <input type="text" value={editData.title} onChange={(e)=>
        setEditData({ ...editData, title: e.target.value })
        }
        className="w-full mb-2 p-2 border rounded"
        />
        <textarea value={editData.description} onChange={(e)=>
                    setEditData({
                      ...editData,
                      description: e.target.value,
                    })
                  }
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  value={editData.price}
                  onChange={(e) =>
                    setEditData({ ...editData, price: e.target.value })
                  }
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  value={editData.image}
                  onChange={(e) =>
                    setEditData({ ...editData, image: e.target.value })
                  }
                  className="w-full mb-2 p-2 border rounded"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleUpdate}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="bg-gray-300 px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold">{pkg.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{pkg.description}</p>
                <p className="text-blue-700 font-semibold">{pkg.price}</p>
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => startEdit(pkg)}
                    className="text-blue-600 underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(pkg.id)}
                    className="text-red-600 underline"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
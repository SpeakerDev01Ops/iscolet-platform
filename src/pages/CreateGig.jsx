import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreateGig() {
  const { currentUser, userRole } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "gigs"), {
        uid: currentUser.uid,
        title: title.trim(),
        description: description.trim(),
        price: parseFloat(price),
        createdAt: serverTimestamp(),
      });
      navigate("/browse-gigs");
    } catch (err) {
      console.error("Error posting gig:", err);
      alert("Failed to post gig. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser || userRole !== "freelancer") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg font-medium">
          Access denied. Only freelancers can post services.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Post a New Gig
        </h2>

        <input
          type="text"
          placeholder="Gig Title"
          className="w-full mb-4 p-3 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          className="w-full mb-4 p-3 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price ($)"
          className="w-full mb-6 p-3 border rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          min="1"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700"
        >
          {loading ? "Publishing..." : "Publish Gig"}
        </button>
      </form>
    </div>
  );
}

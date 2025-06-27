import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function BrowseGigs() {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gigs"));
        const gigsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setGigs(gigsData);
      } catch (error) {
        console.error("Error fetching gigs:", error);
      }
    };

    fetchGigs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Browse Freelance Gigs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {gigs.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full">No gigs available yet.</p>
        ) : (
          gigs.map(gig => (
            <div key={gig.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{gig.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{gig.description}</p>
              <p className="text-sm font-semibold text-gray-600">💲{gig.price}</p>
              <a href={`/gig/${gig.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
                View Details
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

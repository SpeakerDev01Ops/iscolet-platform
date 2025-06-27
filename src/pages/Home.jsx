import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { currentUser, userRole } = useAuth();

  return (
    <div className="min-h-screen font-sans bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-blue-900 text-white flex justify-between items-center px-8 py-4 shadow">
        <h1 className="text-2xl font-bold">Iscolet</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="/solutions" className="hover:underline">Solutions</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          {currentUser && userRole === "freelancer" && (
            <a href="/create-gig" className="hover:underline">Post a Gig</a>
          )}
          {currentUser ? (
            <a href="/profile" className="hover:underline">Profile</a>
          ) : (
            <>
              <a href="/login" className="hover:underline">Login</a>
              <a
                href="/register"
                className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500"
              >
                Join
              </a>
            </>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-blue-700 text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Engineering Digital Solutions</h2>
        <p className="text-lg max-w-2xl mx-auto">
          At Iscolet, we empower businesses with scalable and secure IT solutions across cloud, cybersecurity, and infrastructure.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow hover:bg-yellow-500"
        >
          Get in Touch
        </a>
      </section>

      {/* Services */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h3 className="text-2xl font-semibold mb-10">Our Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Cybersecurity",
              desc: "Protect digital assets with proactive, adaptive security frameworks and zero-trust architectures.",
            },
            {
              title: "Cloud Solutions",
              desc: "Seamless migration and optimization for AWS, Azure, and hybrid cloud environments.",
            },
            {
              title: "Infrastructure Management",
              desc: "Maintain, automate, and scale IT infrastructure for performance and resilience.",
            },
            {
              title: "Configuration Management",
              desc: "Ensure system consistency, compliance, and deployment reliability with automation.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="font-bold text-lg text-blue-900 mb-2">{title}</h4>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 bg-white text-center">
        <h3 className="text-2xl font-semibold mb-4">About Iscolet</h3>
        <p className="max-w-3xl mx-auto text-gray-600 text-base">
          Iscolet is a next-gen IT solutions provider with a focus on digital transformation,
          secure systems, and cloud-native design. We serve enterprises across healthcare, finance,
          logistics, and government.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Iscolet. All rights reserved.</p>
      </footer>
    </div>
  );
}

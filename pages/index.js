
// Crow Outdoors - Homepage + Crow Camper Detail Page (Next.js + Tailwind)

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/crow-hero.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Crow Outdoors</h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-200">Slow travel, pure freedom, timeless design</p>
          </div>
        </div>
      </section>
      {/* You can paste the full component again here if needed */}
    </main>
  );
}

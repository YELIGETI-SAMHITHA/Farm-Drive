import Footer from "@/components/Footer";
import Navbar from "@/components/landingpage/Navbar";
import React from "react";

export default function Home() {
  const works = [
    {
      header: " Find Nearby Vehicles",
      desc: " Detects your location and shows tractors, jeeps, and other available vehicles nearby.",
    },
    {
      header: " Book Instantly",
      desc: " Select a vehicle, confirm fare, and schedule a pickup with just a few taps.",
    },
    {
      header: "Transport Safely",
      desc: " Your harvest is safely delivered on time. View all bookings in your history.",
    },
  ];
  const pricingData = [
    {
      id: 1,
      vehicle: "Tractor",
      icon: "🚜",
      price: 450,
      description: "Ideal for heavy produce transport",
      features: ["Up to 5km transport", "Real-time tracking", "Book anytime"],
      buttonText: "Book Tractor",
    },
    {
      id: 2,
      vehicle: "Jeep",
      icon: "🚚",
      price: 300,
      description: "Good for moderate load sizes",
      features: ["Up to 5km transport", "Driver included", "Live availability"],
      buttonText: "Book Jeep",
    },
    {
      id: 3,
      vehicle: "Goods Carrier",
      icon: "🚛",
      price: 600,
      description: "For large-volume logistics",
      features: ["Up to 10km range", "Insurance included", "Dedicated driver"],
      buttonText: "Book Carrier",
    },
    {
      id: 1,
      vehicle: "Rotavator",
      icon: "🌀",
      price: 500,
      description: "Used for soil preparation and mixing crop residues.",
      features: [
        "Perfect for seedbed preparation",
        "Handles dry or wet land",
        "Fuel-efficient operation",
      ],
      buttonText: "Book Rotavator",
    },
    {
      id: 2,
      vehicle: "Ploughing Tractor",
      icon: "🌾",
      price: 600,
      description: "Best for primary tillage and soil turning.",
      features: [
        "Deep ploughing for root growth",
        "Increases soil aeration",
        "Ideal for pre-sowing preparation",
      ],
      buttonText: "Book Tractor",
    },
    {
      id: 3,
      vehicle: "Seed Drill",
      icon: "🌱",
      price: 450,
      description: "Used for accurate seed placement during sowing.",
      features: [
        "Uniform seed depth and spacing",
        "Reduces seed wastage",
        "Suitable for various crops",
      ],
      buttonText: "Book Seed Drill",
    },
    {
      id: 4,
      vehicle: "Fertilizer Spreader",
      icon: "🧪",
      price: 300,
      description: "Ensures even distribution of fertilizers.",
      features: [
        "Adjustable spreading range",
        "High efficiency for large fields",
        "Minimizes fertilizer waste",
      ],
      buttonText: "Book Spreader",
    },
    {
      id: 5,
      vehicle: "Water Tanker",
      icon: "💧",
      price: 350,
      description: "Essential for crop irrigation during dry seasons.",
      features: [
        "5000+ liter capacity",
        "Flexible nozzles & pressure control",
        "On-demand field delivery",
      ],
      buttonText: "Book Water Tanker",
    },
  ];

  return (
    <React.Fragment>
      <div className="h-screen overflow-y-scroll scroll-smooth relative">
        <Navbar />
        {/* hero section */}
        <section>
          <div className="relative  w-full my-6 max-w-[96%] md:max-w-[96%] lg:max-w-6xl lg:h-[80vh] max-md:max-h-72  aspect-video mx-auto flex flex-col items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/images/hero-theme.png')] bg-cover bg-center rounded-3xl z-0 h-full w-full" />

            {/*  Overlay Text */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2   z-10 max-w-[90%] md:max-w-2xl">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
                From Farm to Market
                <br />
                Faster Than Ever.
              </h1>
            </div>
          </div>
        </section>
        {/* basic intro */}
        <section className="py-16 bg-gray-50 select-text">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-2xl md:text-4xl  font-bold mb-6 text-black">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {works.map((item, index) => {
                return (
                  <div key={index}>
                    {/* <div className="text-4xl mb-2">📍</div> */}
                    <h3 className="text-xl font-semibold">
                      {`${index + 1}. ${item.header} `}
                    </h3>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* process*/}
        <section className="pb-16 bg-white select-text">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
              Why Choose Farm Drive?
            </h2>
            <p className="text-gray-600 mb-12">
              Built for farmers, drivers, and rural communities.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">
                  🚚 Local Transport Access
                </h3>
                <p className="text-gray-600 mt-1">
                  Connects farmers with nearby tractors, jeeps, and goods
                  vehicles easily.
                </p>
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">📱 Simple, Mobile UI</h3>
                <p className="text-gray-600 mt-1">
                  Designed for low digital literacy. One-click booking
                  interface.
                </p>
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">💸 Affordable Pricing</h3>
                <p className="text-gray-600 mt-1">
                  No hidden charges. Transparent pricing shown before booking.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* pricing */}
        <section className="py-20 bg-gray-50" id="pricing">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-600 mb-12">
              Simple, affordable rates — no middlemen, no hidden fees.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {pricingData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md  shadow-white  transition-all duration-100 ease-in-out hover:scale-[1.02] hover:shadow-gray-200  "
                  >
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {item.vehicle}
                    </h3>
                    <p className="text-gray-500 mb-4">{item.description}</p>
                    <div className="text-3xl font-bold mb-4">
                      ₹{item.price} / Trip
                    </div>
                    <ul className="text-left text-sm text-gray-600 space-y-2">
                      {item.features.map((t, i) => {
                        return <li key={i}> ✔ {t}</li>;
                      })}
                    </ul>
                    <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition-all">
                      {item.buttonText}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/*  about*/}
        <section className="py-20 bg-white" id="how-it-works">
          <div className="max-w-6xl mx-auto px-4 ">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              How FarmDrive Works
            </h2>
            <p className="text-gray-600 mb-12">
              Get started in just 3 simple steps
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm shadow-white hover:shadow-gray-300 transition-all ease-in-out duration-150 hover:scale-[1.02]">
                <h3 className="font-semibold text-lg mb-2">
                  1. Search Nearby Vehicles
                </h3>
                <p className="text-gray-600">
                  Enter your location and find available tractors, jeeps, or
                  carriers around you.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm shadow-white hover:shadow-gray-300 transition-all ease-in-out duration-150 hover:scale-[1.02]">
                <h3 className="font-semibold text-lg mb-2">
                  2. Compare & Book
                </h3>
                <p className="text-gray-600">
                  View pricing, vehicle details, and book instantly with just
                  one tap.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm shadow-white hover:shadow-gray-300 transition-all ease-in-out duration-150 hover:scale-[1.02]">
                <h3 className="font-semibold text-lg mb-2">3. Get It Done</h3>
                <p className="text-gray-600">
                  The vehicle arrives at your location. Pay safely and get your
                  produce moved.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* final call */}
        <section className="py-16 bg-green-700 text-white px-6 md:px-12 max-w-[96%] md:max-w-6xl mx-auto rounded-3xl my-12 relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Move Your Produce?
          </h2>
          <p className="mb-6">
            Start booking local transport — quickly, affordably, and digitally.
          </p>
          <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all ease-in-out duration-150 active:scale-95">
            🚜 Start Booking Now
          </button>
          <div className="absolute right-0 max-md:hidden top-0">
            <div className="h-[500px] w-[500px] bg-green-200 top-0 rotate-[55deg]  translate-x-[120px] -translate-y-[200px]  "></div>
          </div>
        </section>
        {/* footer */}
        <Footer/>
      </div>
    </React.Fragment>
  );
}

import React, { useState, useEffect } from "react";

const images = [
  "/images/hero/01.jpeg",
  "/images/hero/02.jpeg",
  "/images/hero/03.jpeg",
  "/images/hero/04.jpeg",
];
interface diemensions {
  width: number;
  height: number;
}
const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [diemensions, setDiemensions] = useState<diemensions>({
    width: 0,
    height: 0,
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);

  }, []);

  useEffect(() => {
    function load() {
      setDiemensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    load(); // Initial call on mount
    window.addEventListener("resize", load);

    return () => {
      window.removeEventListener("resize", load);
    };
  }, []);

  return (
    <div className="mx-auto rounded-3xl my-3 overflow-hidden w-full max-w-[90%] h-[90vh] aspect-video relative">
      <div
        className="flex transition-transform duration-1000 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {[...images, images[0]].map((image, index) => (
          <div
            key={index}
            className="  h-[90vh] bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
              width: diemensions.width * 0.9,
              minWidth: diemensions.width * 0.9,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-10 md:px-20 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to FarmDrive
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl drop-shadow-md">
          Discover a smarter way to rent, sell, or showcase your farming
          vehicles and tools.
        </p>
        {/* <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold">
          Explore Tractors
        </button> */}
      </div>
    </div>
  );
};

export default HeroCarousel;

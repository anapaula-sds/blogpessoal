import { useState, useEffect } from "react";

const images = [
  "https://i.imgur.com/NAZhhaz.jpg",
  "https://i.imgur.com/LWyvB2M.jpg",
  "https://i.imgur.com/WsTzYU5.jpg",
  "https://i.imgur.com/SvZfJMC.jpg",
  "https://i.imgur.com/mDoNg89.jpg",
  "https://i.imgur.com/7EvxBaS.jpg",

];

export default function LoginBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative hidden lg:block min-h-screen w-full bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >

      <div className="absolute bottom-4 flex justify-center w-full space-x-2">
        {images.map((_, index) => (
          <span key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-500"}`} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import logo1 from "../assets/Screenshot 2024-12-26 082704.png";
import logo2 from "../assets/Screenshot 2024-12-26 082914.png";
import logo3 from "../assets/Screenshot 2024-12-26 082900.png";
import { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  position: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sanjay Kumar",
    position: "CEO, TechCorp",
    message:
      "Working with Ac On Rent Gurugram has been a fantastic experience. Their services are top-notch, and their support team is always available.",
    image: logo1,
  },
  {
    name: "Rakesh Soni",
    position: "Marketing Manager, Brandify",
    message:
      "The team went above and beyond to meet our requirements. The results were excellent, and we highly recommend their services.",
    image: logo2,
  },
  {
    name: "Pankaj Khurana",
    position: "Founder, InnovateHub",
    message:
      "Ac On Rent Gurugram helped us scale our business by providing the best solutions. They are reliable and deliver exceptional results.",
    image: logo3,
  },
  {
    name: "Amit Sharma",
    position: "Director, CloudTech Solutions",
    message:
      "Outstanding service quality and professional team. They understand customer needs and provide perfect solutions every time.",
    image: logo1,
  },
];

export const TestimonialPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          Hear from some of our satisfied clients about their experiences working with us.
        </p>
        <div className="flex overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full px-4"
                style={{ flex: `0 0 ${100 / testimonials.length}%` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-lg mx-auto max-w-2xl"
                >
                  <div className="flex items-center space-x-6 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-lg">"{testimonial.message}"</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
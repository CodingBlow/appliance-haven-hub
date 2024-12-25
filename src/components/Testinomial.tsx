import React from "react";

interface Testimonial {
  name: string;
  position: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    message:
      "Working with ApplianceHaven has been a fantastic experience. Their services are top-notch, and their support team is always available.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    position: "Marketing Manager, Brandify",
    message:
      "The team went above and beyond to meet our requirements. The results were excellent, and we highly recommend their services.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Michael Brown",
    position: "Founder, InnovateHub",
    message:
      "ApplianceHaven helped us scale our business by providing the best solutions. They are reliable and deliver exceptional results.",
    image: "https://via.placeholder.com/150",
  },
];

export const TestimonialPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 md:px-12">
       
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          What Our Clients Say
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          Hear from some of our satisfied clients about their experiences working with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

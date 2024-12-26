import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <Navbar />
        {/* Hero Section */}
        <section className="relative bg-gray-100 rounded-lg shadow-md mb-12">
          <img
            src="https://via.placeholder.com/1500x500"
            alt="Smarteager Team"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gradient-to-t from-black/60 via-transparent">
            <h1 className="text-4xl font-bold text-white mb-2">
              About Ac On Rent Gurugram
            </h1>
            <p className="text-lg text-gray-200">
              Empowering your business with innovative solutions.
            </p>
          </div>
        </section>

        {/* Company Details */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At{" "}
            <span className="font-bold text-blue-600">Ac On Rent Gurugram</span>
            , we specialize in delivering cutting-edge technology and
            business-driven solutions to help organizations thrive in the
            digital age. Our team of experts is dedicated to innovation,
            excellence, and building meaningful connections with our clients to
            empower their success.
          </p>
        </section>

        {/* Mission, Vision, and Values Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border-2 border-blue-100 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To transform businesses with technology and deliver value-driven
              services that redefine industries.
            </p>
          </div>
          <div className="p-6 border-2 border-blue-100 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become a global leader in innovative solutions, empowering
              businesses to excel in a competitive world.
            </p>
          </div>
          <div className="p-6 border-2 border-blue-100 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              Our Values
            </h3>
            <p className="text-gray-700">
              Integrity, innovation, customer focus, and sustainable growth are
              at the heart of everything we do.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">
            Why Choose Ac On Rent Gurugram?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Ac On Rent Gurugram, we pride ourselves on being a trusted
                partner for businesses looking to enhance their technological
                and operational efficiency. From state-of-the-art software
                development to strategic consulting services, we tailor our
                offerings to meet your unique needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Our customer-first approach ensures that every project is
                delivered with the highest quality and attention to detail. Join
                us on our journey to unlock your business's full potential.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Innovation at Ac On Rent Gurugram"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-blue-600 text-white text-center p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Build the Future Together
          </h2>
          <p className="text-lg mb-6">
            Discover how Ac On Rent Gurugram can transform your business.
            Contact us today to learn more about our services and solutions.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100">
            Contact Us
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

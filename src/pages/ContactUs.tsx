import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic, like sending the data to an API
    alert("Your message has been sent!");
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <Navbar />
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We’d love to hear from you! Please fill out the form below or contact
          us directly.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <section className="mb-6">
            <label
              htmlFor="name"
              className="text-xl font-semibold text-blue-600 mb-2 block"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
              required
            />
          </section>

          <section className="mb-6">
            <label
              htmlFor="email"
              className="text-xl font-semibold text-blue-600 mb-2 block"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Email"
              required
            />
          </section>

          <section className="mb-6">
            <label
              htmlFor="message"
              className="text-xl font-semibold text-blue-600 mb-2 block"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>
          </section>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            You can also reach us via the following methods:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Phone:</strong> +91 8800120156
            </li>
            <li>
              <strong>Email:</strong> AcOnRentGurugram24@gmail.com
            </li>
            <li>
              <strong>Address:</strong> Sheetla Colony, Sector 34, Gurugram,
              Haryana 122001
            </li>
          </ul>
        </div>

        {/* Optional Map Section (Google Maps) */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Our Location
          </h2>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5589.221059051971!2d77.031283!3d28.480684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19affdd42471%3A0x44be7fe1aa62127f!2sIkrent!5e1!3m2!1sen!2sin!4v1735181258578!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

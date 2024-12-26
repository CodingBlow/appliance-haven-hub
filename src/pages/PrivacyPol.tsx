import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <Navbar />
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          At Ac On Rent Gurugram, we value your privacy and are committed to protecting
          your personal information. Please read our Privacy Policy carefully to
          understand how we collect, use, and safeguard your data.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-700">
            We collect personal information, including but not limited to your
            name, email address, phone number, payment details, and shipping
            address when you use our services or make a purchase.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700">
            The information we collect is used to process your orders, provide
            customer support, improve our services, and communicate with you
            regarding your rental.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            3. Data Security
          </h2>
          <p className="text-gray-700">
            We take appropriate security measures to protect your personal data
            from unauthorized access, alteration, or destruction. Your payment
            information is encrypted during transmission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-700">
            We do not sell, rent, or share your personal information with third
            parties without your consent, except for purposes related to
            fulfilling your order or as required by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700">
            We may use cookies or similar technologies to improve your browsing
            experience, analyze website usage, and personalize content and ads.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            6. Your Rights
          </h2>
          <p className="text-gray-700">
            You have the right to access, update, or delete your personal
            information. You may also opt out of receiving promotional emails or
            notifications at any time.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700">
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be posted on this page, and the date of the
            most recent revision will be indicated at the bottom.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            8. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy or
            how we handle your personal information, please contact us at:
            support@example.com.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

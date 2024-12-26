import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";
import { Helmet } from "react-helmet";

const TermsAndConditions: React.FC = () => {
    return (
      <>
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <Navbar />
          <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to our rental services. By using our services, you agree to
            comply with the following terms and conditions. Please read them
            carefully:
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              1. Payment Policy
            </h2>
            <p className="text-gray-700">
              The rental fee, security deposit, and any additional charges must
              be paid in full before or at the time of AC delivery or
              installation.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              2. Accepted Payment Methods
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Google Pay</li>
              <li>PhonePe</li>
              <li>Paytm</li>
              <li>UPI</li>
              <li>IMPS</li>
              <li>Net banking</li>
              <li>Direct bank transfers</li>
              <li>Cash</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              3. Security Deposit
            </h2>
            <p className="text-gray-700">
              A refundable security deposit of ₹2,000 is required. This deposit
              will be refunded at the time of product pickup, provided no
              damages are found.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              4. Refund Policy
            </h2>
            <p className="text-gray-700">
              The rental amount is non-refundable, even if the rented products
              are returned early. Only the security deposit is refundable,
              subject to the condition of the product.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              5. Delivery Policy
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                The customer or their authorized representative must be present
                on the agreed date and time to verify the item's condition upon
                delivery.
              </li>
              <li>
                The product must be returned in the same condition as delivered.
              </li>
              <li>
                Products can only be returned post-delivery if they are found to
                have significant defects or are non-functional.
              </li>
              <li>
                A cancellation fee of ₹1,000 will apply if an order is canceled
                after delivery.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              6. Pickup Policy
            </h2>
            <p className="text-gray-700">
              Customers must notify us at least one week in advance to arrange
              for product pickup.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              7. Damage Policy
            </h2>
            <p className="text-gray-700">
              The customer is responsible for any damage, loss, or theft of the
              product during the rental period. Charges for damage, loss, or
              theft will be based on the product's market value.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              8. Maintenance Policy
            </h2>
            <p className="text-gray-700">
              Repair and maintenance of the product are covered by our team at
              no additional cost during the rental period. A visit fee of ₹100
              or ₹200, depending on the distance, will apply.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              9. Relocation Policy
            </h2>
            <p className="text-gray-700">
              Relocation of the rented item to a different location is strictly
              prohibited. The product must remain at the original delivery and
              installation site. If the customer relocates the item
              independently, they will assume full responsibility for
              maintenance, and the security deposit will be forfeited.
            </p>
          </section>
        </div>
        <Footer />
      </>
    );
};

export default TermsAndConditions;

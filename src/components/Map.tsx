import React from "react";

export const Map: React.FC = () => {
  return (
    <div className="bg-gray-50 py-4 lg:py-8 flex flex-col items-center justify-center">
      
      <h2 className="text-4xl font-bold  mb-6">Our Location</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Visit us at our office or reach out for more information. Use the map below to find us.
      </p>
      <div className="w-full max-w-4xl h-[500px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373631531554!3d-37.816279979751634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7a5f8f66b12!2sVictoria%20Market!5e0!3m2!1sen!2sus!4v1637647086930!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

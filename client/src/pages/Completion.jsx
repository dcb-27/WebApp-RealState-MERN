import React from "react";

export default function Completion() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Congratulations!</h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        You've successfully secured your position. Thank you for choosing us to
        help you find your new home. Our team will be in touch with you shortly
        to guide you through the next steps.
      </p>
      <div className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 cursor-pointer transition duration-300 ease-in-out">
        <a href="/" className="text-lg font-semibold">
          Return to Home
        </a>
      </div>
    </div>
  );
}

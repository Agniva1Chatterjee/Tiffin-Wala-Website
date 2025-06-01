import React, { useState } from "react";

const SignupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-signup") {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Signup Modal with Phone Number</h2>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Sign Up
      </button>

      {isOpen && (
        <div
          className="modal-signup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="modal-content-signup bg-white p-6 rounded-lg w-80 relative shadow-lg">
            <span
              className="absolute right-4 top-3 text-gray-400 text-2xl cursor-pointer hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </span>
            <h2 className="text-lg font-semibold mb-4">Create Account</h2>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                pattern="[0-9]{10}"
                title="Enter a 10-digit phone number"
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupModal;

import React, { useState } from "react";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Contact
      </button>

      {isOpen && (
        <div
          id="contactModal"
          className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <div
            className="modal-content bg-white p-6 rounded shadow-lg w-80 relative animate-zoom"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close-modal absolute top-2 right-4 text-xl font-bold cursor-pointer text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              &times;
            </span>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-3"
            >
              <input
                type="hidden"
                name="access_key"
                value="4aa0e9e1-6b7e-4d5a-a848-75a2cde20f03"
              />
              <label className="block text-sm">Username</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full border p-2 rounded"
              />
              <label className="block text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full border p-2 rounded"
              />
              <label className="block text-sm">Number</label>
              <input
                type="number"
                name="number"
                placeholder="Enter your number"
                required
                className="w-full border p-2 rounded"
              />
              <label className="block text-sm">Message</label>
              <textarea
                name="message"
                placeholder="Your message"
                required
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="w-full mt-2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;

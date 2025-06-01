import React, { useState } from "react";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Toggle Login Modal Example</h2>

      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Login
      </button>

      {isOpen && (
        <div
          className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="modal-content bg-white p-6 rounded-md w-72 relative shadow-md">
            <span
              className="close absolute right-4 top-3 text-gray-400 text-2xl font-bold cursor-pointer hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </span>
            <h2 className="text-lg font-semibold mb-4">Login</h2>
            <form>
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;

import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // Add logic to handle form submission here
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="px-4 max-w-screen-md w-full bg-white p-10 rounded-xl shadow-xl transform transition duration-500 hover:scale-105">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-6">Contact Us</h2>
        <p className="mb-8 font-medium text-center text-gray-600">
          Got a technical issue? Want to send feedback about the beta feature? Let us know, and we'll get back to you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              rows="6"
              id="message"
              placeholder="Leave a comment..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
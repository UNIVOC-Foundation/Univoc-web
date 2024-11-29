
import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-4 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name *"
          className="w-full p-3 border rounded-md focus:ring focus:ring-teal-300"
          required
        />
        <input
          type="email"
          placeholder="Email Address *"
          className="w-full p-3 border rounded-md focus:ring focus:ring-teal-300"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex">
          <select
            className="w-16 p-3 border-r rounded-l-md focus:ring focus:ring-teal-300"
            defaultValue="IN"
          >
            <option value="IN">IN +91</option>
            <option value="US">US +1</option>
          </select>
          <input
            type="tel"
            placeholder="Enter mobile number "
            className="flex-1 p-3 border rounded-r-md focus:ring focus:ring-teal-300"
            required
          />
        </div>
        <input
          type="text"
          placeholder="State *"
          className="w-full p-3 border rounded-md focus:ring focus:ring-teal-300"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="City *"
          className="w-full p-3 border rounded-md focus:ring focus:ring-teal-300"
          required
        />
        <select
          className="w-full p-3 border rounded-md focus:ring focus:ring-teal-300"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select School Name
          </option>
          <option value="School 1">School 1</option>
          <option value="School 2">School 2</option>
        </select>
      </div>
      <textarea
        placeholder="Your message *"
        className="w-full p-3 border rounded-md focus:ring focus:ring-teal-300"
        rows="4"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600"
      >
        Contact Us
      </button>
    </form>
  );
};

export default ContactForm;

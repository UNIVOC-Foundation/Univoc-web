const Contact = () => {
  return (
    <div className="bg-[url('./images/Frame7.png')] bg-cover bg-center text-white p-8 flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-3xl font-bold mb-2">Have More Questions?</h2>
        <p className="mb-2">
          Reach out to us. Our support team is here to assist you.
        </p>
        <div className="mb-2">
          <span className="mr-2 text-white">📧</span>
          Hrd@Theunivoc.Com
        </div>
        <div>
          <span className="mr-2 text-white">📞</span>
          +91 84483 73884
        </div>
        <div className="mt-8">
          <svg
            className="w-24 h-24 text-white opacity-50 mx-auto lg:mx-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
      </div>
      <div className="lg:w-1/4 w-full mt-8 lg:mt-0 lg:mr-40">
        <form className="bg-white p-6 rounded-lg shadow-md">
          <input
            className="w-full mb-4 p-2 border rounded"
            type="text"
            placeholder="Full Name*"
          />
          <input
            className="w-full mb-4 p-2 border rounded"
            type="email"
            placeholder="Email Address*"
          />
          <div className="flex mb-4">
            <select
              className="w-1/3 p-1 border rounded-l bg-white text-black"
              defaultValue="IN +91"
            >
              <option value="IN">IN +91</option>
              {/* Add more country options as needed */}
            </select>
            <input
              className="w-3/4 p-2 border rounded-r"
              type="tel"
              placeholder="Enter your mobile number*"
            />
          </div>
          <div className="flex mb-4">
            <input
              className="w-1/2 mr-2 p-2 border rounded"
              type="text"
              placeholder="State*"
            />
            <input
              className="w-1/2 ml-2 p-2 border rounded"
              type="text"
              placeholder="City*"
            />
          </div>
          <select
            className="w-full mb-4 p-2 border text-gray-500 rounded"
            defaultValue=""
            placeholder="Select School Name"
          >
            <option value="" disabled>
              Select School Name
            </option>
          </select>
          <textarea
            className="w-full mb-4 p-2 border rounded"
            rows="4"
            placeholder="Your Message*"
          ></textarea>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

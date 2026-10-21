// Task 1: Interactive Card + Input + Button
function InteractiveCard() {
  return (
    <div className="max-w-sm p-4 rounded-xl shadow-md bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 mx-auto text-left">
      <h3 className="text-xl font-semibold">React Training</h3>

      <p className="text-gray-600 mt-2">
        Learn React with hands-on examples and real projects.
      </p>

      {/* Input with focus ring & transition */}
      <input
        type="email"
        placeholder="Enter your email"
        className="mt-3 border border-gray-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 transition w-full outline-none"
      />

      {/* Button with hover transition */}
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full">
        Read More
      </button>
    </div>
  );
}

export default InteractiveCard;

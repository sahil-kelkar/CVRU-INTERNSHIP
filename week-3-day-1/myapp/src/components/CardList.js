// Tasks 1 & 3: Tailwind Card Layout with Responsive Grid & Hover Effects
function CardList() {
  const cards = [
    {
      id: 1,
      title: "React Components",
      desc: "Learn to build reusable UI pieces with clean JSX syntax."
    },
    {
      id: 2,
      title: "Tailwind CSS",
      desc: "Style elements rapidly using modern utility classes directly in JSX."
    },
    {
      id: 3,
      title: "Responsive Design",
      desc: "Easily handle mobile, tablet, and desktop screens with grid utilities."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Tailwind Card Layout
      </h2>

      {/* Task 3: Responsive Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-6 shadow-md rounded-xl bg-white hover:scale-105 transition duration-200 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{card.desc}</p>
            </div>

            {/* Task 1: Button with Tailwind classes */}
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium text-sm self-start">
              Click Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;

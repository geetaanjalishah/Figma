import { useState } from "react";

const Widget = () => {
  const navigation = [
    {
      name: "About Me",
      href: "#about",
      description: `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                    I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and
                     my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...`,
    },
    {
      name: "Experiences",
      href: "#experiences",
      description: "This is the Experiences section.",
    },
    {
      name: "Recommended",
      href: "#recommended",
      description: "This is the Recommended section.",
    },
  ];

  const [activeSection, setActiveSection] = useState(navigation[0]);

  return (
    <div className="widget">
      <nav className="flex justify-center mb-4">
        <p className="text-center text-2xl p-4" style={{ color: "#969696" }}>
          ⍰
        </p>
        <div className="nav flex space-x-4 bg-[#171717]">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveSection(item)}
              className={`nav-btn text-gray-500 bg-[#171717] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                activeSection.name === item.name ? "text-white" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
      <div className="flex items-center">
        <p className="text-center text-3xl p-4" style={{ color: "#969696" }}>
          ⊞
        </p>
        <div className="text-start p-4" style={{ color: "#969696" }}>
          <p>{activeSection.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;

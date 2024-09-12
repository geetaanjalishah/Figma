import React, { useState, useRef, useEffect } from "react";

const InfoIcon = () => (
  <p className="text-center text-2xl p-4" style={{ color: "#969696" }}>
    ⍰
  </p>
);

const AddIcon = () => (
  <p className="text-center text-3xl p-4" style={{ color: "#969696" }}>
    ⊞
  </p>
);

const Gallery = () => {
  const navigation = [
    {
      name: "Gallery",
      href: "#gallery",
      description: `images`,
    },
  ];

  const [activeSection, setActiveSection] = useState(navigation[0]);
  const [images, setImages] = useState([
    "https://www.nomadicweekends.com/wp-content/uploads/2019/01/Silk-Route.jpg",
    "https://www.esikkimtourism.in/wp-content/uploads/2019/04/ravnglmay.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f6/77/2b/queen-of-hills.jpg?w=1200&h=1200&s=1"
    ]);

  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: galleryRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  }, [images]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  };

  const scroll = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = 190; 
      galleryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="galleryWidget p-4">
      <nav className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <InfoIcon />
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveSection(item)}
              className={`nav-btn-1 text-gray-500 bg-[#171717] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                activeSection.name === item.name ? "text-white" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <label
            htmlFor="file-upload"
            className="upload cursor-pointer bg-gray-600 hover:bg-gray-800 text-white px-3 py-2 rounded-md flex items-center"
            >
            <span className="ml-2">+ ADD PHOTO</span>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <button
            className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-900"
            onClick={() => scroll("left")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-900"
            onClick={() => scroll("right")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>


      <div className="flex">
        <AddIcon />
        <div
            className="flex space-x-4 overflow-x-scroll pb-2"
            ref={galleryRef}
        >
            {images.map((image, index) => (
            <div
                key={index}
                className="w-[190px] h-[179px] flex-shrink-0"
                style={{ minWidth: '190px', minHeight: '179px' }}
            >
                <img
                src={image}
                alt={`Gallery ${index}`}
                className="object-cover w-full h-full"
                />
            </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default Gallery;

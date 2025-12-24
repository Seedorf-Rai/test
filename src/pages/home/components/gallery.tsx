import { useState } from "react";

// Sample data - replace with your actual galleryImages import
const galleryImages = [
  {
    id: 1,
    title: "Kanchenjunga Peak",
    location: "North Sikkim",
    category: "Landscapes",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    likes: 1234,
    views: "45.2k"
  },
  {
    id: 2,
    title: "Buddhist Monastery",
    location: "Pelling",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    likes: 892,
    views: "32.1k"
  },
  {
    id: 3,
    title: "Red Panda",
    location: "Himalayan Zoo",
    category: "Wildlife",
    image: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800&q=80",
    likes: 2156,
    views: "67.8k"
  },
  {
    id: 4,
    title: "Tsomgo Lake",
    location: "East Sikkim",
    category: "Landscapes",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    likes: 1678,
    views: "54.3k"
  },
  {
    id: 5,
    title: "River Rafting",
    location: "Teesta River",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    likes: 945,
    views: "28.9k"
  },
  {
    id: 6,
    title: "Prayer Flags",
    location: "Gangtok",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80",
    likes: 1089,
    views: "41.7k"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<
    "All Photos" | "Landscapes" | "Culture" | "Wildlife" | "Adventure"
  >("All Photos");

  const categories: (
    | "All Photos"
    | "Landscapes"
    | "Culture"
    | "Wildlife"
    | "Adventure"
  )[] = ["All Photos", "Landscapes", "Culture", "Wildlife", "Adventure"];

  const filteredImages =
    activeCategory === "All Photos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-blue-50 to-slate-50"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-[fadeIn_0.6s_ease-out]">
          <span className="text-purple-600 font-semibold text-sm sm:text-base mb-3 block">
            📸 Visual Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Sikkim Through
            <span className="text-purple-600 ml-2">Our Lens</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in the breathtaking beauty of Sikkim through our
            curated photo gallery
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-16 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 sm:px-8 py-2 rounded-full font-semibold transition-all duration-200 transform ${
                activeCategory === category
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5 hover:shadow-md"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:z-10 animate-[fadeIn_0.6s_ease-out] group"
            >
              <div className="relative h-70 overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    📍 {image.location}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex gap-6">
                    <span className="flex items-center gap-2 text-white text-sm font-semibold">
                      <span className="text-base">❤️</span>
                      {image.likes}
                    </span>
                    <span className="flex items-center gap-2 text-white text-sm font-semibold">
                      <span className="text-base">👁️</span>
                      {image.views}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="text-center">
          <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold text-lg transition-all duration-200 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
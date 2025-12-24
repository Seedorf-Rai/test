import { cultureItems } from "../../../data/data";

const Culture = () => {
  return (
    <section 
      className="py-16 px-8" 
      id="culture"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #fef3c7 50%, #fee2e2 100%)' }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span 
            className="inline-block px-6 py-1 text-gray-800 rounded-full text-sm font-semibold tracking-wide mb-6"
          >
            🎭 Rich Heritage
          </span>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-gray-800 mb-4 leading-tight">
            Cultural<span style={{ marginLeft: '10px' }}>Treasures of Sikkim</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Experience the tranquility of nature and the warmth of our culture
            through centuries-old traditions and spiritual practices
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cultureItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-200 border border-gray-200 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
            >
              {/* Culture Image with Overlay */}
              <div className="relative h-[250px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay with Icon */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                >
                  <span 
                    className="text-5xl"
                    style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))' }}
                  >
                    {item.icon}
                  </span>
                </div>
              </div>

              {/* Culture Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Culture Link Button */}
                <button 
                  className="group/btn inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:translate-x-1 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)' }}
                >
                  Explore Culture
                  <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Quote */}
        <div className="max-w-[900px] mx-auto p-16 bg-white/80 backdrop-blur-md rounded-2xl border-2 border-purple-600/20 shadow-xl max-md:p-8">
          <blockquote className="relative m-0 text-xl italic text-gray-800 leading-loose text-center max-md:text-base">
            <span 
              className="absolute -top-5 -left-2.5 text-6xl text-purple-600 opacity-30"
              style={{ lineHeight: 0 }}
            >
              "
            </span>
            "In Sikkim, every prayer flag carries a wish, every monastery holds
            a story, and every festival celebrates the harmony between nature
            and humanity."
            <cite className="block mt-6 text-sm text-gray-600 not-italic font-semibold">
              — Ancient Sikkimese Wisdom
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Culture;
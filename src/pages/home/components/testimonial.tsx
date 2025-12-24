import { testimonials } from "../../../data/data";

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={index < rating ? "text-base opacity-100" : "text-base opacity-30"}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section 
      className="py-16 px-8" 
      id="testimonials"
      style={{ background: 'linear-gradient(180deg, #fee2e2 0%, #ffffff 100%)' }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span 
            className="inline-block px-6 py-1 text-white rounded-full text-sm font-semibold tracking-wide mb-6"
            style={{ background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)' }}
          >
            💬 Traveler Stories
          </span>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-gray-800 mb-4 leading-tight">
            What <span style={{ marginLeft: '10px' }}>Our Travelers Say</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Real experiences from travelers who discovered the magic of Sikkim
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-2xl p-8 shadow-md transition-all duration-200 border border-gray-200 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
            >
              {/* Testimonial Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[60px] h-[60px] rounded-full object-cover border-4 border-blue-600"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    📍 {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Experience Badge */}
              <p className="mb-4">
                <span 
                  className="inline-block px-4 py-1 text-white rounded-full text-xs font-semibold"
                  style={{ background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)' }}
                >
                  {testimonial.experience}
                </span>
              </p>

              {/* Comment */}
              <p className="relative text-gray-600 leading-loose italic text-[0.9375rem] pl-4 border-l-4 border-blue-600">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
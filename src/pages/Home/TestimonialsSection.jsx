import React from "react";

function TestimonialsSection() {
  // Testimonial data in JSON format
  const testimonials = [
    {
      id: 1,
      content:
        "I originally joined BNI in the area, and I account for a large part of my business through BNI referrals. We made over 80 referrals from BNI in the area and shared numerous connections – making BNI an annual profitable sales channel for networking.",
      author: "Ken Reddington",
      company: "Reddington Properties",
    },
    {
      id: 2,
      content:
        "If you are looking to grow your business and build strong referral relationships with a group of dedicated and motivated business owners, BNI Chester is definitely worth a visit.",
      author: "Mason Taylor",
      company: "Taylor Property",
    },
    {
      id: 3,
      content:
        "In my second year I took my business to another level thanks to BNI Chester including an entirely new company. I joined BNI in retail and commercial services, now fitness and grew my business. BNI provided the resources and support that my business needed to accomplish this and much more. Each week BNI offers me free training, networking and access to professional businesses. I would recommend BNI to anybody who is serious about growth. It's well worth a visit to see how BNI could work for you.",
      author: "Stephen Myers",
      company: "Myers Running Club",
    },
    {
      id: 4,
      content:
        "Fantastic group of people and a very successful way to build business relationships and referral partners.",
      author: "Boston Barland",
      company: "Barland Roofing & Construction",
    },
    {
      id: 5,
      content: "Fantastic group of other local business owners.",
      author: "Oliver Woodward",
      company: "Loan Advisor",
    },
    {
      id: 6,
      content:
        "Fantastic organization. Having been part of this group system, it has helped me build my business.",
      author: "John Wright",
      company: "Mid-Cheshire Windows",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#CF2030] mb-12 text-center">
          What Our Members Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#CF2030]"
            >
              <div className="text-6xl font-bold text-[#CF2030] mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-[#CF2030]">
                  {testimonial.author}
                </p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-[#CF2030] mb-6">
            Don't miss out!
          </h3>
          <button className="bg-[#CF2030] hover:bg-[#B01A28] text-white font-semibold py-3 px-8 rounded-2xl transition duration-300 text-xl">
            Book Your Visit
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

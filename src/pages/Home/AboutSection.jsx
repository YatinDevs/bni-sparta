import React from "react";

function AboutSection() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      {/* First section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="md:w-1/2">
          <img
            src="https://chesterbni.co.uk/wp-content/uploads/2024/02/2023-07-21-at-BNI-Chester-1024x683.webp"
            alt="BNI Chester meeting"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#CF2030] mb-6">
            About Chester BNI
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-gray-700">
            <p>
              Our business referral meeting is held every Thursday morning,
              between 6:45am and 8:15am, at Rowton Hall Hotel and Spa. The
              meeting is followed by breakfast.
            </p>
            <p>
              Why not join us for a meeting, and tell us about your business,
              what you do, who you're looking for introductions to and how we
              can help you?
            </p>
            <p>
              With business being passed between members at every meeting,
              you're sure to make some great connections that will help you and
              your business to grow.
            </p>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="flex flex-col md:flex-row-reverse gap-8">
        <div className="md:w-1/2">
          <img
            src="https://chesterbni.co.uk/wp-content/uploads/2024/08/WhatsApp-Image-2024-07-04-at-13.48.56_f8d6436b-1024x683.jpg"
            alt="BNI Chester members"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#CF2030] mb-6">
            Who Is Chester BNI For?
          </h2>
          <div className="space-y-4 text-lg md:text-xl text-gray-700">
            <p>
              If you're a business owner, or a valued team member in your
              business, and you're looking to make connections and attract
              clients and customers from around Chester, Ellesmere Port, Wirral
              and the North West, then BNI Chester is the perfect place for you
              to visit.
            </p>
            <p className="font-semibold">
              BNI Chester members were thanked for passing £1,431,292 in
              invoiced business during 2024.
            </p>
            <p>
              We'd love to meet you and find out more about what you do, and how
              we can help you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

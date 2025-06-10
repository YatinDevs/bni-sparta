import React from "react";

function LocationSection() {
  // Unsplash images for gallery (business/meeting themed)
  const galleryImages = [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  ];

  return (
    <section className="bg-[#CF2030] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold text-[#CF2030] mb-6">
                Where is Chester BNI?
              </h2>

              <p className="text-xl text-gray-700 mb-6">
                Chester BNI is held at Grosvenor Pulford
              </p>

              <address className="text-lg text-gray-700 mb-8 not-italic">
                Wrexham Road, Pulford,
                <br />
                Chester CH4 9DG
              </address>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#CF2030] mb-4">
                  Chester BNI Full Meeting
                </h3>
                <h4 className="text-xl font-medium text-gray-800 mb-4">
                  BNI Education Slots
                </h4>
                <p className="text-lg text-gray-700">
                  An Entire BNI Chester Meeting
                  <br />
                  Hosted by Kieran Toner
                </p>
              </div>

              <button className="bg-[#CF2030] hover:bg-[#B01A28] text-white font-semibold py-3 px-8 rounded-2xl transition duration-300 text-lg">
                Watch Inside
              </button>
            </div>
          </div>

          {/* Right Column - Gallery and Video */}
          <div className="order-1 lg:order-2">
            {/* Image Gallery */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-[#CF2030] mb-4">
                Our Meeting Venue
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg shadow-md"
                  >
                    <img
                      src={image}
                      alt={`Venue image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* YouTube Video Embed */}
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-64 rounded-lg shadow-md bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-[#CF2030] mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">
                      BNI Chester Meeting Preview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;

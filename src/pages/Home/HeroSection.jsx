import React from "react";

function HeroSection() {
  return (
    <section className="bg-[#CF2030] pt-8  text-center text-[#ffffff] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
      <div className=" mx-auto">
        <h1 className="text-7xl  font-bold mb-6 mt-10">Chester BNI</h1>

        <p className="text-2xl mb-8 px-4">
          Our members earned <span>₹1,431,292 </span>in business from Chester
          BNI in 2024
        </p>

        <button className="bg-[#FFFFFF] hover:[#f4f4f4] cursor-pointer text-[#CF2030] font-light py-3 px-18 rounded-2xl  mb-8 transition duration-300 text-2xl ">
          Book Your Visit
        </button>

        {/* <div className="border-t border-gray-300 w-4/5 mx-auto mb-8"></div> */}

        <div className=" text-xl">
          <div className="bg-[#3A3A3A] w-full py-8 text-3xl">
            <p>Every Thursday Morning, 6:45am at Grosvenor Pulford</p>
          </div>
          <div className="w-full py-8 text-2xl">
            <p>We're looking for more quality business owners to join us</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

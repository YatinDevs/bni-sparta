import React from "react";

function FAQSection() {
  return (
    <section className="bg-white py-12 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#CF2030] mb-8 text-center">
        FAQs
      </h2>

      <div className="space-y-6">
        {/* FAQ Item 1 */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold text-[#CF2030] mb-2">
            Do I need to bring anything?
          </h3>
          <p className="text-gray-700">
            We recommend you bring lots of business cards with you, and any
            material you would like to give out to our members and other
            visitors - such as leaflets or brochures. It's also a good idea to
            bring something with which to take notes, such as a pen and paper,
            or a laptop or tablet if that's your preferred method.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold text-[#CF2030] mb-2">
            Is there parking?
          </h3>
          <p className="text-gray-700">
            There is plenty of free parking at the venue.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold text-[#CF2030] mb-2">
            What if I have special dietary requirements?
          </h3>
          <p className="text-gray-700">
            If you have any special dietary requirements for breakfast, you'll
            be able to let us know in advance. As soon as you book your place at
            a Chester BNI meeting one of our members will be in touch.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold text-[#CF2030] mb-2">
            Can I pay on the day?
          </h3>
          <p className="text-gray-700">
            Absolutely. If you'd prefer to pay on the day, you're more welcome
            to do so either by cash or card.
          </p>
        </div>

        {/* FAQ Item 5 */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold text-[#CF2030] mb-2">
            Can I attend if I'm already someone who does what I do?
          </h3>
          <p className="text-gray-700">
            We're afraid not, no. Chester BNI only allows one person per
            business category. Therefore, if you're an accountant and there's
            already a Chester BNI member who is an accountant, then you wouldn't
            be able to visit. Please check the list of members if you're not
            sure.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <button className="bg-[#CF2030] hover:bg-[#B01A28] text-white font-semibold py-3 px-8 rounded-2xl transition duration-300 text-xl">
          Book Your Visit
        </button>
      </div>
    </section>
  );
}

export default FAQSection;

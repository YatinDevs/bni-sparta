import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";

const memberData = [
  {
    id: 1,
    name: "Sarah Johnson",
    profession: "Financial Advisor",
    phone: "07485 440142",
    company: "Wealth Management Inc.",
    email: "sarah.johnson@wealthmgmt.com",
    website: "https://www.wealthmgmt.com",
    address: "25 Financial District, London EC2M 1AE",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
    logo: "https://via.placeholder.com/50/FF6B6B/FFFFFF?text=WM",
  },
  {
    id: 2,
    name: "Michael Chen",
    profession: "Software Engineer",
    phone: "03456 214321",
    company: "Tech Innovations Ltd",
    email: "michael.chen@techinnov.com",
    website: "https://www.techinnov.com",
    address: "42 Silicon Way, Manchester M15 6FN",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    logo: "https://via.placeholder.com/50/4ECDC4/FFFFFF?text=TI",
  },
  {
    id: 3,
    name: "Emma Wilson",
    profession: "Marketing Director",
    phone: "07912 345678",
    company: "Creative Solutions",
    email: "emma.wilson@creativesol.com",
    website: "https://www.creativesol.com",
    address: "15 Market Street, Bristol BS1 1JG",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    logo: "https://via.placeholder.com/50/FFBE0B/FFFFFF?text=CS",
  },
  {
    id: 4,
    name: "David Rodriguez",
    profession: "Architect",
    phone: "07654 321098",
    company: "Urban Design Partners",
    email: "d.rodriguez@urbandesign.com",
    website: "https://www.urbandesign.com",
    address: "7 Design Quarter, Birmingham B1 1AA",
    photo: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200",
    logo: "https://via.placeholder.com/50/3A86FF/FFFFFF?text=UD",
  },
  {
    id: 5,
    name: "Priya Patel",
    profession: "Healthcare Consultant",
    phone: "07890 123456",
    company: "Wellness First",
    email: "priya.patel@wellnessfirst.co.uk",
    website: "https://www.wellnessfirst.co.uk",
    address: "33 Health Lane, Leeds LS1 4HR",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
    logo: "https://via.placeholder.com/50/8338EC/FFFFFF?text=WF",
  },
  {
    id: 6,
    name: "James Wilson",
    profession: "Legal Counsel",
    phone: "07555 987654",
    company: "Justice Law Firm",
    email: "james.wilson@justicelaw.com",
    website: "https://www.justicelaw.com",
    address: "100 Legal Street, Edinburgh EH1 1YZ",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    logo: "https://via.placeholder.com/50/FF006E/FFFFFF?text=JL",
  },
  {
    id: 7,
    name: "Olivia Martin",
    profession: "Education Specialist",
    phone: "07777 555444",
    company: "Bright Minds Academy",
    email: "olivia.martin@brightminds.edu",
    website: "https://www.brightminds.edu",
    address: "22 Learning Boulevard, Cambridge CB2 1TN",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    logo: "https://via.placeholder.com/50/FB5607/FFFFFF?text=BM",
  },
  {
    id: 8,
    name: "Thomas Baker",
    profession: "Environmental Scientist",
    phone: "07999 888777",
    company: "Green Earth Research",
    email: "thomas.baker@greenearth.org",
    website: "https://www.greenearth.org",
    address: "5 Eco Park, Brighton BN1 4GH",
    photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200",
    logo: "https://via.placeholder.com/50/06D6A0/FFFFFF?text=GE",
  },
];

function MemberDirectory() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#CF2030] text-center mb-8">
          Who are our members?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memberData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                {/* Profile Section */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-4 border-4 border-white shadow-md">
                    {member.photo && (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-center text-[#CF2030]">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-2">
                    {member.profession}
                  </p>

                  {/* Phone with icon */}
                  {member.phone && (
                    <div className="flex items-center bg-red-50 px-4 py-2 rounded-full">
                      <FaPhone className="text-[#CF2030] mr-2" />
                      <a
                        href={`tel:${member.phone}`}
                        className="text-[#CF2030] font-medium"
                      >
                        {member.phone}
                      </a>
                    </div>
                  )}
                </div>

                {/* Company Section */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-start mb-4">
                    {/* Company Logo */}
                    {member.logo && (
                      <div className="w-12 h-12 mr-3 bg-white p-1 rounded-md border border-gray-200">
                        <img
                          src={member.logo}
                          alt={`${member.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-[#CF2030]">
                        {member.company}
                      </h4>
                    </div>
                  </div>

                  {/* Email with icon */}
                  {member.email && (
                    <div className="flex items-center mb-3">
                      <FaEnvelope className="text-[#CF2030] mr-3 w-5" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-[#CF2030] hover:underline break-all"
                      >
                        {member.email}
                      </a>
                    </div>
                  )}

                  {/* Website with icon */}
                  {member.website && (
                    <div className="flex items-center mb-3">
                      <FaGlobe className="text-[#CF2030] mr-3 w-5" />
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CF2030] hover:underline break-all"
                      >
                        {member.website.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Address Section */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-[#CF2030] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm text-[#CF2030]">{member.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemberDirectory;

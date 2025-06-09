import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const categories = [
    "Designer Sarees",
    "Silk Sarees",
    "Bridal Collection",
    "Paithani Sarees",
    "Lehengas",
    "Party Wear",
    "Kanjeevaram",
    "Cotton Sarees",
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Collections", href: "#categories" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white pt-16 pb-8"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-amber-400 mb-6">
            Kabra Emporium
          </h3>
          <p className="text-gray-300 mb-6">
            Nashik's premier destination for exquisite sarees and traditional
            wear since 1984. We offer authentic collections with personalized
            service.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={index}
                href={href}
                aria-label={label}
                whileHover={{ y: -3 }}
                className="bg-amber-700 hover:bg-amber-600 p-2 rounded-full text-white transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-amber-400">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="text-amber-400 mr-2">•</span>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-amber-400">
            Collections
          </h3>
          <ul className="space-y-3">
            {categories.map((category, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="text-amber-400 mr-2">•</span>
                <a
                  href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {category}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-amber-400">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="text-amber-400 mt-1 flex-shrink-0" />
              <span>
                PLOT NO -380/09, 657/B/380, PADMAVISHWA CENTER, OLD PANDIT
                COLONY, NASHIK - 422002
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-amber-400" />
              <a
                href="mailto:connect@kabraemporium.com"
                className="hover:text-white transition-colors"
              >
                connect@kabraemporium.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-amber-400" />
              <div>
                <a
                  href="tel:+919890533709"
                  className="hover:text-white transition-colors block"
                >
                  +91 98905 33709
                </a>
                <a
                  href="tel:+919763404340"
                  className="hover:text-white transition-colors block"
                >
                  +91 97634 04340
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-amber-400" />
              <span>Mon-Sun: 10:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Kabra Emporium</span>. All
          Rights Reserved{" "}
          <a
            className="font-semibold text-white"
            href="https://www.richsol.com/"
          >
            {" "}
          </a>
          <Link to="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-blue-400 hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

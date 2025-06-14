import { motion } from "framer-motion";
import { Briefcase, ArrowRight, ChevronsRight, BarChart2 } from "lucide-react";

const SujiLogo = () => {
  return (
    <motion.div
      className="flex items-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <img
          src={
            "https://kabra-emporium-sarees.localo.site/cdn-cgi/image/compression=fast,dpr=1,height=46,width=46/https://lh3.googleusercontent.com/a-/ALV-UjUS3c3Sw3IXEG_c8R7qITTVHsUlZKgYYaT7yLi8KJ5JYEbK-L7d"
          }
          alt="Kabra"
          className="w-26 h-18 md:w-34 md:h-26"
        />
      </motion.div>
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* <h1 className="text-xl md:text-3xl font-bold text-gray-500 tracking-tight">
          Suji<span className="text-blue-600">Career</span>
        </h1> */}
      </motion.div>
    </motion.div>
  );
};

export default SujiLogo;

import { motion } from "framer-motion";

const About = () => {
  // Framer Motion variants for subtle animation on scroll
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    // Section: Use the deep charcoal color for the background
    <section className="py-24 px-6 md:px-12 bg-gray-950 text-white overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Column: Mission Statement - Bold and Orange-Accented */}
        <div className="lg:col-span-5 text-center lg:text-left">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold mb-4 uppercase leading-tight"
          >
            The VyomGarud <span className="text-[#ff7b00]">Mandate.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl max-w-lg lg:max-w-full lg:mx-0 mx-auto"
          >
            We are the architects of next-generation UAV systems, engineered for mission-critical operations where **failure is not an option**.
          </motion.p>
        </div>

        {/* Right Column: Detailed Summary & Core Values */}
        <div className="lg:col-span-7 relative">
          {/* Subtle Background Accent (Angular, Military Feel) */}
          <div className="absolute inset-0 bg-[#ff7b00] opacity-5 transform skew-y-12 -z-0 rounded-lg"></div>

          <motion.div
            variants={itemVariants}
            className="relative bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl border-l-4 border-l-[#ff7b00] z-10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white uppercase">
                Redefining Aerial Intelligence
            </h3>
            <p className="text-gray-300 text-base mb-6">
              VyomGarud delivers military-grade hardware and proprietary autonomous software, providing unparalleled **situational dominance** for defense and professional security forces globally. Our platforms guarantee **uncompromising reliability** and data security in the most challenging operational theatres.
            </p>
            
            <a 
                href="#systems"
                className="inline-flex items-center text-[#ff7b00] font-semibold uppercase tracking-wider hover:text-white transition duration-300"
            >
                View Our Mission Focus 
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
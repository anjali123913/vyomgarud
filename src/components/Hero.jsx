import { motion } from "framer-motion";

const Hero = () => {
  // Define the custom charcoal color for a more consistent dark background
  const CHARCOAL = "bg-gray-950"; // A deep, almost-black charcoal
  const ACCENT_ORANGE = "#ff7b00"; 
  
  // Define staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
        } 
    },
  };

  return (
    // 1. Core Background & Height: Use deep charcoal. Added 'relative' for absolute positioning of background effects.
    <section className={`relative min-h-screen flex flex-col justify-center items-center text-center ${CHARCOAL} overflow-hidden px-4 md:px-8`}>
        
      {/* 2. Visual Element/Placeholder: Add a subtle, futuristic grid or data visualization effect */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          {/* Example: A simple pattern/grid for that 'futuristic' data center feel */}
          <div className="w-full h-full bg-[radial-gradient(#ff7b0030_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      {/* 3. Text & CTA Container: Use motion to fade in the entire content block */}
      <motion.div 
        className="z-10 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Company Name: Louder, more tracking, less orange (let the orange be for CTA) */}
        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-[6.5rem] lg:text-[8rem] font-extrabold text-white tracking-widest leading-none"
        >
          VYOMGARUD
        </motion.h1>
        
        {/* Tagline: The Confident Pitch. Use the orange accent sparingly for impact. */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl font-light text-gray-300 max-w-4xl mt-4 mb-10 uppercase"
        >
          <span className="text-[#ff7b00] font-medium">UNCOMPROMISING INTELLIGENCE.</span> PRECISION-GUIDED FUTURE.
        </motion.p>
        
        {/* CTA Group: Now with a primary (orange) and a secondary (outline) button */}
        <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
        >
            {/* Primary CTA: Dominant orange for high conversion */}
            <motion.a
                whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${ACCENT_ORANGE}` }}
                href="#contact"
                className="bg-[#ff7b00] px-8 py-3 rounded-md text-gray-900 font-semibold uppercase tracking-wider text-lg transition duration-300 shadow-lg hover:shadow-orange-500/50"
            >
                REQUEST A MISSION BRIEF
            </motion.a>

            {/* Secondary CTA: Professional and information-focused */}
            <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#ff7b0020", borderColor: ACCENT_ORANGE }}
                href="#systems"
                className="border-2 border-gray-500 px-8 py-3 rounded-md text-white font-medium uppercase tracking-wider text-lg transition duration-300"
            >
                EXPLORE SYSTEMS
            </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
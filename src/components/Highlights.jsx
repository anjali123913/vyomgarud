import { motion } from "framer-motion";

// SVG Icons - Simple, clean, and military-themed (Shield, Processor, Globe)
const ShieldIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const CpuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cpu">
    <rect x="5" y="5" width="14" height="14" rx="2" ry="2"></rect>
    <path d="M9 9h6v6H9z"></path>
    <line x1="9" y1="1" x2="9" y2="5"></line>
    <line x1="15" y1="1" x2="15" y2="5"></line>
    <line x1="9" y1="19" x2="9" y2="23"></line>
    <line x1="15" y1="19" x2="15" y2="23"></line>
    <line x1="1" y1="9" x2="5" y2="9"></line>
    <line x1="1" y1="15" x2="5" y2="15"></line>
    <line x1="19" y1="9" x2="23" y2="9"></line>
    <line x1="19" y1="15" x2="23" y2="15"></line>
  </svg>
);

const GlobeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

// Refined data structure
const highlightData = [
  { 
    title: "BATTLE-TESTED RELIABILITY", 
    description: "Engineered to MIL-SPEC standards for zero-tolerance, mission-critical environments.",
    icon: ShieldIcon,
    index: 1 
  },
  { 
    title: "AI-POWERED AUTONOMY", 
    description: "Proprietary L7 deep-learning software for complex, adaptive, and fully independent navigation.",
    icon: CpuIcon,
    index: 2
  },
  { 
    title: "PRECISION ENGINEERING", 
    description: "Globally competitive hardware. Designed, developed, and manufactured for peak performance.",
    icon: GlobeIcon,
    index: 3
  },
];

const Highlights = () => {
  // Framer Motion variants for staggered reveal
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-20 px-4 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title: Use white for the main text, with the orange as a subtle accent/underline */}
        <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 uppercase"
        >
            The VyomGarud Advantage
        </motion.h2>
        <div className="h-1 w-20 bg-[#ff7b00] mx-auto mb-16 rounded-full"></div> {/* Orange Separator */}

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {highlightData.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Only animate when it comes into view once
              custom={i}
              // Card Styling: Stronger background, bold border, and a shadow/glow on hover
              className="relative bg-gray-800/70 border-t-4 border-t-gray-700 p-8 pt-12 rounded-lg shadow-2xl transition duration-500 transform hover:-translate-y-1 hover:border-t-[#ff7b00] hover:shadow-orange-500/30 w-full md:w-1/3"
            >
              {/* Feature Number Tag */}
              <span className="absolute top-0 left-0 bg-[#ff7b00] text-black text-xs font-bold px-3 py-1 rounded-br-lg">
                FEATURE {item.index}
              </span>
              
              {/* Icon - Prominent and orange. Now an inline component. */}
              <item.icon className="w-10 h-10 text-[#ff7b00] mb-4 mx-auto" />

              {/* Title - Confident and uppercase */}
              <h3 className="text-xl font-bold uppercase text-white mb-2 tracking-wider">
                {item.title}
              </h3>
              
              {/* Description - Added descriptive text for better persuasion */}
              <p className="text-gray-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
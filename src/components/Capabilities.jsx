import { motion } from "framer-motion";

// SVG Icons - Simple, clean, and representative of the capabilities
const AutonomyIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path><path d="M16 12l-4 4-4-4"></path><path d="M12 8v8"></path></svg>
);

const ReconIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>
);

const ControlIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="2" x2="12" y2="22"></line><path d="M16.2 6.5l-8.4 11"></path><path d="M7.8 6.5l8.4 11"></path></svg>
);

const CustomIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 13.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"></path><path d="M12 21l-8-8c-1.66-1.66-1.66-4.34 0-6l10-10 8 8-10 10z"></path></svg>
);

const capabilitiesData = [
  {
    title: "AUTONOMOUS SYSTEMS",
    desc: "AI-driven UAVs with real-time navigation and adaptive intelligence. Unmanned precision.",
    icon: AutonomyIcon,
  },
  {
    title: "SURVEILLANCE & RECON",
    desc: "Military-grade aerial surveillance for high-risk environments. Multi-spectrum sensor fusion.",
    icon: ReconIcon,
  },
  {
    title: "ADVANCED FLIGHT CONTROL",
    desc: "Smart control algorithms ensuring stability and sub-meter precision in adverse weather.",
    icon: ControlIcon,
  },
  {
    title: "CUSTOM PLATFORMS",
    desc: "Tailored UAVs built for unique defense and industrial needs. Modular payload integration.",
    icon: CustomIcon,
  },
];

const Capabilities = () => {
  // Framer Motion variants for staggered card reveal
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    // Section: Use a dark charcoal background for contrast
    <section className="py-24 bg-gray-950 px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Title: Confident, white title with orange accent below */}
        <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 uppercase"
        >
            System Capabilities
        </motion.h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Engineered beyond expectation. Our core systems are designed for mission dominance.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilitiesData.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={i}
              // Card Styling: Angular design, strong hover effect
              className="group relative bg-gray-800 p-8 rounded-lg overflow-hidden shadow-2xl 
                         border-b-4 border-b-gray-700 hover:border-b-[#ff7b00] 
                         transition duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Angular Accent Overlay (Top Right) */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff7b00] opacity-5 transform skew-x-12 -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition duration-300"></div>

              {/* Icon - Orange Accent */}
              <item.icon className="w-8 h-8 text-[#ff7b00] mb-4 mx-auto group-hover:scale-110 transition duration-300" strokeWidth={2} />

              {/* Title */}
              <h3 className="text-xl font-bold uppercase text-white mb-3 tracking-wider">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Secondary CTA below the cards for deeper engagement */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
        >
            <a 
                href="#data-sheet"
                className="inline-block border-2 border-[#ff7b00] px-8 py-3 rounded-md text-[#ff7b00] font-semibold uppercase tracking-wider transition duration-300 hover:bg-[#ff7b00] hover:text-black"
            >
                DOWNLOAD SPECIFICATION SHEET
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
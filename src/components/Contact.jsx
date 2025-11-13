import { motion } from "framer-motion";

// SVG for Arrow (used for visual consistency)
const ArrowRight = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Contact = () => {
  // Variants for a quick upward fade-in of the form
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    // Contact Form Area
    <section
      id="contact"
      className="py-24 bg-gray-950 text-white px-6 md:px-12 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header: Focused on Action */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 uppercase"
        >
          Initiate Mission Request
        </motion.h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Our team is ready to discuss your specific operational requirements.
          Confidentiality assured.
        </p>

        {/* Contact Form - Angular, High-Contrast */}
        <motion.form
          className="max-w-xl mx-auto space-y-6"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Organization / Unit Name"
            className="w-full bg-gray-800 p-4 border border-gray-700 text-white placeholder-gray-500 transition duration-300 focus:outline-none focus:border-[#ff7b00] focus:ring-1 focus:ring-[#ff7b00]"
            required
          />
          <input
            type="email"
            placeholder="Mission Contact Email"
            className="w-full bg-gray-800 p-4 border border-gray-700 text-white placeholder-gray-500 transition duration-300 focus:outline-none focus:border-[#ff7b00] focus:ring-1 focus:ring-[#ff7b00]"
            required
          />
          <textarea
            placeholder="Detailed Requirements (Minimum 50 words)"
            className="w-full bg-gray-800 p-4 border border-gray-700 text-white placeholder-gray-500 transition duration-300 focus:outline-none focus:border-[#ff7b00] focus:ring-1 focus:ring-[#ff7b00]"
            rows="5"
            required
          />

          {/* Submit Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: `0 0 20px rgba(255, 123, 0, 0.5)`,
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#ff7b00] px-8 py-4 text-gray-900 font-bold uppercase tracking-widest text-lg transition duration-300 shadow-md hover:bg-white"
          >
            SEND SECURE TRANSMISSION
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

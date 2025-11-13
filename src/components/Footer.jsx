import { motion } from "framer-motion";

const Footer = () => {
    return (
        // Footer: Use the deepest charcoal color and a strong top border
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-950 py-10 md:py-16 text-gray-400 border-t-2 border-t-[#ff7b00]/30 px-6"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">

                {/* Left Block: Logo/Brand Identity */}
                <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-extrabold text-white tracking-widest mb-2">
                        VYOMGARUD
                    </h3>
                    <p className="text-sm text-[#ff7b00]">
                        PRECISION-GUIDED FUTURE
                    </p>
                </div>

                {/* Center Block: Quick Links (Crucial for B2B navigation) */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-medium uppercase tracking-wider">
                    <a href="#about" className="hover:text-white transition hover:underline underline-offset-4">
                        Mission
                    </a>
                    <a href="#systems" className="hover:text-white transition hover:underline underline-offset-4">
                        Systems & Specs
                    </a>
                    <a href="#highlights" className="hover:text-white transition hover:underline underline-offset-4">
                        Reliability
                    </a>
                    <a href="#contact" className="hover:text-[#ff7b00] transition hover:underline underline-offset-4">
                        Contact Sales
                    </a>
                </div>

                {/* Right Block: Legal and Compliance */}
                <div className="text-center lg:text-right text-xs space-y-1">
                    <p className="hover:text-white transition">
                        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
                    </p>
                    <p>
                        Engineered in India. Global Operations.
                    </p>
                    <p className="text-gray-500 mt-4">
                        © {new Date().getFullYear()} VyomGarud Systems. All Rights Reserved.
                    </p>
                </div>

            </div>
        </motion.footer>
    );
};

export default Footer;
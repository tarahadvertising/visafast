import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, ArrowRight, Shield, Globe, Clock, Users } from "lucide-react";

const stats = [
  { icon: Shield, value: "10K+", label: "Approved Visas" },
  { icon: Globe, value: "98%", label: "Success Rate" },
  { icon: Clock, value: "15+", label: "Countries" },
  { icon: Users, value: "24/7", label: "Support" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          src="/banner.webp"
          alt="VISAFAST Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
      </div>

      {/* World Map Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
          <path
            d="M150,200 Q200,180 250,200 T350,190 T450,200 T550,180 T650,200 T750,190 T850,200"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M100,250 Q200,230 300,250 T500,240 T700,250 T900,240"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M200,300 Q300,280 400,300 T600,290 T800,300"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
          <circle cx="300" cy="200" r="2" fill="white" opacity="0.3" />
          <circle cx="500" cy="180" r="2" fill="white" opacity="0.3" />
          <circle cx="700" cy="220" r="2" fill="white" opacity="0.3" />
          <circle cx="400" cy="250" r="2" fill="white" opacity="0.3" />
          <circle cx="600" cy="300" r="2" fill="white" opacity="0.3" />
        </svg>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl animate-[pulse-slow_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl animate-[pulse-slow_4s_ease-in-out_infinite_1s]" />

      {/* Airplane trail */}
      <motion.div
        className="absolute top-65 left-2/5 transform -translate-x-1/2 hidden lg:block"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane className="w-12 h-12 text-white/20 rotate-[-30deg]" />
        <svg className="absolute top-6 left-14 w-40 h-20" viewBox="0 0 160 80">
          <path
            d="M0,40 Q40,20 80,40 T160,30"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
            strokeDasharray="4,4"
          />
        </svg>
      </motion.div>

      {/* Content Container */}
      <div className="w-full max-w-[650px] mx-auto px-6 md:ml-[12%] md:mx-0 relative z-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.1] tracking-tight mb-8 font-['Poppins']"
        >
          <span className="gradient-text">Fast & Trusted</span>
          <br />
          <span className="text-white">Immigration Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl text-base md:text-lg text-gray-400 mb-12 leading-relaxed"
        >
          Expert visa consultation and immigration services to help you achieve
          your global ambitions. From tourist visas to permanent residency — we
          make it seamless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-start gap-4 mb-20"
        >
          <Link
            to="/consultation"
            className="group px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 border border-white/20 text-white text-sm font-semibold rounded-full hover:border-white/30 transition-all duration-300"
          >
            Check Eligibility
          </Link>
        </motion.div>
      </div>
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;

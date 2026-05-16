import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Search,
  FileCheck,
  Send,
  PartyPopper,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Consultation",
    description:
      "Free initial consultation to understand your immigration goals.",
    image: "/10.webp",
  },
  {
    icon: Search,
    title: "Eligibility Check",
    description:
      "Comprehensive assessment of your profile and visa eligibility.",
    image: "/11.webp",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Complete document preparation and verification by experts.",
    image: "/12.webp",
  },
  {
    icon: Send,
    title: "Submission",
    description: "Application submission with proper follow-up and tracking.",
    image: "/13.webp",
  },
  {
    icon: PartyPopper,
    title: "Approval & Travel",
    description: "Visa approval and pre-departure guidance for your journey.",
    image: "/14.webp",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-black relative" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-500 uppercase tracking-widest mb-4 block">
            How It Works
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-['Poppins'] mb-4">
            Our Simple <span className="gradient-text">5-Step Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A streamlined process designed to make your immigration journey
            smooth and stress-free.
          </p>
        </motion.div>
        {/* Process Grid */}
        <div className="max-w-6xl mx-auto">
          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {steps.slice(0, 3).map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Step Card */}
                <div className="glass-card overflow-hidden rounded-3xl hover:border-white/15 transition-all duration-300">
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-white font-bold text-xl">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-white/30 to-white/10 rounded-full transition-all duration-1000"
                            style={{
                              width: isInView
                                ? `${((index + 1) / steps.length) * 100}%`
                                : "0%",
                              transitionDelay: `${index * 200 + 500}ms`,
                            }}
                          />
                        </div>
                        <span className="text-white/50 text-xs font-medium">
                          Step {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line (Desktop) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 Cards (Centered) */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {steps.slice(3, 5).map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="group relative"
              >
                {/* Step Card */}
                <div className="glass-card overflow-hidden rounded-3xl hover:border-white/15 transition-all duration-300">
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {index + 4}
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-white font-bold text-xl">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-white/30 to-white/10 rounded-full transition-all duration-1000"
                            style={{
                              width: isInView
                                ? `${((index + 4) / steps.length) * 100}%`
                                : "0%",
                              transitionDelay: `${(index + 3) * 200 + 500}ms`,
                            }}
                          />
                        </div>
                        <span className="text-white/50 text-xs font-medium">
                          Step {index + 4}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line (Desktop) */}
                {index < 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

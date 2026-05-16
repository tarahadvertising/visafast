import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  GraduationCap,
  Briefcase,
  Building2,
  Home,
  Users,
  MessageSquare,
  FileText,
  ArrowRight,
} from "lucide-react";
const services = [
  {
    icon: Plane,
    title: "Tourist Visa",
    description:
      "Hassle-free tourist visa processing for leisure and exploration worldwide.",
    image: "/2.webp",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    description:
      "Complete support for international education applications and student permits.",
    image: "/3.webp",
  },
  {
    icon: Briefcase,
    title: "Work Visa",
    description:
      "Professional work permit assistance for global career opportunities.",
    image: "/4.webp",
  },
  {
    icon: Building2,
    title: "Business Visa",
    description:
      "Fast-track business visa solutions for entrepreneurs and professionals.",
    image: "/5.webp",
  },
  {
    icon: Home,
    title: "PR / Residency",
    description:
      "Permanent residency pathways with expert guidance and high success rates.",
    image: "/6.webp",
  },
  {
    icon: Users,
    title: "Family Sponsorship",
    description:
      "Reunite with loved ones through streamlined family visa processes.",
    image: "/7.webp",
  },
  {
    icon: MessageSquare,
    title: "Immigration Consultation",
    description:
      "Expert one-on-one consultation to assess your eligibility and plan your journey.",
    image: "/8.webp",
  },
  {
    icon: FileText,
    title: "Documentation Assistance",
    description:
      "Complete document preparation, verification, and submission support.",
    image: "/9.webp",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="section-padding bg-[#0a0a0a] relative"
      ref={ref}
    >
      <div className="container-custom">
        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-500 uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="text-xl md:text-3xl font-bold font-['Poppins'] mb-4">
            Comprehensive <span className="gradient-text">Visa Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From tourist visas to permanent residency, we offer end-to-end
            immigration services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 70}
              className="group rounded-2xl overflow-hidden bg-[#111] border border-white/8 hover:border-white/15 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                {/* Icon badge bottom-left */}
                <div className="absolute bottom-3 left-3">
                  <div className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              {/* Title only */}
              <div className="px-4 py-3">
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

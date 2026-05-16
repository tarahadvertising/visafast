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
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Tourist Visa",
    description:
      "Hassle-free tourist visa processing for leisure and exploration worldwide. We handle all documentation and application requirements.",
    features: [
      "Quick Processing",
      "Multiple Entry Options",
      "Travel Insurance Guidance",
    ],
    image: "/2.webp",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    description:
      "Complete support for international education applications. From university selection to visa approval, we guide you through every step.",
    features: [
      "University Selection",
      "SOP Assistance",
      "Scholarship Guidance",
    ],
    image: "/3.webp",
  },
  {
    icon: Briefcase,
    title: "Work Visa",
    description:
      "Professional work permit assistance for global career opportunities. We connect you with employers and handle permit applications.",
    features: [
      "Job Search Support",
      "Employer Liaison",
      "Work Permit Processing",
    ],
    image: "/4.webp",
  },
  {
    icon: Building2,
    title: "Business Visa",
    description:
      "Fast-track business visa solutions for entrepreneurs, investors, and corporate professionals seeking international expansion.",
    features: ["Investor Visas", "Startup Visas", "Corporate Transfers"],
    image: "/5.webp",
  },
  {
    icon: Home,
    title: "PR / Residency",
    description:
      "Permanent residency pathways with expert guidance. We assess your eligibility and maximize your chances of approval.",
    features: ["Express Entry", "PNP Programs", "Points Optimization"],
    image: "/6.webp",
  },
  {
    icon: Users,
    title: "Family Sponsorship",
    description:
      "Reunite with loved ones through streamlined family visa processes. We handle spouse, parent, and dependent applications.",
    features: ["Spouse Visas", "Parent Sponsorship", "Dependent Applications"],
    image: "/7.webp",
  },
  {
    icon: MessageSquare,
    title: "Immigration Consultation",
    description:
      "Expert one-on-one consultation to assess your eligibility, explore options, and create a personalized immigration roadmap.",
    features: [
      "Eligibility Assessment",
      "Strategy Planning",
      "Ongoing Support",
    ],
    image: "/8.webp",
  },
  {
    icon: FileText,
    title: "Documentation Assistance",
    description:
      "Complete document preparation, verification, translation, and submission support to ensure error-free applications.",
    features: [
      "Document Review",
      "Translation Services",
      "Notarization Support",
    ],
    image: "/9.webp",
  },
];
const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111] via-black to-black" />
        <div className="container-custom relative z-10 text-center">
          <span
            data-aos="fade-down"
            data-aos-delay="200"
            className="text-sm text-gray-500 uppercase tracking-widest mb-4 block"
          >
            Our Services
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-6"
          >
            Comprehensive <span className="gradient-text">Visa Solutions</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From tourist visas to permanent residency, we offer end-to-end
            immigration services tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
                className="group glass-card p-8 hover:border-white/10 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Service Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="px-2">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <CheckCircle className="w-4 h-4 text-gray-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/consultation"
                      className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors group/link"
                    >
                      Get Started
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="glass-card p-12 md:p-16 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-['Poppins'] mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-400 mb-8">
              Book a free consultation with our experts and we'll recommend the
              best pathway for your situation.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

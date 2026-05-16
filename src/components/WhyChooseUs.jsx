import {
  Zap,
  CheckCircle,
  Lock,
  UserCheck,
  DollarSign,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Processing",
    description:
      "Accelerated visa processing with priority handling for urgent applications.",
  },
  {
    icon: CheckCircle,
    title: "High Approval Rate",
    description:
      "98% success rate backed by expert knowledge and meticulous preparation.",
  },
  {
    icon: Lock,
    title: "Secure Documentation",
    description:
      "Bank-grade security for all your sensitive personal and financial documents.",
  },
  {
    icon: UserCheck,
    title: "Expert Consultants",
    description:
      "Certified immigration professionals with decades of combined experience.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees. Clear pricing structure with complete cost breakdown upfront.",
  },
  {
    icon: Heart,
    title: "Personalized Guidance",
    description:
      "Tailored immigration strategies based on your unique profile and goals.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-[#0a0a0a] relative">
      <div className="container-custom">
        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm text-gray-500 uppercase tracking-widest mb-4 block">
            Why VISAFAST
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-['Poppins'] mb-4">
            Why Choose <span className="gradient-text">VISAFAST</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            We combine expertise, technology, and personalized care to deliver
            immigration solutions that exceed expectations.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 80}
              className="group glass-card p-6 md:p-8 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-white font-semibold text-base md:text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import { Award, Users, Globe, TrendingUp, Target, Eye } from "lucide-react";

const stats = [
  { value: "10K+", label: "Visas Approved", icon: Award },
  { value: "98%", label: "Success Rate", icon: TrendingUp },
  { value: "15+", label: "Countries", icon: Globe },
  { value: "50+", label: "Expert Team", icon: Users },
];

const About = () => {
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
            About Us
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-6"
          >
            Your Trusted{" "}
            <span className="gradient-text">Immigration Partner</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            VISAFAST is your gateway to global opportunities. With years of
            expertise and a commitment to excellence, we make your immigration
            journey seamless and successful.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={500 + index * 100}
                className="glass-card p-8 text-center"
              >
                <stat.icon className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <div className="text-xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="600">
              <h2 className="text-3xl font-bold font-['Poppins'] mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Founded in 2014, VISAFAST was born from a simple belief:
                  everyone deserves access to expert immigration guidance
                  without the complexity and confusion that often surrounds the
                  process.
                </p>
                <p>
                  Our founder, having personally navigated the immigration
                  journey, understood the challenges firsthand. This experience
                  became the foundation for a consultancy built on transparency,
                  efficiency, and genuine care for every client's aspirations.
                </p>
                <p>
                  Today, we are proud to have facilitated over 10,000 successful
                  visa applications across 15+ countries, maintaining a
                  remarkable 98% approval rate that speaks to our expertise and
                  dedication.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="600"
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img
                  src="/story.webp"
                  alt="VISAFAST Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-white/5 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
              className="glass-card p-10"
            >
              <Target className="w-10 h-10 text-white/60 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To simplify the immigration process through expert guidance,
                cutting-edge technology, and personalized service, making global
                mobility accessible to everyone.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
              className="glass-card p-10"
            >
              <Eye className="w-10 h-10 text-white/60 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the world's most trusted and innovative immigration
                consultancy, empowering millions to achieve their international
                dreams with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-3xl font-bold font-['Poppins'] mb-12"
          >
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Integrity",
                desc: "Honest, transparent communication in everything we do.",
              },
              {
                title: "Excellence",
                desc: "Pursuing the highest standards in service delivery.",
              },
              {
                title: "Client-First",
                desc: "Your success is our primary measure of achievement.",
              },
              {
                title: "Innovation",
                desc: "Leveraging technology to streamline processes.",
              },
              {
                title: "Empathy",
                desc: "Understanding your journey and standing beside you.",
              },
              {
                title: "Reliability",
                desc: "Consistent, dependable support at every step.",
              },
            ].map((value, i) => (
              <div
                key={value.title}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={i * 80}
                className="glass-card p-6 text-left"
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

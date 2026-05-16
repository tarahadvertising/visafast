import { Target, Eye, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-black relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-card relative">
              <img
                src="/1.webp"
                alt="About VISAFAST"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card px-4 py-3 inline-block">
                  <span className="text-white font-medium">
                    10+ Years of Excellence
                  </span>
                </div>
              </div>
              <div className="absolute top-4 right-4 glass-card px-4 py-2">
                <span className="text-sm text-white font-medium">
                  Since 2014
                </span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-white/5 rounded-2xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-white/5 rounded-xl" />
          </div>

          {/* Right - Content */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <span className="text-sm text-gray-500 uppercase tracking-widest mb-4 block">
              About VISAFAST
            </span>
            <h2 className="text-base md:text-3xl font-bold mb-6 font-['Poppins'] leading-tight">
              Your Trusted Partner in <br />
              <span className="gradient-text">Global Immigration</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              VISAFAST is a premium immigration consultancy dedicated to making
              your global dreams a reality. With a decade of expertise and
              thousands of successful cases, we provide personalized visa
              solutions tailored to your unique aspirations.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
                className="glass-card glass-card-hover p-6 transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-2 text-lg">
                  Our Mission
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To simplify immigration with transparent, efficient, and
                  personalized services.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
                className="glass-card glass-card-hover p-6 transition-all duration-300"
              >
                <h3 className="text-white font-semibold mb-2 text-lg">
                  Our Vision
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  To be the world's most trusted name in immigration consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

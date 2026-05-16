import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const countries = [
  {
    name: "Canada",
    code: "CA",
    tagline: "Land of Opportunities",
    description:
      "One of the most immigrant-friendly countries with excellent quality of life, healthcare, and education.",
    visaTypes: [
      "Express Entry",
      "PNP",
      "Student Visa",
      "Work Permit",
      "Family Sponsorship",
    ],
    image: "/canada.webp",
    flag: "🇨🇦",
  },
  {
    name: "USA",
    code: "US",
    tagline: "The American Dream",
    description:
      "Home to world-class universities and endless career opportunities across every industry.",
    visaTypes: [
      "H-1B Work Visa",
      "F-1 Student",
      "EB-5 Investor",
      "Tourist B1/B2",
      "Green Card",
    ],
    image: "/usa.webp",
    flag: "🇺🇸",
  },
  {
    name: "United Kingdom",
    code: "GB",
    tagline: "World-Class Education",
    description:
      "Rich history, prestigious universities, and a thriving job market in a diverse society.",
    visaTypes: [
      "Skilled Worker",
      "Student Visa",
      "Family Visa",
      "Innovator",
      "Tourist Visa",
    ],
    image: "/uk.webp",
    flag: "🇬🇧",
  },
  {
    name: "Australia",
    code: "AU",
    tagline: "Quality of Life",
    description:
      "Beautiful landscapes, strong economy, and one of the highest standards of living globally.",
    visaTypes: [
      "Skilled Migration",
      "Student Visa",
      "Partner Visa",
      "Business Visa",
      "Tourist Visa",
    ],
    image: "/australia.webp",
    flag: "🇦🇺",
  },
  {
    name: "Germany",
    code: "DE",
    tagline: "Innovation Hub",
    description:
      "Europe's largest economy with free education, strong industries, and excellent work-life balance.",
    visaTypes: [
      "Job Seeker Visa",
      "Blue Card",
      "Student Visa",
      "Business Visa",
      "Family Visa",
    ],
    image: "/germany.webp",
    flag: "🇩🇪",
  },
  {
    name: "UAE",
    code: "AE",
    tagline: "Business Gateway",
    description:
      "Tax-free income, luxury lifestyle, and a booming economy that attracts global talent.",
    visaTypes: [
      "Employment Visa",
      "Investor Visa",
      "Golden Visa",
      "Tourist Visa",
      "Freelancer Visa",
    ],
    image: "/uae.webp",
    flag: "🇦🇪",
  },
  {
    name: "Europe (Schengen)",
    code: "EU",
    tagline: "Schengen Access",
    description:
      "Access to 27 European nations with a single visa. Rich culture, history, and opportunities.",
    visaTypes: [
      "Schengen Visa",
      "Work Permit",
      "Student Visa",
      "Business Visa",
      "Long Stay Visa",
    ],
    image: "/europe.webp",
    flag: "🇪🇺",
  },
  {
    name: "New Zealand",
    code: "NZ",
    tagline: "Natural Paradise",
    description:
      "Stunning natural beauty, welcoming culture, and strong immigration programs for skilled workers.",
    visaTypes: [
      "Skilled Migrant",
      "Work Visa",
      "Student Visa",
      "Partner Visa",
      "Visitor Visa",
    ],
    image: "/newzealand.webp",
    flag: "🇳🇿",
  },
];

const Countries = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 100,
      delay: 0,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111] via-black to-black" />
        <div className="container-custom relative z-10 text-center">
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 mb-6"
          >
            <MapPin className="w-4 h-4" />
            Explore Destinations
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-2xl md:text-3xl font-bold text-white mb-6 font-['Poppins']"
          >
            Choose Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {" "}
              Destination
            </span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We provide expert immigration support for the world's most
            sought-after destinations with proven track records.
          </p>
        </div>
      </section>
      {/* Countries List */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {countries.map((country, index) => (
              <div
                key={country.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer glass-card hover:border-white/20 transition-all duration-500"
              >
                {/* Background Image */}
                <img
                  src={country.image}
                  alt={country.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                {/* Top Badge with Flag */}
                <div className="absolute top-4 right-4">
                  <div className="w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <span className="text-2xl">{country.flag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {country.name}
                      </h3>
                      <span className="inline-block text-sm text-gray-300 border border-white/20 px-3 py-1 rounded-full">
                        {country.tagline}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                      {country.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {country.visaTypes.slice(0, 3).map((type) => (
                        <span
                          key={type}
                          className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300"
                        >
                          {type}
                        </span>
                      ))}
                      {country.visaTypes.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300">
                          +{country.visaTypes.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Link
                        to="/contact"
                        className="flex items-center gap-2 text-white text-sm font-medium hover:text-gray-300 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
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
            data-aos-duration="800"
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Poppins']">
              Ready to Start Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {" "}
                Immigration Journey?
              </span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Take the first step towards your dream destination with our expert
              guidance and personalized support.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Countries;

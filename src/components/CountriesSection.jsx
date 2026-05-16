import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const countries = [
  {
    name: "Canada",
    code: "CA",
    tagline: "Land of Opportunities",
    image: "/canada.webp",
    flag: "🇨🇦",
  },
  {
    name: "USA",
    code: "US",
    tagline: "The American Dream",
    image: "/usa.webp",
    flag: "🇺🇸",
  },
  {
    name: "United Kingdom",
    code: "GB",
    tagline: "World-Class Education",
    image: "/uk.webp",
    flag: "🇬🇧",
  },
  {
    name: "Australia",
    code: "AU",
    tagline: "Quality of Life",
    image: "/australia.webp",
    flag: "🇦🇺",
  },
  {
    name: "Germany",
    code: "DE",
    tagline: "Innovation Hub",
    image: "/germany.webp",
    flag: "🇩🇪",
  },
  {
    name: "UAE",
    code: "AE",
    tagline: "Business Gateway",
    image: "/uae.webp",
    flag: "🇦🇪",
  },
  {
    name: "Europe (Schengen)",
    code: "EU",
    tagline: "Schengen Access",
    image: "/europe.webp",
    flag: "🇪🇺",
  },
  {
    name: "New Zealand",
    code: "NZ",
    tagline: "Natural Paradise",
    image: "/newzealand.webp",
    flag: "🇳🇿",
  },
];

const CountriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="countries"
      className="section-padding bg-black relative"
      ref={ref}
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-500 uppercase tracking-widest mb-4 block">
            Destinations
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-['Poppins'] mb-4">
            Countries <span className="gradient-text">We Serve</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Immigration support for top destinations around the world with
            proven track records of successful applications.
          </p>
        </motion.div>
        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={country.image}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Top Badge */}
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <span className="text-2xl">{country.flag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white/80" />
                    <span className="text-white/80 text-sm font-medium">
                      {country.tagline}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-2">
                    {country.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      Explore →
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CountriesSection;

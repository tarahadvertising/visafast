import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    destination: "Canada",
    rating: 5,
    text: "VISAFAST made my Canadian PR process incredibly smooth. Their team guided me through every step with professionalism and care. Highly recommended!",
  },
  {
    name: "Sarah Mitchell",
    destination: "Australia",
    rating: 5,
    text: "I got my student visa approved in record time. The documentation support was flawless and the team was always available to answer my questions.",
  },
  {
    name: "Raj Patel",
    destination: "United Kingdom",
    rating: 5,
    text: "Professional, transparent, and efficient. VISAFAST helped me secure my work visa for the UK. Their expertise is unmatched in the industry.",
  },
  {
    name: "Maria Rodriguez",
    destination: "Germany",
    rating: 5,
    text: "From consultation to approval, everything was handled with excellence. I am now studying in Germany thanks to their expert guidance.",
  },
  {
    name: "James Chen",
    destination: "USA",
    rating: 5,
    text: "The best immigration consultancy I have worked with. They truly understand the complexities and make the process effortless for clients.",
  },
  {
    name: "Fatima Al-Rashid",
    destination: "New Zealand",
    rating: 5,
    text: "Outstanding service! My family sponsorship visa was approved faster than expected. VISAFAST truly lives up to their name.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = testimonials.length - visibleCount;

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="section-padding bg-[#0a0a0a] relative" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-gray-500 uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-['Poppins'] mb-4">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hear from thousands of satisfied clients who achieved their
            immigration goals with VISAFAST.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[calc(100%-1.5rem)] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] glass-card p-8 flex flex-col"
              >
                <Quote className="w-8 h-8 text-white/10 mb-4" />
                <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-white/70 text-white/70"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-white/70">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.destination}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex gap-2">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-white w-6" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={currentIndex === maxIndex}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

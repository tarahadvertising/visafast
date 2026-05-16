import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does VISAFAST offer?",
    answer:
      "We offer comprehensive immigration services including tourist visas, student visas, work permits, business visas, permanent residency, family sponsorship, immigration consultation, and complete documentation assistance.",
  },
  {
    question: "How long does the visa process typically take?",
    answer:
      "Processing times vary by visa type and destination country. Tourist visas can be processed in 2-4 weeks, while PR applications may take 6-12 months. We provide accurate timelines during your consultation.",
  },
  {
    question: "What is your success rate?",
    answer:
      "We maintain a 98% visa approval rate across all categories. Our success is built on thorough documentation, expert guidance, and years of experience in immigration law.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes! We offer a free initial consultation to assess your eligibility, understand your goals, and recommend the best immigration pathway for your situation.",
  },
  {
    question: "Which countries do you support?",
    answer:
      "We currently support immigration to Canada, USA, UK, Australia, Germany, UAE, Europe (Schengen), and New Zealand. We are constantly expanding our destination network.",
  },
  {
    question: "How do you ensure document security?",
    answer:
      "We use bank-grade encryption and secure storage for all client documents. Our team follows strict confidentiality protocols and data protection regulations.",
  },
  {
    question: "Can I track my application status?",
    answer:
      "Absolutely. We provide regular updates on your application progress and our team is available 24/7 for status inquiries and support.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-medium text-sm md:text-base pr-4 group-hover:text-gray-300 transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 pb-6 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

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
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-['Poppins'] mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our immigration services and
            processes.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-card p-8 md:p-10"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

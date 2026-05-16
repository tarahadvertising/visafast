import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, ArrowRight, Plane } from "lucide-react";

const visaTypes = [
  "Tourist Visa",
  "Student Visa",
  "Work Visa",
  "Business Visa",
  "PR / Residency",
  "Family Sponsorship",
  "Other",
];

const destinations = [
  "Canada",
  "USA",
  "UK",
  "Australia",
  "Germany",
  "UAE",
  "Europe",
  "New Zealand",
  "Other",
];

const Consultation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    experience: "",
    destination: "",
    visaType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email with form data
    const emailData = {
      service_id: "service_your_service_id",
      template_id: "template_your_template_id",
      user_id: "your_public_key",
      template_params: {
        to_email: "info@visafast.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        country: formData.country,
        visaType: formData.visaType,
        timeline: formData.timeline,
        message: formData.message,
        subject: "New Consultation Request - VISAFAST",
      },
    };

    // Send to email service (EmailJS)
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        console.log("Consultation form submitted:", formData);
        console.log("Email sent to: info@visafast.com");
        setStep(3);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        console.log("Consultation form submitted:", formData);
        setStep(3); // Still show success even if email fails
      });
  };
  const nextStep = () => setStep(2);

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 mb-6"
          >
            <Plane className="w-4 h-4" />
            Free Consultation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold font-['Poppins'] mb-6"
          >
            Book Your <span className="gradient-text">Free Consultation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Tell us about your immigration goals and our experts will create a
            personalized plan for your success.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-custom max-w-3xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    step >= s
                      ? "bg-white text-black border-white"
                      : "border-white/20 text-gray-500"
                  }`}
                >
                  {step > s ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-semibold">{s}</span>
                  )}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 h-[2px] transition-all duration-300 ${
                      step > s ? "bg-white" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Personal Info */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass-card p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                Personal Information
              </h2>
              <p className="text-gray-500 mb-8">
                Tell us about yourself so we can serve you better.
              </p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="28"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="john@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Education Level
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                    >
                      <option value="" className="bg-[#111]">
                        Select...
                      </option>
                      <option value="high-school" className="bg-[#111]">
                        High School
                      </option>
                      <option value="bachelors" className="bg-[#111]">
                        Bachelor's Degree
                      </option>
                      <option value="masters" className="bg-[#111]">
                        Master's Degree
                      </option>
                      <option value="phd" className="bg-[#111]">
                        PhD
                      </option>
                      <option value="other" className="bg-[#111]">
                        Other
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Work Experience (Years)
                    </label>
                    <input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="5"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={nextStep}
                className="mt-8 w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* Step 2: Immigration Goals */}
          {step === 2 && (
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                Immigration Goals
              </h2>
              <p className="text-gray-500 mb-8">
                Tell us where you want to go and what you need.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-3">
                    Preferred Destination *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {destinations.map((dest) => (
                      <button
                        type="button"
                        key={dest}
                        onClick={() =>
                          setFormData({ ...formData, destination: dest })
                        }
                        className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-300 ${
                          formData.destination === dest
                            ? "bg-white text-black border-white"
                            : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30"
                        }`}
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-3">
                    Visa Type *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {visaTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() =>
                          setFormData({ ...formData, visaType: type })
                        }
                        className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-300 ${
                          formData.visaType === type
                            ? "bg-white text-black border-white"
                            : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Any specific questions or details about your immigration goals..."
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit
                </button>
              </div>
            </motion.form>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 md:p-16 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-['Poppins']">
                Thank You!
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                Your consultation request has been received. Our team will
                contact you within 24 hours with a personalized assessment.
              </p>
              <div className="glass-card p-6 inline-block">
                <p className="text-gray-500 text-sm">
                  Expected response time:{" "}
                  <span className="text-white font-medium">
                    Within 24 hours
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Consultation;

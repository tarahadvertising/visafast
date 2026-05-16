import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
            Contact Us
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-6"
          >
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have questions about immigration? Our team is here to help you
            navigate your journey with confidence.
          </p>
        </div>
      </section>
      {/* Contact Info Cards */}
      <section className="py-12 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email",
                info: "info@visafast.com",
                sub: "Reply within 24hrs",
              },
              {
                icon: MapPin,
                title: "Office",
                info: "QATAR LUSAIL",
                sub: "RAFAL TOWER, Floor 8",
              },
              {
                icon: Phone,
                title: "Phone",
                info: "+974 1234 5678",
                sub: "Call us anytime",
              },
              {
                icon: Clock,
                title: "Working Hours",
                info: "Mon - Fri",
                sub: "9:00 AM - 6:00 PM",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={500 + i * 100}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.info}</p>
                <p className="text-gray-600 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div data-aos="fade-right" data-aos-duration="600">
              <h2 className="text-2xl md:text-3xl font-bold font-['Poppins'] mb-6">
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="glass-card p-5 md:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Full Name
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
                      Email
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
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Visa Inquiry"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Tell us about your immigration goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & WhatsApp */}
            <div
              data-aos="fade-left"
              data-aos-duration="600"
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-['Poppins'] mb-6">
                Visit Our Office
              </h2>
              {/* Google Map */}
              <div className="glass-card overflow-hidden h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.123456789!2d51.5202086!3d25.3885883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45e70052d230d7:0xdb7f9bdefa7f5105!2sRAFAL+TOWER!5e0!3m2!1sen!2sqa!4v1715678901234!5m2!1sen!2sqa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="VISAFAST Office Location"
                />
              </div>

              {/* Quick info */}
              <div className="glass-card p-6">
                <h3 className="text-white font-semibold mb-4">
                  Quick Response Guarantee
                </h3>
                <ul className="space-y-3">
                  {[
                    "Email replies within 24 hours",
                    "Free initial consultation",
                    "Expert immigration guidance",
                    "Office visit by appointment",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-400 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

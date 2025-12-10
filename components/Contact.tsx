import React from 'react';
import { Send } from 'lucide-react';

const InputField: React.FC<{ label: string; name: string; type?: string; placeholder?: string }> = ({ label, name, type = "text", placeholder }) => (
  <div className="relative group">
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="peer w-full bg-white border border-neutral-200 rounded-xl px-4 pt-6 pb-2 text-neutral-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all shadow-sm hover:shadow-md"
    />
    <label className="absolute left-4 top-2 text-xs text-neutral-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-neutral-900 pointer-events-none">
      {label}
    </label>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 tracking-tight mb-4">Start Your Journey</h2>
          <p className="text-neutral-500">Get a custom quote or just say hello.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-neutral-100 border border-neutral-100">
          <form name="contact" method="POST" data-netlify="true" className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Full Name" name="name" placeholder="John Doe" />
              <InputField label="Phone Number" name="phone" type="tel" placeholder="+1 555 000 0000" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="Email Address" name="email" type="email" placeholder="john@example.com" />
              <InputField label="City" name="city" placeholder="San Francisco" />
            </div>

            <div className="relative group">
              <textarea
                name="message"
                placeholder="Describe your requirement..."
                rows={4}
                className="peer w-full bg-white border border-neutral-200 rounded-xl px-4 pt-6 pb-2 text-neutral-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all shadow-sm hover:shadow-md resize-none"
              ></textarea>
              <label className="absolute left-4 top-2 text-xs text-neutral-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-neutral-900 pointer-events-none">
                Requirement Details
              </label>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-neutral-900 text-white rounded-xl py-4 font-semibold text-lg hover:bg-neutral-800 transition-all active:scale-[0.99] flex items-center justify-center gap-2">
                Send Request <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

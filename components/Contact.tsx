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
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@dooninfra.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Failed to send message');

      setFormState('success');
    } catch (error) {
      console.error(error);
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-green-50 p-12 rounded-[40px] border border-green-100">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">Request Sent!</h3>
            <p className="text-neutral-500 max-w-md mx-auto">
              Thank you for reaching out. Our team will review your requirements and get back to you at <strong>info@dooninfra.in</strong> shortly.
            </p>
            <button
              onClick={() => setFormState('idle')}
              className="mt-8 text-neutral-900 font-semibold hover:underline"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 tracking-tight mb-4">Start Your Journey</h2>
          <p className="text-neutral-500">Get a custom quote or just say hello.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-neutral-100 border border-neutral-100">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* FormSubmit.co Configuration */}
            <input type="hidden" name="_subject" value="New Contact Request from Doon Infra Website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

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
                required
                className="peer w-full bg-white border border-neutral-200 rounded-xl px-4 pt-6 pb-2 text-neutral-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all shadow-sm hover:shadow-md resize-none"
              ></textarea>
              <label className="absolute left-4 top-2 text-xs text-neutral-400 font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-neutral-900 pointer-events-none">
                Requirement Details
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-neutral-900 text-white rounded-xl py-4 font-semibold text-lg hover:bg-neutral-800 transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Request'}
                {formState !== 'submitting' && <Send size={18} />}
              </button>
              {formState === 'error' && (
                <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

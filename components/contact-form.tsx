'use client';

export default function ContactForm({ className = '' }: { className?: string }) {
  return (
    <form className={`space-y-6 bg-blue-50 rounded-3xl p-8 border border-blue-100 ${className}`}>
      <h3 className="text-2xl font-bold text-slate-900">Send Message</h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:border-[#1B5AAE] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:border-[#1B5AAE] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:border-[#1B5AAE] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Enter the subject"
            className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:border-[#1B5AAE] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="How can we help you?"
            className="w-full px-4 py-3 rounded-lg bg-white border border-blue-200 focus:outline-none focus:border-[#1B5AAE] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 rounded-lg bg-linear-to-r from-[#1B5AAE] to-[#3B82F6] text-white font-semibold hover:shadow-lg transition-all"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

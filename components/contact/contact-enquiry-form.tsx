'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/data/services';

type FloatingFieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  as?: 'input' | 'textarea' | 'select';
  options?: { value: string; label: string }[];
  rows?: number;
};

function FloatingField({
  id,
  label,
  type = 'text',
  required,
  as = 'input',
  options,
  rows = 4,
}: FloatingFieldProps) {
  const baseClass =
    'peer w-full px-4 pt-6 pb-2 rounded-[14px] bg-white border border-[#E2E8F0] text-[#0F172A] text-sm focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all invalid:border-[#EF4444] invalid:focus:ring-[#EF4444]/20';

  const labelClass =
    'absolute left-4 top-4 text-sm text-[#64748B] transition-all pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#3B82F6] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#64748B]';

  if (as === 'textarea') {
    return (
      <div className="relative">
        <textarea
          id={id}
          name={id}
          rows={rows}
          required={required}
          placeholder=" "
          className={`${baseClass} resize-none`}
        />
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      </div>
    );
  }

  if (as === 'select') {
    return (
      <div>
        <label htmlFor={id} className="block text-xs font-medium text-[#64748B] mb-1.5">
          {label}
        </label>
        <select
          id={id}
          name={id}
          required={required}
          defaultValue=""
          className={`${baseClass} pt-3 pb-3 appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder=" "
        className={baseClass}
      />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
    </div>
  );
}

const serviceOptions = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'products', label: 'Pharmaceutical Products' },
  { value: 'partnership', label: 'Business Partnerships' },
  ...services.map((s) => ({ value: s.slug, label: s.title })),
];

export default function ContactEnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleReset = () => {
    formRef.current?.reset();
  };

  return (
    <motion.form
      ref={formRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[24px] bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-[0_4px_16px_rgba(15,23,42,0.06)] space-y-5"
    >
      <div>
        <h2 className="text-xl font-bold text-[#0F172A] mb-1">Send an Enquiry</h2>
        <p className="text-sm text-[#64748B]">
          Complete the form and our team will respond during business hours.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <FloatingField id="fullName" label="Full Name" required />
        <FloatingField id="company" label="Company / Organization" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <FloatingField id="email" label="Email Address" type="email" required />
        <FloatingField id="phone" label="Phone Number" type="tel" />
      </div>

      <FloatingField id="subject" label="Subject" required />

      <FloatingField
        id="service"
        label="Service Interested In"
        as="select"
        required
        options={serviceOptions}
      />

      <FloatingField id="message" label="Message" as="textarea" required rows={5} />

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 px-6 py-3.5 rounded-[14px] bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] shadow-[0_4px_14px_rgba(59,130,246,0.2)] transition-colors"
        >
          Submit Enquiry
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="flex-1 px-6 py-3.5 rounded-[14px] bg-white border border-[#E2E8F0] text-[#0F172A] font-semibold hover:bg-[#F8FBFF] transition-colors"
        >
          Reset
        </button>
      </div>
    </motion.form>
  );
}

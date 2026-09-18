'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="rounded-sm border border-[#1B2A38]/10 bg-white p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="hidden"
          name="access_key"
          value="0232e071-96c5-4e8a-b597-742e33694b7e"
        />
        <input type="hidden" name="subject" value="New enquiry from Shaclau website" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#1B2A38]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Jane Wanjiru"
              className="mt-1.5 w-full rounded-sm border border-[#1B2A38]/15 bg-[#FAFAF7] px-4 py-2.5 text-sm text-[#2B2B28] outline-none transition-colors placeholder:text-[#2B2B28]/35 focus:border-[#B08D57] focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#1B2A38]">
              Phone <span className="text-[#2B2B28]/40">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+254 7XX XXX XXX"
              className="mt-1.5 w-full rounded-sm border border-[#1B2A38]/15 bg-[#FAFAF7] px-4 py-2.5 text-sm text-[#2B2B28] outline-none transition-colors placeholder:text-[#2B2B28]/35 focus:border-[#B08D57] focus:bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1B2A38]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-sm border border-[#1B2A38]/15 bg-[#FAFAF7] px-4 py-2.5 text-sm text-[#2B2B28] outline-none transition-colors placeholder:text-[#2B2B28]/35 focus:border-[#B08D57] focus:bg-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#1B2A38]">
            What do you need help with?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project — location, size, and timeline if you have them."
            className="mt-1.5 w-full rounded-sm border border-[#1B2A38]/15 bg-[#FAFAF7] px-4 py-2.5 text-sm text-[#2B2B28] outline-none transition-colors placeholder:text-[#2B2B28]/35 focus:border-[#B08D57] focus:bg-white"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#B08D57] px-6 py-3 font-medium text-[#1B2A38] transition-colors hover:bg-[#c49f68] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>

        {status === 'success' && (
          <div className="flex items-start gap-2 rounded-sm border-l-4 border-l-[#3D5C46] bg-[#3D5C46]/5 p-4 text-sm text-[#3D5C46]">
            <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Thanks — your message has been sent. We&apos;ll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-start gap-2 rounded-sm border-l-4 border-l-red-700 bg-red-50 p-4 text-sm text-red-700">
            <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Something went wrong. Please try again, or email us directly.
          </div>
        )}
      </form>
    </div>
  );
}
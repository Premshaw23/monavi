"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen md:m-10 mt-12 bg-gradient-to-b from-gray-50 to-white text-gray-800 p-6 sm:p-12">
      {/* Top Home Button */}
      <div className="my-4 md:ml-16 flex md:justify-start">
        <Link
          href="/"
          className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow hover:bg-teal-700 transition"
        >
          ← Go to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-12 border border-gray-200">
        <h1 className="text-4xl font-bold mb-6 text-teal-700 text-center">
          Terms of Service
        </h1>

        <p className="mb-6 leading-relaxed text-gray-700">
          Welcome to Monavi! By using our website or services, you agree to
          these terms.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            Using Monavi means you agree to these Terms of Service and our
            Privacy Policy. If you do not agree, please discontinue use.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            2. Eligibility
          </h2>
          <p className="text-gray-700">
            You must be at least 18 years old or have parental consent to use
            our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            3. User Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Use our services only for lawful purposes.</li>
            <li>Provide accurate information.</li>
            <li>Not engage in harmful, abusive, or fraudulent activity.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            4. Service Availability
          </h2>
          <p className="text-gray-700">
            We aim for smooth service, but we do not guarantee uninterrupted
            availability. Features may change or be discontinued without notice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            5. Intellectual Property
          </h2>
          <p className="text-gray-700">
            All text, graphics, logos, and designs on Monavi are owned by us or
            licensed to us. You may not copy, reproduce, or distribute our
            content without permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            Our services are provided “as is” without warranties. We are not
            liable for any damages resulting from use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            7. Updates to Terms
          </h2>
          <p className="text-gray-700">
            We may revise these terms at any time. Changes will be posted on
            this page with a new “Last Updated” date. Continued use means you
            accept the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
}

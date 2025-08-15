"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen m-10  bg-gradient-to-b from-gray-50 to-white text-gray-800 p-6 sm:p-12">
      {/* Top Home Button */}
      <div className="mb-8 ml-16 flex justify-start">
        <Link
          href="/"
          className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-full shadow hover:bg-teal-700 transition"
        >
          ← Go to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-200">
        <h1 className="text-4xl font-bold mb-6 text-teal-700 text-center">
          Privacy Policy
        </h1>

        <p className="mb-6 leading-relaxed text-gray-700">
          Monavi (“we,” “our,” or “us”) is committed to protecting your privacy.
          This policy explains how we collect, use, and protect your
          information.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Personal details such as name, email, phone number, and any info
              you provide when filling forms or contacting us.
            </li>
            <li>
              Usage data such as pages visited, time spent on our site, and
              device/browser details.
            </li>
            <li>
              Optional health-related details if you choose to provide them to
              improve your experience.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Provide, operate, and improve our services.</li>
            <li>Respond to your inquiries and support requests.</li>
            <li>Send important updates, announcements, or service changes.</li>
            <li>Ensure security and prevent misuse of our services.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            3. How We Protect Your Data
          </h2>
          <p className="text-gray-700 mb-4">
            We use secure servers and encryption where applicable. Access to
            personal data is restricted to authorized personnel only.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            4. Sharing of Data
          </h2>
          <p className="text-gray-700 mb-4">
            We do not sell or rent your data. We may share information only when
            required by law or necessary to protect rights, safety, or prevent
            fraud.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">
            5. Your Rights
          </h2>
          <p className="text-gray-700 mb-4">
            You may request access, correction, or deletion of your data, and to
            opt out of marketing communications.
          </p>
          <p className="text-gray-700 font-semibold">
            Contact:{" "}
            <a
              href="mailto:monavimed@gmail.com"
              className="text-teal-600 hover:text-teal-800"
            >
              monavimed@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

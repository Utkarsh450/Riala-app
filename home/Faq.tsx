"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const tabs = ["Application", "About Us", "Company"];

const faqData: Record<string, { question: string; answer: string }[]> = {
  Application: [
    {
      question: "How do i update my billing information?",
      answer:
        "scelerisque efficitur, nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem, nec urna ultrices sed Nunc turpis est, at, placerat, cursus faucibus elementum vehicula. est, ex risus urna, vehicula, efficitur.",
    },
    {
      question: "How can i scan barcodes instead of qr-codes?",
      answer:
        "You can scan barcodes by navigating to the scanner section in the app and toggling the barcode mode from the settings panel.",
    },
    {
      question: "How to add new cards to Riala application?",
      answer:
        "To add a new card, go to your wallet section, tap on '+ Add Card', and follow the on-screen instructions to complete verification.",
    },
    {
      question: "How do i change my email address?",
      answer:
        "Visit your account settings, select 'Personal Information', and click 'Edit' next to your email address to update it.",
    },
    {
      question: "How can i scan barcodes instead of qr-codes?",
      answer:
        "You can enable barcode scanning from the app's camera settings. Toggle 'Barcode Mode' and point your camera at any standard barcode.",
    },
  ],
  "About Us": [
    {
      question: "How do i update my billing information?",
      answer:
        "scelerisque efficitur, nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem, nec urna ultrices sed Nunc turpis est, at, placerat, cursus faucibus elementum vehicula. est, ex risus urna, vehicula, efficitur.",
    },
    {
      question: "How do i change my email address?",
      answer:
        "Visit your account settings, select 'Personal Information', and click 'Edit' next to your email address to update it.",
    },
    {
      question: "How to add new cards to Riala application?",
      answer:
        "To add a new card, go to your wallet section, tap on '+ Add Card', and follow the on-screen instructions to complete verification.",
    },
  ],
  Company: [
    {
      question: "How do i update my billing information?",
      answer:
        "scelerisque efficitur, nibh tincidunt leo. tincidunt diam commodo risus vitae dignissim, non lacus, facilisis lorem, nec urna ultrices sed Nunc turpis est, at, placerat, cursus faucibus elementum vehicula. est, ex risus urna, vehicula, efficitur.",
    },
    {
      question: "How to add new cards to Riala application?",
      answer:
        "To add a new card, go to your wallet section, tap on '+ Add Card', and follow the on-screen instructions to complete verification.",
    },
    {
      question: "How can i scan barcodes instead of qr-codes?",
      answer:
        "You can enable barcode scanning from the app's camera settings. Toggle 'Barcode Mode' and point your camera at any standard barcode.",
    },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Application");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = faqData[activeTab];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenIndex(0); // reset to first open on tab change
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-gray-400 mb-6">Trusted by more than 200K+ Clients</p>

        {/* Tabs */}
        <div className="inline-flex bg-white rounded-full p-1 gap-1 shadow-sm border border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-2xl mx-auto space-y-2">
        {faqs.map((faq, idx) => (
          <div
            key={`${activeTab}-${idx}`}
            className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm"
          >
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-all duration-300"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-sm font-medium text-gray-700">{faq.question}</span>
              {openIndex === idx ? (
                <ChevronUp className="w-4 h-4 text-gray-400 shrink-0 ml-2" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-2" />
              )}
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-green-800 focus:outline-none"
      >
        {question}
        <span className="text-green-600">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-700 text-md">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I report illegal mining activities?",
      answer: "Simply navigate to the report section, fill in the required details, and upload any supporting images or location data.",
    },
    {
      question: "Who has access to my report?",
      answer: "Your report is only accessible to authorized agencies and authorities who are dedicated to addressing illegal mining activities.",
    },
    {
      question: "Can I edit my report after submission?",
      answer: "Yes, you can edit your report within 24 hours of submission by navigating to the 'My Reports' section.",
    },
    {
      question: "Will I receive updates on my report?",
      answer: "Yes, you will be notified of any updates or actions taken on your report, such as ‘Case Under Review’ or ‘Action Taken’.",
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We take your privacy seriously and ensure that all data is securely stored and only shared with necessary parties for resolution.",
    },
  ];

  return (
    <section className="bg-green-50 py-10 px-6">
      <div className="container mx-auto max-w-4xl mb-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

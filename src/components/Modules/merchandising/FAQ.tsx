"use client";
import { faqData } from "@/db/data";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section md:p-10 p-5">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Frequently Asked Questions
      </h2>
      <div className="faq-list space-y-6">
        {faqData.map((faq: FAQItem, index) => (
          <div
            key={index}
            className="faq-item bg-white shadow-md rounded-lg p-6"
            data-aos="fade-up"
          >
            <div
              className="faq-question text-lg font-semibold cursor-pointer select-none"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer text-base mt-4">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

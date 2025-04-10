"use client";
import { faqData } from "@/db/data";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  interface FAQItem {
    question: string;
    answer: string;
  }

  const toggleAnswer = (index: number): void => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq: FAQItem, index) => (
            <div key={index} className="collapse collapse-plus bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer }</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="faq-section py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="faq-list space-y-6">
          {faqData.map((faq: FAQItem, index) => (
            <div
              key={index}
              className="faq-item bg-white shadow-md rounded-lg p-6"
            >
              <div
                className="faq-question text-lg font-semibold cursor-pointer"
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
    </>
  );
};

export default FAQ;

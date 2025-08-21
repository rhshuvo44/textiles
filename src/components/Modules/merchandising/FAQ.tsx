"use client";
import { faqData } from "@/db/data";
import { FAQItem } from "@/types";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section md:p-10 p-5 ">
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-12 "
        data-aos="fade-up"
      >
        Frequently Asked Questions
      </h2>

      <div className="faq-list  mx-auto space-y-4">
        {faqData.map((faq: FAQItem, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index} className="relative" data-aos="fade-up">
              {/* Question Pill */}
              <button
                onClick={() => toggleAnswer(index)}
                aria-expanded={isActive}
                aria-controls={`faq-answer-${index}`}
                className={`w-full flex justify-between items-center py-4 px-6 rounded-full text-left font-medium transition-all duration-300 shadow-md focus:outline-none
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "bg-white text-gray-800 hover:bg-blue-50"
                  }`}
              >
                <span>{faq.question}</span>
                <HiChevronDown
                  className={`ml-3 h-6 w-6 transform transition-transform duration-300 ${
                    isActive ? "rotate-180 text-white" : "text-blue-500"
                  }`}
                />
              </button>

              {/* Answer Panel */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isActive
                    ? "max-h-96 opacity-100 py-4 px-6"
                    : "max-h-0 opacity-0 p-0"
                }`}
                aria-hidden={!isActive}
              >
                <p className=" text-base">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;

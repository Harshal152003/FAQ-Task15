import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  { question: "How can I apply for an internship?", answer: "You can apply by submitting your resume and filling out the application form on our careers page." },
  { question: "What skills are required for this internship?", answer: "Basic knowledge of web development, problem-solving skills, and the ability to work in a team." },
  { question: "Is this internship paid?", answer: "It depends on the role and company policies. Check the job description for details." },
  { question: "Will I receive a certificate after completion?", answer: "Yes, upon successful completion, interns receive a certificate recognizing their contribution." },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl my-36 mx-auto p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Internship FAQ</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-blue-300 rounded-lg overflow-hidden transition-all">
            <button
              className="w-full flex justify-between items-center px-5 py-4 text-left bg-blue-800 hover:bg-blue-900 focus:outline-none rounded-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold">{item.question}</span>
              {openIndex === index ? <FaMinus className="text-yellow-400" /> : <FaPlus className="text-yellow-400" />}
            </button>
            <div
              className={`px-5 bg-blue-300 text-blue-900 transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-[100px] py-3" : "max-h-0 py-0"
              } overflow-hidden`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;

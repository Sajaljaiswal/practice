import React, { useState } from "react";

const Faqs = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return items within 30 days of purchase with the original receipt for a full refund.",
    },
    {
      question: "Do you offer free shipping?",
      answer:
        "Yes, we offer free shipping on orders above $50 within the continental US.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we will send you an email with a tracking number and a link to track your package.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, Apple Pay, and Google Pay.",
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "Yes, you can modify your order within 24 hours by contacting our customer service team.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@example.com or call us at (123) 456-7890.",
    },
    {
      question: "Do you have physical stores?",
      answer:
        "Yes, we have stores in select cities. Visit our 'Store Locator' page for more details.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries. Shipping costs and times vary by location.",
    },
    {
      question: "Are there discounts for bulk purchases?",
      answer:
        "Yes, we offer discounts for bulk purchases. Contact our sales team for more details.",
    },
    {
      question: "What should I do if I receive a damaged item?",
      answer:
        "If you receive a damaged item, please contact our customer service team within 7 days to arrange for a replacement or refund.",
    },
  ];

  const [hide, setHide] = useState(null);
  const handleClick = (index) => {
    setHide(hide === index ? null : index);
  };

  return (
    <div>
      {faqs.map((faq, index) => {
        return (
          <>
            <h3>{faq.question}</h3>
            <button onClick={() => handleClick(index)}> {">"} </button>

            {hide === index && <h5>{faq.answer}</h5>}
          </>
        );
      })}
    </div>
  );
};

export default Faqs;

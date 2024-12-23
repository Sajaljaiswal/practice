import { useState } from "react";

const Practice = () => {
  const item = [
    {
      question: "what is your name",
      answer: "my name is sajal",
    },
    {
      question: "what is your place name",
      answer: "my name is Maunath Bhanjan",
    },
    {
      question: "what is your car name",
      answer: "my name is Aura",
    },
    {
      question: "what is your baby name",
      answer: "my name is Shagun",
    },
  ];

  const [hideans, setHideans] = useState(null);

  const onClickHandler = (index) => {
    console.log(index);
    setHideans(hideans === index ? null : index);
  };
  return (
    <div>
      {item.map((item, index) => {
        const isActive = hideans === index;

        return (
          <div key={index}>
            <h3>
              {item?.question}
              <button onClick={() => onClickHandler(index)}>
                {" "}
                {isActive ? "Hide Answer" : "Show Answer"}
              </button>
            </h3>
            {isActive && <h4 key={index}>{item?.answer}</h4>}
          </div>
        );
      })}
    </div>
  );
};

export default Practice;

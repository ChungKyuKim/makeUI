import { useState } from "react";
import "./App.css";

function App() {
  const [select, setSelect] = useState(null);
  const toggle = (i) => {
    if (select === i) {
      return setSelect(null);
    }
    setSelect(i);
  };
  return (
    <div className="Wrapper">
      <div className="Accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{select === i ? "-" : "+"}</span>
            </div>
            <div className={select === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "Question1",
    answer:
      "kㅁㄴㅇ라러ㅏㅁㄴ이;럼ㄴㅇ;ㅣㅏ럼ㄴ;ㅁㄴ이라ㅓㄴ몽리ㅏ;ㅁ러;ㅣㅏ먼ㅇ라ㅣ;ㅁㄴㅗㅁ닝ㄴ이;럼ㄴㅇ;ㅣㅏ럼ㄴ;ㅁㄴ이라ㅓㄴ몽리ㅏ;ㅁ러;ㅣㅏ먼ㅇ라ㅣ;ㅁㄴㅗㅁㄴ이;럼ㄴㅇ;ㅣㅏ럼ㄴ;ㅁㄴ이라ㅓㄴ몽리ㅏ;ㅁ러;ㅣㅏ먼ㅇ라ㅣ;ㅁㄴㅗㅁㄴ이;럼ㄴㅇ;ㅣㅏ럼ㄴ;ㅁㄴ이라ㅓㄴ몽리ㅏ;ㅁ러;ㅣㅏ먼ㅇ라ㅣ;ㅁㄴㅗㅁㄴ이;럼ㄴㅇ;ㅣㅏ럼ㄴ;ㅁㄴ이라ㅓㄴ몽리ㅏ;ㅁ러;ㅣㅏ먼ㅇ라ㅣ;ㅁㄴㅗㅁㄴ이;럼ㄴㅇ;ㅣㅏ럼ㄴ;ㅁㄴ이라ㅓㄴ몽리ㅏ;ㅁ러;ㅣㅏ먼ㅇ라ㅣ;ㅁㄴㅗㅁㄴ이;럼ㄴㅇ;ㅣㅏ럼ㄴ;ㅁㄴ이라ㅓㄴ몽리ㅏ;ㅁ러;ㅣㅏ먼ㅇ라ㅣ;ㅁㄴㅗㅁㄴ이;럼ㄴㅇ;ㅣㅏ럼ㄴ;ㅁㄴ이라ㅓㄴ몽리ㅏ;ㅁ러;ㅣㅏ먼ㅇ라ㅣ;ㅁㄴㅗㅁ러민;ㅇ라ㅗ;ㅣㅁㄴ아롸ㅣㅇ나아아아ㅓㅇ리모리몬ㅇ리;ㅗㅁㄴ이ㅏㅗ;ㅣ낭러이;마너리;ㅇ마너리;ㅏㅁ언ㄹ;ㅣ머리;ㅏㅁㄴ이로마ㅣㄴㅇ로미ㅏㅁㄴㄹㅓㅁㄴㅇㄹ",
  },

  {
    question: "Question2",
    answer: "lai;sfjls;kfja;klsfjal;sdkfjal;ksfjal;kfdsfjasklfjlaskf",
  },
  {
    question: "Question3",
    answer: "lai;sfjls;kfja;klsfjal;sdkfjal;ksfjal;kfdsfjasklfjlaskf",
  },
];

export default App;

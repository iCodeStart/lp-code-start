import "./question.styles.scss";
import { questions } from "../questions";
import { useState } from "react";

type QuestionProps = (typeof questions)[0] & { open?: boolean };

export function Question({ answer, question, open = false }: QuestionProps) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="question-container">
      <div className="question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <img
          src={`${isOpen ? "arrow-up" : "arrow-down"}.svg`}
          alt="Ícone de pergunta expandida ou não"
        />
      </div>

      {isOpen && <span className="answer">{answer}</span>}
    </div>
  );
}

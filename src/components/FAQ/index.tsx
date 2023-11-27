import "./styles.css";
import { questions } from "./questions";
import { Question } from "./Question";
import { Chip } from "../Chip";

export function FAQ() {
  const lastIndex = questions.length - 1;
  return (
    <section className="container faq-container">
      <div className="title-container">
        <Chip label="FAQ" />
        <h1 className="section-title">Perguntas Frequentes</h1>
      </div>

      <div className="question-list">
        {questions.map((question, idx) => (
          <>
            <Question key={idx} {...question} open={idx === 0} />
            {lastIndex !== idx && (
              <div
                style={{ height: 1, width: "100%", background: "#03E4DC" }}
              />
            )}
          </>
        ))}
      </div>
    </section>
  );
}

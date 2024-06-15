import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Chip } from "../Chip";
import "./Testimonials.styles.scss";

const TestimonialCard = ({ icon, text, img, videoUrl }: any) => (
  <div className="alan-card">
    <div className="alan-intern-card">
      <div className="alan-icon">{icon}</div>
      <div className="alan-text">"{text}..."</div>
    </div>

    {img ? (
      <img src={img} className="alan-img" alt="depoimento-code-start" />
    ) : (
      <div className="alan-video">
        <iframe
          width="100%"
          height="200"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      </div>
    )}
  </div>
);

export function Testimonials() {
  const testimonials = [
    {
      icon: "💰",
      text: "Ah, tenho medo de gastar meu dinheiro atoa",
      img: "./novo-depoimento-code-start-1.jpeg",
    },
    {
      icon: "🎯",
      text: "Ah, tenho medo de não conseguir um emprego",
      img: "./novo-depoimento-code-start-2.jpeg",
    },
    {
      icon: "📚",
      text: "Ah, eu já sou mais velho e não consigo aprender programação",
      img: "./novo-depoimento-code-start-3.jpeg",
    },
    {
      icon: "🧑‍💻",
      text: "Ah, eu estou fazendo transição de carreira e não sei se vou conseguir aprender",
      videoUrl: "https://www.youtube.com/embed/OO_ZbZ_s_ac",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="title-container">
          <Chip label="Chega de desculpas" />
          <h1 className="section-title">"Ah, mas eu..."</h1>
        </div>
      </div>
      <div className="alan-testimonials">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </>
  );
}

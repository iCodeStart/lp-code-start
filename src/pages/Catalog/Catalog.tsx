//import React, { useState } from "react";
import { Star } from "lucide-react";
import "./Catalog.styles.scss";
import { courses } from "./Catalog.consts";

function Catalog() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   experience: "",
  //   goals: "",
  // });

  // const handleInputChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  // };

  const getLevelClass = (level: string) => {
    switch (level.toLowerCase()) {
      case "iniciante":
        return "course-card__level--beginner";
      case "intermediário":
        return "course-card__level--intermediate";
      case "avançado":
        return "course-card__level--advanced";
      default:
        return "course-card__level--all";
    }
  };

  const handleOnClick = (title: string) => {
    if (title === "Currículo de Elite") {
      return (window.location.href =
        "https://pay.kiwify.com.br/xgOsT45?src=Org_IGBio&utm_source=Org&utm_medium=IGBio&utm_content=&utm_campaign=&utm_term=");
    }
    if (title === "Dev Cash") {
      return (window.location.href =
        "https://pay.kiwify.com.br/6xb0tlP?src=Org_IGBio&utm_source=Org&utm_medium=IGBio&utm_content=&utm_campaign=&utm_term=");
    }
    if (title === "React") {
      return (window.location.href =
        "https://pay.kiwify.com.br/Ct7b3Pk?src=Org_IGBio&utm_source=Org&utm_medium=IGBio&utm_content=&utm_campaign=&utm_term=");
    }
    if (title === "Fundamentos de IA") {
      return (window.location.href =
        "https://pay.kiwify.com.br/CQGlsU1?src=Org_IGBio&utm_source=Org&utm_medium=IGBio&utm_content=&utm_campaign=&utm_term=");
    }
    window.location.href =
      "https://icodestart.com/?src=Org_IGBio&utm_source=Org&utm_medium=IGBio&utm_content=&utm_campaign=&utm_term=";
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2940"
          alt="Code Background"
          className="header__background"
        />
        <div className="header__overlay" />
        <div className="header__content">
          <div>
            <h1 className="header__title">
              <span>Code</span> Start
            </h1>
            <p className="header__subtitle">
              Transforme seu futuro através da tecnologia
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main container">
        {courses.map((category, index) => (
          <section key={index} className="section">
            <h2 className="section__title">{category.category}</h2>
            <div className="courses-grid">
              {category.items.map((course, courseIndex) => (
                <div key={courseIndex} className="course-card">
                  <div className="course-card__image-container">
                    <img src={course.image} alt={course.title} />
                  </div>
                  <div className="course-card__content">
                    <div className="course-card__header">
                      <div className="course-card__icon-wrapper">
                        {course.icon}
                      </div>
                      <div className="course-card__title-group">
                        <h3 className="course-card__title">{course.title}</h3>
                        <div className="course-card__meta">
                          <span
                            className={`course-card__level ${getLevelClass(
                              course.level
                            )}`}
                          >
                            {course.level}
                          </span>
                          {!course.isComingSoon && (
                            <div className="course-card__rating">
                              <Star className="w-4 h-4" />
                              <span>{course.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="course-card__description">
                      {course.description}
                    </p>
                    <div className="course-card__footer">
                      <span>{course.lessons} aulas</span>
                      <span>{course.duration}</span>
                    </div>
                    <button
                      className={
                        course.isComingSoon
                          ? "course-card__coming-soon"
                          : "course-card__button"
                      }
                      onClick={() => handleOnClick(course.title)}
                      disabled={course.isComingSoon}
                    >
                      {course.isComingSoon ? "Em breve" : "Saiba mais"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Mentorship Form */}
        {/* <section className="section">
          <h2 className="section__title">Mentoria Individual</h2>
          <div className="mentorship">
            <div className="mentorship__header">
              <div className="mentorship__icon-wrapper">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="mentorship__title">Agende sua Mentoria</h3>
                <p className="mentorship__subtitle">
                  Receba orientação personalizada de especialistas da área
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mentorship__form">
              <div className="mentorship__field">
                <label htmlFor="name" className="mentorship__label">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mentorship__input"
                  required
                />
              </div>

              <div className="mentorship__field">
                <label htmlFor="email" className="mentorship__label">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mentorship__input"
                  required
                />
              </div>

              <div className="mentorship__field">
                <label htmlFor="experience" className="mentorship__label">
                  Nível de experiência
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="mentorship__select"
                  required
                >
                  <option value="">Selecione seu nível</option>
                  <option value="beginner">Iniciante</option>
                  <option value="intermediate">Intermediário</option>
                  <option value="advanced">Avançado</option>
                </select>
              </div>

              <div className="mentorship__field">
                <label htmlFor="goals" className="mentorship__label">
                  Objetivos com a mentoria
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="mentorship__textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="mentorship__button">
                Solicitar Mentoria
              </button>
            </form>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            © 2025 Code Start. Todos os direitos reservados. - CNPJ:
            48.848.520/0001-85
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Catalog;

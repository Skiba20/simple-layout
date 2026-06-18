import notebookImg from "../assets/notebook.webp";

function Sketchbook() {
  return (
    <section className="sketchbook">
      <div className="container sketchbook__container">
        <div>
          <h2>Simple скетчбук</h2>

          <p>
            Бумага высокого качества для творчества и работы.
          </p>

          <button className="hero__button">
            Купить
          </button>
        </div>

        <img
          src={notebookImg}
          alt="Скетчбук"
          className="sketchbook__image"
        />
      </div>
    </section>
  );
}

export default Sketchbook;
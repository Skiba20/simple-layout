import paper from "../assets/paper.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Простые вещи.
            <br />
            Из бумаги
          </h1>

          <p className="hero__text">
            Бумага и изделия из неё для ваших идей.
          </p>

          <button className="hero__button">
            Каталог
          </button>
        </div>

        <img
          src={paper}
          alt="Бумага"
          className="hero__image"
        />
      </div>
    </section>
  );
}

export default Hero;
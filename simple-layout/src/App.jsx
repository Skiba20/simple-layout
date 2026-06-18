import "./App.css";
import paper from "./assets/paper.png";
import packageImg from "./assets/package.webp";
import bagImg from "./assets/bag.jpg";
import notebookImg from "./assets/notebook.webp";
function App() {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <div className="header__logo">Simple</div>

          <nav className="header__nav">
            <a href="#" className="header__link">
              Продукция
            </a>
            <a href="#" className="header__link">
              Материалы
            </a>
            <a href="#" className="header__link">
              О нас
            </a>
            <a href="#" className="header__link">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      <main>
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

        <section className="products">
          <div className="container">
            <h2 className="products__title">
              Наша продукция
            </h2>

            <div className="products__cards">
              <article className="products__card">
                <img src={packageImg} alt="Упаковка" />
                <h3>Упаковка</h3>
                <p>Тираж от 50 штук.</p>
              </article>

              <article className="products__card">
                <img src={bagImg} alt="Пакеты" />
                <h3>Пакеты</h3>
                <p>Качественная бумага.</p>
              </article>

            </div>
          </div>
        </section>

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
      </main>

      <footer className="footer">
        <div className="container">
          © Simple 2026
        </div>
      </footer>
    </>
  );
}

export default App;
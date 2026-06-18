import packageImg from "../assets/package.webp";
import bagImg from "../assets/bag.jpg";

function Products() {
  return (
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
  );
}

export default Products;
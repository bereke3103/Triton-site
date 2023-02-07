import SliderSimple from '../SliderSimple';

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__box">
          <div className="products__title">
            <h1>Продукты</h1>
            <span className="line"></span>
          </div>

          <div className="products__subtitle">
            <p>3 плагина для разных задач</p>
          </div>
        </div>

        <SliderSimple />
      </div>
    </section>
  );
};

export default Products;

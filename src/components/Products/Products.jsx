import SliderSimple from '../SliderSimple';

const Products = ({ ru, kz, en }) => {
  return (
    <section className="products" id="plugin">
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

        <SliderSimple ru={ru} kz={kz} en={en} />
      </div>
    </section>
  );
};

export default Products;

import SliderClients from '../SliderClients';

const OurClients = () => {
  return (
    <section className="clients">
      <div className="container">
        <div className="clients__title">Клиенты</div>
        <span className="clients__line"></span>
        <SliderClients />
      </div>
    </section>
  );
};

export default OurClients;

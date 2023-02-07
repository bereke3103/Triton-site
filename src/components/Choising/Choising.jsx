import SliderChoising from '../SliderChoising';

const Choising = () => {
  return (
    <section className="choising">
      <div className="container">
        <div className="choising__box">
          <div className="choising__info">
            <div className="choising__title">Почему нас выбирают</div>
            <div className="choising__subtitle">
              Являясь всего лишь частью общей картины, реплицированные с
              зарубежных источников Современные исследования, которые
              представляют собой яркий пример континентально-европейского типа
              политической культуры, будут описаны максимально подробно.
            </div>
          </div>

          <SliderChoising />
        </div>
      </div>
    </section>
  );
};

export default Choising;

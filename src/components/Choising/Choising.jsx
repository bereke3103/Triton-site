import { useEffect, useState } from 'react';
import SliderChoising from '../SliderChoising';

const Choising = () => {
  const [choisings, setChoisings] = useState([]);

  useEffect(() => {
    const url = 'https://localhost:7183/getChoising';

    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        setChoisings(result);
      });
  }, [choisings]);

  return (
    <section className="choising" id="choising">
      <div className="container">
        <div className="choising__box">
          {choisings.map((choise) => (
            <div key={choise.id} className="choising__info">
              <div className="choising__title">{choise.title}</div>
              <div className="choising__subtitle">{choise.text}</div>
            </div>
          ))}

          <SliderChoising />
        </div>
      </div>
    </section>
  );
};

export default Choising;

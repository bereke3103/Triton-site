import social from '../../img/twitter.svg';

const FormBox = () => {
  return (
    <div className="form__box">
      <div className="form__box__text">
        <div className="form__box__title">Остались вопросы?</div>
        <div className="form__box__subtitle">
          Задайте и когда нибудь ответим
        </div>
      </div>

      <div className="form__box__social">
        <div className="form__box__social__pic">
          <img src={social} alt="social" />
        </div>
        <div className="form__box__social__pic">
          <img src={social} alt="social" />
        </div>
        <div className="form__box__social__pic">
          <img src={social} alt="social" />
        </div>
      </div>
    </div>
  );
};

export default FormBox;

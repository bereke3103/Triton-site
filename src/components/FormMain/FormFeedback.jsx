const FormFeedback = () => {
  return (
    <div className="form__feedback" id="contact">
      <form action="">
        <div className="input__label">
          <label>Фамилия</label>
          <input type="text" placeholder="Фамилия" />
        </div>
        <div className="input__label">
          <label>Имя</label>
          <input type="text" placeholder="Имя" />
        </div>
        <div className="input__label">
          <label>Ваша почта</label>
          <input type="text" placeholder="Ваша почта" />
        </div>
        <div className="input__label">
          <label>Задайте ваш вопрос</label>
          <textarea name="" id="" cols="34" rows="10"></textarea>
        </div>

        <button className="btn__form__feedback">Отправить</button>
      </form>
    </div>
  );
};

export default FormFeedback;

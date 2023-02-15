import { Link } from 'react-scroll';
import plugin from '../../img/plagin.jpg';
const ProductItem = (props) => {
  const {
    title,
    shortInfo,
    id,
    titleKZ,
    titleENG,
    shortInfoKZ,
    shortInfoENG,
    ru,
    kz,
    en,
    imgString,
  } = props;
  // console.log(id);
  // console.log(props);
  return (
    <div className="products__item">
      <div className="products__item_pic">
        <img src={plugin} alt="plugin" />
      </div>

      <div className="products__item__text">
        <div className="products__item__uptitle">
          {ru && title} {kz && titleKZ} {en && titleENG}
        </div>
        <div className="products__item__title">
          {ru && shortInfo} {kz && shortInfoKZ} {en && shortInfoENG}
        </div>

        <Link
          offset={-595}
          to={id}
          smooth={true}
          duration={1000}
          style={{ cursor: 'pointer' }}
          className="products__item__more__info"
        >
          Подробнее
        </Link>
        <span className="products__item__line"></span>
      </div>
    </div>
  );
};

export default ProductItem;

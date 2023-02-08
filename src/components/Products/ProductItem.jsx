import { Link } from 'react-scroll'
import plugin from '../../img/plagin.jpg'
const ProductItem = (props) => {
  const { title, shortInfo, id } = props
  return (
    <div className="products__item">
      <div className="products__item_pic">
        <img src={plugin} alt="plugin" />
      </div>

      <div className="products__item__text">
        <div className="products__item__uptitle">{title}</div>
        <div className="products__item__title">{shortInfo}</div>

        <Link
          offset={-308}
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
  )
}

export default ProductItem

import './ShopCard.css';
import AddCartButton from '../AddCartButton/AddCartButton';

const ShopCard = ({ product }) => {
  return (
    <li
      className={'shop_card'}
      style={{
      backgroundImage: `url(${product.img})`,
      }}
    >  
      <div className={'details'}>
        <div className={'details_header'}>
          <h2 className={'details_title'}>{product.name}</h2>
          <p className={'details_color'}>{product.color}</p>
        </div>
        <div className={'details_footer'}>
          <span className={'details_price'}>${product.price}</span>
          <AddCartButton />
        </div>
      </div>
    </li>
  );
};

export default ShopCard
import AddCartButton from '../AddCartButton/AddCartButton';
import './ShopItem.css'

const ShopItem = ({ product }) => {
  return (
    <li className="shop_item">
      <img src={product.img} alt={product.name} className={'shop_item_img'} />
        <h2 className={'shop_item_title'}>{product.name}</h2>
        <h3 className={'shop_item_color'}>{product.color}</h3>
        <span className={'shop_item_price'}>${product.price}</span>
        <AddCartButton />
    </li>
  );
};

export default ShopItem
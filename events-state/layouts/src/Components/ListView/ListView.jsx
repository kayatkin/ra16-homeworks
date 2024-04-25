import ShopItem from '../ShopItem/ShopItem';
import './ListView.css'

export const ListView = ({ items }) => {
  return (
    <ul className="list_container">
      {items.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </ul>
  );
};

export default ListView
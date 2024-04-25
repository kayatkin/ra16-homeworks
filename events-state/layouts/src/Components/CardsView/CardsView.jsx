import ShopCard from '../ShopCard/ShopCard';
import './CardsView.css';

const CardsView = ({ cards }) => {
  return (
    <ul className={'cards_container'}>
      {cards.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    </ul>
  );
};

export default CardsView
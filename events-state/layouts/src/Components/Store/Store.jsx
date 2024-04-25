import { useState } from 'react';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import './styles.css';

const Store = ({ products }) => {
  const [view, setView] = useState('cards');

  const handleSwitch = () => {
    setView(prevView => (prevView === 'cards' ? 'list' : 'cards'));
  };

  return (
    <div>
      <IconSwitch
        icon={view === 'cards' ? 'view_list' : 'view_module'}
        onSwitch={handleSwitch}
      />
      {view === 'cards' ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  );
};

export default Store;

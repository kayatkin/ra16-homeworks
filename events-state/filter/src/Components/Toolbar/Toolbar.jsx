import './Toolbar.css';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
      <div className='toolbar'>
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => onSelectFilter(filter)}
            className={filter === selected ? 'active' : ''}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  };
  
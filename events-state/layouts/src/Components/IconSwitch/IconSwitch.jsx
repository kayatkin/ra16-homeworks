import './IconSwitch.css';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="icon_switch" onClick={onSwitch}>
      <span className="material-icons">{icon}</span>
    </div>
  );
};

export default IconSwitch;

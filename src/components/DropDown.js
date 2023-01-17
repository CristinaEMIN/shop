const DropDown = ({ open, trigger, menu, nameofClass }) => {
  

  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className={`menu ${nameofClass}`}>
          {/* { menu.map((menuItem, index) => (
            <li key={index} className="menu-item">{menuItem}</li>
          ))} */}
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown ;
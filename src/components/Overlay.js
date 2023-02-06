import { Fragment } from "react";


export function Overlay({ isOpen, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="overlay">
            <div className="overlay__background" />
            <div className="overlay__container">
                {children}
            </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;
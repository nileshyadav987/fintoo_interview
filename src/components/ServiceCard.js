
import React, { useState } from "react";


function ServiceCard(props) {

  const [open2, setOpen2] = useState(false);

  const handleStartClick = () => {
    setOpen2(true);
  }
  return (
    <div className="card mt-4 mb-4 " onClick={handleStartClick}>
      {open2 && (<div className="card-hover">
        <p>Minty uses cutting edge Artificial intelligence technology to best gauge your financial situation. The foundation of your future security lies in the steps you take today - let Minty guide you in the right direction.</p>
        <div><button className="btn mybtn" onClick={() => {
          props.onClick();
          setTimeout(() => {
            setOpen2(false);
          }, 2000);
        }}>Start</button></div>
      </div>)}
      <img className="card-img-top" src="https://picsum.photos/300/117" alt="Card cap" width="300" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
      </div>
    </div>
  );
}

export default ServiceCard;

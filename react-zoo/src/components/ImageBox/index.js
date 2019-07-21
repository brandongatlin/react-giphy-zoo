import React, { useState } from "react";

const ImageBox = props => {
  const [animated, setAnimation] = useState(false);
  const [titleLong, setTitle] = useState(false);

  const hoverOnHandler = () => {
    setTitle(true);
  };

  const hoverOffHandler = () => {
    setTitle(false);
  };

  return (
    <div className='picBox'>
      <p>{titleLong ? props.longTitle : props.shortTitle}</p>
      <img
        className='img'
        alt={props.alt}
        data-animated={props.dataAnimated}
        data-still={props.dataStill}
        src={animated ? props.dataAnimated : props.dataStill}
        onClick={e => setAnimation(!animated)}
        onMouseEnter={e => hoverOnHandler()}
        onMouseLeave={e => hoverOffHandler()}
      />
    </div>
  );
};

export default ImageBox;

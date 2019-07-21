import React, { useState } from "react";

const ImageBox = props => {
  const [animated, setAnimation] = useState(false);
  const [titleLong, setTitle] = useState(false);

  const hoverHandler = props => {
    setTitle(true);
  };

  const leaveHandler = props => {
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
        onMouseEnter={e => hoverHandler(props)}
        onMouseLeave={e => leaveHandler(props)}
      />
    </div>
  );
};

export default ImageBox;

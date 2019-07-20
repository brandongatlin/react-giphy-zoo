import React, { useState } from "react";

const ImageBox = props => {
  const [animated, setAnimation] = useState(false);

  return (
    <img
      className='img'
      alt={props.alt}
      data-animated={props.dataAnimated}
      data-still={props.dataStill}
      src={animated ? props.dataAnimated : props.dataStill}
      onClick={e => setAnimation(!animated)}
    />
  );
};

export default ImageBox;

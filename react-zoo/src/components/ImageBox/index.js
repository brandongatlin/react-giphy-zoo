import React, { useState } from "react";

const ImageBox = props => {
  const [animated, setAnimation] = useState(false);

  return (
    <div>
      {animated ? (
        <img
          className='img'
          alt={props.alt}
          data-animated={props.dataAnimated}
          data-still={props.dataStill}
          src={props.dataAnimated}
          onClick={e => setAnimation(false)}
        />
      ) : (
        <img
          className='img'
          alt={props.alt}
          data-animated={props.dataAnimated}
          data-still={props.dataStill}
          src={props.dataStill}
          onClick={e => setAnimation(true)}
        />
      )}
    </div>
  );
};

export default ImageBox;

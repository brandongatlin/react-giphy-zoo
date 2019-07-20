import React from "react";

import ImageBox from "../ImageBox";

const Container = props => {
  return (
    <div id='grid'>
      {props.data
        ? props.data.map(img => {
            return (
              <ImageBox
                className='img'
                key={img.id}
                alt={img.title}
                dataStill={img.images["480w_still"].url}
                dataAnimated={img.images.downsized_medium.url}
              />
            );
          })
        : null}
    </div>
  );
};

export default Container;

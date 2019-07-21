import React from "react";

import ImageBox from "../ImageBox";

const Container = props => {
  const formatTitle = title => {
    let shortTitle = title.replace("GIF", "").toUpperCase();

    if (shortTitle.length > 12) {
      shortTitle = shortTitle.substring(0, 12) + "...";
    }
    return shortTitle;
  };

  return (
    <div id='picContainer'>
      {props.data
        ? props.data.map(img => {
            return (
              <ImageBox
                className='img'
                key={img.id}
                alt={img.title}
                dataStill={img.images["480w_still"].url}
                dataAnimated={img.images.downsized_medium.url}
                shortTitle={formatTitle(img.title)}
                longTitle={img.title.replace("GIF", "").toUpperCase()}
              />
            );
          })
        : null}
    </div>
  );
};

export default Container;

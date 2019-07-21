import React from "react";

import ImageBox from "../ImageBox";

const Container = props => {
  const formatTitle = title => {
    if (title.length > 12) {
      title = title.substring(0, 11) + "...";
    }
    return title;
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
                shortTitle={formatTitle(
                  img.title.replace("GIF", "").toUpperCase()
                )}
                longTitle={img.title.replace("GIF", "").toUpperCase()}
              />
            );
          })
        : null}
    </div>
  );
};

export default Container;

import React, { useState, useEffect } from "react";
import API from "../../util/API";

import ImageBox from "../ImageBox";

const Container = props => {
  const [images, setImages] = useState([]);

  return <ImageBox />;
};

export default Container;

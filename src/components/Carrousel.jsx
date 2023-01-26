import React, {useRef, useEffect, useState} from "react";

import "./css/carrousel.css";
import backIcon from "../assets/images/icons/icons8_back_to_2.svg";
import nextIcon from "../assets/images/icons/icons8_next_page_1.svg";

export default (props) => {
    const carrousel = useRef();
    const [state, setState] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        if(state == true)
        {
          carrousel.current.scrollLeft += carrousel.current.offsetWidth;
          setState(false);
        }
        else{
          carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
          setState(true);
        }
      }, 5000)
    })

  return (
    <>
      <div ref={carrousel} className="carrousel">{props.children}</div>
    </>
  );
};

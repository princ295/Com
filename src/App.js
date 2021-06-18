import React, { createRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "./styles/index.css";
import RouterOutLate from "./router/index";
import ScrollToBottom from './components/ScrollToBottom';

const App = () => {

  //for remove all console message
  console.log = () => {}
  const scroll = createRef(null);  
  return (
    <div ref={scroll}>
      <RouterOutLate />
      <ScrollToBottom scroll={scroll}/>
    </div>
  );
}
 
export default App;
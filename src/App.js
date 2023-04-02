//should start only with a function / arrow function
//should use only capial letter to start the function
//function should contain the body(jsx) and the component logic
//should export the function so that other files can use it

import React from "react";
import './App.css';
import Homepage from "./pages/homepage";

//jsx
//element -> it is the tag used inside the return startement  (div,...)
//properties -> classname,id..
//child -> content inside the element

// const App = ()=>{
//   return(
//     <div>Hello world</div>
//   )
// }
 
const App = () =>{
  return(
    <div className="App">
      <Homepage />
    </div>
  )
}
export default App;
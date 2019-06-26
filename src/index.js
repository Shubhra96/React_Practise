import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

function App() {
  var a = 0;
  var b = 2;
  var c = a + b;
  return (
    <div className="App">
      <h1>{c}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
{
  /* </div>ReactDOM.render(<App />, rootElement); */
}
ReactDOM.render(<App />, rootElement);

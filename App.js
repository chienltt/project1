import React from "react";
import Timer from "./utils/Timer";

const App = () => {
  return (
      <Timer seconds={10} switchSecond={5*60}/>
  );
}

export default App;

import { useState } from "react";

const App = () => {

  
  //let x = 0; //It is normal variable, This value wouldn't display on browser then we need to useState Hooks variable 
  const [x,setx] = useState(0); // useState variable.

  const btnClick = () => {
    console.log("Clicked");
    // x++;
    setx(x+1);
    console.log(x);
  }

  return (
    <div>
      {x}
      <button onClick={()=>{btnClick()}}>Click Me.</button>
    </div>
  )
}

export default App

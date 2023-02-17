import { useState } from "react";
import Home from "./component/Home";
import Signup from "./component/Signup";


function App() {

  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="App">
      
      <Home/>
      <button onClick={()=>{
        setShowSignup(!showSignup)
      }}>SignUp</button>
      {
        showSignup? <Signup/> : ""
      }
      
    </div>
  );
}

export default App;

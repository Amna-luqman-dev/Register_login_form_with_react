import Register from "./Register";
import Login from "./Login";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";

export default function App(){
  return(
    <>
    <Router>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
    </Router>
    </>
 
  )
}



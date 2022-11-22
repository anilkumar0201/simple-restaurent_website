import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";

function App() {
  return (
    <BrowserRouter>
   <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/hotels" element={<List/>}/>
       <Route path="/hotels/:id" element={<Hotel/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/SignUp" element={<SignUp/>}/>

     
   </Routes>
  </BrowserRouter>
  );
}

export default App;

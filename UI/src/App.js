import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Blog from "./component/Blog";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
 
 <Routes> 
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/blog" element= {<Blog/>} />

 </Routes>
</Router>
    </div>
  );
}

export default App;

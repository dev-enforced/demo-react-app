import {Routes,Route,Link} from "react-router-dom";
import {MockAPI} from "./MockManComp";
import {Home} from "./Home"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<MockAPI/>} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
    
  );
}

export default App;

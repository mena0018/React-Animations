import Liste from './Components/Liste/Liste';
import Scroll from './Components/Scroll/Scroll';
import StateAnim from './Components/StateAnim/StateAnim';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="global-container">
        <Navbar />

        <Routes>
          <Route path="/"           element={<Liste />} />
          <Route path="/stateAnim"  element={<StateAnim />} />
          <Route path="/scroll"     element={<Scroll />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

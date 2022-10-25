import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homeview from "./pages/Home";
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homeview/>} />
            
          
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homeview from "./pages/Home";
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";

const testarray = [{
id:0,
set:true,
innnn:"aaa"
},
{
  id:1,
  set:false,
  innnn:"bbb"
},
{id:2,
  set:true,
  innnn:"ccc"
  
}]
console.log(testarray.find(item=>item.id==1))
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homeview/>} />
                <Route path="/admin" element={<>admin</>} />
                <Route path="/admin/edit/:articleId" element={<>edit</>} />
                <Route path="/personality/:type" element={<>personality</>} />
                <Route path="/articleList" element={<>articleList</>} />
                <Route path="/article/:articleId" element={<>article</>} />

            </Routes>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;

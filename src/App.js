import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homeview from "./pages/Home";
import PersonalityView  from "./pages/Personality";
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/article";


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
// console.log(testarray.find(item=>item.id==1))
function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homeview/>} />
                <Route path="/admin" element={<>admin</>} />
                <Route path="/admin/edit/:articleId" element={<>edit</>} />
                <Route path="/worldView" element={<>worldView</>} />
                <Route path="/personality/:type" element={<PersonalityView/>} />
                <Route path="/articleList" element={<ArticleList/>} />
                <Route path="/article/:articleId" element={<Article/>} />
                <Route path="/team" element={<>team</>} />
            </Routes>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;

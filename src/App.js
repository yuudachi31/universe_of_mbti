import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homeview from "./pages/Home";
import PersonalityView  from "./pages/Personality";
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/article";
import AdminView from "./pages/admin";
import EditArticleView from "./pages/EditArticle";
import MarkdownTest from "./pages/MarkdownTest";
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
                <Route path="/admin" element={<AdminView />} />
                <Route path="/admin/edit/:articleId" element={<EditArticleView/>} />
                <Route path="/worldView" element={<>worldView</>} />
                <Route path="/personality/:type" element={<PersonalityView/>} />
                <Route path="/articleList" element={<ArticleList/>} />
                <Route path="/article/:articleId" element={<Article/>} />
                <Route path="/markdownTest" element={<MarkdownTest/>} />
                <Route path="/team" element={<>team</>} />
            </Routes>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import CreateBlog from './components/createBlog/Create';
import Home from './components/home/Home';
import MyBlog from './components/myBlog/MyBlog';
import Article from './components/article/Article'
import EditBlog from './components/edit/EditBlog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreateBlog/>}/>
        <Route path="/my-blog" element={<MyBlog/>}/>
        <Route path="/article/:id" element={<Article/>}/>
        <Route path="/edit/:id" element={<EditBlog/>}/>

      </Routes>
    </Router>
  );
}

export default App;

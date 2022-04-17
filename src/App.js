import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home'
import About from './component/About/About'
import Blog from './component/Blog/Blog'
import Login from './component/Login/Login'
import CheckOut from './component/CheckOut/CheckOut'
import NotFound from './component/NotFound/NotFound'
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

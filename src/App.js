import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/SharedComponents/Header/Header';
import Home from './pages/Components/Home/Home/Home';
import AboutMe from './pages/Components/AboutMe/AboutMe';
import Blogs from './pages/Components/Blogs/Blogs';
import Login from './pages/Components/User/Login/Login';
import Checkout from './pages/Components/Checkout/Checkout';
import Register from './pages/Components/User/Register/Register';
import NotFound from './pages/SharedComponents/NotFound/NotFound';
import Footer from './pages/SharedComponents/Footer/Footer';
import RequireAuth from './pages/Components/User/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
      
    </div>
  );
}

export default App;

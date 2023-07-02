import { Route, Routes, useNavigate } from 'react-router-dom';
import './Asset/Css/App.css'
import Login from './Component/Authentication/Login/Login';
import Category1 from './Pages/All-category/Category1';
import Category2 from './Pages/All-category/Category2';
import Category3 from './Pages/All-category/Category3';
import Home from './Pages/Home/Home';
import CheckUser from './Component/CheckUser/CheckUser';
import { useEffect } from 'react';
import Contact from './Component/Contact Us/Contact';
import Saree from './Pages/Saree/Saree';
import Kurti from './Pages/Kurti/Kurti';
import Gown from './Pages/Gown/Gown';
import Viewproduct from './Component/View Product/Viewproduct';
import Addcart from './Component/Add to Cart/Addcart';


function App() {
  let navigate = useNavigate();
  let isLoggedIn = CheckUser();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Routes>
        <>
          <Route path="/*" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Category1" element={<Category1 />} />
          <Route path="/Category2" element={<Category2 />} />
          <Route path="/Category3" element={<Category3 />} />
          <Route path="/Contact-Us" element={<Contact />} />
          <Route path="/Saree" element={<Saree />} />
          <Route path="/Kurti" element={<Kurti />} />
          <Route path="/Gown" element={<Gown />} />
          <Route path="/Viewproduct" element={<Viewproduct />} />
        </>
      </Routes>
    </>
  );
}

export default App;

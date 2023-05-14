import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './Component/Authentication/Login/Login';
import Category1 from './Pages/All-category/Category1';
import Category2 from './Pages/All-category/Category2';
import Category3 from './Pages/All-category/Category3';
import Home from './Pages/Home/Home';
import CheckUser from './Component/CheckUser/CheckUser';
import { useEffect } from 'react';


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
        </>
      </Routes>
    </>
  );
}

export default App;

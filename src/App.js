import './App.css';
import NavBar from './components/header/NavBar';
import NewNav from './components/newnavbar/NewNav';
import MainComp from './components/home/MainComp';
import Footer from './components/footer/Footer';
import { Routes, Route} from 'react-router-dom';
import SignIn from './components/signup_signin/SignIn';
import SignUp from './components/signup_signin/SignUp';
import Cart from './components/cart/Cart';
import BuyNow from './components/buynow/BuyNow';

function App() {
  return (
    <>
      <NavBar />
      <NewNav />
      <Routes>
        <Route path='/' element={<MainComp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/getproducts/:id' element={<Cart />} />
        <Route path='/buynow' element={<BuyNow />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

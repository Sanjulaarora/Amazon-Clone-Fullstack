import './App.css';
import NavBar from './components/header/NavBar';
import NewNav from './components/newnavbar/NewNav';
import MainComp from './components/home/MainComp';
import Footer from './components/footer/Footer';
import { Routes, Route} from 'react-router-dom';
import SignIn from './components/signup_signin/SignIn';
import SignUp from './components/signup_signin/SignUp';

function App() {
  return (
    <>
      <NavBar />
      <NewNav />
      <Routes>
        <Route path='/' element={<MainComp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

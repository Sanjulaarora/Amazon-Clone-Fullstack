import './App.css';
import NavBar from './components/header/NavBar';
import NewNav from './components/newnavbar/NewNav';
import MainComp from './components/home/MainComp';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <NewNav />
      <MainComp />
      <Footer />
    </>
  );
}

export default App;

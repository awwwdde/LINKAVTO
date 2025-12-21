import { useEffect } from 'react';
import Header from './components/HeaderSection/header';
import Landing from './pages/landing';
import Footer from './components/FooterSection/footer';
import './App.css';
import Preloader from './pages/preloader';

function App() {
  useEffect(() => {
    const titles = ['Welcome', 'Marketplace', 'by awwwdde'];
    let currentIndex = 0;

    const updateTitle = () => {
      document.title = `LINKAVTO | ${titles[currentIndex]}`;
      currentIndex = (currentIndex + 1) % titles.length;
    };
    const interval = setInterval(updateTitle, 2000);
    updateTitle();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <Landing />
      <Footer />
    </>
  );
}

export default App;

import { useEffect } from 'react';
import Header from './components/header/header';
import Landing from './pages/landing';
import './App.css';

function App() {
  useEffect(() => {
    const titles = ['Welcome', 'Marketplace', 'by awwwdde'];
    let currentIndex = 0;

    const updateTitle = () => {
      document.title = `LINKAVTO | ${titles[currentIndex]}`;
      currentIndex = (currentIndex + 1) % titles.length;
    };

    // Обновляем title каждые 2 секунды
    const interval = setInterval(updateTitle, 2000);

    // Устанавливаем начальный title
    updateTitle();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <Landing />
    </>
  );
}

export default App;

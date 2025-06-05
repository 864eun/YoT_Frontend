import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import ChatbotButton from './components/buttons/ChatbotButton';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
        <ChatbotButton />
      </Main>
      <Footer />
    </>
  );
}

export default App;

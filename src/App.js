import './App.scss';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
     <img className='App__handshake' src='./images/Light-brown-in-Basic61.png' />
     <Navbar />
     <Main />
     <Footer />
     <img className='App__handpoint' src='./images/Light-brown-in-Basic51.png' />
    </div>
  );
}

export default App;

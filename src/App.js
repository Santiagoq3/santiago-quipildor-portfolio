import './App.scss';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
     <img className='App__handshake' src='./images/Light-brown-in-Basic61.png' />
     <Navbar />
     <Main />
    </div>
  );
}

export default App;
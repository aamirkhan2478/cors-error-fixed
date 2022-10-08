import './scss/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Container from './component/Container';
import Popup from './component/Popup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/details" element={<Popup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

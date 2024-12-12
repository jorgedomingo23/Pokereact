import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import PokeLista from './components/PokeLista';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon/:id" element={<Pokemon />}/>
        <Route path="/" element={<PokeLista/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

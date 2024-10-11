import { BrowserRouter,Route ,Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './Acceuil';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

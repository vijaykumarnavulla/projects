import './App.css';
import HomeComponent from './components/home/HomeComponent';
import Showratingcomponent from './components/showrating/Showratingcomponent';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='maindiv'>
     <BrowserRouter>
    <Routes>
    <Route path="/"  element={<HomeComponent />}></Route>
    <Route path="/showRating/:id"  element={<Showratingcomponent />}></Route>
    </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;

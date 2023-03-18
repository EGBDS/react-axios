import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet /> {/* <Outlet> para fazer a troca das paginas conforme url */}
      </div> 
    </div>
  )
}

export default App

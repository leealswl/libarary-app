import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Applayout from './Layout/Applayout';
import Homepage from './page/Hompage/Homepage';
import Login from './page/Login/Login';
import { useEffect, useState } from 'react';



function App() {

  const [authenticate, setAuthenticate] = useState(false);
  
  useEffect(() => {
  }, [authenticate]);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Applayout/>}/>
        <Route index element={<Homepage />}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
      </Routes>
    </div>
  );
}

export default App;

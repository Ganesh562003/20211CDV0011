
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Display from './Display';
import Read from './Read';
import Authorisation from './authorisation';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Authorisation/>}></Route>
      <Route path='/display' element={<Display/>}></Route>
      <Route path='/read/:id' element={<Read/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

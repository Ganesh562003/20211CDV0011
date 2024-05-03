
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Display from './Display';
import Read from './Read';


function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route path='/' element={<Display/>}></Route>
      <Route path='/Read/:productName' element={<Read/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

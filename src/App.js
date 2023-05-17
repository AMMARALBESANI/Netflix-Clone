import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import FaveList from './components/FavList'

import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <favolist/>
   <Header/>
   <Routes>
    <Route path='/FaveList' element={<FaveList/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    
   </Routes>
    
   </>
     
  );
}

export default App;

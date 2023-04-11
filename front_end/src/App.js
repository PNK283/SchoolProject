import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

 //importing the components


function App() {
  return (
    <div className="App">
       <BrowserRouter> 
        <Navbar fixed="top"/>  
             <Routes>
                  
                  <Route path='/enquiry' element={<Enquiry/>}/>
              </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

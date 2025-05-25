//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Map from './Map';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route path="/login" element={<Login/>}/>
        <Route path="/maps" element={<Map/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from "./Components/Navbar";
import {Home} from "./Pages/Home";
import {Login} from "./Pages/Login";
import {Registration} from './Pages/Registration';
import {Administration} from "./Pages/Administration";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Administration />}/>
          <Route path="/regis-reg" element={<Registration />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
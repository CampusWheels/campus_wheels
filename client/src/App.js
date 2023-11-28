import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import SignUp from './components/register'
import Login from "./components/login";
import Dashboard from "./components/dashboard/Dashboard";
import VisitorSignUp from "./components/visitor";

function App() {

    


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/register"} element={<SignUp/>}/>
                    <Route path={"/visitor"} element = {<VisitorSignUp/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/admin"} element = {<Dashboard/>}/>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

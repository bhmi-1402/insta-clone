// import logo from './logo.svg';
import './App.css';
import react,{createContext,useState} from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import CreatePost from './components/Createpost';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {LoginContext} from './components/context/LoginContext'
import Modals from './components/Modals'

function App() {
  const [userLogin,setUserLogin]=useState(false)
  const [modalOpen,setModalOpen]=useState(false)
  return (
    <BrowserRouter>
    <div className="App">
      <LoginContext.Provider value={{setUserLogin,setModalOpen}}>
      <Navbar login={userLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/createPost" element={<CreatePost/>}></Route>
      </Routes>
      <ToastContainer theme="dark"/>
      {/* <Modals></Modals> */}
      {modalOpen && <Modals setModalOpen={setModalOpen}></Modals>}
      </LoginContext.Provider>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

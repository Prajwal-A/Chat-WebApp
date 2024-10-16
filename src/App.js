import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import './style.scss';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
   const {currentUser} = useContext(AuthContext)
   console.log(currentUser);

   const ProtectedRoute = ({children}) =>{
     if(!currentUser){
       return <Navigate to="/login" />
     }

     return children;
   };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={ //<Home />
             <ProtectedRoute>
               <Home />
               {console.log("Cant open chat page withoult logging in")}
             </ProtectedRoute>
          } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

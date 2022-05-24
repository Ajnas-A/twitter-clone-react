import FinalApp from "./components/FinalApp";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import Redirect from "./pages/Redirect";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className={`App`}>
      <Toaster />
      <Router>
        <Routes>
          <Route path='/' element={<FinalApp />} exact />
          <Route path='/signup' element={<SignUp />} exact />
          <Route path='/signin' element={<SignIn />} exact />
          <Route path='/redirect/:email' element={<Redirect />} exact />
          <Route path='*' element={<Error404 />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

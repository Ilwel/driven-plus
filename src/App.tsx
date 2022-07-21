import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="l-app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/home' element={<Home plan='gold' name='Ilwel' />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

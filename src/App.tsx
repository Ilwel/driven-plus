import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Subscriptions from './pages/Subscriptions'
import Subscription from './pages/Subscription'

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
          <Route path='sign-up' element={<SignUp />} />
          <Route path='home' element={<Home plan='gold' />} />
          <Route path='subscriptions' element={<Subscriptions />} />
          <Route path='subscriptions/:id' element={<Subscription />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

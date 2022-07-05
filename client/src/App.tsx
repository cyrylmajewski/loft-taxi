import './App.scss';
import Auth from './Pages/Auth';
import AppMap from './Pages/Map'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from './Components/Navigation';
import { withAuth, IAuthContext } from './Contexts/AuthContext';

function App({ isLoggedIn }: IAuthContext) {

  const navigateToSignIn = (component:JSX.Element) => !isLoggedIn ? <Navigate to="/" /> : component;
  
  return (
    <div className="App">
      <BrowserRouter>
        { isLoggedIn && <Navigation />}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="map" element={navigateToSignIn(<AppMap />)} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuth(App);

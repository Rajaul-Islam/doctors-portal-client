import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Deshboard from './Pages/Deshboard/Deshboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Navigation></Navigation> */}
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/deshboard'>
             <Deshboard></Deshboard>
            </PrivateRoute>
            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;

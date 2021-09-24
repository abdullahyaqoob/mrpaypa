// import logo from './logo.svg';
import './App.css';
import SignUp2 from './SignUp2'
import MainComp from './MainComp'
import Resetpass from './Resetpass';
import ForgoPass from './ForgotPass';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/SignUp2">
            <SignUp2 />
          </Route>
        <Route path="/MainComp">
            <MainComp />
          </Route>
        <Route path="/Resetpass">
            <Resetpass />
          </Route>
          <Route path="/ForgoPass">
            <ForgoPass />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/">
            <MainComp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

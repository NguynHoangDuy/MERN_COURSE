import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Nav";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";

//redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./action/auth";
import CreateProfile from "./components/profile-from/CreateProfile";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
            <Alert />

            <Routes>
              <Route exact path="/" element={<Landing/>} />
              <Route exact path="/register" element={<Register/>} />
              <Route exact path="/login" element={<Login/>} />
              
              <Route path="/dashboard" element={<PrivateRoute component={Dashboard}/>}/>
              <Route path="/create-profile" element={<PrivateRoute component={CreateProfile}/>}/>
                

              
            </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

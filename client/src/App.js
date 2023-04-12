import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/Nav";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import ProfileForm from "./components/profile-from/ProfileForm";
import EducationForm from "./components/profile-from/EducationForm";
import { loadUser } from "./action/auth";

//redux
import { Provider } from "react-redux";
import store from "./store";
import ExperienceForm from "./components/profile-from/ExperienceForm";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";

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
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profiles" element={<Profiles />} />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path="/create-profile"
              element={<PrivateRoute component={ProfileForm} />}
            />
            <Route
              path="/edit-profile"
              element={<PrivateRoute component={ProfileForm} />}
            />
            <Route
              path="/add-education"
              element={<PrivateRoute component={EducationForm} />}
            />
            <Route
              path="/add-experience"
              element={<PrivateRoute component={ExperienceForm} />}
            />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

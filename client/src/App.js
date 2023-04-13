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
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import setAuthToken from "./utils/setAuthToken";
import { LOG_OUT } from "./action/types";

function App() {
    useEffect(() => {
        if (localStorage.token) {
            // if there is a token set axios headers for all requests
            setAuthToken(localStorage.token);
        }
        // try to fetch a user, if no token or invalid token we
        // will get a 401 response from our API
        store.dispatch(loadUser());

        // log user out from all tabs if they log out in one tab
        window.addEventListener("storage", () => {
            if (!localStorage.token) store.dispatch({ type: LOG_OUT });
        });
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
                        <Route
                            exact
                            path="/profile/:id"
                            element={<Profile />}
                        />
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
                            element={
                                <PrivateRoute component={ExperienceForm} />
                            }
                        />
                        <Route
                            path="/post"
                            element={<PrivateRoute component={Posts} />}
                        />
                        <Route
                            path="/post/:id"
                            element={<PrivateRoute component={Post} />}
                        />
                    </Routes>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;

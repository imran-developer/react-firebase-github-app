import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import MyCard from './Card';

//Router
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

//Toastify
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from 'firebase/app';
import "firebase/auth";

//Components
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import NotFound from './Pages/PageNotFound';

import './App.css';
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from './Config/firebaseConfig';
//init firebase
firebase.initializeApp(firebaseConfig);

function App() {
    const[user, setUser] = useState(null);
    

    return (
        <Router>
            <ToastContainer />
            <UserContext.Provider value={{user, setUser}} >
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer />
            </UserContext.Provider>
        </Router>
    );
}

export default App;

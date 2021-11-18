import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import supabase from './services/supabaseClient';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import AboutUs from './pages/AboutUs';
import Dash from './pages/Dashboard';
import './Commun/StyleCommun.css';
import EuropeanCity from './pages/EuropeanCity';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation();

  const [campusList, setCampusList] = useState([]);

  const getCampus = async () => {
    const { data: campus, error } = await supabase
      .from('campus')
      .select('*')
      .order('id', { ascending: true });
    // eslint-disable-next-line no-console
    if (error) console.log(error);
    else setCampusList(campus);
    return campusList;
  };

  useEffect(async () => {
    await getCampus();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/welcome" component={Welcome} />
        <ProtectedRoute exact path="/About" component={AboutUs} />
        <ProtectedRoute exact path="/dashboard" component={Dash} />
        <ProtectedRoute exact path="/europeancity" component={EuropeanCity} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import supabase from './services/supabaseClient';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
function App() {
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
    <Router>
      {/*       <div className="App">
        {Robin}
        <h1 className="text-2xl">Robin</h1>
        {campusList.map((item) => (
          <p>{item.name}</p>
        ))}
      </div> */}

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

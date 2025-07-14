import React from 'react';
import { Route, Switch } from 'wouter';
import Home from './pages/home';
import NotFound from './pages/not-found';
import './app.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
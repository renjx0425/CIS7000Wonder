import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReadingPage from './pages/ReadingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/read" component={ReadingPage} />
      </Switch>
    </Router>
  );
}

export default App;


const e = React.createElement;

function App() {
  return e('div', null, 'Hello, this is a React app running without npm!');
}

ReactDOM.render(e(App), document.getElementById('root'));

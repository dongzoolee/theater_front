import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main}></Route>
      </Switch>
    </Router>
  );
}

export default App;

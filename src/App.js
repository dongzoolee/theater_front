import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main'
import WriteStory from './components/WriteStory'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/write' component={WriteStory}></Route>
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main'
import WriteStory from './components/Story/WriteStory/WriteStory'
import ReadStory from './components/Story/ReadStory/ReadStory'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/write' component={WriteStory}></Route>
        <Route exact path='/story/:id' component={ReadStory}></Route>
      </Switch>
    </Router>
  );
}

export default App;

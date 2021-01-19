import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main'
import WriteStory from './components/Story/WriteStory/WriteStory'
import ReadStory from './components/Story/ReadStory/ReadStory'
import SubCategory from './components/Category/SubCategory/SubCategory';
import MainCategory from './components/Category/MainCategory/MainCategory';
import Location from './components/Category/Location/Location';
import LocationList from './components/Category/Location/LocationList';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/장소' component={LocationList} />
        <Route exact path='/장소/:location' component={Location} />
        <Route exact path='/story/:id' component={ReadStory} />
        <Route exact path='/:mainCategory' component={MainCategory} />
        <Route exact path='/:mainCategory/:subCategory' component={SubCategory} />
        <Route exact path='/dongzoolee' component={WriteStory} />
      </Switch>
    </Router>
  );
}

export default App;

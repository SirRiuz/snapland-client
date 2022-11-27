
import './App.css';
import Newpost from './components/Newpost';
import Timeline from './components/Timeline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import Thread from './screens/Thread';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/t/:id" component={Thread}/>
      </Switch>
    </Router>
  );
}

export default App;

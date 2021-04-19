import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Navbar from './component/navbar.component';
import HealthList from './component/health-list.component';
import EditHealth from './component/edit-health.component';
import CreateHealth from './component/create-health.component';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={HealthList}/>
    <Route path="/edit/:id" component={EditHealth}/>
    <Route path="/create" component={CreateHealth}/>
    </Switch>
    </Router>
    
    
  );
}

export default App;

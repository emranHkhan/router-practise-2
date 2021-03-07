import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about"  component={About} />
          <Route path="/shop/:itemId" component={ItemDetail}/>
        </Switch>



      </div>
    </Router>

  );
}

export default App;

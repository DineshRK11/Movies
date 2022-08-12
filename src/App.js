import Home from "./Home";
import Navbar from "./Navb";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Addnewmovie from "./Addnewmovie";
import MovieDetail from "./MovieDetail"
import Notfound from "./Notfound";
function App() {
  return (
    <Router>
      <div id="app-content">
        <Navbar/>
        {/* <Navbar />    */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>                                            
          <Route path="/addMovie">
            <Addnewmovie/>
          </Route>
          <Route path="/movie-detail:id">
            <MovieDetail/>
          </Route>

          <Route path="*">
          <Notfound/>
          </Route>
          
        </Switch>
      </div>       
    </Router>
  );
}
export default App;

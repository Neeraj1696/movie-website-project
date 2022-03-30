import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./Components/Header";
import SimpleBottomNavigation from "./Components/Main";

import Trendig from "./Components/Trendig";
import Movie from "./Components/Movie";
import Tv from "./Components/Tv";
import Search from "./Components/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trendig} exact />
            <Route path="/movie" component={Movie} />
            <Route path="/tv" component={Tv} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;

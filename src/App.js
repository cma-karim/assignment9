import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import playerData from './data/data.json';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;

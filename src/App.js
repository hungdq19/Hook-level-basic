import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePAge';
import AlbumFeature from './features/Album';
import TodoFeatue from './features/Todo';

function App() {
  // style cho thẻ link để xuống dòng
  const link = {
    display:"block",
    textDecoration: 'none',
    padding: '20px',
    color: 'deeppink',
    fontSize: "30px"
  }
  return (
    <div className="App">
        <NavLink style={link} to="/todos">Todo</NavLink>
        <NavLink style={link} to="/albums">Albums</NavLink>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/todos" component={TodoFeatue} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
    </div>
  );
}

export default App;

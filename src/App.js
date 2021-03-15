import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import userApi from './Api/userApi';
import './App.css';
import HomePage from './component/HomePAge';
import AlbumFeature from './features/Album';
import TodoFeatue from './features/Todo';

function App() {
  useEffect(() =>{
    const callAPI = async () =>{
      const userList = await userApi.get()
      console.log(userList)
    }
    callAPI();
  },[])
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

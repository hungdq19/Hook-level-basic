import React from 'react';
import { Route, Switch, useHistory, useLocation, useParams, useRouteMatch } from 'react-router';
import DeteilPage from './page/DeteilPage';
import Listpage from './page/ListPage';
import './style.scss';


function TodoFeatue(props) {
    const math = useRouteMatch();
    const location = useLocation();
    const param = useParams();
    const history = useHistory();
    
    return (
        <div className="Todo__content">
            {/* Nested routing trong component con */}
            <Switch>
                <Route path={math.path} component={Listpage} exact/>
                <Route path={`${math.path}/:id`}component={DeteilPage} exact/>
            </Switch>
        </div>
    );
}

export default TodoFeatue;
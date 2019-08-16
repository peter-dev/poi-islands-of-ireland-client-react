import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import ApiService from '../../service/apiservice';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            // check if user is authenticated, display component or redirect to login page
            render={(props) => ApiService.isLoggedIn() === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            }
        />
    );
};

export default PrivateRoute;
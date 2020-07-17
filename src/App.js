import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LoginRoute from './routes/login/Login';
import RegisterRoute from './routes/register/Register';
import PrivateRoute from './routes/auth/PrivateRoute';
import DashboardRoute from './routes/dashboard/DashboardRoute';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Switch>
        <Route path='/login' children={<LoginRoute />} />
        <Route path='/register' children={<RegisterRoute />} />
        <PrivateRoute exact path="/" >
          <DashboardRoute />
        </PrivateRoute>
      </Switch>

    </Router>
  );
}

export default App;

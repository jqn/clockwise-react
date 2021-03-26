import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from './layouts/Admin';

const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route
          path="/admin"
          render={(props) => <AdminLayout {...props} />}
        />
        <Redirect to="/admin/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;

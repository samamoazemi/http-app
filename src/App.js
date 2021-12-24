
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="App">
     <ToastContainer />
     <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index}/>
          ))}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

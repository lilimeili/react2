
// import './App.css';
 import React,{Component} from "react";
// import {Button} from "antd";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import reportWebVitals from './reportWebVitals';
export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}>
      </Route>
      <Route path="/" component={Admin}>
      </Route>
    </Switch>
   </BrowserRouter>
    )
  }
}
// function App() {
//   return (
//    <BrowserRouter>
//     <Switch>
//       <Route path="./login" component={Login}>
//       </Route>
//       <Route path="./admin" component={Admin}>
//       </Route>
//     </Switch>
//    </BrowserRouter>
//   );
// }

// export default App;
reportWebVitals()
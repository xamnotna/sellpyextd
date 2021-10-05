import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Repair from "./repair/Repair";
import Info from "./info/Info";
import Booking from "./booking/Booking";
//import Home from './Home/Home';
//import Weather from './Weather';
//import Contact from './Contact'; 
import Header from './navigation/Header';
import * as ROUTES from './constants/Routes';

import  { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
@import url(‘https://fonts.googleapis.com/css?family=Nunito|Roboto');
*{
  margin: 0;
  padding: 0;
  //text-decoration: none;
  
}
body {
  
  background-color: #ffffff;

  font-family: Nunito, Roboto, sans-serif;
}}
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <div>
    <Router>
      <Header />
        <Switch>
       <Route path='/repair'>
              <Repair/>
        </Route>
        <Route exact path={ROUTES.INFO}>
              <Info/>
        </Route>
        <Route exact path={ROUTES.BOOKING}>
              <Booking/>
        </Route>

         <Route path='/'>
              {/* <Home /> */}
         </Route>

       </Switch>
     
     </Router>
    </div>
    </>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//import Home from './Home/Home';
//import Weather from './Weather';
//import Contact from './Contact'; 
import Header from './navigation/Header';

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
       {/*<Route path='/contact'>
              <Contact />
        </Route> */}

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

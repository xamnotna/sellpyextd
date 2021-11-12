import React from 'react'
import { Link } from 'react-router-dom';
import * as ROUTES from "../constants/Routes";
function Home() {

   


    const userAccount  = () => {

        localStorage.setItem('acountnumber', '1')

        LoginAccount();
            
    }


    const LoginAccount = () => {

        var loggedin = localStorage.getItem('acountnumber');

        
        return(
            <h1>acoount used is: {loggedin}</h1>
        )



    }

    if(!localStorage.getItem('acountnumber')) {
        userAccount();
      } else {
        LoginAccount();
      }

    return (
        <div>
            <h1>Hejsan Testa vår Nya reparationslokalen <br/>
            <Link to={ROUTES.REPAIR}>här!</Link></h1>
            <LoginAccount/>
        </div>
    )
}

export default Home

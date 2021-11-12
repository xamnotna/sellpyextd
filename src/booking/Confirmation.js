import { Link } from 'react-router-dom';
import * as ROUTES from "../constants/Routes";
import bokingImg from '.././imgs/joinery.png'
import styled  from 'styled-components';
import { useState } from 'react';
import {Date} from './PickDate';
import Transport from './Transport';
import  ContentWrapper from '../wrapper/ContentWrapper';

const HeaderDiv = styled.div`
display:flex;
position: absolute;
flex-direction: column;
flex-wrap: wrap;
align-content: flex-start;
align-items: center;
font-size: 12px;


& h1 {
    padding-top: 86px;
    position: absolute;
    z-index: 0; 
}

& img{
    max-width:100%;
    height: 31vh;
    margin:0px;

   /* z-index: 1; */
}

`
const MainDiv = styled.div`
position:relative;
margin-top: 276px;

& h2 {
    font-size: 20px;
}

& h3 {
    font-size: 16px;
}

`
const PopDiv = styled.div `

& a{
    color: blue;
}

`

let weekDay = "10:00-12:00";

function Confirmation() {

    const [butttonPopup, setButtonPopup] = useState(false);

    return(
        <ContentWrapper>
        
        <HeaderDiv>
        <h1>BOKNINGSBEKRÄFTELSE</h1>
        <img src={bokingImg} />
        
        </HeaderDiv>
        <MainDiv>
        <br/>
        <h2>Din bokning har bekräftats!</h2>
        <br/>
        <h3>Du har bokat följande tid:  </h3>
        <br/>
        <h3>Datum: <Date mode={weekDay}/> </h3>
        {/* -----{datum}--- */}
        <br/>
        <h3>Klockslag: Måndag</h3>
        <br/>
        {/* ----{tid}---- */}
        <br/>
        <p>Vill du avboka eller omboka tiden? Gör det <Link to={ROUTES.BOOKING}>här!</Link></p>
        <br/>
        <PopDiv>
        <h1>Välkommen in!</h1>
        <br/>
        <p>behöver du transport?</p>  <a onClick={() => setButtonPopup(true)}>Boka här!</a>
        </PopDiv>
        <Transport trigger={butttonPopup} setTrigger={setButtonPopup}>

        <h3>Önskar du transporthjälp?</h3>
            Kontakta oss så kommer vi överens om en tid som funkar.<br/>
             Tänk på att du endast kan boka transport för nästkommande dag.
             <br/>
        <hr/>
            <br/>
            <h3>Kostnad</h3>
            <br/>
            <p>Du betalar alltid för tiden du har bokat,<br/>
            ombokning och avbokning sker senast 24 timmar innan.<br/>
             Betalning debiteras vid utebliven närvaro!<br/><br/></p>
        </Transport>
        <br/>
        </MainDiv>
        <div>

        </div>

        </ContentWrapper>
    )
}

export default Confirmation;
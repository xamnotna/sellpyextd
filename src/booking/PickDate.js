import styled from "styled-components";
import { useState } from 'react';
import Form from './Form';
import { HOME } from "../constants/Routes";
const BoxDiv = styled.button` 
{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
   
    padding: 4px;
    width: 7rem;
    height: 6rem;  
    border: 0.5px solid black;
    box-sizing: border-box;

    /*background-color: green;*/
    background-color:${props => props.theme.main};
    /* & > ul{
        list-style-type: none;
    } */

    :hover {
        background-color: #4CAF50; /* Green */
        color: white;
      }

}
`
const UlStyled = styled.ul `
    padding:0px;
    list-style-type: none;
    display:flex;

`
const DivSymbol = styled.div `
   padding-left: 86px;
`


const StyledDiv = styled.div `{
    
   
    display:flex;
    flex:0;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    
    
    & h3{
        max-width:100%;
    }

}`;


let weekDay = 0;

const statusSymbols = {
freeUse: '☑️',
booked:  '✔️',
busy: '🚫'
};

function PickDate(props) {

 const [mode, setMode] = useState('');

  const [butttonPopup, setButtonPopup] = useState(false);

  const selectTime = props.selectTime;
const selectDays = props.selectDays;




const listItems = selectTime.map(( time) =>

    <BoxDiv onClick={() => setButtonPopup(true) + handler(time)}>
    
    <DivSymbol><StatusUpdate  status={statusSymbols.freeUse}/></DivSymbol>
    { /* wanted to add local storage 
    so that could change color and status symbol  to make it easy 
    to se the wich was busy and not*/ }
       <li  key={time} >{( time)} </li> <br/>
        <li>people: 0/5</li>  
    </BoxDiv>
);

const listDay = selectDays.map((day) => 
<StyledDiv onClick={() =>  handler(day + weekDay)}>
    
    <h3>{(day)}</h3>
    
    {listItems}
   
</StyledDiv>
)

 const handler = (e) => {
   
       console.log(e);
        weekDay = ' '+ e + ' ' ;
        setMode(weekDay);
        console.log(weekDay);

        
        
    
};

    Date(mode);

    return(
        
        /* {selectTime ? selectTime : weekDay} */
        
        <UlStyled>
        {listDay}
        
        {/* {listItems} */}
        
        <Form trigger={butttonPopup} setTrigger={setButtonPopup}>
            <h4>Boknings datum <Date mode={mode}/>{/* {mode} */}</h4>
            
            <hr/>

                <h3>Kostnad</h3>
                <p>Du betalar alltid för tiden du har bokat,<br/>
                ombokning och avbokning sker senast 24 timmar innan. <br/>
                Betalning debiteras vid utebliven närvaro! <br/><br/>

                Priset för att vistas i verkstaden och använda<br/>
                utrustningen är 200 SEK/person för 2 timmar.</p>
            </Form>

        </UlStyled>
        
    )
}

const StatusUpdate = (props) => {

    return(
        <>
        {props.status}
        </>
    )
 
}

 export function Date(props) {

    return(
        <>{props.mode}</>
    )
}

export default PickDate ;
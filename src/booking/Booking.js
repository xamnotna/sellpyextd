import PickDate from './PickDate';
/* import Form from './Form'; */
import  ContentWrapper from '../wrapper/ContentWrapper';
/* import { useState } from 'react'; */
/* import styled from 'styled-components'; */

/* const StyledDiv = styled.div `{
    padding:5px;
    display:flex;
    flex:3;
    flex-wrap: nowrap;
    justify-content: center
}`; */





function Booking() {
    /* const [butttonPopup, setButtonPopup] = useState(false); */

    const selectTime = [
        "10:00 - 12:00",
        "12:00 - 14:00",
        "14:00 - 16:00",
        "16:00 - 18:00",
        "18:00 - 20:00",
      ];

      const selectDays = [
        "Måndag",
        "Onsdag",
        "Fredag",
    ];


  /*   selectDays.forEach((calender) => 
        console.log('day: ' + calender + ' time: ' + selectTime)
    
         
        
    ) */


   


    return(
        <ContentWrapper>
            <h2>Boka tid</h2>
            <p>Här kan du boka en ledig tid i verkstaden.</p>
            <div><span>Bokad tid ✔️</span> <span>Ledig tid ☑️</span> <span>Upptagen tid 🚫</span> </div>
            <hr/>
            
          {/*   <StyledDiv> */}
            {/* <Form trigger={butttonPopup}>
                <h3>My Popup</h3>
            </Form> */}
            
            <PickDate  selectDays={selectDays} selectTime={selectTime}/>
            {/* <PickDate selectTime={selectTime}/> */}
            {/* <PickDate selectTime={selectTime}/> */}
         
          {/*   </StyledDiv>  */}
           
        </ContentWrapper>
    )

}

/*  function Calender(props)
 {
    selectDays = props.selectDays.forEach((e) => 
        e    
    )

    return
    (

    <StyledDiv>

    <PickDate selectTime={props.selectTime}/>
  
    </StyledDiv> 
    )

 } */

export default Booking;




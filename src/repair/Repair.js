import { Link } from 'react-router-dom';
import * as ROUTES from "../constants/Routes";
import  { MainWrapper } from './RepairElements';

import  ContentWrapper from '../wrapper/ContentWrapper';
function Repair() {

    return(
        <ContentWrapper>

         <MainWrapper>
            <h1>Välkomen till reparationslokalen!</h1>
           
                <div>
                    <section>
                <p>
                    
Vill du reparera eller göra om en gammal möbel eller andra saker som behöver nytt liv? Kanske sy om ett klädesplagg eller andra textilier? 
<br/>
<br/>

Här kan du låna vårt snickeri med verktyg samt vår syhörna med symaskiner med tillbehör. De finns även en hörna för ommålning av t ex möbler.
                </p>
                    </section>

                    <Link to={ROUTES.BOOKING}><button>BOKA TID</button></Link>
                    <Link to={ROUTES.INFO}><button>HITTA HIT</button></Link>
                    
                </div>
            </MainWrapper>
        </ContentWrapper>
    )
}

export default Repair;
import  { MainWrapper, TimeDiv } from './InfoElements';

import  ContentWrapper from '../wrapper/ContentWrapper';
function Info() {

    return(
        <ContentWrapper>

         <MainWrapper>
            <h1>Hitta hit!</h1>
           
                <div>
                    <section>
                <p>
                <h2>Besöksadress:</h2>
                Frihamnsgatan 56, 115 56 Stockholm
            <br/>
            <h2>Telefon:</h2> 
            08-502 820 86
            <h2>Transport:</h2>
                08-123 45 67 

            
</p>



                
                    </section>

                    
                </div>

            </MainWrapper>
            
    <TimeDiv>
        <h2>Det går bra att ringa oss under öppettider:</h2>
        <div>
        
        
        <p>
            Måndag  <br/>   Onsdag   <br/>  Lördag 
        </p> 
        
            
                <p>
            10:00-18:00 <br/> 10:00-18:00 <br/> 10:00-18:00
                </p>  
           
        </div>
    </TimeDiv>                
        
        </ContentWrapper>
    )
}

export default Info;
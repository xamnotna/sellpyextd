import styled from "styled-components";

export const MainWrapper = styled.div`

  & > div{
    box-sizing: border-box;
    padding: 1em;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  & > section {
    width: 75%;
    margin-top: 16px;
}

&  h2{
  text-align: center;    
  font-size: 20px;
  padding: 12px;
}
 
  & > h1{
    text-align: center;    
    font-size: 20px;
    padding: 12px;
  }

  & p{
    text-align: left;
    line-height: 24px;
    padding: 2em;
  }

`


export const TimeDiv = styled.div`

& > div{
  box-sizing: border-box;
  border: 1px solid red;
  padding: 1em;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: center;
  gap: 1rem;
}

& h2{
  text-align: center;    
  font-size: 18px;
  padding: 12px;
}

&  p{
 /*  border: 1px solid red;
  width: 2em; */
  
  line-height: 24px;
  padding: 1em;
  flex: 2;
 /*  display: flex;
  flex: 3; */
  text-align: center;
}

`
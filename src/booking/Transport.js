import React from 'react'
import styled from 'styled-components'
import calendar_icon from '../icons/shipping-fast.svg';

const PopUpDiv = styled.div `
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;

background-color: rgba(0, 0, 0, 0.2);
index-z: 1;

display: flex;
justify-content: center;
align-items: center;

`
const PopUpInner = styled.div `
border-radius: 5px;
position: relative;
padding-top: 28px;
padding: 0px;
height: 100%;
width:262px;
font-size: 12px;
max-height: 440px;
background-color: #FFF;

`

const PopUpText = styled.div `
    padding: 20px;
    padding-top: 36px;
`


const CloseButton = styled.button `
position: absolute;
top: 6px;
right: 16px;
background-color: #212721;
color: white;

`

const ImageDiv = styled.div `
position: relative;
width: 262px;
height: 151px;
text-align: center;
top: 26px;
padding-top: 24px;
background-color: #0762C8;
border: 1px solid blue;
box-sizing: border-box;

& img{
width: 91px;
height: 104px; 
}

`


function Transport(props) {
    return (props.trigger) ? (
        <PopUpDiv>
            <PopUpInner>
            <ImageDiv>
            <img src={calendar_icon}   alt="shipping"/>
        
            </ImageDiv>
                
                <CloseButton onClick={() => props.setTrigger(false)}>
                stäng</CloseButton>
                <PopUpText> 
                { props.children }
                </PopUpText>
            </PopUpInner>
            
        </PopUpDiv>
    ) :  "";
}

export default Transport
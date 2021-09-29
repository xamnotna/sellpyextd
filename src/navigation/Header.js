import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bars_icon from '../icons/bars__icon.png';//'../icons/bars_icon.png'; 
import heart_icon from '../icons/heart.svg';
import user_icon from '../icons/user.svg';
import checkout_icon from '../icons/shopbag.svg';
import repair_icon from '../icons/repair.svg';
const StyledLi = styled.li`
font-size: 26px;
list-style: none;
padding: 10px;
color: #ffffff;
text-decoration: none;
font-size: 26px;
list-style: none;
padding: 10px;
color: #ffffff;
-webkit-text-decoration: none;
text-decoration: none;
padding: 8px;


a{
    color:#333;
}

a:link{
    
    text-decoration: none;
}

 &>a:active {
    color: red;
    text-decoration: none;
}
/* &<img{
    width:24px;
} */
p{
    font-size: 14px;
}
`
;

const StyledUL = styled.ul` 
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center;
box-shadow: 2px 2px #EEEEEE;
padding: 12px


`;

const StyledNav = styled.nav`
background-color: ffffff;
padding: 15px

color: #ffffff;

/* img{
    width:48px;
} */


`

const Header = () => (
    <StyledNav>
        
        <StyledUL>
            <img src={bars_icon}  width="42px"    alt="bars"/>
            <StyledLi>
                <Link to="/"> Sellpy </Link>
            </StyledLi>
            <StyledLi>
                <Link to="/"> <img src={heart_icon} width="24px"  alt="home"/></Link>
            </StyledLi>
            <StyledLi>
                <Link to="/user"><img src={user_icon} width="20px"  alt="user"/></Link>
            </StyledLi>
            <StyledLi>
                <Link to="/checkout"><img src={checkout_icon} width="24px"  alt="checkout"/></Link>
            </StyledLi>
            <StyledLi>
                <Link to="/repair"><img src={repair_icon} width="24px"  alt="repair"/></Link>
            </StyledLi>
            <StyledLi>
                <Link to="/repair"><img src={repair_icon} width="24px"  alt="repair"/></Link>
            </StyledLi>
            <StyledLi>
                <Link to="/repair"><p>SÄLJ</p></Link>
            </StyledLi>
        </StyledUL>
    </StyledNav>
);

export default Header;
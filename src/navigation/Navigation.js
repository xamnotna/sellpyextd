import { Link } from 'react-router-dom';
import styled from 'styled-components';


/* const StyledLi = styled.li`
font-size: 20px;
list-style: none;
padding: 10px;
color: #f9f9f9;
text-decoration: none;

a:hover {
    color: red;
    text-decoration: none;
}
`
;

const StyledUL = styled.ul` 
display: flex;
`;

const StyledNav = styled.nav`
background-color: black;
padding: 15px
color: #f9f9f9;
`
 */


function Navigation() {
    return (
        <StyledNav>
            <StyledUL>
                <StyledLi>
                    <Link to="/">Home</Link>
                </StyledLi>
                <StyledLi>
                    <Link to="/contact">Contact</Link>
                </StyledLi>
            </StyledUL>
        </StyledNav>
    )

}


export default Navigation
import React from 'react';
import { Nav, NavContainer, NavTextBox, NavH2, NavBox, NavItems, NavLinks } from './NavElements';

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavTextBox>
                    <NavH2>Jacob</NavH2>
                </NavTextBox>
                <NavBox>
                    <NavItems>
                        <NavLinks>Home</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks>About</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks>My Space</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks>Contact</NavLinks>
                    </NavItems>
                </NavBox>
            </NavContainer>
        </Nav>
    )
}

export default Navbar;

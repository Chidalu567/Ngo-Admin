import React from 'react';
import styled from 'styled-components';
import navimage from "../../images/StripeBranding.jpg";
import Image from 'next/image';


// Header UI
const Navbar = styled.nav`
    background-color:#262F36;
    width:100%;
    height:130px;
`;

export const Header = () => {
    return (
        <Navbar>
            <Image src={navimage} priority alt="brandlogo"  style={{width:"130px",height:"110px",margin:'10px',objectFit:'contain'}}/>
        </Navbar>
    )
}






// Footer UI
const FootContainer = styled.footer`
    width:100%;
    height:130px;
    background-color:#262F36;
    @media screen and (min-width:720px){
        position:absolute;
        bottom:0px;
    }
`;

export const Footer = () => {
    return (
        <FootContainer>
        </FootContainer>
    )
}


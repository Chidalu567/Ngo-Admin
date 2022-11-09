import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../images/StripeBranding.jpg';


const Footer = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src={logo} className="flogo"/>
            </ImageContainer>
            <Contact></Contact>
        </Container>
    )
}

export default Footer;


// --------- UI Component -------------
const Container = styled.footer`
    background-color:#262F36;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;
    height: 150px;   /* Height of the footer */
    background: #262F36;
    position:absolute;
    top:850px;
    height:200px;
    @media screen and (max-width:720px){
        width:100%;
    }
`;

const ImageContainer = styled.div`
    margin-top:0px;
`;

const Contact = styled.div``;
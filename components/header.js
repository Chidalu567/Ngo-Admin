import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import navimage from "../images/StripeBranding.jpg";

const Header = () => {
    return (
        <Navbar>
            <Logo>
            <Image src={navimage} alt="SirPhilipLogo" className="logo"/>
            </Logo>
            <Navlist>
                <li>AddPhoto</li>
                <li>Users</li>
                <li>Tracker</li>
                <li>EventUpdate</li>
                <li>Profile</li>
            </Navlist>
            <Avatardiv>
                <h3>C O</h3>
            </Avatardiv>
        </Navbar>
    )
}

export default Header;

// ------- UI design
const Navbar = styled.nav`
    display:flex;
    flex-direction:row;
    height:130px;
    width:100%;
    justify-content:space-between;
    align-items:baseline;
    background-color:#262F36;
`;

const Navlist = styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:50%;
    list-style-type:none;
    & > li {
        color:white;
        font-family:Inter;
        font-size:20px;
        font-weight:bold;

    }
`;

const Avatardiv = styled.div`
    background-color:white;
    text-align:center;
    width:100px;
    padding:30px;
    margin-right:5em;
    border-radius:40px;
    & > h3 {
        color:orange;
    }
`;

const Logo = styled.div`
    margin-left:80px;
`;
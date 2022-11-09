import React, { useState }  from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import navimage from "../images/StripeBranding.jpg";
import { Drawer } from 'antd';


const Header = () => {

    // implement a state to hold the state of the Drawer
    const [isOpen, setIsOpen] = useState(false);

    // function to handle click event from button
    const handleClick = () => {
        setIsOpen(true);
    }

    // function to handle Close event from Drawer
    const handleClose = () => {
        setIsOpen(false);
    }

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
                <Button onClick={handleClick}>C O</Button>
            </Avatardiv>
            <Drawer placement={'bottom'} key={'bottom'} onClose={handleClose} open={isOpen}>
                <h3>AddPhoto</h3>
                <h3>Users</h3>
                <h3>Tracker</h3>
                <h3>EventUpdate</h3>
                <h3>Profile</h3>
            </Drawer>
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
    @media screen and (max-width:820px){
        display:none;
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
    @media screen and (max-width:720px){
        border-radius:25px;
        margin-right:10px;
        width:45px;
        padding:5px;
    }
`;

const Logo = styled.div`
    margin-left:80px;
    @media screen and (max-width:720px){
        margin-left:30px;
    }
`;

const Button = styled.button``;
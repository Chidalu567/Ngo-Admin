import React, { useState,useEffect}  from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import navimage from "../images/StripeBranding.jpg";
import { Drawer } from 'antd';



const Header = () => {

    // implement a state to hold the state of the Drawer
    const [isOpen, setIsOpen] = useState(false);
    const [person, setPerson] = useState({firstInitial:'',lastInitial:''});

    // function to handle click event from button
    const handleClick = () => {
        setIsOpen(true);
    }

    // function to handle Close event from Drawer
    const handleClose = () => {
        setIsOpen(false);
    }

    // useEffect hook to run code on intial render of page
    useEffect(() => {
        const first = localStorage.getItem('staffname').split(',')[0].charAt(0);
        const last = localStorage.getItem('staffname').split(',')[1].charAt(0);
        setPerson({...person,firstInitial:first,lastInitial:last})
    },[])

    return (
        <Navbar>
            <Logo>
                <Image src={navimage} alt="SirPhilipLogo" className="logo" priority/>
            </Logo>
            <Navlist>
                <li>AddPhoto</li>
                <li>Users</li>
                <li>Tracker</li>
                <li>EventUpdate</li>
                <li>Profile</li>
            </Navlist>
            <Avatardiv>
                <Button onClick={handleClick}>{person.firstInitial + " " + person.lastInitial}</Button>
            </Avatardiv>
            <Drawer placement={'bottom'} key={'bottom'} onClose={handleClose} open={isOpen}>
                <h3>AddPhoto</h3>
                <h3>Users</h3>
                <h3>Tracker</h3>
                <h3>EventUpdate</h3>
                <h3>Profile</h3>
                <h3><Link href='/admin_login'>Login into another account</Link></h3>
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



const Logo = styled.div`
    margin-left:80px;
    @media screen and (max-width:720px){
        margin-left:30px;
    }
`;

const Button = styled.button`
    background-color:white;
    padding:20px;
    border-radius:30px;
    color: orange;
`;

const Avatardiv = styled.div`
    margin-right:20px;
`;
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
    BsBriefcase,
    // BsClipboardData,
    BsChatSquareText,
} from "react-icons/bs";

function NavBar() {
    return (
        <MainContainer>
            <NavIcon to="home" activeClass="active" smooth={true} spy={true}>
                <BiHomeAlt className="icon" />
            </NavIcon>
            <NavIcon to="about" activeClass="active" smooth={true} spy={true}>
                <BiUser className="icon" />
            </NavIcon>
            {/* <NavIcon
                to="services"
                activeClass="active"
                smooth={true}
                spy={true}
            >
                <BsClipboardData className="icon" />
            </NavIcon> */}
            <NavIcon to="work" activeClass="active" smooth={true} spy={true}>
                <BsBriefcase className="icon" />
            </NavIcon>
            <NavIcon to="contact" activeClass="active" smooth={true} spy={true}>
                <BsChatSquareText className="icon" />
            </NavIcon>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    position: fixed;
    width: 70px;
    border-radius: 30px;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
    background-color: #838996;
    padding: 25px 20px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: center;
`;
const NavIcon = styled(Link)`
    cursor: pointer;
    display: inline-block;
    padding: 10px;
    border-radius: 50%;
    overflow: hidden;
    & .icon {
        font-size: 22px;
    }
    &.active {
        border: 2px solid #000;
    }
`;
export default NavBar;

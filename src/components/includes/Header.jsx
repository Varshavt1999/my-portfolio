import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

function Header({ inView }) {
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: { delay: 0.2, type: "tween" },
            });
        } else {
            animation.start({
                y: -100,
                opacity: 0,
            });
        }
    }, [inView]);
    return (
        <MainContainer
            // initial={{ y: -100, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ delay: 0.2, type: "tween" }}
            animate={animation}
        >
            <Logo href="#">V</Logo>
            <Button>Work with me</Button>
        </MainContainer>
    );
}

const MainContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 50px;
    background-color: #838996;
`;
const Logo = styled.a`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
`;
const Button = styled.div`
    width: 140px;
    height: auto;
    transition: 0.5s linear;
    overflow: hidden;
    padding: 15px;
    text-align: center;
    background: transparent;
    background-color: #c7c7c7;
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    &:before {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        height: 4px;
        width: 100%;
        border-bottom: 4px solid transparent;
        border-left: 4px solid transparent;
        box-sizing: border-box;
        transform: translateX(100%);
    }
    &:after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        border-top: 4px solid transparent;
        border-right: 4px solid transparent;
        box-sizing: border-box;
        transform: translateX(-100%);
    }
    &:hover {
        &:before {
            border-color: #4c516d;
            height: 100%;
            transform: translateX(0);
            transition: 0.3s transform linear, 0.3s height linear 0.3s;
        }
        &:after {
            border-color: #4c516d;
            height: 100%;
            transform: translateX(0);
            transition: 0.3s transform linear, 0.3s height linear 0.5s;
        }
    }
`;
export default Header;

import React from "react";
import styled from "styled-components";
import Header from "../includes/Header";
import NavBar from "../includes/NavBar";
import Spotlight from "../includes/Spotlight";
import { useInView } from "react-intersection-observer";

function Home() {
    const { ref, inView } = useInView();
    return (
        <MainContainer id="home">
            <Top ref={ref}>
                <Header inView={inView} />
            </Top>
            <Bottom>
                <NavBar />
                <div className="wrapper">
                    <Spotlight />
                </div>
            </Bottom>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 12vh 88vh;
    & .wrapper {
        height: 100%;
    }
`;
const Top = styled.div``;
const Bottom = styled.div``;
export default Home;

import React, { useEffect } from "react";
import styled from "styled-components";
// images
import Smiley from "../../assets/images/smiley.png";
function Alert({ setSendSuccessfull, sendSuccessfull }) {
    useEffect(() => {
        setTimeout(() => {
            setSendSuccessfull({
                state: false,
            });
        }, 3000);
    }, [sendSuccessfull]);

    return (
        <MainContainer
            colorState={
                sendSuccessfull?.message === "Your Email Was Send Successfully!"
                    ? true
                    : false
            }
        >
            {sendSuccessfull.message}
            {sendSuccessfull?.message ===
                "Your Email Was Send Successfully!" && (
                <ImageBox>
                    <img src={Smiley} alt="emoji" />
                </ImageBox>
            )}
        </MainContainer>
    );
}
const MainContainer = styled.div`
    padding: 20px;
    background-color: #000;
    color: ${({ colorState }) => (colorState ? "green" : "red")};
    position: fixed;
    top: 50px;
    left: 50%;
    font-size: 16px;
    border-radius: 8px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
const ImageBox = styled.div`
    width: 25px;
`;
export default Alert;

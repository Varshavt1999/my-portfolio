import React from "react";
import styled from "styled-components";
import { fadeIn } from "../../../src/helpers/Variants";
import { motion } from "framer-motion";
// images
import Profile from "../../assets/images/varsha.png";
// icons
import { BiAward } from "react-icons/bi";
// import { BiDownload } from "react-icons/bi";
function About() {
    return (
        <MainContainer id="about">
            <div className="wrapper">
                <Title>About Me</Title>
                <Content>
                    <Left
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <Image>
                            <img src={Profile} alt="profile" />
                        </Image>
                    </Left>
                    <Right
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <Achievements>
                            <Achievement>
                                <AchievementIcon>
                                    <BiAward className="award" />
                                </AchievementIcon>
                                <AchievementTitle>Experience</AchievementTitle>
                                <Details>1 year working</Details>
                            </Achievement>
                        </Achievements>
                        <Description>
                            <p>
                                I enjoy creating things that live on the
                                internet. Being in web development industry for
                                over 1 year, i'm always motivated to do more.
                            </p>
                            <p>
                                Hello! , My name is Varsha , Iam a Frontend
                                developer with a Bachelors degree in Electronics
                                and Communication .
                            </p>
                            <p>
                                My top priority is to get your bussiness online
                                the right way, giving you industry-standard
                                design and all the functionality you need to
                                operate smoothly online.
                            </p>
                        </Description>
                        {/* <SendBtn>
                            <span>Download Resume</span>
                            <BiDownload className="download" />
                        </SendBtn> */}
                    </Right>
                </Content>
            </div>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    height: 100vh;
    padding: 80px 0;
    & .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`;
const Title = styled.h3`
    text-align: center;
    font-size: 34px;
    font-family: "dm_sansbold";
    margin-bottom: 60px;
`;
const Content = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
`;
const Left = styled(motion.div)`
    width: 45%;
    display: flex;
    justify-content: center;
`;
const Image = styled.div`
    width: 270px;
`;
const Right = styled(motion.div)`
    width: 38%;
`;
const Achievements = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 20px;
`;
const Achievement = styled.div`
    border: 1px solid #838996;
    border-radius: 8px;
    padding: 15px 10px;
    text-align: center;
`;
const AchievementIcon = styled.div`
    width: fit-content;
    margin: 0 auto 5px;
    & .award {
        font-size: 20px;
        color: #595858;
    }
`;
const AchievementTitle = styled.h5`
    font-size: 16px;
    font-family: "dm_sansbold";
    margin-bottom: 5px;
    color: #595858;
`;
const Details = styled.p`
    font-size: 14px;
    color: #838996;
`;
const Description = styled.div`
    font-size: 16px;
    line-height: 1.4;
    color: #6f7176;
    margin-bottom: 30px;
    & p {
        margin-bottom: 10px;
    }
    & p:last-child {
        margin-bottom: 0;
    }
`;
// const SendBtn = styled.button`
//     padding: 15px;
//     border-radius: 8px;
//     border: 3px solid #838996;
//     font-family: "dm_sansmedium";
//     color: #515760;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     margin-bottom: 30px;
//     & span {
//         margin-right: 10px;
//         font-size: 16px;
//     }
//     & .download {
//         transition: all 0.3s ease-in;
//         font-size: 20px;
//     }
//     &:hover {
//         background-color: #838996;
//         border-color: transparent;
//         color: #000;
//         & .send {
//             transform: rotate(0deg);
//             transition: all 0.3s ease-in;
//         }
//     }
// `;
export default About;

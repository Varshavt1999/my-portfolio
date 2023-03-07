import React, { useEffect } from "react";
import styled from "styled-components";
// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
// images
import Profile from "../../assets/images/varsha.png";
// type animation
import { TypeAnimation } from "react-type-animation";
// animation
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

import { fadeIn } from "../../../src/helpers/Variants";

function Spotlight() {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: { delay: 1.5, duration: 1 },
            });
        } else {
            animation.start({
                opacity: 0,
            });
        }
    }, [inView, animation]);

    return (
        <MainContainer>
            <Left
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
            >
                <Name>Varsha V T</Name>
                <Designation>
                    <InitialText>Iam a</InitialText>
                    <MainText>
                        <TypeAnimation
                            sequence={[
                                "Software Engineer",
                                2000,
                                "Front End Developer",
                                2000,
                                "React Js Developer",
                                2000,
                            ]}
                            wrapper="div"
                            speed={50}
                            cursor={true}
                            repeat={Infinity}
                            style={{
                                fontSize: "30px",
                                fontFamily: "dm_sansbold",
                            }}
                        />
                    </MainText>
                </Designation>
                <Skills>HTML . CSS . JavaScript . ReactJS</Skills>
                <Description>
                    Experienced Software Engineer with expertise in Javascript
                    and react Js. Skilled in writing clean and maintainable
                    code, with a focus on delivering efficient solutions that
                    meet bussiness requirements
                </Description>
                <SendBtn>
                    <span>Say Hello</span>
                    <FiSend className="send" />
                </SendBtn>
                <SocialMedia>
                    <Media href="https://github.com/Varshavt1999">
                        <FaGithub className="media" />
                    </Media>
                    <Media href="https://www.linkedin.com/in/varsha-v-t/">
                        <FaLinkedin className="media" />
                    </Media>
                    {/* <Media href="#">
                        <FaInstagramSquare className="media" />
                    </Media> */}
                </SocialMedia>
            </Left>
            <Right ref={ref}>
                <Image
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ delay: 1.5, duration: 1 }}
                    // ------------
                    variants={fadeIn("down", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    // animate={animation}
                >
                    <img src={Profile} alt="profile" />
                </Image>
            </Right>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 100px;
    height: 100%;
`;
const Left = styled(motion.div)`
    width: 45%;
`;
const Name = styled.h3`
    font-size: 28px;
    font-family: "dm_sansbold";
`;
const Designation = styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-bottom: 20px;
`;
const InitialText = styled.div`
    font-size: 20px;
    color: #595858;
`;
const MainText = styled.div``;
const Skills = styled.div`
    font-size: 18px;
    color: #595858;
    margin-bottom: 20px;
    font-family: "dm_sansbold";
`;
const Description = styled.p`
    font-size: 16px;
    color: #6f7176;
    line-height: 1.4;
    margin-bottom: 30px;
`;
const SendBtn = styled.button`
    padding: 15px;
    border-radius: 8px;
    border: 3px solid #838996;
    font-family: "dm_sansmedium";
    color: #515760;
    cursor: pointer;
    margin-bottom: 30px;
    & span {
        margin-right: 10px;
        font-size: 16px;
    }
    & .send {
        transform: rotate(45deg);
        transition: all 0.3s ease-in;
    }
    &:hover {
        background-color: #838996;
        border-color: transparent;
        color: #000;
        & .send {
            transform: rotate(0deg);
            transition: all 0.3s ease-in;
        }
    }
`;
const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;
const Media = styled.a`
    cursor: pointer;
    & .media {
        font-size: 20px;
    }
`;
const Right = styled.div`
    width: 45%;
`;
const Image = styled(motion.div)`
    width: 350px;
    height: 400px;
    border-radius: 80px;
    overflow: hidden;
    & img {
        object-fit: cover;
    }
`;
export default Spotlight;

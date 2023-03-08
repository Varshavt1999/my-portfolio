import React from "react";
import styled from "styled-components";
import { fadeIn } from "../../../src/helpers/Variants";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
// images
import Guester from "../../assets/images/guester.png";
import RealEstate from "../../assets/images/real-estate.png";
import BudgetCalc from "../../assets/images/budget-calculator.png";
import Coffe from "../../assets/images/coffe-website.png";
import HeartTrail from "../../assets/images/heart-trail-animation.png";
import RandomColor from "../../assets/images/random-color-generator.png";
import Github from "../../assets/images/github.png";
import Web from "../../assets/images/web.png";

function Project() {
    const projects = [
        {
            id: 1,
            img: Guester,
            heading: "Guester",
            siteLink: "https://guester-app.talrop.works/",
            technologies: [
                "React",
                "Styled-components",
                "REST API",
                "Context API",
                "Authentication",
                "Geo Location",
                "React Hooks",
                "Router",
            ],
            description:
                "This application provides all the information about the best affordable and delectable food around us.",
        },
        {
            id: 2,
            img: RealEstate,
            heading: "Real Estate",
            github: "https://github.com/Varshavt1999/react-real-estate",
            siteLink: "https://realestatevarshavt.netlify.app",
            technologies: ["React", "Styled-components"],
            description: "Real Estate ui project",
        },
        {
            id: 3,
            img: BudgetCalc,
            heading: "Budget Calculator",
            github: "https://github.com/Varshavt1999/budget-calculator",
            siteLink: "https://varshavt-budget-calculator.netlify.app",
            technologies: ["React", "Styled-components", "React Hooks"],
            description: "Budget Calculator using react",
        },
        {
            id: 4,
            img: HeartTrail,
            heading: "Heart Trail Animation",
            github: "https://github.com/Varshavt1999/heart-trail-animation",
            siteLink: "https://heart-trailanimation.netlify.app",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "Heart Animation based on cursor movement using js",
        },
        {
            id: 5,
            img: RandomColor,
            heading: "Random color generator",
            github: "https://github.com/Varshavt1999/Random-color-generator",
            siteLink: "https://varshavt-random-color-generator.netlify.app",
            technologies: ["HTML", "CSS", "JavaScript"],
            description:
                "Random color generator on page load using html,css and js",
        },
        {
            id: 6,
            img: Coffe,
            heading: "Coffe website",
            github: "https://github.com/Varshavt1999/coffee-website",
            siteLink: "https://varshavt-coffee-website.netlify.app",
            technologies: ["HTML", "CSS"],
            description: "Responsive Coffe website ui using html css",
        },
    ];
    return (
        <MainContainer id="work">
            <div className="wrapper">
                <Title>My works</Title>
                <List>
                    <Swiper
                        spaceBetween={30}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper"
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <Item>
                                    <Image>
                                        <img src={project.img} alt="work" />
                                    </Image>
                                    <Details className="details">
                                        <Technologies>
                                            {project.technologies.map(
                                                (technology, index) => (
                                                    <Technology key={index}>
                                                        {technology}
                                                    </Technology>
                                                )
                                            )}
                                        </Technologies>
                                        <Heading>{project.heading}</Heading>
                                        <Description>
                                            {project.description}
                                        </Description>
                                        <SiteLinks className="site-links">
                                            {project.github && (
                                                <SiteLink
                                                    href={project.github}
                                                    target="_blank"
                                                >
                                                    <SiteImg>
                                                        <img
                                                            src={Github}
                                                            alt="github"
                                                        />
                                                    </SiteImg>
                                                </SiteLink>
                                            )}
                                            <SiteLink
                                                href={project.siteLink}
                                                target="_blank"
                                            >
                                                <SiteImg>
                                                    <img src={Web} alt="web" />
                                                </SiteImg>
                                            </SiteLink>
                                        </SiteLinks>
                                    </Details>
                                </Item>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* {projects.map((project, index) => (
                        <Item
                            variants={fadeIn("up", 0.3 * (index + 1))}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            key={project.id}
                        >
                            <Image>
                                <img src={project.img} alt="work" />
                            </Image>
                            <Details className="details">
                                <Heading>{project.heading}</Heading>
                                <Description>{project.description}</Description>
                                <SiteLinks className="site-links">
                                    {project.github && (
                                        <SiteLink
                                            href={project.github}
                                            target="_blank"
                                        >
                                            <SiteImg>
                                                <img
                                                    src={Github}
                                                    alt="github"
                                                />
                                            </SiteImg>
                                        </SiteLink>
                                    )}
                                    <SiteLink
                                        href={project.siteLink}
                                        target="_blank"
                                    >
                                        <SiteImg>
                                            <img src={Web} alt="web" />
                                        </SiteImg>
                                    </SiteLink>
                                </SiteLinks>
                            </Details>
                        </Item>
                    ))} */}
                </List>
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
const List = styled.div`
    height: 100%;
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    padding: 0 30px; */
`;
const Item = styled.div`
    border-radius: 8px;
    overflow: hidden;
    height: 500px;
    width: 80%;
    margin: 0 auto;
    border: 5px solid #838996;
    position: relative;
    cursor: pointer;
    &:hover {
        & .details {
            bottom: 0;
            transition: all 0.3s ease-in;
        }
    }
`;
const Image = styled.div`
    border-radius: 8px;
    overflow: hidden;
    height: 100%;
    & img {
        object-fit: cover;
        height: 100%;
    }
`;
const Details = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(14, 11, 12, 0.8);
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: -100%;
    padding: 20px;
    transition: all 0.3s ease-in;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    text-align: center;
`;
const Technologies = styled.div`
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const Technology = styled.div`
    width: fit-content;
    padding: 10px;
    border-radius: 4px;
    color: #000;
    font-size: 14px;
    background-color: #c7c7c7;
    font-family: "dm_sansbold";
`;
const Heading = styled.h4`
    font-size: 22px;
    font-family: "dm_sansbold";
`;
const Description = styled.p`
    font-size: 16px;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;
`;
const SiteLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;
const SiteLink = styled.a`
    padding: 5px;
    border-radius: 4px;
    background-color: #fff;
`;
const SiteImg = styled.a`
    display: inline-block;
    cursor: pointer;
    width: 20px;
    height: 20px;
`;
export default Project;

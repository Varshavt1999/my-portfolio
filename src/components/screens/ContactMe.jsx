import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/helpers/Variants";
import emailjs from "@emailjs/browser";
// icons
import { FiSend } from "react-icons/fi";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import Alert from "../includes/Alert";

function ContactMe() {
    const [formState, setformState] = useState({
        user_name: "",
        from_name: "",
        message: "",
    });
    const [sendSuccessfull, setSendSuccessfull] = useState({
        state: false,
        message: "",
    });
    const changeHandler = (e) => {
        setformState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };
    // send email
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_rheobtk",
                "template_v2pt08h",
                form.current,
                "PBW0LFU-Qnyp1ks7n"
            )
            .then(
                (result) => {
                    if (
                        formState.user_name === "" ||
                        formState.from_name === "" ||
                        formState.message === ""
                    ) {
                        setSendSuccessfull({
                            state: true,
                            message: "All fileds are required",
                        });
                    } else {
                        e.target.reset();
                        setSendSuccessfull({
                            state: true,
                            message: "Your Email Was Send Successfully!",
                        });
                        setformState({
                            user_name: "",
                            from_name: "",
                            message: "",
                        });
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <MainContainer id="contact">
            {sendSuccessfull.state && (
                <Alert
                    setSendSuccessfull={setSendSuccessfull}
                    sendSuccessfull={sendSuccessfull}
                />
            )}
            <div className="wrapper">
                <Content
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <Title>Get in Touch</Title>
                    <SubTitle>Let's Work Together!</SubTitle>
                </Content>
                <FormContainer
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <Text>
                        Write me a Message{" "}
                        <BsFillHandIndexThumbFill className="hand-icon" />
                    </Text>
                    <Form ref={form} onSubmit={(e) => sendEmail(e)}>
                        <InputField>
                            <Label>Your Name</Label>
                            <Input
                                type="text"
                                placeholder="Enter your name"
                                name="user_name"
                                value={formState.user_name || ""}
                                onChange={(e) => changeHandler(e)}
                            />
                        </InputField>
                        <InputField>
                            <Label>Your Email</Label>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                name="from_name"
                                value={formState.from_name || ""}
                                onChange={(e) => changeHandler(e)}
                            />
                        </InputField>
                        <InputField>
                            <Label>Your Message</Label>
                            <TextArea
                                cols={"100%"}
                                rows={4}
                                placeholder="Enter your message"
                                name="message"
                                value={formState.message || ""}
                                onChange={(e) => changeHandler(e)}
                            />
                        </InputField>
                        <SubmitBtn type="submit">
                            <span>Send Message</span>
                            <FiSend className="send" />
                        </SubmitBtn>
                    </Form>
                </FormContainer>
            </div>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    height: 100vh;
    padding: 60px;
    & .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 30px;
    }
`;
const Content = styled(motion.div)`
    width: 45%;
    text-align: center;
`;
const Title = styled.h3`
    font-size: 36px;
    font-family: "dm_sansbold";
    margin-bottom: 5px;
`;
const SubTitle = styled.div`
    font-size: 28px;
    font-family: "dm_sansmedium";
    color: #515760;
`;
const FormContainer = styled(motion.div)`
    width: 45%;
`;
const Text = styled.h4`
    font-size: 16px;
    color: #515760;
    margin-bottom: 5px;
    & .hand-icon {
        transform: rotate(180deg);
    }
`;
const Form = styled.form`
    border: 2px solid #838996;
    border-radius: 8px;
    padding: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
const InputField = styled.div`
    border-bottom: 2px solid #838996;
`;
const Label = styled.label`
    display: block;
    font-family: "dm_sansmedium";
    font-size: 16px;
    color: #515760;
`;
const Input = styled.input`
    padding: 5px 10px 10px 0;
    font-family: "dm_sansregular";
    font-size: 14px;
    background-color: #c7c7c7 !important;
    /* background-color: transparent !important; */
`;
const TextArea = styled.textarea`
    padding: 5px 10px 10px 0;
    font-family: "dm_sansregular";
    font-size: 14px;
    width: 100%;
`;
const SubmitBtn = styled.button`
    padding: 10px;
    border-radius: 8px;
    border: 3px solid #838996;
    font-family: "dm_sansmedium";
    color: #515760;
    cursor: pointer;
    width: fit-content;
    display: inline-block;
    margin: 20px auto 0;
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
export default ContactMe;

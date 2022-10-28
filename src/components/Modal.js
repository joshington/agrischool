import React from "react";
import styled from "styled-components";
import ButtonWithInput from "./Button";




const Modal = () => {
    return(
        <Container>
            <h3>Welcome to AgriSchool.</h3> 
            <h4>"Mentoring the Next Farmers"</h4>
            <h5>Subscribe to receive early access</h5>
            <ButtonWithInput />
            <SubscriButton />
        </Container>
    )
}


const Container = styled.div`
    background-color:white;
    border-radius:10px;
    height:350px;
    left:300px;
    top:30px;
    padding:10px 50px;
    width:50%;
    position:absolute;
    align-self:center;
    h3{
        font-size:50px;
        text-align:center;
        color:#524A4E;
        margin-bottom:3px;
    }
    h4{
        margin-top:0px;
        text-align:center;
        font-size:23px;
    }
    h5{
        font-size:20px;
        margin-bottom:0px;
        text-align:center;
        color:green;
    }

`;

const SubscriButton = () => {
    return (
        <SubContainer>
            <h2>Subscribe</h2>
        </SubContainer>
    )
}

const SubContainer = styled.button`
margin-left:130px;
    margin-top:8px;
    background-color:blue;
    height:40px;
    width:60%;
    border-radius:10px;
    border-color:blue;
    align-items:center;
    h2{
        margin-bottom:8px;
        color:white;
        &::hover{
            cursor:pointer;
        }
    }
`;

export default Modal;
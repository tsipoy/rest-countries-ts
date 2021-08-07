import React from 'react';
import styled from "styled-components";
import moonLine from "../assets/moon-line.svg"

type Props = {
    title: string;
    label: string;
}

const Header = ({ title = "", label= ""}: Props) => {

    return (
        <HeaderContainer>
            <Heading>{title}</Heading>
            <ModeButton>{label}</ModeButton>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div `
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-block-end: 50px;
    margin-inline: -40px;
    padding-inline: 40px;
    box-shadow: 0px 2px 3px #e5e5e5;
`;
const Heading = styled.h1 ``;
const ModeButton = styled.button `
    background-color: transparent;
    background-image: url('${moonLine}');
    background-repeat: no-repeat;
    background-size: 20%;
    background-position-y: 50%;
    padding-block-end: 10px;
    padding-block-start: 10px;
    padding-inline-start: 31px;
    cursor: pointer;
    border: none;
`;



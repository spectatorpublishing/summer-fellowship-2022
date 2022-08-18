import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    border: none;
    background: transparent;
    display: flex;
    flex-direction: row;
    margin: 2rem 0rem 0rem 0rem;
    padding-bottom: 2rem;

    @media only screen and (max-width: 1160px){
        font-size: 16px;
        flex-direction: row-reverse;
    }
`

const Image = styled.div`
    background-image: url("https://womenshistorymonth2021.s3.amazonaws.com/File_005.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 40rem;
    height: 20rem;
    margin: 0rem auto 0rem 5rem;

    @media only screen and (max-width: 1470px){
        width: 30rem;
        height: 20rem;
        margin: 0rem 5rem 0rem 5rem;
    }
    
    @media only screen and (max-width: 1272px){
        width: 30rem;
        height: 20rem;
        margin: 0rem;
    }
    
    @media only screen and (max-width: 1160px){
        background-image: none;
        width: 0rem;
        height: 0rem;
    }
`;

const Body = styled.div`
    border: none;
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-left:2rem;

    :hover{
        background: rgba(255, 255, 255, 0.75);
    }
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
    margin-left: auto;
    font-size: 24px;
    color: #000000;

    @media only screen and (max-width: 750px){
        font-size: 16px;
    }
`

const NextText = styled.div`
    font-family: Prata;
    display: flex;
    text-align: right;
    text-transform: uppercase;
`

const Begin = styled.div`
    font-family: Khula;
`

const Img = styled.div`
    margin: 2.188rem 3rem 2.188rem 3rem;

    @media only screen and (max-width: 750px){
        margin: 1rem 2rem 1rem 1rem;
    }
`

const Photo = styled.img`
    width: 18.938rem;
    height: 12.528rem;

    @media only screen and (max-width: 750px){
        width: 8rem;
        height: auto;
    }
`


const NextSection = ( {nextseclink, nextsec, image} ) => ( //add image prop if needed, currently calling from file
    <Wrapper>
        <Image/>
        <Link to={nextseclink} style={{ textDecoration: 'none' }}>
        <Body>
            <TextBox>
                <NextText>{nextsec}</NextText>
                <Begin>Read Next Section:</Begin>
            </TextBox>
            <Img>
                <Photo src="https://womenshistorymonth2021.s3.amazonaws.com/New+3_5.PNG" />
            </Img>
        </Body>
        </Link>
    </Wrapper>
);

export default NextSection;
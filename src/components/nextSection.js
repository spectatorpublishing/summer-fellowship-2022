import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Wrapper = styled.div`
    border: none;
    background: transparent;
    display: flex;
    flex-direction: row;
    margin: 2rem 0rem 0rem auto;
    padding-bottom: 2rem;

    a {
        margin-left: auto;
    }

    @media only screen and (max-width: 1160px){
        font-size: 16px;
        flex-direction: row-reverse;
    }
`

const Body = styled.div`
    border: none;
    display: flex;
    align-items: center;
    padding-left:2rem;

    :hover{
        background: rgba(255, 255, 255, 0.75);
    }

    @media only screen and (max-width: 750px){
        background: rgba(255, 255, 255, 0.75);
        margin-left: 1rem;
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
    font-family: 'Nothing You Could Do';
    display: flex;
    text-align: right;
    font-size: 30px;

    @media only screen and (max-width: 750px){
        font-size: 20px;
    }
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
        <HashLink to={nextseclink} style={{ textDecoration: 'none' }}>
        <Body>
            <TextBox>
                <NextText>{nextsec}</NextText>
                <Begin>Read Next Section:</Begin>
            </TextBox>
            <Img>
                <Photo src="https://womenshistorymonth2021.s3.amazonaws.com/New+3_5.PNG" />
            </Img>
        </Body>
        </HashLink>
    </Wrapper>
);

export default NextSection;
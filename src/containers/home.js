import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import image from '../components/images/primaryImage.png'
import Letter from '../components/editorLetter';
import NextSection from '../components/nextSection';
import Banner from '../components/titleBanner';
import Credits from './credits';

const HomeContainer = styled.div`
    margin-bottom: 5rem;

    @media only screen and (max-width: 768px){
        margin-bottom: 0rem;
    }
`;

const CreditsTitle = styled.div`
    align-items:center;
    font-family: Prata;
    font-size: 2.25rem;
    text-transform: uppercase;
    text-align: center;
    margin: 0rem 5rem 0rem 5rem;

    @media only screen and (max-width: 750px) {
        text-align: center;
        margin: 1rem 0rem 2rem 0rem;
        font-size: 25px;
    }

    @media only screen and (max-width: 425px) {
        text-align: center;
        margin: 1rem 0rem 2rem 0rem;
        font-size: 20px;
    }
`;

const Padding = styled.div`
    height: 7rem;

    @media only screen and (max-width: 768px){
        height: 4rem;
    }
`

const Home = ({next, nextLink, setSection}) => {

    return (
        <>
            <HomeContainer>
                <Banner />
                <Letter />
                <NextSection setSection={() => setSection(next)} nextseclink={nextLink} nextsec={next} image={image}></NextSection>
            </HomeContainer>
            <Padding id="credits"/>
            <CreditsTitle>Credits</CreditsTitle>
            <Credits />
        </>
    )
};

export default Home;
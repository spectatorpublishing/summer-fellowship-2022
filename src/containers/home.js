import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import image from '../components/images/primaryImage.png'
import Letter from '../components/editorLetter';
import NextSection from '../components/nextSection';
import Banner from '../components/titleBanner';
import Credits from './credits';

const HomeContainer = styled.div`

`;

const Home = ({creditsRef, goToCredits}) => {

    return (
        <HomeContainer>
            <button onClick={goToCredits}>scroll To Credits</button>
            <Banner />
            <Letter />
            <NextSection nextseclink='/news' nextsec='News' image={image}></NextSection>
            <div ref={creditsRef}>
                <Credits />
            </div>
            
        </HomeContainer>
    )
};

export default Home;
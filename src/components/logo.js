import React from 'react';
import styled from 'styled-components';
import logo from '../assets/spectator-logo.svg';

const Logo = ({lightLogo}) => {
    return (
            <Wrapper href="https://www.columbiaspectator.com/">
                {lightLogo ? <img src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png" alt="Columbia Spectator Logo"></img> :
                <img src="https://cds-archives.s3.amazonaws.com/pb/resources/img/spectator-logo.png" alt="Columbia Spectator Logo"></img>}
            </Wrapper>
    );
};

export default Logo;

const Wrapper = styled.a`
    margin: 0rem;
    padding: 0rem 0rem 0rem 3rem;
    display: block;
    height: 1.5rem;

    img {
        height: 1.5rem;
    }

    @media only screen and (max-width: 1023px){
        padding: 0rem 0rem 0rem 1rem;
        margin: auto 1rem auto 1rem;
        height: 1.25rem;
        
        img {
            height: 1.25rem;
        }
    }
`;
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
    padding: 1rem 0rem 0rem 3rem;
    img {
        width: 12rem;
    }

    @media only screen and (max-width: 1070px){
        padding: 1rem 0rem 0rem 1rem;
        margin: 0rem 1rem 0rem 1rem;
    }
`;
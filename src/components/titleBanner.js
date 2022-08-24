import React from 'react';
import styled from 'styled-components/macro';
import theme from '../theme';

const Banner = () => (
    <Wrapper>
        <Section className='left'>
            <Row className='left'><Text className='left'>SSFP</Text></Row>
        </Section>
        <Section className='right'>
            <Row className='right'><Text className='right'>Spectator Summer</Text></Row>
            <Row className='right'><Text className='right'>Fellowship Program</Text></Row>
        </Section>
    </Wrapper>
);

export default Banner;

const Wrapper = styled.div`
    height: 25rem;
    background-image: url("https://summer-fellowship-2022.s3.amazonaws.com/mainImage.jpeg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 4rem 0rem 5rem 0rem;
    top: 0;

    @media only screen and (max-width: 768px) {
        height: 30rem;
        padding: 0rem 0rem 5rem 0rem;
        margin: 1.2rem;
        background-image: url("https://summer-fellowship-2022.s3.amazonaws.com/mainImage+copy.jpeg");
    }

    @media only screen and (max-width: 430px) {
        height: 20rem;
        padding: 1.3rem 0rem 2rem 0rem;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;

    &.right{
        margin-top: 12rem;
    }

    &.left{
        margin-bottom: 10rem;
    }

    @media only screen and (max-width: 768px) {

        &.right{
            margin-top: 22rem;
        }

        &.left{
            margin-bottom: 0rem;
        }
    }

    @media only screen and (max-width: 570px) {

        &.right{
            margin-top: 20rem;
            margin-bottom: 5rem;
        }

        &.left{
            margin-top: 0rem;
            margin-bottom: 10rem;
        }
    }

    @media only screen and (max-width: 430px) {

        &.right{
            margin-top: 10rem;
            margin-bottom: 0rem;
        }

        &.left{
            margin-bottom: 0rem;
        }
    }
`;

const Text = styled.div`
    font-family: 'Nothing You Could Do';
    font-weight: 800;
    color: ${theme.colors.white};
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    transform: rotate(-10deg);

    &.left{
        text-align: right;
        margin-left: auto;
        margin-right: 1.5rem;
        font-size: 64px;
    }

    &.right{
        align-self: flex-end;
        text-align: left;
        margin-right: auto;
        margin-left: 1.5rem;
        font-size: 50px;
    }

    @media only screen and (max-width: 768px) {
        &.left{
            font-size: 50px;
        }
    
        &.right{
            font-size: 40px;
        }
    }

    @media only screen and (max-width: 570px) {
        &.left{
            font-size: 45px;
        }
    
        &.right{
            font-size: 35px;
        }
    }

    @media only screen and (max-width: 430px) {
        margin-top: 0.2rem;
        margin-bottom: 0rem;

        &.left{
            margin-right: 1rem;
            font-size: 40px;
        }
    
        &.right{
            margin-left: 1rem;
            font-size: 30px;
        }
    }
`;

const Row = styled.div`
    &.left{
        margin-right: auto;
        width: 20rem;
        margin-bottom: 11px; 
    }

    &.right{
        margin-left: auto;
        width: 35rem;
        margin-bottom: 5px; 
    }

    @media only screen and (max-width: 768px) {
        &.left{
            width: 10rem;
        }
    
        &.right{
            width: 26rem;
        }
    }

    @media only screen and (max-width: 570px) {
        &.left{
            width: 8rem;
        }
    
        &.right{
            width: 22rem;
        }
    }

    @media only screen and (max-width: 430px) {
        &.left{
            width: 6rem;
        }
    
        &.right{
            width: 18rem;
        }
    }
`;
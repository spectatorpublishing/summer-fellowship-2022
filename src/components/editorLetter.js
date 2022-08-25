import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Letter = () => (
    <Wrapper>
        <Title>Letter From The Directors</Title>
        <Text>
            <p>Dear readers, </p>
            <p>The first Spectator Summer Fellowship Program, held during the summer of 2020, arose as a response to the pandemic, which had brought the world to a standstill. With regular life suspended, Spectator launched SSFP as a way to simultaneously document the drastic changes that had transformed daily life and invite the participation of incoming Columbia students who might have faced accessibility barriers to joining Spectator.</p>
            <p>That cohort’s success can be seen not just in the quality of the content it produced, but in the  composition of Spectator’s current leaders. Many of the 2020 SSFP fellows now hold managing and deputy board positions at Spectator.</p>
            <p>While our lives may be less affected by the pandemic now than they were two years ago, we launched SSFP 2022 this year with a similar objective as its first iteration: to get incoming students excited about and involved with Spectator before stepping onto campus.</p>
            <p>During this program, we welcomed 56 incoming undergraduates, including transfer and dual-degree students, from around the world to embark on a two-part journey. For the first seven days, fellows engaged with 19 staff-led workshops introducing them to the fundamentals of journalism and the work of nearly every Spectator section. These online workshops were offered both synchronously and asynchronously to accommodate fellows’ time zones and other personal circumstances. For the remainder of the program, each fellow was assigned a mentor from current Spectator staff, who walked them through the creation of their first articles, videos, graphics, and illustrations.</p>
            <p>This edition is the culmination of those projects. It has blown our expectations out of the water.</p>
            <p>We’ve been impressed by our fellows’ engagement and depth of thought as they’ve grappled with the challenging concepts that comprise journalism, many of which have been novel to them. We’re also incredibly grateful for all of the wonderful Spectator staffers who have produced robust workshops, provided quality mentorship, and created this webpage you’re reading now—many while simultaneously working full-time jobs or internships.</p>
            <p>We have no doubt that this creative, empathetic, and energetic fellowship class has the potential to become part of the next generation of great journalists, engineers, and business leaders.</p>
            <p>With all our very best,</p>
        </Text>
        <Signatures>
            <Signature className='left'><div className='name'>Irie Sentner</div><div className='title'>University News Editor</div></Signature>
            <Spacing/>
            <Signature><div className='name'>Derek Ng</div><div className='title'>Managing Editor of The Eye</div></Signature>
        </Signatures>
        <Signature><div className="bold">SSFP Co-Directors</div></Signature>
    </Wrapper>
);

export default Letter;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem 2rem 0rem 2rem;
    padding: 2rem 8rem 0rem 8rem;
    color: ${theme.colors.white};

    @media only screen and (max-width: 1200px){
        padding: 2rem 6rem 0rem 6rem;
    }
    @media only screen and (max-width: 1000px){
        padding: 2rem 4rem 0rem 4rem;
    }
    @media only screen and (max-width: 768px){
        padding: 2rem 1rem 0rem 1rem;
    }
    @media only screen and (max-width: 570px) {
        margin: 2rem 2rem 0rem 2rem;
    }
    @media only screen and (max-width: 400px){
        padding: 0;
    }`;

const Title = styled.div`
    font-family: 'EB Garamond', serif;
    font-weight: 500;
    font-size: 2.75rem;
    margin-top: auto;
    margin-bottom: auto;

    @media only screen and (max-width: 768px){
        font-size: 1.188rem;
    }
`;

const Text = styled.div`
    p{
        font-family: Khula;
        font-size: 1.125rem;

        @media only screen and (max-width: 768px){
            font-size: 1rem;
        }
    }
`;

const Signatures = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0rem;
`;

const Spacing = styled.div`
    width: 8rem;
`

const Signature = styled.div`
    .name {
        font-family: 'Nothing You Could Do';
        font-size: 1.625rem;
        margin: 0rem;
        text-align: left;

        @media only screen and (max-width: 768px){
            font-size: 1.125rem;
            text-align: left;
        }
    }

    .title {
        font-family: Khula;
        font-size:  1.125rem;
        margin-bottom: 0.5rem;

        @media only screen and (max-width: 768px){
            font-size: 1rem;
        }
    }

    .bold {
        font-weight: 600;
        font-family: Khula;
        font-size:  1.25rem;

        @media only screen and (max-width: 768px){
            font-size: 1.125rem;
        }
    }

    margin: 0rem;
`;
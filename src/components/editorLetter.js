import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Letter = () => (
    <Wrapper>
        <Title>Letter From The Editor</Title>
        <Text>
            <p>Dear readers, </p>
            <p>Every March, we focus on the experiences and achievements of women around the world in honor of Women’s History Month. Discussions around the historical gender disparities at Columbia are often cut off either in 1981, when Columbia College made the decision to allow women to enroll, or in 1983, when the first women actually matriculated. However, this edition is a reminder that the struggle for equality did not end when women could attend Columbia College—it continues to this day.</p>
            <p>Despite only 40 years of coeducation at Columbia College, the history of women at the University goes back to its founding. For too long, the narratives of women have been erased, minimized, or co-opted by men. As we celebrate Women’s History Month, we hope to highlight the triumphs of women in the greater Columbia community since the decision to go coed 40 years ago while shining a steady light on the disparities that still exist.</p>
            <p>Within Spectator’s Women’s History Month issue, you can learn about the pervasive funding disparities between men’s and women’s sports at Columbia and examine the gender-based misconduct changes the Graduate Workers of Columbia-United Auto Workers union is fighting for to protect survivors in its strike against the University. You will find our coverage of the importance of the Athena Film Festival in highlighting women filmmakers; profiles of student musicians, community activists, and Ivy League coaches who have not let any barriers impede their success; and the creation of the Barnard-Columbia Athletic Consortium, which allowed students who attend historically women’s colleges to compete in Division I athletics for the first time.</p>        
            <p>As a corporate board made up of three women—one from Barnard, one from Columbia College, and the other from the School of Engineering and Applied Science—we have encountered the complicated relationship the University has with gender in various forms. We want to take this opportunity to center the amazing work of our staff—which is 76 percent female—while bearing in mind that the structures in place here at Columbia, even 40 years after coed integration, continuously disadvantage many of our staffers, readers, and loved ones.</p>
            <p>We hope that within our edition, you can learn the stories of the contributions of women scholars, activists, coaches, athletes, artists, musicians, and learners within our community. We also want to emphasize that much of their work is not yet done. The issues and accomplishments covered in this edition are not one-off events or isolated incidents; they come together to form a connected, everlasting story.</p>
        </Text>
        <Signature><div className='name'>Sarah Braka</div><div className='title'>Editor in Chief</div></Signature>
        <Signature><div className='name'>Elizabeth Karpen</div><div className='title'>Managing Editor</div></Signature>
        <Signature><div className='name'>Tamarah Wallace</div><div className='title'>Publisher</div></Signature>
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

const Signature = styled.div`
    .name {
        font-family: 'Nothing You Could Do';
        font-size: 1.625rem;

        @media only screen and (max-width: 768px){
            font-size: 1.125rem;
        }
    }

    .title {
        font-family: Khula;
        font-size:  1.125rem;

        @media only screen and (max-width: 768px){
            font-size: 1rem;
        }
    }

    margin: 1rem 0rem 1rem 0rem;
`;
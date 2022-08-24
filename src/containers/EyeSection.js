import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/section-title';
import Article1 from '../components/article1';
import NextSection from '../components/nextSection';
import ArticleCard from '../components/article-card';

const EyeSection = ({articles, header, next, nextLink, setSection}) => {

    const handleMenuItemOnClick = () => {
        if (next === "Credits") {
            setSection("Home");
        } else {
            setSection(next);
        }

        console.log(next);
    }

    const isEyeSection = header === "The Eye";

    return (
        <Wrapper>
        <SectionTitle title={header} isEyeSection={isEyeSection}/>
        <EyeImage><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JY4EQCPCIZA4JD3ASOZYSPQEA4.gif"></img></EyeImage>
        <Desktop>
        <Article1
            article1={articles[0]}
            article2={articles[1]}
            hideImage={isEyeSection}
        />
        <Article1
            article1={articles[2]}
            article2={articles[3]}
            hideImage={isEyeSection}
        />
        <Article1
            article1={articles[5]}
            article2={articles[6]}
            hideImage={isEyeSection}
        />
        <Article1
            article1={articles[7]}
            article2={articles[8]}
            hideImage={isEyeSection}
        />
        <Article1
            article1={articles[10]}
            article2={articles[11]}
            hideImage={isEyeSection}
        />
        </Desktop>
        <Mobile>
            {articles.map(article => (
                <ArticleCard article={article} hideImage={isEyeSection}/>
            ))}
        </Mobile>
        <NextSection setSection={handleMenuItemOnClick} nextseclink={nextLink} nextsec={next} image="https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg"></NextSection>
        </Wrapper>
    );
};

export default EyeSection;

const Wrapper = styled.main`
    margin-top: -3rem;
`;

const Mobile = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (min-width: 769px) {
        display: none;
    }
`;

const Desktop = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

const EyeImage = styled.div`
    width: 100vw;
    
    img  {
        width: 100%;
    }
`;
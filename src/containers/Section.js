import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/section-title';
import Article1 from '../components/article1';
import ArticleCards from '../components/articleCards';
import NextSection from '../components/nextSection';
import ArticleCard from '../components/article-card';

const Section = ({articles, header, next, nextLink, setSection}) => {

    const handleMenuItemOnClick = () => {
        if (next === "Credits") {
            setSection("Home");
        } else {
            setSection(next);
        }

        console.log(next);
    }

    return(
        <main>
        <SectionTitle title={header}/>
        <Desktop>
        <Article1
            article1={articles[0]}
            article2={articles[1]}
        />
        {articles[4] ?
        <ArticleCards
            article1={articles[2]}
            article2={articles[3]}
            article3={articles[4]}
        />: 
        <Article1
            article1={articles[2]}
            article2={articles[3]}
        />}
        <Article1
            article1={articles[5]}
            article2={articles[6]}
        />
        {articles[9] ?
        <ArticleCards
            article1={articles[7]}
            article2={articles[8]}
            article3={articles[9]}
        />: 
        <Article1
            article1={articles[7]}
            article2={articles[8]}
        />}
        <Article1
            article1={articles[10]}
            article2={articles[11]}
        />
        </Desktop>
        <Mobile>
            {articles.map(article => (
                <ArticleCard article={article} />
            ))}
        </Mobile>
        <NextSection setSection={handleMenuItemOnClick} nextseclink={nextLink} nextsec={next} image="https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg"></NextSection>
        </main>
    );
};

export default Section;

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
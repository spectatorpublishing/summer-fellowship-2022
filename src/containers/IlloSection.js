import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/section-title';
import NextSection from '../components/nextSection';
import IlloCard from '../components/illo-card';

const IlloSection = ({articles, header, next, nextLink, setSection}) => {

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
        <Cards>
            {articles.map(article => (
                <IlloCard article={article}/>
            ))}
        </Cards>
        <NextSection setSection={handleMenuItemOnClick} nextseclink={nextLink} nextsec={next} image="https://patch.com/img/cdn20/users/23306266/20200814/041504/styles/patch_image/public/columbia-university-building___14161440408.jpg"></NextSection>
        </main>
    );
};

export default IlloSection;

const Cards = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
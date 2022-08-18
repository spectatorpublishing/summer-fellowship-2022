import React from 'react';
import styled from 'styled-components';
import ArticleCard from './article-card'

const Articles = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-image: url("https://summer-fellowship-2022.s3.amazonaws.com/SectionStrip.png");
    background-size: cover;
    padding: 3rem;
`;

const ArticleCards = ({article1, article2, article3}) => (
    <Articles>
        <ArticleCard
            article={article1}
        />
        <ArticleCard
            article={article2}
        />
        <ArticleCard
            article={article3}
        />
    </Articles>
);

export default ArticleCards;
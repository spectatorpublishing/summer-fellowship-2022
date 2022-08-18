import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;    
    font-weight: 400;
    margin: 1rem;

    @media only screen and (max-width: 600px) {
        width: 20rem;
        margin: 1rem;
    }
    
    @media only screen and (min-width: 601px) {
        height: 22.5rem;
        width: 22.5rem;
    }

    a {
        text-decoration: none;
        color: black;
    }

    cursor: pointer;
    :hover{
        img{
            opacity: 30%;
        }
    }

    @media only screen and (max-width: 768px) {
        :hover{
            img{
                opacity: 100%;
            }
        }
    }
`;

const Title = styled.div`
    font-size: 1.125rem;
    margin: 0 1.25rem 0 1.25rem;
`;

const Name = styled.div`
    font-family: "Khula";
    font-weight: 400;
    font-size: 1.125rem;
    margin: 0 1.25rem 0 1.25rem;

    @media only screen and (max-width: 768px) {
        margin: 0.5rem 1.25rem 0.5rem 1.25rem;
        font-size: 1rem;
    }
`;

const Image = styled.div`
    background-color: #FDC089;
    margin: 1.25rem;
    width: 20rem;
    height: 12.5rem;
    overflow: hidden;

    img {
        max-width: 100%;
        margin: auto;
        object-fit: contain;
    }

    @media only screen and (max-width: 600px) {
        max-width: 18rem;
        max-height: 11.25rem;
    }
`;

const ArticleCard = ({ article }) => {
    return (
        <Card>
            <a href={article.article_link}>
                <Image> <img alt='article image' src={article.image_url} /> </Image>
                <Title>{article.article_title}</Title>
                <Name>{article.article_authors}</Name>
            </a>
        </Card>
    );
};

export default ArticleCard;
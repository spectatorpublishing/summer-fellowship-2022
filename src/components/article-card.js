import React from 'react';
import styled from 'styled-components/macro';
import theme from '../theme';

const Card = styled.div`
    display: flex;
    flex-direction: column;    
    font-weight: 400;
    margin: 1rem 1rem auto 1rem;
    cursor: pointer;
    flex: 1;
    
    :hover{
        img{
            opacity: 30%;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    @media only screen and (max-width: 768px) {
        background-color: rgba(255, 255, 255, .5);
        display: block;
        margin: 1rem 2rem;
        padding: 0.5rem;

        :hover{
            img{
                opacity: 100%;
            }
        }
    }
`;

const Title = styled.div`
    font-size: 1.25rem;
    margin: 0 1.25rem 0 1.25rem;
    color: ${theme.colors.articleTitleBlue};
    font-family: 'Bitter', serif;
    font-weight: 500;
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
    background-color: ${theme.colors.blue};
    margin: 1.25rem auto;
    width: 90%;
    overflow: hidden;
    display: flex;

    img {
        max-width: 100%;
        margin: auto;
        object-fit: cover;
    }

    @media only screen and (max-width: 768px) {
        margin: 1.25rem auto;
        width: 90%;

        img {
            object-fit: cover;
        }
    }
`;

const ArticleCard = ({ article, hideImage }) => {
    return (
        <Card>
            <a href={article.article_link}>
                <Image> {!hideImage &&<img alt='article image' src={article.image_url} /> }</Image>
                <Title>{article.article_title}</Title>
                <Name>{article.article_authors}</Name>
            </a>
        </Card>
    );
};

export default ArticleCard;
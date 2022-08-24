import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../device';
import {illustrations} from '../data/credits';
import theme from '../theme';

const Article1 = ({article1, article2, hideImage}) => {
    return(
        <ArticleSection>
        <Article
            article={article1}
            side = 'left'
            hideImage={hideImage}
        />
        <Article
            article={article2}
            side = 'right'
            hideImage={hideImage}
        />
        </ArticleSection>
    );
};

export default Article1;

const Article = ({article, side, hideImage}) => {
    return (
        <>
        {article ?
        <Wrapper href={article.article_link} className={side}>
            {(side == "left") ? null : <Image hideImage={hideImage} className={side}><img src={article.image_url}/></Image>}
            <div className="textbox">
                <Title><Text>{article.article_title}</Text></Title>
                <Author>By {article.article_authors}</Author>
            </div>
            {(side == "right") ? null : <Image hideImage={hideImage} className={side}><img src={article.image_url}/></Image>}
        </Wrapper> : null}
        </>
    );
};

const ArticleSection = styled.div`
    margin: 0rem 8rem 0rem 8rem;
    @media only screen and (max-width: 1200px) {
        margin: 0rem 4rem 0rem 4rem;
    }
    @media only screen and (max-width: 1000px) {
        margin: 0rem 2rem 0rem 2rem;
    }

`;

const Wrapper = styled.a`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    margin: 1rem 0rem 1rem 0rem;

    .textbox {
        margin: auto 0rem auto auto;
        width: 80vw;
        padding: 2rem 1rem 2rem 1rem;
        background: rgba( 255, 255, 255, 0.75);
        z-index: 20;
    }

    :hover{
        img{
            opacity: 30%;
        }
    }

    &.right {
        .textbox {
            margin: auto 0rem auto auto;
            padding: 2rem 1rem 2rem 1rem;
            text-align: right;
        }
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    color: ${theme.colors.articleTitleBlue};
`;

const Text = styled.div`
    line-height: 3rem;
    font-family: 'Bitter', serif;
    font-weight: 500;
    font-size: 2.25rem;
    margin: auto 1rem auto 1rem;
`;

const Author = styled.div`
    font-family: Khula;
    font-size: 1.25rem;
    margin: 0rem 1rem 0rem 3rem;
`;
const Image = styled.div`
    margin: auto 0rem auto 0rem;
    background-color: ${props => props.hideImage ? "transparent" : '#85a1cd'};
    width: 28rem;
    height: ${props => props.hideImage ? "15rem" : '22rem'};

    img {
        display: ${props => props.hideImage ? "none" : 'block'};
        object-fit: cover;
        width: 28rem;
        height: 22rem;
    }

    &.right {
        margin: auto -13rem auto auto;
    }

    &.left {
        margin: auto 0rem auto -13rem;
    }
`;
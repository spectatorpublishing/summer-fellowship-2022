import React from 'react';
import styled from 'styled-components/macro';
import theme from '../theme';

const Box = styled.div`
    margin: 1.25rem 0 3rem 0;
    position: relative;

    @media only screen and (max-width: 768px) {
      margin: 1.25rem 0 1rem 0;
    }
`;

const Squiggle = styled.div`
  width: 100vw;

  img {
    width: 100%;
  }
`;

const Title = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 400;
    font-size: 4rem;
    font-family: 'EB Garamond', serif;
    padding: 5rem 1.25rem 0 8.75rem;
    color: ${theme.colors.darkBlue};

    @media only screen and (max-width: 768px) {
        font-size: 3rem;
        padding: 0.25rem 1.25rem 0 2rem;
    }

    @media only screen and (max-width: 500px) {
      font-size: 2rem;
      padding: 0.25rem 1rem 0 2rem;
  }

  @media only screen and (max-width: 320px) {
    font-size: 1.5rem;
    padding: 0.25rem 1rem 0 2rem;
}
`;

const SectionTitle = ({ title }) => {
    return (
      <Box> 
        <Squiggle><img src="https://summer-fellowship-2022.s3.amazonaws.com/squiggly+line.png"/></Squiggle>
        <Title> {title} </Title>
      </Box>
    );
  };

export default SectionTitle
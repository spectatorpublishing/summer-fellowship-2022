import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits';

const Wrapper = styled.div`
    margin: 0rem 5rem 0rem 5rem;    

    @media only screen and (max-width: 768px) {
        margin: 0rem;  
    }
`;

const Direction = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: Khula;
    font-size: 20px;
    color: #000000;
    
    h2 {
        font-family: Prata;
        font-weight: normal;
        font-size: 26px;
        text-transform: uppercase;

        @media only screen and (max-width: 750px) {
            font-size: 18px;
        }

        @media only screen and (max-width: 425px) {
            font-size: 16px;
        }
    }
    
    @media only screen and (max-width: 750px) {
        padding: 0;
        font-size: 17px;
    }

    @media only screen and (max-width: 425px) {
        font-size: 14px;
    }
`;

const Padding = styled.div`
    height: 12px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem;

    @media only screen and (max-width: 750px) {
        margin: 0rem 2rem 0rem 2rem;
    }
`;

const SubDiv = styled.div`
    padding-bottom: 3rem;

    @media only screen and (max-width: 750px) {
        text-align: center;
        padding-bottom: 2rem;
    }
`;

const CreditsList = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });

    if (width < 801) {
        return (
            <Wrapper>
                <Text>
                    <Column>
                        <SubDiv>
                            {credits['SSFP'].map(person => (
                                person.staff_name !== "" ?
                                    <p>{person.staff_name}, {person.title}</p> : <Padding />
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Corporate Board</h2>
                            {credits['Corporate Board'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Design and Development</h2>
                            {credits['Design and Development'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Lead Illustration By</h2>
                            <p>Ainhoa Petri-Hidalgo, SSFP Fellow</p>
                            <p>Yingjie Wang, Illustrations Editor</p>
                        </SubDiv>
                        <SubDiv>
                            <h2>University News</h2>
                            {credits['University News'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>City News</h2>
                            {credits['City News'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Opinion</h2>
                            {credits['Opinion'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Sports</h2>
                            {credits['Sports'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Arts and Entertainment</h2>
                            {credits['Arts and Entertainment'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>The Eye</h2>
                            {credits['The Eye'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Graphics</h2>
                            {credits['Graphics'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Illustrations</h2>
                            {credits['Illustrations'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Photo</h2>
                            {credits['Photo'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Copy</h2>
                            {credits['Copy'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                        <SubDiv>
                            <h2>Engagement</h2>
                            {credits['Engagement'].map(person => (
                                <p>{person.staff_name}, {person.title}</p>
                            ))}
                        </SubDiv>
                    </Column>
                </Text>
            </Wrapper>
        );
    } else if (width > 800 && width < 1050) {
        return (
            <Wrapper>
                <Text>
                    <Direction>
                        <Column>
                        <SubDiv>
                                {credits['SSFP'].map(person => (
                                    person.staff_name !== "" ?
                                        <p>{person.staff_name}, {person.title}</p> : <Padding />
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>University News</h2>
                                {credits['University News'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>City News</h2>
                                {credits['City News'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Arts and Entertainment</h2>
                                {credits['Arts and Entertainment'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Graphics</h2>
                                {credits['Graphics'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Copy</h2>
                                {credits['Copy'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Engagement</h2>
                                {credits['Engagement'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                        </Column>
                        <Column>
                            <SubDiv>
                                <h2>Corporate Board</h2>
                                {credits['Corporate Board'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Design and Development</h2>
                                {credits['Design and Development'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                            <h2>Lead Illustration By</h2>
                            <p>Ainhoa Petri-Hidalgo, SSFP Fellow</p>
                            <p>Yingjie Wang, Illustrations Editor</p>
                            </SubDiv>
                            <SubDiv>
                                <h2>Sports</h2>
                                {credits['Sports'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Photo</h2>
                                {credits['Photo'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Illustrations</h2>
                                {credits['Illustrations'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Opinion</h2>
                                {credits['Opinion'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>The Eye</h2>
                                {credits['The Eye'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                        </Column>
                    </Direction>
                </Text>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                <Text>
                    <Direction>
                        <Column>
                            <SubDiv>
                                {credits['SSFP'].map(person => (
                                    person.staff_name !== "" ?
                                        <p>{person.staff_name}, {person.title}</p> : <Padding />
                                ))}
                            </SubDiv>
                            <SubDiv>
                            <h2>Lead Illustration By</h2>
                            <p>Ainhoa Petri-Hidalgo, SSFP Fellow</p>
                            <p>Yingjie Wang, Illustrations Editor</p>
                            </SubDiv>
                            <SubDiv>
                                <h2>Graphics</h2>
                                {credits['Graphics'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Sports</h2>
                                {credits['Sports'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Illustrations</h2>
                                {credits['Illustrations'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>The Eye</h2>
                                {credits['The Eye'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                        </Column>
                        <Column>
                            <SubDiv>
                                <h2>Corporate Board</h2>
                                {credits['Corporate Board'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>City News</h2>
                                {credits['City News'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Arts and Entertainment</h2>
                                {credits['Arts and Entertainment'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Opinion</h2>
                                {credits['Opinion'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Photo</h2>
                                {credits['Photo'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                        </Column>
                        <Column>
                            <SubDiv>
                                <h2>Design and Development</h2>
                                {credits['Design and Development'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>University News</h2>
                                {credits['University News'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Copy</h2>
                                {credits['Copy'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                            <SubDiv>
                                <h2>Engagement</h2>
                                {credits['Engagement'].map(person => (
                                    <p>{person.staff_name}, {person.title}</p>
                                ))}
                            </SubDiv>
                        </Column>
                    </Direction>
                </Text>
            </Wrapper>
        );
    }
};


export default CreditsList;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0rem 5rem 0rem 5rem;    

    @media only screen and (max-width: 768px) {
        margin: 0rem 2rem 0rem 2rem;  
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
        padding: 0 2rem 0rem 2rem;
        font-size: 17px;
    }

    @media only screen and (max-width: 425px) {
        font-size: 14px;
    }
`;

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

    if (width < 801){
        return (
            <Wrapper>
                <Text>
                    <Column>
                        <SubDiv>
                            <h2>Corporate Board</h2>
                            <p>Sarah Braka, Editor in Chief</p>
                            <p>Elizabeth Karpen, Managing Editor</p>
                            <p>Tamarah Wallace, Publisher</p>
                        </SubDiv>
                        <SubDiv>
                            <h2>Design and Development</h2>
                            <p>Christina Su, Product Designer</p>
                            <p>Laura Castro Venegas, Engineering Manager</p>
                            <p>Raymond Banke, Illustrations Deputy</p>
                            <p>Mirah Shi, Product Manager</p>
                            <p>Francesca Cavuoti, Senior Developer</p>
                            <p>Yu-Chen Huang, Associate Developer</p>
                            <p>Matthew Werneken, Associate Developer</p>
                        </SubDiv>
                        <SubDiv>
                            <h2>Lead Illustration By</h2>
                            <p>Tina Wang, Staff Illustrator</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>News</h2>
                                <p>Dia Gill, News Editor</p>
                                <p>Sofia Kwon, News Editor</p>
                                <p>Abby Melbourne, Deputy News Editor</p>
                                <p>Maya Lemeche</p>
                                <p>Ashley Yung</p>
                                <p>Kathy Fang</p>
                                <p>Irie Sentner</p>
                                <p>Kelly Ann Cosentino</p>
                                <p>Claire Hunt</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Arts and Entertainment</h2>
                                <p>Noah Sheidlower, A&E Editor</p>
                                <p>Bella Druckman, Deputy A&E Editor</p>
                                <p>Katie Levine, Deputy A&E Editor</p>
                                <p>Olivia Doyle, Deputy A&E Editor</p>
                                <p>Esterah Brown</p>
                                <p>Irene Madrigal</p>
                                <p>Sophie Craig</p>
                                <p>Maryam Rahaman</p>
                                <p>Julia Tong</p>
                                <p>Noah Bullwinkle</p>
                                <p>Victoria Irizarry</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Sports</h2>
                                <p>Mackenzie George, Sports Editor</p>
                                <p>Ence Morse, Sports Editor</p>
                                <p>Matt Kim, Deputy Sports Editor</p>
                                <p>Miles Schachner, Deputy Sports Editor</p>
                                <p>Wick Hallos</p>
                                <p>Jorge Hernandez</p>
                                <p>Ashleigh Lackey</p>
                                <p>Rebecca Wachen</p>
                                <p>Bernard Wang</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Graphics</h2>
                                <p>Jessica Li, Graphics Editor</p>
                                <p>Andrew Park</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Photo</h2>
                                <p>Beatrice Shlansky, Photo Editor</p>
                                <p>Millie Felder, Deputy Photo Editor</p>
                                <p>Kate Della Pietra, Deputy Photo Editor</p>
                                <p>Elisabeth McLaughlin, Deputy Photo Editor</p>
                                <p>Rommel Nunez</p>
                                <p>Alex Kieu</p>
                                <p>Samantha Camacho</p>
                                <p>Emma Snoddy</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Illustrations</h2>
                                <p>Brenda Huang, Illustrations Editor</p>
                                <p>Liza Evseeva, Deputy Illustrations Editor</p>
                                <p>Ashley Jiao, Deputy Illustrations Editor</p>
                                <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                                <p>Tina Wang, Staff Illustrator</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Spectrum</h2>
                                <p>Jane Mok, Deputy Editor</p>
                                <p>Lina Karim, Deputy Editor</p>
                                <p>Ariana Novo, Deputy Editor</p>
                                <p>Charlotte Wu</p>
                                <p>Victoria Tereshcehenko</p>
                                <p>Tonycia Coe</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>The Eye</h2>
                                <p>Jade Justice, Features Editor</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Copy</h2>
                                <p>Emma Bradbury, Head Copy Editor</p>
                                <p>Fritzie Schwentker, Deputy Copy Editor</p>
                                <p>Mabry Griffin, Deputy Copy Editor</p>
                                <p>Kaylene Chong, Deputy Copy Editor</p>
                                <p>Vincenzo DiNatale, Deputy Copy Editor</p>
                                <p>Olivia Vella</p>
                                <p>Carolyn Wang</p>
                                <p>Harry Shi</p>
                                <p>Jacob Kang</p>
                                <p>Robyn Fohouo</p>
                                <p>Katherine Carraway</p>
                                <p>Rachel Borshchenko</p>
                                <p>Jonah Pitkowsky</p>
                                <p>Natalie Park</p>
                                <p>Adeline Hu</p>
                                <p>Maria Levit</p>
                                <p>Eden Teferi</p>
                                <p>Willa Nagy</p>
                                <p>Alia Derriey</p>
                                <p>Sam Barnett</p>
                                <p>Kathryn Cherven</p>
                                <p>Leif Wood</p>
                                <p>Renuka Balakrishnan</p>
                                <p>Joyce Liu</p>
                                <p>Abby Sim</p>
                                <p>Adam Burns</p>
                                <p>Madison Guzy</p>
                                <p>Natalie Goldberg</p>
                                <p>Michaela Fleischer</p>
                                <p>Noyna Roy</p>
                                <p>Zoe Yin</p>
                                <p>Haley Zehrung</p>
                        </SubDiv>
                    </Column>
                </Text>
            </Wrapper>
        );
    } else if (width > 800 && width < 1050){
        return (
            <Wrapper>
                <Text>
                    <Direction>
                    <Column>
                        <SubDiv>
                            <h2>Design and Development</h2>
                            <p>Christina Su, Product Designer</p>
                            <p>Laura Castro Venegas, Engineering Manager</p>
                            <p>Raymond Banke, Illustrations Deputy</p>
                            <p>Mirah Shi, Product Manager</p>
                            <p>Francesca Cavuoti, Senior Developer</p>
                            <p>Yu-Chen Huang, Associate Developer</p>
                            <p>Matthew Werneken, Associate Developer</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Arts and Entertainment</h2>
                                <p>Noah Sheidlower, A&E Editor</p>
                                <p>Bella Druckman, Deputy A&E Editor</p>
                                <p>Katie Levine, Deputy A&E Editor</p>
                                <p>Olivia Doyle, Deputy A&E Editor</p>
                                <p>Esterah Brown</p>
                                <p>Irene Madrigal</p>
                                <p>Sophie Craig</p>
                                <p>Maryam Rahaman</p>
                                <p>Julia Tong</p>
                                <p>Noah Bullwinkle</p>
                                <p>Victoria Irizarry</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Graphics</h2>
                                <p>Jessica Li, Graphics Editor</p>
                                <p>Andrew Park</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Copy</h2>
                                <p>Emma Bradbury, Head Copy Editor</p>
                                <p>Fritzie Schwentker, Deputy Copy Editor</p>
                                <p>Mabry Griffin, Deputy Copy Editor</p>
                                <p>Kaylene Chong, Deputy Copy Editor</p>
                                <p>Vincenzo DiNatale, Deputy Copy Editor</p>
                                <p>Olivia Vella</p>
                                <p>Carolyn Wang</p>
                                <p>Harry Shi</p>
                                <p>Jacob Kang</p>
                                <p>Robyn Fohouo</p>
                                <p>Katherine Carraway</p>
                                <p>Rachel Borshchenko</p>
                                <p>Jonah Pitkowsky</p>
                                <p>Natalie Park</p>
                                <p>Adeline Hu</p>
                                <p>Maria Levit</p>
                                <p>Eden Teferi</p>
                                <p>Willa Nagy</p>
                                <p>Alia Derriey</p>
                                <p>Sam Barnett</p>
                                <p>Kathryn Cherven</p>
                                <p>Leif Wood</p>
                                <p>Renuka Balakrishnan</p>
                                <p>Joyce Liu</p>
                                <p>Abby Sim</p>
                                <p>Adam Burns</p>
                                <p>Madison Guzy</p>
                                <p>Natalie Goldberg</p>
                                <p>Michaela Fleischer</p>
                                <p>Noyna Roy</p>
                                <p>Zoe Yin</p>
                                <p>Haley Zehrung</p>
                        </SubDiv>
                    </Column>
                    <Column>
                        <SubDiv>
                            <h2>Corporate Board</h2>
                            <p>Sarah Braka, Editor in Chief</p>
                            <p>Elizabeth Karpen, Managing Editor</p>
                            <p>Tamarah Wallace, Publisher</p>
                        </SubDiv>
                        <SubDiv>
                            <h2>Lead Illustration By</h2>
                            <p>Tina Wang, Staff Illustrator</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>News</h2>
                                <p>Dia Gill, News Editor</p>
                                <p>Sofia Kwon, News Editor</p>
                                <p>Abby Melbourne, Deputy News Editor</p>
                                <p>Maya Lemeche</p>
                                <p>Ashley Yung</p>
                                <p>Kathy Fang</p>
                                <p>Irie Sentner</p>
                                <p>Kelly Ann Cosentino</p>
                                <p>Claire Hunt</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Sports</h2>
                                <p>Mackenzie George, Sports Editor</p>
                                <p>Ence Morse, Sports Editor</p>
                                <p>Matt Kim, Deputy Sports Editor</p>
                                <p>Miles Schachner, Deputy Sports Editor</p>
                                <p>Wick Hallos</p>
                                <p>Jorge Hernandez</p>
                                <p>Ashleigh Lackey</p>
                                <p>Rebecca Wachen</p>
                                <p>Bernard Wang</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Photo</h2>
                                <p>Beatrice Shlansky, Photo Editor</p>
                                <p>Millie Felder, Deputy Photo Editor</p>
                                <p>Kate Della Pietra, Deputy Photo Editor</p>
                                <p>Elisabeth McLaughlin, Deputy Photo Editor</p>
                                <p>Rommel Nunez</p>
                                <p>Alex Kieu</p>
                                <p>Samantha Camacho</p>
                                <p>Emma Snoddy</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Illustrations</h2>
                                <p>Brenda Huang, Illustrations Editor</p>
                                <p>Liza Evseeva, Deputy Illustrations Editor</p>
                                <p>Ashley Jiao, Deputy Illustrations Editor</p>
                                <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                                <p>Tina Wang, Staff Illustrator</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Spectrum</h2>
                                <p>Jane Mok, Deputy Editor</p>
                                <p>Lina Karim, Deputy Editor</p>
                                <p>Ariana Novo, Deputy Editor</p>
                                <p>Charlotte Wu</p>
                                <p>Victoria Tereshcehenko</p>
                                <p>Tonycia Coe</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>The Eye</h2>
                                <p>Jade Justice, Features Editor</p>
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
                            <h2>Design and Development</h2>
                            <p>Christina Su, Product Designer</p>
                            <p>Laura Castro Venegas, Engineering Manager</p>
                            <p>Raymond Banke, Illustrations Deputy</p>
                            <p>Mirah Shi, Product Manager</p>
                            <p>Francesca Cavuoti, Senior Developer</p>
                            <p>Yu-Chen Huang, Associate Developer</p>
                            <p>Matthew Werneken, Associate Developer</p>
                        </SubDiv>
                        <SubDiv>
                            <h2>Lead Illustration By</h2>
                            <p>Tina Wang, Staff Illustrator</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Graphics</h2>
                                <p>Jessica Li, Graphics Editor</p>
                                <p>Andrew Park</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Illustrations</h2>
                                <p>Brenda Huang, Illustrations Editor</p>
                                <p>Liza Evseeva, Deputy Illustrations Editor</p>
                                <p>Ashley Jiao, Deputy Illustrations Editor</p>
                                <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                                <p>Tina Wang, Staff Illustrator</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Photo</h2>
                                <p>Beatrice Shlansky, Photo Editor</p>
                                <p>Millie Felder, Deputy Photo Editor</p>
                                <p>Kate Della Pietra, Deputy Photo Editor</p>
                                <p>Elisabeth McLaughlin, Deputy Photo Editor</p>
                                <p>Rommel Nunez</p>
                                <p>Alex Kieu</p>
                                <p>Samantha Camacho</p>
                                <p>Emma Snoddy</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>The Eye</h2>
                                <p>Jade Justice, Features Editor</p>
                        </SubDiv>
                    </Column>
                    <Column>
                        <SubDiv>
                            <h2>Corporate Board</h2>
                            <p>Sarah Braka, Editor in Chief</p>
                            <p>Elizabeth Karpen, Managing Editor</p>
                            <p>Tamarah Wallace, Publisher</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Arts and Entertainment</h2>
                                <p>Noah Sheidlower, A&E Editor</p>
                                <p>Bella Druckman, Deputy A&E Editor</p>
                                <p>Katie Levine, Deputy A&E Editor</p>
                                <p>Olivia Doyle, Deputy A&E Editor</p>
                                <p>Esterah Brown</p>
                                <p>Irene Madrigal</p>
                                <p>Sophie Craig</p>
                                <p>Maryam Rahaman</p>
                                <p>Julia Tong</p>
                                <p>Noah Bullwinkle</p>
                                <p>Victoria Irizarry</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Sports</h2>
                                <p>Mackenzie George, Sports Editor</p>
                                <p>Ence Morse, Sports Editor</p>
                                <p>Matt Kim, Deputy Sports Editor</p>
                                <p>Miles Schachner, Deputy Sports Editor</p>
                                <p>Wick Hallos</p>
                                <p>Jorge Hernandez</p>
                                <p>Ashleigh Lackey</p>
                                <p>Rebecca Wachen</p>
                                <p>Bernard Wang</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Spectrum</h2>
                                <p>Jane Mok, Deputy Editor</p>
                                <p>Lina Karim, Deputy Editor</p>
                                <p>Ariana Novo, Deputy Editor</p>
                                <p>Charlotte Wu</p>
                                <p>Victoria Tereshcehenko</p>
                                <p>Tonycia Coe</p>
                        </SubDiv>
                    </Column>
                    <Column>
                        <SubDiv>
                                <h2>News</h2>
                                <p>Dia Gill, News Editor</p>
                                <p>Sofia Kwon, News Editor</p>
                                <p>Abby Melbourne, Deputy News Editor</p>
                                <p>Maya Lemeche</p>
                                <p>Ashley Yung</p>
                                <p>Kathy Fang</p>
                                <p>Irie Sentner</p>
                                <p>Kelly Ann Cosentino</p>
                                <p>Claire Hunt</p>
                        </SubDiv>
                        <SubDiv>
                                <h2>Copy</h2>
                                <p>Emma Bradbury, Head Copy Editor</p>
                                <p>Fritzie Schwentker, Deputy Copy Editor</p>
                                <p>Mabry Griffin, Deputy Copy Editor</p>
                                <p>Kaylene Chong, Deputy Copy Editor</p>
                                <p>Vincenzo DiNatale, Deputy Copy Editor</p>
                                <p>Olivia Vella</p>
                                <p>Carolyn Wang</p>
                                <p>Harry Shi</p>
                                <p>Jacob Kang</p>
                                <p>Robyn Fohouo</p>
                                <p>Katherine Carraway</p>
                                <p>Rachel Borshchenko</p>
                                <p>Jonah Pitkowsky</p>
                                <p>Natalie Park</p>
                                <p>Adeline Hu</p>
                                <p>Maria Levit</p>
                                <p>Eden Teferi</p>
                                <p>Willa Nagy</p>
                                <p>Alia Derriey</p>
                                <p>Sam Barnett</p>
                                <p>Kathryn Cherven</p>
                                <p>Leif Wood</p>
                                <p>Renuka Balakrishnan</p>
                                <p>Joyce Liu</p>
                                <p>Abby Sim</p>
                                <p>Adam Burns</p>
                                <p>Madison Guzy</p>
                                <p>Natalie Goldberg</p>
                                <p>Michaela Fleischer</p>
                                <p>Noyna Roy</p>
                                <p>Zoe Yin</p>
                                <p>Haley Zehrung</p>
                        </SubDiv>
                    </Column>
                    </Direction>
                </Text>
            </Wrapper>
        );
    }
};


export default CreditsList;
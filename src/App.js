import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Home from './containers/home';
import Section from './containers/Section';
import Navbar from './components/navbar';
import Credits from './containers/credits';
import Logo from './components/logo';
import ScrollToTop from "./components/ScrollToTop";
import { news_articles } from './data/articles';
import { a_and_e_articles } from './data/articles';
import { spectrum_articles } from './data/articles';
import { sports_articles } from './data/articles';
import { React, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { sections } from './data/sections';
import { useRef } from "react";

const PageWrapper = styled.div`
  &.home {
    background-image: url("https://summer-fellowship-2022.s3.amazonaws.com/Homebackground.png");
  }

  &.section {
    background-image: url("https://summer-fellowship-2022.s3.amazonaws.com/Section+background.png");

    @media (max-width: 768px) {
      background-image: url("https://summer-fellowship-2022.s3.amazonaws.com/mobile+section+background.png");
    }
  }

  background-size: cover;
`;


const App = () => {
  const [currentSection, setSection] = useState("Home");
  const credits = useRef();
  const history = useHistory();

  useEffect(() => {
    const currentPath = window.location.pathname;

    var activeSection = sections.find(section => {
      return section.url === currentPath
    })

    setSection(activeSection ? activeSection.title : "Home");
  },[]);

  const goToCredits = () => {
    credits.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
      <Router basename={process.env.PUBLIC_URL}>
        <PageWrapper className={window.location.pathname == "/" ? "home" : "section"}>
        <Navbar lightLogo={currentSection == "Home"} currentSection={currentSection} setSection={setSection} goToCredits={goToCredits}/>
        <ScrollToTop>
        <Switch>
            <Route exact path='/'
              render={(props) => (
                <Home {...props} creditsRef={credits} goToCredits={goToCredits}/>
              )}/>
            <Route
              exact path='/news'
              render={(props) => (
                <Section {...props} articles={news_articles} header='News' next='Arts & Entertainment' nextLink='/a&e'/>
              )}
            />
            <Route
              exact path='/a&e'
              render={(props) => (
                <Section {...props} articles={a_and_e_articles} header='Arts & Entertainment' next='Sports' nextLink='/sports'/>
              )}
            />
            <Route
              exact path='/sports'
              render={(props) => (
                <Section {...props} articles={sports_articles} header='Sports' next='Spectrum' nextLink='/spectrum'/>
              )}
            />
            <Route
              exact path='/spectrum'
              render={(props) => (
                <Section {...props} articles={spectrum_articles} header='Spectrum' next='Credits' nextLink='/'/>
              )}
            />
        </Switch>
        </ScrollToTop>
        </PageWrapper>
      </Router>
  );
}

export default App;

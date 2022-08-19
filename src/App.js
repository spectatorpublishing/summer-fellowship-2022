import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/home';
import Section from './containers/Section';
import Navbar from './components/navbar';
import ScrollToTop from "./components/ScrollToTop";
import { news_articles } from './data/articles';
import { a_and_e_articles } from './data/articles';
import { spectrum_articles } from './data/articles';
import { sports_articles } from './data/articles';
import { React, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { sections } from './data/sections';

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

  useEffect(() => {
    setCurrentSection();
  },[]);

  const setCurrentSection = () => {
    const currentPath = window.location.pathname;

    var activeSection = sections.find(section => {
      return section.url === currentPath
    })

    setSection(activeSection ? activeSection.title : "Home");
  }

  return (
      <Router basename={process.env.PUBLIC_URL}>
        <PageWrapper className={window.location.pathname == "/" ? "home" : "section"}>
        <Navbar lightLogo={currentSection == "Home"} currentSection={currentSection} setSection={setSection}/>
        <ScrollToTop>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route
              exact path='/news'
              render={(props) => (
                <Section {...props} articles={news_articles} header='News' next='Arts & Entertainment' nextLink='/a&e' setSection={setSection}/>
              )}
            />
            <Route
              exact path='/a&e'
              render={(props) => (
                <Section {...props} articles={a_and_e_articles} header='Arts & Entertainment' next='Sports' nextLink='/sports' setSection={setSection}/>
              )}
            />
            <Route
              exact path='/sports'
              render={(props) => (
                <Section {...props} articles={sports_articles} header='Sports' next='Spectrum' nextLink='/spectrum' setSection={setSection}/>
              )}
            />
            <Route
              exact path='/spectrum'
              render={(props) => (
                <Section {...props} articles={spectrum_articles} header='Spectrum' next='Credits' nextLink='/#credits' setSection={setSection}/>
              )}
            />
        </Switch>
        </ScrollToTop>
        </PageWrapper>
      </Router>
  );
}

export default App;

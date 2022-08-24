import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/home';
import Section from './containers/Section';
import EyeSection from './containers/EyeSection';
import Navbar from './components/navbar';
import ScrollToTop from "./components/ScrollToTop";
import { uni_news_articles } from './data/articles';
import { city_news_articles } from './data/articles';
import { a_and_e_articles } from './data/articles';
import { opinion_articles } from './data/articles';
import { sports_articles } from './data/articles';
import { eye_articles } from './data/articles';
import { illustrations } from './data/articles';
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

  useEffect(() => {
    console.log(currentSection);
  },[currentSection]);

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
            <Route
              exact path='/'
              render={(props) => (
                <Home {...props} next='University News' nextLink='/uni-news' setSection={setSection}/>
              )}
            />
            <Route
              exact path='/uni-news'
              render={(props) => (
                <Section {...props} articles={uni_news_articles} header='University News' next='City News' nextLink='/city-news' setSection={setSection}/>
              )}
            />
            <Route
              exact path='/city-news'
              render={(props) => (
                <Section {...props} articles={city_news_articles} header='City News' next='Arts & Entertainment' nextLink='/a&e' setSection={setSection}/>
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
                <Section {...props} articles={sports_articles} header='Sports' next='Opinion' nextLink='/opinion' setSection={setSection}/>
              )}
            />
             <Route
              exact path='/opinion'
              render={(props) => (
                <Section {...props} articles={opinion_articles} header='Opinion' next='The Eye' nextLink='/eye' setSection={setSection}/>
              )}
            />
            <Route
              exact path='/eye'
              render={(props) => (
                <EyeSection {...props} articles={eye_articles} header='The Eye' next='Credits' nextLink='/#credits' setSection={setSection}/>
              )}
            />
        </Switch>
        </ScrollToTop>
        </PageWrapper>
      </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './components/content/LandingPage';
import RepoPage from './components/content/RepoPage';

import './app.scss';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component, Suspense, lazy } from 'react';
import Header from './navigation/Header';
import NavbarAside from './navigation/NavbarAside';
import './App.css';



const MainPage = React.lazy(() => import('./pages/mainPage/pageMain'));
const EventsPage = React.lazy(() => import('./pages/eventsPage/pageEvents'));
const pageSpeakers = React.lazy(() => import('./pages/speakersPage/pageSpeakers'));
const pageReports = React.lazy(() => import('./pages/reportsPage/pageReports'));
const pageRegister = React.lazy(() => import('./pages/registerPage/pageRegister'));
const pageDetail = React.lazy(() => import('./pages/detailPage/pageDetail'));

class App extends Component {
  render() {

    return (
      <div className="app-container">
        <aside className="app-aside">
          <Header />
          <NavbarAside />
        </aside>
          <Router>
              <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                      <Route exact path="/" component={MainPage}/>
                      <Route exact path="/events" component={EventsPage}/>
                      <Route exact path="/speakers" component={pageSpeakers}/>
                      <Route exact path='/reports' component={pageReports}/>
                      <Route exact path='/detail' component={pageDetail}/>
                      <Route exact path='/registration' component={pageRegister}/>
                  </Switch>
              </Suspense>
          </Router>
      </div>
    );
  }
}

export default App;

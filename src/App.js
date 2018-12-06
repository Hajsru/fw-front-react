import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {Component, Suspense, lazy } from 'react';
import Header from './navigation/Header';
import NavbarAside from './navigation/NavbarAside';
import './App.css';
const MainPage = lazy(() => import('./pages/mainPage/pageMain'));
const EventsPage = lazy(() => import('./pages/eventsPage/pageEvents'));
const SpeakersPage = lazy(() => import('./pages/speakersPage/pageSpeakers'));
const ReportsPage = lazy(() => import('./pages/reportsPage/pageReports'));
const RegisterPage = lazy(() => import('./pages/registerPage/pageRegister'));
const DetailPage = lazy(() => import('./pages/detailPage/pageDetail'));

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
                      <Route exact path="/" component={ (()=>(<MainPage />)) } />
                      <Route path="/events" component={(()=>(<EventsPage />))} />
                      <Route path="/speakers" component={(()=>(<SpeakersPage/>))} />
                      <Route path='/reports' component={(()=>(<ReportsPage />))} />
                      <Route path='/detail' component={(()=>(<DetailPage/>))} />
                      <Route path='/registration' component={(()=>(<RegisterPage />))} />
                  </Switch>
              </Suspense>
          </Router>
      </div>
    );
  }
}


export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Overview from './components/Overview';
import DataAnalysis from './components/DataAnalysis';
import Results from './components/Results';
import Conclusion from './components/Conclusion';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/overview" component={Overview} />
                        <Route path="/data-analysis" component={DataAnalysis} />
                        <Route path="/results" component={Results} />
                        <Route path="/conclusion" component={Conclusion} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

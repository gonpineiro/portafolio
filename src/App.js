import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Presentation from './components/Presentation';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Layout from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Presentation} />
                    <Route exact path="/experiencia" component={Experience} />
                    <Route exact path="/habilidades" component={Skill} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
export default App;

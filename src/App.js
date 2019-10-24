import React, {Fragment} from 'react';
import {Header} from "./ui/Header/";
import {Route} from "react-router-dom";
import {LoginContainer} from "./ui/Login/";
import {DataContainer, DataFilterContainer} from "./ui/Data/";
import './resources/less/styles.less'
import {translate} from "react-i18next";

const App = () => {
    return <Fragment>
        <div>
            <Header/>
        </div>
        <section className="content home">
            <section className="content">
                <div className="content-form">
                    <Route exact path={'/login'} render={() => <LoginContainer/>}/>
                    <Route exact path={'/data'} render={() => <DataContainer/>}/>
                    <Route exact path={'/filter'} render={() => <DataFilterContainer/>}/>
                </div>
            </section>
        </section>
        <footer className="footer">
            <p>All rights reserved © 2019</p>
        </footer>
    </Fragment>
};

export default translate("common")(App);


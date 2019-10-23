import React from 'react';
import Header from "./ui/Header/Header";
import {Route} from "react-router-dom";
import LoginContainer from "./ui/Login/Login";
import DataContainer from "./ui/Data/Data";
import './resources/less/styles.less'
import {translate} from "react-i18next";
import DataFilterContainer from "./ui/Data/DataFilterForm";

const App = (props) => {
    return (
        <body className={props.i18n.language === 'ar' && 'rtl'}>
        <div>
            <Header/>
        </div>
        <section className="content home">
            <section className="content">
                <div className="content-form">
                    <Route exact path={'/login'} render={() =><LoginContainer/>}/>
                    <Route exact path={'/data'} render={() => <DataContainer/>}/>
                    <Route exact path={'/filter'} render={() => <DataFilterContainer/>}/>
                </div>
            </section>
        </section>
        <footer className="footer">
            <p>All rights reserved © 2019</p>
        </footer>
        </body>
    );
};

export default translate("common")(App);


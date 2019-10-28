import React, {Fragment} from 'react'
import {UserInfoContainer} from "../Login/";
import {translate} from "react-i18next";
import '../../resources/less/styles.less'
import {compose} from "redux";
import {NavLink} from "react-router-dom";

const Header = () => {
    return <Fragment>
        <header className={'header'}>
            <div className="header-wrap">
                <NavLink to={"/"} className="logo"/>
                <div className="header-actions">
                    <div className="header__dropdown js-profile-toggler">
                        <UserInfoContainer/>
                    </div>
                </div>
            </div>
        </header>
    </Fragment>
};

export default compose(
    translate("common"),
)(Header);
import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

import '../../resources/less/styles.less'

const UserInfo = ({isAuth, user, logOut}) => {
    return <Fragment>
        <div className="header__dropdown-icon">
            <i className="icon-person"/>
        </div>
        {isAuth ? <>
            <div className="header__dropdown-group">
                <span>Welcome</span>
                <p>{user.userName}</p>
            </div>
            <button onClick={logOut} className="icon-exit"/>
        </> : <NavLink to={'/login'}>Sign In</NavLink>}
    </Fragment>
};

export default UserInfo;
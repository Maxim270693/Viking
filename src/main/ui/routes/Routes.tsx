import React from "react";
import {Route, Switch} from "react-router-dom";
import {Logo} from "../../../components/logo/Logo";
import {Search} from "../../../components/search/Search";

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} render={() => <Logo/>}/>
                <Route path={'/search'} render={() => <Search/>}/>
            </Switch>
        </div>
    )
}
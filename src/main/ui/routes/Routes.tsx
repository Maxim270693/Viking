import React from "react";
import {Route, Switch} from "react-router-dom";
import {Logo} from "../../../components/logo/Logo";
import {Search} from "../../../components/search/Search";
import Product from "../../../components/product/Product";

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} render={() => <Logo/>}/>
                <Route path={'/search'} render={() => <Search/>}/>
                <Route path={'/product'} render={() => <Product/>}/>
            </Switch>
        </div>
    )
}
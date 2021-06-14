import React from 'react';
import { Route } from "react-router-dom";
import SignIn from "../UserLogin/SignIn";
import SignUp from "../UserLogin/SignUp";
import Home from "../Home/Home";
import ServicesGuide from "../Service/ServicesGuide";

export const signInRoute = "/signin";
export const signUpRoute = "/signup";
export const homeRoute = "/home";
export const serviceRoute = "/services";

export default function Router() {
    return (
        <div>
            <Route path={signInRoute} exact component={SignIn} />
            <Route path={signUpRoute} exact component={SignUp} />
            <Route path={homeRoute} exact component={Home} />
            <Route path={serviceRoute} exact component={ServicesGuide} />
        </div>
    )
}
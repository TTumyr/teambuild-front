import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import SignIn from "./Pages/SignIn/SignIn"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Register from "./Pages/Register/Register"
import Apply from "./Pages/Apply/Apply"
import ViewProjects from "./Pages/ViewProjects/ViewProjects"
import NewProject from "./Pages/NewProject/NewProject"
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails"
import auth from "../utils/Auth"
import { PrivateRoute } from "../PrivateRoute"
import "./App.css"

const App = ({ hideLoader }) => {
    useEffect(() => hideLoader(), [])

    if (auth.isAuthenticated()) {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <PrivateRoute path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signin" exact component={SignIn} />
                    <Route path="/apply" exact component={Apply} />
                    <Route exact path="/projects" component={ViewProjects} />
                    <Route exact path="/projects/new" component={NewProject} />
                    <Route exact path="/projects/project" component={ProjectDetails} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App

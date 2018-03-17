import React, { Component } from 'react';
import {
    BrowserRouter,
    NavLink,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { Provider } from 'react-redux';
import styled, { css } from 'react-emotion';
import ContIn from '../ContIn/ContIn';
import ContOut from '../ContOut/ContOut';

const Navigation = styled('nav')`
    display:flex;
    padding: 15px;
    background-color: #414346;
`;

const linkClass = css`
    color: #eee;
    margin-right: 30px;
    text-decoration: none;
`;

const activeLinkClass = css`
    color: #fff;
    font-weight: bold;
`;

const Content = styled('div')`
  padding: 15px;
`;

class App extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Navigation>
                            <NavLink
                                className={linkClass}
                                activeClassName={activeLinkClass}
                                to="/conin"
                            >
                                ConIn
                            </NavLink>
                            <NavLink
                                className={linkClass}
                                activeClassName={activeLinkClass}
                                to="/conout"
                            >
                                ConOut
                            </NavLink>
                        </Navigation>
                        <Content>
                            <Switch>
                                <Redirect exact from='/' to='/conin' />
                                <Route path="/conin" component={ContIn} />
                                <Route path="/conout" component={ContOut} />
                            </Switch>
                        </Content>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

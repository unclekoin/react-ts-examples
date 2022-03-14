import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import Card, {CardVariant} from "./components/card";
import EventExample from "./components/event-example";
import UsersPage from "./components/users-page";
import TodosPage from "./components/todos-page";
import UserItemPage from "./components/user-item-page";
import TodoItemPage from "./components/todo-item-page";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div style={{marginBottom: 25}}>
                    <NavLink to={'/users'} style={{marginRight: 5}}>Users</NavLink>
                    <NavLink to={'/todos'} style={{marginRight: 5}}>Todos</NavLink>
                    <NavLink to={'/events'} style={{marginRight: 5}}>Events</NavLink>
                    <NavLink to={'/card'}>Card</NavLink>
                </div>
                <Route path={'/users'} exact>
                    <UsersPage/>
                </Route>
                <Route path={'/users/:id'}>
                    <UserItemPage />
                </Route>
                <Route path={'/todos'} exact>
                    <TodosPage/>
                </Route>
                <Route path={'/todos/:id'} exact>
                    <TodoItemPage />
                </Route>
                <Route path={'/events'} exact>
                    <EventExample/>
                </Route>
                <Route path={'/card'} exact>
                    <Card onClick={(num) => console.log("Click!", num)} variant={CardVariant.outlined} width="200px"
                          height="200px">
                        <button>Button</button>
                    </Card>
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;


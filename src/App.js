import React from 'react';
import TodoList from './todos/TodoList';
import { hot } from 'react-hot-loader';
import './App.css';


const App = () => (
    <div className="App">
        <TodoList />
    </div>
);

export default hot(module)(App);
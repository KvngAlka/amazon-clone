import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { DataProvider } from './DataContext';
import './index.css'
import {initialState, reducer} from './reducer'


ReactDOM.render(
    <DataProvider initialState = {initialState} reducer = {reducer}>
            <App/>
    </DataProvider>,
document.getElementById("root"));
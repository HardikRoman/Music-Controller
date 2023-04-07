import React, { Component } from 'react';
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import { BrowserRouter as Router, Route, Routes, Link, Redirect } from "react-router-dom";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>This is Home Page Section</p>
    }

}
import React, { Component } from "react";
import { render } from "react-dom";
import CreateRoomPage from "./CreateRoomPage";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import { BrowserRouter as Router, Route, Routes, Link, Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";

const RoomWrapper = () => {
    const { roomCode } = useParams();
    return <Room roomCode={roomCode} />;
};

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="center">
                <Router>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/join/*' element={<RoomJoinPage />} />
                        <Route path='/create/*' element={<CreateRoomPage />} />
                        <Route path='/room/:roomCode' element={<RoomWrapper />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

const appDiv = document.querySelector('#app');
render(<App />, appDiv);
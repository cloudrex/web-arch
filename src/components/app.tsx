import React from "react";
import Layout from "./layout";
import "../styles/app.css";
import TopBar from "./topBar";
import Canvas from "./canvas";
import Sidebar from "./sidebar";
import StatusBar from "./statusBar";
import Inspector from "./inspector";

const App: React.FC = () => {
    return (
        <div className="app">
            <Sidebar />
            <TopBar />
            <div className="content-wrap">
                <Layout />
                <Canvas />
                <Inspector />
            </div>
            <StatusBar />
        </div>
    );
}

export default App;

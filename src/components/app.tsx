import React from "react";
import Layout from "./layout";
import "../styles/app.css";
import TopBar from "./topBar";
import Canvas from "./canvas";

const App: React.FC = () => {
    return (
        <div className="app">
            <TopBar />
            <div className="content-wrap">
                <Layout />
                <Canvas />
            </div>
        </div>
    );
}

export default App;

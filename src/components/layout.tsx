import React from "react";
import "../styles/layout.css";
import LayoutItem from "./layoutItem";
import {faDatabase, faCube, faExternalLinkSquareAlt, faSubscript} from "@fortawesome/free-solid-svg-icons";

const Layout: React.FC = () => {
    return (
        <div className="layout pane">
            <div className="pane-label">Layout</div>
            <LayoutItem name="Item 1" />
            <LayoutItem name="Item 2" />
            <LayoutItem name="Item 3" />
            <LayoutItem name="Component 1" icon={faCube} />
            <LayoutItem name="List 1" icon={faDatabase} />
            <LayoutItem name="Embed 1" icon={faExternalLinkSquareAlt} />
            <LayoutItem name="Variable 1" icon={faSubscript} />
        </div>
    );
}

export default Layout;

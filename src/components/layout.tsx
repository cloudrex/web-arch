import React from "react";
import "../styles/layout.css";
import LayoutItem from "./layoutItem";

const Layout: React.FC = () => {
    return (
        <div className="layout pane">
            <LayoutItem name="Test" />
        </div>
    );
}

export default Layout;

import React from "react";
import "../styles/sidebar.css";
import SidebarItem from "./sidebarItem";
import {faPlus, faDatabase, faCog} from "@fortawesome/free-solid-svg-icons";
import ToolsFigure from "../assets/tools.png";

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar pane">
            <img className="sidebar-item logo" alt="Logo" height="30" src={ToolsFigure} />
            <SidebarItem icon={faPlus} />
            <SidebarItem icon={faDatabase} />
            <SidebarItem icon={faCog} />
        </div>
    );
}

export default Sidebar;

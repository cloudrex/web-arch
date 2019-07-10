import React from "react";
import "../styles/sidebar.css";
import SidebarItem from "./sidebarItem";
import {faPlus, faDatabase, faCog, faSubscript, faQuestion, faCloud, faBox} from "@fortawesome/free-solid-svg-icons";
import ToolsFigure from "../assets/tools.png";

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar pane v-group">
            <div className="side">
                <img className="sidebar-item logo" alt="Logo" height="30" src={ToolsFigure} />
                <SidebarItem name="Add Element" icon={faPlus} />
                <SidebarItem name="Assets" icon={faBox} />
                <SidebarItem name="Collections" icon={faDatabase} />
                <SidebarItem name="Dynamic Content" icon={faSubscript} />
                <SidebarItem disabled name="Explore (Unavailable)" icon={faCloud} />
            </div>
            <div className="side">
                <SidebarItem name="Settings" icon={faCog} />
                <SidebarItem disabled name="Help (Unavailable)" icon={faQuestion} />
            </div>
        </div>
    );
}

export default Sidebar;

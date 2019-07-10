import React from "react";
import "../styles/sidebar.css";
import SidebarItem from "./sidebarItem";
import {faPlus, faDatabase, faCog, faSubscript, faQuestion, faCloud, faBox} from "@fortawesome/free-solid-svg-icons";
import ToolsFigure from "../assets/tools.png";
import SidePanel from "./sidePanel";
import {Query} from "react-apollo";
import {FETCH_ITEMS} from "../queries";

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
            <SidePanel label="Collection">
                <Query query={FETCH_ITEMS}>
                    {({ data, loading, error }) => {
                        if (loading) {
                            return "Loading...";
                        }

                        if (error) {
                            return "Error!";
                        }

                        return (
                            <div>
                                It's loaded!
                            </div>
                        );
                    }}
                </Query>
            </SidePanel>
        </div>
    );
}

export default Sidebar;

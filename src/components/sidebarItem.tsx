import React from "react";
import "../styles/sidebarItem.css";

interface IProps {
    readonly name: string;
}

const SidebarItem: React.FC<IProps> = (props: IProps) => {
    return (
        <div className="sidebar-item">
            <FontAwesomeIcon />
            {props.name}
        </div>
    );
}

export default SidebarItem;

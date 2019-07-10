import React from "react";
import "../styles/sidebarItem.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

interface IProps {
    readonly icon: IconDefinition;
}

const SidebarItem: React.FC<IProps> = (props: IProps) => {
    return (
        <div className="sidebar-item flex-center">
            <FontAwesomeIcon icon={props.icon} />
        </div>
    );
}

export default SidebarItem;

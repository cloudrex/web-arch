import React, {ReactNode} from "react";
import "../styles/layoutItem.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition, faCodeBranch} from "@fortawesome/free-solid-svg-icons";

interface IProps {
    readonly icon?: IconDefinition;

    readonly name: string;
}

class LayoutItem extends React.Component<IProps> {
    public static readonly defaultProps: Partial<IProps> = {
        icon: faCodeBranch
    };

    public render(): ReactNode {
        return (
            <div className="layout-item"><FontAwesomeIcon icon={this.props.icon as IconDefinition} /> {this.props.name}</div>
        );
    }
}

export default LayoutItem;

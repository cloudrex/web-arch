import React, {ReactNode} from "react";
import "../styles/iconButton.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

type Props = {
    readonly icon: IconDefinition;

    readonly size?: number;

    readonly iconSize?: number;
};

class IconButton extends React.Component<Props> {
    public static props: Partial<Props> = {
        size: 15,
        iconSize: 1
    };

    public render(): ReactNode {
        return (
            <div className="icon-button flex-center">
                <FontAwesomeIcon style={{
                    width: this.props.size + "px",
                    height: this.props.size + "px",
                    fontSize: this.props.iconSize + "em"
                }} icon={this.props.icon} />
            </div>
        );
    }
}

export default IconButton;

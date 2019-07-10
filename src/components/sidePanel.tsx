import React, {ReactNode} from "react";
import "../styles/sidePanel.css";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import IconButton from "./iconButton";

type Props = {
    readonly label: string;
};

class SidePanel extends React.Component<Props> {
    public render(): ReactNode {
        return (
            <div className="side-panel pane">
                <IconButton icon={faTimes} />
                <div className="pane-label no-pad">{this.props.label}</div>
                {this.props.children}
            </div>
        );
    }
}

export default SidePanel;

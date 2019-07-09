import React from "react";
import "../styles/topBar.css";
import Button, {ButtonColor} from "./button";

const TopBar: React.FC = () => {
    return (
        <div className="top-bar pane">
            <Button color={ButtonColor.Green}>Publish</Button>
        </div>
    );
}

export default TopBar;

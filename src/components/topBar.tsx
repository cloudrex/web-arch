import React from "react";
import "../styles/topBar.css";
import Button, {ButtonColor} from "./button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudUploadAlt, faEye} from "@fortawesome/free-solid-svg-icons";

const TopBar: React.FC = () => {
    return (
        <div className="top-bar pane">
            <Button><FontAwesomeIcon icon={faEye} /> Preview</Button>
            <Button color={ButtonColor.Green}><FontAwesomeIcon icon={faCloudUploadAlt} /> Publish</Button>
        </div>
    );
}

export default TopBar;

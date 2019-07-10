import React from "react";
import "../styles/loader.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <FontAwesomeIcon icon={faCircleNotch} />
        </div>
    );
}

export default Loader;

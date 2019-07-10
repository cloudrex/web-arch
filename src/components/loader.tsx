import React from "react";
import "../styles/loader.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";

type Props = {
    readonly text?: string;
};

const Loader: React.FC<Props> = (props: Props) => {
    return (
        <div className="loader">
            <FontAwesomeIcon icon={faCircleNotch} />{props.text ? " " + props.text : undefined}
        </div>
    );
}

export default Loader;

import React from "react";
import "../styles/mask.css";

const Mask: React.FC = (props) => {
    return (
        <div className="mask flex-center expand">
            {props.children}
        </div>
    );
}

export default Mask;

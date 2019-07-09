import React from "react";
import "../styles/layoutItem.css";

interface IProps {
    readonly name: string;
}

const LayoutItem: React.FC<IProps> = (props: IProps) => {
    return (
        <div className="layout-item">
            {props.name}
        </div>
    );
}

export default LayoutItem;

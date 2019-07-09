import React from "react";
import "./styles/inspectorItem.css";

interface IProps {
    readonly name: string;
}

const InspectorItem: React.FC<IProps> = (props: IProps) => {
    return (
        <div className="inspector-item">
            {props.name}
        </div>
    );
}

export default InspectorItem;

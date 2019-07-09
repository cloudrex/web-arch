import React from "react";
import "./styles/inspector.css";
import InspectorItem from "./inspectorItem";

const Inspector: React.FC = () => {
    return (
        <div className="inspector">
            <InspectorItem name="Test" />
        </div>
    );
}

export default Inspector;

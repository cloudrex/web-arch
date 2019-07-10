import React from "react";
import "../styles/inspector.css";

const Inspector: React.FC = () => {
    return (
        <div className="inspector pane">
            <div className="pane-label">Inspector</div>
            <div className="spacing-controls group disabled">
                <div className="control h-bar v-arrow">0px</div>
                <div className="h-group">
                    <div className="control v-bar h-arrow">0px</div>
                    <div className="control v-bar center" />
                    <div className="control v-bar h-arrow">0px</div>
                </div>
                <div className="control h-bar v-arrow">0px</div>
            </div>
        </div>
    );
}

export default Inspector;

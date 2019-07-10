import React from "react";
import "../styles/canvas.css";
import BrushFigure from "../assets/brush.png";

const Canvas: React.FC = () => {
    return (
        <div className="canvas">
            <div className="default expand flex-center v-group">
                <img height="200" alt="Brush" src={BrushFigure} />
                <h1 className="heading">Place an element to get started</h1>
            </div>
        </div>
    );
}

export default Canvas;

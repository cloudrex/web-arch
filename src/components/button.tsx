import React, {ReactNode} from "react";
import {Callback} from "../index";

export enum ButtonColor {
    Green = "green",

    Blue = "blue"
}

interface IProps {
    readonly color?: ButtonColor;

    readonly disabled?: boolean;

    readonly processingState?: ReactNode;

    readonly processing?: boolean;

    readonly onClick?: Callback;
}

class Button extends React.Component<IProps> {
    protected getClassNames(): string | undefined {
        const classes: string[] = [];

        if (this.props.disabled || this.props.processing) {
            classes.push("disabled");
        }

        if (this.props.color !== undefined) {
            classes.push(this.props.color);
        }

        return classes.length > 0 ? classes.join(" ") : undefined;
    }

    protected renderChildren(): ReactNode {
        if (this.props.processing) {
            return this.props.processingState;
        }

        return this.props.children;
    }

    protected handleClick(): void {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    public render(): ReactNode {
        return (
            <button onClick={() => this.handleClick()} className={this.getClassNames()}>
                {this.renderChildren()}
            </button>
        );
    }
}

export default Button;

import React, {ReactNode} from "react";

export enum ButtonColor {
    Green = "green",

    Blue = "blue"
}

interface IProps {
    readonly color?: ButtonColor;

    readonly disabled?: boolean;
}

class Button extends React.Component<IProps> {
    protected getClassNames(): string | undefined {
        const classes: string[] = [];

        if (this.props.disabled) {
            classes.push("disabled");
        }

        if (this.props.color !== undefined) {
            classes.push(this.props.color);
        }

        return classes.length > 0 ? classes.join(" ") : undefined;
    }

    public render(): ReactNode {
        return (
            <button className={this.getClassNames()}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;

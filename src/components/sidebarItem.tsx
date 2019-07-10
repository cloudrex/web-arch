import React, {forwardRef, ReactNode} from "react";
import "../styles/sidebarItem.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import Tippy from "@tippy.js/react";

interface IContentProps {
    readonly icon: IconDefinition;

    readonly className?: string;
}

type Props = {
    readonly name: string;

    readonly icon: IconDefinition;

    readonly disabled?: boolean;
};

const Content = forwardRef<{}, IContentProps>((props, ref: any) => (
    <div ref={ref} className={"sidebar-item flex-center" + (props.className ? " " + props.className : "")}>
        <FontAwesomeIcon icon={props.icon} />
    </div>
));

class SidebarItem extends React.Component<Props> {
    protected getClassNames(): string | undefined {
        const classes: string[] = [];

        if (this.props.disabled) {
            classes.push("disabled");
        }

        return classes.length > 0 ? classes.join(" ") : undefined;
    }

    public render(): ReactNode {
        return (
            <Tippy arrow={true} distance={10} duration={200} delay={[1000, 0]} content={this.props.name} placement="right">
                <Content className={this.getClassNames()} icon={this.props.icon} />
            </Tippy>
        );
    }
}

export default SidebarItem;

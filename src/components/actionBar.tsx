import React, {ReactNode} from "react";
import "../styles/actionBar.css";
import Button, {ButtonColor} from "./button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudUploadAlt, faEye, faDownload} from "@fortawesome/free-solid-svg-icons";
import Loader from "./loader";
import Select from "react-select";

interface IState {
    readonly publishing: boolean;
}

const testOptions: any[] = [
    {
        value: "default.webarch.dev",
        label: "default.webarch.dev"
    }
];

class TopBar extends React.Component<{}, IState> {
    public readonly state: IState = {
        publishing: false
    };

    protected publish(): void {
        this.setState({
            publishing: true
        });

        setTimeout(() => {
            this.setState({
                publishing: false
            });
        }, 3000);
    }

    public render(): ReactNode {
        return (
            <div className="action-bar pane h-group">
                <div className="h-group flex-expand">
                    <Button><FontAwesomeIcon icon={faEye} /> Preview</Button>
                </div>
                <div className="h-group">
                    <Button><FontAwesomeIcon icon={faDownload} /> Export Project</Button>
                    <Select value={testOptions[0]} className="select" options={testOptions} />
                    <Button
                        onClick={() => this.publish()}
                        processing={this.state.publishing}
                        color={ButtonColor.Green}
                        processingState={<Loader text="Publishing" />}
                    >
                        <FontAwesomeIcon icon={faCloudUploadAlt} /> Publish
                    </Button>
                </div>
            </div>
        );
    }
}

export default TopBar;

import React, { ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";
import Tether from "tether";

const tetherRoot = document.getElementById("tether");

export interface Props {
    children?: ReactNode | ReactElement | ReactElement[];
    tooltip: ReactElement;
    visible?: boolean;
    attachment: string;
    targetAttachment: string;
    offset?: string;
    constraintTo?: string;
    constraintAttachment?: string;
    zIndex?: string;
    changedPosition?: boolean;
    fullscreen?: boolean;
    disablePin?: boolean;
}

class WithTooltip extends React.Component<Props, {}> {
    anchor: HTMLSpanElement | null;
    tether: Tether | null;
    tooltipWrapper: HTMLSpanElement;
    constructor(props: Props) {
        super(props);
        this.anchor = null;
        this.tether = null;
        this.tooltipWrapper = document.createElement("span");
        this.tooltipWrapper.style.zIndex = props.zIndex ? props.zIndex : "999";
    }

    getConstraints = (constraintTo?: string, constraintAttachment?: string, disablePin?: boolean) => {
        if (constraintTo) {
            return [
                {
                    to: constraintTo,
                    attachment: constraintAttachment || "together",
                    pin: !disablePin
                }
            ];
        } else {
            return [];
        }
    };

    componentDidMount() {
        const {
            attachment,
            targetAttachment,
            offset,
            constraintTo,
            visible,
            fullscreen,
            constraintAttachment,
            disablePin
        } = this.props;

        if (visible) {
            if (fullscreen) document.fullscreenElement?.appendChild(this.tooltipWrapper);
            else tetherRoot?.appendChild(this.tooltipWrapper);

            this.tether = new Tether({
                element: this.tooltipWrapper,
                target: this.anchor,
                attachment: attachment,
                targetAttachment: targetAttachment,
                targetOffset: offset ? offset : "0 0",
                constraints: this.getConstraints(constraintTo, constraintAttachment, disablePin)
            });
            this.tether?.position();
        }
    }

    componentDidUpdate(prevProps: Props) {
        const {
            attachment,
            targetAttachment,
            offset,
            constraintTo,
            changedPosition,
            fullscreen,
            constraintAttachment,
            disablePin
        } = this.props;
        const { fullscreen: prevFullscreen } = prevProps;

        if (prevFullscreen !== fullscreen) {
            this.cleanup(!!prevFullscreen);
        }

        if (changedPosition !== !changedPosition) {
            this.tether?.position();
        }
        if (this.props.visible && !this.tether) {
            if (fullscreen) document.fullscreenElement?.appendChild(this.tooltipWrapper);
            else tetherRoot?.appendChild(this.tooltipWrapper);

            this.tether = new Tether({
                element: this.tooltipWrapper,
                target: this.anchor,
                attachment: attachment,
                targetAttachment: targetAttachment,
                targetOffset: offset ? offset : "0 0",
                constraints: this.getConstraints(constraintTo, constraintAttachment, disablePin)
            });
            this.tether?.position();
        }
    }

    cleanup(fullscreen: boolean) {
        if (this.tether && tetherRoot) {
            this.tether?.destroy();
            this.tether = null;
            this.anchor = null;
            if (fullscreen) document?.fullscreenElement?.removeChild(this.tooltipWrapper);
            else tetherRoot && tetherRoot.removeChild(this.tooltipWrapper);
        }
    }

    componentWillUnmount() {
        const { fullscreen } = this.props;
        this.cleanup(!!fullscreen);
    }

    render() {
        return (
            <span ref={node => (this.anchor = node)}>
                {ReactDOM.createPortal(this.props.visible && this.props.tooltip, this.tooltipWrapper)}
                {this.props.children}
            </span>
        );
    }
}

export default WithTooltip;

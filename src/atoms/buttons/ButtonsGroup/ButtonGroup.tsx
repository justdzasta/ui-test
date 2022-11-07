import React, { MouseEventHandler, ReactElement, ReactNode } from "react";
import Icon from "../../Icon/Icon";
import css from "./ButtonsGroup.scss";

interface Props {
    active?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode | ReactElement | ReactElement[];
    icon?: string;
    className?: string;
    single?: boolean;
}

const ButtonGroup = (props: Props) => {
    const { onClick = () => undefined, children, icon, active = false, disabled = false, className, single } = props;
    return (
        <button className={css("button", className && className, { active, disabled, single })} onClick={onClick}>
            {icon && <Icon className={css(children && "icon")} name={icon} />}
            {children}
        </button>
    );
};

export default ButtonGroup;

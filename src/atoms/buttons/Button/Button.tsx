import React, { ReactElement, ReactNode } from "react";
import Icon from "../../Icon/Icon";
import css from "./Button.scss";

interface Props {
    variant?: "primary" | "secondary" | "danger" | "live" | "warn" | "info" | "success";
    size?: "large" | "medium" | "small";
    type?: "button" | "reset" | "submit";
    onClick?: (event: React.MouseEvent) => void;
    children?: ReactNode | ReactElement | ReactElement[];
    icon?: string;
    className?: string;
    disabled?: boolean;
}

const Button = (props: Props) => {
    const { type, variant = "primary", size = "large", onClick, children, icon, className, disabled } = props;
    return (
        <button
            className={css("button", variant, size, className, disabled && "disabled")}
            type={type || "button"}
            onClick={onClick}
        >
            {icon && <Icon className={css("icon", children && "icon-marg")} name={icon} />}
            {children}
        </button>
    );
};

export default Button;

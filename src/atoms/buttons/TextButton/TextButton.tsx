import React, { ReactElement, ReactNode } from "react";
import Icon from "../../Icon/Icon";
import css from "./TextButton.scss";

interface Props {
    variant?: "primary" | "secondary" | "danger" | "live";
    size?: "medium" | "small";
    type?: "button" | "reset" | "submit";
    onClick?: (e?: any) => void;
    children?: ReactNode | ReactElement | ReactElement[];
    icon?: string;
    className?: string;
    disabled?: boolean;
}

const TextButton = (props: Props) => {
    const { type, variant = "primary", size = "medium", onClick, children, icon, className, disabled } = props;
    return (
        <button
            className={css("button", variant, size, className, disabled && "disabled")}
            type={type || "button"}
            onClick={onClick}
        >
            {icon && <Icon className={css("icon", children && "spacer")} name={icon} />}
            {children}
        </button>
    );
};

export default TextButton;

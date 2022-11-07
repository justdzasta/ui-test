import React, { ReactElement, ReactNode } from "react";
import Icon from "../../Icon/Icon";
import css from "./ButtonWithLoading.scss";

interface Props {
    variant?: "primary" | "secondary" | "danger" | "live" | "info" | "warn" | "success";
    size?: "large" | "medium" | "small";
    type?: "button" | "reset" | "submit";
    onClick?: (event: React.MouseEvent) => void;
    children?: ReactNode | ReactElement | ReactElement[];
    icon?: string;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
}

const ButtonWithLoading = (props: Props) => {
    const {
        type,
        variant = "primary",
        size = "large",
        onClick,
        children,
        icon,
        className,
        disabled,
        loading = false
    } = props;
    return (
        <button
            className={css("button", variant, size, className, disabled && "disabled")}
            type={type || "button"}
            onClick={onClick}
        >
            <span className={css({ loading })}>
                {icon && <Icon className={css("icon", children && "icon-marg")} name={icon} />}
                {children}
            </span>
            {loading && <Icon className={css("icon-loading", children && "icon-marg")} name="spinner-small" />}
        </button>
    );
};

export default ButtonWithLoading;

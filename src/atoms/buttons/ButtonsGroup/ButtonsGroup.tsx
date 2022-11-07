import React, { ReactElement, ReactNode } from "react";
import css from "./ButtonsGroup.scss";

interface Props {
    children: ReactNode | ReactElement | ReactElement[];
    disabled?: boolean;
    className?: string;
}

const ButtonsGroup = (props: Props) => {
    const { children, disabled, className } = props;
    return <div className={css(className, { disabled })}>{children}</div>;
};

export default ButtonsGroup;

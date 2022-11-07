import React, { ReactElement, ReactNode } from "react";
import css from "./Theme.scss";

interface Props {
    name: "dark" | "light";
    children: ReactNode | ReactElement | ReactElement[];
}

const Theme = (props: Props) => {
    const { name, children } = props;
    return <div className={css("root", name)}>{children}</div>;
}

export default Theme;
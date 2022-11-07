import React from "react";
import css from "./Icon.scss";

interface Props {
    name: string;
    className?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent) => void;
}

const icons: { [index: string]: string } = {};

const Icon = (props: Props) => {
    const { onClick, name, className, disabled } = props;

    const icon = () => {
        try {
            return require(`./assets/${name}.svg`);
        } catch (e) {
            return require(`./assets/icon_placeholder.svg`);
        }
    };
    return (
        <i
            dangerouslySetInnerHTML={{ __html: icon() }}
            className={css(className, disabled, "root")}
            onClick={onClick}
        ></i>
    );
};

export default Icon;

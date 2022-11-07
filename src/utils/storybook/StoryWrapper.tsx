import React, { ReactNode, ReactElement, useEffect, useRef } from "react";
import css from "./App.scss";

interface Props {
    children: ReactNode | ReactElement | ReactElement[];
    theme?: string;
    className?: string;
}

const StoryWrapper = (props: Props) => {
    const { children, theme, className } = props;
    const container = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (container.current) {
            container.current.classList.add(css(theme || "jedi"));
        }
    }, [container]);

    return (
        <div
            ref={container}
            className={css(className, "root")}
            style={{
                lineHeight: "1.71429em",
                color: "var(--txt-primary) !important",
                fontFamily: "Roboto, Helvetica, Arial, sans-serif"
            }}
        >
            {children}
        </div>
    );
};

export default StoryWrapper;

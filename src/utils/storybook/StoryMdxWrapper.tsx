import React, { ReactNode, ReactElement, useEffect, useRef } from "react";
import StoryWrapper from "./StoryWrapper";
import css from "./StoryMdxWrapper.scss";

interface Props {
    children: ReactNode | ReactElement | ReactElement[];
}

export default ({ children }: Props) => {
    return (
        <StoryWrapper>
            <div className={css("def")}>{children}</div>
        </StoryWrapper>
    );
};

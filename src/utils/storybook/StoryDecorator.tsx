import React from "react";
import StoryWrapper from "./StoryWrapper";

const StoryDecorator = (Story: any) => {
    return (
        <StoryWrapper>
            <Story />
        </StoryWrapper>
    );
};

export default StoryDecorator;

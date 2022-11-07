import React from "react";
import ButtonWithLoading from "./ButtonWithLoading";
import StoryDecorator from "../../../utils/storybook/StoryDecorator";

export default {
    title: "components/atoms/buttons/ButtonWithLoading",
    component: ButtonWithLoading,
    decorators: [StoryDecorator]
};

export const ButtonWithLoadingExample = () => {
    return <ButtonWithLoading loading={true}> Button </ButtonWithLoading>;
};

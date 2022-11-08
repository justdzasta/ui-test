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

ButtonWithLoadingExample.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/r0r0P6pWQ3G191PUrygq2r/Untitled?node-id=0%3A1"
  }
}

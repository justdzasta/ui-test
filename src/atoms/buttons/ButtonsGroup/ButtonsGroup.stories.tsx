import React from "react";
import ButtonGroup from "./ButtonGroup";
import ButtonsGroup from "./ButtonsGroup";
import StoryDecorator from "../../../utils/storybook/StoryDecorator";

export default {
    title: "components/atoms/buttons/ButtonsGroup",
    component: ButtonGroup,
    decorators: [StoryDecorator]
};

export const MainButtonGroup = () => {
    return (
        <ButtonsGroup>
            <ButtonGroup> Button </ButtonGroup>
            <ButtonGroup> Button </ButtonGroup>
            <ButtonGroup> Button </ButtonGroup>
        </ButtonsGroup>
    );
};

export const ActiveButtonGroup = () => {
    return (
        <ButtonsGroup>
            <ButtonGroup active={true}> Button </ButtonGroup>
            <ButtonGroup active={true}> Button </ButtonGroup>
            <ButtonGroup active={true}> Button </ButtonGroup>
        </ButtonsGroup>
    );
};

export const MainButtonGroupWithIcon = () => {
    return (
        <ButtonsGroup>
            <ButtonGroup icon="delete"> Button </ButtonGroup>
            <ButtonGroup icon="icon_plus"> Button </ButtonGroup>
            <ButtonGroup icon="image"> Button </ButtonGroup>
        </ButtonsGroup>
    );
};

// export const MainIconButtonGroup = () => {
//     return (
//         <ButtonsGroup>
//             <ButtonGroup icon="list"></ButtonGroup>
//             <ButtonGroup icon="grid"></ButtonGroup>
//         </ButtonsGroup>
//     );
// };

export const MainIconButtonGroup = () => <MainIconButtonGroup />

MainIconButtonGroup.parameters = {
  design: {
    type: 'figspec',
    url: 'https://www.figma.com/file/r0r0P6pWQ3G191PUrygq2r/Untitled?node-id=1%3A2',
    accessToken: 'figd_zl5tokX0OQ5D8jdmXzQtUjuoCqsvZ_FWdg59vzjF',
  },
}

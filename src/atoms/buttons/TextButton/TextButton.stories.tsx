import React from "react";
import TextButton from "./TextButton";
import StoryDecorator from "../../../utils/storybook/StoryDecorator";

export default {
    title: "components/atoms/buttons/TextButton",
    component: TextButton,
    decorators: [StoryDecorator]
};

export const MainTextButton = () => {
    return <TextButton> Button </TextButton>;
};

export const PrimarySmall = () => {
    return <TextButton size="small"> Button </TextButton>;
};

export const MainTextButtonWithIcon = () => {
    return <TextButton icon="scissors"> Button </TextButton>;
};

export const PrimarySmallWithIcon = () => {
    return (
        <TextButton size="small" icon="scissors">
            {" "}
            Button{" "}
        </TextButton>
    );
};

export const SecondaryMainTextButton = () => {
    return <TextButton type="secondary"> Button </TextButton>;
};

export const SecondarySmallTextButton = () => {
    return (
        <TextButton type="secondary" size="small">
            {" "}
            Button{" "}
        </TextButton>
    );
};

export const DangerMainTextButton = () => {
    return <TextButton type="danger"> Button </TextButton>;
};

export const DangerMediumTextButton = () => {
    return (
        <TextButton type="danger" size="medium">
            {" "}
            Button{" "}
        </TextButton>
    );
};

export const DangerSmallTextButton = () => {
    return (
        <TextButton type="danger" size="small">
            {" "}
            Button{" "}
        </TextButton>
    );
};

export const LiveMainTextButton = () => {
    return <TextButton type="live"> Button </TextButton>;
};

export const LiveMediumTextButton = () => {
    return (
        <TextButton type="live" size="medium">
            {" "}
            Button{" "}
        </TextButton>
    );
};

export const LiveSmallTextButton = () => {
    return (
        <TextButton type="live" size="small">
            {" "}
            Button{" "}
        </TextButton>
    );
};

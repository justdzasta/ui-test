import React from "react";
import Button from "./Button";
import StoryDecorator from "../../../utils/storybook/StoryDecorator";

export default {
    title: "components/atoms/buttons/Button",
    component: Button,
    decorators: [StoryDecorator]
};

export const MainActionButton = () => {
    return <Button> Button </Button>;
};

export const MediumActionButton = () => {
    return <Button size="medium"> Button </Button>;
};

export const SmallActionButton = () => {
    return <Button size="small"> Button </Button>;
};

export const ButtonLoading = () => {
    return <Button icon="spinner-small"></Button>;
};

export const MainActionButtonWithIcon = () => {
    return <Button icon="scissors_new"> Button </Button>;
};

export const MediumActionButtonWithIcon = () => {
    return (
        <Button size="medium" icon="scissors_new">
            {" "}
            Button{" "}
        </Button>
    );
};

export const SmallActionButtonWithIcon = () => {
    return (
        <Button size="small" icon="scissors_new">
            {" "}
            Button{" "}
        </Button>
    );
};

export const SecondaryMainActionButton = () => {
    return <Button type="secondary"> Button </Button>;
};

export const SecondaryMediumActionButton = () => {
    return (
        <Button type="secondary" size="medium">
            {" "}
            Button{" "}
        </Button>
    );
};

export const SecondarySmallActionButton = () => {
    return (
        <Button type="secondary" size="small">
            {" "}
            Button{" "}
        </Button>
    );
};

export const DangerActionButton = () => {
    return <Button type="danger"> Button </Button>;
};

export const DangerMediumActionButton = () => {
    return (
        <Button type="danger" size="medium">
            {" "}
            Button{" "}
        </Button>
    );
};

export const DangerSmallActionButton = () => {
    return (
        <Button type="danger" size="small">
            {" "}
            Button{" "}
        </Button>
    );
};

export const LiveActionButton = () => {
    return <Button type="live"> Button </Button>;
};

export const LiveMediumActionButton = () => {
    return (
        <Button type="live" size="medium">
            {" "}
            Button{" "}
        </Button>
    );
};

export const LiveSmallActionButton = () => {
    return (
        <Button type="live" size="small">
            {" "}
            Button{" "}
        </Button>
    );
};

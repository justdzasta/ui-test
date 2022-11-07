import React, { useEffect, useRef } from "react";
import Theme from "./Theme";
import StoryDecorator from "../../utils/storybook/StoryDecorator";
import css from "./Theme.scss";

export default {
    title: "components/atoms/Theme",
    component: Theme,
    decorators: [StoryDecorator]
};

interface Props {
    name: string;
}

const variables = [
    "LAYOUT",
    "--ui-container-bg",
    "--ui-container-bg-low",
    "--ui-container-bg-bottom",
    "--ui-bg-high",
    "--ui-bg",
    "--ui-border-bright",
    "--ui-border",
    "--ui-border-rgba",
    "--ui-border-dark",
    "--ui-divider-bright",
    "--ui-divider",
    "--ui-divider-dark",
    "--ui-scroll",
    "--ui-scroll-bg",
    "--ui-shadow",
    "--ui-dialog-mask",
    "--ui-mask",
    "--ui-scroll-bg",
    "--ui-placeholder",
    "TYPOGRAPHY",
    "--txt-primary",
    "--txt-secondary",
    "--txt-lighter",
    "--txt-tertiary",
    "--txt-contrast",
    "--txt-on-top",
    "BUTTONS",
    "--btn-primary",
    "--btn-primary-hover",
    "--btn-primary-active",
    "--btn-secondary",
    "--btn-secondary-hover",
    "--btn-secondary-active",
    "--btn-outline-border",
    "--btn-outline-bg-hover",
    "--btn-outline-bg-active",
    "--btn-outline-secondary-border",
    "--btn-outline-secondary-bg-hover",
    "--btn-outline-secondary-bg-active",
    "--btn-txt",
    "--btn-txt-hover",
    "--btn-txt-active",
    "--btn-txt-secondary",
    "--btn-txt-secondary-hover",
    "--btn-txt-secondary-active",
    "--btn-ui-danger",
    "--btn-ui-danger-bg",
    "--btn-ui-danger-hover",
    "--btn-ui-danger-active",
    "--btn-ui-live",
    "--btn-ui-live-bg",
    "--btn-ui-live-hover",
    "--btn-ui-live-active",
    "INTERACTIONS",
    "--int-active",
    "--int-active-bg",
    "--int-hover",
    "--int-tooltip",
    "FORMS",
    "--inp-bg",
    "--inp-bg-disabled",
    "--inp-border",
    "--inp-border-disabled",
    "--inp-border-active",
    "--inp-addon",
    "--inp-addon-bg",
    "--inp-border-inline-active",
    "SEMANTIC COLOURS",
    "--ui-info",
    "--ui-info-bg",
    "--ui-success",
    "--ui-success-bg",
    "--ui-warning",
    "--ui-warning-bg",
    "--ui-danger",
    "--ui-danger-bg",
    "--ui-live",
    "--ui-live-bg",
    "--ui-info-secondary",
    "--ui-info-secondary-bg"];

const StoryRow = (props: Props) => {
    const { name } = props;

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (divRef.current) {
            divRef.current.style.backgroundColor = `var(${name})`;
        }
    }, []);

    return (
        <div ref={divRef} className={css("story-row")}>
            {name}
        </div>
    );
};

const StoryLabel = (props: Props) => {
    const { name } = props;
    return <h1>{name}</h1>;
};

interface StoryProps {
    name: "dark" | "light";
}

const Story = (props: StoryProps) => {
    const { name } = props;
    return (
        <Theme name={name}>
            {variables.map((variable: string) => {
                if (variable.includes("--")) {
                    return <StoryRow name={variable} />;
                }
                return <StoryLabel name={variable} />;
            })}
        </Theme>
    );
};

export const ProLight = () => <Story name="dark" />;

export const ProDark = () => <Story name="light" />;
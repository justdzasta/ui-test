import React, { ReactElement, ReactNode } from "react";
interface Props {
    variant?: "primary" | "secondary" | "danger" | "live" | "info" | "warn" | "success";
    size?: "large" | "medium" | "small";
    type?: "button" | "reset" | "submit";
    onClick?: (event: React.MouseEvent) => void;
    children?: ReactNode | ReactElement | ReactElement[];
    icon?: string;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
}
declare const ButtonWithLoading: (props: Props) => JSX.Element;
export default ButtonWithLoading;
//# sourceMappingURL=ButtonWithLoading.d.ts.map
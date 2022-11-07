import { ReactElement, ReactNode } from "react";
interface Props {
    variant?: "primary" | "secondary" | "danger" | "live";
    size?: "medium" | "small";
    type?: "button" | "reset" | "submit";
    onClick?: (e?: any) => void;
    children?: ReactNode | ReactElement | ReactElement[];
    icon?: string;
    className?: string;
    disabled?: boolean;
}
declare const TextButton: (props: Props) => JSX.Element;
export default TextButton;
//# sourceMappingURL=TextButton.d.ts.map
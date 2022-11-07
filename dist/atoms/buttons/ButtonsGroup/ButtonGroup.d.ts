import { MouseEventHandler, ReactElement, ReactNode } from "react";
interface Props {
    active?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode | ReactElement | ReactElement[];
    icon?: string;
    className?: string;
    single?: boolean;
}
declare const ButtonGroup: (props: Props) => JSX.Element;
export default ButtonGroup;
//# sourceMappingURL=ButtonGroup.d.ts.map
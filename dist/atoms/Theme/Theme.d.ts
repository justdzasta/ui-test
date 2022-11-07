import { ReactElement, ReactNode } from "react";
interface Props {
    name: "dark" | "light";
    children: ReactNode | ReactElement | ReactElement[];
}
declare const Theme: (props: Props) => JSX.Element;
export default Theme;
//# sourceMappingURL=Theme.d.ts.map
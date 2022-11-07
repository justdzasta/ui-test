declare module "*.scss" {
    import classNames = require("classnames");

    interface Stylesheet {
        [propertyKey: string]: string;
    }

    const stylesheet: typeof classNames & Stylesheet;
    export = stylesheet;
}

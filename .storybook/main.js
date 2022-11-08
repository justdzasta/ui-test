const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "storybook-addon-designs"],
    framework: "@storybook/react",
    staticDirs: ["../public"],
    webpackFinal: async (config, { configType }) => {
        const newConf = [
            ...config.module.rules.map(rule => {
                if (/svg/.test(rule.test) && /file-loader/.test(rule.loader)) {
                    return { ...rule, exclude: /\.svg$/i };
                } else {
                    return { ...rule };
                }
            })
        ];

        config.module.rules = [
            ...newConf,
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: path.resolve(__dirname, "../config/custom-loaders/classnames-loader.js")
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]::[local]:[hash:base64:3]"
                            }
                        }
                    },
                    { loader: "sass-loader" }
                ],
                include: path.resolve(__dirname, "../")
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-inline-loader"
                    }
                ]
            }
        ];
        return config;
    }
};

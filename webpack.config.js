const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        library: {
            type: "commonjs"
        }
    },
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    { loader: path.resolve(__dirname, "./config/custom-loaders/classnames-loader") },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]::[local][hash:base64:3]"
                            }
                        }
                    },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            insertInto: () => {
                                return document.querySelector("head");
                            }
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "ui_[name]__[local]_[hash:base64:3]",
                            camelCase: false
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                type: "asset/source"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", "..."]
    }
};

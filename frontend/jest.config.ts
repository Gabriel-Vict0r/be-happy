import type { Config } from 'jest';

const esModules = ['@react-leaflet', 'react-leaflet', 'leaflet/dist/'].join('|');
const config: Config = {
    verbose: true,
    transform: {
        "^.+\\.(t|j)sx?$": [
            "@swc/jest",
            {
                jsc: {
                    parser: {
                        syntax: "typescript",
                        tsx: true,
                        decorators: true,
                    },
                    keepClassNames: true,
                    transform: {
                        legacyDecorator: true,
                        decoratorMetadata: true,
                        react: {
                            runtime: "automatic",
                        },
                    },
                },
                module: {
                    type: "es2022",
                    noInterop: false,
                },
            },
        ],
    },
    setupFilesAfterEnv: [
        '<rootDir>/src/__tests__/setup.ts'
    ],
    transformIgnorePatterns: [
        `/node_modules/(?!${esModules})`
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    // moduleNameMapper: {
    //     "react-leaflet": "<rootDir>/src/__test__/mocks/reactLeafletMock.jsx"
    // }
};

export default config;
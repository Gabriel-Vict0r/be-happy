import type { Config } from 'jest';

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
        "node_modules/!leaflet"
    ]
};

export default config;
module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    '@styles': './src/styles',
                    '@components': './src/components',
                    '@views': './src/views',
                    '@utils': './src/utils',
                    '@domain': './src/domain',
                    '@localization': './src/localization',
                    '@integration': './src/integration',
                    '@navigation': './src/navigation',
                },
            },
        ],
    ],
};

const presets = [
    [
        '@babel/preset-env',
        {
            modules: false,
            "targets": {
                "chrome": "45"
            }
        }

    ]
];
const plugins = [
    "@babel/plugin-proposal-object-rest-spread",
    [
        '@babel/plugin-transform-runtime',
         {
                corejs: {
                    version: 3,
                    proposals: true
                }
            }

    ]
];
module.exports = {plugins, presets};

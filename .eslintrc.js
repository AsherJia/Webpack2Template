module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
        'semi': 0,
        'indent': ['error', 4],
        'comma-dangle': 0,
        'jsx-quotes':["error", "prefer-single"],
        'react/jsx-indent': ['error', 4],
        "react/prefer-stateless-function": [0]
    }
};

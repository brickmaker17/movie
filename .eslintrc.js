module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
      ],
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        }
      },
    // "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
        "indent": ["error", 4],
        "react/prefer-stateless-function": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "hrefLeft", "hrefRight", "to", ],
            "aspects": [ "invalidHref", "preferButton" ]
          }],
        "max-len": ["error", { "code": 300, "tabWidth": 4 }],
        "react/self-closing-comp": ["error", {
            "component": true,
            "html": true
          }],
        "eol-last": 0,
        // "semi": 0
        

    }
};
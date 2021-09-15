/*
Happy linting! 💖
*/
module.exports = {
  "root": true,
  "settings": {
    "import/resolver": {
      "alias": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    //"plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jsdoc/recommended",
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/warnings',
    'plugin:regexp/recommended',
    'plugin:total-functions/recommended',
    'plugin:etc/recommended',
    //'plugin:prettier/recommended',
    //'prettier'
    //"plugin:functional/external-recommended",
    //"plugin:functional/recommended",
    "plugin:functional/stylitic",
    "plugin:fp-ts/all",
    "plugin:rxjs/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "debugLevel": false,
    "project": "./tsconfig.json",
    "sourceType": "module",
    "warnOnUnsupportedTypeScriptVersion": false,
  },
  "plugins": [
    "fp-ts",
    "functional",
    "eslint-plugin-unicorn",
    "eslint-plugin-import",
    "eslint-plugin-prefer-arrow",
    "@angular-eslint/eslint-plugin",
    "eslint-plugin-jsdoc",
    "@typescript-eslint",
    "total-functions",
    "eslint-plugin-jest",
    "sonarjs",
    "jsdoc",
    "require-jsdoc-except",
    "jest"
  ],
  "rules": {
    "require-jsdoc-except/require-jsdoc": [1, {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": false,
        "ArrowFunctionExpression": true,
        "FunctionExpression": true
      },
      "ignore": ["constructor"],
    }],
    "@angular-eslint/component-selector": "off",
    "@angular-eslint/no-output-on-prefix": "off",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": ["error", {
      "default": "generic"
    }],
    "init-declarations": "error",
    "@typescript-eslint/init-declarations": ["error"],
    "@typescript-eslint/no-unsafe-return": ["error"],

    "@typescript-eslint/no-magic-numbers": ["error", {
      "ignoreEnums": true,
      "ignoreNumericLiteralTypes": true
    }],
    "unicorn/prevent-abbreviations": [
      "error",
      {
        "replacements": {
          "e": {
            "event": false
          },
          "res": false,
          "arg": false,
          "cmd": {
            "command": true
          },
          "errCb": {
            "handleError": true
          }
        }
      }
    ],
    "unicorn/no-array-for-each": "off",
    "unicorn/catch-error-name": "error",
    "unicorn/empty-brace-spaces": "error",
    "unicorn/custom-error-definition": "error",
    "unicorn/error-message": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/expiring-todo-comments": "error",
    "unicorn/consistent-function-scoping": "error",
    "unicorn/filename-case": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/prefer-type-error": "error",

    "unicorn/prefer-switch": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-default-parameters": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/import-style": "error",
    "unicorn/import-index": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/typedef": ["error", {
      "call-signature": true,
      "arrayDestructuring": true,
      "arrowParameter": true,
      "memberVariableDeclaration": true,
      "objectDestructuring": true,
      "parameter": true,
      "propertyDeclaration": true,
      "variableDeclaration": true,
      "variableDeclarationIgnoreFunction": true,
    }],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/brace-style": ["error"],
    "@typescript-eslint/method-signature-style": ["error"],
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "Object": {
            "message": "Avoid using the `Object` type. Did you mean `object`?"
          },
          "Function": {
            "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
          },
          "Boolean": {
            "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
          },
          "Number": {
            "message": "Avoid using the `Number` type. Did you mean `number`?"
          },
          "String": {
            "message": "Avoid using the `String` type. Did you mean `string`?"
          },
          "Symbol": {
            "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
          }
        }
      }
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "no-public"
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {"selector": "variableLike", "format": ["camelCase"]},
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "prefix": ["I"]
      },
      {
        "selector": "variable",
        "modifiers": ["const"],
        "format": ["UPPER_CASE", "PascalCase", "camelCase"]
      },
      {
        "selector": "variable",
        "modifiers": ["exported"],
        "format": ["UPPER_CASE", "PascalCase", "camelCase"]
      },
      /*{
        "selector": "typeParameter",
        "format": ["PascalCase"],
        "prefix": ["Type", "T"]
      },*/
      {
        "selector": "variable",
        "types": ["boolean"],
        "format": ["PascalCase", "UPPER_CASE"],
        "prefix": ["is", "should", "has", "can", "did", "will", "IS_", "SHOULD_", "HAS_", "CAN_", "DID_", "WILL_"]
      },
      {
        "selector": "enum",
        "format": ["UPPER_CASE", "PascalCase"],
        "prefix": ["E"]
      }
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",

    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "@typescript-eslint/semi": [
      "error",
      "never"
    ],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        "path": "always",
        "types": "prefer-import",
        "lib": "always"
      }
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "arrow-parens": [
      "off",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs"
    ],
    "comma-dangle": "off",
    "complexity": "off",
    "constructor-super": "error",
    "curly": "off",
    "etc/no-misused-generics": "warn",
    "etc/no-t": "warn",
    "etc/throw-error": "error",

    "rxjs/finnish": "error",
    "rxjs/no-ignored-error": "warn",
    "rxjs/no-ignored-observable": "error",
    "default-case": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "off",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "import/no-deprecated": "off",
    "import/order": "off",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/newline-after-description": "error",
    "jsdoc/no-types": "off",
    "max-classes-per-file": "off",
    "max-len": [
      "error",
      {
        "code": 140
      }
    ],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "log",
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-empty": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "varsIgnorePattern": "[IET]\\w+"
      }],

    "no-unused-vars": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-magic-numbers": "off",
    "no-multiple-empty-lines": "off",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-imports": [
      "error",
      "rxjs/Rx"
    ],
    "no-return-await": "error",
    "no-shadow": [
      "off",
      {
        "hoist": "all"
      }
    ],
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      }
    ],
    "prefer-arrow/prefer-arrow-functions": "off",
    "prefer-const": "off",
    "prefer-template": "error",
    "quote-props": [
      "error",
      "as-needed"
    ],
    "radix": "error",
    "space-before-function-paren": [
      "error",
      "always"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/"
        ]
      }
    ],

    "use-isnan": "error",
    "valid-typeof": "off",
    "functional/no-class": "off",
    "functional/prefer-readonly-type": "off",

  }
};

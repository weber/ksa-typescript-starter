"use strict";
exports.__esModule = true;
exports.IS_PROD = exports.IS_DEV = void 0;
/** * @internal */
exports.IS_DEV = process.env.NODE_ENV === 'development';
/** * @internal */
exports.IS_PROD = process.env.NODE_ENV === 'production';

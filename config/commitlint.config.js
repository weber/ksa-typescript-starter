/**
 * @type {import('@commitlint/core').Config}
 */
const config = {
	// extend: ['@commitlint/config-conventional'],

	rules: {
		'header-max-length': [0, 'always', 200]
	}
};


module.exports = config;

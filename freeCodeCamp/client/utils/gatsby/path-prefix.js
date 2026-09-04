const envData = require('../../config/env.json');

const { clientLocale } = envData;

// Path prefix is intentionally empty — the site is served from the root
// domain (e.g. https://ucimo.net/). The file and the export are preserved so
// that locale-based prefixing can be re-enabled later if needed.
exports.pathPrefix = '';

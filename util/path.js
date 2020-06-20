const path = require('path');

https://nodejs.org/api/modules.html#modules_accessing_the_main_module
module.exports = path.dirname(require.main.filename)
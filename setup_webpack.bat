
: initial setup ========================================================================================================

: install webpack
npm install --save-dev webpack

: install the 'lodsash' library locally
npm install --save lodash


: run webpack module bundler ===========================================================================================
.\node_modules\.bin\webpack .\src\index.js .\dist\bundle.js

: run webpack module bundler using alternate webpack config file =======================================================
.\node_modules\.bin\webpack --config webpack.config.js

: run webpack module bundler via npm after adding "build": "webpack" to the 'scripts' section of package.json ==========
npm run build


: initial setup ========================================================================================================

: create new nodejs project - creates package.json (node package config)
npm init -y

: install 'typescript compiler'
npm install typescript --save-dev

: install 'nodejs typescript definitions'
npm install @types/node --save-dev

: create new typescript project - creates tsconfig.json (compiler option file)
node ./node_modules/typescript/lib/tsc --init


: live compile & run ===================================================================================================

: add 'ts-node' for live compile & run in node
npm install ts-node --save-dev

: add nodemon that invokes 'ts-node'
npm install nodemon --save-dev


: setup 'tsconfig.json' and 'package.json' for auto compilation ========================================================

: add "typeRoots" with value "node_modules/@types" to the TypeScript compiler options!

: add the 'scripts' tag to 'package.json' with entry: "build:live": "nodemon --exec .\\node_modules\\.bin\\ts-node -- .\\src\\index.ts"

: start npm and watch live execution of specified TypeScript file
npm start


: create a TypeScript module ===========================================================================================


: install an external TypeScript module ================================================================================

: install JS library
npm install fpsmeter

: install TS type definitions
npm install @types/fpsmeter

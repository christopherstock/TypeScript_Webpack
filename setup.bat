
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


: setup 'tsconfig.json' and 'package.json' for auto compilation ============================================================

: add "typeRoots" with value "node_modules/@types" to the TypeScript compiler options!

: add the 'scripts' tag to 'package.json'

: start npm and watch live compiling of specified TypeScript file
npm start




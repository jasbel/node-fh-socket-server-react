# Socket Server

Este backend contiene todo lo necesario para configurar un servidor de express + socket.io.

Cualquier conexión adicional de sockets, se puede hacer en el archivo ```models/sockets.js``` y cualquier middleware adicional de express, se puede realizar en el archivo ```models/server.js``

# Implementar
"scripts": {
  "debug": "nodemon index.js",
  "build": "tsc -p .",
  "start": "ts-node src/index.ts"
},

// tsconfig.json

{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2020",
    "lib": ["ES2020"],
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true
  }
}
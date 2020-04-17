# VueVixens Day - La Magia del Testing

![La Magia del Testing](./images/testing-screenshot.png)

Creamos un buscador de películas del Estudio Ghibli interactivo usando JavaScript vanilla, CSS y HTML5 para aprender la importancia del testing.

El ejercicio consiste en desarrollar una web de búsqueda de películas del Estudio Ghibli, donde podemos filtrar por nombre y descripción y testearla. 

Al cargar, nuestra página debe conectarse a la API abierta de [películas de Ghibli](https://ghibliapi.herokuapp.com/). 

## Cómo Arrancar el proyecto

Primero instala todas las dependencias del `package.json` con el comando:
`$ npm install`

## Cómo lanzar los Test unitarios

Para arrancar los test lanzar el comando:

`$ npm run test`

para ver los cambios en los test de forma continua:

`$ npm run test:watch` 

para ver la cobertura de nuestros tests:

`$ npm run test:coverage`

para debuggear tus test usa la palabra `debugger` donde quieras poner un punto de interrupción y lanza los test con el comando:

`$ npm run test:debug`

Al lanzar este comando, se genera una carpeta `coverage/`, donde en la carpeta `lcov-report/` podemos abrir el archivo `index.html` usando la extensión de VSCode *Live Server* para ver la cobertura de nuestros test en el código.

## Cómo lanzar los test e2e

Para lanzar los test e2e utiliza el comando:
`$ npm run test:e2e`


## Configura tu propio proyecto con Jest y Cypress

### Instalación de Jest en tu proyecto (Test unitarios)

Documentación oficial: https://jestjs.io/docs/en/getting-started;

Instalar jest en tu proyecto:

`$ npm install --save-dev jest`

Añadir al `.gitignore` la carpeta `node_modules` y `coverage`:

```js
// Node Modules Folder
node_modules

// Visual Code Folder
.vscode

// Jest coverage
coverage
```

Añadir babel para transpilar el código ECMASCRIPT 6:

`$ npm install --dev babel-jest @babel/core @babel/preset-env`

Añadir un archivo de configuración de babel `.babelrc` en la raíz del repositorio:

```js
{
  "presets": [
    [
  "@babel/preset-env",
      {
  "targets": {
  "node": "current"
        }
      }
    ]
  ]
}
```

Configurar el `package.json` para utilizar comandos customizados para lanzar los test:

```js
"scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:debug": "node --inspect-brk node_modules/.bin/jest --runInBand",
    "test:coverage": "jest --collect-coverage",
    "test:e2e": "npx cypress open"
},
```

Añadir la librería [jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock#simple-mock-and-assert)
para manejar los fetch en los test:

`$ npm install --save-dev jest-fetch-mock`

Creamos un archivo de configuración `setupJest.js` en la raíz del repositorio:

```js
//setupJest.js or similar file
global.fetch = require('jest-fetch-mock')
```

Y añadimos al package.json la siguiente configuración:
```js
"jest": {
  "automock": false,
  "setupFiles": [
    "./setupJest.js"
  ]
}
```

## Instalación de Cypress en tu proyecto (Test e2e)

Documentación oficial: https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell;

Instalar cypress en tu proyecto:

` $ npm install cypress --save-dev`

## Authors

Made with :heart: by [Clara Dios](https://github.com/claradios) and [Patricia Suárez](https://github.com/patriciaSR)

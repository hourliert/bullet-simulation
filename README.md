# bullet-simulation
[![Build Status][travis-badge]][travis-link]
[![codecov.io][codecov-badge]][codecov-link]

This is a bullet game simulation. The user can click anywhere in the page to launch a bullet.
It has a random velocity and a random angle and follow a random trajectory.
When this bullet hits a border, a popup with some of its information is shown.

## Getting started

```
npm install
npm start
# go to http://localhost:8080 after a few seconds
```

## Tasks
* `npm run build`: bundle the application. The bundle is in the `./build` folder
* `npm run doc`: generate the documentation of the app. The doc is in the `./docs` folder
* `npm run lint`: lint the code
* `npm start`: start a dev server with live-reload. Go to `http://localhost:8080` to view the app
* `npm test`: run all tests with coverage report
* `npm run tdd`: run tests in watch mode

## FAQ
### All tests are passing but the coverage is not at 100%
Be sure to install correctly [canvas](https://www.npmjs.com/package/canvas) in the project root folder.
This library is used when running renderer unit tests. If this library is not installed. 
These tests will be empty.

[travis-badge]: https://travis-ci.org/hourliert/bullet-simulation.svg?branch=master
[travis-link]: https://travis-ci.org/hourliert/bullet-simulation
[codecov-badge]: https://codecov.io/github/hourliert/bullet-simulation/coverage.svg?branch=master
[codecov-link]: https://codecov.io/github/hourliert/bullet-simulation?branch=master

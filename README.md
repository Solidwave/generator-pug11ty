# generator-pug11ty 
<!-- [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] -->
> A static site boilerplate generator. 11ty, pug html

## Installation

First, install [Yeoman](http://yeoman.io) and generator-pug11ty using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-pug11ty
```

Then generate your new project:

```bash
yo pug11ty
```

## Getting started

cd to the generated project folder and run:

`npm run dev.all`

site will be available on localhost:8080
## Folder structure

### _components
Here you should put your pug mixins

### _data
Here you should put your static data eg site informations. JSON and JS format are supported


```json
{
  "title": "Your site"
}
```

```js
module.exports = {
  title: "Your site"
}
```

### _layouts

Here you should put your layouts

### assets

JS and css

### images

Here you should put your images

### pages

This is were you put the pages of your site. The site will mirror the structure of this directory.

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Solidwave]()


[npm-image]: https://badge.fury.io/js/generator-pug11ty.svg
[npm-url]: https://npmjs.org/package/generator-pug11ty
[travis-image]: https://travis-ci.com/Solidwave/generator-pug11ty.svg?branch=master
[travis-url]: https://travis-ci.com/Solidwave/generator-pug11ty
[daviddm-image]: https://david-dm.org/Solidwave/generator-pug11ty.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Solidwave/generator-pug11ty
[coveralls-image]: https://coveralls.io/repos/Solidwave/generator-pug11ty/badge.svg
[coveralls-url]: https://coveralls.io/r/Solidwave/generator-pug11ty

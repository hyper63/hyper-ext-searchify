<h1 align="center">⚡️ hyper-ext-searchify ⚡️</h1>
<p align="center">A hyper-connect extension that merges the data api and search api</p>
<p align="center">🔍 + 💾 = 🕵️</p>

---

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [CODE OF CONDUCT](#code-of-conduct)
- [LICENSE](#license)
- [CONTRIBUTING](#contributing)
- [ABOUT](#about)

---

## Description

The data API for hyper can add, get, update, remove documents and the search API can add, update, and remove search documents. Often times you want to combine these two services to make one call to both services, this extension,
allows you to do that.

- hyper.ext.searchify.add - (adds doc to data and search service)
- hyper.ext.searchify.get - (returns doc from data service)
- hyper.ext.searchify.update - (updates doc from data and search service)
- hyper.ext.searchify.remove - (removes doc from data and search service)


## Install

### NodeJS

```sh
npm install hyper-connect
npm install hyper-ext-searchify
```

## Deno (using import-map)

```json
{
  "imports": {
    "hyper-connect": "https://x.nest.land/hyper-connect@VERSION/deno/mod.ts",
    "hyper-ext-searchify": "https://x.nest.land/hyper-ext-searchify@VERSION/deno/mod.ts"
  }
}
```

```sh
deno cache --import-map import_map.json mod.ts
```

---

## Usage

```js
import { connect } from 'hyper-connect'
import { counter } from 'hyper-ext-searchify'

// create HYPER=[connection string] env variable
const hyper = searchify(connect(process.env.HYPER))

// increment counter
console.log(await hyper.ext.searchify.add(...))
// get current count
console.log(await hyper.ext.searchify.get(...))
// decrement counter
console.log(await hyper.ext.searchify.update(...))
// reset to zero
console.log(await hyper.ext.searchify.remove(...))
```

## API

> All functions are promises and take a single argument of string and return Promise<Number> | Promise<Error>
>
> (key: string) => Promise<Number> | Promise<Error>

| command | description | example |
| ------- | ----------- | ------- |
| add     | adds document to both data and search | `hyper.ext.searchify.add({...})` |
| get     | gets document from data | `hyper.ext.searchify.get(id)`  |
| update  | updates document on both data and search | `hyper.ext.searchify.update(id, {...})` |
| remove  | removes document on both data and search | `hyper.ext.searchify.remove(id)` |

## Code of Conduct

SEE [CODE_OF_CONDUCT](/CODE_OF_CONDUCT)

## License

SEE [LICENSE](/LICENSE)

## Contributing

All bug reports and pull requests are welcome that are focused on improving the current scope of this project.

## About

⚡️ hyper-ext-searchify is an extension module for hyper-connect a client library for the ⚡️ hyper service. To learn more about ⚡️ hyper go to https://hyper.io 



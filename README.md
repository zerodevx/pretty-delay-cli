# pretty-delay-cli

> Delay execution for a given amount of seconds, but prettily

![pretty-delay-cli demo](https://user-images.githubusercontent.com/9677698/72782159-0c596900-3c5e-11ea-9697-45d116816102.gif)

Cross-platform countdown timer - similar to the \*nix
[`sleep`](<https://en.wikipedia.org/wiki/Sleep_(Unix)>) command - but with pretty ascii-art.
Originally a fork of [`delay-cli`](https://github.com/sindresorhus/delay-cli), but now rewritten.

## Install

```
$ npm install pretty-delay-cli
```

## Usage

```
Usage
$ delay <seconds>

Example
$ delay 4.3 && echo 🦄
```

### Programmatic usage

#### ESM

```js
import delay from 'pretty-delay-cli'

(async () => {
  await delay(4.3) // delay for 4.3 seconds
  ...
})()
```

#### CJS

```js
// CJS
const delay = require('pretty-delay-cli')

delay(4.3).then(() => { // delay for 4.3 seconds
  ...
})
```

## Fancy-fonts

```
  ▄▄▄▄▄▄▄▄▄     ▄▄▄▄      ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄
 ▐░░░░░░░░░▌  ▄█░░░░▌    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌
▐░█░█▀▀▀▀▀█░▌▐░░▌▐░░▌     ▀▀▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌
▐░▌▐░▌    ▐░▌ ▀▀ ▐░░▌              ▐░▌          ▐░▌▐░▌       ▐░▌
▐░▌ ▐░▌   ▐░▌    ▐░░▌              ▐░▌ ▄▄▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌
▐░▌  ▐░▌  ▐░▌    ▐░░▌     ▄▄▄▄▄▄▄▄▄█░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░▌   ▐░▌ ▐░▌    ▐░░▌    ▐░░░░░░░░░░░▌ ▀▀▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀█░▌
▐░▌    ▐░▌▐░▌    ▐░░▌    ▐░█▀▀▀▀▀▀▀▀▀           ▐░▌          ▐░▌
▐░█▄▄▄▄▄█░█░▌▄▄▄▄█░░█▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌          ▐░▌
 ▐░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌          ▐░▌
  ▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀            ▀
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌
▐░█▄▄▄▄▄▄▄▄▄ ▐░▌                   ▐░▌ ▐░▌       ▐░▌▐░▌       ▐░▌
▐░░░░░░░░░░░▌▐░█▄▄▄▄▄▄▄▄▄         ▐░▌  ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌
 ▀▀▀▀▀▀▀▀▀█░▌▐░░░░░░░░░░░▌       ▐░▌    ▐░░░░░░░░░▌ ▐░░░░░░░░░░░▌
          ▐░▌▐░█▀▀▀▀▀▀▀█░▌      ▐░▌    ▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀█░▌
          ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌          ▐░▌
 ▄▄▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌    ▐░▌      ▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄▄▄▄▄▄█░▌
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌   ▐░▌       ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀     ▀         ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀
```

## Development

Standard Github
[contribution workflow](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)
applies.

### Format, lint and test

```
$ npm run test
```

## License

ISC

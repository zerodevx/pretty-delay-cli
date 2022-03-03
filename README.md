# pretty-delay-cli

> Delay execution for a given amount of seconds, but prettily.

![pretty-delay-cli demo](https://user-images.githubusercontent.com/9677698/72782159-0c596900-3c5e-11ea-9697-45d116816102.gif)

Cross-platform countdown timer - similar to the \*nix
[`sleep`](<https://en.wikipedia.org/wiki/Sleep_(Unix)>) command - but with pretty ascii-art.
Originally a fork of [`delay-cli`](https://github.com/sindresorhus/delay-cli), but rewritten to be
ESM-only with zero dependencies.

## Install

```
$ npm i -g pretty-delay-cli
```

## Usage

```
  Usage
  $ delay <seconds>

  Example
  $ delay 4.3 && echo 🦄
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

Standard Github [contribution workflow](https://github.com/firstcontributions/first-contributions)
applies.

### Lint, format and test

```
$ npm run test
```

## License

ISC

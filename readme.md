# pretty-delay-cli

> Delay execution for a given amount of seconds, but prettily.

![pretty-delay-cli demo](https://user-images.githubusercontent.com/9677698/72782159-0c596900-3c5e-11ea-9697-45d116816102.gif)

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

Similar to the [`sleep`](https://en.wikipedia.org/wiki/Sleep_(Unix)) command, but cross-platform, and also cool.

This is basically a fork of [@sindresorhus' delay-cli](https://www.npmjs.com/package/delay-cli) with countdown ascii-art added.


## Install

`$ npm i -g pretty-delay-cli`


## Usage

```
  Usage
  $ delay <seconds>

  Example
  $ delay 4.3 && echo 🦄
```


## Test

`$ npm run test`


## Related

- [delay](https://github.com/sindresorhus/delay) - API for this module


## License

MIT


## Changelog

**v1.0.1 - 2020-01-21**
* Add another line-break when starting.

**v1.0.0 - 2020-01-20**
* BREAKING: All flags are DEPRECATED, because things shouldn't be so complicated.
* Display countdown using pretty ascii-art instead.
* Fixed tests.

**v0.1.0 - 2019-08-13**
* Initial fork and release.

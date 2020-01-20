# pretty-delay-cli

> Delay execution for a given amount of seconds, but prettily.

![pretty-delay-cli demo](https://user-images.githubusercontent.com/9677698/72748890-74bf3080-3bf3-11ea-8c6a-1f388a10c2dc.gif)

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

**v1.0.0 - 2020-01-20**
* BREAKING: All flags are DEPRECATED, because things shouldn't be so complicated.
* Display countdown using pretty ascii-art instead.
* Fixed tests.

**v0.1.0 - 2019-08-13:**
* Initial fork and release.

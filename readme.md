# phone-number-generator

> Generate random phone number


## Install

```console
$ npm install @guntur/phone-number-generator
```


## Usage

```js
const phoneNumberGenerator = require('phone-number-generator');

const results = phoneNumberGenerator({
    provider: '+62800',
    hlr: '1234',
    start: '0000',
    end: '0100',
    delimiter: '-'
});

console.log(results);
/*
[
    '+62800-1234-0000',
    '+62800-1234-0001',
    ...
    '+62800-1234-0099',
    '+62800-1234-0100'
]
*/
```


## API

### phoneNumberGenerator(`options: object`)

- Params:
  - options: `<object>`
- Returns: `<string[]>` - An array of string.

#### options

- provider - Phone number provider.
  - Types: `<string>`
  - Default: `0000`


- hlr - Phone number HLR.
  - Types: `<string>`
  - Default: `0000`

- start - Phone number to start from.
  - Types: `<string>`
  - Default: `0000`


- end - Phone number to end from.
  - Types: `<string>`
  - Default: `9999`

- delimiter - Phone number delimiter.
  - Types: `<string>`
  - Default: `''`


## License

MIT © [Guntur Poetra](https://github.com/iguntur)

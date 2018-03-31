# Kodify Technical Test

Begin - Sat 31st March 14:40

## Getting setup

You will need node + nvm in order to get setup.
To get setup, run:

```
nvm use && npm i
```

## Using the converter

You can include `converter.js` in your own code, and call it as shown:

```
const romanNumber = require('./converter')

const conversion1 = romanNumber(1) // returns object with `toString` and `toInt` functions
console.log(conversion1.toString()) // returns `I`
console.log(conversion1.toInt()) // returns `1`
```

## Tests

The tests are written with mocha and use Chai for assertions.
To run the tests, run:

 ```
 npm test
 ```

 End - Sat 31st March 16:45

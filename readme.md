Requires [Sweet.js](https://sweetjs.org/).

BDD Macros for Sweet.js

```javascript
describe "Sweet.js" {
    beforeEach {
        console.log(/* newline */);
    }

    afterEach {
        console.log('Test complete');
    }

    it "rocks!" {
        return true;
    }
}

describe "async sweet.js" {
    beforeEach (done) {
        done();
    }

    afterEach (done) {
        done();
    }

    it "does async" (done) {
        done();
    }
}
```

Instantly make your tests more readable today!

## Installation and Usage

```shell
npm install sweet-bdd
```

Update your tests and remove all those uneeded parenthesis, semicolons, and function keywords.

```shell
sjs -m sweet-bdd -o test/filename.js test-src/filename.sjs
```

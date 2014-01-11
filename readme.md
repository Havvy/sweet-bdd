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
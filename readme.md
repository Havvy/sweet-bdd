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

See examples.sjs for more examples.

## Installation and Usage

```shell
npm install sweet-bdd
```

Update your tests and remove all those uneeded parenthesis, semicolons, and function keywords.

```shell
sjs -m sweet-bdd -o test/filename.js test-src/filename.sjs
```

Note: Using a build system such as Gulp or Grunt can make using Sweet.js much easier.

## Exclusive and Inclusive Tests and Suits

You can use Mocha's [exclusive](http://mochajs.org/#exclusive-tests) and
[inclusive](http://mochajs.org/#inclusive-tests) features by putting either
`skip` or `only` before the name of a test or suite.

```javascript
describe only "Only this suite will be ran" {
    it skip "but this test will not" {
        return false;
    }

    it "and this tell will run" {
        return true;
    }
}
```

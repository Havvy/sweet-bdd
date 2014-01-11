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
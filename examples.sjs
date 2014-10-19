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

describe skip "skipped suite" {
    it "should not run" {
        return false;
    }
}

describe "skipped tests" {
    it skip "should not run either" {
        return false;
    }

    it skip "should not run, and can take a done parameter" (done) {
        done();
    }
}

describe "the only flag for only running a specific suite or test" {
    it only "only test that should be ran" {
        return true;
    }

    describe only "running this suite" {
        it only "can also take a done parameter" (done) {
            done();
        }
    }
}
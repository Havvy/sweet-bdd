let describe = macro {
    // describe { ... }
    rule { $name:lit { $body ... } } => {
        describe($name, function () {
            $body ...
        });
    }

    // describe skip { ... }
    rule { skip $name:lit { $body ... } } => {
        describe.skip($name, function () {
            $body ...
        });
    }

    // describe only { ... }
    rule { only $name:lit { $body ... } } => {
        describe.only($name, function () {
            $body ...
        });
    }
}

let it = macro {
    // it "does something" { ... }
    rule { $name:lit { $body ... } } => {
        it($name, function () {
            $body ...
        });
    }

    // it "done something async" (done) { ... }
    rule { $name:lit ( $done:ident ) { $body ... } } => {
        it($name, function ($done) {
            $body ...
        });
    }

    // it skip "is skipped" { ... }
    rule { skip $name:lit { $body ... } } => {
        it.skip($name, function () {
            $body ...
        });
    }

    // it skip "is skipped, async" { ... }
    rule { skip $name:lit ( $done:ident ) { $body ... } } => {
        it.skip($name, function ($done) {
            $body ...
        });
    }

    // it only "is only ran" { ... }
    rule { only $name:lit { $body ... } } => {
        it.only($name, function () {
            $body ...
        });
    }

    // it only "is only ran, async" { ... }
    rule { only $name:lit ( $done:ident ) { $body ... } } => {
        it.only($name, function ($done) {
            $body ...
        });
    }
}

let beforeEach = macro {
    rule { { $body ... } } => {
        beforeEach(function () {
            $body ...
        });
    }

    rule { ( $done:ident ) { $body ... } } => {
        beforeEach(function ($done) {
            $body ...
        });
    }
}

let afterEach = macro {
    rule { { $body ... } } => {
        afterEach(function () {
            $body ...
        });
    }

    rule { ( $done:ident ) { $body ... } } => {
        afterEach(function ($done) {
            $body ...
        });
    }
}

export describe;
export it;
export beforeEach;
export afterEach;
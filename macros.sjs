let describe = macro {
    rule { $name:lit { $body ... } } => {
        describe($name, function () {
            $body ...
        });
    }
}

let it = macro {
    rule { $name:lit { $body ... } } => {
        it($name, function () {
            $body ...
        });
    }

    rule { $name:lit ( $done:ident ) { $body ... } } => {
        it($name, function ($done) {
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
var test = require('tape');

test('before', function (t) {
    t.plan(1);
    t.notOk(process.env.FOO, 'FOO should not be defined');
});

test('after', function (t) {
    require('..')
    t.plan(1);
    t.equal(process.env.FOO, 'http://example.com');
});
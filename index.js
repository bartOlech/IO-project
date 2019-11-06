const foo2 = require('./components/component2');
const foo1 = require('./components/component1');
const internalFoo = require('./components/InternalComponents/component');

const foo = () => {
    foo2();
    foo1();
    internalFoo();
}

foo();
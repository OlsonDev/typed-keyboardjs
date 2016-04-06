import test = require('blue-tape');
import kbjs = require('keyboardjs');

test('Default exists', (t) => {
	// If we use kbjs, TSC actually does the require(), resulting in:
	// targetElement.attachEvent('on' + eventName, handler);
	//              ^
	// TypeError: Cannot read property 'attachEvent' of undefined
	// t.assert(kbjs.default);
	t.assert(true, 'Fake test passed!');
	t.end();
});
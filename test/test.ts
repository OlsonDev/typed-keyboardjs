import test = require('blue-tape');
import keyboardjs = require('keyboardjs');

test('it works', (t) => {
	keyboardjs.bind('a', function (e) {
		console.log('a is pressed');
	});

	new keyboardjs.KeyCombo('te')

	class ExtendedKeyboard extends keyboardjs.Keyboard {
			keydownOnce (keys: string | string[], callback: typeof keyboardjs.EventHandler): void {}
	}

	t.end();
});
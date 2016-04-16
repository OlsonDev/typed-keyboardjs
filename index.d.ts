import { Locale } from './lib/locale';
import { KeyCombo } from './lib/key-combo';
import { Keyboard, KeyEvent, EventHandler } from './lib/keyboard';

declare class KeyboardJS extends Keyboard {
	Locale: typeof Locale;
	KeyCombo: typeof KeyCombo;
	Keyboard: typeof Keyboard;
	KeyEvent: KeyEvent;
	EventHandler: EventHandler;
}

declare var keyboardjs: KeyboardJS;

export = keyboardjs;

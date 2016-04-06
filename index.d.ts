import { Locale as ImportedLocale } from './lib/locale';
import { KeyCombo as ImportedKeyCombo } from './lib/key-combo';
import {
	Keyboard as ImportedKeyboard,
	KeyEvent as ImportedKeyEvent,
	EventHandler as ImportedEventHandler
} from './lib/keyboard';

declare module keyboardjs {
	class Locale extends ImportedLocale {}
	class KeyCombo extends ImportedKeyCombo {}
	class Keyboard extends ImportedKeyboard {}
	interface KeyEvent extends ImportedKeyEvent {}
	interface EventHandler extends ImportedEventHandler {}

	class Export {
		static Keyboard: typeof keyboardjs.Keyboard;
		static KeyCombo: typeof keyboardjs.KeyCombo;
		static Locale: typeof keyboardjs.Locale;
		static default: keyboardjs.Keyboard;
	}
}

export = keyboardjs.Export;
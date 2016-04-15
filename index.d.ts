import { Locale as ImportedLocale } from './lib/locale';
import { KeyCombo as ImportedKeyCombo } from './lib/key-combo';
import {
	Keyboard as ImportedKeyboard,
	KeyEvent as ImportedKeyEvent,
	EventHandler as ImportedEventHandler
} from './lib/keyboard';

export class Locale extends ImportedLocale {}
export class KeyCombo extends ImportedKeyCombo {}
export class Keyboard extends ImportedKeyboard {}
export interface KeyEvent extends ImportedKeyEvent {}
export interface EventHandler extends ImportedEventHandler {}

declare const out: Keyboard;
export default out;
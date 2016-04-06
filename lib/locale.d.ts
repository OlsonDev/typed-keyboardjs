declare namespace keyboardjs {
	export class Locale {
		localeName: string;
		pressedKeys: string[];
		bindKeyCode(keyCode: string, keyNames: string | string[]): void;
		bindMacro(keyComboStr: string, keyNames: string | string[]): void;
		getKeyCodes(keyName: string): string[];
		getKeyNames(keyCode: string): string[];
		setKillKey(keyCode: string): void;
		pressKey(keyCode: string): void;
		releaseKey(keyCode: string): void;
	}
}
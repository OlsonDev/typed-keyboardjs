declare namespace keyboardjs {
	export class KeyCombo {
		static sequenceDeliminator: string;
		static comboDeliminator: string;
		static keyDeliminator: string;
		static parseComboStr(keyComboStr: string): KeyCombo;
		constructor(keyComboStr: string);
		check(pressedKeyNames: string[]): boolean;
		isEqual(otherKeyCombo: KeyCombo): boolean;
	}
}
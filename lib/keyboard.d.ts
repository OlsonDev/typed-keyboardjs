import { Locale as ImportedLocale } from './locale';

export interface KeyEvent extends KeyboardEvent {
	preventRepeat(): void;
	pressedKeys: string;
}

export interface EventHandler {
	(e?: KeyEvent): any;
}

export class Keyboard {
	constructor(targetWindow: Window, targetElement: HTMLElement, platform: string, userAgent: string);
	setLocale(localeName: string, localeBuilder: ImportedLocale): void;
	getLocale(localeName: string): ImportedLocale;
	bind(keyComboStr: string | string[], pressHandler: EventHandler, releaseHandler?: EventHandler, preventRepeatByDefault?: boolean): void;
	addListener(keyComboStr: string | string[], pressHandler: EventHandler, releaseHandler?: EventHandler, preventRepeatByDefault?: boolean): void;
	on(keyComboStr: string | string[], pressHandler: EventHandler, releaseHandler?: EventHandler, preventRepeatByDefault?: boolean): void;
	unbind(keyComboStr: string | string[], pressHandler?: EventHandler, releaseHandler?: EventHandler): void;
	removeListener(keyComboStr: string | string[], pressHandler?: EventHandler, releaseHandler?: EventHandler): void;
	off(keyComboStr: string | string[], pressHandler?: EventHandler, releaseHandler?: EventHandler): void;
	setContext(contextName: string): void;
	getContext(): string;
	withContext(contextName: string, callback: () => void): void;
	watch(targetWindow: Window, targetElement: HTMLElement, targetPlatform: string, targetUserAgent: string): void;
	stop(): void;
	pressKey(keyCode: string, event: any): void;
	releaseKey(keyCode: string, event: any): void;
	releaseAllKeys(event: any): void;
	pause(): void;
	resume(): void;
	reset(): void;
}